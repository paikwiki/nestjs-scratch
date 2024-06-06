import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {
    console.log(`🧐 [AppService.constructor] exec()`);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
