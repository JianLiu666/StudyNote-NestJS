import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTodoDto } from './create-todo.dto';

@Controller('todo')
export class TodoController {
  @UsePipes(new ValidationPipe({ disableErrorMessages: true }))
  @Post()
  create(@Body() dto: CreateTodoDto) {
    return {
      id: 1,
      ...dto,
    };
  }
}
