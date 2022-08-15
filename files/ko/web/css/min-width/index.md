---
title: min-width
slug: Web/CSS/min-width
tags:
  - CSS
  - CSS Property
  - Reference
translation_of: Web/CSS/min-width
---
<div>{{CSSRef}}</div>

<p><strong><code>min-width</code></strong> <a href="/en-US/docs/CSS">CSS</a> 속성은 요소의 최소 너비를 설정합니다. <code>min-width</code>는 {{cssxref("width")}} 속성의 <a href="/ko/docs/Web/CSS/used_value">사용값</a>이 자신의 값보다 작아지는걸 방지합니다.</p>

<div>{{EmbedInteractiveExample("pages/css/min-width.html")}}</div>



<p><code>min-width</code>가 {{cssxref("max-width")}} 또는 {{cssxref("width")}}보다 커지면 요소의 높이는 <code>min-width</code>의 값을 사용합니다.</p>

<h2 id="구문">구문</h2>

<pre class="brush:css no-line-numbers">/* &lt;length&gt; 값 */
min-width: 3.5em;

/* &lt;percentage&gt; 값 */
min-width: 10%;

/* 키워드 값 */
min-width: max-content;
min-width: min-content;
min-width: fit-content;
min-width: fill-available;

/* 전역 값 */
min-width: inherit;
min-width: initial;
min-width: unset;
</pre>

<h3 id="값">값</h3>

<dl>
 <dt>{{cssxref("&lt;length&gt;")}}</dt>
 <dd>고정 길이로 나타낸 최대 너비. 음수 값은 유효하지 않습니다.</dd>
 <dt>{{cssxref("&lt;percentage&gt;")}}</dt>
 <dd><a href="/ko/docs/Web/CSS/All_About_The_Containing_Block">컨테이닝 블록</a> 너비에 대한 백분율로 나타낸 최대 너비. 음수 값은 유효하지 않습니다.</dd>
</dl>

<h4 id="키워드_값">키워드 값</h4>

<dl>
 <dt><code>auto</code></dt>
 <dd>최소 너비를 정하지 않음.</dd>
 <dt><code>max-content</code> {{ experimental_inline() }}</dt>
 <dd>본질적인 선호 높이.</dd>
 <dt><code>min-content</code> {{ experimental_inline() }}</dt>
 <dd>본질적인 최소 높이.</dd>
 <dt><code>fill-available</code>{{ experimental_inline() }}</dt>
 <dd>컨테이닝 블록의 너비에서 가로축 안쪽 및 바깥 여백과 테두리의 공간을 제외한 높이. (일부 브라우저는 매우 오래 된 이름인 <code>available</code>로 구현함을 참고하세요.)</dd>
 <dt><code>fit-content</code> {{ experimental_inline() }}</dt>
 <dd><code>min(max-content, max(min-content, fill-available))</code>과 같음.</dd>
</dl>

<h3 id="형식_구문">형식 구문</h3>

{{csssyntax}}

<h2 id="예제">예제</h2>

<pre class="brush:css;">table { min-width: 75%; }

form { min-width: 0; }
</pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<p>{{cssinfo}}</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">브라우저 호환성</h2>

<p>{{Compat("css.properties.min-width")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><a href="/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model">박스 모델 입문</a>, {{cssxref("box-sizing")}}</li>
 <li>{{ Cssxref("width") }}, {{ Cssxref("max-width") }}</li>
</ul>
