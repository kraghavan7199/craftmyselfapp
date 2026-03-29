import { Pool } from 'pg';

export class HealthRepository {
  constructor(private readonly db: Pool) {}

  async pingDatabase(): Promise<boolean> {
    try {
      await this.db.query('SELECT 1');
      return true;
    } catch {
      return false;
    }
  }
}
