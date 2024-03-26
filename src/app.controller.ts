import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/** 데코레이터로 엔드포인트 생성*/
/** 클래스 단위로 엔드포인트를 가독성있게 구조화하고 관리한다. */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /** 리턴 값이 res */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('posts')
  getPosts(): string {
    return 'All posts';
  }

  @Get('posts/:id')
  getPost(): string {
    return 'Post';
  }
}
