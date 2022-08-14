---
title: Window.devicePixelRatio
slug: Web/API/Window/devicePixelRatio
tags:
  - API
  - Property
  - Read-only
  - Reference
  - Window
translation_of: Web/API/Window/devicePixelRatio
---
<div>{{APIRef}}</div>

<p><span class="seoSummary">{{domxref("Window")}} 인터페이스의 <strong><code>devicePixelRatio</code></strong> 읽기 전용 속성은 현재 표시 장치의 물리적 픽셀과 CSS 픽셀의 비율을 반환합니다.</span> CSS 픽셀의 크기를 물리적 픽셀의 크기로 나눈 값으로 해석해도 됩니다. 또 다른 해석은, 하나의 CSS 픽셀을 그릴 때 사용해야 하는 장치 픽셀의 수라고 할 수 있습니다.</p>

<p><code>devicePixelRatio</code> 속성은 HiDPI/Retina 디스플레이처럼 같은 객체를 그릴 때 더 많은 픽셀을 사용해 보다 선명한 이미지를 표현하는 화면과, 표준 디스플레이의 렌더링 차이에 대응할 때 유용합니다.</p>

<p>{{domxref("window.matchMedia()")}}를 사용하면, 사용자가 창을 드래그 해 디스플레이의 픽셀 밀도가 바뀌는 등의 상황에서 <code>devicePixelRatio</code>가 바뀌는지 알아낼 수 있습니다. 아래의 예제를 참고하세요.</p>

<h2 id="Syntax" name="Syntax">구문</h2>

<pre class="syntaxbox"><em><var>value</var></em> = window.devicePixelRatio
</pre>

<h2 id="예제">예제</h2>

<h3 id="Correcting_resolution_in_a_&lt;canvas>">Correcting resolution in a <code>&lt;canvas&gt;</code></h3>

<p>A {{htmlelement("canvas")}} can appear too blurry on retina screens. Use <code>window.devicePixelRatio</code> to determine how much extra pixel density should be added to allow for a sharper image.</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;canvas id="canvas"&gt;&lt;/canvas&gt;
</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js">var canvas = document.getElementById('canvas');
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
ctx.fillText(textString, x, y);</pre>

<p><a href="https://mdn.mozillademos.org/files/15023/devicePixelRation%20Diff..png"><img alt="This image describe the impact of different value on retina display. " src="https://mdn.mozillademos.org/files/15023/devicePixelRation%20Diff..png" style="height: 57px; width: 600px;"></a></p>

<h3 id="Monitoring_screen_resolution_or_zoom_level_changes">Monitoring screen resolution or zoom level changes</h3>

<p>In this example, we'll set up a media query and watch it to see when the device resolution changes, so that we can check the value of <code>devicePixelRatio</code> to handle any updates we need to.</p>

<h4 id="JavaScript_2">JavaScript</h4>

<p>The JavaScript code creates the media query that monitors the device resolution and checks the value of <code>devicePixelRatio</code> any time it changes.</p>

<pre class="brush: js">let pixelRatioBox = document.querySelector(".pixel-ratio");
let mqString = `(resolution: ${window.devicePixelRatio}dppx)`;

const updatePixelRatio = () =&gt; {
  let pr = window.devicePixelRatio;
  let prString = (pr * 100).toFixed(0);
  pixelRatioBox.innerText = `${prString}% (${pr.toFixed(2)})`;
}

updatePixelRatio();

matchMedia(mqString).addListener(updatePixelRatio);</pre>

<p>The string <code>mqString</code> is set up to be the media query itself. The media query, which begins as <code>(resolution: 1dppx)</code> (for standard displays) or <code>(resolution: 2dppx)</code> (for Retina/HiDPI displays), checks to see if the current display resolution matches a specific number of device dots per <code>px</code>.</p>

<p>The <code>updatePixelRatio()</code> function fetches the current value of <code>devicePixelRatio</code>, then sets the {{domxref("HTMLElement.innerText", "innerText")}} of the element <code>pixelRatioBox</code> to a string which displays the ratio both as a percentage and as a raw decimal value with up to two decimal places.</p>

<p>Then the <code>updatePixelRatio()</code> function is called once to display the starting value, after which the media query is created using {{domxref("Window.matchMedia", "matchMedia()")}} and {{domxref("EventTarget.addEventListener", "addEventListener()")}} is called to set up <code>updatePixelRatio()</code> as a handler for the <code>change</code> event.</p>

<h4 id="HTML_2">HTML</h4>

<p>The HTML creates the boxes containing the instructions and the <code>pixel-ratio</code> box that will display the current pixel ratio information.</p>

<pre class="brush: html">&lt;div class="container"&gt;
  &lt;div class="inner-container"&gt;
    &lt;p&gt;This example demonstrates the effect of zooming the page in
       and out (or moving it to a screen with a different scaling
       factor) on the value of the property &lt;code&gt;Window.devicePixelRatio&lt;/code&gt;.
       Try it and watch what happens!&lt;/p&gt;
  &lt;/div&gt;
    &lt;div class="pixel-ratio"&gt;&lt;/div&gt;
&lt;/div&gt;</pre>

<details><summary>
<h4 id="CSS">CSS</h4>
</summary>

<pre class="brush: css">body {
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
}</pre>
</details>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample("Monitoring_screen_resolution_or_zoom_level_changes", "100%", 500)}}</p>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="Browser_compatibility" name="Browser_compatibility">브라우저 호환성</h2>

<p>{{Compat("api.Window.devicePixelRatio")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/Media_Queries">Media queries</a></li>
 <li><a href="/en-US/docs/Web/CSS/Media_Queries/Using_media_queries">Using media queries</a></li>
 <li><a href="/en-US/docs/Web/CSS/@media/resolution">CSS <code>resolution</code> media query</a></li>
</ul>
