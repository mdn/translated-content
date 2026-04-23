---
title: Error.captureStackTrace()
short-title: captureStackTrace()
slug: Web/JavaScript/Reference/Global_Objects/Error/captureStackTrace
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Error.captureStackTrace()`** は静的メソッドで、指定されたオブジェクトにスタックトレース情報を [`stack`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Error/stack) プロパティとして設定します。

## 構文

```js-nolint
Error.captureStackTrace(object)
Error.captureStackTrace(object, constructor)
```

### 引数

- `object`
  - : `stack`プロパティを追加する対象オブジェクトです。
- `constructor` {{optional_inline}}
  - : 関数、通常は`object`が作成されたコンストラクター。スタックトレースを収集する際、この関数への最上位の呼び出しを含み、それより上のすべてのフレームはスタックトレースから除外されます。

### 返値

なし ({{jsxref("undefined")}})。

`object` はその場で変更され、`stack` という追加の自己プロパティが定義されます。このプロパティの文字列値は {{jsxref("Error.prototype.stack")}} と同じ形式に従います。このプロパティは列挙不可かつ設定可能です。V8 ではゲッター・セッターのペアです。SpiderMonkey および JavaScriptCore では書き込み可能なデータプロパティです。

## 例

### Error.captureStackTrace() の使用

`getStack()` はユーティリティ関数で、呼び出された時点での現在のスタックトレースを返します。この際、自身をスタックから削除します。これは {{domxref("console/trace_static", "console.trace()")}} と同じデバッグ目的を果たしますが、文字列を別の場所に出力できるようにします。なお、この目的のために `Error` インスタンスを構築するのではなく、単純なオブジェクトに `stack` を設定します。これは私たちの目的により効率的です。通常は、次の例に示すように、エラーとしてスローされる予定のオブジェクトに対して `Error.captureStackTrace` を呼び出します。

```js
function getStack() {
  const obj = {};
  if ("captureStackTrace" in Error) {
    // getStack 自体がスタックトレースに入るのを防ぐ
    Error.captureStackTrace(obj, getStack);
  }
  return obj.stack;
}

function foo() {
  console.log(getStack());
}

foo();
// Error
//     at foo (<anonymous>:8:15)
//     at <anonymous>:11:1
```

### カスタムエラーオブジェクトへのスタックトレースのインストール

`Error.captureStackTrace()` の主な用途は、カスタムエラーオブジェクトにスタックトレースを設定することです。通常、[カスタムエラー](/ja/docs/Web/JavaScript/Reference/Global_Objects/Error#custom_error_types)は `Error` クラスを拡張して定義します。これにより、継承を通じて `stack` プロパティが自動的に利用可能になります。ただし、デフォルトのスタックトレースにはコンストラクタ呼び出し自体が含まれるため、実装の詳細が漏洩するという問題があります。`Error.captureStackTrace()` を使用すれば、`Error` を継承しないカスタムエラーに対してもスタックトレースを設定できるため、この問題を回避できます。

```js
class MyError extends Error {
  constructor(message, options) {
    super(message, options);
    if ("captureStackTrace" in Error) {
      // MyError 自体がスタックトレースに入るのを防ぐ
      Error.captureStackTrace(this, MyError);
    }
  }
}

const myError = new MyError("Something went wrong");
console.log(myError.stack);
// Error: Something went wrong
//     at <anonymous>:8:17
```

ここで `Error.captureStackTrace()` を呼び出さなくても、コンストラクターが `Error` を継承している場合、一部のエンジンは賢くスタックトレースから `MyError` を回避します。`Error.captureStackTrace()` の呼び出しは、何らかの理由で `Error` を継承していないカスタムエラーに対してより重要です。

```js
class MyError {
  constructor(message) {
    this.message = message;
    if ("captureStackTrace" in Error) {
      // MyError 自体がスタックトレースに入るのを防ぐ
      Error.captureStackTrace(this, MyError);
    }
  }
}

const myError = new MyError("Something went wrong");
console.log(myError.stack);
// Error: Something went wrong
//     at <anonymous>:8:17
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Error.prototype.stack")}}
- {{jsxref("Error.stackTraceLimit")}}
- [Stack trace API](https://v8.dev/docs/stack-trace-api) (V8 docs)
