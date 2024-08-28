---
title: "CanvasRenderingContext2D: lineWidth プロパティ"
short-title: lineWidth
slug: Web/API/CanvasRenderingContext2D/lineWidth
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

**`CanvasRenderingContext2D.lineWidth`** はキャンバス 2D API のプロパティで、線の太さを設定します。

> [!NOTE]
> 線は {{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}}、{{domxref("CanvasRenderingContext2D.strokeRect()", "strokeRect()")}}、{{domxref("CanvasRenderingContext2D.strokeText()", "strokeText()")}} メソッドで描画することができます。

## 値

線の幅を座標空間単位で指定した数値。 0、負、{{jsxref("Infinity")}}、{{jsxref("NaN")}} の値は無視されます。この値は既定では `1.0` です.

## 例

### 線の幅の変更

この例では線の太さ 15 単位を使用して線と長方形を描画します。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.lineWidth = 15;

ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(130, 130);
ctx.rect(40, 40, 70, 70);
ctx.stroke();
```

#### 結果

{{ EmbedLiveSample('Changing_line_width', 700, 180) }}

### それ以外の例

このプロパティに関するそれ以外の例と説明については、[スタイルと色の適用](/ja/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)（[キャンバスチュートリアル](/ja/docs/Web/API/Canvas_API/Tutorial)内）を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このプロパティを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.lineCap")}}
- {{domxref("CanvasRenderingContext2D.lineJoin")}}
- [スタイルと色の適用](/ja/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
