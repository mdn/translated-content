---
title: '::after (:after)'
slug: 'Web/CSS/::after'
tags:
  - CSS
  - Layout
  - Pseudo-element
  - Reference
  - Web
translation_of: 'Web/CSS/::after'
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary">CSS에서, <strong><code>::after</code></strong>는 선택한 요소의 맨 마지막 자식으로 <a href="/ko/docs/Web/CSS/Pseudo-elements">의사 요소</a>를 하나 생성합니다. 보통 {{cssxref("content")}} 속성과 함께 짝지어, 요소에 장식용 콘텐츠를 추가할 때 사용합니다.</span> 기본값은 인라인입니다.</p>

<pre class="brush: css no-line-numbers  language-css"><code class="language-css"><span class="comment token">/* 링크 뒤에 화살표 추가 */</span>
<span class="selector token">a<span class="pseudo-class token">::after</span> </span><span class="punctuation token">{</span>
  <span class="property token">content: "</span></code>→<code class="language-css"><span class="property token">";</span>
<span class="punctuation token">}</span></code></pre>

<div class="note">
<p><strong>참고:</strong> <code>::before</code>와 <code>::after</code>로 생성한 의사 요소는 <a href="https://www.w3.org/TR/CSS2/generate.html#before-after-content">원본 요소의 서식 박스에 포함되므로</a>,<em> </em>{{HTMLElement("img")}}나 {{HTMLElement("br")}} 등 <a href="/ko/docs/Web/CSS/Replaced_element">대체 요소</a>에 적용할 수 없습니다.</p>
</div>

<h2 id="구문">구문</h2>

{{csssyntax}}

<div class="note">
<p><strong>참고:</strong> <a href="/ko/docs/Web/CSS/Pseudo-classes">의사 클래스</a>와 <a href="/ko/docs/Web/CSS/Pseudo-elements">의사 요소</a>를 구분하기 위해 CSS3부터<code>::after</code> 구문을 도입했습니다. 그러나 브라우저는 CSS2 구문인 <code>:after</code>도 허용합니다.</p>
</div>

<h2 id="예제">예제</h2>

<h3 id="간단한_사용법">간단한 사용법</h3>

<p>평범한 문단과 흥미진진한 문단을 위해 클래스 두 개를 만들고, 문단 마지막에 의사 요소를 추가해보겠습니다.</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;p class="boring-text"&gt;적당히 평범하고 심심한 글입니다.&lt;/p&gt;
&lt;p&gt;지루하지도 흥미진진하지도 않은 글입니다.&lt;/p&gt;
&lt;p class="exciting-text"&gt;MDN 기여는 쉽고 재밌습니다.&lt;/p&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">.exciting-text::after {
  content: " &lt;- 흥미진진!";
  color: green;
}

.boring-text::after {
  content: " &lt;- 먼지풀풀";
  color: red;
}</pre>

<h4 id="결과">결과</h4>

<p>{{EmbedLiveSample('간단한_사용법', 500, 150)}}</p>

<h3 id="장식_예제">장식 예제</h3>

<p>{{cssxref("content")}} 속성을 활용해 자유롭게 텍스트나 이미지를 추가할 수 있습니다.</p>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;span class="ribbon"&gt;마지막의 주황색 상자를 바라보세요.&lt;/span&gt;</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css">.ribbon {
 background-color: #5BC8F7;
}

.ribbon::after {
 content: "멋진 주황색 상자입니다.";
 background-color: #FFBA10;
 border-color: black;
 border-style: dotted;
}</pre>

<h4 id="결과_2">결과</h4>

<p>{{ EmbedLiveSample('장식_예제', 550, 40) }}</p>

<h3 id="툴팁">툴팁</h3>

<p>다음 예제는 <code>::after</code>와 함께 CSS {{cssxref("attr", "attr()")}} 표현식, <code>data-descr</code> <a href="/ko/docs/Web/HTML/Global_attributes/data-*">사용자 설정 데이터 속성</a>을 사용해 툴팁을 구현합니다. JavaScript 없이요!</p>

<p><code>tabindex="0"</code>을 추가해 각 <code>span</code>에 포커스가 갈 수 있도록 지정한 후, CSS <code>:focus</code> 선택자를 추가하여 키보드 사용자도 지원할 수 있습니다. 예제를 통해 ::before와 ::after가 얼마나 유연한지 확인할 수 있지만, 가장 접근성이 뛰어난 구현을 위해서라면 <a href="/ko/docs/Web/HTML/Element/details">요약과 세부 요소</a>처럼 의미를 담은 요소를 활용하는 편이 좋습니다.</p>

<h4 id="HTML_3">HTML</h4>

<pre class="brush: html">&lt;p&gt;이 예제는
  &lt;span tabindex="0" data-descr="단어와 문장 부호의 집합"&gt;텍스트&lt;/span&gt;와 함께 약간의
  &lt;span tabindex="0" data-descr="호버 시 보여지는 작은 팝업"&gt;툴팁&lt;/span&gt;을 포함합니다.
&lt;/p&gt;
</pre>

<h4 id="CSS_3">CSS</h4>

<pre class="brush: css">span[data-descr] {
  position: relative;
  text-decoration: underline;
  color: #00F;
  cursor: help;
}

span[data-descr]:hover::after,
span[data-descr]:focus::after {
  content: attr(data-descr);
  position: absolute;
  left: 0;
  top: 24px;
  min-width: 200px;
  border: 1px #aaaaaa solid;
  border-radius: 10px;
  background-color: #ffffcc;
  padding: 12px;
  color: #000000;
  font-size: 14px;
  z-index: 1;
}</pre>

<h4 id="결과_3">결과</h4>

<p>{{EmbedLiveSample('툴팁', 450, 120)}}</p>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="Browser_compatibility" name="Browser_compatibility">브라우저 호환성</h2>

<p>{{Compat("css.selectors.after")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{CSSxRef("::before")}}</li>
 <li>{{CSSxRef("content")}}</li>
</ul>
