---
title: AJAX
slug: Web/Guide/AJAX
tags:
  - AJAX
  - DOM
  - JavaScript
  - References
translation_of: Web/Guide/AJAX
---
<div class="callout-box"><strong><a href="/ko/AJAX/Getting_Started">시작하기</a></strong><br>
AJAX를 소개합니다.</div>

<p><span class="seoSummary"><strong>Asynchronous JavaScript + XML(AJAX)</strong>은 그 자체가 특정 기술은 아닙니다. 2005년 Jesse James Garrett이 처음 만들어낸 말로, <a href="/ko/docs/Web/HTML">HTML</a> 또는 <a href="/ko/docs/Glossary/XHTML">XHTML</a>, <a href="/ko/docs/Web/CSS">CSS</a>, <a href="/ko/docs/Web/JavaScript">JavaScript</a>, <a href="/ko/docs/Web/API/Document_Object_Model">DOM</a>, <a href="/ko/docs/Web/XML">XML</a>, <a href="/ko/docs/Web/XSLT">XSLT</a>, 그리고 제일 중요한 <a href="/ko/docs/Web/API/XMLHttpRequest">XMLHttpRequest 객체</a>를 비롯해 기존의 여러 기술을 사용하는 "새로운" 접근법을 설명하는 용어입니다.</span><br>
 이렇게 다양한 기술을 AJAX 모델로서 결합했을 때, 웹 어플리케이션은 전체 페이지를 새로 고칠 필요 없이 사용자 인터페이스에 빠르고 점진적인 업데이트를 적용할 수 있습니다. 덕분에 어플리케이션은 보다 빨라지고, 사용자 행동에 대한 반응성도 좋아집니다.</p>

<p>AJAX의 X가 XML을 의미하긴 하지만, 요즘은 더 가벼운 용량과 JavaScript의 일부라는 장점 때문에 {{glossary("JSON")}}을 더 많이 사용합니다. JSON과 XML 양쪽 모두 AJAX 모델에서 정보를 담을 때 사용합니다.</p>

<div class="row topicpage-table">
<div class="section">
<h2 class="Documentation" id="문서">문서</h2>

<dl>
 <dt><a href="/ko/docs/Web/Guide/AJAX/Getting_Started">시작하기</a></dt>
 <dd><small>AJAX 기초를 다룬 후에 간단한 연습 예제 두 개를 제공합니다.</small></dd>
 <dt><a href="/ko/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest">XMLHttpRequest API 사용하기</a></dt>
 <dd>{{domxref("XMLHttpRequest")}} API는 Ajax의 핵심입니다. 이 글은 몇 가지 AJAX 기술을 사용하는 법을 설명합니다.
 <ul>
  <li><a href="/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Handling_responses">analyzing and manipulating the response of the server</a></li>
  <li><a href="/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Monitoring_progress">monitoring the progress of a request</a></li>
  <li><a href="/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Submitting_forms_and_uploading_files">submitting forms and upload binary files</a> – in <em>pure</em> Ajax, or using {{domxref("FormData")}} objects</li>
  <li><a href="/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Types_of_requests">creating synchronous or asynchronous requests</a></li>
  <li>using Ajax within <a href="/en-US/docs/Web/API/Worker">Web workers</a></li>
 </ul>
 </dd>
 <dt><a href="/ko/docs/Web/API/Fetch_API">Fetch API</a></dt>
 <dd>The Fetch API provides an interface for fetching resources. It will seem familiar to anyone who has used {{domxref("XMLHTTPRequest")}}, but this API provides a more powerful and flexible feature set.</dd>
 <dt><a href="/ko/docs/Web/API/Server-sent_events">서버발 이벤트</a></dt>
 <dd>Traditionally, a web page has to send a request to the server to receive new data; that is, the page requests data from the server. With server-sent events, it's possible for a server to send new data to a web page at any time, by pushing messages to the web page. These incoming messages can be treated as <em><a href="/en-US/docs/Web/API/Event">Events</a> + data</em> inside the web page. See also: <a href="/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events">Using server-sent events</a>.</dd>
 <dt><a href="/ko/docs/Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data">이진 데이터 주고받기</a></dt>
 <dd>The <code>responseType</code> property of the <code>XMLHttpRequest</code> object can be set to change the expected response type from the server. Possible values are the empty string (default), <code>arraybuffer</code>, <code>blob</code>, <code>document</code>, <code>json</code>, and <code>text</code>. The <code>response</code> property will contain the entity body according to <code>responseType</code>, as an <code>ArrayBuffer</code>, <code>Blob</code>, <code>Document</code>, <code>JSON</code>, or string. This article will show some Ajax I/O techniques.</dd>
 <dt><a href="/ko/docs/Web/XML">XML</a></dt>
 <dd>The <strong>Extensible Markup Language (XML)</strong> is a W3C-recommended general-purpose markup language for creating special-purpose markup languages. It is a simplified subset of SGML, capable of describing many different kinds of data. Its primary purpose is to facilitate the sharing of data across different systems, particularly systems connected via the Internet.</dd>
 <dt><a href="/en-US/docs/Parsing_and_serializing_XML">XML 분석 및 직렬화</a></dt>
 <dd>How to parse an XML document from a string, a file or via javascript and how to serialize XML documents to strings, Javascript Object trees (JXON) or files.</dd>
 <dt><a href="/en-US/docs/XPath">XPath</a></dt>
 <dd>XPath stands for <strong>X</strong>ML <strong>Path</strong> Language, it uses a non-XML syntax that provides a flexible way of addressing (pointing to) different parts of an <a href="/en-US/docs/XML">XML</a> document. As well as this, it can also be used to test addressed nodes within a document to determine whether they match a pattern or not.</dd>
 <dt>{{domxref("FileReader")}} API</dt>
 <dd>The <code>FileReader</code> API lets web applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer, using {{domxref("File")}} or {{domxref("Blob")}} objects to specify the file or data to read. File objects may be obtained from a {{domxref("FileList")}} object returned as a result of a user selecting files using the {{HTMLElement("input")}} element, from a drag and drop operation's {{domxref("DataTransfer")}} object, or from the <code>mozGetAsFile()</code> API on an {{domxref("HTMLCanvasElement")}}.</dd>
 <dt><a href="/en-US/docs/HTML_in_XMLHttpRequest">XMLHttpRequest의 HTML</a></dt>
 <dd>The W3C <a class="external" href="http://dvcs.w3.org/hg/xhr/raw-file/tip/Overview.html">XMLHttpRequest</a> specification adds HTML parsing support to {{domxref("XMLHttpRequest")}}, which originally supported only XML parsing. This feature allows Web apps to obtain an HTML resource as a parsed DOM using <code>XMLHttpRequest</code>.</dd>
</dl>

<h2 class="Other" id="같이_보기">같이 보기</h2>

<dl>
 <dt><a href="https://pdfs.semanticscholar.org/c440/ae765ff19ddd3deda24a92ac39cef9570f1e.pdf">Ajax: A New Approach to Web Applications</a></dt>
 <dd>Jesse James Garrett, of <a href="http://www.adaptivepath.com">adaptive path</a>, wrote this article in February 2005, introducing Ajax and its related concepts.</dd>
 <dt><a href="https://xhr.spec.whatwg.org/">XMLHttpRequest 명세</a></dt>
 <dd>WHATWG Living Standard</dd>
</dl>
</div>

<div class="section">
<h2 class="Related_Topics" id="관련_주제">관련 주제</h2>

<p><a href="/en-US/docs/Web/HTML">HTML</a>, <a href="/en-US/docs/XHTML">XHTML</a>, <a href="/en-US/docs/Web/CSS">CSS</a>, <a href="/en-US/docs/Web/API/Document_Object_Model">DOM</a>, <a href="/en-US/docs/Web/JavaScript">JavaScript</a>, <a href="/en-US/docs/Web/XML">XML</a>, <a href="/en-US/docs/Web/API/XMLHttpRequest">XMLHttpRequest</a>, <a href="/en-US/docs/Web/XSLT">XSLT</a>, <a href="/en-US/docs/Glossary/DHTML">DHTML</a>, <a href="/en-US/docs/JavaScript/Same_origin_policy_for_JavaScript">Same Origin Policy</a></p>
</div>
</div>
