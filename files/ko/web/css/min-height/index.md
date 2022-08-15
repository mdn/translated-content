---
title: min-height
slug: Web/CSS/min-height
tags:
  - CSS
  - CSS Property
  - Reference
translation_of: Web/CSS/min-height
---
<div>{{CSSRef}}</div>

<p><strong><code>max-height</code></strong> <a href="/en-US/docs/CSS">CSS</a> 속성은 요소의 최소 높이를 설정합니다. <code>min-height</code>는 {{cssxref("height")}} 속성의 <a href="/ko/docs/Web/CSS/used_value">사용값</a>이 자신의 값보다 작아지는걸 방지합니다.</p>

<div>{{EmbedInteractiveExample("pages/css/min-height.html")}}</div>



<p><code>min-height</code>가 {{cssxref("max-height")}} 또는 {{cssxref("height")}}보다 커지면 요소의 높이는 <code>min-height</code>의 값을 사용합니다.</p>

<h2 id="Syntax" name="Syntax">구문</h2>

<pre class="brush:css no-line-numbers">/* &lt;length&gt; 값 */
min-height: 3.5em;

/* &lt;percentage&gt; 값 */
min-height: 10%;

/* 키워드 값 */
min-height: max-content;
min-height: min-content;
min-height: fit-content;
min-height: fill-available;

/* 전역 값 */
min-height: inherit;
min-height: initial;
min-height: unset;
</pre>

<h3 id="Values" name="Values">값</h3>

<dl>
 <dt>{{cssxref("&lt;length&gt;")}}</dt>
 <dd>고정 길이로 나타낸 최대 높이. 음수 값은 유효하지 않습니다.</dd>
 <dt>{{cssxref("&lt;percentage&gt;")}}</dt>
 <dd><a href="/ko/docs/Web/CSS/All_About_The_Containing_Block">컨테이닝 블록</a> 높이에 대한 백분율로 나타낸 최대 높이. 음수 값은 유효하지 않습니다.</dd>
</dl>

<h4 id="키워드_값">키워드 값</h4>

<dl>
 <dt><code>auto</code></dt>
 <dd>최소 높이를 정하지 않음.</dd>
</dl>

<dl>
 <dt><code>max-content</code> {{ experimental_inline() }}</dt>
 <dd>본질적인 선호 높이.</dd>
 <dt><code>min-content</code> {{ experimental_inline() }}</dt>
 <dd>본질적인 최소 높이.</dd>
 <dt><code>fill-available</code> {{ experimental_inline() }}</dt>
 <dd>컨테이닝 블록의 높이에서 세로축 안쪽 및 바깥 여백과 테두리의 공간을 제외한 높이. (일부 브라우저는 매우 오래 된 이름인 <code>available</code>로 구현함을 참고하세요.)</dd>
 <dt><code>fit-content</code> {{ experimental_inline() }}</dt>
 <dd>CSS3 Box 모듈에 따라 <code>min-content</code>의 다른 이름. CSS3 Sizing 모듈은 더 복잡한 알고리즘을 정의하지만, 모든 브라우저에서 실험 기능으로도 구현하지 않습니다.</dd>
</dl>

<h3 id="형식_구문">형식 구문</h3>

{{csssyntax}}

<h2 id="예제">예제</h2>

<pre class="brush: css">table { min-height: 75%; }

form { min-height: 0; }
</pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<p>{{cssinfo}}</p>

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("css.properties.min-height")}}</p>

<h2 id="See_also" name="See_also">같이 보기</h2>

<ul>
 <li><a href="/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model">박스 모델 입문</a>, {{cssxref("box-sizing")}}</li>
 <li>{{ Cssxref("height") }}, {{ Cssxref("max-height") }}</li>
</ul>
