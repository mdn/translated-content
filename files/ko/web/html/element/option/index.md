---
title: <option>
slug: Web/HTML/Element/option
tags:
  - Element
  - Forms
  - HTML
  - HTML forms
  - Reference
translation_of: Web/HTML/Element/option
---
<div>{{HTMLRef}}</div>

<p><span class="seoSummary"><strong>HTML <code>&lt;option&gt;</code> 요소</strong>는 {{HTMLElement("select")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("datalist")}} 요소의 항목을 정의합니다.</span> 그러므로, <code>&lt;option&gt;</code>을 사용해 팝업 메뉴 등 목록에서 하나의 항목을 나타낼 수 있습니다.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/option.html", "tabbed-standard")}}</div>

<p class="hidden">The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples </a> and send us a pull request.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a></th>
   <td>없음.</td>
  </tr>
  <tr>
   <th scope="row">가능한 콘텐츠</th>
   <td>텍스트. 이스케이프 처리한 문자(<code>&amp;eacute;</code> 등)도 가능.</td>
  </tr>
  <tr>
   <th scope="row">태그 생략</th>
   <td>여는 태그는 필수입니다. 바로 뒤따르는 요소가 {{htmlelement("optgroup")}}, 다른 <code>&lt;option&gt;</code>이거나, 자신이 부모의 마지막 자식이라면 닫는 태그를 생략할 수 있습니다.</td>
  </tr>
  <tr>
   <th scope="row">가능한 부모 요소</th>
   <td>{{HTMLElement("select")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("datalist")}} 요소.</td>
  </tr>
  <tr>
   <th scope="row">가능한 ARIA 역할</th>
   <td>없음</td>
  </tr>
  <tr>
   <th scope="row">DOM 인터페이스</th>
   <td>{{domxref("HTMLOptionElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="특성">특성</h2>

<p>이 요소는 <a href="/ko/docs/Web/HTML/Global_attributes">전역 특성</a>을 포함합니다.</p>

<dl>
 <dt>{{htmlattrdef("disabled")}}</dt>
 <dd>지정한 경우 이 옵션을 선택할 수 없습니다. 브라우저에서, 비활성화 옵션은 주로 회색으로 보이며, 클릭과 포커스 등 모든 이벤트를 받지 않습니다. <code>&lt;option&gt;</code>에 <code>disabled</code> 특성을 추가하지 않더라도, {{HTMLElement("optgroup")}} 등 조상 요소로 인해 비활성화될 수 있습니다.</dd>
 <dt>{{htmlattrdef("label")}}</dt>
 <dd>옵션의 뜻을 나타내는 텍스트. 지정하지 않은 경우, 요소의 텍스트 콘텐츠를 대신 사용합니다.</dd>
 <dt>{{htmlattrdef("selected")}}</dt>
 <dd>지정한 경우 초기에 이 옵션을 선택한 상태로 설정합니다. {{htmlattrxref("multiple", "select")}}를 지정하지 않은 {{HTMLElement("select")}} 요소의 자손인 경우, 하나의 <code>&lt;option&gt;</code>만 <code>selected</code> 특성을 가질 수 있습니다.</dd>
 <dt>{{htmlattrdef("value")}}</dt>
 <dd>양식 데이터를 구성할 때 사용할 값. 지정하지 않은 경우, 요소의 텍스트 콘텐츠를 대신 사용합니다.</dd>
</dl>

<h2 id="예제">예제</h2>

<p>{{HTMLElement("select")}} 요소를 참고하세요.</p>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("html.elements.option")}}</p>
