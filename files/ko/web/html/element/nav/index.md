---
title: '<nav>: 탐색 구획 요소'
slug: Web/HTML/Element/nav
tags:
  - Element
  - HTML
  - HTML sections
  - HTML5
  - Reference
  - Web
translation_of: Web/HTML/Element/nav
---
<div>{{HTMLRef}}</div>

<p><strong>HTML <code>&lt;nav&gt;</code> 요소</strong>는 문서의 부분 중 현재 페이지 내, 또는 다른 페이지로의 링크를 보여주는 구획을 나타냅니다. 자주 쓰이는 예제는 메뉴, 목차, 색인입니다.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/nav.html", "tabbed-standard")}}</div>

<p class="hidden">The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples </a> and send us a pull request.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/ko/docs/Web/Guide/HTML/%EC%BB%A8%ED%85%90%ED%8A%B8_%EC%B9%B4%ED%85%8C%EA%B3%A0%EB%A6%AC">콘텐츠 카테고리</a></th>
   <td><a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#플로우_콘텐츠">플로우 콘텐츠</a>, <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#구획_콘텐츠">구획 콘텐츠</a>, 뚜렷한 콘텐츠.</td>
  </tr>
  <tr>
   <th scope="row">가능한 콘텐츠</th>
   <td><a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#플로우_콘텐츠">플로우 콘텐츠</a>.</td>
  </tr>
  <tr>
   <th scope="row">태그 생략</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">가능한 부모 요소</th>
   <td><a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#플로우_콘텐츠">플로우 콘텐츠</a>를 허용하는 모든 요소.</td>
  </tr>
  <tr>
   <th scope="row">가능한 ARIA 규칙</th>
   <td>없음</td>
  </tr>
  <tr>
   <th scope="row">DOM 인터페이스</th>
   <td>{{domxref("HTMLElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="특성">특성</h2>

<p><span style="line-height: 21px;">이 요소는 </span><a href="/ko/docs/Web/HTML/Global_attributes" style="line-height: 21px;" title="HTML/Global attributes">전역 특성</a>만 포함합니다.</p>

<h2 id="사용_일람">사용 일람</h2>

<ul>
 <li>문서의 모든 링크가 <code>&lt;nav&gt;</code> 요소 안에 있을 필요는 없습니다. <code>&lt;nav&gt;</code> 요소는 주요 탐색 링크 블록을 위한 요소입니다. 대개 {{htmlelement("footer")}} 요소가 <code>&lt;nav&gt;</code>에 들어가지 않아도 되는 링크를 포함합니다.</li>
 <li><code>&lt;nav&gt;</code> 하나는 사이트 전체 탐색, 다른 하나는 현재 페이지 내 탐색으로 사용하는 등, 하나의 문서에서 여러 개의 {{HTMLElement("nav")}} 태그를 가질 수 있습니다. 이럴 때 <code><a href="/ko/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute">aria-labelledby</a></code>를 사용해 접근성을 향상할 수 있습니다.</li>
 <li>스크린 리더 등 장애를 가진 사용자를 위한 사용자 에이전트는 최초 렌더링에서 탐색 전용 콘텐츠를 제외할지 결정할 때 <code>&lt;nav&gt;</code>를 참고합니다.</li>
</ul>

<h2 id="예제">예제</h2>

<pre class="brush:xml">&lt;nav&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;About&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Contact&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;
</pre>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="Specifications" name="Specifications">브라우저 호환성</h2>

<p>{{Compat("html.elements.nav")}}</p>
