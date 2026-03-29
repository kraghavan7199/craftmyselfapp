import { Request, Response } from 'express';
import { HealthService } from './health.service';

export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  getHealth = async (_req: Request, res: Response): Promise<void> => {
    const result = await this.healthService.getHealthStatus();
    const statusCode = result.status === 'ok' ? 200 : 500;
    res.status(statusCode).json(result);
  };
}
