---
title: ArrayBuffer.prototype.transfer()
short-title: transfer()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/transfer
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`transfer()`** は {{jsxref("ArrayBuffer")}} インスタンスのメソッドで、このバッファと同じバイト内容を持つ新しい `ArrayBuffer` を作成し、その後でこのバッファを分離します。

## 構文

```js-nolint
transfer()
transfer(newByteLength)
```

### 引数

- `newByteLength` {{optional_inline}}
  - : 新しい `ArrayBuffer` の {{jsxref("ArrayBuffer/byteLength", "byteLength")}} です。デフォルト値はこの `ArrayBuffer` の `byteLength` です。
    - `newByteLength` がこの `ArrayBuffer` の `byteLength` より小さい場合、「オーバーフロー」したバイトは破棄されます。
    - `newByteLength` がこの `ArrayBuffer` の `byteLength` より大きい場合、余分なバイトはゼロで埋められます。
    - この `ArrayBuffer` がサイズ変更可能な場合、`newByteLength` はその {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} を超えてはなりません。

### 返値

新しい {{jsxref("ArrayBuffer")}} オブジェクトです。その内容は、この `ArrayBuffer` の内容で初期化され、余分なバイトがある場合はゼロで埋められます。新しい `ArrayBuffer` は、この `ArrayBuffer` がサイズ変更可能である場合にのみサイズ変更可能であり、その場合、その {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} はこの `ArrayBuffer` のものと同じになります。元の `ArrayBuffer` は切り離されます。

### 例外

- {{jsxref("RangeError")}}
  - : この `ArrayBuffer` がサイズ変更可能であり、`newByteLength` がこの `ArrayBuffer` の {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} を超える場合に発生します。
- {{jsxref("TypeError")}}
  - : この `ArrayBuffer` が既に分離されている場合、または指定された操作によってのみ分離可能な場合に発生します。現在、{{domxref("GPUBuffer.getMappedRange()")}} や [`WebAssembly.Memory.buffer`](/ja/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer) などの特定の Web API のみが、指定された分離メソッドを持つ `ArrayBuffer` オブジェクトを作成できます。

## 解説

`transfer()` メソッドは、[構造化クローンアルゴリズム](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)と同じ操作を実行します。この `ArrayBuffer` のバイトを新しい `ArrayBuffer` オブジェクトにコピーし、その後この `ArrayBuffer` オブジェクトを分離します。詳細については、[ArrayBuffer の移譲](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#arraybuffers_の委譲)を参照してください。

`transfer()` はこの `ArrayBuffer` のサイズ変更可能状態を維持します。新しい `ArrayBuffer` をサイズ変更不可にしたい場合は、代わりに {{jsxref("ArrayBuffer/transferToFixedLength", "transferToFixedLength()")}} を使用してください。固定長バッファーをサイズ変更可能状態にするバッファー転送方法はありません。

`transfer()`はとても効率的です。実装側がこのメソッドをゼロコピー移動や`realloc`として実装できるため、データの実際のコピーが必要ないからです。

## 例

### ArrayBuffer の委譲

```js
// ArrayBuffer を作成し、数バイトを書き込む
const buffer = new ArrayBuffer(8);
const view = new Uint8Array(buffer);
view[1] = 2;
view[7] = 4;

// バッファーを同じサイズにコピー
const buffer2 = buffer.transfer();
console.log(buffer.detached); // true
console.log(buffer2.byteLength); // 8
const view2 = new Uint8Array(buffer2);
console.log(view2[1]); // 2
console.log(view2[7]); // 4

// バッファーをより小さいサイズにコピー
const buffer3 = buffer2.transfer(4);
console.log(buffer3.byteLength); // 4
const view3 = new Uint8Array(buffer3);
console.log(view3[1]); // 2
console.log(view3[7]); // undefined

// バッファーをより大きなサイズにコピー
const buffer4 = buffer3.transfer(8);
console.log(buffer4.byteLength); // 8
const view4 = new Uint8Array(buffer4);
console.log(view4[1]); // 2
console.log(view4[7]); // 0

// 分離済みの場合は、 TypeError が発生
buffer.transfer(); // TypeError: Cannot perform ArrayBuffer.prototype.transfer on a detached ArrayBuffer
```

### リサイズ可能な ArrayBuffer の委譲

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const view = new Uint8Array(buffer);
view[1] = 2;
view[7] = 4;

// バッファーをより小さいサイズにコピー
const buffer2 = buffer.transfer(4);
console.log(buffer2.byteLength); // 4
console.log(buffer2.maxByteLength); // 16
const view2 = new Uint8Array(buffer2);
console.log(view2[1]); // 2
console.log(view2[7]); // undefined
buffer2.resize(8);
console.log(view2[7]); // 0

// バッファーをより大きな maxByteLength のサイズにコピー
const buffer3 = buffer2.transfer(12);
console.log(buffer3.byteLength); // 12

// バッファーを maxByteLength より大きなサイズにコピー
buffer3.transfer(20); // RangeError: Invalid array buffer length
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`ArrayBuffer.prototype.transfer` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#arraybufferprototypetransfer-and-friends)
- [es-shims による `ArrayBuffer.prototype.transfer` のポリフィル](https://www.npmjs.com/package/arraybuffer.prototype.transfer)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.detached")}}
- {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}}
