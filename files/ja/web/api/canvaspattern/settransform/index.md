---
title: "CanvasPattern: setTransform() メソッド"
short-title: setTransform()
slug: Web/API/CanvasPattern/setTransform
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("Canvas API")}}

**`CanvasPattern.setTransform()`** メソッドは、パターンの変換行列として {{domxref("DOMMatrix")}} オブジェクトを使用し、パターンにこれを実行します。

## 構文

```js-nolint
setTransform(matrix)
```

### 引数

- `matrix`
  - : パターンの変換行列として使用する {{domxref("DOMMatrix")}} です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### `setTransform` メソッドの使用

これは `setTransform` メソッドを使用して {{domxref("DOMMatrix")}} によるパターンの座標変換を指定して {{domxref("CanvasPattern")}} を生成する簡単なコードスニペットです。たとえば、パターンが現在の {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} として適用され、{{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} メソッドを使用すると、キャンバスに描画されます。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const matrix = new DOMMatrix([1, 0.2, 0.8, 1, 0, 0]);

const img = new Image();
img.src =
  "/en-US/docs/Web/API/CanvasPattern/setTransform/canvas_createpattern.png";

img.onload = () => {
  const pattern = ctx.createPattern(img, "repeat");
  pattern.setTransform(matrix.rotate(-45).scale(1.5));
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, 400, 400);
};
```

#### 編集可能なデモ

上のコードスニペットの編集可能なデモです。 `SetTransform()` の引数を変更して、その効果を確認してみてください。

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code" style="height:120px">
const img = new Image();
img.src = '/en-US/docs/Web/API/CanvasPattern/setTransform/canvas_createpattern.png';
img.onload = () => {
  const pattern = ctx.createPattern(img, 'repeat');
  pattern.setTransform(matrix.rotate(-45).scale(1.5));
  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, 400, 400);
};
</textarea>
```

```js hidden
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const edit = document.getElementById("edit");
const code = textarea.value;

const matrix = new DOMMatrix([1, 0.2, 0.8, 1, 0, 0]);

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

{{ EmbedLiveSample('編集可能なデモ', 700, 400) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasPattern")}}
- {{domxref("DOMMatrix")}}
