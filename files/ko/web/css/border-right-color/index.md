---
title: border-right-color
slug: Web/CSS/border-right-color
tags:
  - CSS
  - CSS Borders
  - CSS Property
  - Reference
translation_of: Web/CSS/border-right-color
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary"><strong><code>border-right-color</code></strong> <a href="/ko/docs/Web/CSS">CSS</a> 속성은 요소의 오른쪽 테두리 색상을 지정합니다.</span> {{cssxref("border-color")}} 또는 {{cssxref("border-right")}} 단축 속성으로도 지정할 수 있습니다.</p>

<div>{{EmbedInteractiveExample("pages/css/border-right-color.html")}}</div>



<h2 id="구문">구문</h2>

<pre class="brush: css no-line-numbers  language-css">/* &lt;color&gt; 값 */
border-right-color: red;
border-right-color: #ffbb00;
border-right-color: rgb(255, 0, 0);
border-right-color: hsla(100%, 50%, 25%, 0.75);
border-right-color: currentColor;
border-right-color: transparent;

/* 전역 값 */
border-right-color: inherit;
border-right-color: initial;
border-right-color: unset;
</pre>

<p><code>border-right-color</code> 속성은 하나의 값을 사용해 지정합니다.</p>

<h3 id="값">값</h3>

<dl>
 <dt>{{cssxref("&lt;color&gt;")}}</dt>
 <dd>오른쪽 테두리의 색상.</dd>
</dl>

<h3 id="형식_구문">형식 구문</h3>

{{csssyntax}}

<h2 id="예제">예제</h2>

<h3 id="테두리를_가진_간단한_상자">테두리를 가진 간단한 상자</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div class="mybox"&gt;
  &lt;p&gt;This is a box with a border around it.
     Note which side of the box is
     &lt;span class="redtext"&gt;red&lt;/span&gt;.&lt;/p&gt;
&lt;/div&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">.mybox {
  border: solid 0.3em gold;
  border-right-color: red;
    width: auto;
}

.redtext {
  color: red;
}</pre>

<h4 id="결과">결과</h4>

<p>{{EmbedLiveSample('테두리를_가진_간단한_상자')}}</p>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<p>{{cssinfo}}</p>

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("css.properties.border-right-color")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>테두리 관련 CSS 단축 속성: {{cssxref("border")}}, {{cssxref("border-right")}}, {{cssxref("border-color")}}.</li>
 <li>다른 방향 테두리의 색상 관련 CSS 단축 속성: {{cssxref("border-top-color")}}, {{cssxref("border-bottom-color")}}, {{cssxref("border-left-color")}}.</li>
 <li>오른쪽 테두리 관련 CSS 속성: {{cssxref("border-right-style")}}, {{cssxref("border-right-width")}}.</li>
</ul>
