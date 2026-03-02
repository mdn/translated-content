---
title: "DOMMatrixReadOnly: multiply() メソッド"
short-title: multiply()
slug: Web/API/DOMMatrixReadOnly/multiply
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

**`multiply()`** は {{domxref("DOMMatrixReadOnly")}} インターフェイスのメソッドで、指定された行列と `otherMatrix` 引数のドット積となる新しい行列を生成し、それを返します。`otherMatrix` が省略された場合、行列は右下隅と、その直上かつ左隣の要素（`m33` と `m34`）を除き、すべての要素が `0` である行列と乗算されます。これらの要素はデフォルト値 `1` を持ちます。元の行列は変更されません。

行列を乗算しつつ変化させるには、{{domxref("DOMMatrix.multiplySelf()")}} を参照してください。

## 構文

```js-nolint
multiply()
multiply(otherMatrix)
```

### 引数

- `otherMatrix` {{optional_inline}}
  - : 乗算する [`DOMMatrix`](/ja/docs/Web/API/DOMMatrix) です。

### 返値

{{domxref("DOMMatrix")}} です。

## 例

```js
const matrix = new DOMMatrixReadOnly().translate(13, 21);
const multipliedMatrix = matrix.multiply(matrix);
console.log(matrix.toString()); // 出力: matrix(1, 0, 0, 1, 13, 21)
console.log(multipliedMatrix.toString()); // 出力: matrix(1, 0, 0, 1, 26, 42)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMMatrix.multiplySelf()")}}
- {{domxref("DOMMatrix.preMultiplySelf()")}}
- CSS の {{CSSxRef("transform-function/matrix", "matrix()")}} 関数
- CSS の {{CSSxRef("transform-function/matrix3d", "matrix3d()")}} 関数
