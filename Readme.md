# TypeScript 課題 4: ジェネリクス（Generics）

TypeScript のジェネリクス機能を学習するための練習課題プロジェクトです。汎用的で再利用可能なコードの作成方法を学びます。

## 📋 プロジェクト概要

このプロジェクトでは、TypeScript のジェネリクス（`<T>`のような型パラメータ）を使用して、様々な型に対応できる関数やクラスを作成します。

## 🛠️ 環境要件

- Node.js (v14.17 以上)
- TypeScript 5.8.3

## 📁 プロジェクト構成

```
typescript_assignment4/
├── package.json          # プロジェクト設定
├── package-lock.json     # 依存関係の詳細
├── tsconfig.json         # TypeScript設定
└── src/
    ├── index.ts          # TypeScriptソースコード
    └── index.js          # コンパイル済みJavaScriptコード
```

## 🚀 実行方法

### 1. 依存関係のインストール

```bash
npm install
```

### 2. TypeScript のコンパイル

```bash
npx tsc
```

### 3. 実行

```bash
node src/index.js
```

## 📚 学習内容

### 基本練習問題

#### 1. 汎用配列関数 - `getFirstElement<T>`

配列の最初の要素を取得する汎用関数

```typescript
function getFirstElement<T>(array: readonly T[]): T | undefined;
```

**特徴:**

- 任意の型`T`の配列を受け取り
- 最初の要素（`T`型）または`undefined`を返す
- 読み取り専用配列（`readonly`）に対応

#### 2. ペア作成関数 - `createPair<T, U>`

2 つの異なる型の値からタプルを作成する関数

```typescript
function createPair<T, U>(first: T, second: U): [T, U];
```

**特徴:**

- 2 つの異なる型`T`、`U`を受け取り
- タプル`[T, U]`を返す
- 型安全性を保持

#### 3. 汎用 Stack クラス - `Stack<T>`

任意の型の要素をスタック形式で管理するクラス

```typescript
class Stack<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  isEmpty(): boolean;
  size(): number;
  clear(): void;
}
```

**機能:**

- `push`: 要素をスタックに追加
- `pop`: 最上位要素を取り出し
- `peek`: 最上位要素を確認（取り出さない）
- `isEmpty`: スタックが空かどうか確認
- `size`: スタック内の要素数を取得
- `clear`: スタックを空にする

### 高度な練習問題

#### 1. 制約付きジェネリクス - `findById<T extends Identifiable>`

ID を持つオブジェクトから特定の ID を検索する関数

```typescript
interface Identifiable {
  id: number;
}

function findById<T extends Identifiable>(
  items: T[],
  id: number
): T | undefined;
```

#### 2. キー指定プロパティ取得 - `getProperty<T, K extends keyof T>`

オブジェクトから型安全にプロパティを取得する関数

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K];
```

#### 3. 汎用 API レスポンス型

成功・失敗の両方に対応するレスポンス型

```typescript
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
```

## 🎯 実行例

プログラムを実行すると、以下のような出力が得られます：

```
=== 課題4: ジェネリクス（Generics） ===

--- getFirstElement関数のテスト ---
数値配列の最初の要素: 1
文字列配列の最初の要素: apple
空配列の最初の要素: undefined

--- createPair関数のテスト ---
文字列と数値のペア: [名前, 100]
真偽値と文字列のペア: [true, 有効]
数値と配列のペア: [42, [1, 2, 3]]

--- Stackクラスのテスト ---
数値スタックの最上位: 30
数値スタックのサイズ: 3
ポップした値: 30
ポップ後のサイズ: 2
文字列スタックの内容:
  第三
  第二
  第一

=== 追加練習 ===
ID:2のユーザー: Sophia
名前: Chloe, 年齢: 35
成功レスポンス: {"success":true,"data":{"message":"データ取得成功"}}
エラーレスポンス: {"success":false,"error":"データが見つかりません"}
```

## 💡 学習ポイント

### ジェネリクスの基本概念

- **型パラメータ**: `<T>`、`<U>`、`<K>`など
- **複数の型パラメータ**: `<T, U>`の使用
- **制約**: `<T extends SomeType>`による型制限

### 型安全性の向上

- コンパイル時の型チェック
- 実行時エラーの予防
- IDE での優れた補完機能

### 再利用性の向上

- 同じロジックを異なる型で使用可能
- コードの重複を削減
- メンテナンス性の向上

## 🔧 TypeScript 設定

- **ターゲット**: ES2016
- **モジュール**: CommonJS
- **Strict Mode**: 有効
- **型チェック**: 厳格な設定

## 🤝 貢献方法

このプロジェクトは学習目的で作成されました。
