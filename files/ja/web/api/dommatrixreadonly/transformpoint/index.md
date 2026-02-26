---
title: "DOMMatrixReadOnly: transformPoint() メソッド"
short-title: transformPoint()
slug: Web/API/DOMMatrixReadOnly/transformPoint
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

**`transformPoint`** は {{domxref("DOMMatrixReadOnly")}} インターフェイスのメソッドで、指定された点を行列によって座標変換し、新しい {{domxref("DOMPoint")}} オブジェクトを作成します。行列も元の点も変更されません。

行列を点に適用して新しい `DOMPoint` を生成するのは {{domxref("DOMPointReadOnly.matrixTransform()")}} メソッドでもできます。

## 構文

```js-nolint
transformPoint()
transformPoint(point)
```

### 引数

- `point`
  - : {{domxref("DOMPoint")}} または {{domxref("DOMPointReadOnly")}} のインスタンス、または次のプロパティのうち最大 4 つを持つオブジェクトです。
    - `x`
      - : 空間の点の `x` 座標を表す数値です。デフォルト値は `0` です。
    - `y`
      - : 空間の点の `y` 座標を表す数値です。デフォルト値は `0` です。
    - `z`
      - : 空間の点の `z` 座標、または奥行き座標を表す数値です。デフォルト値は `0` です。正の数はユーザーに近づき、負の数は画面の奥へ遠ざかります。
    - `w`
      - : 点の `w` 視点値を表す数値です。デフォルト値は `1` です。

### 返値

{{domxref("DOMPoint")}} です。

## 例

### 二次元座標変換

```js
const matrix = new DOMMatrixReadOnly();
const point = new DOMPointReadOnly(10, 20); // DOMPointReadOnly {x: 10, y: 20, z: 0, w: 1}
let newPoint = matrix.transformPoint(point); // DOMPoint {x: 10, y: 20, z: 0, w: 1}
```

### 三次元座標変換

この例では、三次元の点に三次元の行列を適用します。

```js
// Matrix with translate(22, 37, 10) applied
const matrix3D = new DOMMatrixReadOnly([
  1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 22, 37, 10, 1,
]);
const point3D = new DOMPointReadOnly(5, 10, 3); // DOMPointReadOnly {x: 5, y: 10, z: 3, w: 1}
const transformedPoint3D = point3D.matrixTransform(matrix3D); // DOMPoint {x: 27, y: 47, z: 13, w: 1}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMPointReadOnly.matrixTransform()")}}
- CSS の {{cssxref("transform-function/matrix", "matrix()")}} 関数と {{cssxref("transform-function/matrix3d", "matrix3d()")}} 関数
