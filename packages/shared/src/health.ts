export type HealthStatus = 'ok' | 'error';
export type DatabaseStatus = 'connected' | 'disconnected';

export interface HealthResponse {
  status: HealthStatus;
  db: DatabaseStatus;
}
