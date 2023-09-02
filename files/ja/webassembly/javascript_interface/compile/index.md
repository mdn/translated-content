---
title: WebAssembly.compile()
slug: WebAssembly/JavaScript_interface/compile
---

{{WebAssemblySidebar}}

**`WebAssembly.compile()`** 関数は WebAssembly バイナリーコードを {{jsxref("WebAssembly.Module")}} の形にコンパイルします。この関数は、モジュールをインスタンス化する前にコンパイルする必要がある場合に便利です (それ以外の場合は、 {{jsxref("WebAssembly.instantiate()")}} 関数を使用してください)。</p>

## 構文

```js
WebAssembly.compile(bufferSource);
```

### 引数

- _bufferSource_
  - : コンパイルする .wasm モジュールのバイナリーコードを含む[型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)または [`ArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) です。

### 返値

コンパイルされたモジュールを表す {{jsxref("WebAssembly.Module")}} オブジェクトに解決する `Promise` です。

### 例外

- `bufferSource` が[型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)ではなかった場合、 {{jsxref("TypeError")}} が発生します。
- コンパイルに失敗した場合、プロミスは {{jsxref("WebAssembly.CompileError")}} で拒否されます。

## 例

### compile の使用

次の例では、読み込まれた simple.wasm バイトコードを、 `compile()` 関数を使用してコンパイルし、[ワーカー](/ja/docs/Web/API/Web_Workers_API)に [postMessage()](/ja/docs/Web/API/Worker/postMessage) を用いて送信します。

```js
var worker = new Worker("wasm_worker.js");

fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.compile(bytes))
  .then((mod) => worker.postMessage(mod));
```

> **メモ:** おそらく多くの場合は {{jsxref("WebAssembly.compileStreaming()")}} を使用したほうが `compile()` よりも効率的なのでそちらの方がいいでしょう。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebAssembly](/ja/docs/WebAssembly) 概要ページ
- [WebAssembly の概念](/ja/docs/WebAssembly/Concepts)
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Using_the_JavaScript_API)
