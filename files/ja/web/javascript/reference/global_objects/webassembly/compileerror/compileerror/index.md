---
title: WebAssembly.CompileError() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/CompileError/CompileError
tags:
  - Constructor
  - JavaScript
  - Reference
  - WebAssembly
browser-compat: javascript.builtins.WebAssembly.CompileError.CompileError
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/CompileError/CompileError
---
{{JSRef}}

**`WebAssembly.CompileError()`** コンストラクターは、新しい WebAssembly の `CompileError` オブジェクトを生成します。これは WebAssembly のデコードまたは検証中のエラーを示します。

## 構文

```js
new WebAssembly.CompileError()
new WebAssembly.CompileError(message)
new WebAssembly.CompileError(message, fileName)
new WebAssembly.CompileError(message, fileName, lineNumber)
```

### 引数

- `message` {{optional_inline}}
  - : このエラーの人間が読める説明です。
- `fileName` {{optional_inline}}
  - : 例外が発生したコードを含むファイル名です。
- `lineNumber` {{optional_inline}}
  - : 例外が発生したコードの行番号です。

## 例

### 新しい CompileError インスタンスの生成

以下のスニペットは新しい `CompileError` のインスタンスを生成し、コンソールに詳細を記録します。

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
  console.log(e.stack);                   // コードの実行されていた位置を返す
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
