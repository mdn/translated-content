---
title: WebAssembly.RuntimeError
slug: WebAssembly/JavaScript_interface/RuntimeError
---

{{WebAssemblySidebar}}

**`WebAssembly.RuntimeError`** オブジェクトは、 WebAssembly が[トラップ](https://webassembly.org/docs/semantics/#traps)を指定するたびに例外として発生するエラー型です。

## コンストラクター

- [`WebAssembly.RuntimeError()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/RuntimeError/RuntimeError)
  - : 新しい `WebAssembly.RuntimeError` オブジェクトを生成します。

## インスタンスプロパティ

- {{jsxref("Error.prototype.message", "WebAssembly.RuntimeError.prototype.message")}}
  - : エラーメッセージ。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.name", "WebAssembly.RuntimeError.prototype.name")}}
  - : エラー名。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.fileName", "WebAssembly.RuntimeError.prototype.fileName")}}
  - : このエラーを発生させたファイルのパス。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.lineNumber", "WebAssembly.RuntimeError.prototype.lineNumber")}}
  - : このエラーを発生させたファイルの行番号。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.columnNumber", "WebAssembly.RuntimeError.prototype.columnNumber")}}
  - : このエラーが発生した行の列番号。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.stack", "WebAssembly.RuntimeError.prototype.stack")}}
  - : スタックトレース。 {{jsxref("Error")}} から継承しています。

## インスタンスメソッド

- {{jsxref("Error.prototype.toSource", "WebAssembly.RuntimeError.prototype.toSource()")}}
  - : 同じエラーを評価できるコードを返します。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.toString", "WebAssembly.RuntimeError.prototype.toString()")}}
  - : 指定された `Error` オブジェクトを表す文字列を返します。{{jsxref("Error")}} から継承しています。

## 例

### 新しい RuntimeError のインスタンスの作成

以下のスニペットでは、新しい `RuntimeError` インスタンスを生成して、詳細をコンソールに記録します。

```js
try {
  throw new WebAssembly.RuntimeError("Hello", "someFile", 10);
} catch (e) {
  console.log(e instanceof WebAssembly.RuntimeError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "RuntimeError"
  console.log(e.fileName); // "someFile"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // コードが実行されていた位置を返す
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebAssembly](/ja/docs/WebAssembly) 概要ページ
- [WebAssembly の概念](/ja/docs/WebAssembly/Concepts)
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Using_the_JavaScript_API)
