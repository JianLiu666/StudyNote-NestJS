// 有 interface, class 兩種選擇可以定義 DTO
// 通常會選擇 class，因為 interface 在編譯後會被移除，而 class 會保留在 JavaScript 中
// 這可能對部分功能有影響
export class CreateTodoDto {
  public readonly title: string;
  public readonly description?: string;
}
