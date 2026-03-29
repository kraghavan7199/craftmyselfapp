import type { HealthResponse } from '@craftmyslef/shared';
import { HealthRepository } from './health.repository';

export class HealthService {
  constructor(private readonly healthRepository: HealthRepository) {}

  async getHealthStatus(): Promise<HealthResponse> {
    const connected = await this.healthRepository.pingDatabase();

    if (!connected) {
      return { status: 'error', db: 'disconnected' };
    }

    return { status: 'ok', db: 'connected' };
  }
}
