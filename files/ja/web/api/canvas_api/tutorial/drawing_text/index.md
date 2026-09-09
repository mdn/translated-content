---
title: テキストの描画
slug: Web/API/Canvas_API/Tutorial/Drawing_text
l10n:
  sourceCommit: 8a10694edf44bde124fa8f18af65651855f632dc
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Applying_styles_and_colors", "Web/API/Canvas_API/Tutorial/Using_images")}}

前の章で[スタイルや色を適用する](/ja/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)方法を見た後は、キャンバスにテキストを描画する方法を見ていきます。

## テキストの描画

キャンバスの描画コンテキストでは、 2 種類のテキスト描画方法を提供しています。

- {{domxref("CanvasRenderingContext2D.fillText", "fillText(text, x, y [, maxWidth])")}}
  - : (x,y) で指定した位置にテキストを塗りつぶして描画します。任意で最大描画幅を指定できます。
- {{domxref("CanvasRenderingContext2D.strokeText", "strokeText(text, x, y [, maxWidth])")}}
  - : (x,y) で指定した位置にテキストの輪郭を描画します。任意で最大描画幅を指定できます。

### `fillText` の例

現在の `fillStyle` を使用して、テキストを塗りつぶして描画します。

```js
function draw() {
  const ctx = document.getElementById("my-canvas").getContext("2d");
  ctx.font = "48px serif";
  ctx.fillText("Hello world", 10, 50);
}
```

```html hidden
<canvas id="my-canvas" width="300" height="100"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_fillText_example", 310, 110)}}

### `strokeText` の例

現在の `strokeStyle` を使用して、テキストの輪郭を描画します。

```js
function draw() {
  const ctx = document.getElementById("my-canvas").getContext("2d");
  ctx.font = "48px serif";
  ctx.strokeText("Hello world", 10, 50);
}
```

```html hidden
<canvas id="my-canvas" width="300" height="100"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_strokeText_example", 310, 110)}}

## テキストのスタイル設定

上記の例では、テキストを既定のサイズより若干大きくするため、すでに `font` プロパティを使用していました。キャンバスにテキストを表示する形式を調整できるプロパティは、さらにいくつかあります。

- {{domxref("CanvasRenderingContext2D.font", "font = value")}}
  - : テキストを描画する際に使用するテキストのスタイルです。 [CSS](/ja/docs/Web/CSS) の {{cssxref("font")}} プロパティと同じ構文に則った文字列です。既定のフォントは 10px sans-serif です。
- {{domxref("CanvasRenderingContext2D.textAlign", "textAlign = value")}}
  - : テキストの配置を設定します。使用できる値は `start`、`end`、`left`、`right`、`center` です。既定値は `start` です。
- {{domxref("CanvasRenderingContext2D.textBaseline", "textBaseline = value")}}
  - : ベースラインの位置ぞろえを設定します。使用できる値は `top`、`hanging`、`middle`、`alphabetic`、`ideographic`、`bottom` です。既定値は `alphabetic` です。
- {{domxref("CanvasRenderingContext2D.direction", "direction = value")}}
  - : 書字方向を設定します。使用できる値は `ltr`、`rtl`、`inherit` です。既定値は `inherit` です。

以前に CSS を扱ったことがあれば、これらのプロパティも見慣れているでしょう。

以下は [HTML 仕様書](https://html.spec.whatwg.org/multipage/canvas.html#text-styles)にある、`textBaseline` 属性によって対応している様々なベースラインを示した図です。

![em-over ベースラインはフォントのグリフの上端にほぼ一致し、hanging baseline は आ のようないくつかのグリフが固定されているところ、 middle は em-over と em-under ベースラインの中間、alphabetic ベースラインは Á, ÿ, f, Ω などの文字が固定されているところ、ideographic-under ベースラインは私や達などのグリフが固定され、 em-under ベースラインはフォント中のグリフの下端にほぼ一致しているところです。グリフが em-over と em-under ベースラインの外まで伸びているため、バウンディングボックスの上端と下端はこれらのベースラインから遠く離れていることがあります。](baselines.png)

### `textBaseline` の例

この例では、`textBaseline` プロパティのさまざまな値について説明しています。
詳細や具体的な例については、[`CanvasRenderingContext2D.textBaseline`](/ja/docs/Web/API/CanvasRenderingContext2D/textBaseline) のページをご覧ください。

```html hidden live-sample___textBaseline
<canvas id="my-canvas" width="400" height="100"></canvas>
```

```js live-sample___textBaseline
function draw() {
  const ctx = document.getElementById("my-canvas").getContext("2d");
  ctx.font = "48px serif";

  ctx.textBaseline = "hanging";
  ctx.strokeText("hanging", 10, 50);

  ctx.textBaseline = "middle";
  ctx.strokeText("middle", 250, 50);

  ctx.beginPath();
  ctx.moveTo(10, 50);
  ctx.lineTo(300, 50);
  ctx.stroke();
}
```

```js hidden live-sample___textBaseline
draw();
```

{{EmbedLiveSample('textBaseline', 310, 110)}}

## 高度なテキスト測定

テキストのより詳細な情報を得る必要がある場合は、以下のメソッドで測定することができます。

- {{domxref("CanvasRenderingContext2D.measureText", "measureText()")}}
  - : 指定したテキストを現在のテキストスタイルで描画したときの幅をピクセル単位で表した情報を持つ、{{domxref("TextMetrics")}} オブジェクトを返します。

以下のコードスニペットは、テキストを測定して幅を得る方法を示しています。

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  const text = ctx.measureText("foo"); // TextMetrics object
  text.width; // 16;
}
```

{{PreviousNext("Web/API/Canvas_API/Tutorial/Applying_styles_and_colors", "Web/API/Canvas_API/Tutorial/Using_images")}}
