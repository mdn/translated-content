---
title: "DOMMatrix: fromFloat64Array() 静的メソッド"
short-title: fromFloat64Array()
slug: Web/API/DOMMatrix/fromFloat64Array_static
l10n:
  sourceCommit: f8939dd06d7b120f77c4b4c70cac591d0eb20beb
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

**`fromFloat64Array()`** は {{domxref("DOMMatrix")}} インターフェイスの静的メソッドで、新しい {{domxref("DOMMatrix")}} オブジェクトを作成して指定された倍精度（64 ビット）浮動小数点値の配列で初期化します。

配列に 6 個の値があった場合、結果は二次元行列になります。配列に 16 個の値があった場合、結果は三次元行列になります。それ以外の場合は、{{jsxref("TypeError")}} 例外が発生します。

## 構文

```js-nolint
DOMMatrix.fromFloat64Array(array)
```

### 引数

- `array`
  - : {{jsxref("Float64Array")}} で、列優先順で 6 個または 16 個の要素があるものです。

### 返値

{{domxref("DOMMatrix")}} オブジェクトです。

### 例外

- {{jsxref("TypeError")}}
  - : `array` の長さが 6 または 16 以外である場合に発生します。

## 例

### Float64Array から二次元行列を作成

この例は、 6 個の要素の `Float64Array` から二次元行列を作成します。

```js
const float64Array = new Float64Array([1, 0, 0, 1, 10, 20]);
const matrix2D = DOMMatrix.fromFloat64Array(float64Array);

console.log(matrix2D.toString());
// 出力: matrix(1, 0, 0, 1, 10, 20)

console.log(matrix2D.is2D);
// 出力: true

console.log(matrix2D.e, matrix2D.f);
// 出力: 10 20
```

### Float64Array から三次元行列を作成

この例は、 16 個の要素の `Float64Array` から三次元行列を作成します。

```js
const float64Array = new Float64Array([
  1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 10, 20, 30, 1,
]);
const matrix3D = DOMMatrix.fromFloat64Array(float64Array);

console.log(matrix3D.is2D);
// 出力: false

console.log(matrix3D.m41, matrix3D.m42, matrix3D.m43);
// 出力: 10 20 30
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMMatrix/DOMMatrix", "DOMMatrix()")}}
- {{domxref("DOMMatrixReadOnly.toFloat32Array()")}}
- {{domxref("DOMMatrixReadOnly.toFloat64Array()")}}
- {{domxref("DOMMatrix.fromFloat32Array_static", "DOMMatrix.fromFloat32Array()")}}
- {{domxref("DOMMatrix.fromMatrix_static", "DOMMatrix.fromMatrix()")}}
