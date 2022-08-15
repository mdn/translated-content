---
title: 유형 선택자
slug: Web/CSS/Type_selectors
tags:
  - CSS
  - HTML
  - Node
  - Reference
  - Selectors
  - 선택자
translation_of: Web/CSS/Type_selectors
---
<div>{{CSSRef("Selectors")}}</div>

<p><a href="/ko/docs/Web/CSS">CSS</a> <strong>유형 선택자</strong>는 노드 이름을 사용해 요소를 선택합니다. 즉 문서 내에서 주어진 유형의 모든 요소를 선택합니다.</p>

<pre class="brush: css notranslate">/* All &lt;a&gt; elements. */
a {
  color: red;
}</pre>

<h2 id="구문">구문</h2>

<pre class="syntaxbox notranslate">element { <em>style properties</em> }
</pre>

<h2 id="예제">예제</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css notranslate">span {
  background-color: DodgerBlue;
  color: #ffffff;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;span&gt;텍스트를 가진 span입니다.&lt;/span&gt;
&lt;p&gt;텍스트를 가진 p입니다.&lt;/p&gt;
&lt;span&gt;또 다시 텍스트를 가진 span입니다.&lt;/span&gt;
</pre>

<h3 id="결과">결과</h3>

<p>{{EmbedLiveSample('예제', 200, 150)}}</p>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("css.selectors.type")}}</p>
