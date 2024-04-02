import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    TodoController, // 因為只有建立 Controller, 所以會自動將 TodoController 歸納到 Root Module
  ],
  providers: [AppService],
})
export class AppModule {}
