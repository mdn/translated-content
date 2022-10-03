---
title: '<h1>–<h6>: HTML 구획 제목 요소'
slug: Web/HTML/Element/Heading_Elements
tags:
  - Element
  - HTML
  - HTML sections
  - Reference
  - Web
translation_of: Web/HTML/Element/Heading_Elements
---
<div>{{HTMLRef}}</div>

<p><strong>HTML <code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code> 요소</strong>는 6단계의 구획 제목을 나타냅니다. 구획 단계는 <code>&lt;h1&gt;</code>이 가장 높고 <code>&lt;h6&gt;</code>은 가장 낮습니다.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/h1-h6.html", "tabbed-standard")}}</div>

<p class="hidden">The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples </a> and send us a pull request.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a></th>
   <td><a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠">플로우 콘텐츠</a>, <a href="/ko/docs/Web/Guide/HTML/Content_categories#제목_콘텐츠">제목 콘텐츠</a>, 뚜렷한 콘텐츠.</td>
  </tr>
  <tr>
   <th scope="row">가능한 콘텐츠</th>
   <td><a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠">구문 콘텐츠</a>.</td>
  </tr>
  <tr>
   <th scope="row">태그 생략</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">가능한 부모 요소</th>
   <td><a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠">플로우 콘텐츠</a>를 허용하는 모든 요소. {{HTMLElement("hgroup")}} 요소의 자식으로 사용하지 마세요. 더 이상 쓰이지 않는 요소입니다.</td>
  </tr>
  <tr>
   <th scope="row">가능한 ARIA 역할</th>
   <td>{{ARIARole("tab")}}, {{ARIARole("presentation")}}</td>
  </tr>
  <tr>
   <th scope="row">DOM 인터페이스</th>
   <td>{{domxref("HTMLHeadingElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="특성">특성</h2>

<p><code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code> 요소는 <a href="/ko/docs/Web/HTML/Global_attributes">전역 특성</a>만 포함합니다.</p>

<h2 id="사용_일람">사용 일람</h2>

<ul>
 <li>사용자 에이전트가 제목의 정보를 사용해 자동으로 문서 콘텐츠의 표를 만드는 등의 작업을 수행할 수 있습니다.</li>
 <li>글씨 크기를 위해 제목 태그를 사용하지 마세요. 대신 {{glossary("CSS")}}의 {{cssxref("font-size")}} 속성을 사용하세요.</li>
 <li>제목 단계를 건너뛰는 것을 피하세요. 언제나 <code>&lt;h1&gt;</code>로 시작해서, <code>&lt;h2&gt;</code><code>,</code> 순차적으로 기입하세요.</li>
 <li>페이지 당 하나의 <code>&lt;h1&gt;</code>만 사용하세요. 여러 개를 써도 오류는 나지 않겠지만, 단일 <code>&lt;h1&gt;</code>이 모범 사례로 꼽힙니다. 논리적으로 생각했을 때도, <code>&lt;h1&gt;</code>은 가장 중요한 제목이므로 전체 페이지의 목적을 설명해야 할 것입니다. 두 개의 제목을 가진 책이나, 여러 개의 이름을 가진 영화는 볼 수 없죠! 또한 스크린 리더 사용자와 {{glossary("SEO")}}에도 더 적합합니다.</li>
</ul>

<h2 id="예제">예제</h2>

<h3 id="모든_제목_단계">모든 제목 단계</h3>

<p>다음 코드는 모든 단계의 제목을 보입니다.</p>

<pre class="brush: html">&lt;h1&gt;Heading level 1&lt;/h1&gt;
&lt;h2&gt;Heading level 2&lt;/h2&gt;
&lt;h3&gt;Heading level 3&lt;/h3&gt;
&lt;h4&gt;Heading level 4&lt;/h4&gt;
&lt;h5&gt;Heading level 5&lt;/h5&gt;
&lt;h6&gt;Heading level 6&lt;/h6&gt;
</pre>

<p>{{ EmbedLiveSample('모든_제목_단계', '280', '300', '') }}</p>

<h3 id="예제_페이지">예제 페이지</h3>

<p>다음 코드는 약간의 제목과 내용을 보여줍니다.</p>

<pre class="brush: html">&lt;h1&gt;Heading elements&lt;/h1&gt;
&lt;h2&gt;Summary&lt;/h2&gt;
&lt;p&gt;Some text here...&lt;/p&gt;

&lt;h2&gt;Examples&lt;/h2&gt;
&lt;h3&gt;Example 1&lt;/h3&gt;
&lt;p&gt;Some text here...&lt;/p&gt;

&lt;h3&gt;Example 2&lt;/h3&gt;
&lt;p&gt;Some text here...&lt;/p&gt;

&lt;h2&gt;See also&lt;/h2&gt;
&lt;p&gt;Some text here...&lt;/p&gt;
</pre>

<p>{{ EmbedLiveSample('예제_페이지', '280', '480', '') }}</p>

<h2 id="접근성_고려사항">접근성 고려사항</h2>

<h3 id="탐색">탐색</h3>

<p>스크린 리더 사용자가 흔히 사용하는 탐색 기법은 제목에서 제목으로 뛰어넘으며 페이지 콘텐츠를 빠르게 파악하는 것입니다. 따라서 제목 단계를 뛰어넘으면 중간에 빠진 제목이 어디 있는 건지 모르므로 사용자의 혼란을 야기할 수 있습니다.</p>

<h4 id="하지_말것">하지 말것</h4>

<pre class="brush: html example-bad">&lt;h1&gt;Heading level 1&lt;/h1&gt;
&lt;h3&gt;Heading level 3&lt;/h3&gt;
&lt;h4&gt;Heading level 4&lt;/h4&gt;
</pre>

<h4 id="할것">할것</h4>

<pre class="brush: html example-good">&lt;h1&gt;Heading level 1&lt;/h1&gt;
&lt;h2&gt;Heading level 2&lt;/h2&gt;
&lt;h3&gt;Heading level 3&lt;/h3&gt;
</pre>

<h4 id="중첩">중첩</h4>

<p>하위 구획으로 제목을 중첩해 콘텐츠의 구조를 나타낼 수 있습니다. 대부분의 스크린 리더는 페이지의 제목을 정렬한 목록도 생성해 제공하므로, 사용자가 빠르게 콘텐츠 구조를 파악할 수 있도록 도와줍니다.</p>

<ol>
 <li><code>h1</code> Beetles

  <ol>
   <li><code>h2</code> Etymology</li>
   <li><code>h2</code> Distribution and Diversity</li>
   <li><code>h2</code> Evolution
    <ol>
     <li><code>h3</code> Late Paleozoic</li>
     <li><code>h3</code> Jurassic</li>
     <li><code>h3</code> Cretaceous</li>
     <li><code>h3</code> Cenozoic</li>
    </ol>
   </li>
   <li><code>h2</code> External Morphology
    <ol>
     <li><code>h3</code> Head
      <ol>
       <li><code>h4</code> Mouthparts</li>
      </ol>
     </li>
     <li><code>h3</code> Thorax
      <ol>
       <li><code>h4</code> Prothorax</li>
       <li><code>h4</code> Pterothorax</li>
      </ol>
     </li>
     <li><code>h3</code> Legs</li>
     <li><code>h3</code> Wings</li>
     <li><code>h3</code> Abdomen</li>
    </ol>
   </li>
  </ol>
 </li>
</ol>

<p>중첩 제목에서, 하위 구획을 닫을 땐 제목 단계를 위로 "건너뛸" 수 있습니다.</p>

<ul>
 <li><a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">Headings • Page Structure • WAI Web Accessibility Tutorials</a></li>
 <li><a href="/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.3_—_Create_content_that_can_be_presented_in_different_ways">MDN Understanding WCAG, Guideline 1.3 explanations</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html">Understanding Success Criterion 1.3.1 | W3C Understanding WCAG 2.0</a></li>
 <li><a href="/en-US/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.4_—_Navigable_Provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are">MDN Understanding WCAG, Guideline 2.4 explanations</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html">Understanding Success Criterion 2.4.1 | W3C Understanding WCAG 2.0</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html">Understanding Success Criterion 2.4.6 | W3C Understanding WCAG 2.0</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-headings.html">Understanding Success Criterion 2.4.10 | W3C Understanding WCAG 2.0</a></li>
</ul>

<h3 id="구획_콘텐츠_레이블">구획 콘텐츠 레이블</h3>

<p>스크린 리더 사용자가 자주 사용하는 다른 기술은 <a href="/ko/docs/Web/HTML/Element#콘텐츠_구획">콘텐츠 구획</a>의 목록을 생성한 후, 이를 통해 페이지 레이아웃을 파악하는 것입니다.</p>

<p>콘텐츠 구획에는 <code><a href="/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute">aria-labelledby</a></code>와 {{htmlattrxref("id")}} 특성을 함께 사용해 이름, 즉 레이블을 붙일 수 있습니다. 레이블은 현재 구획의 목적을 간결하게 설명해야 합니다. 레이블 기법은 한 페이지에 다수의 구획이 있을 때 유용하게 사용할 수 있습니다.</p>

<h4 id="예제_2">예제</h4>

<pre class="brush: html">&lt;header&gt;
  &lt;nav aria-labelledby="primary-navigation"&gt;
    &lt;h2 id="primary-navigation"&gt;주 탐색창&lt;/h2&gt;
    &lt;!-- navigation items --&gt;
  &lt;/nav&gt;
&lt;/header&gt;

&lt;!-- page content --&gt;

&lt;footer&gt;
  &lt;nav aria-labelledby="footer-navigation"&gt;
    &lt;h2 id="footer-navigation"&gt;하단 탐색창&lt;/h2&gt;
    &lt;!-- navigation items --&gt;
  &lt;/nav&gt;
&lt;/footer&gt;
</pre>

<p>위의 예제에서 스크린 리더는 두 개의 {{HTMLElement("nav")}} 구획이 있으며, 하나는 "주 탐색창", 다른 하나는 "하단 탐색창"이라고 불린다는 사실을 표현합니다. 레이블을 지정하지 않았다면, 사용자가 각 <code>&lt;nav&gt;</code> 요소의 콘텐츠를 일일히 분석해 목적을 알아내야 했을 것입니다.</p>

<ul>
 <li><a href="/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute">Using the aria-labelledby attribute</a></li>
 <li><a href="https://www.w3.org/WAI/tutorials/page-structure/labels/#using-aria-labelledby">Labeling Regions • Page Structure • W3C WAI Web Accessibility Tutorials</a></li>
</ul>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("html.elements.h1")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{HTMLElement("p")}}</li>
 <li>{{HTMLElement("div")}}</li>
 <li>{{HTMLElement("section")}}</li>
</ul>
