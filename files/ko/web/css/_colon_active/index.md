---
title: ':active'
slug: 'Web/CSS/:active'
tags:
  - CSS
  - Layout
  - Pseudo-class
  - Reference
  - Web
translation_of: 'Web/CSS/:active'
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary"><strong><code>:active</code></strong> <a href="/ko/docs/Web/API/CSS">CSS</a> <a href="/ko/docs/Web/CSS/Pseudo-classes">의사 클래스</a>는 사용자가 활성화한 요소(버튼 등)를 나타냅니다.</span> 마우스를 사용하는 경우, "활성"이란 보통 마우스 버튼을 누르는 순간부터 떼는 시점까지를 의미합니다.</p>

<pre class="brush: css no-line-numbers notranslate">/* 활성화된 모든 &lt;a&gt; 태그를 선택 */
a:active {
  color: red;
}</pre>

<p><code>:active</code> 의사 클래스는 대개 {{HTMLElement("a")}}, {{HTMLElement("button")}}과 함께 사용합니다. 다른 흔한 대상으로는 활성화된 요소를 포함한 다른 요소와, 연결된 {{HTMLElement("label")}}로 선택한 입력 폼 요소 등이 있습니다.</p>

<p><code>:active</code> 의사 클래스로 정의한 스타일은 자신보다 뒤에 위치하고 동등한 명시성을 가진 다른 링크 의사 클래스({{cssxref(":link")}}, {{cssxref(":hover")}}, {{cssxref(":visited")}})가 덮어씁니다. 링크를 적절히 디자인하려면 <em>LVHA-순서(</em><code>:link</code> — <code>:visited</code> — <code>:hover</code> — <code>:active</code>)를 따라, <code>:active</code> 규칙을 다른 모든 링크 규칙들보다 뒤에 배치하세요.</p>

<div class="note"><strong>참고:</strong> CSS3 명세에 따르면, 다수의 버튼을 가진 마우스라도 <code>:active</code> 의사 클래스는 주 버튼에만 적용돼야 합니다. 오른손잡이 마우스 기준, 주 버튼은 보통 맨 왼쪽 버튼입니다.</div>

<h2 id="구문">구문</h2>

{{csssyntax}}

<h2 id="Example" name="Example">예제</h2>

<h3 id="활성화_링크">활성화 링크</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;p&gt;링크를 포함하는 문단입니다.
  &lt;a href="#"&gt;이 링크는 클릭하는 동안 색이 빨갛게 됩니다.&lt;/a&gt;
  이 문단은 클릭하는 동안 배경색이 회색이 됩니다.
&lt;/p&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">a:link { color: blue; }          /* 방문하지 않은 링크 */
a:visited { color: purple; }     /* 방문한 링크 */
a:hover { background: yellow; }  /* 마우스를 올린 링크 */
a:active { color: red; }         /* 활성화한 링크 */

p:active { background: #eee; }   /* 활성화한 문단 */</pre>

<h4 id="결과">결과</h4>

<p>{{EmbedLiveSample('활성화_링크')}}</p>

<h3 id="활성화_폼_요소">활성화 폼 요소</h3>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html notranslate">&lt;form&gt;
  &lt;label for="my-button"&gt;내 버튼: &lt;/label&gt;
  &lt;button id="my-button" type="button"&gt;제 라벨이나 저를 클릭해보세요!&lt;/button&gt;
&lt;/form&gt;</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css notranslate">form :active {
  color: red;
}

form button {
  background: white;
}</pre>

<h4 id="결과_2">결과</h4>

<p>{{EmbedLiveSample('활성화_폼_요소')}}</p>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>



<p>{{Compat("css.selectors.active")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>링크 관련 의사 클래스: {{cssxref(":link")}}, {{cssxref(":visited")}}, {{cssxref(":hover")}}.</li>
</ul>
