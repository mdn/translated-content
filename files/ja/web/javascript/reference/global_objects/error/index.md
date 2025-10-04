---
title: Error
slug: Web/JavaScript/Reference/Global_Objects/Error
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Error`** オブジェクトは、実行時エラーが発生した時に発生します。 `Error` オブジェクトは、ユーザー定義の例外の基底オブジェクトとして使用することもできます。標準の組み込みエラー型については下記を参照してください。

## 解説

実行時エラーが発生すると、新しい `Error` オブジェクトが生成されスローされます。

`Error` は{{Glossary("serializable object", "シリアライズ可能オブジェクト")}}なので、 {{DOMxRef("Window.structuredClone", "structuredClone()")}} で複製したり、[ワーカー](/ja/docs/Web/API/Worker)間で {{domxref("Worker/postMessage()", "postMessage()")}} を使用してコピーしたりすることができます。

### エラーの型

JavaScript には、一般的な `Error` コンストラクターの他に、中核となる他のエラーコンストラクターがあります。クライアント側の例外については、[例外処理文](/ja/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#例外処理文)を参照してください。

- {{jsxref("EvalError")}}
  - : グローバル関数 {{jsxref("Global_Objects/eval", "eval()")}} に関して発生するエラーを表すインスタンスを生成します。
- {{jsxref("RangeError")}}
  - : 数値変数または引数が、その有効範囲外である場合に発生するエラーを表すインスタンスを生成します。
- {{jsxref("ReferenceError")}}
  - : 不正な参照から参照先の値を取得した時に発生するエラーを表すインスタンスを生成します。
- {{jsxref("SyntaxError")}}
  - : 構文エラーを表すインスタンスを生成します。
- {{jsxref("TypeError")}}
  - : 変数または引数の型が有効でない場合に発生するエラーを表すインスタンスを生成します。
- {{jsxref("URIError")}}
  - : {{jsxref("encodeURI()")}} または {{jsxref("decodeURI()")}} に不正な引数が渡された時に発生するエラーを表すインスタンスを生成します。
- {{jsxref("AggregateError")}}
  - : 処理から複数のエラーを報告する必要がある場合（例えば {{jsxref("Promise.any()")}}）に複数のエラーを単一のオブジェクトとして表現するインスタンスを生成します。
- {{jsxref("InternalError")}} {{non-standard_inline}}
  - : "too much recursion" (深すぎる再帰) など、JavaScript エンジンで内部エラーが発生した時に発生するエラーを表すインスタンスを生成します。

## コンストラクター

- {{jsxref("Error/Error", "Error()")}}
  - : 新しい `Error` オブジェクトを生成します。

## 静的プロパティ

- {{jsxref("Error.stackTraceLimit")}} {{non-standard_inline}}
  - : 標準外の数値プロパティで、エラースタックトレースに含めるスタックフレームの数を制限します。

## 静的メソッド

- {{jsxref("Error.captureStackTrace()")}}
  - : 標準外の関数で、指定されたオブジェクトに {{jsxref("Error/stack", "stack")}} プロパティを生成します。
- {{jsxref("Error.isError()")}}
  - : 引数がエラーならば `true` を返し、それ以外ならば `false` を返します。
- `Error.prepareStackTrace()` {{non-standard_inline}} {{optional_inline}}
  - : 標準外の関数で、発生した例外に対して JavaScript エンジンによって呼び出され、ユーザーがスタックトレースを独自に書式化することができるようにします。詳しくは [V8 Stack Trace API](https://v8.dev/docs/stack-trace-api#customizing-stack-traces) のドキュメントを参照してください。

## インスタンスプロパティ

これらのプロパティは `Error.prototype` で定義されており、すべての `Error` インスタンスで共有されます。

- {{jsxref("Object/constructor", "Error.prototype.constructor")}}
  - : このインスタンスオブジェクトを作成したコンストラクター関数です。 `Error` インスタンスの場合、初期値は {{jsxref("Error/Error", "Error")}} コンストラクターです。
- {{jsxref("Error.prototype.name")}}
  - : エラーの名称を表します。`Error.prototype.name` の場合、初期値は `"Error"` です。 {{jsxref("TypeError")}} や {{jsxref("SyntaxError")}} のようなサブクラスは各自の `name` プロパティを提供します。
- {{jsxref("Error.prototype.stack")}} {{non-standard_inline}}
  - : スタックトレースのための標準外のプロパティです。

これらのプロパティはそれぞれの `Error` インスタンス自身のプロパティです。

- {{jsxref("Error/cause", "cause")}}
  - : 現在のエラーがなぜ発生したのかを示すエラーの原因。通常は捕捉した別のエラー。ユーザーが生成した `Error` オブジェクトでは、コンストラクターの第二引数で `cause` プロパティとして渡された値です」。
- {{jsxref("Error/columnNumber", "columnNumber")}} {{non-standard_inline}}
  - : 標準外の Mozilla のプロパティで、このエラーが発生した行内の桁番号です。
- {{jsxref("Error/fileName", "fileName")}} {{non-standard_inline}}
  - : 標準外の Mozilla のプロパティで、このエラーが発生したファイルへのパスです。
- {{jsxref("Error/lineNumber", "lineNumber")}} {{non-standard_inline}}
  - : 標準外の Mozilla のプロパティで、このエラーが発生したファイル内の行番号です。
- {{jsxref("Error/message", "message")}}
  - : エラーメッセージ。ユーザーが作成した `Error` オブジェクトの場合、これはコンストラクターの最初の引数として渡される文字列です。

## インスタンスメソッド

- {{jsxref("Error.prototype.toString()")}}
  - : 指定したオブジェクトを表す文字列を返します。{{jsxref("Object.prototype.toString()")}} メソッドを上書きします。

## 例

### 一般的なエラーを発生させる

通常、 `Error` オブジェクトは {{jsxref("Statements/throw", "throw")}} キーワードを使って意図的にエラーを発生させるために作成します。 {{jsxref("Statements/try...catch", "try...catch")}} 構文を使用してエラーを処理してください。

```js
try {
  throw new Error("Whoops!");
} catch (e) {
  console.error(`${e.name}: ${e.message}`);
}
```

### 特定のエラーを処理する

{{jsxref("Operators/instanceof", "instanceof")}} でエラー型をテストすることにより、特定のエラー型だけを選んで処理できます。

```js
try {
  foo.bar();
} catch (e) {
  if (e instanceof EvalError) {
    console.error(`${e.name}: ${e.message}`);
  } else if (e instanceof RangeError) {
    console.error(`${e.name}: ${e.message}`);
  }
  // など
  else {
    // どれにも一致しない場合、Error を未処理のままとする
    throw e;
  }
}
```

### 類似するエラーと区別する

異なる対処が必要な原因で失敗するにもかかわらず、コードブロックが非常によく似たエラー（すなわち同じ型やメッセージ）を投げることがあります。

発生した元のエラーが管理下にない場合、エラーを捕捉してより詳細なメッセージを持つ新しい `Error` オブジェクトを投げることが一つの選択肢となります。
元のエラーは新しい `Error` のコンストラクターの [`options`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Error/Error#options) パラメーターの `cause` プロパティに渡すべきです。これによって、上位の try/catch ブロックが元のエラーとスタックトレースを利用できることを保証します。

以下の例は、似たエラーで失敗する 2 つのメソッドを示しています（`doFailSomeWay()` と `doFailAnotherWay()`）。

```js
function doWork() {
  try {
    doFailSomeWay();
  } catch (err) {
    throw new Error("Failed in some way", { cause: err });
  }
  try {
    doFailAnotherWay();
  } catch (err) {
    throw new Error("Failed in another way", { cause: err });
  }
}

try {
  doWork();
} catch (err) {
  switch (err.message) {
    case "Failed in some way":
      handleFailSomeWay(err.cause);
      break;
    case "Failed in another way":
      handleFailAnotherWay(err.cause);
      break;
  }
}
```

> [!NOTE]
> もしあなたがライブラリーを制作しているなら、利用者にエラーメッセージを解析するようお願いするよりも、発生したエラーを区別するために Error の cause を使用すべきです。例については[エラーの cause ページ](/ja/docs/Web/JavaScript/Reference/Global_Objects/Error/cause#構造化データをエラーの原因として提供する)を参照してください。

サブクラスのコンストラクターが `super()` を呼び出すときに `options` パラメーターを渡せば、[独自のエラー型](#独自のエラー型)も `cause` プロパティを利用できます。基底クラスのコンストラクター `Error()` は `options.cause` を読み取って、新しいエラーのインスタンスに `cause` プロパティを定義します。

```js
class MyError extends Error {
  constructor(message, options) {
    // "cause" プロパティを設定するために第二引数に `options` を渡す必要がある。
    super(message, options);
  }
}

console.log(new MyError("test", { cause: new Error("cause") }).cause);
// Error: cause
```

### 独自のエラー型

`Error` から派生した独自のエラー型を定義して `throw new MyError()` ができるようにし、`instanceof MyError` で例外ハンドラー内のエラーの種類を確認したいでしょう。これを行う一般的な方法の実例を以下に示します。

Stack Overflow の突っ込んだ議論、 ["What's a good way to extend Error in JavaScript?"](https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript) も参照してください。

> [!WARNING]
> 組み込みのサブクラス化は、ES6 より古いコードに確実にトランスパイルできるわけではありません。なぜなら、 {{jsxref("Reflect.construct()")}} を使わずに特定の `new.target` を持つ基底クラスを構築する手段がないためです。[追加の設定](https://github.com/loganfsmyth/babel-plugin-transform-builtin-extend)を行うか、コンストラクターの最後で {{jsxref("Object/setPrototypeOf", "Object.setPrototypeOf(this, CustomError.prototype)")}} を手動で呼ぶ必要があります。そうしないと、構築されたインスタンスは `CustomError` のインスタンスになりません。詳しくは [the TypeScript FAQ](https://github.com/microsoft/TypeScript/wiki/FAQ#why-doesnt-extending-built-ins-like-error-array-and-map-work) をご覧ください。

> [!NOTE]
> ES2015 クラスを使用した場合、一部のブラウザーはスタックトレース上に `CustomError` コンストラクターを含めます。

```js
class CustomError extends Error {
  constructor(foo = "bar", ...params) {
    // 親のコンストラクターに（ベンダー固有のものも含めて）残りの引数を渡す
    super(...params);

    // エラーが発生した箇所の正しいスタックトレースを維持する （V8でのみ有効）
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    this.name = "CustomError";
    // カスタムのデバッグ情報
    this.foo = foo;
    this.date = new Date();
  }
}

try {
  throw new CustomError("baz", "bazMessage");
} catch (e) {
  console.error(e.name); // CustomError
  console.error(e.foo); // baz
  console.error(e.message); // bazMessage
  console.error(e.stack); // stack trace
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Error` の `cause` 対応のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-error)
- [es-shims による Error `cause` のポリフィル](https://www.npmjs.com/package/error-cause)
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/try...catch", "try...catch")}}
- V8 ドキュメント [Stack trace API](https://v8.dev/docs/stack-trace-api)
