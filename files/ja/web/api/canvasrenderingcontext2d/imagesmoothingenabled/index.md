---
title: "CanvasRenderingContext2D: imageSmoothingEnabled プロパティ"
short-title: imageSmoothingEnabled
slug: Web/API/CanvasRenderingContext2D/imageSmoothingEnabled
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

**`imageSmoothingEnabled`** は {{domxref("CanvasRenderingContext2D")}} インターフェイスのプロパティで、[キャンバス API](/ja/docs/Web/API/Canvas_API) の一部です。変倍された画像を平滑化するか (`true`、既定値) またはしないか (`false`) を決定します。 `imageSmoothingEnabled` プロパティを取得すると、最後に設定された値が返されます。

このプロパティは、ピクセルアートを使用するゲームやその他のアプリで有用です。画像を拡大するとき、既定のリサイズアルゴリズムではピクセルがぼけてしまいます。このプロパティを `false` に設定すると、ピクセルの鮮明さを維持します。

> [!NOTE]
> 平滑化の品質は、 {{domxref("CanvasRenderingContext2D.imageSmoothingQuality", "imageSmoothingQuality")}} プロパティで調整することができます。

## 値

論理値で、画像を滑らかに拡大するかどうかを示します。既定値は `true` です。

## 例

### 画像の平滑化を無効化

この例では 3 つの画像を比較します。最初の画像は自然なサイズで描画され、 2 番目は画像の平滑化を有効にしたまま 3 倍に拡大して描画し、 3 番目は画像の平滑化を無効にして 3 倍に拡大して描画しています。

#### HTML

```html
<canvas id="canvas" width="460" height="210"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");
ctx.font = "16px sans-serif";
ctx.textAlign = "center";

const img = new Image();
img.src =
  "https://interactive-examples.mdn.mozilla.net/media/examples/star.png";
img.onload = () => {
  const w = img.width,
    h = img.height;

  ctx.fillText("Source", w * 0.5, 20);
  ctx.drawImage(img, 0, 24, w, h);

  ctx.fillText("Smoothing = TRUE", w * 2.5, 20);
  ctx.imageSmoothingEnabled = true;
  ctx.drawImage(img, w, 24, w * 3, h * 3);

  ctx.fillText("Smoothing = FALSE", w * 5.5, 20);
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(img, w * 4, 24, w * 3, h * 3);
};
```

#### 結果

{{ EmbedLiveSample('Disabling_image_smoothing', 700, 240) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このプロパティを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.imageSmoothingQuality")}}
- {{cssxref("image-rendering")}}
