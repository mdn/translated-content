---
title: HTMLCanvasElement.getContext()
slug: Web/API/HTMLCanvasElement/getContext
tags:
  - API
  - Canvas
  - HTMLCanvasElement
  - 레퍼런스
  - 메소드
translation_of: Web/API/HTMLCanvasElement/getContext
---
<div>{{APIRef("Canvas API")}}</div>

<p><span class="seoSummary"><strong><code>HTMLCanvasElement.getContext()</code></strong> 메소드는 캔버스의 드로잉 컨텍스트를 반환합니다. 컨텍스트 식별자가 지원되지 않을 경우 {{jsxref("null")}}을 반환합니다.</span></p>

<p>동일한 캔버스 엘리먼트에서 나중에 이 메소드를 호출하면 동일한 <code>contextType</code> 인자와 함께 메소드가 마지막으로 호출되었을 때 반환된 것과 같이 동일한 드로잉 컨텍스트 인스턴스를 반환합니다. 다른 드로잉 컨텍스트 객체를 얻으려면 다른 <code>contextType</code>을 전달하거나 다른 캔버스 엘리먼트에서 메소드를 호출해야 합니다.</p>

<h2 id="구문">구문</h2>

<pre class="syntaxbox">var <em>ctx</em> = <em>canvas</em>.getContext(<em>contextType</em>);
var <em>ctx</em> = <em>canvas</em>.getContext(<em>contextType</em>, <em>contextAttributes</em>);
</pre>

<h3 id="파라미터">파라미터</h3>

<dl>
 <dt><code>contextType</code></dt>
 <dd>캔버스에 연관된 드로잉 컨텍스트를 정의하는 컨텍스트 식별자를 갖는 {{domxref("DOMString")}}입니다. 가능한 값은 다음과 같습니다.
 <ul>
  <li><code>"2d"</code>, 2차원 렌더링 컨텍스트를 나타내는 {{domxref("CanvasRenderingContext2D")}} 객체를 생성하게 합니다.</li>
  <li><code>"webgl"</code> (또는 <code>"experimental-webgl"</code>), 3차원 렌더링 컨텍스트를 나타내는 {{domxref("WebGLRenderingContext")}} 객체를 생성합니다. 이 컨텍스트는 <a href="https://developer.mozilla.org/ko/docs/Web/WebGL">WebGL</a> 버전 1 (OpenGL ES 2.0)을 구현하는 브라우저에서만 사용가능합니다.</li>
  <li><code>"webgl2"</code>, 3차원 렌더링 컨텍스트를 나타내는 {{domxref("WebGL2RenderingContext")}} 객체를 생성합니다. 이 컨텍스트는 <a href="https://developer.mozilla.org/ko/docs/Web/WebGL">WebGL</a> 버전 2 (OpenGL ES 3.0)를 구현하는 브라우저에서만 사용가능합니다. {{experimental_inline}}</li>
  <li><code>"bitmaprenderer"</code>, 캔버스의 컨텐츠를 주어진 {{domxref("ImageBitmap")}}으로 대체하기위한 기능만을 제공하는 {{domxref("ImageBitmapRenderingContext")}}를 생성합니다.</li>
 </ul>

 <div class="note">
 <p><strong>노트</strong>: 식별자 <code>"experimental-webgl"</code>은 WebGL의 새로운 구현에서 사용됩니다. 이러한 구현은 테스트 스위트 적합성을 아직 만족하지 못하며, 플랫폼 상의 그래픽 드라이버도 아직 불안정합니다. <a href="https://www.khronos.org/">Khronos Group</a>은 특정 <a href="https://www.khronos.org/registry/webgl/sdk/tests/CONFORMANCE_RULES.txt">적합성 규칙</a>에 따라 WebGL 구현을 인증합니다.</p>
 </div>
 </dd>
 <dt><code>contextAttributes</code></dt>
 <dd>
 <p>렌더링 컨텍스트를 생성할 때 몇 가지 컨텍스트 속성을 사용할 수 있습니다. 예를 들면:</p>

 <pre class="brush: js">const gl = canvas.getContext('webgl', {
  antialias: false,
  depth: false
});</pre>
 2d 컨텍스트 속성:

 <ul>
  <li><strong><code>alpha</code></strong>: 캔버스가 알파 채널을 포함하는지를 나타내는 불리언입니다. <code>false</code>로 설정할 경우, 브라우저는 이제 배경이 항상 투명하다는 것을 알기때문에 투명한 컨텐츠나 이미지를 그리는 속도를 높일수 있습니다.</li>
  <li>{{non-standard_inline}} (Gecko 전용) <strong><code>willReadFrequently</code></strong>: 많은 다시 읽기 작업이 계획되어있는지 여부를 나타내는 불리언입니다. 이는 소프트웨어(하드웨어 가속 대신) 2D 캔버스의 사용을 강제하며 {{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}} 호출이 빈번할때 메모리를 절약할 수 있습니다. 이 옵션은 <code>gfx.canvas.willReadFrequently.enable</code> 플래그가 <code>true</code>(기본 값이며, B2G/Firefox OS에만 해당) 설정되었을 경우에만 사용가능합니다.</li>
  <li>{{non-standard_inline}} (Blink only) <strong><code>storage</code></strong>: 어떤 스토리지가 사용되었는지를 나타내는 문자열입니다(기본값은 "persistent").</li>
 </ul>
 WebGL 컨텍스트 속성:

 <ul>
  <li><strong><code>alpha</code></strong>: 캔버스가 알파 버퍼를 포함하는지 여부를 나타내는 불리언입니다.</li>
  <li><strong><code>antialias</code></strong>: 안티 앨리어싱을 수행할지 여부를 나타내는 불리언입니다.</li>
  <li><strong><code>depth</code></strong>: 드로잉 버퍼가 최소 16 비트의 깊이 버퍼를 갖는지 여부를 나타내는 불리언입니다.</li>
  <li><code><strong>failIfMajorPerformanceCaveat</strong></code>: 시스템 성능이 낮을 경우에 컨텍스트를 생성할지 여부를 나타내는 불리언입니다.</li>
  <li><code><strong>powerPreference</strong></code>: WebGL 컨텍스트에 대해 적합한 GPU 구성이 무엇인지를 나타내는 유저 에이전트에 대한 힌트입니다. 가능한 값은 다음과 같습니다.
   <ul>
    <li><code>"default"</code>: 유저 에이전트가 가장 적합한 GPU 구성을 결정하도록 합니다. 기본 값입니다.</li>
    <li><code>"high-performance"</code>: 전력 소비보다 렌더링 성능을 우선시합니다.</li>
    <li><code>"low-power"</code>: 렌더링 성능보다 전력 절약을 우선시합니다.</li>
   </ul>
  </li>
  <li><strong><code>premultipliedAlpha</code></strong>: 페이지 컴포지터가 미리 곱해진 알파를 갖는 컬러를 포함하는 드로잉 버퍼를 가정할 것인지 여부를 나타내는 불리언입니다.</li>
  <li><strong><code>preserveDrawingBuffer</code></strong>: 값이 true일 경우 버퍼는 제거되지 않으며 값이 제거되거나 덮어쓰여지기 전까지 유지됩니다.</li>
  <li><strong><code>stencil</code></strong>: 드로잉 버퍼가 최소 8 비트의 스텐실 버퍼를 갖는지 여부를 나타내는 불리언입니다.</li>
 </ul>
 </dd>
</dl>

<h3 id="반환_값">반환 값</h3>

<p>{{domxref("RenderingContext")}}는 다음 중 하나입니다.</p>

<ul>
 <li><code>"2d"</code> 용 {{domxref("CanvasRenderingContext2D")}},</li>
 <li><code>"webgl"</code> 및 <code>"experimental-webgl"</code> 용 {{domxref("WebGLRenderingContext")}},</li>
 <li><code>"webgl2"</code> 용 {{domxref("WebGL2RenderingContext")}}</li>
 <li><code>"bitmaprenderer"</code> 용 {{domxref("ImageBitmapRenderingContext")}}.</li>
</ul>

<p><code>contextType</code>이 가능한 드로잉 컨텍스트와 일치하지 않으면, <code>null</code>이 반환됩니다.</p>

<h2 id="예시">예시</h2>

<p>다음 {{HTMLElement("canvas")}} 엘리먼트를 고려해볼 때:</p>

<pre class="brush: html">&lt;canvas id="canvas" width="300" height="300"&gt;&lt;/canvas&gt;
</pre>

<p>다음 코드를 사용해 캔버스의 <code>2d</code> 컨텍스트를 얻을 수 있습니다.</p>

<pre class="brush: js">var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
console.log(ctx); // CanvasRenderingContext2D { ... }
</pre>

<p>이제 캔버스에 대한 <a href="/ko/docs/Web/API/CanvasRenderingContext2D">2D 렌더링 컨텍스트</a>를 갖고 있으며 이 안에 그릴 수 있습니다.</p>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.HTMLCanvasElement.getContext")}}</p>

<h2 id="함께_보기">함께 보기</h2>

<ul>
 <li>이를 정의하는 인터페이스 {{domxref("HTMLCanvasElement")}}.</li>
 <li>{{domxref("OffscreenCanvas.getContext()")}}</li>
 <li>사용 가능한 렌더링 컨텍스트: {{domxref("CanvasRenderingContext2D")}}, {{domxref("WebGLRenderingContext")}}, {{domxref("WebGL2RenderingContext")}}, {{domxref("ImageBitmapRenderingContext")}}.</li>
</ul>
