/**
 * fleetTopologyService.js
 * Master Fleet Relational Topology & Governance Engine
 * Manages 15 Governed Engineering Platforms & Cross-Fleet Interoperability Corridors
 * Provides: Cascading Deletions, Batch Ingestion (RFC 4180 CSV / Strict JSON),
 * Live Telemetry Computations, 1-Click Sever/Restore, and Universal Cascade Purge.
 */

const DEFAULT_PLATFORMS = [
  {
    id: 'NODE-NETPLUS',
    name: 'NetPlus CRM',
    tier: 'Enterprise Flagship',
    category: 'CRM / Pipeline',
    status: 'ACTIVE',
    sla: '99.99%',
    latency: 18,
    version: 'v2.5.0',
    stars: 48,
    deployUrl: 'https://netplus.shashankj.dev'
  },
  {
    id: 'NODE-LIFESTREAM',
    name: 'LifeStream V3',
    tier: 'Mission-Critical',
    category: 'HealthTech / Logistics',
    status: 'ACTIVE',
    sla: '99.999%',
    latency: 12,
    version: 'v3.2.0',
    stars: 62,
    deployUrl: 'https://lifestream.shashankj.dev'
  },
  {
    id: 'NODE-SMARTATTENDANCE',
    name: 'Smart Attendance System',
    tier: 'Enterprise Flagship',
    category: 'Biometric / Auth',
    status: 'ACTIVE',
    sla: '99.98%',
    latency: 15,
    version: 'v2.1.0',
    stars: 39,
    deployUrl: 'https://attendance.shashankj.dev'
  },
  {
    id: 'NODE-CLASHRESOLVER',
    name: 'Placement Clash Resolver',
    tier: 'Production',
    category: 'Constraint / Optimization',
    status: 'ACTIVE',
    sla: '99.95%',
    latency: 22,
    version: 'v1.8.0',
    stars: 31,
    deployUrl: 'https://clashresolver.shashankj.dev'
  },
  {
    id: 'NODE-CAMPUSSEARCH',
    name: 'Campus Search Engine',
    tier: 'Production',
    category: 'Vector / Retrieval',
    status: 'ACTIVE',
    sla: '99.96%',
    latency: 14,
    version: 'v2.0.0',
    stars: 27,
    deployUrl: 'https://campussearch.shashankj.dev'
  },
  {
    id: 'NODE-PHOENIX',
    name: 'Phoenix Interview Prep',
    tier: 'Enterprise Flagship',
    category: 'Cognitive / EdTech',
    status: 'ACTIVE',
    sla: '99.98%',
    latency: 19,
    version: 'v2.4.0',
    stars: 54,
    deployUrl: 'https://phoenixprep.shashankj.dev'
  },
  {
    id: 'NODE-DEVFLOWPRO',
    name: 'DevFlow Pro',
    tier: 'Enterprise Flagship',
    category: 'Multi-Agent Analytics',
    status: 'ACTIVE',
    sla: '99.99%',
    latency: 16,
    version: 'v3.0.1',
    stars: 58,
    deployUrl: 'https://devflowpro.shashankj.dev'
  },
  {
    id: 'NODE-FLARE',
    name: 'FLARE Geofencing System',
    tier: 'Mission-Critical',
    category: 'Disaster / Geofencing',
    status: 'ACTIVE',
    sla: '99.999%',
    latency: 11,
    version: 'v3.5.0',
    stars: 76,
    deployUrl: 'https://flare.shashankj.dev'
  },
  {
    id: 'NODE-ARCHITECTAI',
    name: 'ArchitectAI Studio',
    tier: 'Production',
    category: '3D Generative CAD',
    status: 'ACTIVE',
    sla: '99.94%',
    latency: 28,
    version: 'v1.9.0',
    stars: 43,
    deployUrl: 'https://architectai.shashankj.dev'
  },
  {
    id: 'NODE-CRIMSONSENTINEL',
    name: 'Crimson Sentinel AI',
    tier: 'Enterprise Flagship',
    category: 'Voice/Vision AI',
    status: 'ACTIVE',
    sla: '99.97%',
    latency: 20,
    version: 'v2.6.0',
    stars: 65,
    deployUrl: 'https://crimsonsentinel.shashankj.dev'
  },
  {
    id: 'NODE-NYAYANODE',
    name: 'NyayaNode',
    tier: 'Enterprise Flagship',
    category: 'LegalTech / Decentralized',
    status: 'ACTIVE',
    sla: '99.99%',
    latency: 17,
    version: 'v2.2.0',
    stars: 49,
    deployUrl: 'https://nyayanode.shashankj.dev'
  },
  {
    id: 'NODE-QUANTUMSHIELD',
    name: 'QuantumShield PQC',
    tier: 'Mission-Critical',
    category: 'PQC / Grid Security',
    status: 'ACTIVE',
    sla: '99.999%',
    latency: 9,
    version: 'v3.1.0',
    stars: 84,
    deployUrl: 'https://quantumshield.shashankj.dev'
  },
  {
    id: 'NODE-INFINEX',
    name: 'Infinex Learning Engine',
    tier: 'Production',
    category: 'Collegiate / LLM',
    status: 'ACTIVE',
    sla: '99.95%',
    latency: 21,
    version: 'v2.0.0',
    stars: 38,
    deployUrl: 'https://infinex.shashankj.dev'
  },
  {
    id: 'NODE-AEGIS',
    name: 'AEGIS Sharding Defense',
    tier: 'Mission-Critical',
    category: 'Zero-Trust Cybersecurity',
    status: 'ACTIVE',
    sla: '99.999%',
    latency: 10,
    version: 'v3.0.0',
    stars: 71,
    deployUrl: 'https://aegis.shashankj.dev'
  },
  {
    id: 'NODE-KANNADAOTT',
    name: 'KannadaOTT Finder',
    tier: 'Production',
    category: 'Streaming / Media',
    status: 'ACTIVE',
    sla: '99.96%',
    latency: 15,
    version: 'v2.3.0',
    stars: 45,
    deployUrl: 'https://kannadaott.shashankj.dev'
  }
];

const DEFAULT_CORRIDORS = [
  {
    id: 'CORR-01',
    source: 'NODE-NYAYANODE',
    target: 'NODE-QUANTUMSHIELD',
    protocol: 'PQC-Channel',
    bandwidth: '25 Gbps',
    latency: 9,
    status: 'CONNECTED',
    integrityScore: 0.999,
    description: 'Decentralized arbitration consensus secured via Kyber-1024 PQC vault'
  },
  {
    id: 'CORR-02',
    source: 'NODE-LIFESTREAM',
    target: 'NODE-FLARE',
    protocol: 'mTLS-gRPC',
    bandwidth: '10 Gbps',
    latency: 14,
    status: 'CONNECTED',
    integrityScore: 0.998,
    description: 'Autonomous blood drone dispatch coordinated across disaster geofence relays'
  },
  {
    id: 'CORR-03',
    source: 'NODE-CRIMSONSENTINEL',
    target: 'NODE-DEVFLOWPRO',
    protocol: 'WebSocket-Mesh',
    bandwidth: '10 Gbps',
    latency: 11,
    status: 'CONNECTED',
    integrityScore: 0.995,
    description: 'AI candidate evaluation streams piped directly into engineering talent analytics'
  },
  {
    id: 'CORR-04',
    source: 'NODE-AEGIS',
    target: 'NODE-NETPLUS',
    protocol: 'mTLS-gRPC',
    bandwidth: '25 Gbps',
    latency: 12,
    status: 'CONNECTED',
    integrityScore: 0.999,
    description: 'Zero-trust dual-channel sharded audit logs protecting customer CRM records'
  },
  {
    id: 'CORR-05',
    source: 'NODE-CAMPUSSEARCH',
    target: 'NODE-INFINEX',
    protocol: 'REST-Webhook',
    bandwidth: '5 Gbps',
    latency: 16,
    status: 'CONNECTED',
    integrityScore: 0.992,
    description: 'Collegiate vector index synchronized with autonomous study squads'
  },
  {
    id: 'CORR-06',
    source: 'NODE-KANNADAOTT',
    target: 'NODE-QUANTUMSHIELD',
    protocol: 'PQC-Channel',
    bandwidth: '40 Gbps',
    latency: 15,
    status: 'CONNECTED',
    integrityScore: 0.997,
    description: 'Digital rights and regional streaming DRM tokens protected by quantum-safe encryption'
  },
  {
    id: 'CORR-07',
    source: 'NODE-SMARTATTENDANCE',
    target: 'NODE-CLASHRESOLVER',
    protocol: 'mTLS-gRPC',
    bandwidth: '10 Gbps',
    latency: 10,
    status: 'CONNECTED',
    integrityScore: 0.994,
    description: 'Biometric student attendance feeds university placement scheduling matrix'
  },
  {
    id: 'CORR-08',
    source: 'NODE-ARCHITECTAI',
    target: 'NODE-PHOENIX',
    protocol: 'WebSocket-Mesh',
    bandwidth: '10 Gbps',
    latency: 18,
    status: 'CONNECTED',
    integrityScore: 0.991,
    description: 'Generative spatial CAD models rendered for technical engineering interview challenges'
  }
];

class FleetTopologyService {
  constructor() {
    this.platforms = new Map();
    this.corridors = new Map();
    this.resetTopology();
  }

  resetTopology() {
    this.platforms.clear();
    this.corridors.clear();

    for (const p of DEFAULT_PLATFORMS) {
      this.platforms.set(p.id, { ...p });
    }

    for (const c of DEFAULT_CORRIDORS) {
      this.corridors.set(c.id, { ...c });
    }
  }

  // ── PLATFORMS ──
  getPlatforms() {
    return Array.from(this.platforms.values());
  }

  getPlatform(id) {
    return this.platforms.get(id) || null;
  }

  addPlatform(data) {
    if (!data.id || !data.name) {
      throw new Error('Platform id and name are required');
    }
    const cleanId = String(data.id).trim().toUpperCase();
    if (this.platforms.has(cleanId)) {
      throw new Error(`Platform ${cleanId} already exists`);
    }
    const platform = {
      id: cleanId,
      name: String(data.name).trim(),
      tier: data.tier || 'Production',
      category: data.category || 'General Software',
      status: data.status || 'ACTIVE',
      sla: data.sla || '99.9%',
      latency: Number(data.latency) || 20,
      version: data.version || 'v1.0.0',
      stars: Number(data.stars) || 10,
      deployUrl: data.deployUrl || 'https://shashankj.dev'
    };
    this.platforms.set(cleanId, platform);
    return platform;
  }

  /**
   * CASCADING DELETION:
   * Deleting a platform node automatically drops all corridors where source or target matches.
   */
  deletePlatform(id) {
    const cleanId = String(id).trim().toUpperCase();
    if (!this.platforms.has(cleanId)) {
      return { success: false, error: `Platform ${cleanId} not found` };
    }

    const deletedPlatform = this.platforms.get(cleanId);
    this.platforms.delete(cleanId);

    // Drop all connected corridors
    const droppedCorridors = [];
    for (const [corrId, corr] of this.corridors.entries()) {
      if (corr.source === cleanId || corr.target === cleanId) {
        droppedCorridors.push({ ...corr });
        this.corridors.delete(corrId);
      }
    }

    return {
      success: true,
      deletedPlatform,
      droppedCorridors,
      droppedCount: droppedCorridors.length
    };
  }

  // ── CORRIDORS ──
  getCorridors() {
    return Array.from(this.corridors.values());
  }

  getCorridor(id) {
    return this.corridors.get(id) || null;
  }

  addCorridor(data) {
    if (!data.id || !data.source || !data.target) {
      throw new Error('Corridor id, source, and target are required');
    }
    const cleanId = String(data.id).trim().toUpperCase();
    const source = String(data.source).trim().toUpperCase();
    const target = String(data.target).trim().toUpperCase();

    if (this.corridors.has(cleanId)) {
      throw new Error(`Corridor ${cleanId} already exists`);
    }
    if (!this.platforms.has(source)) {
      throw new Error(`Source platform ${source} does not exist in fleet`);
    }
    if (!this.platforms.has(target)) {
      throw new Error(`Target platform ${target} does not exist in fleet`);
    }
    if (source === target) {
      throw new Error('Corridor source and target cannot be the same platform');
    }

    const corridor = {
      id: cleanId,
      source,
      target,
      protocol: data.protocol || 'mTLS-gRPC',
      bandwidth: data.bandwidth || '10 Gbps',
      latency: Number(data.latency) || 15,
      status: data.status || 'CONNECTED',
      integrityScore: Number(data.integrityScore) || 0.995,
      description: data.description || `Interoperability channel ${source} <-> ${target}`
    };

    this.corridors.set(cleanId, corridor);
    return corridor;
  }

  severCorridor(id) {
    const cleanId = String(id).trim().toUpperCase();
    const corridor = this.corridors.get(cleanId);
    if (!corridor) {
      throw new Error(`Corridor ${cleanId} not found`);
    }
    corridor.status = 'SEVERED';
    corridor.integrityScore = 0.0;
    return corridor;
  }

  restoreCorridor(id) {
    const cleanId = String(id).trim().toUpperCase();
    const corridor = this.corridors.get(cleanId);
    if (!corridor) {
      throw new Error(`Corridor ${cleanId} not found`);
    }
    corridor.status = 'CONNECTED';
    corridor.integrityScore = 0.995;
    return corridor;
  }

  deleteCorridor(id) {
    const cleanId = String(id).trim().toUpperCase();
    const corridor = this.corridors.get(cleanId);
    if (!corridor) {
      return { success: false, error: `Corridor ${cleanId} not found` };
    }
    this.corridors.delete(cleanId);
    return { success: true, deletedCorridor: corridor };
  }

  // ── TELEMETRY ──
  getTelemetry() {
    const totalCorridors = this.corridors.size;
    let connectedCorridors = 0;
    let totalLatency = 0;
    let totalIntegrity = 0;

    for (const c of this.corridors.values()) {
      if (c.status === 'CONNECTED') {
        connectedCorridors++;
        totalIntegrity += (c.integrityScore || 0.99);
      }
      totalLatency += (c.latency || 15);
    }

    const avgLatency = totalCorridors > 0 ? Math.round(totalLatency / totalCorridors) : 0;
    const avgIntegrity = totalCorridors > 0 ? (totalIntegrity / totalCorridors) * 100 : 100;

    let totalStars = 0;
    for (const p of this.platforms.values()) {
      totalStars += (p.stars || 0);
    }

    return {
      governedPlatforms: this.platforms.size,
      activeCorridors: connectedCorridors,
      totalCorridors: totalCorridors,
      fleetSecurityIntegrity: parseFloat(avgIntegrity.toFixed(1)),
      crossFleetLatencySLA: `${avgLatency}ms (Sub-25ms SLA)`,
      totalStarsAndDeployments: `${totalStars}+ Stars across ${this.platforms.size} Live Deployments`,
      systemHealth: connectedCorridors === totalCorridors && totalCorridors > 0 ? 'OPTIMAL' : 'ATTENTION_REQUIRED'
    };
  }

  // ── BATCH INGESTION (RFC 4180 CSV / STRICT JSON) ──
  parseRFC4180CSV(csvText) {
    const lines = [];
    let currentLine = [];
    let currentField = '';
    let inQuotes = false;

    for (let i = 0; i < csvText.length; i++) {
      const char = csvText[i];
      const nextChar = csvText[i + 1];

      if (inQuotes) {
        if (char === '"') {
          if (nextChar === '"') {
            currentField += '"';
            i++; // skip escaped quote
          } else {
            inQuotes = false;
          }
        } else {
          currentField += char;
        }
      } else {
        if (char === '"') {
          inQuotes = true;
        } else if (char === ',') {
          currentLine.push(currentField.trim());
          currentField = '';
        } else if (char === '\r') {
          // ignore CR
        } else if (char === '\n') {
          currentLine.push(currentField.trim());
          if (currentLine.some(f => f.length > 0)) {
            lines.push(currentLine);
          }
          currentLine = [];
          currentField = '';
        } else {
          currentField += char;
        }
      }
    }

    if (currentField.length > 0 || currentLine.length > 0) {
      currentLine.push(currentField.trim());
      if (currentLine.some(f => f.length > 0)) {
        lines.push(currentLine);
      }
    }

    if (lines.length < 2) {
      throw new Error('CSV must contain a header row and at least one data row');
    }

    const headers = lines[0].map(h => h.toLowerCase().replace(/[^a-z0-9_]/g, ''));
    const rows = [];

    for (let r = 1; r < lines.length; r++) {
      const rowVals = lines[r];
      const obj = {};
      for (let h = 0; h < headers.length; h++) {
        obj[headers[h]] = rowVals[h] !== undefined ? rowVals[h] : '';
      }
      rows.push(obj);
    }

    return rows;
  }

  ingestBatch(type, format, rawPayload) {
    if (!rawPayload || typeof rawPayload !== 'string' || !rawPayload.trim()) {
      throw new Error('Raw payload is empty');
    }

    let records = [];

    if (format === 'json') {
      try {
        const parsed = JSON.parse(rawPayload);
        records = Array.isArray(parsed) ? parsed : [parsed];
      } catch (err) {
        throw new Error(`Invalid JSON format: ${err.message}`);
      }
    } else if (format === 'csv') {
      try {
        records = this.parseRFC4180CSV(rawPayload);
      } catch (err) {
        throw new Error(`CSV Parsing error: ${err.message}`);
      }
    } else {
      throw new Error(`Unsupported format: ${format}. Use 'csv' or 'json'`);
    }

    const results = {
      importedCount: 0,
      errors: [],
      items: []
    };

    if (type === 'platforms') {
      for (let i = 0; i < records.length; i++) {
        const item = records[i];
        try {
          if (!item.id || !item.name) {
            throw new Error(`Row ${i + 1}: Missing id or name`);
          }
          const added = this.addPlatform(item);
          results.importedCount++;
          results.items.push(added);
        } catch (err) {
          results.errors.push(`Row ${i + 1} (${item.id || 'unknown'}): ${err.message}`);
        }
      }
    } else if (type === 'corridors') {
      for (let i = 0; i < records.length; i++) {
        const item = records[i];
        try {
          if (!item.id || !item.source || !item.target) {
            throw new Error(`Row ${i + 1}: Missing id, source, or target`);
          }
          const added = this.addCorridor(item);
          results.importedCount++;
          results.items.push(added);
        } catch (err) {
          results.errors.push(`Row ${i + 1} (${item.id || 'unknown'}): ${err.message}`);
        }
      }
    } else {
      throw new Error(`Invalid type '${type}'. Must be 'corridors' or 'platforms'`);
    }

    return results;
  }

  // ── UNIVERSAL PURGE ──
  universalPurge(confirmPhrase) {
    if (confirmPhrase !== 'PURGE-ALL-FLEET-ENTITIES') {
      throw new Error('Invalid safety confirmation phrase. Exactly enter: PURGE-ALL-FLEET-ENTITIES');
    }

    const purgedCorridorsCount = this.corridors.size;
    const purgedPlatformsCount = this.platforms.size;

    this.corridors.clear();
    this.platforms.clear();

    return {
      success: true,
      purgedCorridors: purgedCorridorsCount,
      purgedPlatforms: purgedPlatformsCount,
      timestamp: new Date().toISOString()
    };
  }
}

const fleetTopologyService = new FleetTopologyService();

module.exports = {
  FleetTopologyService,
  fleetTopologyService
};
