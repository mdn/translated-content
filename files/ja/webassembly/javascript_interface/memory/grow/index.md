---
title: WebAssembly.Memory.prototype.grow()
slug: WebAssembly/JavaScript_interface/Memory/grow
---

{{WebAssemblySidebar}}

**`grow()`** は [`Memory`](/ja/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory) オブジェクトのプロトタイプメソッドで、指定した WebAssembly ページの数だけメモリーインスタンスの大きさを拡張します。

## 構文

```js
grow(number);
```

## 引数

- _number_
  - : メモリーを拡大する WebAssembly ページ数 (それぞれは 64KiB の大きさ)。

### 返値

以前のメモリーの大きさを、 WebAssembly ページ単位で返します。

## 例

### grow の使用

以下の例では、新しい WebAssembly メモリーインスタンスを初期サイズ 1 ページ (64KiB)、最大サイズ 10 ページ (640KiB) で作成します。

```js
var memory = new WebAssembly.Memory({ initial: 1, maximum: 10 });
```

それから、インスタンスを 1 ページ分拡張することができます。

```js
const bytesPerPage = 64 * 1024;
console.log(memory.buffer.byteLength / bytesPerPage); // "1"
console.log(memory.grow(1)); // "1"
console.log(memory.buffer.byteLength / bytesPerPage); // "2"
```

なお、ここでの `grow()` の返値は直前の WebAssembly ページ数です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebAssembly](/ja/docs/WebAssembly) 概要ページ
- [WebAssembly の概念](/ja/docs/WebAssembly/Concepts)
- [WebAssembly JavaScript API の使用](/ja/docs/WebAssembly/Using_the_JavaScript_API)
