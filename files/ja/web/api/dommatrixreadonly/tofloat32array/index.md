---
title: "DOMMatrixReadOnly: toFloat32Array() メソッド"
short-title: toFloat32Array()
slug: Web/API/DOMMatrixReadOnly/toFloat32Array
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("DOM")}}

**`toFloat32Array()`** は {{domxref("DOMMatrixReadOnly")}} インターフェイスのメソッドで、行列を構成する 16 個の要素すべて (`m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`) を格納した新しい {{jsxref("Float32Array")}} を返します。要素は、列優先順（言い換えれば、第 1 列を上から下へ、次に第 2 列、という順序）で単精度浮動小数点数として配列に格納されます。

倍精度浮動小数点数にする場合は、{{domxref("DOMMatrixReadOnly.toFloat64Array()")}} を参照してください。

## 構文

```js-nolint
toFloat32Array()
```

### 引数

なし。

### 返値

{{jsxref("Float32Array")}} で、行列の 16 要素の値を持つ配列です。

## 例

### 基本的な使い方

```js
const matrix = new DOMMatrixReadOnly();
const float32 = matrix.translate(20, 30, 50).toFloat32Array();
console.log(float32); // Float64Array(16) [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 20, 30, 0, 1 ] ]
console.log(`m41: ${float32[12]}, m42: ${float32[13]}, m43: ${float32[14]}`); // m41: 20, m42: 30, M44: 40
```

### 単精度

行列の値にアクセスする方法は複数あります。この例では、行列を 30 度回転させ、 {{domxref("DOMMatrixReadOnly.toJSON()")}} メソッドを使用して回転後の状態を JSON オブジェクトとして、`toFloat32Array()` メソッドを使用して単精度浮動小数点数配列として保存します。

```js
const matrix = new DOMMatrixReadOnly();
const json = matrix.rotate(30).toJSON();
const float32 = matrix.rotate(30).toFloat32Array();

console.log(`a: ${json["a"]}, b: ${json["b"]}`); // a: 0.8660254037844387, b: 0.49999999999999994
console.log(`a: ${float32[0]}, b: ${float32[1]}`); // a: 0.8660253882408142, b: 0.5
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMMatrixReadOnly.toFloat64Array()")}}
- {{domxref("DOMMatrix.setMatrixValue()")}}
