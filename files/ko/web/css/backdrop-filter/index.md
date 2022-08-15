---
title: backdrop-filter
slug: Web/CSS/backdrop-filter
tags:
  - CSS
  - CSS Property
  - Graphics
  - Layout
  - Reference
  - SVG
  - SVG Filter
  - Web
  - 'recipe:css-property'
translation_of: Web/CSS/backdrop-filter
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary"><a href="/ko/docs/Web/CSS">CSS</a> <strong><code>backdrop-filter</code></strong>는 요소 뒤 영역에 흐림이나 색상 시프트 등 그래픽 효과를 적용할 수 있는 속성입니다.</span> 요소 "뒤"에 적용하기 때문에, 효과를 확인하려면 요소나 요소의 배경을 적어도 반투명하게는 설정해야 합니다.</p>

<pre class="brush: css no-line-numbers notranslate">/* 키워드 값 */
backdrop-filter: none;

/* SVG 필터를 가리키는 URL */
backdrop-filter: url(commonfilters.svg#filter);

/* &lt;filter-function&gt; 값 */
backdrop-filter: blur(2px);
backdrop-filter: brightness(60%);
backdrop-filter: contrast(40%);
backdrop-filter: drop-shadow(4px 4px 10px blue);
backdrop-filter: grayscale(30%);
backdrop-filter: hue-rotate(120deg);
backdrop-filter: invert(70%);
backdrop-filter: opacity(20%);
backdrop-filter: sepia(90%);
backdrop-filter: saturate(80%);

/* 다중 필터 */
backdrop-filter: url(filters.svg#filter) blur(4px) saturate(150%);

/* 전역 값 */
backdrop-filter: inherit;
backdrop-filter: initial;
backdrop-filter: unset;
</pre>

<h2 id="구문">구문</h2>

<h3 id="값">값</h3>

<dl>
 <dt><code>none</code></dt>
 <dd>뒤에 아무런 필터도 적용하지 않습니다.</dd>
 <dt><code>&lt;filter-function-list&gt;</code></dt>
 <dd>뒤에 적용할 {{cssxref("&lt;filter-function&gt;")}} 또는 <a href="/en-US/docs/Web/SVG/Element/filter">SVG필터</a>의 공백 구분 목록입니다.</dd>
</dl>

<h2 id="형식_정의">형식 정의</h2>

<p>{{cssinfo}}</p>

<h2 id="형식_구문">형식 구문</h2>

{{csssyntax}}

<h2 id="예제">예제</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css notranslate">.box {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  font-family: sans-serif;
  text-align: center;
  line-height: 1;
 -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  max-width: 50%;
  max-height: 50%;
  padding: 20px 40px;
}

html,
body {
  height: 100%;
  width: 100%;
}

body {
  background-image: url(https://picsum.photos/id/1080/6858/4574), linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172));
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.container {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;div class="container"&gt;
  &lt;div class="box"&gt;
    &lt;p&gt;backdrop-filter: blur(10px)&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>

<h3 id="결과">결과</h3>

<p>{{EmbedLiveSample("예제", 600, 400)}}</p>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("css.properties.backdrop-filter")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{cssxref("filter")}}</li>
</ul>
