---
title: DataView.prototype.byteOffset
slug: Web/JavaScript/Reference/Global_Objects/DataView/byteOffset
---

{{JSRef}}

**`byteOffset`** アクセサープロパティは、このビューの {{jsxref("ArrayBuffer")}} または {{jsxref("SharedArrayBuffer")}} の先頭からオフセットを表します。

{{InteractiveExample("JavaScript デモ: DataView.byteOffset")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer, 12, 4); // From byte 12 for the next 4 bytes

console.log(view.byteOffset);
// Expected output: 12
```

## 解説

`byteOffset` プロパティは、設定アクセサー関数が `undefined` である、すなわち読み取りのみができるアクセサープロパティです。この値は `DataView` が構築されたときに確立され、変更することができません。

## 例

### byteOffset プロパティの使用

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.byteOffset; // 0 (no offset specified)

var dataview2 = new DataView(buffer, 3);
dataview2.byteOffset; // 3 (as specified when constructing the DataView)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
