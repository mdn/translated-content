---
title: "DOMMatrixReadOnly: skewX() メソッド"
short-title: skewX()
slug: Web/API/DOMMatrixReadOnly/skewX
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

`skewX()` は {{domxref("DOMMatrixReadOnly")}} インターフェイスのメソッドで、ソース行列に対して指定された歪め変換を X 軸方向に適用して作成された新しい {{domxref("DOMMatrix")}} を返します。元の行列は変更されません。

X 軸方向の歪め変換を行って行列を変更する場合は、{{domxref("DOMMatrix.skewXSelf()")}} を参照してください。

## 構文

```js-nolint
skewX()
skewX(sX)
```

### 引数

- `sX`
  - : 数値です。行列を X 軸方向に歪め変換を行う角度の度数です。

### 返値

{{domxref("DOMMatrix")}} です。

## 例

```js
const matrix = new DOMMatrix(); // 行列を作成
console.log(matrix.toString()); // 座標変換を適用していない
// "matrix(1, 0, 0, 1, 0, 0)"

console.log(matrix.skewX(14).toString());
// "matrix(1, 0, 0.25, 1, 0, 0)"

console.log(matrix.toString()); // 元の行列は変更されない
// "matrix(1, 0, 0, 1, 0, 0)"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMMatrixReadOnly.skewY()")}}
- {{domxref("DOMMatrix.skewXSelf()")}}
- CSS の {{cssxref("transform")}} プロパティ、{{cssxref("transform-function/skew", "skew()")}} 関数、{{cssxref("transform-function/skewX", "skewX()")}} 関数、{{cssxref("transform-function/matrix", "matrix()")}} 関数
- [CSS 座標変換](/ja/docs/Web/CSS/Guides/Transforms)モジュール
- SVG の [`transform`](/ja/docs/Web/SVG/Reference/Attribute/transform) 属性
- {{domxref("CanvasRenderingContext2D")}} インターフェイスの {{domxref("CanvasRenderingContext2D.transform()", "transform()")}} メソッド
