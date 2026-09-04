---
title: "DOMMatrixReadOnly: toString() メソッド"
short-title: toString()
slug: Web/API/DOMMatrixReadOnly/toString
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{APIRef("DOM")}}

**`toString()`** は {{domxref("DOMMatrixReadOnly")}} インターフェイスの{{Glossary("stringifier", "文字列化関数")}}で、この行列の値を、`matrix()` または `matrix3d()` の CSS [座標変換関数](/ja/docs/Web/CSS/Reference/Values/transform-function)の形の文字列として返します。これは、6 個または 16 個の座標値をカンマで区切ったリストで、それぞれ `"matrix(` または `"matrix3d(` で始まり、`)"` で終わります。

二次元行列の場合、要素 [`a` から `f`](/ja/docs/Web/API/DOMMatrix#a) の合計 6 つの値が列挙され、`matrix(a, b, c, d, e, f)` の形式を取ります。この構文の詳細については、CSS の {{cssxref("transform-function/matrix", "matrix()")}} 関数を参照してください。

三次元行列の場合、返される文字列には [16 個の要素](/ja/docs/Web/API/DOMMatrix#m11)すべてが含まれており、`matrix3d(m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44)` の形式を取ります。三次元表記の構文の詳細については、CSS の {{cssxref("transform-function/matrix3d", "matrix3d()")}} 関数を参照してください。

## 構文

```js-nolint
toString()
```

### 引数

なし。

### 返値

文字列です。`matrix()` または `matrix3d()` 関数の構文内で、リストの値をカンマで区切ったものです。

## 例

```js
const matrix = new DOMMatrixReadOnly();
console.log(matrix.translate(20, 30).toString()); // matrix(1, 0, 0, 1, 20, 30)
console.log(matrix.translate(30, 40, 50).toString()); // matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 30, 40, 50, 1)
console.log(matrix.skewY(15).skewX(5).rotate(3).translate(20, 50).toString());
// matrix(1.003, 0.321, 0.035, 1.01, 21.816, 56.824)
console.log(
  matrix.skewY(15).skewX(5).rotate(3).translate(20, 50, 60).toString(),
);
// matrix3d(1.003, 0.321, 0, 0, 0.0350, 1.008, 0, 0, 0, 0, 1, 0, 21.816, 56.824, 60, 1)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMMatrixReadOnly.toJSON()")}}
- {{domxref("DOMMatrix.setMatrixValue()")}}
