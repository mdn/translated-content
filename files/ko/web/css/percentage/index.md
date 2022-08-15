---
title: <percentage>
slug: Web/CSS/percentage
tags:
  - CSS
  - CSS Data Type
  - Layout
  - Reference
  - Web
translation_of: Web/CSS/percentage
---
<div>{{CSSRef}}</div>

<p><strong><code>&lt;percentage&gt;</code></strong> <a href="/ko/docs/Web/CSS">CSS</a> <a href="/ko/docs/Web/CSS/CSS_Types">자료형</a>은 백분율 값을 나타냅니다. 보통 부모 객체와의 상대적 크기를 지정할 때 사용합니다. {{Cssxref("width")}}, {{Cssxref("height")}}, {{Cssxref("margin")}}, {{Cssxref("padding")}}, {{Cssxref("font-size")}} 처럼 다양한 속성에서 백분율을 쓸 수 있습니다.</p>

<div class="note"><strong>참고:</strong> 계산된 값만 상속받을 수 있습니다. 따라서 부모 속성이 백분율 값을 사용하더라도 전달되는 값은 실제값(예컨대 너비의 {{cssxref("&lt;length&gt;")}} 값은 픽셀)이며 백분율 값은 접근할 수 없습니다.</div>

<h2 id="구문">구문</h2>

<p><code>&lt;percentage&gt;</code> 자료형은 {{cssxref("&lt;number&gt;")}}와 그 뒤의 백분율 기호(<code>%</code>)로 표기합니다. 선택적으로 하나의 <code>+</code> 또는 <code>-</code> 기호로 부호를 표기할 수 있지만, 음의 값은 어떤 속성에서도 유효하지 않습니다. 다른 CSS 단위와 마찬가지로 숫자와 기호 사이에 공백은 없습니다.</p>

<h2 id="보간">보간</h2>

<p>애니메이션에서 <code>&lt;percentage&gt;</code> 자료형의 값은 유동소수점 실수를 사용해 보간됩니다. 보간의 속도는 애니메이션과 연결된 <a href="/ko/docs/Web/CSS/single-transition-timing-function">타이밍 함수</a>가 결정합니다.</p>

<h2 id="예제"><strong>예제</strong></h2>

<h3 id="width와_margin-left"><code>width</code>와 <code>margin-left</code></h3>

<pre class="brush: html">&lt;div style="background-color:blue;"&gt;
  &lt;div style="width:50%; margin-left:20%; background-color:lime;"&gt;
    width: 50%, margin-left: 20%
  &lt;/div&gt;
  &lt;div style="width:30%; margin-left:60%; background-color:pink;"&gt;
    width: 30%, margin-left: 60%
  &lt;/div&gt;
&lt;/div&gt;
</pre>

<p>{{EmbedLiveSample('width와_margin-left', '600', 140)}}</p>

<h3 id="font-size"><code>font-size</code></h3>

<pre class="brush: html">&lt;div style="font-size:18px;"&gt;
  &lt;p&gt;원본 텍스트 (18px)&lt;/p&gt;
  &lt;p&gt;&lt;span style="font-size:50%;"&gt;50%&lt;/span&gt;&lt;/p&gt;
  &lt;p&gt;&lt;span style="font-size:200%;"&gt;200%&lt;/span&gt;&lt;/p&gt;
&lt;/div&gt;
</pre>

<p>{{EmbedLiveSample('font-size', 'auto', 160)}}</p>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("css.types.percentage")}}</p>
