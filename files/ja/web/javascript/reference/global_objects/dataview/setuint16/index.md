---
title: DataView.prototype.setUint16()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setUint16
---

{{JSRef}}

**`setUint16()`** メソッドは、符号なし 16 ビット整数 (unsigned short) 値を {{jsxref("DataView")}} の指定されたバイト単位のオフセットの位置に格納します。

{{EmbedInteractiveExample("pages/js/dataview-setuint16.html")}}

## 構文

```
dataview.setUint16(byteOffset, value [, littleEndian])
```

### 引数

- `byteOffset`
  - : ビューの先頭からのバイト単位のオフセットで、データを格納する位置です。
- `value`
  - : 設定する値です。
- `littleEndian`
  - : {{optional_inline}} 16 ビット整数を{{Glossary("Endianness", "リトルエンディアンとビッグエンディアン")}}のどちらの形式で格納するかを表します。 `false` または `undefined` の場合、ビッグエンディアン値が書き込まれます。

### 返値

{{jsxref("undefined")}}。

### 発生するエラー

- {{jsxref("RangeError")}}
  - : `byteOffset` がビューの末尾を超えて格納するように設定されている場合に発生します。

## 例

### setUint16 メソッドの使用

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.setUint16(1, 3);
dataview.getUint16(1); // 3
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
