---
title: Window.scrollY
slug: Web/API/Window/scrollY
tags:
  - API
  - CSSOM View
  - Property
  - Reference
  - Window
  - 스크롤
translation_of: Web/API/Window/scrollY
---
<div>{{APIRef("CSSOM View")}}</div>

<p><span class="seoSummary">{{domxref("Window")}} 인터페이스의 <code><strong>scrollY</strong></code> 읽기 전용 속성은 문서가 수직으로 얼마나 스크롤됐는지 픽셀 단위로 반환합니다.</span> 최신 브라우저에서는 값의 정밀도가 픽셀보다 작으므로 반드시 정숫값을 반환하는건 아닙니다. 수평 스크롤은 {{domxref("Window.scrollX", "scrollX")}} 속성을 사용하여 가져올 수 있습니다.</p>

<h2 id="Syntax" name="Syntax">구문</h2>

<pre class="syntaxbox">var <em>y</em> = window.scrollY</pre>

<h3 id="값">값</h3>

<p>원점으로부터 문서를 수직방향으로 스크롤한 픽셀의 수를 나타내는, 배정밀도 부동소수점 값. 양의 값이 위쪽 스크롤을 의미합니다. 문서를 단일 픽셀보다 높은 정밀도의 장치에서 렌더링한 경우 반환값의 정밀도도 높아져 소숫값을 반환할 수 있습니다. 문서가 위나 아래로 전혀 움직이지 않은 상태면 <code>0</code>을 반환합니다.</p>

<div class="note">
<p>정숫값이 필요하면 {{jsxref("Math.round()")}}를 사용해 반올림할 수 있습니다.</p>
</div>

<p>더 기술적인 용어로, <code>scrollY</code>는 현재 {{Glossary("viewport", "뷰포트")}} 위쪽 모서리의 Y좌표를 반환하고, 뷰포트가 없으면 0을 반환합니다.</p>

<h2 id="Example" name="Example">예제</h2>

<pre class="brush:js">// make sure and go down to the second page
if (window.scrollY) {
  window.scroll(0, 0);  // reset the scroll position to the top left of the document.
}

window.scrollByPages(1);</pre>

<h2 id="Notes" name="Notes">참고</h2>

<p><code>scrollY</code> 속성을 사용하면 {{domxref("window.scrollBy", "scrollBy()")}}, {{domxref("window.scrollByLines", "scrollByLines()")}}, {{domxref("window.scrollByPages", "scrollByPages()")}}와 같은 상대적 스크롤 함수를 사용할 때, 문서가 이미 스크롤되지는 않았는지 판별할 수 있습니다.</p>

<p>{{domxref("Window.pageYOffset", "pageYOffset")}} 속성은 <code>scrollY</code>의 다른 이름입니다.</p>

<pre class="brush: js">window.pageYOffset === window.scrollY; // 항상 true</pre>

<p>브라우저간 호환성을 위해서는 <code>window.scrollY</code> 대신 <code>window.pageYOffset</code>을 사용하세요. 이에 더해, Internet Explorer 9 미만의 구형 환경에서는 두 속성 모두 지원하지 않으므로 또 다른 비표준 속성을 사용해야 합니다. 다음은 완벽히 호환되는 코드의 예시입니다.</p>

<pre class="brush:js">var supportPageOffset = window.pageXOffset !== undefined;
var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
</pre>

<h2 id="Specification">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.Window.scrollY")}}</p>

<h2 id="See_also" name="See_also">같이 보기</h2>

<ul>
 <li>{{domxref("window.scrollX")}}</li>
</ul>
