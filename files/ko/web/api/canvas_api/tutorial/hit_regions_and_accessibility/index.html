---
title: 히트(Hit) 영역과 접근성
slug: Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility
translation_of: Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility
original_slug: Web/HTML/Canvas/Tutorial/Hit_regions_and_accessibility
---
<div>{{CanvasSidebar}} {{ PreviousNext("Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas", "Web/API/Canvas_API/Tutorial/Optimizing_canvas") }}</div>

<div class="summary">{{HTMLElement("canvas")}} 엘리먼트는 비트맵이며 그려진 객체에 대한 정보는 제공하지 않습니다. 캔버스 컨텐츠는 시멘틱 HTML과 같은 접근성 도구에 노출되지 않습니다. 일반적으로 접근성을 위한 웹 사이트 또는 앱에서는 캔버스를 사용하지 않는 것이 좋습니다. 본 가이드라인은 접근성이 향상된 캔버스를 만드는데 도움이 될 것입니다.</div>

<h2 id="대체_컨텐츠">대체 컨텐츠</h2>

<p><code>&lt;canvas&gt; ... &lt;/ canvas&gt;</code> 태그 안의 내용은 캔버스 렌더링을 지원하지 않는 브라우저의 대체 컨텐츠로 사용할 수 있습니다. 또한 하위 DOM을 읽고 해석 할 수있는 보조 기술 사용자 (스크린 리더와 같은)에게도 매우 유용합니다. <a href="https://www.html5accessibility.com/tests/canvas.html">html5accessibility.com</a>의 좋은 예가 이를 수행 할 수있는 방법을 보여줍니다.</p>

<pre class="brush: html">&lt;canvas&gt;
  &lt;h2&gt;Shapes&lt;/h2&gt;
  &lt;p&gt;A rectangle with a black border.
   In the background is a pink circle.
   Partially overlaying the &lt;a href="http://en.wikipedia.org/wiki/Circle" onfocus="drawCircle();" onblur="drawPicture();"&gt;circle&lt;/a&gt;.
   Partially overlaying the circle is a green
   &lt;a href="http://en.wikipedia.org/wiki/Square" onfocus="drawSquare();" onblur="drawPicture();"&gt;square&lt;/a&gt;
   and a purple &lt;a href="http://en.wikipedia.org/wiki/Triangle" onfocus="drawTriangle();" onblur="drawPicture();"&gt;triangle&lt;/a&gt;,
   both of which are semi-opaque, so the full circle can be seen underneath.&lt;/p&gt;
&lt;/canvas&gt; </pre>

<p><a href="https://www.youtube.com/watch?v=ABeIFlqYiMQ">Steve Faulkner의 NVDA가 이 예제를 어떻게 읽는지를 보여주는 동영상</a>을 참고하시기 바랍니다.</p>

<h2 id="ARIA_규칙">ARIA 규칙</h2>

<p><a href="/ko/docs/Web/Accessibility/ARIA">ARIA</a>(Accessible Rich Internet Application)는 장애인이 사용자가 웹 콘텐츠 및 웹 응용 프로그램을보다 쉽게 사용할 수 있도록하는 방법을 정의합니다. ARIA 속성을 사용하여 캔버스 엘리먼트의 동작 및 용도를 설명 할 수 있습니다. 자세한 내용은 <a href="/ko/docs/Web/Accessibility/ARIA">ARIA</a> 및 <a href="/ko/docs/Web/Accessibility/ARIA/ARIA_Techniques">ARIA 기술</a>을 참조하십시오.</p>

<pre class="brush: html">&lt;canvas id="button" tabindex="0" role="button" aria-pressed="false" aria-label="Start game"&gt;&lt;/canvas&gt;
</pre>

<h2 id="히트(Hit)_영역">히트(Hit) 영역</h2>

<p>마우스 좌표가 캔버스의 특정 영역 내에 있는지 여부는 문제를 해결하는 데 공통적입니다. 히트 영역 API를 사용하면 캔버스 영역을 정의 할 수 있으며 캔버스에 대화형 컨텐츠를 접근성 도구에 표시 할 수 있습니다. 히트 영역 API는 여러분이 히트 감지를 쉽게 할 수 있도록 하며 DOM 엘리먼트에 이벤트를 전달할 수 있도록 합니다. API에는 다음 세 가지 메소드가 있습니다 (현재 웹 브라우저에서는 아직 실험 중이며 브라우저 호환성 테이블을 확인하십시오).</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.addHitRegion()")}} {{experimental_inline}}</dt>
 <dd>히트 영역을 캔버스에 추가합니다.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.removeHitRegion()")}} {{experimental_inline}}</dt>
 <dd>캔버스에서 해당 <code>id</code>를 가진 히트 영역을 제거합니다.</dd>
 <dt>{{domxref("CanvasRenderingContext2D.clearHitRegions()")}} {{experimental_inline}}</dt>
 <dd>캔버스에서 모든 히트 영역을 제거합니다.</dd>
</dl>

<p>경로에 히트 영역을 추가하고 {{domxref("MouseEvent.region")}} 속성을 확인하여 마우스가 영역을 히트하는지 테스트 할 수 있습니다.</p>

<pre class="brush: html">&lt;canvas id="canvas"&gt;&lt;/canvas&gt;
&lt;script&gt;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(70, 80, 10, 0, 2 * Math.PI, false);
ctx.fill();
ctx.addHitRegion({id: 'circle'});

canvas.addEventListener('mousemove', function(event) {
  if (event.region) {
    alert('hit region: ' + event.region);
  }
});
&lt;/script&gt;</pre>

<p><code>addHitRegion()</code> 메소드는 <code>control</code> 옵션을 이용하여 이벤트를 엘리먼트(즉, 캔버스의 자식으로)로 전달합니다.</p>

<pre class="brush: js">ctx.addHitRegion({control: element});</pre>

<p>예를 들어 {{HTMLElement("input")}} 엘리먼트로 전달하는 데 유용 할 수 있습니다. <a href="https://codepen.io/peterj35/pen/PEdLKx">codepen 데모</a>를 참조하십시오.</p>

<h2 id="포커스_링(Focus_rings)">포커스 링(Focus rings)</h2>

<p>키보드로 작업 할 때 포커스 링은 페이지 탐색에 도움이되는 편리한 표시기입니다. 캔버스 드로잉에 포커스 링을 그리려면 <code>drawFocusIfNeeded</code> 속성을 사용할 수 있습니다.</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.drawFocusIfNeeded()")}} {{experimental_inline}}</dt>
 <dd>지정된 엘리먼트에 포커스가있는 경우,이 메소드는 현재 경로 주위에 포커스 링을 그립니다.</dd>
</dl>

<p>또한 <code>scrollPathIntoView()</code> 메서드를 사용하여 포커스가있는 경우 엘리먼트를 화면에 표시 할 수 있습니다.</p>

<dl>
 <dt>{{domxref("CanvasRenderingContext2D.scrollPathIntoView()")}} {{experimental_inline}}</dt>
 <dd>현재 경로 또는 지정된 경로를 뷰로 스크롤합니다.</dd>
</dl>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="https://www.w3.org/WAI/PF/HTML/wiki/Canvas_Accessibility_Use_Cases">Canvas accessibility use cases</a></li>
 <li><a href="https://www.w3.org/html/wg/wiki/AddedElementCanvas">Canvas element accessibility issues</a></li>
 <li><a href="http://www.paciellogroup.com/blog/2012/06/html5-canvas-accessibility-in-firefox-13/">HTML5 Canvas Accessibility in Firefox 13 – by Steve Faulkner</a></li>
 <li><a href="https://html.spec.whatwg.org/multipage/scripting.html#best-practices">Best practices for interactive canvas elements</a></li>
</ul>

<div>{{ PreviousNext("Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas", "Web/API/Canvas_API/Tutorial/Optimizing_canvas") }}</div>
