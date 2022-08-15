---
title: font-size
slug: Web/CSS/font-size
translation_of: Web/CSS/font-size
---
<div>{{CSSRef}}</div>

<p><strong><code>font-size</code></strong> <a href="/en-US/docs/CSS" title="CSS">CSS</a> 속성은 폰트의 크기(대문자 "M"의 크기)를 지정합니다. 폰트 크기를 바꾸면 <code>em</code> 과 <code>ex</code> {{cssxref("&lt;length&gt;")}} 단위로 계산된 다른 항목들의 크기를 바꿉니다.</p>

<p>{{EmbedInteractiveExample("pages/css/font-size.html")}}</p>

<h2 id="Syntax" name="Syntax">구문</h2>

<pre class="brush:css notranslate">/* &lt;absolute-size&gt; 값 */
font-size: xx-small;
font-size: x-small;
font-size: small;
font-size: medium;
font-size: large;
font-size: x-large;
font-size: xx-large;

/* &lt;relative-size&gt; 값 */
font-size: larger;
font-size: smaller;

/* &lt;length&gt; 값 */
font-size: 12px;
font-size: 0.8em;

/* &lt;percentage&gt; 값 */
font-size: 80%;

/* 전역 값 */
font-size: inherit;
font-size: initial;
font-size: unset;
</pre>

<p>The <code>font-size</code> property is specified in one of the following ways:</p>

<ul>
 <li>As one of the <a href="https://developer.mozilla.org/ko/docs/Web/CSS/font-size$edit#absolute-size">absolute-size</a> or <a href="https://developer.mozilla.org/ko/docs/Web/CSS/font-size$edit#relative-size">relative-size</a> keywords</li>
 <li>As a <code>&lt;length&gt;</code> or a <code>&lt;percentage&gt;</code>, relative to the parent element's font size</li>
</ul>

<h3 id="Values" name="Values">값</h3>

<dl>
 <dt><code>xx-small, x-small, small, medium, large, x-large, xx-large</code></dt>
 <dd>키워드는 사용자의 기본 폰트(<code>medium</code>) 크기에 따라 정해집니다. <code>&lt;font size="1"&gt;</code> 부터 <code>&lt;font size="7"&gt;</code> 와 같은 HTML 과 유사하게 표현됩니다. 기본 유저 폰트 크기는 <code>&lt;font size="3"&gt;입니다</code>.</dd>
 <dt><code>larger, smaller</code></dt>
 <dd>키워드에 따라 부모 엘리먼트의 폰트 크기에서 일정 비율로 늘이거나 줄입니다.</dd>
 <dd><font face="consolas, Liberation Mono, courier, monospace"><span style="background-color: rgba(220, 220, 220, 0.5);"><strong>{{cssxref("&lt;length&gt;")}}</strong></span></font></dd>
 <br>
 <dd>
 <p>{{cssxref("&lt;length&gt;")}}는 항상 양수입니다. 만약 단위가 <code>em</code> 이나 <code>ex </code>로 표현되어 있으면, 부모 엘리먼트의 크기에 상대적으로 정해집니다. 예를 들어, 0.5em 은 부모 엘리먼트 폰트 크기의 절반이 현재 엘리먼트의 폰트 크기입니다. 만약 단위가 <code>rem</code>으로 지정되어 있다면, 폰트 크기는 <code>html</code> (루트) 엘리먼트의 폰트 크기에 따라 상대적으로 정해집니다.</p>
 </dd>
 <dt><code>{{cssxref("&lt;percentage&gt;")}}</code></dt>
 <dd>양수인 {{cssxref("&lt;percentage&gt;")}} 는, 부모 엘리먼트의 폰트 크기의 비율입니다.</dd>
</dl>

<h3 id="형식_구문">형식 구문</h3>

{{csssyntax}}

<h2 id="Possible_approaches" name="Possible_approaches">접근법</h2>

<p>폰트 크기는 키워드나 pixel과 em처럼 수치 단위처럼 여러가지 방법으로 지정할 수 있습니다. 각 웹 페이지에 맞는 적합한 방법을 선택해야 합니다.</p>

<h3 id="Keywords" name="Keywords">키워드</h3>

<p>키워드는 웹의 폰트 크기를 정하는 좋은 방법입니다. 키워드로 엘리먼트의 폰트 크기를 정하면 웹 페이지의 모든 페이지의 폰트 크기가 상대적으로 지정되어 쉽게 전체 페이지의 폰트 크기를 늘이거나 줄일 수 있습니다.</p>

<h3 id="Pixels" name="Pixels">픽셀</h3>

<p>픽셀 단위의 정확함이 필요하면, 폰트 크기를 픽셀 단위로 (<code>px</code>) 설정하는 것이 좋은 선택입니다. px 값은 정적이고 운영체제 독립적이며 브라우저 독립적인 방법으로 브라우저에 글자들이 정확히 몇 픽셀 높이로 렌더링 되어야 하는지를 정할 수 있습니다다. 브라우저가 비슷한 효과를 내기 위해 각기 다른 방법을 사용하기 때문에 렌더링된 결과가 브라우저마다 아주 조금씩 달라질 수 있습니다.</p>

<p>폰트 크기 설정을 조합해서 쓸 수 있습니다다. 예를 들어, 부모 엘리먼트의 크기를 <code>16px</code> 로 정하고 자식 엘리먼트의 크기를 <code>larger</code>로 설정하면, 자식엘리먼트의 폰트 크기는 페이지에 있는 부모 엘리먼트보다 크게 보입니다.</p>

<div class="note"><strong>참고:</strong> 폰트 크기를 픽셀로 정하는 것은 사용자가 폰트 크기를 브라우저를 이용해 바꿀 수 없기 때문에 <em><a href="https://en.wikipedia.org/wiki/Web_accessibility">접근성이 떨어집니다</a></em>. (예를 들어 시각에 제약이 있는 사용자가 폰트 크기를 웹 디자이너가 설정한 크기보다 더 크게 설정하려고 할 수 있습니다.) 그러므로, 접근성 높은 페이지를 만들고자 한다면, 폰트 크기를 픽셀 단위로 설정하는 것을 지양해야 합니다.</div>

<h3 id="Ems" name="Ems"><code>em</code> 값</h3>

<p>폰트 크기를 설정하는 또 하나의 방법은 <code>em</code> 값으로 설정하는 것입니다. <code>em</code> 값은 동적입니다. <code>font-size</code> 속성을 정의할 때, em 은 부모 엘리먼트의 폰트 크기와 같습니다. 만약, 전체 페이지에서 폰트 크기를 정의하지 않으면 높은 가능성으로 브라우저 기본인 16px로 지정됩니다. 따라서 기본 값일때 1em = 16px 이고 2em = 32px 를 나타냅니다. 만약 body 엘리먼트의 <code>font-size</code> 를 20px로 정한 경우, 1em = 20px 이고 2em = 40px 입니다. 2 라는 값은 현재 크기의 배수를 나타냄을 주의해야 합니다.</p>

<p>em 표현을 pixel 값으로 표현해야 한다면 이 공식을 사용할 수 있습니다.</p>

<pre class="notranslate">em = 구하고자 하는 엘리먼트의 pixel 값 / 부모 엘리먼트의 font-size pixel 값</pre>

<p>예를 들어 페이지의 폰트 크기가 1em이고, 브라우저 기본 값이 1em = 16px로 정의되어 있다고 가정해보겠습니다. 만약 12px 폰트 크기로 지정하고 싶다면 0.75em(12/16 = 0.75) 로 정해야 합니다. 비슷하게, 10px로 정하고 싶다면 0.625em(10/16 = 0.625) 로 정합니다. 22px 은 1.375em 으로 표현합니다.</p>

<p>문서 전체의 폰트 크기를 정할때 많이 쓰이는 방법은 body 태그의 폰트 크기를 10px 과 같은 62.5% (기본값 16px의 62.5%) 나 0.625em 으로 정하는 것 입니다. 이제 다른 엘리먼트의 폰트 크기를 계산하기 쉬운 px 을 10으로 나눈 em 단위를 이용해서 설정할 수 있습니다. 이 경우 6px = 0.6em 로, 8px = 0.8em, 12px = 1.2em, 14px = 1.4em, 16px = 1.6em 로 표현합니다.</p>

<pre class="brush:css notranslate">body {
  font-size: 62.5%; /* font-size 1em = 10px 브라우저의 기본 설정 */
}
span {
  font-size: 1.6em; /* 1.6em = 16px */
}</pre>

<p>em 은 자동적으로 폰트의 크기를 적용해주기 때문에 CSS 에서 유용한 단위입니다.</p>

<p>중요하게 기억할 점은, em 값은 합성 값입니다. 위의 CSS 에 아래 HTML 을 적용해보겠습니다.</p>

<pre class="brush: html notranslate">&lt;div&gt;
&lt;span&gt;Outer &lt;span&gt;inner&lt;/span&gt; outer&lt;/span&gt;
&lt;/div&gt;
</pre>

<p>그 결과는</p>

<p>{{EmbedLiveSample("Ems", 400, 40)}}</p>

<p>브라우저의 기본 <code>font-size</code> 가 16px 이라고 가정해보면, "outer" 는 16px 로 그려지고 , "inner" 는 25.6px로 그려집니다. 왜냐하면 span의 <code>font-size</code> 가 1.6 em 으로 부모의 <code>font-size</code>에 상대적인데,  그 부모의 <code>font-size</code>도 상대적으로 계산되기 때문입니다. 이러한 동작을 <strong>합성</strong>이라고 부릅니다.</p>

<h3 id="Rems" name="Rems"><code>rem</code></h3>

<p><code>rem</code> 값은 합성 문제를 회피하기 위해 고안되었습니다. <code>rem</code> 값은 부모 엘리먼트가 아니라 최상위 <code>html</code> 엘리먼트에 상대적입니다. 다르게 표현하면, rem 은 부모 크기에 의해 폰크 크기가 정해지지 않도록 하여 합성 문제를 제거합니다.</p>

<p>아래 CSS 는 이전 예제와 거의 동일합니다. 딱 하나 다른 점은 단위가 <code>rem</code> 으로 바뀌었습니다.</p>

<pre class="brush: css notranslate">html {
  font-size: 62.5%; /* font-size 1em = 10px on default browser settings */
}
span {
  font-size: 1.6rem;
}
</pre>

<p>이 CSS 를 같은 HTML 에 적용하면 이렇게 보입니다</p>

<pre class="brush: html notranslate">&lt;span&gt;Outer &lt;span&gt;inner&lt;/span&gt; outer&lt;/span&gt;</pre>

<p>{{EmbedLiveSample("Rems", 400, 40)}}</p>

<p>이 예제에서 "outer inner outer" 는 모두 16px 로 보입니다 (브라우저의 기본 폰트 설정이 16px 인 경우).</p>

<h2 id="Examples" name="Examples">예제</h2>

<h3 id="Example_1" name="Example_1">예제 1</h3>

<pre class="brush: css notranslate">/* 문단 텍스트의 크기를 매우 크게 설정 */
p { font-size: xx-large }

/* h1 (제목 1)을 주변 텍스트보다 2.5배 큼 */
h1 { font-size: 250% }

/* span 태그 안의 텍스트를 16px 로 설정 */
span { font-size: 16px; }
</pre>

<h3 id="예제_2">예제 2</h3>

<pre class="brush: css notranslate">.small {
	font-size: xx-small;
}
.larger {
	font-size: larger;
}
.point {
	font-size: 24pt;
}
.percent {
	font-size: 200%;
}
</pre>

<pre class="brush: html notranslate"><span>&lt;h1 class="small"&gt;Small H1&lt;/h1&gt;
&lt;h1 class="larger"&gt;Larger H1&lt;/h1&gt;</span>
<span>&lt;h1 class="point"&gt;24 point H1&lt;/h1&gt;
&lt;h1 class="percent"&gt;200% H1&lt;/h1&gt;</span></pre>

<h4 id="결과">결과</h4>

<p>{{EmbedLiveSample('예제_2','600','200')}}</p>

<h2 id="Notes" name="Notes">참고</h2>

<p>{{Cssxref("font-size")}} 속성의 <code>em</code> 과 <code>ex</code> 단위는 부모 엘리먼트의 폰트 크기에 상대적입니다(자기 엘리먼트의 폰트 크기에 상대적인 다른 속성과는 다르게). 이는 <code>em</code> 단위와 퍼센트 단위가 {{Cssxref("font-size")}} 에서 동일하게 동작함을 의미합니다.</p>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<p>{{cssinfo}}</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">브라우저 호환성</h2>

<p>{{Compat("css.properties.font-size")}}</p>
