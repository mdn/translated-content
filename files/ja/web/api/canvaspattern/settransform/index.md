---
title: CanvasPattern.setTransform()
slug: Web/API/CanvasPattern/setTransform
---

{{APIRef("Canvas API")}} {{SeeCompatTable}}

**`CanvasPattern.setTransform()`** メソッドは、パターンの変換マトリックスとして {{domxref("SVGMatrix")}} オブジェクトを使用し、パターンにこれを実行します。

## 構文

```
void pattern.setTransform(matrix);
```

### パラメータ

- `matrix`
  - : パターンの変換行列として使用する {{domxref("SVGMatrix")}}。

## 例

### `setTransform` メソッドを使用する

これは `setTransform` メソッドを使用して {{domxref("SVGMatrix")}} によるパターン変形を指定して {{domxref("CanvasPattern")}} を生成する簡単なコードスニペットです。たとえば、パターンが現在の {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} として適用され、{{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} メソッドを使用すると、 canvas に描画されます。

#### HTML

```html
<canvas id="canvas"></canvas>
<svg id="svg1"></svg>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var svg1 = document.getElementById("svg1");
var matrix = svg1.createSVGMatrix();

var img = new Image();
img.src = 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasPattern/setTransform/canvas_createpattern.png';

img.onload = function() {
  var pattern = ctx.createPattern(img, 'repeat');
  pattern.setTransform(matrix.rotate(-45).scale(1.5));
  ctx.fillStyle = pattern;
  ctx.fillRect(0,0,400,400);
};
```

以下のコードを編集して、canvas 上での変化を確認してください：

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<svg id="svg1" style="display:none"></svg>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code" style="height:120px">
var img = new Image();
img.src = 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasPattern/setTransform/canvas_createpattern.png';
img.onload = function() {
  var pattern = ctx.createPattern(img, 'repeat');
  pattern.setTransform(matrix.rotate(-45).scale(1.5));
  ctx.fillStyle = pattern;
  ctx.fillRect(0,0,400,400);
};</textarea>
```

```js hidden
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var edit = document.getElementById("edit");
var code = textarea.value;

var svg1 = document.getElementById("svg1");
var matrix = svg1.createSVGMatrix();

function drawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  eval(textarea.value);
}

reset.addEventListener("click", function() {
  textarea.value = code;
  drawCanvas();
});

edit.addEventListener("click", function() {
  textarea.focus();
})

textarea.addEventListener("input", drawCanvas);
window.addEventListener("load", drawCanvas);
```

{{ EmbedLiveSample('Playable_code', 700, 380) }}

## 仕様

{{Specifications}}

## ブラウザ実装状況

{{Compat("api.CanvasPattern.setTransform")}}

## 関連項目

- これを定義しているインターフェース：{{domxref("CanvasPattern")}}
- {{domxref("SVGMatrix")}}
