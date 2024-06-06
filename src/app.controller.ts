import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    console.log(`🧐 [AppController.constructor] exec()`);
    console.log(
      `🧐 [AppController.constructor] appService - ${(appService as any).constructor}`,
    );
  }

  @Get()
  getHello(): string {
    console.log(`🧐 [AppController.getHello] exec()`);
    return this.appService.getHello();
  }
}
