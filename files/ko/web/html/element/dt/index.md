---
title: <dt>
slug: Web/HTML/Element/dt
tags:
  - Element
  - HTML
  - HTML grouping content
  - Reference
translation_of: Web/HTML/Element/dt
---
<div>{{HTMLRef}}</div>

<p><span class="seoSummary"><strong>HTML <code>&lt;dt&gt;</code> 요소</strong>는 설명 혹은 정의 리스트에서 용어를 나타냅니다. {{htmlelement("dl")}} 요소 안에 위치해야 합니다</span>. 보통 {{htmlelement("dd")}} 요소가 뒤따르지만, 여러 개의 &lt;dt&gt; 요소를 연속해 배치하면 바로 다음 {{htmlelement("dd")}} 요소로 한꺼번에 서술할 수 있습니다.</p>

<p>뒤따르는 {{htmlelement("dd")}} 요소가 <code>&lt;dt&gt;</code>로 지정한 용어의 정의와 기타 관련 글을 제공합니다.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/dt.html", "tabbed-standard")}}</div>

<p class="hidden">The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples </a> and send us a pull request.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/ko/docs/Web/Guide/HTML/%EC%BB%A8%ED%85%90%ED%8A%B8_%EC%B9%B4%ED%85%8C%EA%B3%A0%EB%A6%AC">콘텐츠 카테고리</a></th>
   <td>없음.</td>
  </tr>
  <tr>
   <th scope="row">가능한 콘텐츠</th>
   <td><a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#플로우_콘텐츠">플로우 콘텐츠</a>. 단, {{htmlelement("header")}}, {{htmlelement("footer")}}, 구획 콘텐츠, 제목 콘텐츠 자손은 불가능합니다.</td>
  </tr>
  <tr>
   <th scope="row">태그 생략</th>
   <td>여는 태그는 필수입니다. 바로 다음 요소가 {{htmlelement("dd")}} 또는 <code>&lt;dt&gt;</code>거나, 자신이 부모의 마지막 자식이라면 닫는 태그는 생략할 수 있습니다.</td>
  </tr>
  <tr>
   <th scope="row">가능한 부모 요소</th>
   <td>{{HTMLElement("dl")}} 안의, {{htmlelement("dd")}} 혹은 다른 <code>&lt;dt&gt;</code> 앞. 또는 ({{glossary("WHATWG")}} HTML에서) {{htmlelement("dl")}} 안의 {{htmlelement("div")}}.</td>
  </tr>
  <tr>
   <th scope="row">암시적 ARIA 역할</th>
   <td>{{ARIARole("term")}}</td>
  </tr>
  <tr>
   <th scope="row">가능한 ARIA 역할</th>
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

<h2 id="예제">예제</h2>

<p><a href="/ko/docs/Web/HTML/Element/dl#예제">&lt;dl&gt; 요소의 예제</a>를 확인하세요.</p>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="Browser_compatibility" name="Browser_compatibility">브라우저 호환성</h2>

<p>{{Compat("html.elements.dt")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{HTMLElement("dd")}}, {{HTMLElement("dl")}}</li>
</ul>
