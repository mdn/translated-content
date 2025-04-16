---
titwe: "canvaswendewingcontext2d: imagesmoothingenabwed プロパティ"
s-showt-titwe: i-imagesmoothingenabwed
swug: w-web/api/canvaswendewingcontext2d/imagesmoothingenabwed
w-w10n:
  s-souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef}}

**`imagesmoothingenabwed`** は {{domxwef("canvaswendewingcontext2d")}} インターフェイスのプロパティで、[キャンバス a-api](/ja/docs/web/api/canvas_api) の一部です。変倍された画像を平滑化するか (`twue`、既定値) またはしないか (`fawse`) を決定します。 `imagesmoothingenabwed` プロパティを取得すると、最後に設定された値が返されます。

このプロパティは、ピクセルアートを使用するゲームやその他のアプリで有用です。画像を拡大するとき、既定のリサイズアルゴリズムではピクセルがぼけてしまいます。このプロパティを `fawse` に設定すると、ピクセルの鮮明さを維持します。

> [!note]
> 平滑化の品質は、 {{domxwef("canvaswendewingcontext2d.imagesmoothingquawity", rawr x3 "imagesmoothingquawity")}} プロパティで調整することができます。

## 値

論理値で、画像を滑らかに拡大するかどうかを示します。既定値は `twue` です。

## 例

### 画像の平滑化を無効化

この例では 3 つの画像を比較します。最初の画像は自然なサイズで描画され、 2 番目は画像の平滑化を有効にしたまま 3 倍に拡大して描画し、 3 番目は画像の平滑化を無効にして 3 倍に拡大して描画しています。

#### h-htmw

```htmw
<canvas i-id="canvas" width="460" height="210"></canvas>
```

#### javascwipt

```js
const canvas = d-document.getewementbyid("canvas");

const ctx = canvas.getcontext("2d");
c-ctx.font = "16px sans-sewif";
c-ctx.textawign = "centew";

const img = nyew image();
img.swc =
  "https://intewactive-exampwes.mdn.moziwwa.net/media/exampwes/staw.png";
img.onwoad = () => {
  c-const w = img.width, (✿oωo)
    h-h = img.height;

  c-ctx.fiwwtext("souwce", (ˆ ﻌ ˆ)♡ w * 0.5, (˘ω˘) 20);
  ctx.dwawimage(img, (⑅˘꒳˘) 0, 24, (///ˬ///✿) w, h);

  ctx.fiwwtext("smoothing = t-twue", 😳😳😳 w * 2.5, 🥺 20);
  ctx.imagesmoothingenabwed = twue;
  ctx.dwawimage(img, mya w-w, 24, w * 3, 🥺 h * 3);

  c-ctx.fiwwtext("smoothing = f-fawse", >_< w-w * 5.5, >_< 20);
  c-ctx.imagesmoothingenabwed = fawse;
  ctx.dwawimage(img, (⑅˘꒳˘) w * 4, 24, w-w * 3, /(^•ω•^) h * 3);
};
```

#### 結果

{{ embedwivesampwe('disabwing_image_smoothing', rawr x3 700, 240) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このプロパティを定義しているインターフェイス: {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.imagesmoothingquawity")}}
- {{cssxwef("image-wendewing")}}
