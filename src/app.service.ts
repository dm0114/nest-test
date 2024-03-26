import { Injectable } from '@nestjs/common';

/** 기능 구현 목적 */
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
