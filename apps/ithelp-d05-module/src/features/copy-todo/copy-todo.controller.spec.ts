import { Test, TestingModule } from '@nestjs/testing';
import { CopyTodoController } from './copy-todo.controller';
import { TodoModule } from '../todo/todo.module';

describe('CopyTodoController', () => {
  let controller: CopyTodoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TodoModule],
      controllers: [CopyTodoController],
    }).compile();

    controller = module.get<CopyTodoController>(CopyTodoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
