---
title: <ul>
slug: Web/HTML/Element/ul
tags:
  - Element
  - HTML
  - HTML grouping content
  - Reference
  - Web
translation_of: Web/HTML/Element/ul
---
<div>{{HTMLRef}}</div>

<p><strong>HTML <code>&lt;ul&gt;</code> 요소</strong>는 정렬되지 않은 목록을 나타냅니다. 보통 불릿으로 표현합니다.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/ul.html", "tabbed-standard")}}</div>

<p class="hidden">The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples </a> and send us a pull request.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a></th>
   <td><a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠">플로우 콘텐츠</a>. 또한, 최소 하나의 {{htmlelement("li")}} 요소를 자식으로 둔다면 <a href="/ko/docs/Web/Guide/HTML/Content_categories#뚜렷한_컨텐츠">뚜렷한 콘텐츠</a>.</td>
  </tr>
  <tr>
   <th scope="row">가능한 콘텐츠</th>
   <td>0개 이상의 {{htmlelement("li")}}, {{htmlelement("script")}}, {{htmlelement("template")}} 요소.</td>
  </tr>
  <tr>
   <th scope="row">태그 생략</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">가능한 부모 요소</th>
   <td><a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠">플로우 콘텐츠</a>를 허용하는 모든 요소.</td>
  </tr>
  <tr>
   <th scope="row">가능한 ARIA 역할</th>
   <td>{{ARIARole("directory")}}, {{ARIARole("group")}}, {{ARIARole("listbox")}}, {{ARIARole("menu")}}, {{ARIARole("menubar")}}, {{ARIARole("radiogroup")}}, {{ARIARole("tablist")}}, {{ARIARole("toolbar")}}, {{ARIARole("tree")}}, {{ARIARole("presentation")}}</td>
  </tr>
  <tr>
   <th scope="row">DOM 인터페이스</th>
   <td>{{domxref("HTMLUListElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="특성">특성</h2>

<p>이 요소는 <a href="/ko/docs/Web/HTML/Global_attributes">전역 특성</a>만 포함합니다.</p>

<div class="hidden">
<dl>
 <dt>{{ htmlattrdef("compact") }} {{Deprecated_inline}}</dt>
 <dd>This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute depends on the {{glossary("user agent")}}, and it doesn't work in all browsers.</dd>
 <dd>
 <div class="warning"><strong>Warning:</strong> Do not use this attribute, as it has been deprecated: use <a href="/en-US/docs/CSS">CSS</a> instead. To give a similar effect as the <code>compact</code> attribute, the CSS property {{cssxref("line-height")}} can be used with a value of <code>80%</code>.</div>
 </dd>
</dl>

<dl>
 <dt>{{ htmlattrdef("type") }} {{Deprecated_inline}}</dt>
 <dd>This attribute sets the bullet style for the list. The values defined under <a href="/en-US/docs/HTML3.2">HTML3.2</a> and the transitional version of <a href="/en-US/docs/HTML4.01">HTML 4.0/4.01</a> are:
 <ul>
  <li><code>circle</code></li>
  <li><code>disc</code></li>
  <li><code>square</code></li>
 </ul>

 <p>A fourth bullet type has been defined in the WebTV interface, but not all browsers support it: <code>triangle</code>.</p>

 <p>If not present and if no <a href="/en-US/docs/CSS">CSS</a> {{ cssxref("list-style-type") }} property applies to the element, the user agent selects a bullet type depending on the nesting level of the list.</p>

 <div class="warning"><strong>Warning:</strong> Do not use this attribute, as it has been deprecated; use the <a href="/en-US/docs/Web/CSS">CSS</a> {{ cssxref("list-style-type") }} property instead.</div>
 </dd>
</dl>
</div>

<h2 id="사용_일람">사용 일람</h2>

<p>보통 비정렬 목록의 항목은 선행하는 불릿 <a href="/ko/docs/Web/CSS/::marker">마커</a>와 함께 표시합니다.</p>

<p><code>&lt;ul&gt;</code>과 {{htmlelement("ol")}}은 필요한 만큼 중첩할 수 있고, 서로 교차할 수도 있습니다.</p>

<p><code>&lt;ul&gt;</code>과 {{htmlelement("ol")}}은 모두 목록을 나타냅니다. 차이가 있다면 <code>&lt;ul&gt;</code>에서는 순서가 중요하지 않다는 점입니다. 항목의 순서를 바꿨을 때 의미도 바뀐다면 {{htmlelement("ol")}}을 사용하세요. 그렇지 않으면 <code>&lt;ul&gt;</code>을 사용할 수 있습니다.</p>

<h2 id="예제">예제</h2>

<h3 id="간단한_예제">간단한 예제</h3>

<pre class="brush: html">&lt;ul&gt;
  &lt;li&gt;first item&lt;/li&gt;
  &lt;li&gt;second item&lt;/li&gt;
  &lt;li&gt;third item&lt;/li&gt;
&lt;/ul&gt;
</pre>

<p>{{EmbedLiveSample("간단한_예제", 400, 100)}}</p>

<h3 id="중첩_목록">중첩 목록</h3>

<pre class="brush: html">&lt;ul&gt;
  &lt;li&gt;first item&lt;/li&gt;
  &lt;li&gt;second item
  &lt;!-- Look, the closing &lt;/li&gt; tag is not placed here! --&gt;
    &lt;ul&gt;
      &lt;li&gt;second item first subitem&lt;/li&gt;
      &lt;li&gt;second item second subitem
      &lt;!-- Same for the second nested unordered list! --&gt;
        &lt;ul&gt;
          &lt;li&gt;second item second subitem first sub-subitem&lt;/li&gt;
          &lt;li&gt;second item second subitem second sub-subitem&lt;/li&gt;
          &lt;li&gt;second item second subitem third sub-subitem&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/li&gt; &lt;!-- Closing &lt;/li&gt; tag for the li that
                  contains the third unordered list --&gt;
      &lt;li&gt;second item third subitem&lt;/li&gt;
    &lt;/ul&gt;
  &lt;!-- Here is the closing &lt;/li&gt; tag --&gt;
  &lt;/li&gt;
  &lt;li&gt;third item&lt;/li&gt;
&lt;/ul&gt;</pre>

<p>{{EmbedLiveSample("중첩_목록", 400, 220)}}</p>

<h3 id="비정렬_목록_안의_정렬_목록">비정렬 목록 안의 정렬 목록</h3>

<pre class="brush: html">&lt;ul&gt;
  &lt;li&gt;first item&lt;/li&gt;
  &lt;li&gt;second item
  &lt;!-- Look, the closing &lt;/li&gt; tag is not placed here! --&gt;
    &lt;ol&gt;
      &lt;li&gt;second item first subitem&lt;/li&gt;
      &lt;li&gt;second item second subitem&lt;/li&gt;
      &lt;li&gt;second item third subitem&lt;/li&gt;
    &lt;/ol&gt;
  &lt;!-- Here is the closing &lt;/li&gt; tag --&gt;
  &lt;/li&gt;
  &lt;li&gt;third item&lt;/li&gt;
&lt;/ul&gt;
</pre>

<p>{{EmbedLiveSample("비정렬_목록_안의_정렬_목록", 400, 150)}}</p>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("html.elements.ul")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>리스트 관련 다른 요소: {{HTMLElement("ol")}}, {{HTMLElement("li")}}, {{HTMLElement("menu")}}</li>
 <li><code>&lt;ol&gt;</code> 요소와 유용하게 사용할 수 있는 CSS 속성
  <ul>
   <li>서수를 표현할 방식을 지정하는 {{cssxref("list-style")}} 속성.</li>
   <li>복잡한 중첩 목록을 처리하기 위한 <a href="/ko/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters">CSS 카운터</a></li>
   <li>더 이상 사용하지 않는 <code>compact</code> 특성을 대체할 수 있는 {{cssxref("line-height")}}</li>
   <li>항목의 들여쓰기를 조정하기 위한 {{cssxref("margin")}} 속성.</li>
  </ul>
 </li>
</ul>
