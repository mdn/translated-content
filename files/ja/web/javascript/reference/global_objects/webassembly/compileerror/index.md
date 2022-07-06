---
title: WebAssembly.CompileError
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/CompileError
tags:
  - API
  - Class
  - CompileError
  - JavaScript
  - NativeError
  - Reference
  - WebAssembly
browser-compat: javascript.builtins.WebAssembly.CompileError
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/CompileError
---
{{JSRef}}

**`WebAssembly.CompileError`** オブジェクトは、 WebAssembly のデコードや検証の間のエラーを示します。

## コンストラクター

- [`WebAssembly.CompileError()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/CompileError/CompileError)
  - : 新しい `WebAssembly.CompileError` オブジェクトを生成します。

## インスタンスプロパティ

- {{jsxref("Error.prototype.message", "WebAssembly.CompileError.prototype.message")}}
  - : エラーメッセージ。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.name", "WebAssembly.CompileError.prototype.name")}}
  - : エラー名。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.fileName", "WebAssembly.CompileError.prototype.fileName")}}
  - : このエラーを発生させたファイルのパス。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.lineNumber", "WebAssembly.CompileError.prototype.lineNumber")}}
  - : このエラーを発生させたファイルの行番号。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.columnNumber", "WebAssembly.CompileError.prototype.columnNumber")}}
  - : このエラーが発生した行の列番号。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.stack", "WebAssembly.CompileError.prototype.stack")}}
  - : スタックトレース。 {{jsxref("Error")}} から継承しています。

## インスタンスメソッド

- {{jsxref("Error.prototype.toSource", "WebAssembly.CompileError.prototype.toSource()")}}
  - : 同じエラーを評価できるコードを返します。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.toString", "WebAssembly.CompileError.prototype.toString()")}}
  - : 指定された `Error` オブジェクトを表す文字列を返します。{{jsxref("Error")}} から継承しています。

## 例

### 新しい CompileError のインスタンスの作成

以下のスニペットでは、新しい `CompileError` インスタンスを生成して、詳細をコンソールに記録します。

```js
try {
  throw new WebAssembly.CompileError('Hello', 'someFile', 10);
} catch (e) {
  console.log(e instanceof CompileError); // true
  console.log(e.message);                 // "Hello"
  console.log(e.name);                    // "CompileError"
  console.log(e.fileName);                // "someFile"
  console.log(e.lineNumber);              // 10
  console.log(e.columnNumber);            // 0
  console.log(e.stack);                   // コードが実行されていた位置を返す
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
