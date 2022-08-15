---
title: border-image-source
slug: Web/CSS/border-image-source
tags:
  - CSS
  - CSS Borders
  - CSS Property
  - Reference
translation_of: Web/CSS/border-image-source
---
<div>{{CSSRef}}</div>

<p><strong><code>border-image-source</code></strong> <a href="/ko/docs/Web/CSS">CSS</a> 속성은 요소의 <a href="/ko/docs/Web/CSS/border-image">테두리 이미지</a>로 사용할 원본 이미지를 지정합니다.</p>

<div>{{EmbedInteractiveExample("pages/css/border-image-source.html")}}</div>



<p>{{cssxref("border-image-slice")}} 속성으로 나뉜 구역을 사용해 최종 테두리 이미지를 생성합니다.</p>

<h2 id="구문">구문</h2>

<pre class="brush:css no-line-numbers">/* 키워드 값 */
border-image-source: none;

/* &lt;image&gt; 값 */
border-image-source: url(image.jpg);
border-image-source: linear-gradient(to top, red, yellow);

/* 전역 값 */
border-image-source: inherit;
border-image-source: initial;
border-image-source: unset;
</pre>

<h3 id="값">값</h3>

<dl>
 <dt><code>none</code></dt>
 <dd>테두리 이미지를 사용하지 않습니다. {{cssxref("border-style")}}이 대신 표시됩니다.</dd>
 <dt>{{cssxref("&lt;image&gt;")}}</dt>
 <dd>테두리에 사용할 이미지 참조입니다.</dd>
</dl>

<h3 id="형식_구문">형식 구문</h3>

{{csssyntax}}

<h2 id="예제">예제</h2>

<p>{{cssxref("border-image")}}에서 확인할 수 있습니다.</p>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<p>{{cssinfo}}</p>

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("css.properties.border-image-source")}}</p>
