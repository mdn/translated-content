---
title: tab-size
slug: Web/CSS/tab-size
tags:
  - CSS
  - CSS Property
  - CSS Text
  - Reference
  - 'recipe:css-property'
translation_of: Web/CSS/tab-size
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary"><a href="/ko/docs/Web/CSS">CSS</a> <strong><code>tab-size</code></strong> 속성은 탭 문자(U+0009)의 너비를 조절합니다.</span></p>

<h2 id="구문">구문</h2>

<pre class="brush:css no-line-numbers notranslate">/* &lt;integer&gt; 값 */
tab-size: 4;
tab-size: 0;

/* &lt;length&gt; 값 */
tab-size: 10px;
tab-size: 2em;

/* 전역 값 */
tab-size: inherit;
tab-size: initial;
tab-size: unset;
</pre>

<h3 id="값">값</h3>

<dl>
 <dt>{{CSSxRef("&lt;integer&gt;")}}</dt>
 <dd>공백 문자(U+0020)에 대한 탭 문자의 상대적인 너비. 0 이상의 정수여야 합니다.</dd>
 <dt>{{CSSxRef("&lt;length&gt;")}}</dt>
 <dd>탭 문자의 너비. 양의 값이어야 합니다.</dd>
</dl>

<h2 id="형식_정의">형식 정의</h2>

<p>{{CSSInfo}}</p>

<h2 id="형식_구문">형식 구문</h2>

{{CSSSyntax}}

<h2 id="예제">예제</h2>

<h3 id="글자_수로_정의">글자 수로 정의</h3>

<pre class="brush: css notranslate">pre {
  tab-size: 4; /* Set tab size to 4 characters wide */
}
</pre>

<h3 id="탭_제거">탭 제거</h3>

<pre class="brush: css notranslate">pre {
  tab-size: 0; /* Remove indentation */
}
</pre>

<h3 id="기본_크기와_비교">기본 크기와 비교</h3>

<p>다음 예제는 기본 탭 크기를 사용자 지정 탭 크기와 비교합니다. {{cssxref("white-space")}} 속성을 <code>pre</code>로 설정해서 탭 문자가 접히지 않도록 했습니다.</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;p&gt;no tab&lt;/p&gt;
&lt;p&gt;&amp;#0009;default tab size of 8 characters wide&lt;/p&gt;
&lt;p class="custom"&gt;&amp;#0009;custom tab size of 3 characters wide&lt;/p&gt;
&lt;p&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;3 spaces, equivalent to the custom tab size&lt;/p&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">p {
  white-space: pre;
}

.custom {
  tab-size: 3;
  -moz-tab-size: 3;
}</pre>

<h4 id="결과">결과</h4>

<p>{{EmbedLiveSample('기본_크기와_비교')}}</p>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("css.properties.tab-size")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><a class="external" href="https://lists.w3.org/Archives/Public/www-style/2008Dec/0009.html"><cite>Controlling size of a tab character (U+0009)</cite></a>, Anne van Kesteren이 CSSWG에 보낸 이메일.</li>
</ul>
