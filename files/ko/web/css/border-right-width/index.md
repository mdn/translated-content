---
title: border-right-width
slug: Web/CSS/border-right-width
tags:
  - CSS
  - CSS Borders
  - CSS Property
  - Reference
  - 'recipe:css-property'
translation_of: Web/CSS/border-right-width
---
<div>{{CSSRef}}</div>

<p><a href="/ko/docs/Web/CSS">CSS</a> <strong><code>border-right-width</code></strong> 속성은 요소의 오른쪽 테두리 너비를 지정합니다.</p>

<div>{{EmbedInteractiveExample("pages/css/border-right-width.html")}}</div>



<h2 id="Syntax" name="Syntax">구문</h2>

<pre class="brush:css no-line-numbers notranslate">/* 키워드 값*/
border-right-width: thin;
border-right-width: medium;
border-right-width: thick;

/* &lt;length&gt; 값 */
border-right-width: 10em;
border-right-width: 3vmax;
border-right-width: 6px;

/* 전역 값 */
border-right-width: inherit;
border-right-width: initial;
border-right-width: unset;
</pre>

<h3 id="값">값</h3>

<dl>
 <dt><code>&lt;line-width&gt;</code></dt>
 <dd>테두리의 너비입니다.0 이상의 {{cssxref("&lt;length&gt;")}} 또는 키워드를 사용할 수 있습니다. 키워드는 다음 세 가지 중 하나여야 합니다.
 <table class="standard-table">
  <tbody>
   <tr>
    <td><code>thin</code></td>
    <td>
     <div style="margin: 0.5em; width: 3em; height: 3em; border-right-style: solid; border-right-width: thin; background-color: palegreen;"></div>
    </td>
    <td>얇은 테두리</td>
   </tr>
   <tr>
    <td><code>medium</code></td>
    <td>
     <div style="margin: 0.5em; width: 3em; height: 3em; border-right-style: solid; border-right-width: medium; background-color: palegreen;"></div>
    </td>
    <td>중간 테두리</td>
   </tr>
   <tr>
    <td><code>thick</code></td>
    <td>
     <div style="margin: 0.5em; width: 3em; height: 3em; border-right-style: solid; border-right-width: thick; background-color: palegreen;"></div>
    </td>
    <td>굵은 테두리</td>
   </tr>
  </tbody>
 </table>

 <div class="note">
 <p><strong>참고:</strong> 각 키워드의 굵기를 정의한 명세는 없기 때문에 결과는 구현별로 상이할 수 있습니다. 다만 굵기는 언제나 <code>thin ≤ medium ≤ thick</code>이고, 하나의 문서 내에서 동일합니다.</p>
 </div>
 </dd>
</dl>

<h2 id="형식_정의">형식 정의</h2>

<p>{{cssinfo}}</p>

<h2 id="형식_구문">형식 구문</h2>

{{csssyntax}}

<h2 id="예제">예제</h2>

<h3 id="테두리의_너비_비교">테두리의 너비 비교</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;div&gt;Element 1&lt;/div&gt;
&lt;div&gt;Element 2&lt;/div&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">div {
  border: 1px solid red;
  margin: 1em 0;
}

div:nth-child(1) {
  border-right-width: thick;
}
div:nth-child(2) {
  border-right-width: 2em;
}</pre>

<h4 id="결과">결과</h4>

<p>{{EmbedLiveSample('테두리의_너비_비교', '100%')}}</p>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("css.properties.border-right-width")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>테두리 너비 관련 CSS 속성: {{Cssxref("border-bottom-width")}}, {{Cssxref("border-left-width")}}, {{Cssxref("border-top-width")}}, and {{Cssxref("border-width")}}.</li>
 <li>오른쪽 테두리 관련 CSS 속성: {{Cssxref("border")}}, {{Cssxref("border-right")}}, {{Cssxref("border-right-style")}}, and {{Cssxref("border-right-color")}}.</li>
</ul>
