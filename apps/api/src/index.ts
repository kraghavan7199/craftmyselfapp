import cors from 'cors';
import express from 'express';
import { env } from './config/env';
import { router } from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(env.port, () => {
  // eslint-disable-next-line no-console
  console.log(`API running on http://localhost:${env.port}`);
});
