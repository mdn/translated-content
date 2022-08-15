---
title: border-spacing
slug: Web/CSS/border-spacing
tags:
  - CSS
  - CSS Property
  - CSS Tables
  - Reference
  - 'recipe:css-property'
translation_of: Web/CSS/border-spacing
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary"><a href="/ko/docs/Web/CSS">CSS</a> <strong><code>border-spacing</code></strong> 속성은 인접한 표 칸의 테두리 간격을 지정합니다.</span> {{cssxref("border-collapse")}}가 <code>separate</code>여야 적용됩니다.</p>

<div>{{EmbedInteractiveExample("pages/css/border-spacing.html")}}</div>



<p><code>border-spacing</code> 값은 표 전체의 테두리에도 적용되므로, 표 테두리와 첫 번째 및 마지막 행/열에 속하는 칸 사이 거리는 (가로/세로) <code>border-spacing</code> 값과 표에 적용한 (상/우/하/좌) {{cssxref("padding")}} 값의 합이 됩니다.</p>

<div class="blockIndicator note">
<p><strong>참고:</strong> <code>border-spacing</code> 속성은 {{htmlelement("table")}}에서 이제 사용하지 않는 <code>cellspacing</code> 특성에 대응하지만, 추가로 두 번째 값을 지정해 가로와 세로 값을 각각 설정할 수 있다는 차이점이 있습니다.</p>
</div>

<h2 id="구문">구문</h2>

<pre class="syntaxbox notranslate">/* &lt;length&gt; */
border-spacing: 2px;

/* 가로 &lt;length&gt; | 세로 &lt;length&gt; */
border-spacing: 1cm 2em;

/* 전역 값 */
border-spacing: inherit;
border-spacing: initial;
border-spacing: unset;</pre>

<p><code>border-spacing</code> 값은 하나 또는 두 개의 값을 사용해 지정합니다.</p>

<ul>
 <li><strong>한 개</strong>의 <code>&lt;length&gt;</code> 값을 지정하면 칸 사이의 가로와 세로 두 간격 모두 설정합니다.</li>
 <li>두 개의 <code>&lt;length&gt;</code> 값을 지정하면, 첫 번째 값은 칸 사이의 가로 간격(각 열의 간격), 두 번째 값은 칸 사이의 세로 간격(각 행의 간격)을 설정합니다.</li>
</ul>

<h3 id="값">값</h3>

<dl>
 <dt>{{cssxref("&lt;length&gt;")}}</dt>
 <dd>간격의 크기로 지정할 길이입니다.</dd>
</dl>

<h2 id="형식_정의">형식 정의</h2>

<p>{{cssinfo}}</p>

<h2 id="형식_구문">형식 구문</h2>

{{csssyntax}}

<h2 id="예제">예제</h2>

<h3 id="칸_간격과_안쪽_여백">칸 간격과 안쪽 여백</h3>

<p>다음 예제는 칸 사이에 세로 간격 <code>0.5em</code>과 가로 간격 <code>1em</code>을 배치합니다. 표의 테두리를 따라가면서, <code>padding</code> 값이 <code>border-spacing</code>과 어떻게 작용하는지 살펴보세요.</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;table&gt;
  &lt;tr&gt;
    &lt;td&gt;1&lt;/td&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;3&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;4&lt;/td&gt;&lt;td&gt;5&lt;/td&gt;&lt;td&gt;6&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;7&lt;/td&gt;&lt;td&gt;8&lt;/td&gt;&lt;td&gt;9&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">table {
  border-spacing: 1em 0.5em;
  padding: 0 2em 1em 0;
  border: 1px solid orange;
}

td {
  width: 1.5em;
  height: 1.5em;
  background: #d2d2d2;
  text-align: center;
  vertical-align: middle;
}</pre>

<h4 id="결과">결과</h4>

<p>{{ EmbedLiveSample('예제', 400, 200) }}</p>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat("css.properties.border-spacing")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{cssxref("border-collapse")}}, {{cssxref("border-style")}}</li>
 <li><code>border-spacing</code> 속성은 {{htmlelement("table")}} HTML 요소의 외관을 수정합니다.</li>
</ul>
