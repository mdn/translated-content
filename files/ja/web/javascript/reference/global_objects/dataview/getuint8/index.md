---
title: DataView.prototype.getUint8()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getUint8
---

{{JSRef}}

**`getUint8()`** メソッドは、符号なし 8 ビット整数 (unsigned byte) 値を {{jsxref("DataView")}} の指定されたバイト単位のオフセットの位置から読み取ります。

{{EmbedInteractiveExample("pages/js/dataview-getuint8.html")}}

## 構文

```
dataview.getUint8(byteOffset)
```

### 引数

- `byteOffset`
  - : ビューの先頭からのバイト単位のオフセットで、データを読み取る位置です。

### 返値

符号なし 8 ビット整数。

### 発生するエラー

- {{jsxref("RangeError")}}
  - : `byteOffset` がビューの末尾を超えて読み取るように設定されている場合に発生します。

## 解説

アライメントの強制はありません。複数バイトの値はどのオフセットからも読み取ることができます。

## 例

### getUint8 メソッドの使用

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.getUint8(1); // 0
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
