---
title: content
slug: Web/CSS/content
tags:
  - CSS
  - CSS Counter
  - CSS Property
  - Reference
translation_of: Web/CSS/content
---
<div>{{CSSRef}}</div>

<p class="summary"><a href="/ko/docs/Web/CSS">CSS</a> <strong><code>content</code></strong> 속성은 생성한 값으로 요소를 대체합니다. <code>content</code> 속성으로 추가한 요소는 "익명 <a href="/ko/docs/Web/CSS/Replaced_element">대체 요소</a>"입니다.</p>

<pre class="brush:css no-line-numbers">/* 다른 값과 조합할 수 없는 키워드 */
content: normal;
content: none;

/* <a href="/ko/docs/Web/CSS/image">&lt;image&gt;</a> 값 */
content: url("http://www.example.com/test.png");
content: linear-gradient(#e66465, #9198e5);

/* 생성한 값의 대체 텍스트, Level 3 명세에서 추가 */
content: url("http://www.example.com/test.png") / "This is the alt text";

/* 앞선 값은 모두 ::before와 ::after에만 적용 가능 */

/* &lt;string&gt; 값 */
content: "prefix";

/* &lt;counter&gt; 값 */
content: counter(chapter_counter);
content: counters(section_counter, ".");

/* HTML 속성값으로 연결하는 attr() */
content: attr(value string);

/* 언어와 요소 위치 기반 키워드 */
content: open-quote;
content: close-quote;
content: no-open-quote;
content: no-close-quote;

/* normal과 none을 제외하면 여러 키워드를 함께 사용할 수 있음 */
content: open-quote chapter_counter;

/* 전역 값 */
content: inherit;
content: initial;
content: unset;
</pre>

<p>{{cssinfo}}</p>

<h2 id="구문">구문</h2>

<h3 id="값">값</h3>

<dl>
 <dt><code>none</code></dt>
 <dd>의사 요소를 생성하지 않음.</dd>
 <dt><code>normal</code></dt>
 <dd><code>::before</code>와 <code>::after</code> 의사 요소인 경우 <code>none</code>.</dd>
 <dt>{{cssxref("&lt;string&gt;")}}</dt>
 <dd>요소의 "대체 텍스트". 모든 숫자와 문자가 가능합니다. 단, 라틴계 문자가 아닌 경우 유니코드 이스케이프 시퀀스를 사용해 인코딩해야 합니다. 예를 들어, <code>\000A9</code>는 저작권 기호입니다.</dd>
 <dt>{{cssxref("&lt;image&gt;")}}</dt>
 <dd>{{cssxref("&lt;url&gt;")}}이나 {{cssxref("&lt;gradient&gt;")}} 자료형을 사용한 {{cssxref("&lt;image&gt;")}}, 또는 {{cssxref("element")}} 함수를 사용해 가리킨, 보여줄 웹페이지의 일부.</dd>
 <dt>{{cssxref("&lt;counter&gt;")}}</dt>
 <dd>보통 숫자인 <a href="/ko/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters">CSS 카운터 값</a>.{{cssxref("counter")}}나 {{cssxref("counters")}} 함수를 사용해 지정할 수 있습니다.</dd>
 <dd>
 <p>{{cssxref("counter")}} 함수는 'counter(<var>name</var>)'과 'counter(<var>name</var>, <var>style</var>)'의 두 형태를 가지고 있습니다. 생성하는 값은 주어진 의사 요소의 현재 범위에서, 해당하는 이름을 가진 가장 안쪽 카운터의 값입니다. 지정한 스타일(기본 <code>decimal</code>)에 맞춰 서식을 적용합니다.</p>

 <p>{{cssxref("counters")}} 함수 역시 'counters(<var>name</var>, <var>string</var>)'과 'counters(<var>name</var>, <var>string</var>, <var>style</var>)'의 두 형태를 가집니다. 생성하는 값은 주어진 의사 요소의 현재 범위에서, 해당하는 이름을 가진 카운터 값의 목록으로 바깥쪽부터 시작하며 주어진 문자열을 사용해 구분합니다. 지정한 스타일(기본 <code>decimal</code>)에 맞춰 서식을 적용합니다..</p>
 </dd>
 <dt><code>attr(x)</code></dt>
 <dd>문자열로 변환한, 요소 속성 <code>x</code>의 값. <code>x</code> 속성이 존재하지 않으면 빈 문자열을 반환합니다. 속성명의 대소문자 구분 여부는 문서 언어에 따릅니다.</dd>
 <dt><code>open-quote</code> | <code>close-quote</code></dt>
 <dd>{{cssxref("quotes")}} 속성에서 가져온 적절한 문자열을 사용해 대체.</dd>
 <dt><code>no-open-quote</code> | <code>no-close-quote</code></dt>
 <dd>콘텐츠는 추가하지 않고, 대신 따옴표의 중첩 단계를 증감.</dd>
</dl>

<h3 id="형식_구문">형식 구문</h3>

{{csssyntax}}

<h2 id="예제">예제</h2>

<h3 id="헤딩과_따옴표">헤딩과 따옴표</h3>

<p>다음 예제는 인용구 주변에 따옴표를 추가하고, 헤딩 앞에 단어 "Chapter"를 추가합니다.</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;h1&gt;5&lt;/h1&gt;
&lt;p&gt;According to Sir Tim Berners-Lee,
  &lt;q cite="http://www.w3.org/People/Berners-Lee/FAQ.html#Internet"&gt;I was
    lucky enough to invent the Web at the time when the Internet
    already existed - and had for a decade and a half.&lt;/q&gt;
  We must understand that there is nothing fundamentally wrong
  with building on the contributions of others.
&lt;/p&gt;

&lt;h1&gt;6&lt;/h1&gt;
&lt;p&gt;According to the Mozilla Manifesto,
  &lt;q cite="http://www.mozilla.org/en-US/about/manifesto/"&gt;Individuals
    must have the ability to shape the Internet and
    their own experiences on the Internet.&lt;/q&gt;
  Therefore, we can infer that contributing to the open web
  can protect our own individual experiences on it.
&lt;/p&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">q {
  color: blue;
}

q::before {
  content: open-quote;
}

q::after {
  content: close-quote;
}

h1::before  {
  content: "Chapter ";  /* The trailing space creates separation
                           between the added content and the
                           rest of the content */
}</pre>

<h4 id="결과">결과</h4>

<p>{{EmbedLiveSample('헤딩과_따옴표', '100%', 200)}}</p>

<h3 id="이미지와_텍스트">이미지와 텍스트</h3>

<p>다음 예제는 링크 앞에 이미지를 추가합니다. 이미지를 가져오지 못한 경우 텍스트를 대신 추가합니다.</p>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;a href="http://www.mozilla.org/en-US/"&gt;Mozilla Home Page&lt;/a&gt;</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css">a::before {
  content: url("https://mozorg.cdn.mozilla.net/media/img/favicon.ico") " MOZILLA: ";
  font: x-small Arial, sans-serif;
  color: gray;
}</pre>

<h4 id="결과_2">결과</h4>

<p>{{EmbedLiveSample('이미지와_텍스트', '100%', 60)}}</p>

<h3 id="클래스_사용">클래스 사용</h3>

<p>다음 예제는 목록의 특별한 항목 뒤에 추가 텍스트를 삽입합니다.</p>

<h4 id="HTML_3">HTML</h4>

<pre class="brush: html">&lt;h2&gt;Paperback Best Sellers&lt;/h2&gt;
&lt;ol&gt;
  &lt;li&gt;Political Thriller&lt;/li&gt;
  &lt;li class="new-entry"&gt;Halloween Stories&lt;/li&gt;
  &lt;li&gt;My Biography&lt;/li&gt;
  &lt;li class="new-entry"&gt;Vampire Romance&lt;/li&gt;
&lt;/ol&gt;</pre>

<h4 id="CSS_3">CSS</h4>

<pre class="brush: css">.new-entry::after {
  content: " New!";  /* The leading space creates separation
                        between the added content and the
                        rest of the content */
  color: red;
}</pre>

<h4 id="결과_3">결과</h4>

<p>{{EmbedLiveSample('클래스_사용', '100%', 160)}}</p>

<h3 id="이미지와_요소_속성">이미지와 요소 속성</h3>

<p>다음 예제는 링크 앞에 이미지를 추가하고, 뒤에 <code>id</code> 속성의 값을 붙입니다.</p>

<h4 id="HTML_4">HTML</h4>

<pre class="brush: html">&lt;ul&gt;
  &lt;li&gt;&lt;a id="moz" href="http://www.mozilla.org/"&gt;
    Mozilla Home Page&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a id="mdn" href="https://developer.mozilla.org/"&gt;
    Mozilla Developer Network&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;</pre>

<h4 id="CSS_4">CSS</h4>

<pre class="brush: css">a {
  text-decoration: none;
  border-bottom: 3px dotted navy;
}

a::after {
  content: " (" attr(id) ")";
}

#moz::before {
  content: url("https://mozorg.cdn.mozilla.net/media/img/favicon.ico") ;
}

#mdn::before {
  content: url("https://mdn.mozillademos.org/files/7691/mdn-favicon16.png") ;
}

li {
  margin: 1em;
}
</pre>

<h4 id="결과_4">결과</h4>

<p>{{EmbedLiveSample('이미지와_요소_속성', '100%', 160)}}</p>

<h3 id="요소_대체">요소 대체</h3>

<p>다음 예제는 요소의 콘텐츠를 이미지로 대체합니다. {{cssxref("&lt;url&gt;")}} 또는 {{cssxref("&lt;image&gt;")}} 사용하면 콘텐츠를 대체합니다. 요소를 대체했으므로 <code>::before</code>나 <code>::after</code>는 생성하지 않습니다.</p>

<h4 id="HTML_5">HTML</h4>

<pre class="brush: html">&lt;div id="replaced"&gt;Mozilla&lt;/div&gt;
</pre>

<h4 id="CSS_5">CSS</h4>

<pre class="brush: css">#replaced {
  content: url("https://mdn.mozillademos.org/files/12668/MDN.svg");
}

#replaced::after { /* will not show if element replacement is supported */
  content: " (" attr(id) ")";
}</pre>

<h4 id="결과_5">결과</h4>

<p>{{EmbedLiveSample('요소_대체', '100%', 200)}}</p>

<h2 id="접근성_고려사항">접근성 고려사항</h2>

<p>CSS로 생성한 콘텐츠는 <a href="/ko/docs/Web/API/Document_Object_Model/소개">DOM</a>이 포함하지 않고, <a href="/ko/docs/Learn/접근성/What_is_accessibility">접근성 트리</a>에도 들어가지 않습니다. 따라서 특정 접근성 기술/브라우저 조합이 내용을 표현하지 않을 수 있습니다. 콘텐츠가 포함한 정보가 페이지의 목적을 이해하는 것에 중요하다면 주 문서로 포함하는 것이 좋습니다.</p>

<ul>
 <li><a href="https://tink.uk/accessibility-support-for-css-generated-content/">Accessibility support for CSS generated content – Tink</a></li>
 <li><a href="/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.3_%E2%80%94_Create_content_that_can_be_presented_in_different_ways">Explanation of WCAG, Guideline 1.3 – MDN</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html">Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0</a></li>
</ul>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("css.properties.content")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{Cssxref("::after")}}</li>
 <li>{{Cssxref("::before")}}</li>
 <li>{{Cssxref("::marker")}}</li>
 <li>{{Cssxref("quotes")}}</li>
 <li>{{cssxref("url()")}} 함수</li>
</ul>
