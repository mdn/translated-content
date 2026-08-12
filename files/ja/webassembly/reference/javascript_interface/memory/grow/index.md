---
title: WebAssembly.Memory.prototype.grow()
slug: WebAssembly/Reference/JavaScript_interface/Memory/grow
l10n:
  sourceCommit: bdab3a1efc984f4915590ba0a3099442e5e6f675
---

**`grow()`** は [`WebAssembly.Memory`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Memory) オブジェクトのプロトタイプメソッドで、指定した WebAssembly ページの数だけメモリーインスタンスの大きさを拡張します。

## 構文

```js-nolint
grow(delta)
```

## 引数

- `delta`
  - : メモリーを拡大する WebAssembly ページ数 (それぞれは 64KiB の大きさ)。
    アドレス型が `"i64"` のメモリーについては、この値は {{jsxref("BigInt")}} である必要があります。

### 返値

以前のメモリーの大きさを、 WebAssembly ページ単位で返します。
アドレス型が `"i64"` のメモリーについては、この値は {{jsxref("BigInt")}} である必要があります。

### 例外

- {{jsxref("RangeError")}}: 現在のサイズに `delta` を追加した値が、メモリーインスタンスの最大サイズ容量を超える場合。

## 例

### grow の使用

以下の例では、新しい WebAssembly メモリーインスタンスを初期サイズ 1 ページ (64KiB)、最大サイズ 10 ページ (640KiB) で作成します。

```js
const memory = new WebAssembly.Memory({
  initial: 1,
  maximum: 10,
});
```

それから、インスタンスを 1 ページ分拡張することができます。

```js
const bytesPerPage = 64 * 1024;
console.log(memory.buffer.byteLength / bytesPerPage); // "1"
console.log(memory.grow(1)); // "1"
console.log(memory.buffer.byteLength / bytesPerPage); // "2"
```

なお、ここでの `grow()` の返値は直前の WebAssembly ページ数です。

### 64 ビットアドレスの使用

アドレス型が `"i64"` のメモリーについては、長整数 ({{jsxref("BigInt")}}) の値を `grow()` に渡してください：

```js
const memory = new WebAssembly.Memory({
  address: "i64",
  initial: 1n,
  maximum: 10n,
});

console.log(memory.grow(1n)); // 1n
```

### 伸長に伴う脱落

`grow` を呼び出すたびに、古い `buffer` への参照は、たとえ `grow(0)` の場合であってもすべて解除されます￥。
参照の解除とは、{{jsxref("ArrayBuffer")}} の `byteLength` が 0 になり、JavaScript からアクセス可能なバイトができなったたことを意味します。
`grow` を呼び出した後、`buffer` プロパティにアクセスすると、正しい長さの `ArrayBuffer` が返されます。

```js example-bad
const memory = new WebAssembly.Memory({
  initial: 1,
});
const oldMemoryView = new Uint8Array(memory.buffer);
memory.grow(1);
// 配列は空
console.log(oldMemoryView); // Uint8Array []
```

```js example-good
const memory = new WebAssembly.Memory({
  initial: 1,
});
memory.grow(1);
const currentMemoryView = new Uint8Array(memory.buffer);
// 配列はゼロで埋められる
console.log(currentMemoryView); // Uint8Array(131072) [ 0, 0, 0, ... ]
// 131072 = 64KiB * 2
```

共有 `Memory` インスタンスの場合、初期の `buffer`（この場合は [`SharedArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) となります）は切り離されることはなく、その長さが更新されないだけです。拡張後の `buffer` プロパティへのアクセスでは、より大きな `SharedArrayBuffer` が返され、`Memory` の伸長前よりも広いメモリー範囲にアクセスすることがあります。`buffer` プロパティから取得されるすべての `SharedArrayBuffer` は、同じメモリアドレス範囲の先頭を参照するため、同じデータを操作することになります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebAssembly](/ja/docs/WebAssembly) 概要ページ
- [WebAssembly の概要](/ja/docs/WebAssembly/Guides/Concepts)
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Guides/Using_the_JavaScript_API)
