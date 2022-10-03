---
title: <header>
slug: Web/HTML/Element/header
tags:
  - Element
  - HTML
  - HTML sections
  - Reference
  - Web
translation_of: Web/HTML/Element/header
---
<div>{{HTMLRef}}</div>

<p><strong>HTML <code>&lt;header&gt;</code> 요소</strong>는 소개 및 탐색에 도움을 주는 콘텐츠를 나타냅니다. 제목, 로고, 검색 폼, 작성자 이름 등의 요소도 포함할 수 있습니다.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/header.html", "tabbed-standard")}}</div>

<div class="hidden">The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples </a> and send us a pull request.</div>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a></th>
   <td><a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠">플로우 콘텐츠</a>, 뚜렷한 콘텐츠.</td>
  </tr>
  <tr>
   <th scope="row">가능한 콘텐츠</th>
   <td><a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠">플로우 콘텐츠</a>. 단, 다른 <code>&lt;header&gt;</code> 또는 {{htmlelement("footer")}}가 자손으로 올 수 없습니다.</td>
  </tr>
  <tr>
   <th scope="row">태그 생략</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">가능한 부모 요소</th>
   <td><a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠">플로우 콘텐츠</a>를 허용하는 모든 요소. 단, {{htmlelement("address")}}, {{htmlelement("footer")}}, 또는 다른 <code>&lt;header&gt;</code>의 자손으로 사용할 수 없습니다.</td>
  </tr>
  <tr>
   <th scope="row">가능한 ARIA 역할</th>
   <td>{{ARIARole("group")}}, {{ARIARole("presentation")}}</td>
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

<p><code>&lt;header&gt;</code> 요소는 구획 콘텐츠가 아니므로 개요에 구획을 생성하지 않습니다. 대신 주위 구획의 제목({{htmlelement("Heading_Elements", "&lt;h1&gt;-&lt;h6&gt;")}} 요소)을 감싸기 위한 요소지만, 필수 사항은 <strong>아닙니다</strong>.</p>

<h3 id="역사적_사용처">역사적 사용처</h3>

<p><code>&lt;header&gt;</code>는 {{glossary("HTML5")}}에서야 명세에 포함됐지만, 사실 HTML의 시작부터 존재했습니다. <a href="http://info.cern.ch/">세계 최초의 웹사이트</a>에서 확인할 수 있듯 원래는 {{htmlelement("head")}}요소로서 사용했지만, 어느 순간부터 다른 이름이 됐습니다. 덕분에 <code>&lt;header&gt;</code>는 나중에 다른 역할을 맡을 수 있었습니다.</p>

<h2 id="예제">예제</h2>

<h3 id="페이지_제목">페이지 제목</h3>

<pre class="brush: html">&lt;header&gt;
  &lt;h1&gt;Main Page Title&lt;/h1&gt;
  &lt;img src="mdn-logo-sm.png" alt="MDN logo"&gt;
&lt;/header&gt;
</pre>

<h3 id="글_제목">글 제목</h3>

<pre class="brush: html">&lt;article&gt;
  &lt;header&gt;
    &lt;h2&gt;The Planet Earth&lt;/h2&gt;
    &lt;p&gt;Posted on Wednesday, &lt;time datetime="2017-10-04"&gt;4 October 2017&lt;/time&gt; by Jane Smith&lt;/p&gt;
  &lt;/header&gt;
  &lt;p&gt;We live on a planet that's blue and green, with so many things still unseen.&lt;/p&gt;
  &lt;p&gt;&lt;a href="https://janesmith.com/the-planet-earth/"&gt;Continue reading....&lt;/a&gt;&lt;/p&gt;
&lt;/article&gt;
</pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("html.elements.header")}}</p>
