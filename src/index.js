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
function getFirstElement(array) {
    return array.length > 0 ? array[0] : undefined;
}
// 2. 2つの値のペアを作成する汎用関数
function createPair(first, second) {
    return [first, second];
}
// 3. 汎用的なStackクラス
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Stack.prototype.size = function () {
        return this.items.length;
    };
    Stack.prototype.clear = function () {
        this.items = [];
    };
    return Stack;
}());
// ======================================
// 【使用例・テスト】
// ======================================
console.log("=== 課題4: ジェネリクス（Generics） ===");
// getFirstElement関数のテスト
var numbers = [1, 2, 3, 4, 5];
var strings = ["apple", "banana", "cherry"];
var emptyArray = [];
console.log("--- getFirstElement関数のテスト ---");
console.log("\u6570\u5024\u914D\u5217\u306E\u6700\u521D\u306E\u8981\u7D20: ".concat(getFirstElement(numbers))); // 1
console.log("\u6587\u5B57\u5217\u914D\u5217\u306E\u6700\u521D\u306E\u8981\u7D20: ".concat(getFirstElement(strings))); // "apple"
console.log("\u7A7A\u914D\u5217\u306E\u6700\u521D\u306E\u8981\u7D20: ".concat(getFirstElement(emptyArray))); // undefined
// createPair関数のテスト
console.log("\n--- createPair関数のテスト ---");
var stringNumberPair = createPair("名前", 100);
var booleanStringPair = createPair(true, "有効");
var numberArrayPair = createPair(42, [1, 2, 3]);
console.log("\u6587\u5B57\u5217\u3068\u6570\u5024\u306E\u30DA\u30A2: [".concat(stringNumberPair[0], ", ").concat(stringNumberPair[1], "]"));
console.log("\u771F\u507D\u5024\u3068\u6587\u5B57\u5217\u306E\u30DA\u30A2: [".concat(booleanStringPair[0], ", ").concat(booleanStringPair[1], "]"));
console.log("\u6570\u5024\u3068\u914D\u5217\u306E\u30DA\u30A2: [".concat(numberArrayPair[0], ", [").concat(numberArrayPair[1].join(", "), "]]"));
// Stackクラスのテスト
console.log("\n--- Stackクラスのテスト ---");
// 数値のスタック
var numberStack = new Stack();
numberStack.push(10);
numberStack.push(20);
numberStack.push(30);
console.log("\u6570\u5024\u30B9\u30BF\u30C3\u30AF\u306E\u6700\u4E0A\u4F4D: ".concat(numberStack.peek())); // 30
console.log("\u6570\u5024\u30B9\u30BF\u30C3\u30AF\u306E\u30B5\u30A4\u30BA: ".concat(numberStack.size())); // 3
console.log("\u30DD\u30C3\u30D7\u3057\u305F\u5024: ".concat(numberStack.pop())); // 30
console.log("\u30DD\u30C3\u30D7\u5F8C\u306E\u30B5\u30A4\u30BA: ".concat(numberStack.size())); // 2
// 文字列のスタック
var stringStack = new Stack();
stringStack.push("第一");
stringStack.push("第二");
stringStack.push("第三");
console.log("\u6587\u5B57\u5217\u30B9\u30BF\u30C3\u30AF\u306E\u5185\u5BB9:");
while (!stringStack.isEmpty()) {
    console.log("  ".concat(stringStack.pop()));
}
// ES5互換の書き方
function findById(items, id) {
    for (var i = 0; i < items.length; i++) {
        if (items[i].id === id) {
            return items[i];
        }
    }
    return undefined;
}
// 2. キーを指定してオブジェクトの値を取得する関数
function getProperty(obj, key) {
    return obj[key];
}
function createSuccessResponse(data) {
    return { success: true, data: data };
}
function createErrorResponse(error) {
    return { success: false, error: error };
}
// 追加練習のテスト
console.log("\n=== 追加練習 ===");
// 制約付きジェネリクスのテスト
var users = [
    { id: 1, name: "James", age: 25 },
    { id: 2, name: "Sophia", age: 24 },
    { id: 3, name: "John", age: 26 },
];
var foundUser = findById(users, 2);
console.log("ID:2\u306E\u30E6\u30FC\u30B6\u30FC: ".concat(foundUser === null || foundUser === void 0 ? void 0 : foundUser.name));
// keyofを使ったジェネリクスのテスト
var person = { name: "Chloe", age: 35, city: "東京" };
var personName = getProperty(person, "name");
var personAge = getProperty(person, "age");
console.log("\u540D\u524D: ".concat(personName, ", \u5E74\u9F62: ").concat(personAge));
// APIレスポンス型のテスト
var successResponse = createSuccessResponse({ message: "データ取得成功" });
var errorResponse = createErrorResponse("データが見つかりません");
console.log("\u6210\u529F\u30EC\u30B9\u30DD\u30F3\u30B9: ".concat(JSON.stringify(successResponse)));
console.log("\u30A8\u30E9\u30FC\u30EC\u30B9\u30DD\u30F3\u30B9: ".concat(JSON.stringify(errorResponse)));
