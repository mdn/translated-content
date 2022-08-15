---
title: background-color
slug: Web/CSS/background-color
tags:
  - CSS
  - CSS Background
  - CSS Property
  - Graphics
  - HTML Colors
  - HTML Styles
  - Layout
  - Reference
  - Styles
  - Styling HTML
translation_of: Web/CSS/background-color
---
<div>{{CSSRef}}</div>

<p><a href="/en/CSS" title="CSS">CSS</a> <strong><code>background-color</code></strong> 속성은 요소의 배경 색을 지정합니다.</p>

<div>{{EmbedInteractiveExample("pages/css/background-color.html")}}</div>



<h2 id="구문">구문</h2>

<pre class="brush: css notranslate">/* 키워드 값 */
background-color: red;
background-color: indigo;

/* 16진수 값 */
background-color: #bbff00;    /* 완전 불투명 */
background-color: #bf0;       /* 완전 불투명 단축 */
background-color: #11ffee00;  /* 완전 투명 */
background-color: #1fe0;      /* 완전 투명 단축 */
background-color: #11ffeeff;  /* 완전 불투명 */
background-color: #1fef;      /* 완전 불투명 단축 */

/* RGB 값 */
background-color: rgb(255, 255, 128);        /* 완전 불투명 */
background-color: rgba(117, 190, 218, 0.5);  /* 50% 불투명도 */

/* HSL 값 */
background-color: hsl(50, 33%, 25%);         /* 완전 불투명 */
background-color: hsla(50, 33%, 25%, 0.75);  /* 75% 불투명도 */

/* 특별 키워드 값 */
background-color: currentcolor;
background-color: transparent;

/* 전역 값 */
background-color: inherit;
background-color: initial;
background-color: unset;</pre>

<p><code>background-color</code> 속성은 하나의 {{cssxref("&lt;color&gt;")}} 값을 사용해 지정합니다.</p>

<h3 id="Values" name="Values">값</h3>

<dl>
 <dt>{{cssxref("color")}}</dt>
 <dd>요소의 배경으로 사용할 단일 색상입니다. {{cssxref("background-image")}} 뒤에 렌더링 되므로, 이미지가 투명한 부분을 가지고 있으면 그 곳을 통해 볼 수 있습니다.</dd>
</dl>

<h2 id="접근성_고려사항">접근성 고려사항</h2>

<p>낮은 시력을 가진 사용자도 페이지의 콘텐츠를 읽을 수 있도록 글자 색과 배경색의 대비를 높게 유지하는 것이 중요합니다.</p>

<p>색상 대비율은 배경색과 투명도를 적용한 글자 색의 밝기를 비교해서 얻어낼 수 있습니다. 현재 <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" rel="noopener">웹 콘텐츠 접근성 가이드라인</a>(WCAG)을 만족하려면, 텍스트 콘텐츠는 4.5:1, 제목 등 큰 텍스트는 3:1의 대비율이 필요합니다. 큰 텍스트란 18.66px 이상의 <a href="/ko/docs/Web/CSS/font-weight">굵은</a> 글씨 혹은 24px 이상의 텍스트로 정의하고 있습니다.</p>

<ul>
 <li><a href="https://webaim.org/resources/contrastchecker/">WebAIM: Color Contrast Checker</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background">MDN Understanding WCAG, Guideline 1.4 explanations</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html">Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0</a></li>
</ul>

<h2 id="형식_정의">형식 정의</h2>

<p>{{cssinfo}}</p>

<h2 id="형식_구문">형식 구문</h2>

{{csssyntax}}

<h2 id="예제">예제</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;div class="exampleone"&gt;
 Lorem ipsum dolor sit amet, consectetuer
&lt;/div&gt;

&lt;div class="exampletwo"&gt;
  Lorem ipsum dolor sit amet, consectetuer
&lt;/div&gt;

&lt;div class="examplethree"&gt;
  Lorem ipsum dolor sit amet, consectetuer
&lt;/div&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css; highlight:[2,7,12,17]; notranslate">.exampleone {
  background-color: teal;
  color: white;
}

.exampletwo {
  background-color: rgb(153,102,153);
  color: rgb(255,255,204);
}

.examplethree {
  background-color: #777799;
  color: #FFFFFF;
}
</pre>

<h3 id="결과">결과</h3>

<p>{{EmbedLiveSample("예제","200","150")}}</p>

<ul>
</ul>

<h2 id="Browser_Compatibility" name="Browser_Compatibility">명세</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">명세</th>
   <th scope="col">주석</th>
   <th scope="col">피드백</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{ SpecName('CSS3 Backgrounds', '#background-color', 'background-color') }}</td>
   <td>Though technically removing the <code>transparent</code> keyword, this doesn't change anything as it has been incorporated as a true {{cssxref("&lt;color&gt;")}}</td>
   <td><a href="https://github.com/w3c/csswg-drafts/labels/css-backgrounds-3">Backgrounds Level 3 GitHub issues</a></td>
  </tr>
  <tr>
   <td>{{ SpecName('CSS2.1', 'colors.html#propdef-background-color', 'background-color') }}</td>
   <td>No change.</td>
   <td></td>
  </tr>
  <tr>
   <td>{{ SpecName('CSS1', '#background-color', 'background-color') }}</td>
   <td></td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_Compatibility" name="Browser_Compatibility">브라우저 호환성</h2>



<p>{{Compat("css.properties.background-color")}}</p>

<h2 id="Browser_Compatibility" name="Browser_Compatibility">더 보기</h2>

<ul>
 <li><a href="/ko/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds">한 번에 여러 배경 사용하기</a></li>
 <li>{{cssxref("&lt;color&gt;")}} 자료형</li>
 <li>색상 관련 다른 속성: {{cssxref("color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, and {{cssxref("column-rule-color")}}</li>
 <li><a href="/ko/docs/Web/HTML/Applying_color">CSS로 HTML 요소에 색입히기</a></li>
</ul>
