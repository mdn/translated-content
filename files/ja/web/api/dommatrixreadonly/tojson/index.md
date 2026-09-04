---
title: "DOMMatrixReadOnly: toJSON() メソッド"
short-title: toJSON()
slug: Web/API/DOMMatrixReadOnly/toJSON
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("DOM")}}

**`toJSON()`** は {{domxref("DOMMatrixReadOnly")}} インターフェイスのメソッドで、 {{jsxref("JSON")}} オブジェクトを生成して返します。この JSON オブジェクトには、二次元行列の要素 `a` から `f`、4×4 三次元行列の 16 個の要素 `m[1-4][1-4]`、論理値の {{domxref("DOMMatrixReadOnly.is2D", "is2D")}} プロパティ、および論理値の {{domxref("DOMMatrixReadOnly.isIdentity", "isIdentity")}} プロパティが含まれます。

## 構文

```js-nolint
toJSON()
```

### 引数

なし。

### 返値

{{jsxref("JSON")}} オブジェクトです。`DOMMatrixReadOnly` オブジェクトの JSON 表現です。

## 例

```js
const matrix = new DOMMatrixReadOnly();
console.log(matrix.translate(20, 30).toJSON());
/*
{
    "a": 1,
    "b": 0,
    "c": 0,
    "d": 1,
    "e": 20,
    "f": 30,
    "m11": 1,
    "m12": 0,
    "m13": 0,
    "m14": 0,
    "m21": 0,
    "m22": 1,
    "m23": 0,
    "m24": 0,
    "m31": 0,
    "m32": 0,
    "m33": 1,
    "m34": 0,
    "m41": 20,
    "m42": 30,
    "m43": 0,
    "m44": 1,
    "is2D": true,
    "isIdentity": false
}
*/
console.log(matrix.translate(22, 55, 66).toJSON());
/*
{
    "a": 1,
    "b": 0,
    "c": 0,
    "d": 1,
    "e": 22,
    "f": 55,
    "m11": 1,
    "m12": 0,
    "m13": 0,
    "m14": 0,
    "m21": 0,
    "m22": 1,
    "m23": 0,
    "m24": 0,
    "m31": 0,
    "m32": 0,
    "m33": 1,
    "m34": 0,
    "m41": 22,
    "m42": 55,
    "m43": 66,
    "m44": 1,
    "is2D": false,
    "isIdentity": false
}
*/
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMMatrixReadOnly.toString()")}}
- {{domxref("DOMMatrix.setMatrixValue()")}}
