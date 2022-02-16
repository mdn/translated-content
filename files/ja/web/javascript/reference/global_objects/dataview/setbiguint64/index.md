---
title: DataView.prototype.setBigUint64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setBigUint64
tags:
  - BigInt
  - DataView
  - JavaScript
  - Method
  - Prototype
  - Reference
  - TypedArrays
  - setBigUint64
translation_of: Web/JavaScript/Reference/Global_Objects/DataView/setBigUint64
browser-compat: javascript.builtins.DataView.setBigUint64
---
{{JSRef}}

**`setBigUint64()`** メソッドは、符号なし 64 ビット整数 (unsigned long long) を {{jsxref("DataView")}} の先頭からのバイト単位の指定されたオフセット位置に格納します。

{{EmbedInteractiveExample("pages/js/dataview-setbiguint64.html")}}

## 構文

```js
setBigUint64(byteOffset, value)
setBigUint64(byteOffset, value, littleEndian)
```

### 引数

- byteOffset
  - : データを格納するビューの先頭からのバイト単位のオフセットです。
- value
  - : {{jsxref("BigInt")}} として設定する値です。符号なし 64 ビット整数に符合する最も大きな値は、 `2n ** 64n - 1n` (`18446744073709551615n`) です。これを上回ると、ゼロ (`0n`) になります。
- littleEndian
  - : {{optional_inline}} 64 ビット整数を[リトルエンディアンまたはビッグエンディアン](/ja/docs/Glossary/Endianness)のどちらの形式で格納するかを示します。 `false` または `undefined` の場合、ビッグエンディアンの値が書き込まれます。

### 返値

{{jsxref("undefined")}} です。

### 発生するエラー

- {{jsxref("RangeError")}}
  - : `byteOffset` がビューの末尾を超えて格納するような値に設定されたときに発生します。

## 例

### `setBigUint64` メソッドの使用

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.setBigUint64(0, 3n);
dataview.getBigUint64(0); // 3n
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("BigInt")}}
