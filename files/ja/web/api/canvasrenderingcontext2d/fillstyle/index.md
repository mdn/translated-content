---
title: CanvasRenderingContext2D.fillStyle
slug: Web/API/CanvasRenderingContext2D/fillStyle
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - プロパティ
  - リファレンス
browser-compat: api.CanvasRenderingContext2D.fillStyle
translation_of: Web/API/CanvasRenderingContext2D/fillStyle
---
{{APIRef}}

**`CanvasRenderingContext2D.fillStyle`** は[キャンバス 2D API](/ja/docs/Web/API/Canvas_API) のプロパティで、図形の内側を塗りつぶすために使用する色、グラデーション、またはパターンを指定します。既定値は `#000` (黒色)です。

> **Note:** 輪郭と塗りつぶしのスタイル例については、[キャンバスのチュートリアル](/ja/docs/Web/API/Canvas_API/Tutorial)の[スタイルと色を適用する](/ja/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)をご覧ください。

## 構文

```js
ctx.fillStyle = color;
ctx.fillStyle = gradient;
ctx.fillStyle = pattern;
```

### オプション

- `color`
  - : {{domxref("DOMString")}} で、 [CSS](/ja/docs/Web/CSS) の {{cssxref("&lt;color&gt;")}} 値として解釈される値です。
- `gradient`
  - : {{domxref("CanvasGradient")}} オブジェクト (線形または放射状のグラデーション) 。
- `pattern`
  - : {{domxref("CanvasPattern")}} オブジェクト (繰り返し画像) 。

## 例

### 図形の塗りつぶし色を変更する

このサンプルでは青色の塗りつぶし色を矩形に適用します。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'blue';
ctx.fillRect(10, 10, 100, 100);
```

#### 結果

{{ EmbedLiveSample('Changing_the_fill_color_of_a_shape', 700, 160) }}

### ループを使用した複数の塗りつぶし色の作成

この例では 2 つの `for` ループでそれぞれが異なる塗りつぶし色を持つ四角形のグリッドを描画します。 このためには、 2 つの変数 `i` と `j` を四角形ごとに固有となる RGB 色を生成するために使用し、また赤色と緑色の値だけを変更するようにします (青色は固定値とします) 。チャンネルを変更することによって全ての種類のパターンを生成することができます。

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    ctx.fillStyle = `rgb(
        ${Math.floor(255 - 42.5 * i)},
        ${Math.floor(255 - 42.5 * j)},
        0)`;
    ctx.fillRect(j * 25, i * 25, 25, 25);
  }
}
```

結果はこのようになります:

{{EmbedLiveSample("Creating_multiple_fill_colors_using_loops", 160, 160,
  "canvas_fillstyle.png")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

### WebKit/Blink 特有のメモ

WebKit および Blink ベースのブラウザーの場合、このプロパティに加えて、非標準で非推奨のメソッド `ctx.setFillColor()` が実装されています。

```js
setFillColor(color, optional alpha);
setFillColor(grayLevel, optional alpha);
setFillColor(r, g, b, a);
setFillColor(c, m, y, k, a);
```

## 関連情報

- [キャンバス API](/ja/docs/Web/API/Canvas_API)
- このプロパティを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- このプロパティで使われる値:

  - {{cssxref("&lt;color&gt;")}} CSS データ型
  - {{domxref("CanvasGradient")}} オブジェクト
  - {{domxref("CanvasPattern")}} オブジェクト
