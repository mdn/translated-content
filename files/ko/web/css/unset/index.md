---
title: unset
slug: Web/CSS/unset
tags:
  - CSS
  - CSS Cascade
  - Layout
  - Reference
translation_of: Web/CSS/unset
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary">CSS <strong><code>unset</code></strong> 키워드를 적용한 속성은, 부모로부터 상속할 값이 존재하면 상속값을, 그렇지 않다면 <a href="/ko/docs/Web/CSS/initial_value">초깃값</a>을 사용합니다.</span> 다르게 표현하자면, 전자일 땐 {{cssxref("inherit")}} 키워드처럼, 후자일 땐 {{cssxref("initial")}} 키워드처럼 동작합니다. {{cssxref("all")}} 단축 속성을 포함한 모든 속성에 사용할 수 있습니다.</p>

<h2 id="예제">예제</h2>

<h3 id="글자_색">글자 색</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;p&gt;This text is red.&lt;/p&gt;
&lt;div class="foo"&gt;
  &lt;p&gt;This text is also red.&lt;/p&gt;
&lt;/div&gt;
&lt;div class="bar"&gt;
  &lt;p&gt;This text is green (default inherited value).&lt;/p&gt;
&lt;/div&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">.foo {
  color: blue;
}
.bar {
  color: green;
}

p {
  color: red;
}
.bar p {
  color: unset;
}
</pre>

<h4 id="결과">결과</h4>

<p>{{ EmbedLiveSample('글자_색') }}</p>

<h3 id="테두리">테두리</h3>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;p&gt;This text has a red border.&lt;/p&gt;
&lt;div&gt;
  &lt;p&gt;This text has a red border.&lt;/p&gt;
&lt;/div&gt;
&lt;div class="bar"&gt;
  &lt;p&gt;This text has has a black border (initial default, not inherited).&lt;/p&gt;
&lt;/div&gt;
</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css">div {
  border: 1px solid green;
}

p {
  border: 1px solid red;
}

.bar p {
  border-color: unset;
}
</pre>

<h4 id="결과_2">결과</h4>

<p>{{ EmbedLiveSample('테두리', 'auto', 200) }}</p>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("css.types.global_keywords.unset")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{cssxref("initial")}}을 사용해 속성의 초깃값을 사용하세요.</li>
 <li>{{cssxref("revert")}}를 사용해 사용자 에이전트가 지정한 값(또는 사용자가 수정한 값)으로 속성을 되돌리세요.</li>
 <li>{{cssxref("inherit")}}을 사용해 속성의 값이 부모와 같도록 지정하세요.</li>
 <li>{{cssxref("all")}} 속성을 사용하면 요소의 모든 속성을 한꺼번에 <code>initial</code>, <code>inherit</code>, <code>revert</code>, <code>unset</code>할 수 있습니다.</li>
</ul>
