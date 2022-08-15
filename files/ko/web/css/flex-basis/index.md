---
title: flex-basis
slug: Web/CSS/flex-basis
tags:
  - CSS
  - CSS Flexible Boxes
  - CSS Property
  - Reference
translation_of: Web/CSS/flex-basis
---
<div>{{CSSRef}}</div>

<p><strong><code>flex-basis</code></strong> <a href="/ko/docs/Web/CSS">CSS</a> 속성은 플렉스 아이템의 초기 크기를 지정합니다. {{cssxref("box-sizing")}}을 따로 지정하지 않는다면 콘텐츠 박스의 크기를 변경합니다.</p>

<div>{{EmbedInteractiveExample("pages/css/flex-basis.html")}}</div>



<div class="note">
<p><strong>참고:</strong> <code>auto</code> 값을 가지지 않은 <code>flex-basis</code>와 {{cssxref("width")}}({{cssxref("flex-direction")}}<code>: column</code>인 경우 {{cssxref("height")}}) 값을 동시에 적용한 경우 <code>flex-basis</code>가 우선합니다.</p>
</div>

<h2 id="구문">구문</h2>

<pre class="brush:css no-line-numbers">/* &lt;'width'&gt; 지정 */
flex-basis: 10em;
flex-basis: 3px;
flex-basis: auto;

/* 원본 크기 키워드 */
flex-basis: fill;
flex-basis: max-content;
flex-basis: min-content;
flex-basis: fit-content;

/* 플렉스 아이템 내용 크기에 따라 조절 */
flex-basis: content;

/* 전역 값 */
flex-basis: inherit;
flex-basis: initial;
flex-basis: unset;
</pre>

<p><code>flex-basis</code> 속성값은 <code>content</code> 키워드를 사용하거나, <code><a href="#&lt;'width'>">&lt;'width'&gt;</a></code>를 나타내는 단위를 사용합니다.</p>

<h3 id="값">값</h3>

<dl>
 <dt><a id="&lt;'width'>" name="&lt;'width'>"><code>&lt;'width'&gt;</code></a></dt>
 <dd>{{cssxref("&lt;length&gt;")}}, 플렉스 컨테이너의 크기에 상대적인 {{cssxref("&lt;percentage&gt;")}}, <code>auto</code> 키워드 중 하나. 음수 값은 유효하지 않습니다.</dd>
 <dt><a id="content" name="content"><code>content</code></a></dt>
 <dd>플렉스 아이템의 콘텐츠 크기에 따라 자동으로 크기가 변합니다.</dd>
 <dd>
 <div class="note"><strong>참고:</strong> <code>content</code> 키워드는 Flexible Box Layout의 첫 배포에 포함되지 않아, 일부 오래 된 구현체에서는 지원하지 않을 수 있습니다. <code>flex-basis</code>와 주 크기({{cssxref("width")}}, {{cssxref("height")}}) 속성을 동시에 <code>auto</code>로 설정하면 동일한 효과를 볼 수 있습니다.</div>

 <div class="note">
 <p id="comment_text_0"><strong>역사:</strong></p>

 <ul>
  <li>원래 <code>flex-basis: auto</code>의 뜻은 자신의 <code>width</code> 또는 <code>height</code> 속성의 값을 사용하라는 것이었습니다.</li>
  <li>그 후 <code>flex-basis: auto</code>는 자동 크기조절로 바뀌고, 기존의 <code>auto</code>는 <code>main-size</code>로 바뀌었습니다. <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1032922" title='RESOLVED FIXED - Rename "flex-basis:auto" to "main-size", while preserving "flex:auto" shorthand value'>bug 1032922</a>에서 구현 기록을 볼 수 있습니다.</li>
  <li>그러나 위의 변경점은 <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1093316" title='RESOLVED FIXED - Back out flexbox "flex-basis:main-size" rename, since the CSSWG removed it from the spec'>bug 1093316</a>에서 되돌려져 <code>auto</code> 가 다시 <code>width</code> / <code>height</code> 속성을 가리키게 됐고, 대신 새로운 <code>content</code> 키워드가 자동 크기조절을 맡게 됐습니다. ({{bug("1105111")}}에서 볼 수 있습니다)</li>
 </ul>
 </div>
 </dd>
</dl>

<h3 id="형식_구문">형식 구문</h3>

{{csssyntax}}

<h2 id="예제">예제</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;ul class="container"&gt;
  &lt;li class="flex flex1"&gt;1: flex-basis test&lt;/li&gt;
  &lt;li class="flex flex2"&gt;2: flex-basis test&lt;/li&gt;
  &lt;li class="flex flex3"&gt;3: flex-basis test&lt;/li&gt;
  &lt;li class="flex flex4"&gt;4: flex-basis test&lt;/li&gt;
  &lt;li class="flex flex5"&gt;5: flex-basis test&lt;/li&gt;
&lt;/ul&gt;

&lt;ul class="container"&gt;
  &lt;li class="flex flex6"&gt;6: flex-basis test&lt;/li&gt;
&lt;/ul&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">.container {
  font-family: arial, sans-serif;
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
}

.flex {
  background: #6AB6D8;
  padding: 10px;
  margin-bottom: 50px;
  border: 3px solid #2E86BB;
  color: white;
  font-size: 20px;
  text-align: center;
  position: relative;
}

.flex:after {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 100%;
  margin-top: 10px;
  width: 100%;
  color: #333;
  font-size: 18px;
}

.flex1 {
  flex-basis: auto;
}

.flex1:after {
  content: 'auto';
}

.flex2 {
  flex-basis: max-content;
}

.flex2:after {
  content: 'max-content';
}

.flex3 {
  flex-basis: min-content;
}

.flex3:after {
  content: 'min-content';
}

.flex4 {
  flex-basis: fit-content;
}

.flex4:after {
  content: 'fit-content';
}

.flex5 {
   flex-basis: content;
}

.flex5:after {
  content: 'content';
}

.flex6 {
  flex-basis: fill;
}

.flex6:after {
  content: 'fill';
}
</pre>

<h3 id="결과">결과</h3>

<p>{{EmbedLiveSample('예제', '860', '360', '')}}</p>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<p>{{cssinfo}}</p>

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("css.properties.flex-basis")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>CSS 플렉스박스 안내서: <em><a href="/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">Basic Concepts of Flexbox</a></em></li>
 <li>CSS 플렉스박스 안내서: <em><a href="/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax">Controlling Ratios of flex items along the main axis</a></em></li>
 <li>{{cssxref("width")}}</li>
</ul>
