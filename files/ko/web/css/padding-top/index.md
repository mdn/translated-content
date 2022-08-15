---
title: padding-top
slug: Web/CSS/padding-top
tags:
  - CSS
  - CSS Padding
  - CSS Property
  - Reference
translation_of: Web/CSS/padding-top
---
<div>{{CSSRef}}</div>

<p><strong><code>padding-top</code></strong> <a href="/ko/docs/Web/CSS">CSS</a> 속성은 요소의 위쪽에 <a href="/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#padding-area">안쪽 여백 영역</a>을 설정합니다.</p>

<div>{{EmbedInteractiveExample("pages/css/padding-top.html")}}</div>



<p>요소의 안쪽 여백 영역은 콘텐츠와 테두리 사이의 공간입니다.</p>

<p><img alt="The effect of the CSS padding-top property on the element box" src="/files/4105/padding-top.svg" style="border-style: solid; border-width: 1px; display: block; margin: 0px auto;"></p>

<div class="note">
<p><strong>참고:</strong> {{cssxref("padding")}} 속성을 사용하면 하나의 선언으로 네 방향 여백을 모두 설정할 수 있습니다.</p>
</div>

<h2 id="Syntax" name="Syntax">구문</h2>

<pre class="brush:css no-line-numbers">/* &lt;length&gt; 값 */
padding-top: 0.5em;
padding-top: 0;
padding-top: 2cm;

/* &lt;percentage&gt; 값 */
padding-top: 10%;

/* 전역 값 */
padding-top: inherit;
padding-top: initial;
padding-top: unset;
</pre>

<p><code>padding-top</code> 속성의 값은 아래 목록 중 하나로 지정할 수 있습니다. 바깥 여백<sup>margin</sup>과 다르게, 음수 값은 사용할 수 없습니다.</p>

<h3 id="Values" name="Values">값</h3>

<dl>
 <dt>{{cssxref("&lt;length&gt;")}}</dt>
 <dd>여백의 크기로 고정값 사용.</dd>
 <dt>{{cssxref("&lt;percentage&gt;")}}</dt>
 <dd>여백의 크기로 <a href="/ko/docs/Web/CSS/All_About_The_Containing_Block">컨테이닝 블록</a> <strong>너비</strong>의 백분율 사용.</dd>
</dl>

<h3 id="형식_구문">형식 구문</h3>

{{csssyntax}}

<h2 id="Examples" name="Examples">예제</h2>

<pre class="brush: css">.content { padding-top: 5%; }
.sidebox { padding-top: 10px; }
</pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<p>{{cssinfo}}</p>

<h2 id="Browser_Compatibility" name="Browser_Compatibility">브라우저 호환성</h2>

<p>{{Compat("css.properties.padding-top")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><a class="internal" href="/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model" title="en/CSS/box model">CSS 기본 박스 모델 입문</a></li>
 <li>{{cssxref("padding")}}</li>
</ul>
