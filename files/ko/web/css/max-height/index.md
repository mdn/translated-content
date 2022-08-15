---
title: max-height
slug: Web/CSS/max-height
tags:
  - CSS
  - CSS Property
  - Reference
translation_of: Web/CSS/max-height
---
<div>{{CSSRef}}</div>

<p><strong><code>max-height</code></strong> <a href="/en-US/docs/CSS">CSS</a> 속성은 요소의 최대 높이를 설정합니다. <code>max-height</code>는 {{cssxref("height")}} 속성의 <a href="/ko/docs/Web/CSS/used_value">사용값</a>이 자신의 값보다 커지는걸 방지합니다.</p>

<div>{{EmbedInteractiveExample("pages/css/max-height.html")}}</div>



<p><code>max-height</code>가 {{cssxref("height")}}를 재설정하고, {{cssxref("min-height")}}가 <code>max-height</code>를 재설정합니다.</p>

<h2 id="Syntax" name="Syntax">구문</h2>

<pre class="brush:css no-line-numbers">/* &lt;length&gt; 값 */
max-height: 3.5em;

/* &lt;percentage&gt; 값 */
max-height: 75%;

/* 키워드 값 */
max-height: none;
max-height: max-content;
max-height: min-content;
max-height: fit-content;
max-height: fill-available;

/* 전역 값 */
max-height: inherit;
max-height: initial;
max-height: unset;
</pre>

<h3 id="Values" name="Values">값</h3>

<dl>
 <dt>{{cssxref("&lt;length&gt;")}}</dt>
 <dd>고정 길이로 나타낸 최대 높이.</dd>
 <dt>{{cssxref("&lt;percentage&gt;")}}</dt>
 <dd><a href="/ko/docs/Web/CSS/All_About_The_Containing_Block">컨테이닝 블록</a> 높이에 대한 백분율로 나타낸 최대 높이.</dd>
</dl>

<h4 id="키워드_값">키워드 값</h4>

<dl>
 <dt><code>none</code></dt>
 <dd>최대 높이를 정하지 않음.</dd>
 <dt><code>max-content</code> {{experimental_inline()}}</dt>
 <dd>본질적인 선호 높이.</dd>
 <dt><code>min-content</code> {{experimental_inline()}}</dt>
 <dd>본질적인 최소 높이.</dd>
 <dt><code>fill-available</code> {{experimental_inline()}}</dt>
 <dd>컨테이닝 블록의 높이에서 세로축 안쪽 및 바깥 여백과 테두리의 공간을 제외한 높이. (일부 브라우저는 매우 오래 된 이름인 <code>available</code>로 구현함을 참고하세요.)</dd>
 <dt><code>fit-content</code> {{experimental_inline()}}</dt>
 <dd><code>max-content</code>와 동일.</dd>
</dl>

<h3 id="형식_구문">형식 구문</h3>

{{csssyntax}}

<h2 id="예제">예제</h2>

<pre class="brush: css">table { max-height: 75%; }

form { max-height: none; }
</pre>

<h2 id="접근성_참고사항">접근성 참고사항</h2>

<p>페이지의 확대 또는 글씨 크기를 키운 후에도 <code>max-height</code>를 설정한 요소의 내용이 잘리거나, 다른 요소를 가리지 않도록 주의하세요.</p>

<ul>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background">MDN Understanding WCAG, Guideline 1.4 explanations</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html" rel="noopener">Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0</a></li>
</ul>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<p>{{cssinfo}}</p>

<h2 id="Browser_Compatibility" name="Browser_Compatibility">브라우저 호환성</h2>

<p>{{Compat("css.properties.max-height")}}</p>

<h2 id="See_also" name="See_also">같이 보기</h2>

<ul>
 <li><a href="/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model">박스 모델 입문</a>, {{cssxref("box-sizing")}}</li>
 <li>{{cssxref("height")}}, {{cssxref("min-height")}}</li>
</ul>
