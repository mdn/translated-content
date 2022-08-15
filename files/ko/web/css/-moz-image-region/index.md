---
title: '-moz-image-region'
slug: Web/CSS/-moz-image-region
tags:
  - CSS
  - CSS Property
  - 'CSS:Mozilla Extensions'
  - Non-standard
translation_of: Web/CSS/-moz-image-region
---
<div>{{CSSRef}}{{Non-standard_header}}</div>

<p>XUL 요소와 가상요소들에 대하여 {{ Cssxref("list-style-image") }}  속성을 사용할때 이 속성은 전체이미지에서 사용되는 부분의 령역을 지정합니다.  이것은 요소들이 성능을 향상시키기 위해 같은 이미지의 서로다른 부분을 사용할수 있게 합니다.</p>

<pre class="brush: css">/* Keyword value */
-moz-image-region: auto;

/* &lt;shape&gt; value */
-moz-image-region: rect(0, 8px, 4px, 4px);

/* Global values */
-moz-image-region: inherit;
-moz-image-region: initial;
-moz-image-region: unset;</pre>

<p> </p>

<p>문법은 {{ Cssxref("clip") }}속성과 류사합니다. 4개의 값은 모두 이미지의 외쪽 웃모서리로부터 상대적입니다.</p>

<p>{{cssinfo}}</p>

<h2 id="Syntax" name="Syntax">구문</h2>

<pre>-moz-image-region: rect(<em>top</em>, <em>right</em>, <em>bottom</em>, <em>left</em>);</pre>

<h3 id="형식_구문">형식 구문</h3>

{{CSSSyntax}}

<h2 id="Examples" name="Examples">예제</h2>

<pre>#example-button {
  /* display only the 4x4 area from the top left of this image */
  list-style-image: url("chrome://example/skin/example.png");
  -moz-image-region: rect(0px, 4px, 4px, 0px);
}
#example-button:hover {
  /* use the 4x4 area to the right of the first for the hovered button */
  -moz-image-region: rect(0px, 8px, 4px, 4px);
}</pre>

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("css.properties.-moz-image-region")}}</p>
