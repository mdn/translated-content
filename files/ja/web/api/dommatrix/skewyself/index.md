---
title: "DOMMatrix: skewYSelf() メソッド"
short-title: skewYSelf()
slug: Web/API/DOMMatrix/skewYSelf
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

`skewYSelf()` は {{domxref("DOMMatrix")}} インターフェイスのメソッドで、行列を変更する座標変換メソッドです。指定された歪め変換を Y 軸方向に適用して元の行列を歪め、歪められた行列を返します。

変更せずに行列を Y 軸方向に歪める場合は、{{domxref("DOMMatrixReadOnly.skewY()")}} を参照してください。

## 構文

```js-nolint
skewYSelf()
skewYSelf(sY)
```

### 引数

- `sY`
  - : 数値です。行列を Y 軸方向に歪め変換を行う角度の度数です。

### 返値

自分自身を返します。Y 軸方向に指定された角度で歪め変換を行った [`DOMMatrix`](/ja/docs/Web/API/DOMMatrix) です。

## 例

```js
const matrix = new DOMMatrix(); // 行列を作成
console.log(matrix.toString()); // 出力: "matrix(1, 0, 0, 1, 0, 0)"
matrix.skewYSelf(-14); // 変更する
console.log(matrix); // 出力: "matrix(1, -0.25, 0, 1, 0, 0)"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMMatrixReadOnly.skewY()")}}
- CSS の {{cssxref("transform")}} プロパティ
- CSS の {{cssxref("transform-function")}} 関数
  - {{cssxref("transform-function/skew", "skew()")}}
  - {{cssxref("transform-function/skewX", "skewX()")}}
  - {{cssxref("transform-function/skewY", "skewY()")}}
- [CSS 座標変換](/ja/docs/Web/CSS/Guides/Transforms)モジュール
- SVG の [`transform`](/ja/docs/Web/SVG/Reference/Attribute/transform) 属性
- {{domxref("CanvasRenderingContext2D")}} インターフェイスのメソッド
  - {{domxref("CanvasRenderingContext2D.transform()")}}
  - {{domxref("CanvasRenderingContext2D.setTransform()")}}
  - {{domxref("CanvasRenderingContext2D.resetTransform()")}}
