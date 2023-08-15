---
title: 텍스트 그리기
slug: Web/API/Canvas_API/Tutorial/Drawing_text
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Applying_styles_and_colors", "Web/API/Canvas_API/Tutorial/Using_images")}}

이전 챕터에서 [스타일과 컬러를 적용하는 방법](/ko/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)에 대해서 보았고 이번에는 캔버스에 텍스트를 그리는 방법에 대해서 볼 예정입니다.

## 텍스트 그리기

캔버스 렌더링 컨텍스트(canvas rendering context)는 텍스트를 렌더링하는 두 가지 방법을 제공합니다.

- {{domxref("CanvasRenderingContext2D.fillText", "fillText(text, x, y [, maxWidth])")}}
  - : 주어진 (x, y) 위치에 주어진 텍스트를 채웁니다. 최대 폭(width)은 옵션 값 입니다.
- {{domxref("CanvasRenderingContext2D.strokeText", "strokeText(text, x, y [, maxWidth])")}}
  - : 주어진 (x, y) 위치에 주어진 텍스트를 칠(stroke)합니다. 최대 폭(width)은 옵션 값 입니다.

### `fillText` 예제

텍스트는 현재의 `fillStyle`을 사용하여 채워집니다.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
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

### `strokeText` 예제

텍스트는 현재의 `strokeStyle`을 이용하여 채워집니다.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
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

## 텍스트 스타일 적용하기

위의 예제에서 우리는 이미 텍스트를 기본 사이즈를 키우기 위하여 `font` 프로퍼티를 사용하였습니다. 그리고 캔버스에 표시되는 텍스트를 조정할 수 있는 속성이 더 있습니다.

- {{domxref("CanvasRenderingContext2D.font", "font = value")}}
  - : 텍스트를 그릴 때 사용되는 현재 텍스트 스타일. 이 문자열은 [CSS](/ko/docs/Web/CSS) {{cssxref("font")}} 프로퍼티와 동일한구문을 사용합니다. 기본값으로 sans-serif의 10px가 설정되어 있습니다.
- {{domxref("CanvasRenderingContext2D.textAlign", "textAlign = value")}}
  - : 텍스트 정렬 설정. 사용가능한 값: `start`, `end`, `left`, `right`, `center`. 기본 값은 `start` 입니다.
- {{domxref("CanvasRenderingContext2D.textBaseline", "textBaseline = value")}}
  - : 베이스라인 정렬 설정. 사용가능한 값: `top`, `hanging`, `middle`, `alphabetic`, `ideographic`, `bottom`. 기본 값은 `alphabetic` 입니다
- {{domxref("CanvasRenderingContext2D.direction", "direction = value")}}
  - : 글자 방향. 사용가능한 값: `ltr`, `rtl`, `inherit`. 기본 값은 `inherit` 입니다.

만약 CSS를 다뤄보신적이 있다면 이러한 프로퍼티들은 익숙하실겁니다.

다음에 나오는 [WHATWG](http://www.whatwg.org/) 예제 다이어그램은 `textBaseline`를 이용하여 다양한 베이스라인 설정을 보여줍니다.![The top of the em square is
roughly at the top of the glyphs in a font, the hanging baseline is
where some glyphs like आ are anchored, the middle is half-way
between the top of the em square and the bottom of the em square,
the alphabetic baseline is where characters like Á, ÿ,
f, and Ω are anchored, the ideographic baseline is
where glyphs like 私 and 達 are anchored, and the bottom
of the em square is roughly at the bottom of the glyphs in a
font. The top and bottom of the bounding box can be far from these
baselines, due to glyphs extending far outside the em square.](http://www.whatwg.org/specs/web-apps/current-work/images/baselines.png)

### textBaseline 예제

아래의 코드를 수정하여 캔버스에서 어떻게 바뀌는지 실시간으로 확인해 보세요.

```js
ctx.font = "48px serif";
ctx.textBaseline = "hanging";
ctx.strokeText("Hello world", 0, 100);
```

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.font = "48px serif";
ctx.textBaseline = "hanging";
ctx.strokeText("Hello world", 0, 100);</textarea
>
```

```js hidden
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var edit = document.getElementById("edit");
var code = textarea.value;

function drawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  drawCanvas();
});

edit.addEventListener("click", function () {
  textarea.focus();
});

textarea.addEventListener("input", drawCanvas);
window.addEventListener("load", drawCanvas);
```

{{ EmbedLiveSample('Playable_code', 700, 360) }}

## 어드밴스드 텍스트 측정

만약 텍스트에대해 조금 더 디테일한 것들을 얻고 싶다면 다음의 메소드를 이용해보세요.

- {{domxref("CanvasRenderingContext2D.measureText", "measureText()")}}
  - : 현재 스타일로 특정 텍스트가 그려질 때의 폭, 픽셀 등을 포함하는 {{domxref("TextMetrics")}} 객체 리턴.

다음의 코드는 어떻게 텍스트를 측정하는 지, 그리고 폭을 구하는 예제입니다.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  var text = ctx.measureText("foo"); // TextMetrics object
  text.width; // 16;
}
```

## Gecko 사용시 주의점

Gecko(Firefox, Firefox OS외 Mozilla 기반의 에플리케이션 렌더링 엔진)에서는 캔버스에 텍스트를 그리기 위한 몇몇의 [prefixed APIs](/ko/docs/Web/API/CanvasRenderingContext2D#Prefixed_APIs)가 구현되어 있습니다. 그리고 지금은 사용되지 않아 제거되었거나 작동을 보장하지 않는 것들도 있습니다.

{{PreviousNext("Web/API/Canvas_API/Tutorial/Applying_styles_and_colors", "Web/API/Canvas_API/Tutorial/Using_images")}}
