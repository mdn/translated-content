---
title: "DOMMatrixReadOnly: DOMMatrixReadOnly() コンストラクター"
short-title: DOMMatrixReadOnly()
slug: Web/API/DOMMatrixReadOnly/DOMMatrixReadOnly
l10n:
  sourceCommit: 359abb1dcdc87d46d7271fc28c53a998a5523bf1
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

**`DOMMatrixReadOnly`** コンストラクターは新しい {{domxref("DOMMatrixReadOnly")}} オブジェクトを作成します。このオブジェクトは 4x4 の行列を表し、 2D および 3D の演算に適しています。

## 構文

```js-nolint
new DOMMatrixReadOnly()
new DOMMatrixReadOnly(initString)
new DOMMatrixReadOnly(initArray)
```

### 引数

- `initString` {{optional_inline}}
  - : CSS の {{cssxref("transform-function/matrix", "matrix()")}} または {{cssxref("transform-function/matrix3d", "matrix3d()")}} の形式で 2D または 3D の行列を表す文字列です。
- `initArray` {{optional_inline}}
  - : 列優先順で 6 または 16 個の数値を含む配列。それ以外の長さの配列では {{jsxref("TypeError")}} が発生します。
    - 6 個の要素の配列の場合は、行列成分 `[m11, m12, m21, m22, m41, m42]` と解釈され、2D 行列を作成します。
    - 16 個の要素の配列の場合は、行列成分 `[m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44]` と解釈され、3D 行列を作成します。

    この引数が省略された場合、恒等行列が作成されます。すなわち、`[1, 0, 0, 1, 0, 0]` と同等です。

    この引数が {{jsxref("Float32Array")}} または {{jsxref("Float64Array")}} で提供される場合は、より高性能な静的メソッドである {{domxref("DOMMatrixReadOnly.fromFloat32Array_static", "DOMMatrixReadOnly.fromFloat32Array()")}} または {{domxref("DOMMatrixReadOnly.fromFloat64Array_static", "DOMMatrixReadOnly.fromFloat64Array()")}} を代わりに使用することを検討してください。

### 返値

新しい {{domxref("DOMMatrixReadOnly")}} オブジェクトです。

### 例外

- {{jsxref("TypeError")}}
  - : 引数が文字列でない場合、または長さが 6 または 16 以外の配列である場合に発生します。
- {{jsxref("SyntaxError")}}
  - : 文字列引数が有効な CSS の {{cssxref("transform-function/matrix", "matrix()")}} または {{cssxref("transform-function/matrix3d", "matrix3d()")}} 形式でない場合に発生します。

## 例

### DOMMatrixReadOnly を文字列から作成

```js
const matrixFromString = new DOMMatrixReadOnly("matrix(1, 0, 0, 1, 10, 20)");
console.log(matrixFromString.toJSON());
// 出力: {a: 1, b: 0, c: 0, d: 1, e: 10, f: 20}
```

### DOMMatrixReadOnly を配列から作成

```js
const matrixFromArray = new DOMMatrixReadOnly([1, 0, 0, 1, 10, 20]);
console.log(matrixFromArray.toJSON());
// 出力: {a: 1, b: 0, c: 0, d: 1, e: 10, f: 20}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMMatrixReadOnly.fromFloat32Array_static", "DOMMatrixReadOnly.fromFloat32Array()")}}
- {{domxref("DOMMatrixReadOnly.fromFloat64Array_static", "DOMMatrixReadOnly.fromFloat64Array()")}}
- {{domxref("DOMMatrixReadOnly.fromMatrix_static", "DOMMatrixReadOnly.fromMatrix()")}}
