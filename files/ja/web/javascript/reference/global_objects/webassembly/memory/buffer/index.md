---
title: WebAssembly.Memory.prototype.buffer
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/buffer
tags:
  - API
  - Buffer
  - JavaScript
  - プロパティ
  - Reference
  - WebAssembly
  - memory
browser-compat: javascript.builtins.WebAssembly.Memory.buffer
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/buffer
---
{{JSRef}}

**`buffer`** は {{jsxref("WebAssembly.Memory")}} オブジェクトのプロトタイププロパティで、メモリーに含まれるバッファーを返します。

## 例

### buffer の使用

次の例 (GitHub 上の [memory.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/memory.html) および[動作例](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)も参照) では、 memory.wasm バイトコードを {{jsxref("WebAssembly.instantiateStreaming()")}} メソッドを使用して読み込みんでインスタンス化し、その上の行で生成されたメモリーにインポートします。それから、メモリーにいくつかの値を格納し、関数をエクスポートして使用し、いくつかの値を合計します。

```js
WebAssembly.instantiateStreaming(fetch('memory.wasm'), { js: { mem: memory } })
.then(obj => {
  var i32 = new Uint32Array(memory.buffer);
  for (var i = 0; i < 10; i++) {
    i32[i] = i;
  }
  var sum = obj.instance.exports.accumulate(0, 10);
  console.log(sum);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebAssembly](/ja/docs/WebAssembly) 概要ページ
- [WebAssembly の概念](/ja/docs/WebAssembly/Concepts)
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Using_the_JavaScript_API)
