---
title: '::before (:before)'
slug: 'Web/CSS/::before'
tags:
  - CSS
  - Layout
  - Pseudo-element
  - Reference
  - Web
translation_of: 'Web/CSS/::before'
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary">CSS에서, <strong><code>::before</code></strong>는 선택한 요소의 첫 자식으로 <a href="/ko/docs/Web/CSS/Pseudo-elements">의사 요소</a>를 하나 생성합니다. 보통 {{cssxref("content")}} 속성과 함께 짝지어, 요소에 장식용 콘텐츠를 추가할 때 사용합니다.</span> 기본값은 인라인입니다.</p>

<pre class="brush: css no-line-numbers  language-css"><code class="language-css"><span class="comment token">/* 링크 앞에 하트 추가 */</span>
<span class="selector token">a<span class="pseudo-class token">::after</span> </span><span class="punctuation token">{</span>
  <span class="property token">content: "</span></code>♥<code class="language-css"><span class="property token">";</span>
<span class="punctuation token">}</span></code></pre>

<div class="note">
<p><strong>참고:</strong> <code>::before</code>와 <code>::after</code>로 생성한 의사 요소는 <a href="https://www.w3.org/TR/CSS2/generate.html#before-after-content">원본 요소의 서식 박스에 포함되므로</a>,<em> </em>{{HTMLElement("img")}}나 {{HTMLElement("br")}} 등 <a href="/ko/docs/Web/CSS/Replaced_element">대체 요소</a>에 적용할 수 없습니다.</p>
</div>

<h2 id="구문">구문</h2>

{{csssyntax}}

<div class="note">
<p><strong>참고:</strong> <a href="/ko/docs/Web/CSS/Pseudo-classes">의사 클래스</a>와 <a href="/ko/docs/Web/CSS/Pseudo-elements">의사 요소</a>를 구분하기 위해 CSS3부터<code>::before</code> 구문을 도입했습니다. 그러나 브라우저는 CSS2 구문인 <code>:before</code>도 허용합니다.</p>
</div>

<h2 id="예제">예제</h2>

<h3 id="인용_표시_추가">인용 표시 추가</h3>

<p>One simple example of using <code>::before</code> pseudo-elements is to provide quotation marks. Here we use both <code>::before</code> and <code>{{Cssxref("::after")}}</code> to insert quotation characters.</p>

<h4 id="HTML">HTML</h4>

<pre class="brush:html">&lt;q&gt;Some quotes,&lt;/q&gt; he said, &lt;q&gt;are better than none.&lt;/q&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush:css">q::before {
  content: "«";
  color: blue;
}

q::after {
  content: "»";
  color: red;
}</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample('인용_표시_추가', '500', '50', '')}}</p>

<h3 id="장식_예제">장식 예제</h3>

<p>We can style text or images in the {{cssxref("content")}} property almost any way we want.</p>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;span class="ribbon"&gt;Notice where the orange box is.&lt;/span&gt;</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css">.ribbon {
  background-color: #5BC8F7;
}

.ribbon::before {
  content: "Look at this orange box.";
  background-color: #FFBA10;
  border-color: black;
  border-style: dotted;
}</pre>

<h4 id="Result_2">Result</h4>

<p>{{EmbedLiveSample('장식_예제', 450, 60)}}</p>

<h3 id="할_일_목록">할 일 목록</h3>

<p>In this example we will create a simple to-do list using pseudo-elements. This method can often be used to add small touches to the UI and improve user experience.</p>

<h4 id="HTML_3">HTML</h4>

<pre class="brush: html">&lt;ul&gt;
  &lt;li&gt;Buy milk&lt;/li&gt;
  &lt;li&gt;Take the dog for a walk&lt;/li&gt;
  &lt;li&gt;Exercise&lt;/li&gt;
  &lt;li&gt;Write code&lt;/li&gt;
  &lt;li&gt;Play music&lt;/li&gt;
  &lt;li&gt;Relax&lt;/li&gt;
&lt;/ul&gt;
</pre>

<h4 id="CSS_3">CSS</h4>

<pre class="brush: css">li {
  list-style-type: none;
  position: relative;
  margin: 2px;
  padding: 0.5em 0.5em 0.5em 2em;
  background: lightgrey;
  font-family: sans-serif;
}

li.done {
  background: #CCFF99;
}

li.done::before {
  content: '';
  position: absolute;
  border-color: #009933;
  border-style: solid;
  border-width: 0 0.3em 0.25em 0;
  height: 1em;
  top: 1.3em;
  left: 0.6em;
  margin-top: -1em;
  transform: rotate(45deg);
  width: 0.5em;
}</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js">var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
     ev.target.classList.toggle('done');
  }
}, false);
</pre>

<p>Here is the above code example running live. Note that there are no icons used, and the check-mark is actually the <code>::before</code> that has been styled in CSS. Go ahead and get some stuff done.</p>

<h4 id="Result_3">Result</h4>

<p>{{EmbedLiveSample('할_일_목록', 400, 300)}}</p>

<h3 id="특수문자">특수문자</h3>

<p>As this is CSS; not HTML, you can <strong>not </strong>use markup entities in content values. If you need to use a special character, and can not enter it literally into your CSS content string, use a unicodeescape sequence, consistingof a backslash followed by the hexadecimal unicode value.</p>

<h4 id="HTML_4">HTML</h4>

<pre class="brush: html">&lt;ol&gt;
  &lt;li&gt;Crack Eggs into bowl&lt;/li&gt;
  &lt;li&gt;Add Milk&lt;/li&gt;
  &lt;li&gt;Add Flour&lt;/li&gt;
  &lt;li aria-current='step'&gt;Mix thoroughly into a smooth batter&lt;/li&gt;
  &lt;li&gt;Pour a ladleful of batter onto a hot, greased, flat frying pan&lt;/li&gt;
  &lt;li&gt;Fry until the top of the pancake loses its gloss&lt;/li&gt;
  &lt;li&gt;Flip it over and fry for a couple more minutes&lt;/li&gt;
  &lt;li&gt;serve with your favorite topping&lt;/li&gt;
&lt;/ol&gt;
</pre>

<h4 id="CSS_4">CSS</h4>

<pre class="brush: css"><code class="language-css">
li {
  padding:0.5em;
}

li[aria-current='step'] {
  font-weight:bold;
}

li[aria-current='step']::after {
  content: " \21E6"; /* Hexadecimal for Unicode Leftwards white arrow*/
  display: inline;
}
</code>
</pre>

<h4 id="Result_4">Result</h4>

<p>{{EmbedLiveSample('특수문자', 400, 200)}}</p>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

{{Compat("css.selectors.before")}}

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{Cssxref("::after")}}</li>
 <li>{{Cssxref("content")}}</li>
</ul>
