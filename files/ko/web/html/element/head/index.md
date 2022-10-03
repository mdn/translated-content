---
title: '<head>: 문서 메타데이터 (헤더) 요소'
slug: Web/HTML/Element/head
tags:
  - Element
  - HTML
  - HTML document metadata
  - 'HTML:Metadata content'
  - Reference
  - Web
  - 요소
translation_of: Web/HTML/Element/head
---
<div>{{HTMLRef}}</div>

<p><strong>HTML <code>&lt;head&gt;</code> 요소</strong>는 기계가 식별할 수 있는 문서 정보(메타데이터)를 담습니다. 정보로는 문서가 사용할 <a href="/ko/docs/Web/HTML/Element/title">제목</a>, <a href="/ko/docs/Web/HTML/Element/script">스크립트</a>, <a href="/ko/docs/Web/HTML/Element/style">스타일 시트</a> 등이 있습니다.</p>

<div class="blockIndicator note">
<p><strong>참고:</strong> <code>&lt;head&gt;</code>의 주 목적은 기계 처리를 위한 정보이고, 사람이 읽을 수 있는 정보가 아닙니다. 최상위 제목, 작성자 목록 등 사람에게 보여야 할 정보는 {{HTMLElement("header")}} 요소를 사용하세요.</p>
</div>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a></th>
   <td>없음.</td>
  </tr>
  <tr>
   <th scope="row">가능한 콘텐츠</th>
   <td>
    <p>현재 문서가 {{HTMLElement("iframe")}} {{htmlattrxref("srcdoc", "iframe")}} 문서거나, 제목 정보가 더 높은 단계의 규약에 존재하는 경우(HTML 이메일의 제목처럼) 0개 이상의 메타에이터 콘텐츠.</p>

    <p>이외에는 하나 이상의 메타데이터 콘텐츠. 단, 정확히 한 개의 {{htmlelement("title")}} 요소를 포함해야 합니다.</p>
   </td>
  </tr>
  <tr>
   <th scope="row">태그 생략</th>
   <td><code>&lt;head&gt;</code> 요소 내의 첫 번째 것이 요소라면 여는 태그를 생략할 수 있습니다.<br>
    <code>&lt;head&gt;</code> 요소 뒤의 첫 번째 항목이 공백문자나 주석이 아니라면 닫는 태그를 생략할 수 있습니다.</td>
  </tr>
  <tr>
   <th scope="row">가능한 부모 요소</th>
   <td>{{HTMLElement("html")}} 요소의 첫 번째 자식으로 배치.</td>
  </tr>
  <tr>
   <th scope="row">암시적 ARIA 역할</th>
   <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">대응하는 역할 없음</a></td>
  </tr>
  <tr>
   <th scope="row">가능한 ARIA 요소</th>
   <td>없음</td>
  </tr>
  <tr>
   <th scope="row">DOM 인터페이스</th>
   <td>{{domxref("HTMLHeadElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="특성">특성</h2>

<p><span style="line-height: 21px;">이 요소는 </span><a href="/ko/docs/Web/HTML/Global_attributes" style="line-height: 21px;" title="HTML/Global attributes">전역 특성</a>만 포함합니다.</p>

<h2 id="예제">예제</h2>

<pre class="brush: html notranslate">&lt;!doctype html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;문서 제목&lt;/title&gt;
  &lt;/head&gt;
&lt;/html&gt;
</pre>

<h2 id="참고">참고</h2>

<p>HTML5 호환 브라우저는 <code>&lt;head&gt;</code>가 없는 경우 자동으로 생성합니다. 하지만 <a href="https://www.stevesouders.com/blog/2010/05/12/autohead-my-first-browserscope-user-test/">오래된 구형 브라우저에서는 그렇지 않습니다.</a></p>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="Browser_compatibility" name="Browser_compatibility">브라우저 호환성</h2>

<p>{{Compat("html.elements.head")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><code>&lt;head&gt;</code> 안에 배치할 수 있는 요소

  <ul>
   <li>{{HTMLElement("title")}}</li>
   <li>{{HTMLElement("base")}}</li>
   <li>{{HTMLElement("link")}}</li>
   <li>{{HTMLElement("style")}}</li>
   <li>{{HTMLElement("meta")}}</li>
   <li>{{HTMLElement("script")}}</li>
   <li>{{HTMLElement("noscript")}}</li>
   <li>{{HTMLElement("template")}}</li>
  </ul>
 </li>
</ul>
