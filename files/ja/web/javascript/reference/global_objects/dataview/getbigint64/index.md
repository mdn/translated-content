---
title: DataView.prototype.getBigInt64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getBigInt64
---

{{JSRef}}

**`getBigInt64()`** メソッドは、符号つき 64 ビット整数 (long long) を {{jsxref("DataView")}} の先頭からのバイト単位のオフセット位置から取得します。

{{EmbedInteractiveExample("pages/js/dataview-getbigint64.html")}}

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
