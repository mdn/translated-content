---
title: "DOMMatrixReadOnly: fromMatrix() 静的メソッド"
short-title: fromMatrix()
slug: Web/API/DOMMatrixReadOnly/fromMatrix_static
l10n:
  sourceCommit: e8ccddf06c8a9d700661ce2239ecaa4bf88a9529
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

**`fromMatrix()`** は {{domxref("DOMMatrixReadOnly")}} インターフェイスの静的メソッドで、新しい {{domxref("DOMMatrixReadOnly")}} オブジェクトを、与えられた既存の行列またはそのプロパティの値を提供するオブジェクトから作成します。

## 構文

```js-nolint
DOMMatrixReadOnly.fromMatrix()
DOMMatrixReadOnly.fromMatrix(other)
```

### 引数

- `other` {{optional_inline}}
  - : {{domxref("DOMMatrix")}} か {{domxref("DOMMatrixReadOnly")}} か、同じプロパティを持つオブジェクトです。すべてのプロパティのデフォルトは `0` です。プロパティは次の通りです。
    - `is2D`
      - : 論理値。行列を二次元行列として作成する場合に `true` を指定します。`m13`、`m14`、`m23`、`m24`、`m31`、`m32`、`m34`、`m43` のいずれかがゼロでない場合、または `m33` もしくは `m44` のどちらかが 1 でない場合、デフォルトは `false` となります。それ以外の場合はデフォルトで `true` となります。
    - `m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`
      - : 4 × 4 行列のそれぞれの要素を表す数値。`m11` から `m14` は第 1 列、`m21` から `m24` は第 2 列、以下同様となります。`m11`、`m22`、`m33`、`m44` はデフォルトで `1`、その他の要素はすべてデフォルトで `0` となります。

        `is2D` が明示的に `true` に設定されている場合、`m13`、`m14`、`m23`、`m24`、`m31`、`m32`、`m34`、`m43` は省略するか `0` に設定しなければならないし、`m33` と `m44` は省略するか `1` に設定しなければなりません。

    - `a`, `b`, `c`, `d`, `e`, `f`
      - : 二次元行列の初期化時に便利なように、それぞれ `m11`、`m12`、`m21`、`m22`、`m41`、`m42` の別名です。これらの別名を `m` の対応する変数につけて指定する場合、その値は等しくなければなりません。

### 返値

{{domxref("DOMMatrixReadOnly")}} オブジェクトです。

### 例外

- {{jsxref("TypeError")}}
  - : 指定されたオブジェクトのプロパティに矛盾がある場合（例えば、`a` と `m11` の両方が指定されているが値が異なる場合）に発生する。

## 例

### オブジェクトから行列を作成

この例では、オブジェクト内で行列値を指定することで `DOMMatrixReadOnly` を作成します。

```js
const matrix = DOMMatrixReadOnly.fromMatrix({
  a: 1,
  b: 0,
  c: 0,
  d: 1,
  e: 50,
  f: 50,
  is2D: true,
});

console.log(matrix.toString());
// 出力: matrix(1, 0, 0, 1, 50, 50)

console.log(matrix.is2D);
// 出力: true
```

### 既存の行列から行列を作成

この例では、新しい `DOMMatrixReadOnly` を既存の `DOMMatrixReadOnly` から作成します。

```js
const matrix1 = new DOMMatrixReadOnly([1, 0, 0, 1, 100, 100]);
const matrix2 = DOMMatrixReadOnly.fromMatrix(matrix1);

console.log(matrix2.toString());
// 出力: matrix(1, 0, 0, 1, 100, 100)
```

### デフォルトの恒等行列を作成

この例は、引数なしで `fromMatrix()` を呼び出すと恒等行列が作成されることを示しています。

```js
const identityMatrix = DOMMatrixReadOnly.fromMatrix();

console.log(identityMatrix.toString());
// 出力: matrix(1, 0, 0, 1, 0, 0)

console.log(identityMatrix.isIdentity);
// 出力: true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMMatrixReadOnly.DOMMatrixReadOnly", "DOMMatrixReadOnly()")}} コンストラクター
- {{domxref("DOMMatrixReadOnly.fromFloat32Array_static", "DOMMatrixReadOnly.fromFloat32Array()")}}
- {{domxref("DOMMatrixReadOnly.fromFloat64Array_static", "DOMMatrixReadOnly.fromFloat64Array()")}}
