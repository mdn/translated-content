---
title: "DOMMatrix: DOMMatrix() コンストラクター"
short-title: DOMMatrix()
slug: Web/API/DOMMatrix/DOMMatrix
l10n:
  sourceCommit: 359abb1dcdc87d46d7271fc28c53a998a5523bf1
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

**`DOMMatrix()`** コンストラクターは、二次元および三次元演算に適した 4x4 行列を表す新しい {{domxref("DOMMatrix")}} オブジェクトを作成します。

## 構文

```js-nolint
new DOMMatrix()
new DOMMatrix(initString)
new DOMMatrix(initArray)
```

### 引数

- `initString` {{optional_inline}}
  - : CSS の {{cssxref("transform-function/matrix", "matrix()")}} または {{cssxref("transform-function/matrix3d", "matrix3d()")}} の書式で書かれた二次元または三次元行列を表す文字列です。
- `initArray` {{optional_inline}}
  - : 列優先順で 6 個または 16 個の数値が含まれている配列。その他の長さの配列では {{jsxref("TypeError")}} が発生します。
    - 6 要素の配列の場合は行列要素 `[m11, m12, m21, m22, m41, m42]` として解釈され、二次元行列を作成します。
    - 16 要素の配列の場合は行列要素 `[m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44]` として解釈され、三次元行列を作成する。

    この引数が省略された場合、恒等行列、すなわち、`[1, 0, 0, 1, 0, 0]` と等しいものが作成されます。

    この引数が {{jsxref("Float32Array")}} または {{jsxref("Float64Array")}} として指定される場合は、より高性能な静的メソッド {{domxref("DOMMatrix.fromFloat32Array_static", "DOMMatrix.fromFloat32Array()")}} または {{domxref("DOMMatrix.fromFloat64Array_static", "DOMMatrix.fromFloat64Array()")}} の使用を検討してみてください。

### 返値

新しい {{domxref("DOMMatrix")}} オブジェクトです。

### 例外

- {{jsxref("TypeError")}}
  - : 引数が文字列でない場合、または長さが 6 または 16 以外の配列である場合に発生します。
- {{jsxref("SyntaxError")}}
  - : 文字列引数が有効な CSS の {{cssxref("transform-function/matrix", "matrix()")}} または {{cssxref("transform-function/matrix3d", "matrix3d()")}} の書式でない場合、発生します。

## 例

この例では、{{domxref("DOMPointReadOnly.matrixTransform()")}} を呼び出す際の引数として使用する DOMMatrix を作成しています。

```js
const point = new DOMPoint(5, 4);
const scaleX = 2;
const scaleY = 3;
const translateX = 12;
const translateY = 8;
const angle = Math.PI / 2;
const matrix = new DOMMatrix([
  Math.cos(angle) * scaleX,
  Math.sin(angle) * scaleX,
  -Math.sin(angle) * scaleY,
  Math.cos(angle) * scaleY,
  translateX,
  translateY,
]);
const transformedPoint = point.matrixTransform(matrix);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMMatrix.fromFloat32Array_static", "DOMMatrix.fromFloat32Array()")}}
- {{domxref("DOMMatrix.fromFloat64Array_static", "DOMMatrix.fromFloat64Array()")}}
- {{domxref("DOMMatrix.fromMatrix_static", "DOMMatrix.fromMatrix()")}}
