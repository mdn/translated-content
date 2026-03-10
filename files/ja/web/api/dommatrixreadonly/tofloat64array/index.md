---
title: "DOMMatrixReadOnly: toFloat64Array() メソッド"
short-title: toFloat64Array()
slug: Web/API/DOMMatrixReadOnly/toFloat64Array
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("DOM")}}

**`toFloat64Array()`** は {{domxref("DOMMatrixReadOnly")}} インターフェイスのメソッドで、行列を構成する 16 個の要素すべて (`m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`) を格納した新しい {{jsxref("Float64Array")}} を返します。要素は、列優先順（言い換えれば、第 1 列を上から下へ、次に第 2 列、という順序）で倍精度浮動小数点数として配列に格納されます。

## 構文

```js-nolint
toFloat64Array()
```

### 引数

なし。

### 返値

{{jsxref("Float64Array")}} で、行列の 16 要素の値を持つ配列です。

## 例

```js
const matrix = new DOMMatrixReadOnly();
let float64 = matrix.translate(20, 30, 50).toFloat64Array();
console.log(float64); // Float64Array(16) [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 20, 30, 0, 1 ] ]
console.log(`m41: ${float64[12]}, m42: ${float64[13]}, m43: ${float64[14]}`); // m41: 20, m42: 30, M44: 40

float64 = matrix.rotate(30).toFloat64Array();
console.log(float64);
console.log(`m11: ${float64[0]}, m12: ${float64[1]}`); // m11: 0.8660254037844387, m12: 0.49999999999999994
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMMatrixReadOnly.toFloat32Array()")}}
- {{domxref("DOMMatrix.setMatrixValue()")}}
