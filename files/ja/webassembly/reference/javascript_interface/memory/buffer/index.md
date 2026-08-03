---
title: WebAssembly.Memory.prototype.buffer
slug: WebAssembly/Reference/JavaScript_interface/Memory/buffer
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

**`buffer`** は [`WebAssembly.Memory`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Memory) オブジェクトのプロトタイププロパティで、メモリーに含まれるバッファーを返します。メモリーが `shared: true` で構築されたかどうかによって、バッファーは {{jsxref("ArrayBuffer")}} と {{jsxref("SharedArrayBuffer")}} のどちらかになります。

## 例

### buffer の使用

次の例 (GitHub 上の [memory.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) および[動作例](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)も参照) では、 memory.wasm バイトコードを [`WebAssembly.instantiateStreaming()`](/ja/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) メソッドを使用して読み込みんでインスタンス化し、その上の行で生成されたメモリーにインポートします。それから、メモリーにいくつかの値を格納し、関数をエクスポートして使用し、いくつかの値を合計します。

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
});

WebAssembly.instantiateStreaming(fetch("memory.wasm"), {
  js: { mem: memory },
}).then((obj) => {
  const summands = new DataView(memory.buffer);
  for (let i = 0; i < 10; i++) {
    summands.setUint32(i * 4, i, true); // WebAssembly is little endian
  }
  const sum = obj.instance.exports.accumulate(0, 10);
  console.log(sum);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebAssembly](/ja/docs/WebAssembly) 概要ページ
- [WebAssembly の概要](/ja/docs/WebAssembly/Guides/Concepts)
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Guides/Using_the_JavaScript_API)
