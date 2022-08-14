---
title: OffscreenCanvas.getContext()
slug: Web/API/OffscreenCanvas/getContext
translation_of: Web/API/OffscreenCanvas/getContext
---
<div>{{APIRef("Canvas API")}} {{SeeCompatTable}}</div>

<p><strong><code>OffscreenCanvas.getContext()</code></strong> 메소드는 offscreen 캔버스를 위한 드로잉 컨텍스트 반환합니다. 컨텍스트 식별자가 지원되는 상황이 아닐 경우 {{jsxref("null")}}를 반환합니다.</p>

<div class="note">
<p><strong>Note</strong>: 이 API는 현재 <a href="/en-US/docs/Web/API/WebGLRenderingContext">WebGL1</a>과 <a href="/en-US/docs/Web/API/WebGL2RenderingContext">WebGL2</a> 컨텍스트에서만 실행됩니다.  <a href="/en-US/docs/Web/API/Canvas_API">Canvas 2D API</a> 관련 {{bug(801176)}}를 참조하세요.</p>
</div>

<h2 id="구문">구문</h2>

<pre class="syntaxbox"><em>offscreen</em>.getContext(<em>contextType</em>, <em>contextAttributes</em>);
</pre>

<h3 id="매개_변수">매개 변수</h3>

<dl>
 <dt><code>contextType</code></dt>
 <dd>캔버스의 드로잉 컨텍스트를 정의하는 컨텍스트 식별자가 포함된 {{domxref("DOMString")}}입니다:
 <ul>
  <li><strong><code>"2d"</code></strong>는 2차원 렌더링 컨텍스트를 표현하는 {{domxref("CanvasRenderingContext2D")}} 객체를 생성합니다.</li>
  <li><strong><code>"webgl"</code></strong>는 3차원 렌더링 컨텍스트를 표현하는 {{domxref("WebGLRenderingContext")}} 객체를 생성합니다. 이 컨텍스트는 <a href="https://developer.mozilla.org/en-US/docs/Web/WebGL">WebGL</a> 버전 1(OpenGL ES 2.0)을 지원하는 브라우저에서만 사용 가능합니다.</li>
  <li><strong><code>"webgl2"</code></strong>는 3차원 렌더링 컨텍스트를 표현하는 {{domxref("WebGL2RenderingContext")}} 객체를 생성합니다. 이 컨텍스트는 <a href="https://developer.mozilla.org/en-US/docs/Web/WebGL">WebGL</a> 버전 2 (OpenGL ES 3.0)를 지원하는 브라우저에서만 사용 가능합니다.  {{experimental_inline}}</li>
  <li>
   <p><strong><code>"bitmaprenderer"</code></strong>는 주어진 {{domxref("ImageBitmap")}}을 캔버스의 내용 대신 전환하는 함수를 제공하는 {{domxref("ImageBitmapRenderingContext")}}를 생성합니다. </p>
  </li>
 </ul>

 <p>Note:<strong><code>"experimental-webgl"</code></strong>과 <strong><code>"experimental-webgl2"</code></strong> 식별자는 WebGL에서도 사용됩니다. 그러나 아직 테스트 적합성을 통과하지 못했거나 플랫폼별 그래픽 드라이버 지원이 안정적이진 않습니다. <a href="https://www.khronos.org/">Khronos Group</a>은 특정한  <a href="https://www.khronos.org/registry/webgl/sdk/tests/CONFORMANCE_RULES.txt">정합성 규칙</a>에 WebGL 구현을 인증하고 있습니다.</p>
 </dd>
 <dt><code>contextAttributes</code></dt>
 <dd>
 <p>You can use several context attributes when creating your rendering context, for example:</p>

 <pre class="brush: js">offscreen.getContext("webgl",
                 { antialias: false,
                   depth: false });</pre>
 2d context attributes:

 <ul>
  <li><strong><code>alpha</code></strong>: Boolean that indicates if the canvas contains an alpha channel. If set to <code>false</code>, the browser now knows that the backdrop is always opaque, which can speed up drawing of transparent content and images then.</li>
  <li>{{non-standard_inline}} (Gecko only) <strong><code>willReadFrequently</code></strong>: Boolean that indicates whether or not a lot of read-back operations are planned. This will force the use of a software (instead of hardware accelerated) 2D canvas and can save memory when calling {{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}} frequently. This option is only available, if the flag <code>gfx.canvas.willReadFrequently.enable</code> is set to <code>true</code> (which, by default, is only the case for B2G/Firefox OS).</li>
  <li>{{non-standard_inline}} (Blink only) <strong><code>storage</code></strong>: String that indicates which storage is used ("persistent" by default).</li>
 </ul>
 WebGL context attributes:

 <ul>
  <li><strong><code>alpha</code></strong>: Boolean that indicates if the canvas contains an alpha buffer.</li>
  <li><strong><code>depth</code></strong>: Boolean that indicates that the drawing buffer has a depth buffer of at least 16 bits.</li>
  <li><strong><code>stencil</code></strong>: Boolean that indicates that the drawing buffer has a stencil buffer of at least 8 bits.</li>
  <li><strong><code>antialias</code></strong>: Boolean that indicates whether or not to perform anti-aliasing.</li>
  <li><strong><code>premultipliedAlpha</code></strong>: Boolean that indicates that the page compositor will assume the drawing buffer contains colors with pre-multiplied alpha.</li>
  <li><strong><code>preserveDrawingBuffer</code></strong>: If the value is true the buffers will not be cleared and will preserve their values until cleared or overwritten by the author.</li>
  <li>
   <p><code><strong>failIfMajorPerformanceCaveat</strong></code>: Boolean that indicates if a context will be created if the system performance is low.</p>
  </li>
 </ul>
 </dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A {{domxref("RenderingContext")}} which is either a</p>

<ul>
 <li>{{domxref("CanvasRenderingContext2D")}} for <code>"2d"</code>,</li>
 <li>{{domxref("WebGLRenderingContext")}} for <code>"webgl"</code> and <code>"experimental-webgl"</code>,</li>
 <li>{{domxref("WebGL2RenderingContext")}} for <code>"webgl2"</code> and <code>"experimental-webgl2"</code> {{experimental_inline}}, or</li>
 <li>{{domxref("ImageBitmapRenderingContext")}} for <code>"bitmaprenderer"</code>.</li>
</ul>

<p>If the <code>contextType</code> doesn't match a possible drawing context, <code>null</code> is returned.</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">var offscreen = new OffscreenCanvas(256, 256);
var gl = offscreen.getContext("webgl");

gl; // WebGLRenderingContext
gl.canvas; // OffscreenCanvas</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat("api.OffscreenCanvas.getContext")}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>The interface defining this method: {{domxref("OffscreenCanvas")}}</li>
 <li>{{domxref("HTMLCanvasElement.getContext()")}}</li>
 <li>Available rendering contexts: {{domxref("CanvasRenderingContext2D")}}, {{domxref("WebGLRenderingContext")}}, {{domxref("WebGL2RenderingContext")}}, and {{domxref("ImageBitmapRenderingContext")}}</li>
</ul>
