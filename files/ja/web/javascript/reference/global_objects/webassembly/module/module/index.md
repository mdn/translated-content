---
title: WebAssembly.Module() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/Module
tags:
  - Constructor
  - JavaScript
  - Module
  - Reference
  - WebAssembly
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/Module
browser-compat: javascript.builtins.WebAssembly.Module.Module
---
{{JSRef}}

**`WebAssembly.Module()`** コンストラクターは、ステートレスな WebAssembly コードを含む新しい Module オブジェクトを生成します。これはブラウザーでコンパイルされ、[Worker と効率的に共有する](/ja/docs/Web/API/Worker/postMessage)ことができ、複数回インスタンス化することができます。

`WebAssembly.Module()` コンストラクター関数は、与えられた WebAssembly バイナリーコードを同期的にコンパイルするために呼び出すことができます。しかし、`Module` を取得するには、
{{jsxref("WebAssembly.compile()")}} のような非同期コンパイル関数を使用するほうが主流です。

## 構文

> **Warning:** 大きなモジュールのコンパイルにはコストがかかるため、開発者はどうしても同期コンパイルが必要な場合にのみ `Module()` コンストラクターを使用し、それ以外の場合には非同期の {{jsxref("WebAssembly.compileStreaming()")}} メソッドを使用してください。

```js
new WebAssembly.Module(bufferSource)
```

### 引数

- _bufferSource_
  - : [型付き配列](/en-US/docs/Web/JavaScript/Typed_arrays)または [ArrayBuffer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) で、コンパイルしたい .wasm モジュールのバイナリーコードです。

## 例

### WebAssembly モジュールの同期的なコンパイル

```js
var importObject = {
  imports: {
    imported_func: function(arg) {
      console.log(arg);
    }
  }
};

function createWasmModule(bytes) {
  return new WebAssembly.Module(bytes);
}

fetch('simple.wasm').then(response =>
  response.arrayBuffer()
).then(bytes => {
  let mod = createWasmModule(bytes);
  WebAssembly.instantiate(mod, importObject)
  .then(result =>
     result.exports.exported_func()
  );
})
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebAssembly](/ja/docs/WebAssembly) 概要ページ
- [WebAssembly の概念](/ja/docs/WebAssembly/Concepts)
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Using_the_JavaScript_API)
