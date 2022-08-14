---
title: HTMLElement.contentEditable
slug: Web/API/HTMLElement/contentEditable
tags:
  - API
  - HTML DOM
  - HTML element
  - Property
  - Reference
translation_of: Web/API/HTMLElement/contentEditable
---
<div>{{APIRef("HTML DOM")}}</div>

<p><span class="seoSummary">{{domxref("HTMLElement")}} 요소의 <strong><code>contenteditable</code></strong> 속성은 요소의 편집 가능 여부를 나타냅니다.</span> 열거형 속성으로, 다음 중 하나의 값을 가질 수 있습니다.</p>

<ul>
 <li><code>'true'</code>는 요소가 <code>contenteditable</code>임을 의미합니다.</li>
 <li><code>'false'</code>는 요소를 편집할 수 없음을 의미합니다.</li>
 <li><code>'inherit'</code>은 요소가 부모의 편집 가능 여부를 상속함을 의미합니다.</li>
</ul>

<p>{{domxref("HTMLElement.isContentEditable")}} 속성으로 이 속성의 {{jsxref("Boolean")}} 계산값을 얻을 수 있습니다.</p>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<div>
<p>{{Compat("api.HTMLElement.contentEditable")}}</p>

<p>Internet Explorer에서 <code>contenteditable</code>은 {{htmlelement("table")}}, {{htmlelement("col")}}, {{htmlelement("colgroup")}}, {{htmlelement("tbody")}}, {{htmlelement("td")}}, {{htmlelement("tfoot")}}, {{htmlelement("th")}}, {{htmlelement("thead")}}, {{htmlelement("tr")}} 요소에 바로 적용할 수 없습니다. 대신 편집 가능한 {{htmlelement("span")}} 또는 {{htmlelement("div")}} 요소를 표의 각 칸에 배치할 수 있습니다.</p>
</div>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><a href="/ko/docs/Web/Guide/HTML/Editable_content">콘텐츠를 편집 가능하게 만들기</a></li>
 <li>{{domxref("HTMLElement.isContentEditable")}}</li>
 <li>{{htmlattrxref("contenteditable")}} 전역 속성</li>
</ul>
