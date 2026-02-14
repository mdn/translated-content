---
title: "DOMMatrixReadOnly: skewY() メソッド"
short-title: skewY()
slug: Web/API/DOMMatrixReadOnly/skewY
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

`skewY()` は {{domxref("DOMMatrixReadOnly")}} インターフェイスのメソッドで、ソース行列に対して指定された歪め変換を Y 軸方向に適用して作成された新しい {{domxref("DOMMatrix")}} を返します。元の行列は変更されません。

Y 軸方向の歪め変換を行って行列を変更する場合は、{{domxref("DOMMatrix.skewYSelf()")}} を参照してください。

## 構文

```js-nolint
skewY()
skewY(sY)
```

### 引数

- `sY`
  - : 数値です。行列を Y 軸方向に歪め変換を行う角度の度数です。

### 返値

[`DOMMatrix`](/ja/docs/Web/API/DOMMatrix) です。

## 例

```js
const matrix = new DOMMatrix(); // 行列を作成
console.log(matrix.toString()); // 元の値
// "matrix(1, 0, 0, 1, 0, 0)"

console.log(matrix.skewY(14).toString()); // Y 軸方向に歪め変換
// "matrix(1, -0.25, 0, 1, 0, 0)"

console.log(matrix.toString()); // 元の行列は変更されない
// "matrix(1, 0, 0, 1, 0, 0)"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMMatrix.skewYSelf()")}}
- {{domxref("DOMMatrixReadOnly.skewX()")}}
- CSS の {{cssxref("transform")}} プロパティ、{{cssxref("transform-function/skew", "skew()")}} 関数、{{cssxref("transform-function/skewY", "skewY()")}} 関数、{{cssxref("transform-function/matrix", "matrix()")}} 関数
- [CSS 座標変換](/ja/docs/Web/CSS/Guides/Transforms)モジュール
- SVG の [`transform`](/ja/docs/Web/SVG/Reference/Attribute/transform) 属性
- {{domxref("CanvasRenderingContext2D")}} インターフェイスの {{domxref("CanvasRenderingContext2D.transform()", "transform()")}} メソッド
