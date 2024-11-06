---
title: DataView.prototype.setInt8()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setInt8
---

{{JSRef}}

**`setInt8()`** メソッドは、符号付き 8 ビット整数 (byte) 値を {{jsxref("DataView")}} の指定されたバイト単位のオフセットの位置に格納します。

{{EmbedInteractiveExample("pages/js/dataview-setint8.html")}}

## 構文

```
dataview.setInt8(byteOffset, value)
```

### 引数

- `byteOffset`
  - : ビューの先頭からのバイト単位のオフセットで、データを格納する位置です。
- `value`
  - : 設定する値です。

### 返値

{{jsxref("undefined")}}。

### 発生するエラー

- {{jsxref("RangeError")}}
  - : `byteOffset` がビューの末尾を超えて格納するように設定されている場合に発生します。

## 例

### setInt8 メソッドの使用

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.setInt8(1, 3);
dataview.getInt8(1); // 3
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
