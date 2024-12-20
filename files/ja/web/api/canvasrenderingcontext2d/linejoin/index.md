---
title: "CanvasRenderingContext2D: lineJoin プロパティ"
short-title: lineJoin
slug: Web/API/CanvasRenderingContext2D/lineJoin
l10n:
  sourceCommit: c8b447485fd893d5511d88f592f5f3aec29a725b
---

{{APIRef}}

**`CanvasRenderingContext2D.lineJoin`** はキャンバス 2D API のプロパティで、 2 つの線分が接する部分で使用する形状を決定します。

このプロパティは、接続された 2 つの線分の方向が同じであれば効果はありません。長さがゼロの縮退線分（つまり、すべての端点と制御点がまったく同じ位置にある）も無視されます。

> [!NOTE]
> 線は {{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}}、{{domxref("CanvasRenderingContext2D.strokeRect()", "strokeRect()")}}、{{domxref("CanvasRenderingContext2D.strokeText()", "strokeText()")}} メソッドを呼び出すことで描画することができます。

## 値

このプロパティで取りうる値は `"round"`、`"bevel"`、`"miter"` の 3 つです。既定値は `"miter"` です。

![上から順に rpount, bevel, miter を示す 3 本の水平ジグザグ線。](canvas_linejoin.png)

- `"round"`
  - : 接続された線分の共通の端点を中心とする円形の追加領域を塗りつぶすことによって、図形の角を丸めます。丸める角の半径は行の幅に等しくなります。
- `"bevel"`
  - : 接続された線分の共通の端点と、各線分の別個の外側の長方形の角の間にある、追加の三角形の領域を埋めます。
- `"miter"`
  - : 接続された線分の外側の辺を延長して単一の点で接続し、菱形の領域を追加で塗りつぶす効果があります。この設定するには、 {{domxref("CanvasRenderingContext2D.miterLimit", "miterLimit")}} プロパティの影響を受けます。既定値です。

## 例

### パス内の結合点の変更

この例では、パスに丸める線結合を適用しています。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.lineWidth = 20;
ctx.lineJoin = "round";
ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(190, 100);
ctx.lineTo(280, 20);
ctx.lineTo(280, 150);
ctx.stroke();
```

#### 結果

{{ EmbedLiveSample('Changing_the_joins_in_a_path', 700, 180) }}

### 接続方法の比較

下記の例では、 3 つの異なるパスを描画し、 3 つの `lineJoin` オプションをそれぞれ示しています。

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
const ctx = document.getElementById("canvas").getContext("2d");
ctx.lineWidth = 10;

["round", "bevel", "miter"].forEach((join, i) => {
  ctx.lineJoin = join;
  ctx.beginPath();
  ctx.moveTo(-5, 5 + i * 40);
  ctx.lineTo(35, 45 + i * 40);
  ctx.lineTo(75, 5 + i * 40);
  ctx.lineTo(115, 45 + i * 40);
  ctx.lineTo(155, 5 + i * 40);
  ctx.stroke();
});
```

{{EmbedLiveSample("Comparison_of_line_joins", "", "180")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

### WebKit/Blink 固有のメモ

- WebKit および Blink ベースのブラウザーでは、このプロパティに加えて標準外で非推奨のメソッド `ctx.setLineJoin()` が実装されています。

## 関連情報

- このプロパティを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.lineCap")}}
- {{domxref("CanvasRenderingContext2D.lineWidth")}}
- [スタイルと色の適用](/ja/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
