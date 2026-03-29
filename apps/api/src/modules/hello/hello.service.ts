import type { HelloResponse } from '@craftmyslef/shared';

export class HelloService {
  getMessage(): HelloResponse {
    return {
      app: 'craftmyslef-api',
      message: 'Hello from the TypeScript backend!'
    };
  }
}
