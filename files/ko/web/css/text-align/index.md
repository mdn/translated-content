---
title: text-align
slug: Web/CSS/text-align
tags:
  - CSS
  - CSS Property
  - CSS Text
  - Reference
  - 'recipe:css-property'
translation_of: Web/CSS/text-align
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary"><a href="/ko/docs/Web/CSS">CSS</a> <strong><code>text-align</code></strong> 속성은 블록 요소나 표의 칸 상자의 가로 정렬을 설정합니다.</span> 즉 {{cssxref("vertical-align")}}과 동일하나 세로가 아닌 가로 방향으로 동작합니다.</p>

<div>{{EmbedInteractiveExample("pages/css/text-align.html")}}</div>



<h2 id="구문">구문</h2>

<pre class="brush: css no-line-numbers notranslate">/* 키워드 값 */
text-align: left;
text-align: right;
text-align: center;
text-align: justify;
text-align: justify-all;
text-align: start;
text-align: end;
text-align: match-parent;

/* 표 열의 문자 기반 정렬 */
text-align: ".";
text-align: "." center;

/* 블록 정렬 값 (비표준 구문) */
text-align: -moz-center;
text-align: -webkit-center;

/* 전역 값 */
text-align: inherit;
text-align: initial;
text-align: unset;
</pre>

<p><code>text-align</code> 속성은 다음 방법 중 하나를 사용해 지정합니다.</p>

<ul>
 <li><code><a href="#start">start</a></code>, <code><a href="#end">end</a></code>, <code><a href="#left">left</a></code>, <code><a href="#right">right</a></code>, <code><a href="#center">center</a></code>, <code><a href="#justify">justify</a></code>, <code><a href="#justify-all">justify-all</a></code>, <code><a href="#match-parent">match-parent</a></code> 키워드 중 하나.</li>
 <li><code><a href="#string">&lt;string&gt;</a></code> 값만 사용. 다른 값은 <code><a href="#right">right</a></code>을 사용하게 됩니다.</li>
 <li>키워드 값과 <code><a href="#string">&lt;string&gt;</a></code> 값 모두 사용.</li>
</ul>

<h3 id="값">값</h3>

<dl>
 <dt id="start"><code>start</code> {{experimental_inline}}</dt>
 <dd>쓰기 방식이 좌횡서면 <code>left</code>와 같고, 우횡서면 <code>right</code>과 같습니다.</dd>
 <dt id="end"><code>end</code> {{experimental_inline}}</dt>
 <dd>쓰기 방식이 좌횡서면 <code>right</code>과 같고, 우횡서면 <code>left</code>와 같습니다.</dd>
 <dt id="left"><code>left</code></dt>
 <dd>인라인 콘텐츠를 줄 상자의 왼쪽 모서리로 정렬합니다.</dd>
 <dt id="right"><code>right</code></dt>
 <dd>인라인 콘텐츠를 줄 상자의 오른쪽 모서리로 정렬합니다.</dd>
 <dt id="center"><code>center</code></dt>
 <dd>인라인 콘텐츠를 줄 상자의 가운데로 정렬합니다.</dd>
 <dt id="justify"><code>justify</code></dt>
 <dd>인라인 콘텐츠를 양쪽 정렬합니다. 마지막 줄을 제외하고, 줄 상자의 왼쪽과 오른쪽 끝에 텍스트를 맞추기 위해 사이 공간을 띄웁니다.</dd>
 <dt id="justify-all"><code>justify-all</code> {{experimental_inline}}</dt>
 <dd><code>justify</code>와 같지만 마지막 줄에도 적용합니다.</dd>
 <dt id="match-parent"><code>match-parent</code> {{experimental_inline}}</dt>
 <dd><code>inherit</code>과 비슷하지만, <code>start</code>와 <code>end</code> 값을 부모의 {{cssxref("direction")}}에 맞춰 적절한 <code>left</code>와 <code>right</code> 값으로 치환합니다.</dd>
 <dt id="string">{{cssxref("&lt;string&gt;")}} {{experimental_inline}}</dt>
 <dd>표 칸에 적용할 경우, 칸의 콘텐츠를 해당 문자에 맞춰 정렬합니다.</dd>
</dl>

<h2 id="접근성_고려사항">접근성 고려사항</h2>

<p>양쪽 정렬 적용 시 생기는 불규칙한 여백은 난독증 등 인지력 저하를 겪고 있는 사용자에게 문제가 될 수 있습니다.</p>

<ul>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background">MDN Understanding WCAG, Guideline 1.4 explanations</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html">Understanding Success Criterion 1.4.8 | Understanding WCAG 2.0</a></li>
</ul>

<h2 id="형식_정의">형식 정의</h2>

<p>{{cssinfo}}</p>

<h2 id="형식_구문">형식 구문</h2>

{{csssyntax}}

<h2 id="예제">예제</h2>

<h3 id="왼쪽_정렬">왼쪽 정렬</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;p class="example"&gt;
  Integer elementum massa at nulla placerat varius.
  Suspendisse in libero risus, in interdum massa.
  Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
&lt;/p&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css; highlight:[2] notranslate">.example {
  text-align: left;
  border: solid;
}</pre>

<h4 id="결과">결과</h4>

<p>{{EmbedLiveSample("왼쪽_정렬","100%","100%")}}</p>

<h3 id="가운데_정렬">가운데 정렬</h3>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html notranslate">&lt;p class="example"&gt;
  Integer elementum massa at nulla placerat varius.
  Suspendisse in libero risus, in interdum massa.
  Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
&lt;/p&gt;</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css; highlight:[2] notranslate">.example {
  text-align: center;
  border: solid;
}</pre>

<h4 id="결과_2">결과</h4>

<p>{{EmbedLiveSample("가운데_정렬","100%","100%")}}</p>

<h3 id="양쪽_정렬">양쪽 정렬</h3>

<h4 id="HTML_3">HTML</h4>

<pre class="brush: html notranslate">&lt;p class="example"&gt;
  Integer elementum massa at nulla placerat varius.
  Suspendisse in libero risus, in interdum massa.
  Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
&lt;/p&gt;</pre>

<h4 id="CSS_3">CSS</h4>

<pre class="brush: css; highlight:[2] notranslate">.example {
  text-align: justify;
  border: solid;
}</pre>

<h4 id="결과_3">결과</h4>

<p>{{EmbedLiveSample("양쪽_정렬","100%","100%")}}</p>

<h3 id="참고">참고</h3>

<p>인라인 콘텐츠를 가운데 정렬하지 않고 자신을 정렬하는 법은 {{cssxref("margin")}}을 <code>auto</code>로 설정하는 것입니다.</p>

<pre class="brush: css notranslate">.something {
  margin: auto;
}
</pre>

<pre class="brush: css notranslate">.something {
  margin: 0 auto;
}
</pre>

<pre class="brush: css notranslate">.something {
  margin-left: auto;
  margin-right: auto;
}
</pre>

<ul>
</ul>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("css.properties.text-align")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{Cssxref("margin","margin: auto")}}, {{Cssxref("margin-left","margin-left: auto")}}, {{Cssxref("vertical-align")}}</li>
</ul>
