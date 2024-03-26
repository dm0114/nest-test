import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // http와 express에서 본 것과 같이 listen 메서드를 사용하여 서버 시작
  await app.listen(3000);
}
bootstrap();
