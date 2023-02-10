---
title: Window.devicePixelRatio
slug: Web/API/Window/devicePixelRatio
---
{{APIRef}}

{{domxref("Window")}} 인터페이스의 **`devicePixelRatio`** 읽기 전용 속성은 현재 표시 장치의 물리적 픽셀과 CSS 픽셀의 비율을 반환합니다. CSS 픽셀의 크기를 물리적 픽셀의 크기로 나눈 값으로 해석해도 됩니다. 또 다른 해석은, 하나의 CSS 픽셀을 그릴 때 사용해야 하는 장치 픽셀의 수라고 할 수 있습니다.

`devicePixelRatio` 속성은 HiDPI/Retina 디스플레이처럼 같은 객체를 그릴 때 더 많은 픽셀을 사용해 보다 선명한 이미지를 표현하는 화면과, 표준 디스플레이의 렌더링 차이에 대응할 때 유용합니다.

{{domxref("window.matchMedia()")}}를 사용하면, 사용자가 창을 드래그 해 디스플레이의 픽셀 밀도가 바뀌는 등의 상황에서 `devicePixelRatio`가 바뀌는지 알아낼 수 있습니다. 아래의 예제를 참고하세요.

## 구문

```js
value = window.devicePixelRatio
```

## 예제

### Correcting resolution in a `<canvas>`

A {{htmlelement("canvas")}} can appear too blurry on retina screens. Use `window.devicePixelRatio` to determine how much extra pixel density should be added to allow for a sharper image.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Set display size (css pixels).
var size = 200;
canvas.style.width = size + "px";
canvas.style.height = size + "px";

// Set actual size in memory (scaled to account for extra pixel density).
var scale = window.devicePixelRatio; // Change to 1 on retina screens to see blurry canvas.
canvas.width = size * scale;
canvas.height = size * scale;

// Normalize coordinate system to use css pixels.
ctx.scale(scale, scale);

ctx.fillStyle = "#bada55";
ctx.fillRect(10, 10, 300, 300);
ctx.fillStyle = "#ffffff";
ctx.font = '18px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

var x = size / 2;
var y = size / 2;

var textString = "I love MDN";
ctx.fillText(textString, x, y);
```

[![This image describe the impact of different value on retina display.](devicepixelration_diff..png)](https://mdn.mozillademos.org/files/15023/devicePixelRation%20Diff.png)]

### Monitoring screen resolution or zoom level changes

In this example, we'll set up a media query and watch it to see when the device resolution changes, so that we can check the value of `devicePixelRatio` to handle any updates we need to.

#### JavaScript

The JavaScript code creates the media query that monitors the device resolution and checks the value of `devicePixelRatio` any time it changes.

```js
let pixelRatioBox = document.querySelector(".pixel-ratio");
let mqString = `(resolution: ${window.devicePixelRatio}dppx)`;

const updatePixelRatio = () => {
  let pr = window.devicePixelRatio;
  let prString = (pr * 100).toFixed(0);
  pixelRatioBox.innerText = `${prString}% (${pr.toFixed(2)})`;
}

updatePixelRatio();

matchMedia(mqString).addListener(updatePixelRatio);
```

The string `mqString` is set up to be the media query itself. The media query, which begins as `(resolution: 1dppx)` (for standard displays) or `(resolution: 2dppx)` (for Retina/HiDPI displays), checks to see if the current display resolution matches a specific number of device dots per `px`.

The `updatePixelRatio()` function fetches the current value of `devicePixelRatio`, then sets the {{domxref("HTMLElement.innerText", "innerText")}} of the element `pixelRatioBox` to a string which displays the ratio both as a percentage and as a raw decimal value with up to two decimal places.

Then the `updatePixelRatio()` function is called once to display the starting value, after which the media query is created using {{domxref("Window.matchMedia", "matchMedia()")}} and {{domxref("EventTarget.addEventListener", "addEventListener()")}} is called to set up `updatePixelRatio()` as a handler for the `change` event.

#### HTML

The HTML creates the boxes containing the instructions and the `pixel-ratio` box that will display the current pixel ratio information.

```html
<div class="container">
  <div class="inner-container">
    <p>This example demonstrates the effect of zooming the page in
       and out (or moving it to a screen with a different scaling
       factor) on the value of the property <code>Window.devicePixelRatio</code>.
       Try it and watch what happens!</p>
  </div>
    <div class="pixel-ratio"></div>
</div>
```

<details><summary><h4 id="CSS">CSS</h4></summary><pre class="brush: css">body {
  font: 22px arial, sans-serif;
}

.container {
top: 2em;
width: 22em;
height: 14em;
border: 2px solid #22d;
margin: 0 auto;
padding: 0;
background-color: #a9f;
}

.inner-container {
padding: 1em 2em;
text-align: justify;
text-justify: auto;
}

.pixel-ratio {
position: relative;
margin: auto;
height: 1.2em;
text-align: right;
bottom: 0;
right: 1em;
font-weight: bold;
}</pre></details>

#### Result

{{EmbedLiveSample("Monitoring_screen_resolution_or_zoom_level_changes", "100%", 500)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Media queries](/ko/docs/Web/CSS/Media_Queries)
- [Using media queries](/ko/docs/Web/CSS/Media_Queries/Using_media_queries)
- [CSS `resolution` media query](/ko/docs/Web/CSS/@media/resolution)
