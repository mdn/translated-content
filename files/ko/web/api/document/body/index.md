---
title: Document.body
slug: Web/API/Document/body
tags:
  - API
  - DOM
  - Document
  - Property
  - Reference
translation_of: Web/API/Document/body
---
<div>{{APIRef("DOM")}}</div>

<p><code><strong>Document.</strong><strong>body</strong></code> 속성은 현재 문서의 {{htmlelement("body")}} 혹은 {{htmlelement("frameset")}} 노드를 나타냅니다. 일치하는 요소가 존재하지 않으면 <code>null</code>을 반환합니다.</p>

<h2 id="구문">구문</h2>

<pre>const <em>objRef</em> = document.body
document.body = <em>objRef</em>
</pre>

<h2 id="Example" name="Example">예제</h2>

<pre class="brush: js">// HTML: &lt;body id="oldBodyElement"&gt;&lt;/body&gt;
alert(document.body.id); // "oldBodyElement"

let aNewBodyElement = document.createElement("body");

aNewBodyElement.id = "newBodyElement";
document.body = aNewBodyElement;
alert(document.body.id); // "newBodyElement"</pre>

<h2 id="Notes" name="Notes">참고</h2>

<p><code>Document.body</code>는 문서의 콘텐츠를 수용하는 요소입니다. <code>&lt;body&gt;</code> 콘텐츠를 가지고 있는 문서는 <code>&lt;body&gt;</code> 요소를 반환하고, 프레임셋을 가지고 있는 문서는 가장 바깥쪽의 <code>&lt;frameset&gt;</code> 요소를 반환합니다.</p>

<p><code>body</code> 속성에 새로운 값을 설정할 수 있긴 하지만, 문서에 새로운 본문을 설정하는건 <code>&lt;body&gt;</code> 요소가 가지고 있던 모든 자식을 제거하는 것과 같습니다.</p>

<h2 id="Specification">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성 </h2>

{{Compat("api.Document.body")}}

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{domxref("Document.head")}}</li>
</ul>
