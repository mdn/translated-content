---
title: ArrayBuffer.prototype.transferToFixedLength()
short-title: transferToFixedLength()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/transferToFixedLength
l10n:
  sourceCommit: 16f462ee43bbd7fd39561a480e3e323d1c542966
---

**`transferToFixedLength()`** は {{jsxref("ArrayBuffer")}} インスタンスのメソッドで、このバッファと同じバイト内容を持つサイズ変更不可能な新しい `ArrayBuffer` を作成し、その後でこのバッファを分離します。

## 構文

```js-nolint
transferToFixedLength()
transferToFixedLength(newByteLength)
```

### 引数

- `newByteLength`
  - : 新しい `ArrayBuffer` の {{jsxref("ArrayBuffer/byteLength", "byteLength")}} です。デフォルト値はこの `ArrayBuffer` の `byteLength` です。
    - `newByteLength` がこの `ArrayBuffer` の `byteLength` より小さい場合、「オーバーフロー」したバイトは破棄されます。
    - `newByteLength` がこの `ArrayBuffer` の `byteLength` より大きい場合、余分なバイトはゼロで埋められます。

### 返値

新しい {{jsxref("ArrayBuffer")}} オブジェクトです。その内容は、この `ArrayBuffer` の内容で初期化され、余分なバイトがある場合はゼロで埋められます。新しい `ArrayBuffer` は、常にサイズ変更不可能です。元の `ArrayBuffer` は切り離されます。

### 例外

- {{jsxref("TypeError")}}
  - : この `ArrayBuffer` が既に分離されている場合、または指定された操作によってのみ分離可能な場合に発生します。現在、{{domxref("GPUBuffer.getMappedRange()")}} や [`WebAssembly.Memory.buffer`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) などの特定の Web API のみが、指定された分離メソッドを持つ `ArrayBuffer` オブジェクトを作成できます。

## 解説

{{jsxref("ArrayBuffer/transfer", "transfer()")}} とは異なり、`transferToFixedLength()` は常にサイズ変更不可の `ArrayBuffer` を作成します。これは、この `ArrayBuffer` がサイズ変更可能であっても、`newByteLength` が `maxByteLength` より大きくできるということです。詳細については、詳細については、[ArrayBuffer の移譲](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#arraybuffers_の委譲)を参照してください。

## 例

### リサイズ可能な ArrayBuffer を固定長のものに移譲

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const view = new Uint8Array(buffer);
view[1] = 2;
view[7] = 4;

const buffer2 = buffer.transferToFixedLength();
console.log(buffer2.byteLength); // 8
console.log(buffer2.resizable); // false
const view2 = new Uint8Array(buffer2);
console.log(view2[1]); // 2
console.log(view2[7]); // 4
```

`transferToFixedLength` を使用する場合、`newByteLength` は元の `ArrayBuffer` の `maxByteLength` よりも大きくすることができます。

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const view = new Uint8Array(buffer);
view[1] = 2;
view[7] = 4;

const buffer2 = buffer.transferToFixedLength(20);
console.log(buffer2.byteLength); // 20
console.log(buffer2.resizable); // false
const view2 = new Uint8Array(buffer2);
console.log(view2[1]); // 2
console.log(view2[7]); // 4
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`ArrayBuffer.prototype.transferToFixedLength` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#arraybufferprototypetransfer-and-friends)
- [es-shims による `ArrayBuffer.prototype.transferToFixedLength` のポリフィル](https://www.npmjs.com/package/arraybuffer.prototype.transfertofixedlength)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.detached")}}
- {{jsxref("ArrayBuffer.prototype.transfer()")}}
