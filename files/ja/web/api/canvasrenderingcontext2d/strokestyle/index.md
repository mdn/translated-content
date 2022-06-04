---
title: CanvasRenderingContext2D.strokeStyle
slug: Web/API/CanvasRenderingContext2D/strokeStyle
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - プロパティ
  - リファレンス
browser-compat: api.CanvasRenderingContext2D.strokeStyle
translation_of: Web/API/CanvasRenderingContext2D/strokeStyle
---
{{APIRef}}

**`CanvasRenderingContext2D.strokeStyle`** はキャンバス 2D API のプロパティで、図形の辺（輪郭）に使用する色、グラデーション、またはパターンを指定します。既定値は `#000` （黒色）です。

> **Note:** 輪郭と塗りつぶしのスタイル例については、 [canvas チュートリアル](/ja/docs/Web/API/Canvas_API/Tutorial)の [スタイルと色の適用](/ja/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) をご覧ください。

## 構文

```js
ctx.strokeStyle = color;
ctx.strokeStyle = gradient;
ctx.strokeStyle = pattern;
```

### オプション

- `color`
  - : {{domxref("DOMString")}} で、 [CSS](/ja/docs/Web/CSS) の {{cssxref("&lt;color&gt;")}} 値として解析されるものです。
- `gradient`
  - : {{domxref("CanvasGradient")}} オブジェクト（線形または放射グラデーション）。
- `pattern`
  - : {{domxref("CanvasPattern")}} オブジェクト（繰り返し画像）。

## 例

### 図形の輪郭色の変更

このサンプルでは、青色の輪郭を矩形に適用します。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.strokeStyle = 'blue';
ctx.strokeRect(10, 10, 100, 100);
```

#### 結果

{{ EmbedLiveSample('Changing_the_stroke_color_of_a_shape', 700, 160) }}

### ループを使用した複数の輪郭色の作成

この例では、 2 つの `for` ループと {{domxref("CanvasRenderingContext2D.arc", "arc()")}} メソッドを使用して、それぞれが異なる輪郭色を持つ円のグリッドを描画します。このためには、 2 つの変数 `i` と `j` を使用して、円ごとに固有の RGB 色を生成し、また緑色と青色の値だけを変更するようにします（赤色は固定値とします）。

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
var ctx = document.getElementById('canvas').getContext('2d');

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    ctx.strokeStyle = `rgb(
        0,
        ${Math.floor(255 - 42.5 * i)},
        ${Math.floor(255 - 42.5 * j)})`;
    ctx.beginPath();
    ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
    ctx.stroke();
  }
}
```

結果はこのようになります。

{{EmbedLiveSample("Creating_multiple_stroke_colors_using_loops", "180", "180",
  "canvas_strokestyle.png")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

### WebKit/Blink 特有のメモ

WebKit および Blink ベースのブラウザーの場合、このプロパティに加えて、非標準で非推奨のメソッド `ctx.setStrokeColor()` が実装されています。

```js
setStrokeColor(color, optional alpha);
setStrokeColor(grayLevel, optional alpha);
setStrokeColor(r, g, b, a);
setStrokeColor(c, m, y, k, a);
```

## 関連情報

- このプロパティを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasGradient")}}
- {{domxref("CanvasPattern")}}
