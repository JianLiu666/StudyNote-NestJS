import { IsEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateTodoDto {
  @MaxLength(20)
  @IsString()
  @IsEmpty()
  public readonly title: string;

  @IsString()
  @IsOptional()
  public readonly description?: string;
}
