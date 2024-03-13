---
title: DataView.prototype.getInt16()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getInt16
---

{{JSRef}}

**`getInt16()`** メソッドは、符号付き 16 ビット整数 (short) 値を {{jsxref("DataView")}} の指定されたバイト単位のオフセットの位置から読み取ります。

{{EmbedInteractiveExample("pages/js/dataview-getint16.html")}}

## 構文

```
dataview.getInt16(byteOffset [, littleEndian])
```

### 引数

- `byteOffset`
  - : ビューの先頭からのバイト単位のオフセットで、データを読み取る位置です。
- `littleEndian`
  - : {{optional_inline}} 16 ビット整数が{{Glossary("Endianness", "リトルエンディアンとビッグエンディアン")}}のどちらの形式で格納されているかを表します。 `false` または `undefined` の場合、ビッグエンディアン値を読み取ります。

### 返値

符号付き 16 ビット整数。

### 発生するエラー

- {{jsxref("RangeError")}}
  - : `byteOffset` がビューの末尾を超えて読み取るように設定されている場合に発生します。

## 解説

アライメントの強制はありません。複数バイトの値はどのオフセットからも読み取ることができます。

## 例

### getInt16 メソッドの使用

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.getInt16(1); // 0
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
