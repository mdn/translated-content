---
title: <optgroup>
slug: Web/HTML/Element/optgroup
tags:
  - Element
  - Forms
  - HTML
  - HTML forms
  - Reference
  - Web
translation_of: Web/HTML/Element/optgroup
---
<div>{{HTMLRef}}</div>

<p><strong>HTML <code>&lt;optgroup&gt;</code> 요소</strong>는 {{HTMLElement("select")}} 요소의 옵션을 묶을 수 있습니다.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/optgroup.html", "tabbed-standard")}}</div>

<p class="hidden">The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples </a> and send us a pull request.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a></th>
   <td>없음.</td>
  </tr>
  <tr>
   <th scope="row">가능한 콘텐츠</th>
   <td>0개 이상의 {{htmlelement("option")}} 요소.</td>
  </tr>
  <tr>
   <th scope="row">태그 생략</th>
   <td>여는 태그는 필수입니다. 바로 뒤따르는 요소가 다른 <code>&lt;optgroup&gt;</code>이거나, 자신이 부모의 마지막 자식이라면 닫는 태그를 생략할 수 있습니다.</td>
  </tr>
  <tr>
   <th scope="row">가능한 부모 요소</th>
   <td>{{HTMLElement("select")}} 요소.</td>
  </tr>
  <tr>
   <th scope="row">가능한 ARIA 역할</th>
   <td>없음</td>
  </tr>
  <tr>
   <th scope="row">DOM 인터페이스</th>
   <td>{{domxref("HTMLOptGroupElement")}}</td>
  </tr>
 </tbody>
</table>

<div class="blockIndicator note">
<p><strong>참고:</strong> <code>&lt;optgroup&gt;</code> 요소는 중첩할 수 없습니다.</p>
</div>

<h2 id="특성">특성</h2>

<p>이 요소는 <a href="/ko/docs/Web/HTML/Global_attributes">전역 특성</a>을 포함합니다.</p>

<dl>
 <dt>{{htmlattrdef("disabled")}}</dt>
 <dd>지정한 경우 모든 하위 옵션을 선택할 수 없습니다. 브라우저에서, 비활성화 옵션은 주로 회색으로 보이며, 클릭과 포커스 등 모든 이벤트를 받지 않습니다.</dd>
 <dt>{{htmlattrdef("label")}}</dt>
 <dd>옵션 그룹의 이름. 브라우저가 그룹의 이름을 표시할 때 사용할 수 있습니다. 필수로 지정해야 합니다.</dd>
</dl>

<h2 id="예제">예제</h2>

<pre class="brush: html">&lt;select&gt;
  &lt;optgroup label="Group 1"&gt;
    &lt;option&gt;Option 1.1&lt;/option&gt;
  &lt;/optgroup&gt;
  &lt;optgroup label="Group 2"&gt;
    &lt;option&gt;Option 2.1&lt;/option&gt;
    &lt;option&gt;Option 2.2&lt;/option&gt;
  &lt;/optgroup&gt;
  &lt;optgroup label="Group 3" disabled&gt;
    &lt;option&gt;Option 3.1&lt;/option&gt;
    &lt;option&gt;Option 3.2&lt;/option&gt;
    &lt;option&gt;Option 3.3&lt;/option&gt;
  &lt;/optgroup&gt;
&lt;/select&gt;
</pre>

<h3 id="결과">결과</h3>

<p>{{EmbedLiveSample("예제")}}</p>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="Browser_compatibility" name="Browser_compatibility">브라우저 호환성</h2>

<p>{{Compat("html.elements.optgroup")}}</p>
