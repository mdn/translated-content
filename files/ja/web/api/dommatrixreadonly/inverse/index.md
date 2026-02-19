---
title: "DOMMatrixReadOnly: inverse() メソッド"
short-title: inverse()
slug: Web/API/DOMMatrixReadOnly/inverse
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

**`inverse()`** は {{domxref("DOMMatrixReadOnly")}} インターフェイスのメソッドで、元の行列の逆行列となる新しい行列を作成します。行列が逆行列化できない場合、新しい行列の要素はすべて `NaN` に設定され、その {{domxref("DOMMatrixReadOnly.is2D", "is2D")}} プロパティは `false` に設定されます。元の行列は変更されません。

行列を変更して逆行列を作成する場合は、{{domxref("DOMMatrix.invertSelf()")}} を参照してください。

## 構文

```js-nolint
inverse()
```

### 引数

なし。

### 返値

{{domxref("DOMMatrix")}} です。

## 例

```js
const matrix = new DOMMatrixReadOnly().rotate(30);
const invertedMatrix = matrix.inverse();
console.log(matrix.toString());
// 出力: matrix(0.866, 0.5, -0.5, 0.866, 0, 0)
console.log(invertedMatrix.toString());
// 出力: matrix(0.866, -0.5, 0.5, 0.866, 0, 0)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMMatrix.invertSelf()")}}
- {{domxref("DOMMatrixReadOnly.flipX()")}}
- {{domxref("DOMMatrixReadOnly.flipY()")}}
- CSS の {{CSSxRef("transform-function/matrix", "matrix()")}} 関数
- CSS の {{CSSxRef("transform-function/matrix3d", "matrix3d()")}} 関数
