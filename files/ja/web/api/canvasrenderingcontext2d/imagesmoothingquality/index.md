---
title: "CanvasRenderingContext2D: imageSmoothingQuality プロパティ"
slug: Web/API/CanvasRenderingContext2D/imageSmoothingQuality
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

[Canvas API](/ja/docs/Web/API/Canvas_API) に含まれる {{domxref("CanvasRenderingContext2D")}} インターフェイスの **`imageSmoothingQuality`** プロパティは、画像の平滑化の品質を設定できます。

> **メモ:** このプロパティが効果を発揮するには、{{domxref("CanvasRenderingContext2D.imageSmoothingEnabled", "imageSmoothingEnabled")}} が `true` でなければなりません。

## 値

以下のいずれかです。

- `"low"`
  - : 低品質です。
- `"medium"`
  - : 中程度の品質です。
- `"high"`
  - : 高品質です。

## 例

### 画像の平滑化の品質を設定する

この例では、拡大縮小する画像で `imageSmoothingQuality` プロパティを用います。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let img = new Image();
img.src = "canvas_createpattern.png";
img.onload = () => {
  ctx.imageSmoothingQuality = "low";
  ctx.drawImage(img, 0, 0, 300, 150);
};
```

#### 結果

{{ EmbedLiveSample('Setting_image_smoothing_quality', 700, 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このプロパティを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled")}}
- {{cssxref("image-rendering")}}
