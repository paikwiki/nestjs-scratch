import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log(`🧐 [bootstrap] exec()`);
  const app = await NestFactory.create(AppModule);
  console.log(`🧐 [bootstrap] after creating app`);
  await app.listen(3000);
  console.log(`🧐 [bootstrap] after listening port`);
}
bootstrap();
