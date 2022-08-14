---
title: Window.matchMedia()
slug: Web/API/Window/matchMedia
tags:
  - API
  - CSSOM View
  - JavaScript
  - Media Queries
  - Method
  - Reference
translation_of: Web/API/Window/matchMedia
---
<div>{{APIRef}}</div>

<p><strong><code>Window.matchMedia()</code></strong> 메서드는 주어진 <a href="/ko/docs/Web/Guide/CSS/Media_queries">미디어 쿼리</a> 문자열의 분석 결과를 나타내는 {{domxref("MediaQueryList")}} 객체를 반환합니다.</p>

<h2 id="Syntax" name="Syntax">구문</h2>

<pre class="syntaxbox">window.matchMedia(<em>mediaQueryString</em>)</pre>

<h3 id="매개변수">매개변수</h3>

<dl>
 <dt><code>mediaQueryString</code></dt>
 <dd>분석할 미디어 쿼리를 나타내는 문자열.</dd>
</dl>

<h3 id="반환_값">반환 값</h3>

<p>주어진 미디어 쿼리에 대한 {{domxref("MediaQueryList")}} 객체,</p>

<h2 id="Example" name="Example">예제</h2>

<p>다음 예제는 화면이 매우 좁을 때 다른 작업을 수행합니다.</p>

<pre class="brush: js">if (window.matchMedia("(min-width: 400px)").matches) {
  /* 뷰포트 너비가 400 픽셀 이상 */
} else {
  /* 뷰포트 너비가 400 픽셀 미만 */
}
</pre>

<p>더 많은 예제는 <a href="/ko/docs/Web/CSS/Media_Queries/Testing_media_queries">Testing media queries programmatically</a>를 참고하세요.</p>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="Browser_compatibility" name="Browser_compatibility">브라우저 호환성</h2>

<p>{{Compat("api.Window.matchMedia")}}</p>

<h2 id="See_also" name="See_also">같이 보기</h2>

<ul>
 <li><a href="/ko/docs/Web/Guide/CSS/Media_queries">미디어 쿼리 사용하기</a></li>
 <li><a href="/en-US/docs/DOM/Using_media_queries_from_code" title="CSS/Using media queries from code">Using media queries from code</a></li>
 <li>{{domxref("MediaQueryList")}}</li>
 <li>{{domxref("MediaQueryListListener")}}</li>
</ul>
