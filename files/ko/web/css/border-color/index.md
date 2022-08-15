---
title: border-color
slug: Web/CSS/border-color
tags:
  - CSS
  - CSS Borders
  - CSS Property
  - Reference
translation_of: Web/CSS/border-color
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary"><strong><code>border-color</code></strong> <a href="/en-US/docs/Web/CSS">CSS</a> <a href="/ko/docs/Web/CSS/Shorthand_properties">단축 속성</a>은 모든 면의 테두리 색상을 설정합니다.</span></p>

<div>{{EmbedInteractiveExample("pages/css/border-color.html")}}</div>



<p>각 면 테두리의 색상은 {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, {{cssxref("border-left-color")}}를 사용해 정할 수 있습니다. 아니면 쓰기 방향에 따라 달라지는 속성인 {{cssxref("border-block-start-color")}}, {{cssxref("border-block-end-color")}}, {{cssxref("border-inline-start-color")}}, {{cssxref("border-inline-end-color")}}을 사용할 수도 있습니다.</p>

<p>테두리 색상에 대해 더 알아보려면 <a href="/ko/docs/Web/HTML/Applying_color#테두리">CSS로 HTML 요소에 색 입히기</a> 문서를 참고하세요.</p>

<h2 id="구문">구문</h2>

<pre class="brush:css no-line-numbers">/* &lt;color&gt; 값 */
border-color: red;

/* 세로방향 | 가로방향 */
border-color: red #f015ca;

/* 위 | 가로방향 | 아래 */
border-color: red rgb(240,30,50,.7) green;

/* 위 | 오른쪽 | 아래 | 왼쪽 */
border-color: red yellow green blue;

/* 전역 값 */
border-color: inherit;
border-color: initial;
border-color: unset;
</pre>

<p><code>border-color</code> 속성은 한 개에서 네 개의 값을 사용해서 지정할 수 있습니다.</p>

<ul>
 <li><strong>한 개</strong>의 값을 사용하면 모든 네 면에 동일한 색상을 적용합니다.</li>
 <li><strong>두 개</strong>의 값을 사용하면 첫 번째 값이 위아래, 두 번째 값이 좌우의 색상을 맡습니다.</li>
 <li><strong>세 개</strong>의 값을 사용하면 첫 번째 값이 위, 두 번째 값이 좌우, 세 번째 값이 아래의 색상을 맡습니다.</li>
 <li><strong>네 개</strong>의 값을 사용하면 각각 순서대로 위, 오른쪽, 아래, 왼쪽(시계방향) 순서로 색상을 적용합니다.</li>
</ul>

<h3 id="값">값</h3>

<dl>
 <dt>{{cssxref("&lt;color&gt;")}}</dt>
 <dd>테두리의 색상.</dd>
</dl>

<h3 id="형식_구문">형식 구문</h3>

{{csssyntax}}

<h2 id="예제">예제</h2>

<h3 id="border-color의_모든_사용법"><code>border-color</code>의 모든 사용법</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div id="justone"&gt;
  &lt;p&gt;&lt;code&gt;border-color: red;&lt;/code&gt;는 아래와 같습니다.&lt;/p&gt;
  &lt;ul&gt;&lt;li&gt;&lt;code&gt;border-top-color: red;&lt;/code&gt;&lt;/li&gt;
    &lt;li&gt;&lt;code&gt;border-right-color: red;&lt;/code&gt;&lt;/li&gt;
    &lt;li&gt;&lt;code&gt;border-bottom-color: red;&lt;/code&gt;&lt;/li&gt;
    &lt;li&gt;&lt;code&gt;border-left-color: red;&lt;/code&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;
&lt;div id="horzvert"&gt;
  &lt;p&gt;&lt;code&gt;border-color: gold red;&lt;/code&gt;는 아래와 같습니다.&lt;/p&gt;
  &lt;ul&gt;&lt;li&gt;&lt;code&gt;border-top-color: gold;&lt;/code&gt;&lt;/li&gt;
    &lt;li&gt;&lt;code&gt;border-right-color: red;&lt;/code&gt;&lt;/li&gt;
    &lt;li&gt;&lt;code&gt;border-bottom-color: gold;&lt;/code&gt;&lt;/li&gt;
    &lt;li&gt;&lt;code&gt;border-left-color: red;&lt;/code&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;
&lt;div id="topvertbott"&gt;
  &lt;p&gt;&lt;code&gt;border-color: red cyan gold;&lt;/code&gt;는 아래와 같습니다.&lt;/p&gt;
  &lt;ul&gt;&lt;li&gt;&lt;code&gt;border-top-color: red;&lt;/code&gt;&lt;/li&gt;
    &lt;li&gt;&lt;code&gt;border-right-color: cyan;&lt;/code&gt;&lt;/li&gt;
    &lt;li&gt;&lt;code&gt;border-bottom-color: gold;&lt;/code&gt;&lt;/li&gt;
    &lt;li&gt;&lt;code&gt;border-left-color: cyan;&lt;/code&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;
&lt;div id="trbl"&gt;
  &lt;p&gt;&lt;code&gt;border-color: red cyan black gold;&lt;/code&gt;는 아래와 같습니다.&lt;/p&gt;
  &lt;ul&gt;&lt;li&gt;&lt;code&gt;border-top-color: red;&lt;/code&gt;&lt;/li&gt;
    &lt;li&gt;&lt;code&gt;border-right-color: cyan;&lt;/code&gt;&lt;/li&gt;
    &lt;li&gt;&lt;code&gt;border-bottom-color: black;&lt;/code&gt;&lt;/li&gt;
    &lt;li&gt;&lt;code&gt;border-left-color: gold;&lt;/code&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">#justone {
  border-color: red;
}

#horzvert {
  border-color: gold red;
}

#topvertbott {
  border-color: red cyan gold;
}

#trbl {
  border-color: red cyan black gold;
}

/* Set width and style for all divs */
div {
  border: solid 0.3em;
  width: auto;
  margin: 0.5em;
  padding: 0.5em;
}

ul {
  margin: 0;
  list-style: none;
}
</pre>

<h4 id="결과">결과</h4>

<p>{{EmbedLiveSample('border-color의_모든_사용법', 600, 300)}}</p>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<p>{{cssinfo}}</p>

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("css.properties.border-color")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>테두리 색상 관련 CSS 속성: {{Cssxref("border")}}, {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, {{cssxref("border-left-color")}}</li>
 <li>다른 테두리 관련 CSS 속성: {{Cssxref("border-width")}}, {{Cssxref("border-style")}}</li>
 <li>{{cssxref("&lt;color&gt;")}} 자료형</li>
 <li>다른 색상 관련 속성: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}</li>
 <li><a href="/ko/docs/Web/HTML/Applying_color#테두리">CSS로 HTML 요소에 색 입히기</a></li>
</ul>
