const { test, describe, beforeEach } = require('node:test');
const assert = require('node:assert');
const { FleetTopologyService } = require('../core/fleetTopologyService');

describe('Portfolio Enterprise Fleet Topology & Governance Mesh', () => {
  let service;

  beforeEach(() => {
    service = new FleetTopologyService();
  });

  test('1. Initializes 15 flagship engineering platforms and default interop corridors', () => {
    const platforms = service.getPlatforms();
    const corridors = service.getCorridors();

    assert.strictEqual(platforms.length, 15);
    assert.strictEqual(corridors.length, 8);

    const netplus = service.getPlatform('NODE-NETPLUS');
    assert.ok(netplus);
    assert.strictEqual(netplus.name, 'NetPlus CRM');

    const quantum = service.getPlatform('NODE-QUANTUMSHIELD');
    assert.ok(quantum);
    assert.strictEqual(quantum.tier, 'Mission-Critical');
  });

  test('2. Live telemetry calculation reflects accurate aggregates', () => {
    const telemetry = service.getTelemetry();

    assert.strictEqual(telemetry.governedPlatforms, 15);
    assert.strictEqual(telemetry.activeCorridors, 8);
    assert.strictEqual(telemetry.totalCorridors, 8);
    assert.ok(telemetry.fleetSecurityIntegrity >= 99);
    assert.ok(telemetry.crossFleetLatencySLA.includes('Sub-25ms SLA'));
    assert.ok(telemetry.totalStarsAndDeployments.includes('Live Deployments'));
    assert.strictEqual(telemetry.systemHealth, 'OPTIMAL');
  });

  test('3. Can provision new interop corridor between valid platform nodes', () => {
    const newCorr = service.addCorridor({
      id: 'CORR-TEST-99',
      source: 'NODE-NETPLUS',
      target: 'NODE-PHOENIX',
      protocol: 'mTLS-gRPC',
      bandwidth: '50 Gbps',
      latency: 7,
      description: 'Test high-speed talent pipeline corridor'
    });

    assert.strictEqual(newCorr.id, 'CORR-TEST-99');
    assert.strictEqual(newCorr.status, 'CONNECTED');
    assert.strictEqual(service.getCorridors().length, 9);

    const telemetry = service.getTelemetry();
    assert.strictEqual(telemetry.activeCorridors, 9);
  });

  test('4. Provisioning rejects non-existent platforms or self-referential links', () => {
    assert.throws(() => {
      service.addCorridor({
        id: 'CORR-FAIL-1',
        source: 'NODE-INVALID',
        target: 'NODE-NETPLUS'
      });
    }, /Source platform NODE-INVALID does not exist/);

    assert.throws(() => {
      service.addCorridor({
        id: 'CORR-FAIL-2',
        source: 'NODE-NETPLUS',
        target: 'NODE-NETPLUS'
      });
    }, /cannot be the same platform/);
  });

  test('5. 1-Click Sever control marks corridor severed and degrades integrity', () => {
    const severed = service.severCorridor('CORR-01');
    assert.strictEqual(severed.status, 'SEVERED');
    assert.strictEqual(severed.integrityScore, 0.0);

    const telemetry = service.getTelemetry();
    assert.strictEqual(telemetry.activeCorridors, 7);
    assert.strictEqual(telemetry.totalCorridors, 8);
    assert.strictEqual(telemetry.systemHealth, 'ATTENTION_REQUIRED');
  });

  test('6. 1-Click Restore control restores corridor connectivity', () => {
    service.severCorridor('CORR-01');
    const restored = service.restoreCorridor('CORR-01');
    assert.strictEqual(restored.status, 'CONNECTED');
    assert.strictEqual(restored.integrityScore, 0.995);

    const telemetry = service.getTelemetry();
    assert.strictEqual(telemetry.activeCorridors, 8);
    assert.strictEqual(telemetry.systemHealth, 'OPTIMAL');
  });

  test('7. 1-Click Drop corridor removes corridor from mesh', () => {
    const res = service.deleteCorridor('CORR-02');
    assert.strictEqual(res.success, true);
    assert.strictEqual(service.getCorridor('CORR-02'), null);
    assert.strictEqual(service.getCorridors().length, 7);
  });

  test('8. Cascading deletion of platform drops platform AND all connected corridors', () => {
    const res = service.deletePlatform('NODE-QUANTUMSHIELD');
    assert.strictEqual(res.success, true);
    assert.strictEqual(res.deletedPlatform.id, 'NODE-QUANTUMSHIELD');
    assert.strictEqual(res.droppedCount, 2);

    const droppedIds = res.droppedCorridors.map(c => c.id);
    assert.ok(droppedIds.includes('CORR-01'));
    assert.ok(droppedIds.includes('CORR-06'));

    assert.strictEqual(service.getPlatform('NODE-QUANTUMSHIELD'), null);
    assert.strictEqual(service.getCorridor('CORR-01'), null);
    assert.strictEqual(service.getCorridor('CORR-06'), null);
    assert.strictEqual(service.getCorridors().length, 6);
  });

  test('9. Batch Ingestion supports RFC 4180 CSV with quotes, commas, and trims', () => {
    const csvData = `id,name,tier,category,status,sla,latency,version,stars
NODE-SYNTHEDGE,"SynthEdge Neural Mesh, Inc.",Enterprise Flagship,Edge AI / Neural,ACTIVE,99.99%,14,v1.0.0,42
NODE-HYPERGRID,"HyperGrid PQC Relays, Global",Mission-Critical,Quantum / Grid,ACTIVE,99.999%,8,v2.0.0,60`;

    const result = service.ingestBatch('platforms', 'csv', csvData);
    assert.strictEqual(result.importedCount, 2);
    assert.strictEqual(result.errors.length, 0);

    const synth = service.getPlatform('NODE-SYNTHEDGE');
    assert.ok(synth);
    assert.strictEqual(synth.name, 'SynthEdge Neural Mesh, Inc.');
    assert.strictEqual(service.getPlatforms().length, 17);
  });

  test('10. Batch Ingestion supports strict JSON payload for corridors', () => {
    const jsonData = JSON.stringify([
      {
        id: 'CORR-INGEST-01',
        source: 'NODE-NETPLUS',
        target: 'NODE-AEGIS',
        protocol: 'mTLS-gRPC',
        bandwidth: '100 Gbps',
        latency: 5,
        description: 'Direct high-throughput cryptographic shard sync'
      }
    ]);

    const result = service.ingestBatch('corridors', 'json', jsonData);
    assert.strictEqual(result.importedCount, 1);
    assert.strictEqual(result.errors.length, 0);

    const corr = service.getCorridor('CORR-INGEST-01');
    assert.ok(corr);
    assert.strictEqual(corr.bandwidth, '100 Gbps');
  });

  test('11. Batch Ingestion rejects corrupt records and reports detailed errors', () => {
    const corruptCsv = `id,source,target
CORR-VALID,NODE-NETPLUS,NODE-LIFESTREAM
CORR-INVALID,NODE-NONEXISTENT,NODE-LIFESTREAM
,NODE-NETPLUS,NODE-LIFESTREAM`;

    const result = service.ingestBatch('corridors', 'csv', corruptCsv);
    assert.strictEqual(result.importedCount, 1);
    assert.strictEqual(result.errors.length, 2);
    assert.ok(result.errors[0].includes('NODE-NONEXISTENT does not exist'));
  });

  test('12. Universal Purge requires safety confirmation phrase and wipes all entities', () => {
    assert.throws(() => {
      service.universalPurge('WRONG-PHRASE');
    }, /Invalid safety confirmation phrase/);

    const purgeResult = service.universalPurge('PURGE-ALL-FLEET-ENTITIES');
    assert.strictEqual(purgeResult.success, true);
    assert.strictEqual(purgeResult.purgedPlatforms, 15);
    assert.strictEqual(purgeResult.purgedCorridors, 8);

    assert.strictEqual(service.getPlatforms().length, 0);
    assert.strictEqual(service.getCorridors().length, 0);

    const telemetry = service.getTelemetry();
    assert.strictEqual(telemetry.governedPlatforms, 0);
    assert.strictEqual(telemetry.activeCorridors, 0);
  });

  test('13. Reset topology restores 15 platforms and 8 corridors to factory state', () => {
    service.universalPurge('PURGE-ALL-FLEET-ENTITIES');
    service.resetTopology();

    assert.strictEqual(service.getPlatforms().length, 15);
    assert.strictEqual(service.getCorridors().length, 8);
    const telemetry = service.getTelemetry();
    assert.strictEqual(telemetry.systemHealth, 'OPTIMAL');
  });
});
