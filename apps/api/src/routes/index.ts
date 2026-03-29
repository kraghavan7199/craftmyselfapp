import { Router } from 'express';
import { pool } from '../infrastructure/db/pool';
import { HealthController } from '../modules/health/health.controller';
import { HealthRepository } from '../modules/health/health.repository';
import { HealthService } from '../modules/health/health.service';
import { HelloController } from '../modules/hello/hello.controller';
import { HelloService } from '../modules/hello/hello.service';

const router = Router();

const healthRepository = new HealthRepository(pool);
const healthService = new HealthService(healthRepository);
const healthController = new HealthController(healthService);

const helloService = new HelloService();
const helloController = new HelloController(helloService);

router.get('/health', healthController.getHealth);
router.get('/api/hello', helloController.getHello);

export { router };
