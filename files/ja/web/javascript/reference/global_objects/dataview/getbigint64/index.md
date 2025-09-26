---
title: DataView.prototype.getBigInt64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getBigInt64
---

{{JSRef}}

**`getBigInt64()`** メソッドは、符号つき 64 ビット整数 (long long) を {{jsxref("DataView")}} の先頭からのバイト単位のオフセット位置から取得します。

{{InteractiveExample("JavaScript デモ: DataView.getBigInt64()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

// Highest possible BigInt value that fits in a signed 64-bit integer
const max = 2n ** (64n - 1n) - 1n;

const view = new DataView(buffer);
view.setBigInt64(1, max);

console.log(view.getBigInt64(1));
// Expected output: 9223372036854775807n
```

## 構文

```js
getBigInt64(byteOffset);
getBigInt64(byteOffset, littleEndian);
```

### 引数

- byteOffset
  - : データを読み取るビューの先頭からのバイト単位のオフセットです。
- littleEndian
  - : {{optional_inline}} 64 ビット整数を[リトルエンディアンまたはビッグエンディアン](/ja/docs/Glossary/Endianness)のどちらの形式で格納されているかを示します。 `false` または `undefined` の場合、ビッグエンディアンの値が読み取られます。

### 返値

{{jsxref("BigInt")}} です。

### 発生するエラー

- {{jsxref("RangeError")}}
  - : `byteOffset` がビューの末尾を超えて読み取るような値に設定されたときに発生します。

## 解説

アライメントの制約はありません。複数バイトの値はどのオフセットからでも読み取ることができます。

## 例

### `getBigInt64` メソッドの使用

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.getBigInt64(0); // 0n
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("BigInt")}}
