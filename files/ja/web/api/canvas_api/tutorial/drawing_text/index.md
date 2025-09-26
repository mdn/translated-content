---
title: テキストの描画
slug: Web/API/Canvas_API/Tutorial/Drawing_text
l10n:
  sourceCommit: f9f48866f02963e752717310b76a70d5bdaf554c
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
  const ctx = document.getElementById("canvas").getContext("2d");
  ctx.font = "48px serif";
  ctx.fillText("Hello world", 10, 50);
}
```

```html hidden
<canvas id="canvas" width="300" height="100"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_fillText_example", 310, 110)}}

### `strokeText` の例

現在の `strokeStyle` を使用して、テキストの輪郭を描画します。

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  ctx.font = "48px serif";
  ctx.strokeText("Hello world", 10, 50);
}
```

```html hidden
<canvas id="canvas" width="300" height="100"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_strokeText_example", 310, 110)}}

## テキストのスタイル付け

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

以下は [WHATWG](https://whatwg.org/) 提供の、`textBaseline` 属性によってサポートされている様々なベースラインを示した図です。![em 矩形の上端はフォントのグリフの上端にほぼ一致し、 hanging baseline は 906 のようないくつかのグリフが固定されているところ、 middle は em 矩形の上端と下端の中間、alphabetic baseline は Á, ÿ, f, Ω などの文字が固定されているところ、ideographic baseline は私や達などのグリフが固定され、em 矩形の底はフォント中のグリフの底にほぼ一致しているところです。グリフが em 矩形の外まで伸びているため、バウンディングボックスの上端と下端はこれらのベースラインから遠く離れていることがあります。](baselines.png)

### textBaseline の例

以下のコードを編集すると、canvas の変更個所をその場で確認できます。

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.font = "48px serif";
ctx.textBaseline = "hanging";
ctx.strokeText("Hello world", 0, 100);
</textarea>
```

```js hidden
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const edit = document.getElementById("edit");
const code = textarea.value;

function drawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  eval(textarea.value);
}

reset.addEventListener("click", () => {
  textarea.value = code;
  drawCanvas();
});

edit.addEventListener("click", () => {
  textarea.focus();
});

textarea.addEventListener("input", drawCanvas);
window.addEventListener("load", drawCanvas);
```

{{ EmbedLiveSample('A_textBaseline_example', 700, 400) }}

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

## アクセシビリティの考慮

`<canvas>` 要素は単なるビットマップであり、描画するオブジェクトの情報は提供しません。キャンバス上に書かれたテキストは、画面の拡大を頼りにしているユーザーにとって、読みやすさの問題を発生させる可能性があります。キャンバス要素内のピクセルは変倍しないので、拡大するとぼやけてしまいます。これは、ピクセルがベクターではなく、文字の形をしたピクセルの集合であるためです。拡大するとピクセルが大きくなります。

キャンバスのコンテンツは、意味づけされた HTML のようにアクセシビリティツールに公開されることはありません。一般的に、アクセシビリティのあるウェブサイトやアプリでキャンバスを使用することは避けましょう。キャンバスの代わりに HTML 要素や SVG を使用することもできます。

{{PreviousNext("Web/API/Canvas_API/Tutorial/Applying_styles_and_colors", "Web/API/Canvas_API/Tutorial/Using_images")}}
