---
title: Document.URL
slug: Web/API/Document/URL
tags:
  - API
  - Document
  - HTML DOM
  - Property
  - Reference
translation_of: Web/API/Document/URL
---
<div>{{APIRef("DOM")}}</div>

<p>{{domxref("Document")}} 인터페이스의 <code><strong>URL</strong></code> 읽기 전용 속성은 문서의 주소를 문자열로 반환합니다.</p>

<h2 id="예제">예제</h2>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">document.getElementById("url").textContent = document.URL;</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p id="urlText"&gt;
  URL:&lt;br/&gt;
  &lt;span id="url"&gt;URL이 여기 보입니다&lt;/span&gt;
&lt;/p&gt;</pre>

<h3 id="결과">결과</h3>

<p>{{EmbedLiveSample("예제", "100%", 100)}}</p>

<h2 id="명세">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("api.Document.URL")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{domxref("HTMLDocument")}}</li>
</ul>
