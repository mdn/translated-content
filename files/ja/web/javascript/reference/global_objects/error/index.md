---
title: Error
slug: Web/JavaScript/Reference/Global_Objects/Error
---

{{JSRef}}

`Error` オブジェクトは、実行時エラーが発生した時に発生します。 `Error` オブジェクトは、ユーザー定義の例外の基底オブジェクトとして使用することもできます。標準の組み込みエラー型については下記を参照してください。

## 解説

実行時エラーが発生すると、新しい `Error` オブジェクトが生成されスローされます。

### エラーの型

JavaScript には、一般的な `Error` コンストラクターの他に、中核となる 7 つのエラーコンストラクターがあります。クライアント側の例外については、[例外処理文](/ja/docs/Web/JavaScript/Guide/Statements#Exception_handling_statements)を参照してください。

- {{JSxRef("EvalError")}}
  - : グローバル関数 {{JSxRef("eval", "eval()")}} に関して発生するエラーを表すインスタンスを生成します。
- {{JSxRef("InternalError")}}
  - : "too much recursion" (深すぎる再帰) など、JavaScript エンジンで内部エラーが発生した時に発生するエラーを表すインスタンスを生成します。
- {{JSxRef("RangeError")}}
  - : 数値変数または引数が、その有効範囲外である場合に発生するエラーを表すインスタンスを生成します。
- {{JSxRef("ReferenceError")}}
  - : 不正な参照から参照先の値を取得した時に発生するエラーを表すインスタンスを生成します。
- {{JSxRef("SyntaxError")}}
  - : 構文エラーを表すインスタンスを生成します。
- {{JSxRef("TypeError")}}
  - : 変数または引数の型が有効でない場合に発生するエラーを表すインスタンスを生成します。
- {{JSxRef("URIError")}}
  - : {{JSxRef("encodeURI", "encodeURI()")}} または {{JSxRef("decodeURI", "decodeURI()")}} に不正な引数が渡された時に発生するエラーを表すインスタンスを生成します。

## コンストラクター

- {{jsxref("Error/Error", "Error()")}}
  - : 新しい `Error` オブジェクトを生成します。

## 静的メソッド

- {{JSxRef("Error.captureStackTrace()")}}
  - : 標準外の **V8** の関数で、 Error インスタンスに {{JSxRef("Error.prototype.stack", "stack")}} プロパティを生成します。

## インスタンスプロパティ

- {{jsxref("Error.prototype.message")}}
  - : エラーメッセージ。
- {{jsxref("Error.prototype.name")}}
  - : エラーの名称。
- {{jsxref("Error.prototype.description")}}
  - : 標準外の Microsoft のプロパティで、エラーの説明です。 {{jsxref("Error.prototype.message", "message")}} と似ています。
- {{jsxref("Error.prototype.number")}}
  - : 標準外の Microsoft のプロパティで、エラー番号です。
- {{jsxref("Error.prototype.fileName")}}
  - : 標準外の Mozilla のプロパティで、このエラーが発生したファイルへのパスです。
- {{jsxref("Error.prototype.lineNumber")}}
  - : 標準外の Mozilla のプロパティで、このエラーが発生したファイル内の行番号です。
- {{jsxref("Error.prototype.columnNumber")}}
  - : 標準外の Mozilla のプロパティで、このエラーが発生した行内の桁番号です。
- {{jsxref("Error.prototype.stack")}}
  - : 標準外の Mozilla プロパティで、スタックトレースです。

## インスタンスメソッド

- {{jsxref("Error.prototype.toString()")}}
  - : 指定したオブジェクトを表す文字列を返します。{{jsxref("Object.prototype.toString()")}} メソッドを上書きします。

## 例

### 一般的なエラーを発生させる

通常、{{JSxRef("Statements/throw", "throw")}} キーワードを使い意図的にエラーを発生させて `Error` オブジェクトを生成します。 {{JSxRef("Statements/try...catch", "try...catch")}} 構文を使用してエラーを処理してください:

```js
try {
  throw new Error("Whoops!");
} catch (e) {
  console.error(e.name + ": " + e.message);
}
```

### 特定のエラーを処理する

エラーの {{JSxRef("Object.prototype.constructor", "constructor")}} プロパティでエラー型をテストすることにより、特定のエラー型だけを選んで処理できます。または、最近の JavaScript エンジン向けに書いているのであれば、{{JSxRef("Operators/instanceof", "instanceof")}} キーワードが使えます:

```js
try {
  foo.bar();
} catch (e) {
  if (e instanceof EvalError) {
    console.error(e.name + ": " + e.message);
  } else if (e instanceof RangeError) {
    console.error(e.name + ": " + e.message);
  }
  // ... etc
}
```

### 独自のエラー型

`Error` から派生した独自のエラー型を定義して `throw new CustomError()` ができるようにし、`instanceof CustomError` で例外ハンドラー内のエラーの種類を確認したいでしょう。これを行う一般的な方法の実例を以下に示します。

StackOverflow の突っ込んだ議論、 ["What's a good way to extend Error in JavaScript?"](http://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript) も参照してください。

#### ES6 独自のエラークラス

> **警告:** Babel 7 以前では独自のエラークラスのメソッドを使用することができますが、 [Object.defineProperty()](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) で宣言された場合に限定されます。 そうでない場合、古い Babel やそれ以外のトランスパイラは、下記のコードを正しく処理するために[追加の設定](https://github.com/loganfsmyth/babel-plugin-transform-builtin-extend)を必要とします。

> **メモ:** ES2015 クラスを使用した場合、一部のブラウザのスタックトレース上に、 CustomError コンストラクタが含まれます。

```js
class CustomError extends Error {
  constructor(foo = "bar", ...params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    this.name = "CustomError";
    // Custom debugging information
    this.foo = foo;
    this.date = new Date();
  }
}

try {
  throw new CustomError("baz", "bazMessage");
} catch (e) {
  console.error(e.name); //CustomError
  console.error(e.foo); //baz
  console.error(e.message); //bazMessage
  console.error(e.stack); //stacktrace
}
```

#### ES5 独自のエラーオブジェクト

> **警告:** **すべて**のブラウザーのスタックトレース上に、 `CustomError` コンストラクターが含まれます。

```js
function CustomError(foo, message, fileName, lineNumber) {
  var instance = new Error(message, fileName, lineNumber);
  instance.name = "CustomError";
  instance.foo = foo;
  Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
  if (Error.captureStackTrace) {
    Error.captureStackTrace(instance, CustomError);
  }
  return instance;
}

CustomError.prototype = Object.create(Error.prototype, {
  constructor: {
    value: Error,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});

if (Object.setPrototypeOf) {
  Object.setPrototypeOf(CustomError, Error);
} else {
  CustomError.__proto__ = Error;
}

try {
  throw new CustomError("baz", "bazMessage");
} catch (e) {
  console.error(e.name); //CustomError
  console.error(e.foo); //baz
  console.error(e.message); //bazMessage
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Error")}}

## 関連情報

- {{JSxRef("Statements/throw", "throw")}}
- {{JSxRef("Statements/try...catch", "try...catch")}}
