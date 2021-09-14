---
title: WebAssembly.LinkError
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/LinkError
tags:
  - API
  - Class
  - JavaScript
  - LinkError
  - Reference
  - WebAssembly
browser-compat: javascript.builtins.WebAssembly.LinkError
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/LinkError
---
{{JSRef}}

**`WebAssembly.RuntimeLinkError`** オブジェクトは、モジュールのインスタンス化の際に発生したエラーを示します (開始した関数での[トラップ](https://webassembly.org/docs/semantics/#traps)を除く)。

## コンストラクター

- [`WebAssembly.LinkError()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/LinkError/LinkError)
  - : 新しい `WebAssembly.LinkError` オブジェクトを生成します。

## インスタンスプロパティ

- {{jsxref("Error.prototype.message", "WebAssembly.LinkError.prototype.message")}}
  - : エラーメッセージ。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.name", "WebAssembly.LinkError.prototype.name")}}
  - : エラー名。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.fileName", "WebAssembly.LinkError.prototype.fileName")}}
  - : このエラーを発生させたファイルのパス。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.lineNumber", "WebAssembly.LinkError.prototype.lineNumber")}}
  - : このエラーを発生させたファイルの行番号。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.columnNumber", "WebAssembly.LinkError.prototype.columnNumber")}}
  - : このエラーが発生した行の列番号。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.stack", "WebAssembly.LinkError.prototype.stack")}}
  - : スタックトレース。 {{jsxref("Error")}} から継承しています。

## インスタンスメソッド

- {{jsxref("Error.prototype.toSource", "WebAssembly.LinkError.prototype.toSource()")}}
  - : 同じエラーを評価できるコードを返します。 {{jsxref("Error")}} から継承しています。
- {{jsxref("Error.prototype.toString", "WebAssembly.LinkError.prototype.toString()")}}
  - : 指定された `Error` オブジェクトを表す文字列を返します。{{jsxref("Error")}} から継承しています。

## 例

### 新しい LinkError のインスタンスの作成

以下のスニペットでは、新しい `LinkError` インスタンスを生成して、詳細をコンソールに記録します。

```js
try {
  throw new WebAssembly.LinkError('Hello', 'someFile', 10);
} catch (e) {
  console.log(e instanceof LinkError); // true
  console.log(e.message);                 // "Hello"
  console.log(e.name);                    // "LinkError"
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
