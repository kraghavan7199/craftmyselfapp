import { Request, Response } from 'express';
import { HelloService } from './hello.service';

export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  getHello = (_req: Request, res: Response): void => {
    res.json(this.helloService.getMessage());
  };
}
