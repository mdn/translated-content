---
title: "DOMMatrix: translateSelf() メソッド"
short-title: translateSelf()
slug: Web/API/DOMMatrix/translateSelf
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

`translateSelf()` は {{domxref("DOMMatrix")}} インターフェイスのメソッドで、行列を変更する座標変換メソッドです。指定されたベクトルを適用し、更新された行列を返します。デフォルトのベクトルは `[0, 0, 0]` です。

行列を変更せずに変更移動する場合は、{{domxref("DOMMatrixReadOnly.translate()")}} を参照してください。

## 構文

```js-nolint
translateSelf(translateX, translateY)
translateSelf(translateX, translateY, translateZ)
```

### 引数

- `translateX`
  - : 平行移動させるベクトルの横軸（x 座標）を表す数値です。
- `translateY`
  - : 平行移動させるベクトルの縦軸（y 座標）を表す数値です。
- `translateZ` {{optional_inline}}
  - : 平行移動させるベクトルの z 成分を表す数値です。指定されなかった場合の既定値は 0 になります。 0 以外の数値であった場合、結果の行列は 3D になります。

### 返値

自分自身を返します。指定されたベクトルで平行移動させた [`DOMMatrix`](/ja/docs/Web/API/DOMMatrix) を返します。

## 例

```js
const matrix = new DOMMatrix(); // 行列を作成
console.log(matrix.toString()); // 出力: "matrix(1, 0, 0, 1, 0, 0)"
matrix.translateSelf(25, 25); // 変更する
console.log(matrix); // 出力: "matrix(1, 0, 0, 1, 25, 25)"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DOMMatrixReadOnly.translate()")}}
- CSS の {{cssxref("transform")}} プロパティ
- CSS の {{cssxref("translate")}} プロパティ
- CSS の {{cssxref("transform-function")}} 関数
  - {{cssxref("transform-function/translate", "translate()")}}
  - {{cssxref("transform-function/translate3d", "translate3d()")}}
  - {{cssxref("transform-function/translateX", "translateX()")}}
  - {{cssxref("transform-function/translateY", "translateY()")}}
  - {{cssxref("transform-function/translateZ", "translateZ()")}}
- [CSS 座標変換](/ja/docs/Web/CSS/Guides/Transforms)モジュール
- SVG の [`transform`](/ja/docs/Web/SVG/Reference/Attribute/transform) 属性
- {{domxref("CanvasRenderingContext2D")}} インターフェイスのメソッド
  - {{domxref("CanvasRenderingContext2D.translate()")}}
  - {{domxref("CanvasRenderingContext2D.transform()")}}
  - {{domxref("CanvasRenderingContext2D.setTransform()")}}
  - {{domxref("CanvasRenderingContext2D.resetTransform()")}}
