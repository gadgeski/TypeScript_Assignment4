// ======================================
// TypeScript課題4: ジェネリクス（Generics）
// ======================================

// 【課題の説明】
// ジェネリクスを使って、汎用的で再利用可能なコードを作成しましょう。
// <T>のような型パラメータを使って、様々な型に対応できる関数やクラスを作ります。

// ======================================
// 【練習問題】
// ======================================

// 1. 配列の最初の要素を取得する汎用関数を作成してください
// 任意の型Tの配列を受け取り、最初の要素（T型）またはundefinedを返す
// function getFirstElement(array: readonly ) {
//   return array.length > 0 ? array[0] : undefined;
// }

// 2. 2つの値のペアを作成する汎用関数を作成してください
// 2つの異なる型T, Uを受け取り、タプル[T, U]を返す
// function createPair(first, second) {
//   return [first, second];
// }

// 3. 汎用的なStackクラスを作成してください
// 任意の型Tの要素をスタック形式で管理
// メソッド: push, pop, peek, isEmpty
// class Stack {
//   private items = [];
//
//   push(item) {
//     this.items.push(item);
//   }
//
//   pop() {
//     return this.items.pop();
//   }
//
//   peek() {
//     return this.items[this.items.length - 1];
//   }
//
//   isEmpty() {
//     return this.items.length === 0;
//   }
// }

// ======================================
// 【解答例】
// ======================================

// 1. 配列の最初の要素を取得する汎用関数
function getFirstElement<T>(array: readonly T[]): T | undefined {
  return array.length > 0 ? array[0] : undefined;
}

// 2. 2つの値のペアを作成する汎用関数
function createPair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

// 3. 汎用的なStackクラス
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  clear(): void {
    this.items = [];
  }
}

// ======================================
// 【使用例・テスト】
// ======================================

console.log("=== 課題4: ジェネリクス（Generics） ===");

// getFirstElement関数のテスト
const numbers = [1, 2, 3, 4, 5];
const strings = ["apple", "banana", "cherry"];
const emptyArray: number[] = [];

console.log("--- getFirstElement関数のテスト ---");
console.log(`数値配列の最初の要素: ${getFirstElement(numbers)}`); // 1
console.log(`文字列配列の最初の要素: ${getFirstElement(strings)}`); // "apple"
console.log(`空配列の最初の要素: ${getFirstElement(emptyArray)}`); // undefined

// createPair関数のテスト
console.log("\n--- createPair関数のテスト ---");
const stringNumberPair = createPair("名前", 100);
const booleanStringPair = createPair(true, "有効");
const numberArrayPair = createPair(42, [1, 2, 3]);

console.log(
  `文字列と数値のペア: [${stringNumberPair[0]}, ${stringNumberPair[1]}]`
);
console.log(
  `真偽値と文字列のペア: [${booleanStringPair[0]}, ${booleanStringPair[1]}]`
);
console.log(
  `数値と配列のペア: [${numberArrayPair[0]}, [${numberArrayPair[1].join(
    ", "
  )}]]`
);

// Stackクラスのテスト
console.log("\n--- Stackクラスのテスト ---");

// 数値のスタック
const numberStack = new Stack<number>();
numberStack.push(10);
numberStack.push(20);
numberStack.push(30);

console.log(`数値スタックの最上位: ${numberStack.peek()}`); // 30
console.log(`数値スタックのサイズ: ${numberStack.size()}`); // 3
console.log(`ポップした値: ${numberStack.pop()}`); // 30
console.log(`ポップ後のサイズ: ${numberStack.size()}`); // 2

// 文字列のスタック
const stringStack = new Stack<string>();
stringStack.push("第一");
stringStack.push("第二");
stringStack.push("第三");

console.log(`文字列スタックの内容:`);
while (!stringStack.isEmpty()) {
  console.log(`  ${stringStack.pop()}`);
}

// ======================================
// 【ポイント解説】
// ======================================

// 1. ジェネリクス関数の定義
//    function 関数名<T>(引数: T): T { }
//    <T>は型パラメータ（任意の名前を使える：T, U, K, V など）

// 2. 複数の型パラメータ
//    function 関数名<T, U>(arg1: T, arg2: U): [T, U] { }

// 3. ジェネリクスクラス
//    class クラス名<T> { }

// 4. 制約（Constraints）
//    <T extends SomeType> で型に制約を付けられる

// ======================================
// 【追加練習】
// ======================================

// より高度なジェネリクスの使用例

// 1. 制約付きジェネリクス
interface Identifiable {
  id: number;
}

function findById<T extends Identifiable>(
  items: T[],
  id: number
): T | undefined {
  return items.find((item) => item.id === id);
}

// 2. キーを指定してオブジェクトの値を取得する関数
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// 3. 汎用的なレスポンス型
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

function createSuccessResponse<T>(data: T): ApiResponse<T> {
  return { success: true, data };
}

function createErrorResponse<T>(error: string): ApiResponse<T> {
  return { success: false, error };
}

// 追加練習のテスト
console.log("\n=== 追加練習 ===");

// 制約付きジェネリクスのテスト
const users = [
  { id: 1, name: "James", age: 25 },
  { id: 2, name: "Sophia", age: 24 },
  { id: 3, name: "John", age: 26 },
];

const foundUser = findById(users, 2);
console.log(`ID:2のユーザー: ${foundUser?.name}`);

// keyofを使ったジェネリクスのテスト
const person = { name: "Chloe", age: 35, city: "東京" };
const personName = getProperty(person, "name");
const personAge = getProperty(person, "age");
console.log(`名前: ${personName}, 年齢: ${personAge}`);

// APIレスポンス型のテスト
const successResponse = createSuccessResponse({ message: "データ取得成功" });
const errorResponse = createErrorResponse<string>("データが見つかりません");

console.log(`成功レスポンス: ${JSON.stringify(successResponse)}`);
console.log(`エラーレスポンス: ${JSON.stringify(errorResponse)}`);
