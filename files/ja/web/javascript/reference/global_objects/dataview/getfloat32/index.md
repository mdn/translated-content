---
title: DataView.prototype.getFloat32()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getFloat32
---

{{JSRef}}

**`getFloat32()`** メソッドは、符号付き 32 ビット浮動小数点数 (float) 値を {{jsxref("DataView")}} の指定されたバイト単位のオフセットの位置から読み取ります。

{{InteractiveExample("JavaScript デモ: DataView.getFloat32()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setFloat32(1, Math.PI);

console.log(view.getFloat32(1));
// Expected output: 3.1415927410125732
```

## 構文

```
dataview.getFloat32(byteOffset [, littleEndian])
```

### 引数

- `byteOffset`
  - : ビューの先頭からのバイト単位のオフセットで、データを読み取る位置です。
- `littleEndian`
  - : {{optional_inline}} 32 ビット浮動小数点数が{{Glossary("Endianness", "リトルエンディアンとビッグエンディアン")}}のどちらの形式で格納されているかを表します。 `false` または `undefined` の場合、ビッグエンディアン値を読み取ります。

### 返値

符号付き 32 ビット浮動小数点数。

### 発生するエラー

- {{jsxref("RangeError")}}
  - : `byteOffset` がビューの末尾を超えて読み取るように設定されている場合に発生します。

## 解説

アライメントの強制はありません。複数バイトの値はどのオフセットからも読み取ることができます。

## 例

### getFloat32 メソッドの使用

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.getFloat32(1); // 0
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
