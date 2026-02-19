---
title: "DOMMatrixReadOnly: fromFloat64Array() 静的メソッド"
short-title: fromFloat64Array()
slug: Web/API/DOMMatrixReadOnly/fromFloat64Array_static
l10n:
  sourceCommit: e8ccddf06c8a9d700661ce2239ecaa4bf88a9529
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

**`fromFloat64Array()`** は {{domxref("DOMMatrixReadOnly")}} インターフェイスの静的メソッドで、新しい {{domxref("DOMMatrixReadOnly")}} オブジェクトを与えられた倍精度（64 ビット）浮動小数点値の配列から作成します。

配列に 6 個の値がある場合、結果は二次元用の行列になります。配列に 16 個の値がある場合、結果は三次元用の行列になります。それ以外の場合は {{jsxref("TypeError")}} 例外が発生します。

## 構文

```js-nolint
DOMMatrixReadOnly.fromFloat64Array(array)
```

### 引数

- `array`
  - : {{jsxref("Float64Array")}} で、列優先順で 6 個または 16 個の要素です。

### 返値

{{domxref("DOMMatrixReadOnly")}} オブジェクトです。

### 例外

- {{jsxref("TypeError")}}
  - : `array` 引数の長さが 6 個または 16 個ではない場合に発生します。

## 例

### Float64Array から二次元用の行列を作成

この例は二次元用の行列を要素 6 個の `Float64Array` から作成します。

```js
const float64Array = new Float64Array([1, 0, 0, 1, 10, 20]);
const matrix2D = DOMMatrixReadOnly.fromFloat64Array(float64Array);

console.log(matrix2D.toString());
// 出力: matrix(1, 0, 0, 1, 10, 20)

console.log(matrix2D.is2D);
// 出力: true

console.log(matrix2D.e, matrix2D.f);
// 出力: 10 20
```

### Float64Array から三次元用の行列を作成

この例は三次元用の行列を要素 16 個の `Float64Array` から作成します。

```js
const float64Array = new Float64Array([
  1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 10, 20, 30, 1,
]);
const matrix3D = DOMMatrixReadOnly.fromFloat64Array(float64Array);

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

- {{domxref("DOMMatrixReadOnly/DOMMatrixReadOnly", "DOMMatrixReadOnly()")}}
- {{domxref("DOMMatrixReadOnly.toFloat32Array()")}}
- {{domxref("DOMMatrixReadOnly.toFloat64Array()")}}
- {{domxref("DOMMatrixReadOnly.fromFloat32Array_static", "DOMMatrixReadOnly.fromFloat32Array()")}}
- {{domxref("DOMMatrixReadOnly.fromMatrix_static", "DOMMatrixReadOnly.fromMatrix()")}}
