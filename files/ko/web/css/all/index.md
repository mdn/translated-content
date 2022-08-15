---
title: all
slug: Web/CSS/all
tags:
  - CSS
  - CSS Cascade
  - CSS Property
  - Reference
  - 'recipe:css-property'
translation_of: Web/CSS/all
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary"><a href="/ko/docs/Web/CSS">CSS</a> <code><strong>all</strong></code> <a href="/ko/docs/Web/CSS/Shorthand_properties">단축 속성</a>은 요소의 {{cssxref("unicode-bidi")}}, {{cssxref("direction")}}, <a href="/ko/docs/Web/CSS/Using_CSS_custom_properties">CSS 사용자 지정 속성</a>을 제외한 모든 속성을 초기화합니다.</span> 초깃값, 상속값, 아니면 다른 스타일시트 출처의 값으로 설정할 수 있습니다.</p>

<div>{{EmbedInteractiveExample("pages/css/all.html")}}</div>



<h2 id="구문">구문</h2>

<pre class="brush:css no-line-numbers notranslate">/* 전역 값 */
all: initial;
all: inherit;
all: unset;

/* CSS Cascading and Inheritance Level 4 */
all: revert;
</pre>

<p><code>all</code> 속성은 CSS 전역 키워드 값 중 하나를 사용해 지정합니다. 그러나 어느것도 {{cssxref("unicode-bidi")}}와 {{cssxref("direction")}} 속성에는 영향을 주지 않는 점을 주의하세요.</p>

<h3 id="값">값</h3>

<dl>
 <dt>{{cssxref("initial")}}</dt>
 <dd>요소의 모든 속성을 <a href="/ko/docs/Web/CSS/initial_value">초깃값</a>으로 변경합니다.</dd>
 <dt>{{cssxref("inherit")}}</dt>
 <dd>요소의 모든 속성을 <a href="/ko/docs/Web/CSS/inheritance">상속값</a>으로 변경합니다.</dd>
 <dt>{{cssxref("unset")}}</dt>
 <dd>요소의 모든 속성을, 속성이 값을 상속하는 경우 상속값으로, 아니면 초깃값으로 변경합니다.</dd>
 <dt>{{cssxref("revert")}}</dt>
 <dd>선언이 속한 스타일시트의 출처에 따라 다른 동작을 합니다.
 <dl>
  <dt><a href="/ko/docs/Web/CSS/Cascade#User-agent_stylesheets">사용자 에이전트 출처</a></dt>
  <dd><code>unset</code>과 동일합니다.</dd>
  <dt><a href="/ko/docs/Web/CSS/Cascade#User_stylesheets">사용자 출처</a></dt>
  <dd><a href="/ko/docs/Web/CSS/Cascade">종속</a>을 사용자 에이전트 단계까지 되돌려서, <a href="/ko/docs/Web/CSS/specified_value">지정값</a>이 마치 저작자와 사용자 단계의 규칙이 없었던 것처럼 계산되도록 합니다.</dd>
  <dt><a href="/ko/docs/Web/CSS/Cascade#Author_stylesheets">저작자 출처</a></dt>
  <dd><a href="/ko/docs/Web/CSS/Cascade">종속</a>을 사용자 에이전트 단계까지 되돌려서, <a href="/ko/docs/Web/CSS/specified_value">지정값</a>이 마치 저작자 단계의 규칙이 없었던 것처럼 계산되도록 합니다. <code>revert</code>만 고려했을 때, 저작자 출처는 재정의(Override) 및 애니메이션(Animation) 출처를 포함합니다.</dd>
 </dl>
 </dd>
</dl>

<h2 id="형식_정의">형식 정의</h2>

<p>{{CSSInfo}}</p>

<h2 id="형식_구문">형식 구문</h2>

{{csssyntax}}

<h2 id="예제">예제</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;blockquote id="quote"&gt;
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
&lt;/blockquote&gt;
Phasellus eget velit sagittis.</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css notranslate">body {
  font-size: small;
  background-color: #F0F0F0;
  color: blue;
}

blockquote {
  background-color: skyblue;
  color: red;
}
</pre>

<h3 id="결과">결과</h3>

<div id="ex0" style="display: inline-block; width: 225px; vertical-align: top;">
<h4 id="all_속성_없음"><code>all</code> 속성 없음</h4>

<pre class="brush: html hidden notranslate">&lt;blockquote id="quote"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&lt;/blockquote&gt; Phasellus eget velit sagittis.</pre>

<pre class="brush: css hidden notranslate">body { font-size: small; background-color: #F0F0F0; color:blue; }
blockquote { background-color: skyblue;  color: red; }</pre>
{{EmbedLiveSample("ex0", "200", "125")}}

<p>The {{HTMLElement("blockquote")}}가 브라우저 기본 스타일과 함께, 지정한 배경 및 텍스트 색상을 사용합니다. 또한 블록 요소로 동작하여 뒤의 텍스트가 아래에 위치합니다.</p>
</div>

<div id="ex1" style="display: inline-block; width: 225px; vertical-align: top;">
<h4 id="allunset"><code>all:unset</code></h4>

<pre class="brush: html hidden notranslate">&lt;blockquote id="quote"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&lt;/blockquote&gt; Phasellus eget velit sagittis.</pre>

<pre class="brush: css hidden notranslate">body { font-size: small; background-color: #F0F0F0; color:blue; }
blockquote { background-color: skyblue;  color: red; }
blockquote { all: unset; }</pre>
{{EmbedLiveSample("ex1", "200", "125")}}

<p>{{HTMLElement("blockquote")}}가 브라우저 기본 스타일을 사용하지 않습니다. 이제 인라인 요소(초깃값)이며, {{cssxref("background-color")}}가 <code>transparent</code>(초깃값)입니다. 그러나 {{cssxref("font-size")}}는 여전히 <code>small</code>(상속값)이고 {{cssxref("color")}}도 <code>blue</code>(상속값)입니다.</p>
</div>

<div id="ex2" style="display: inline-block; width: 225px; vertical-align: top;">
<h4 id="allinitial"><code>all:initial</code></h4>

<pre class="brush: html hidden notranslate">&lt;blockquote id="quote"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&lt;/blockquote&gt; Phasellus eget velit sagittis.</pre>

<pre class="brush: css hidden notranslate">body { font-size: small; background-color: #F0F0F0; color:blue; }
blockquote { background-color: skyblue;  color: red; }
blockquote { all: initial; }</pre>
{{EmbedLiveSample("ex2", "200", "125")}}

<p>{{HTMLElement("blockquote")}}가 브라우저 기본 스타일을 사용하지 않습니다. 이제 인라인 요소(초깃값)이며, {{cssxref("background-color")}}가 <code>transparent</code>(초깃값)이고, {{cssxref("font-size")}}는 <code>normal</code>(초깃값), {{cssxref("color")}}는 <code>black</code>(초깃값)입니다.</p>
</div>

<div id="ex3" style="display: inline-block; width: 225px; vertical-align: top;">
<h4 id="allinherit"><code>all:inherit</code></h4>

<pre class="brush: html hidden notranslate">&lt;blockquote id="quote"&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&lt;/blockquote&gt; Phasellus eget velit sagittis.</pre>

<pre class="brush: css hidden notranslate">body { font-size: small; background-color: #F0F0F0; color:blue; }
blockquote { background-color: skyblue; color: red; }
blockquote { all: inherit; }</pre>
{{EmbedLiveSample("ex3", "200", "125")}}

<p>{{HTMLElement("blockquote")}}가 브라우저 기본 스타일을 사용하지 않습니다. 블록 요소(부모 {{HTMLElement("body")}}에서 상속)이고, {{cssxref("background-color")}}은 <code>#F0F0F0</code>(상속값), {{cssxref("font-size")}}는 <code>small</code>(상속값), {{cssxref("color")}}는 <code>blue</code>(상속값)입니다.</p>
</div>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("css.properties.all")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<p>CSS 전역 키워드 값: {{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}}</p>
