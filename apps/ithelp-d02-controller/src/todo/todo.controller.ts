import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

// 路由
@Controller('todos')
export class TodoController {
  @Get()
  getAll() {
    return [];
  }

  // 子路由
  @Get('examples')
  getExample() {
    return [{ id: 1, title: 'Example 1', description: '' }];
  }

  // 通用路由符號
  @Get('exam*les')
  get() {
    return [{ id: 1, title: 'Example 1', description: '' }];
  }

  // 路由參數寫法1
  // 一次把所有參數都取出來，當參數數量較多時這樣寫會更簡潔
  @Get(':id')
  getParam1(
    @Param() params: { id: string }, // 用 @Param decorator 取得路由參數
  ) {
    const { id } = params;
    return {
      id,
      title: `Title ${id}`,
      description: '',
    };
  }

  // 路由參數寫法2
  // 只取出想要關注的參數，參數少的時候這樣寫會更簡潔
  @Get(':id')
  getParam2(@Param('id') id: string) {
    return {
      id,
      title: `Title ${id}`,
      description: '',
    };
  }

  // 查詢參數寫法1
  @Get('list')
  getList1(@Query() query: { limit: number; skip: number }) {
    const { limit = 30, skip = 0 } = query;
    const list = [
      { id: 1, title: 'Title 1', description: '' },
      { id: 2, title: 'Title 2', description: '' },
    ];

    return list.slice(skip, limit);
  }

  // 查詢參數寫法2
  // 跟路由寫法的道理一樣
  getList2(@Query('limit') limit: number, @Query('skip') skip: number) {
    const list = [
      { id: 1, title: 'Title 1', description: '' },
      { id: 2, title: 'Title 2', description: '' },
    ];

    return list.slice(skip, limit);
  }

  @Patch()
  @HttpCode(HttpStatus.NO_CONTENT) // 使用 decorator 回傳指定狀態碼
  patch() {
    return [];
  }

  // 主體資料寫法1
  @Post('create1')
  create1(@Body() data: { title: string; description?: string }) {
    const id = 1;
    return {
      id,
      // ...data 會把 data 物件的所有屬性都複製到新物件, 如果 data 物件也有 id 屬性, 這樣寫會覆蓋掉 id
      // 通常被用在要更新物件的部分屬性時, 例如想更新 id 又要保留其他屬性
      ...data,
    };
  }

  // 主體資料寫法2
  @Post('create2')
  create2(
    @Body('title') title: string,
    @Body('description') description?: string,
  ) {
    const id = 1;
    return { id, title, description };
  }
}
