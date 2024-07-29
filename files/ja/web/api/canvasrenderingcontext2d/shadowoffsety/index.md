---
title: "CanvasRenderingContext2D: shadowOffsetY プロパティ"
slug: Web/API/CanvasRenderingContext2D/shadowOffsetY
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Canvas 2D API の **`CanvasRenderingContext2D.shadowOffsetY`** は、影を縦方向にずらす距離を設定します。

> [!NOTE]
> 影はプロパティ {{domxref("CanvasRenderingContext2D.shadowColor", "shadowColor")}} が透明でない値に設定されているときのみ描画されます。さらに、プロパティ {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}}、{{domxref("CanvasRenderingContext2D.shadowOffsetX", "shadowOffsetX")}}、`shadowOffsetY` のいずれかがゼロでない値に設定されていなければいけません。

## 値

影を縦方向にずらす距離を表す浮動小数点数です。正の値を設定すると下に、負の値を設定すると上にずらします。デフォルト値は `0` (縦方向にずらさない) です。{{jsxref("Infinity")}} や {{jsxref("NaN")}} は無視されます。

## 例

### 影を縦方向にずらす

この例では、長方形にぼかしがかかった影を加えます。プロパティ {{domxref("CanvasRenderingContext2D.shadowColor", "shadowColor")}} で影の色を設定し、`shadowOffsetY` で影のオフセットを下に 25 単位に設定し、{{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}} で影のぼかしレベルを 10 に設定します。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 影
ctx.shadowColor = "red";
ctx.shadowOffsetY = 25;
ctx.shadowBlur = 10;

// 長方形
ctx.fillStyle = "blue";
ctx.fillRect(20, 20, 150, 80);
```

#### 結果

{{ EmbedLiveSample('Moving_a_shadow_vertically', 700, 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このプロパティを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.shadowOffsetX")}}
- {{domxref("CanvasRenderingContext2D.shadowColor")}}
- {{domxref("CanvasRenderingContext2D.shadowBlur")}}
