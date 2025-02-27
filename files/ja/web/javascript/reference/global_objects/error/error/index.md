---
title: Error() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Error/Error
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

**`Error`** コンストラクターは {{jsxref("Error")}} オブジェクトを生成します。

## 構文

```js-nolint
new Error()
new Error(message)
new Error(message, options)
new Error(message, fileName)
new Error(message, fileName, lineNumber)

Error()
Error(message)
Error(message, options)
Error(message, fileName)
Error(message, fileName, lineNumber)
```

> **メモ:** `Error()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) があってもなくても呼び出せます。どちらも新しい `Error` のインスタンス を生成します。

### 引数

- `message` {{optional_inline}}
  - : 人間が読めるエラーの説明。
- `options` {{optional_inline}}
  - : 以下のプロパティを持つオブジェクトです。
    - `cause` {{optional_inline}}
      - : エラーの具体的な原因を示す値で {{jsxref("Error/cause", "cause")}} プロパティに反映されます。エラーを捕捉して、より具体的または役立つエラーメッセージとともに例外を再度発生させるとき、元のエラーを渡すためにこのプロパティを使用できます。
- `fileName` {{optional_inline}} {{non-standard_inline}}
  - : このエラーを発生させたファイルのパスで {{jsxref("Error/fileName", "fileName")}} プロパティに反映されます。既定では、`Error()` コンストラクターを呼び出したコードを含むファイルの名前です。
- `lineNumber` {{optional_inline}} {{non-standard_inline}}
  - : このエラーを発生させたファイルの行番号で {{jsxref("Error/fileName", "fileName")}} プロパティに反映されます。既定では、`Error()` コンストラクターの呼び出しを含む行番号です。

## 例

### 関数呼び出しか new による構築か

`Error` が関数のように使用された場合 — {{JSxRef("Operators/new", "new")}} がなかった場合、 `Error` オブジェクトを返します。したがって、 `Error` を呼び出すだけで `Error` オブジェクトを `new` キーワードから構築した場合と同じものを出力します。

```js
// これは...
const x = Error("関数呼び出しによって生成されました。");

// ...これと同じ機能です。
const y = new Error('"new" キーワードによって生成されました。');
```

### 原因とともに例外を再発生させる

場合によっては、例外を捕捉して、新しいメッセージとともに例外を再発生させることが有用であることがあります。
その場合、元のエラーを新しい `Error` のコンストラクターに渡すべきです。

```js
try {
  frameworkThatCanThrow();
} catch (err) {
  throw new Error("New error message", { cause: err });
}
```

より詳細な例については、 [Error > 類似するエラーと区別する](/ja/docs/Web/JavaScript/Reference/Global_Objects/Error#類似するエラーと区別する) をご覧ください。

### options 引数の省略

JavaScriptは、`options` がオブジェクトの場合にのみ `options.cause` を読み取ろうとします。これによって、非標準の（第二引数に文字列を要求する） `Error(message, fileName, lineNumber)` という別のシグニチャとの曖昧さを避けます。`options` を省略するか、プリミティブ値を `options` として渡すか、 `cause` プロパティを持たないオブジェクトを渡した場合、生成された `Error` オブジェクトは `cause` プロパティを持たないでしょう。

```js
// optionsを省略する
const error1 = new Error("Error message");
console.log("cause" in error1); // false

// プリミティブ値を渡す
const error2 = new Error("Error message", "");
console.log("cause" in error2); // false

// causeプロパティを持たないオブジェクトを渡す
const error3 = new Error("Error message", { details: "http error" });
console.log("cause" in error3); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Polyfill of `Error` with `cause` support in `core-js`](https://github.com/zloirock/core-js#ecmascript-error)
- {{JSxRef("Statements/throw", "throw")}}
- {{JSxRef("Statements/try...catch", "try...catch")}}
- v8.dev [Error causes](https://v8.dev/features/error-cause) (2021)
