---
title: '<code>: 인라인 코드 요소'
slug: Web/HTML/Element/code
tags:
  - Element
  - HTML
  - HTML text-level semantics
  - Reference
  - Web
translation_of: Web/HTML/Element/code
---
<div>{{HTMLRef}}</div>

<p><span class="seoSummary"><strong>HTML <code>&lt;code&gt;</code> 요소</strong>는 짧은 코드 조각을 나타내는 스타일을 사용해 자신의 콘텐츠를 표시합니다.</span> 기본 스타일은 {{glossary("user agent", "사용자 에이전트")}}의 고정폭 글씨체입니다.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/code.html", "tabbed-shorter")}}</div>



<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a></th>
   <td><a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠">플로우 콘텐츠</a>, <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠">구문 콘텐츠</a>, 뚜렷한 콘텐츠.</td>
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
   <td><a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠">구문 콘텐츠</a>를 허용하는 모든 요소.</td>
  </tr>
  <tr>
   <th scope="row">가능한 ARIA 역할</th>
   <td>모두</td>
  </tr>
  <tr>
   <th scope="row">DOM 인터페이스</th>
   <td>{{domxref("HTMLElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="특성">특성</h2>

<p><span style="line-height: 21px;">이 요소는 </span><a href="/ko/docs/Web/HTML/Global_attributes" style="line-height: 21px;" title="HTML/Global attributes">전역 특성</a><span style="line-height: 21px;">만 포함합니다.</span></p>

<h2 id="예제">예제</h2>

<pre class="brush: html">&lt;p&gt;함수 &lt;code&gt;selectAll()&lt;/code&gt;는 입력 필드의 모든 텍스트를 선택하므로,
사용자가 복사 혹은 삭제를 손쉽게 할 수 있습니다.&lt;/p&gt;
</pre>

<p>{{EmbedLiveSample("예제", 640, 70)}}</p>

<h2 id="참고">참고</h2>

<p>여러 줄의 코드를 나타내려면 <code>&lt;code&gt;</code> 요소를 {{htmlelement("pre")}}로 감싸세요. 보통 상황에서 <code>&lt;code&gt;</code>는 코드 한 줄만 나타냅니다.</p>

<p>CSS <code>code</code> 태그 선택자를 사용해 브라우저의 기본 글씨체를 바꿀 수 있습니다. 그러나 사용자 설정이 CSS보다 우선할 수도 있습니다.</p>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("html.elements.code")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{HTMLElement("samp")}}</li>
 <li>{{HTMLElement("kbd")}}</li>
 <li>{{HTMLElement("var")}}</li>
 <li>{{HTMLElement("pre")}}</li>
</ul>
