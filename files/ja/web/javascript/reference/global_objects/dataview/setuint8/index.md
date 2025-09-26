---
title: DataView.prototype.setUint8()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setUint8
---

{{JSRef}}

**`setUint8()`** メソッドは、符号なし 8 ビット整数 (byte) 値を {{jsxref("DataView")}} の指定されたバイト単位のオフセットの位置に格納します。

{{InteractiveExample("JavaScript デモ: DataView.setUint8()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setUint8(1, 255); // Max unsigned 8-bit integer

console.log(view.getUint8(1));
// Expected output: 255
```

## 構文

```
dataview.setUint8(byteOffset, value)
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

### setUint8 メソッドの使用

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.setUint8(1, 3);
dataview.getUint8(1); // 3
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
