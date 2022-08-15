---
title: ':hover'
slug: 'Web/CSS/:hover'
tags:
  - CSS
  - Layout
  - Pseudo-class
  - Reference
  - Web
translation_of: 'Web/CSS/:hover'
---
<div>{{ CSSRef }}</div>

<p><strong><code>:hover</code></strong> <a href="/ko/docs/Web/CSS">CSS</a> <a href="/ko/docs/Web/CSS/Pseudo-classes" title="Pseudo-classes">의사 클래스</a>는 사용자가 포인팅 장치를 사용해 상호작용 중인 요소를 선택합니다. 보통 사용자의 커서(마우스 포인터)가 요소 위에 올라가 있으면 선택됩니다.</p>

<pre class="brush: css no-line-numbers">/* "호버링" 중인 &lt;a&gt; 요소 선택 */
a:hover {
  color: orange;
}</pre>

<p><code>:hover</code> 의사 클래스로 정의한 스타일은 자신보다 뒤에 위치하고 동등한 명시성을 가진 다른 링크 의사 클래스({{cssxref(":link")}}, {{cssxref(":visited")}}, {{cssxref(":active")}})가 덮어씁니다. 링크를 적절히 디자인하려면 LVHA-순서(<code>:link</code> — <code>:visited</code> — <code>:hover</code> — <code>:active</code>)를 따라, <code>:hover</code> 규칙을 <code>:link</code>와 <code>:visited</code> 뒤, <code>:active</code> 앞에 배치하세요.</p>

<div class="note"><strong>참고</strong>: <code>:hover</code> 의사 클래스는 터치스크린에서 문제가 많습니다. 브라우저에 따라서 :hover를 절대 활성화하지 않을 수도 있지만, 요소를 터치한 직후에만, 아니면 터치한 이후 다른 요소를 다시 터치하기 전까지 계속 활성화할 수도 있습니다. 웹 개발자는 호버링이 제한적이거나 아예 불가능한 장치에서도 콘텐츠에 접근할 수 있도록 개발해야 합니다.</div>

<h2 id="구문">구문</h2>

{{csssyntax}}

<h2 id="예제">예제</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;a href="#"&gt;이 링크를 가리켜보세요.&lt;/a&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">a {
  background-color: powderblue;
  transition: background-color .5s;
}

a:hover {
  background-color: gold;
}</pre>

<h3 id="결과">결과</h3>

<p>{{EmbedLiveSample("예제")}}</p>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

{{Compat("css.selectors.hover")}}

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><a href="https://code.google.com/p/chromium/issues/detail?id=370155">Chromium 버그 #370155: Don't make <code>:hover</code> sticky on tap on sites that set a mobile viewport</a></li>
 <li><a href="https://code.google.com/p/chromium/issues/detail?id=306581">Chromium 버그 #306581: Immediately show hover and active states on touch when page isn't scrollable.</a></li>
</ul>
