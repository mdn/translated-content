---
title: DataView.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/DataView/byteLength
---

{{JSRef}}

**`byteLength`** アクセサープロパティは、このビューの {{jsxref("ArrayBuffer")}} または {{jsxref("SharedArrayBuffer")}} の先頭から長さを (バイト単位で) 表します。

{{InteractiveExample("JavaScript デモ: DataView.byteLength")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view1 = new DataView(buffer);
const view2 = new DataView(buffer, 12, 4); // From byte 12 for the next 4 bytes

console.log(view1.byteLength + view2.byteLength); // 16 + 4
// Expected output: 20
```

## 解説

`byteLength` プロパティは、設定アクセサー関数が `undefined` である、すなわち読み取りのみができるアクセサープロパティです。この値は `DataView` が構築されたときに確立され、変更することができません。 `DataView` がオフセットや `byteLength` を指定していなかった場合は、参照されている `ArrayBuffer` または `SharedArrayBuffer` の `byteLength` が返されます。

## 例

### byteLength プロパティの使用

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.byteLength; // 8 (matches the byteLength of the buffer)

var dataview2 = new DataView(buffer, 1, 5);
dataview2.byteLength; // 5 (as specified when constructing the DataView)

var dataview3 = new DataView(buffer, 2);
dataview3.byteLength; // 6 (due to the offset of the constructed DataView)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
