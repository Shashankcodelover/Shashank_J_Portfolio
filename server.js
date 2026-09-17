const http = require('http');
const fs = require('fs');
const path = require('path');
const { fleetTopologyService } = require('./core/fleetTopologyService');

const PORT = process.env.PORT || 8080;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain; charset=UTF-8'
};

function sendJson(res, statusCode, data) {
  const json = JSON.stringify(data);
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Content-Length': Buffer.byteLength(json)
  });
  res.end(json);
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
      if (body.length > 5 * 1024 * 1024) {
        reject(new Error('Payload too large'));
      }
    });
    req.on('end', () => {
      if (!body) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch (e) {
        resolve({ raw: body });
      }
    });
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = parsedUrl.pathname;
  const method = req.method;

  // Handle preflight CORS
  if (method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    });
    return res.end();
  }

  // ── API ROUTES ──
  if (pathname.startsWith('/api/fleet/')) {
    try {
      // GET /api/fleet/overview
      if (method === 'GET' && pathname === '/api/fleet/overview') {
        return sendJson(res, 200, {
          success: true,
          platforms: fleetTopologyService.getPlatforms(),
          corridors: fleetTopologyService.getCorridors(),
          telemetry: fleetTopologyService.getTelemetry()
        });
      }

      // GET /api/fleet/telemetry
      if (method === 'GET' && pathname === '/api/fleet/telemetry') {
        return sendJson(res, 200, {
          success: true,
          telemetry: fleetTopologyService.getTelemetry()
        });
      }

      // GET /api/fleet/corridors
      if (method === 'GET' && pathname === '/api/fleet/corridors') {
        return sendJson(res, 200, {
          success: true,
          corridors: fleetTopologyService.getCorridors()
        });
      }

      // POST /api/fleet/corridors
      if (method === 'POST' && pathname === '/api/fleet/corridors') {
        const body = await parseBody(req);
        const corridor = fleetTopologyService.addCorridor(body);
        return sendJson(res, 201, {
          success: true,
          corridor,
          telemetry: fleetTopologyService.getTelemetry()
        });
      }

      // POST /api/fleet/corridors/:id/sever
      const severMatch = pathname.match(/^\/api\/fleet\/corridors\/([^/]+)\/sever$/);
      if (method === 'POST' && severMatch) {
        const id = decodeURIComponent(severMatch[1]);
        const corridor = fleetTopologyService.severCorridor(id);
        return sendJson(res, 200, {
          success: true,
          corridor,
          telemetry: fleetTopologyService.getTelemetry()
        });
      }

      // POST /api/fleet/corridors/:id/restore
      const restoreMatch = pathname.match(/^\/api\/fleet\/corridors\/([^/]+)\/restore$/);
      if (method === 'POST' && restoreMatch) {
        const id = decodeURIComponent(restoreMatch[1]);
        const corridor = fleetTopologyService.restoreCorridor(id);
        return sendJson(res, 200, {
          success: true,
          corridor,
          telemetry: fleetTopologyService.getTelemetry()
        });
      }

      // DELETE /api/fleet/corridors/:id
      const deleteCorrMatch = pathname.match(/^\/api\/fleet\/corridors\/([^/]+)$/);
      if (method === 'DELETE' && deleteCorrMatch) {
        const id = decodeURIComponent(deleteCorrMatch[1]);
        const result = fleetTopologyService.deleteCorridor(id);
        return sendJson(res, result.success ? 200 : 404, {
          ...result,
          telemetry: fleetTopologyService.getTelemetry()
        });
      }

      // GET /api/fleet/platforms
      if (method === 'GET' && pathname === '/api/fleet/platforms') {
        return sendJson(res, 200, {
          success: true,
          platforms: fleetTopologyService.getPlatforms()
        });
      }

      // POST /api/fleet/platforms
      if (method === 'POST' && pathname === '/api/fleet/platforms') {
        const body = await parseBody(req);
        const platform = fleetTopologyService.addPlatform(body);
        return sendJson(res, 201, {
          success: true,
          platform,
          telemetry: fleetTopologyService.getTelemetry()
        });
      }

      // DELETE /api/fleet/platforms/:id (Cascading Deletion)
      const deletePlatMatch = pathname.match(/^\/api\/fleet\/platforms\/([^/]+)$/);
      if (method === 'DELETE' && deletePlatMatch) {
        const id = decodeURIComponent(deletePlatMatch[1]);
        const result = fleetTopologyService.deletePlatform(id);
        return sendJson(res, result.success ? 200 : 404, {
          ...result,
          telemetry: fleetTopologyService.getTelemetry()
        });
      }

      // POST /api/fleet/ingest (Batch Ingestion)
      if (method === 'POST' && pathname === '/api/fleet/ingest') {
        const body = await parseBody(req);
        const type = body.type || 'corridors';
        const format = body.format || 'csv';
        const payload = typeof body.data === 'string' ? body.data : JSON.stringify(body.data || body.raw || '');
        const result = fleetTopologyService.ingestBatch(type, format, payload);
        return sendJson(res, 200, {
          success: true,
          ...result,
          telemetry: fleetTopologyService.getTelemetry()
        });
      }

      // POST /api/fleet/purge (Universal Purge)
      if (method === 'POST' && pathname === '/api/fleet/purge') {
        const body = await parseBody(req);
        const result = fleetTopologyService.universalPurge(body.confirmPhrase);
        return sendJson(res, 200, {
          ...result,
          telemetry: fleetTopologyService.getTelemetry()
        });
      }

      // POST /api/fleet/reset (Reset Topology)
      if (method === 'POST' && pathname === '/api/fleet/reset') {
        fleetTopologyService.resetTopology();
        return sendJson(res, 200, {
          success: true,
          message: 'Fleet topology reset to factory default (15 platforms, 8 corridors)',
          telemetry: fleetTopologyService.getTelemetry()
        });
      }

      return sendJson(res, 404, { success: false, error: 'Endpoint not found' });
    } catch (err) {
      return sendJson(res, 400, { success: false, error: err.message });
    }
  }

  // ── STATIC FILE SERVING ──
  let safePath = path.normalize(decodeURIComponent(pathname)).replace(/^(\.\.[/\\])+/, '');
  if (safePath === '/' || safePath === '\\') {
    safePath = '/index.html';
  }

  const filePath = path.join(ROOT_DIR, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // 404 Not Found fallback to index.html for SPA if needed
      const indexPath = path.join(ROOT_DIR, 'index.html');
      fs.readFile(indexPath, (readErr, content) => {
        if (readErr) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          return res.end('404 Not Found');
        }
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end(content);
      });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': stats.size,
      'Cache-Control': 'no-cache'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`[Shashank_J_Portfolio] Master Fleet Server running on http://localhost:${PORT}`);
});
