---
title: <main>
slug: Web/HTML/Element/main
tags:
  - Element
  - HTML
  - HTML grouping content
  - HTML sections
  - Reference
translation_of: Web/HTML/Element/main
---
<div>{{HTMLRef}}</div>

<p><strong>HTML <code>&lt;main&gt;</code> 요소</strong>는 문서 {{HTMLElement("body")}}의 주요 콘텐츠를 나타냅니다. 주요 콘텐츠 영역은 문서의 핵심 주제나 앱의 핵심 기능에 직접적으로 연결됐거나 확장하는 콘텐츠로 이루어집니다.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/main.html","tabbed-standard")}}</div>

<p class="hidden">The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples </a> and send us a pull request.</p>

<p>{{htmlattrxref("hidden")}} 속성 없이는 문서에 하나보다 많은 <code>&lt;main&gt;</code> 요소가 존재해선 안됩니다.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리">콘텐츠 카테고리</a></th>
   <td><a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#플로우_콘텐츠" title="HTML/Content_categories#Flow_content">플로우 콘텐츠</a>, 뚜렷한 콘텐츠.</td>
  </tr>
  <tr>
   <th scope="row">가능한 콘텐츠</th>
   <td><a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#플로우_콘텐츠" title="HTML/Content_categories#Flow_content">플로우 콘텐츠</a>.</td>
  </tr>
  <tr>
   <th scope="row">태그 생략</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">가능한 부모 요소</th>
   <td><a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#플로우_콘텐츠">플로우 콘텐츠</a>를 허용하는 요소. 단, <a href="https://html.spec.whatwg.org/multipage/grouping-content.html#hierarchically-correct-main-element">구조적으로 올바른 <code>&lt;main&gt;</code> 요소</a>여야 합니다.</td>
  </tr>
  <tr>
   <th scope="row">가능한 ARIA 역할</th>
   <td>기본적으로 <code>main</code> 역할 포함, {{ARIARole("presentation")}} 가능.</td>
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

<p><code>&lt;main&gt;</code> 요소의 콘텐츠는 문서의 유일한 내용이어야 합니다. 사이드바, 탐색 링크, 저작권 정보, 사이트 로고, 검색 폼 등 여러 문서에 걸쳐 반복되는 콘텐츠는 포함해선 안됩니다. 그러나 검색 폼이 페이지의 주요 기능이라면 예외로 둘 수 있습니다.</p>

<p><code>&lt;main&gt;</code>은 요소 개요에 영향을 주지 않습니다. {{htmlelement("body")}} 등의 요소나 {{htmlelement("h2")}}와 같은 제목 요소와 달리 <code>&lt;main&gt;</code>은 페이지의 개념적 구조를 바꾸지 않으며 온전히 정보 제공용입니다.</p>

<h2 id="예제">예제</h2>

<pre class="brush: html">&lt;!-- other content --&gt;

&lt;main&gt;
  &lt;h1&gt;Apples&lt;/h1&gt;
  &lt;p&gt;The apple is the pomaceous fruit of the apple tree.&lt;/p&gt;

  &lt;article&gt;
    &lt;h2&gt;Red Delicious&lt;/h2&gt;
    &lt;p&gt;These bright red apples are the most common found in many
    supermarkets.&lt;/p&gt;
    &lt;p&gt;... &lt;/p&gt;
    &lt;p&gt;... &lt;/p&gt;
  &lt;/article&gt;

  &lt;article&gt;
    &lt;h2&gt;Granny Smith&lt;/h2&gt;
    &lt;p&gt;These juicy, green apples make a great filling for
    apple pies.&lt;/p&gt;
    &lt;p&gt;... &lt;/p&gt;
    &lt;p&gt;... &lt;/p&gt;
  &lt;/article&gt;

&lt;/main&gt;

&lt;!-- other content --&gt;</pre>

<h2 id="Specifications" name="Specifications">접근성 고려사항</h2>

<h3 id="랜드마크">랜드마크</h3>

<p><code>&lt;main&gt;</code> 요소는 <a href="/ko/docs/Web/Accessibility/ARIA/Roles/Main_role"><code>main</code> 랜드마크</a> 역할과 동일하게 행동합니다. <a href="/ko/docs/Web/Accessibility/ARIA/ARIA_Techniques">랜드마크</a>는 접근성 보조기술이 문서의 큰 구획을 찾고 이동할 때 쓰입니다. 구형 브라우저를 지원할 필요가 없다면, <code>role="main"</code>보다 <code>&lt;main&gt;</code> 요소를 사용하세요.</p>

<h3 id="건너뛰기_링크">건너뛰기 링크</h3>

<p>건너뛰기 링크, 스킵 내비게이션(skipnav)은 접근성 보조기술이 주요 탐색 구획, 정보 배너 등 반복되는 큰 구획을 빠르게 넘어갈 수 있도록 지원하는 기법으로, 사용자가 페이지의 주요 내용으로 신속하게 접근할 수 있도록 도와줍니다.</p>

<p><code>&lt;main&gt;</code> 요소에 {{htmlattrxref("id")}} 요소를 추가해 건너뛰기 링크의 대상으로 지정하세요.</p>

<pre class="brush: html">&lt;body&gt;
  &lt;a href="#main-content"&gt;Skip to main content&lt;/a&gt;

  &lt;!-- navigation and header content --&gt;

  &lt;main id="main-content"&gt;
    &lt;!-- main page content --&gt;
  &lt;/main&gt;
&lt;/body&gt;
</pre>

<ul>
 <li><a href="https://webaim.org/techniques/skipnav/">WebAIM: "Skip Navigation" Links</a></li>
</ul>

<h3 id="읽기_모드">읽기 모드</h3>

<p>브라우저 읽기 모드는 문서 콘텐츠를 변환할 때 <code>&lt;main&gt;</code> 요소와 더불어 <a href="/ko/docs/Web/HTML/Element/Heading_Elements">제목</a>과 <a href="/ko/docs/Web/HTML/Element#콘텐츠_구획">콘텐츠 구획</a> 요소를 사용합니다.</p>

<ul>
 <li><a href="https://medium.com/@mandy.michael/building-websites-for-safari-reader-mode-and-other-reading-apps-1562913c86c9">Building websites for Safari Reader Mode and other reading apps.</a></li>
</ul>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="Browser_compatibility" name="Browser_compatibility">브라우저 호환성</h2>

<p>대부분의 브라우저에서 <code>&lt;main&gt;</code> 요소를 지원합니다. 그러나 Internet Explorer 11 이하를 지원할 땐 <code>&lt;main&gt;</code> 요소에 <code>"main"</code> {{glossary("ARIA")}} 역할을 명시해 접근성을 확보하는 것이 좋습니다.</p>

<pre class="brush: html">&lt;main role="main"&gt;
  ...
&lt;/main&gt;
</pre>



<p>{{Compat("html.elements.main")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>기본 구조 요소: {{HTMLElement("html")}}, {{HTMLElement("head")}}, {{HTMLElement("body")}}</li>
 <li>구획 관련 요소: {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("footer")}}, {{HTMLElement("header")}}, {{HTMLElement("nav")}}</li>
 <li><a href="/ko/docs/Web/Accessibility/ARIA/Roles/Main_role">ARIA: Main role</a></li>
</ul>
