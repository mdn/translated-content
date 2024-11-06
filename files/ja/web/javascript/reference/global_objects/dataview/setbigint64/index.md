---
title: DataView.prototype.setBigInt64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setBigInt64
---

{{JSRef}}

**`setBigInt64()`** メソッドは、符号つき 64 ビット整数 (long long) を {{jsxref("DataView")}} の先頭からのバイト単位の指定されたオフセット位置に格納します。

{{EmbedInteractiveExample("pages/js/dataview-setbigint64.html")}}

## 構文

```js
setBigInt64(byteOffset, value);
setBigInt64(byteOffset, value, littleEndian);
```

### 引数

- byteOffset
  - : データを格納するビューの先頭からのバイト単位のオフセットです。
- value
  - : {{jsxref("BigInt")}} として設定する値です。符号つき 64 ビット整数に符合する最も大きな値は、 `2n ** (64n -1n) - 1n` (`9223372036854775807n`) です。これを上回ると、負の数 (`-9223372036854775808n`) になります。
- littleEndian
  - : {{optional_inline}} 64 ビット整数を[リトルエンディアンまたはビッグエンディアン](/ja/docs/Glossary/Endianness)のどちらの形式で格納するかを示します。 `false` または `undefined` の場合、ビッグエンディアンの値が書き込まれます。

### 返値

{{jsxref("undefined")}} です。

### 発生するエラー

- {{jsxref("RangeError")}}
  - : `byteOffset` がビューの末尾を超えて格納するような値に設定されたときに発生します。

## 例

### `setBigInt64` メソッドの使用

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.setBigInt64(0, 3n);
dataview.getBigInt64(0); // 3n
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("BigInt")}}
