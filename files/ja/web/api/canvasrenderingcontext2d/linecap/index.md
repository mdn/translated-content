---
title: "CanvasRenderingContext2D: lineCap プロパティ"
short-title: lineCap
slug: Web/API/CanvasRenderingContext2D/lineCap
l10n:
  sourceCommit: c8b447485fd893d5511d88f592f5f3aec29a725b
---

{{APIRef}}

**`CanvasRenderingContext2D.lineCap`** はキャンバス 2D API のプロパティで、描く線の端点の形状を設定します。

> [!NOTE]
> 線は {{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}}、{{domxref("CanvasRenderingContext2D.strokeRect()", "strokeRect()")}}、{{domxref("CanvasRenderingContext2D.strokeText()", "strokeText()")}} の各メソッドで描画されます。

## 値

以下のいずれかです。

- `"butt"`
  - : 端点が四角く切られます。既定値です。
- `"round"`
  - : 端点が丸くなります。
- `"square"`
  - : 端点は、線の太さと同じ幅、半分の高さのボックスが追加されて四角くなります。

## 例

### 線の先端の形を変える

この例では直線の端点を丸めています。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineWidth = 15;
ctx.lineCap = "round";
ctx.lineTo(100, 100);
ctx.stroke();
```

#### 結果

{{ EmbedLiveSample('Changing_the_shape_of_line_caps', 700, 180) }}

### 先端形状の比較

次の例では、`lineCap` プロパティがそれぞれ異なる 3 本の線を描画しています。その違いを観察するために、 2 本の補助線を引いています。 3 本の線はそれぞれこの補助線直上を始点および終点として描かれています。

左の線は既定のオプションである `"butt"` の場合の線で、補助線のところで丁度切れています。 2 つ目の`"round"` オプションの場合の線は、補助線の部分の先に半円が追加された格好になっています。右側の`"square"` オプションによる描線は、線の幅と同じ幅で高さが半分の四角形が追加されています。

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Draw guides
ctx.strokeStyle = "#09f";
ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(140, 10);
ctx.moveTo(10, 140);
ctx.lineTo(140, 140);
ctx.stroke();

// Draw lines
ctx.strokeStyle = "black";
["butt", "round", "square"].forEach((lineCap, i) => {
  ctx.lineWidth = 15;
  ctx.lineCap = lineCap;
  ctx.beginPath();
  ctx.moveTo(25 + i * 50, 10);
  ctx.lineTo(25 + i * 50, 140);
  ctx.stroke();
});
```

{{EmbedLiveSample("Comparison_of_line_caps", "180", "180")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

### WebKit/Blink 特有のメモ

- WebKit および Blink ベースのブラウザーでは、このプロパティに加えて標準外で非推奨のメソッド `ctx.setLineCap()` が実装されています。

## 関連情報

- このプロパティを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.lineWidth")}}
- {{domxref("CanvasRenderingContext2D.lineJoin")}}
- [スタイルと色の適用](/ja/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
