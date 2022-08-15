---
title: border-left-style
slug: Web/CSS/border-left-style
tags:
  - CSS
  - CSS Borders
  - CSS Property
  - Reference
translation_of: Web/CSS/border-left-style
---
<div>{{CSSRef}}</div>

<p><strong><code>border-left-style</code></strong> <a href="/ko/docs/Web/CSS">CSS</a> 속성은 요소 테두리의 왼쪽 스타일을 지정합니다.</p>

<div>{{EmbedInteractiveExample("pages/css/border-left-style.html")}}</div>



<div class="note"><strong>참고:</strong> 명세는 서로 다른 스타일의 테두리가 꼭지점에서 만날 때 어떻게 그려야 할지는 정의하고 있지 않습니다.</div>

<h2 id="Syntax" name="Syntax">구문</h2>

<pre class="brush:css no-line-numbers">/* 키워드 값 */
border-left-style: none;
border-left-style: hidden;
border-left-style: dotted;
border-left-style: dashed;
border-left-style: solid;
border-left-style: double;
border-left-style: groove;
border-left-style: ridge;
border-left-style: inset;
border-left-style: outset;

/* 전역 값 */
border-left-style: inherit;
border-left-style: initial;
border-left-style: unset;
</pre>

<p><code>border-left-style</code> 속성은 {{cssxref("border-style")}} 속성에 사용할 수 있는 키워드 중 하나를 사용해 지정할 수 있습니다.</p>

<h3 id="형식_구문">형식 구문</h3>

{{csssyntax}}

<h2 id="예제">예제</h2>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;table&gt;
  &lt;tr&gt;
    &lt;td class="b1"&gt;none&lt;/td&gt;
    &lt;td class="b2"&gt;hidden&lt;/td&gt;
    &lt;td class="b3"&gt;dotted&lt;/td&gt;
    &lt;td class="b4"&gt;dashed&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td class="b5"&gt;solid&lt;/td&gt;
    &lt;td class="b6"&gt;double&lt;/td&gt;
    &lt;td class="b7"&gt;groove&lt;/td&gt;
    &lt;td class="b8"&gt;ridge&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td class="b9"&gt;inset&lt;/td&gt;
    &lt;td class="b10"&gt;outset&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">/* Define look of the table */
table {
  border-width: 2px;
  background-color: #52E385;
}
tr, td {
  padding: 3px;
}

/* border-left-style example classes */
.b1 {border-left-style: none;}
.b2 {border-left-style: hidden;}
.b3 {border-left-style: dotted;}
.b4 {border-left-style: dashed;}
.b5 {border-left-style: solid;}
.b6 {border-left-style: double;}
.b7 {border-left-style: groove;}
.b8 {border-left-style: ridge;}
.b9 {border-left-style: inset;}
.b10 {border-left-style: outset;}</pre>

<h4 id="결과">결과</h4>

<p>{{EmbedLiveSample('예제', 300, 200)}}</p>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<p>{{cssinfo}}</p>

<h2 id="Browser_Compatibility" name="Browser_Compatibility">브라우저 호환성</h2>

<p>{{Compat("css.properties.border-left-style")}}</p>

<h2 id="See_Also" name="See_Also">같이 보기</h2>

<ul>
 <li>테두리 스타일 관련 CSS 속성: {{cssxref("border-top-style")}}, {{cssxref("border-right-style")}}, {{cssxref("border-bottom-style")}}, {{cssxref("border-style")}}.</li>
 <li>왼쪽 테두리 관련 CSS 속성: {{cssxref("border-left")}}, {{cssxref("border-left-color")}}, {{cssxref("border-left-width")}}.</li>
</ul>
