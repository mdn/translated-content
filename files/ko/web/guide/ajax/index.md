---
title: AJAX
slug: Web/Guide/AJAX
---

**[시작하기](/ko/AJAX/Getting_Started)** AJAX를 소개합니다.

<strong>Asynchronous JavaScript + XML(AJAX)</strong>은 그 자체가 특정 기술은 아닙니다. 2005년 Jesse James Garrett이 처음 만들어낸 말로, [HTML](/ko/docs/Web/HTML) 또는 [XHTML](/ko/docs/Glossary/XHTML), [CSS](/ko/docs/Web/CSS), [JavaScript](/ko/docs/Web/JavaScript), [DOM](/ko/docs/Web/API/Document_Object_Model), [XML](/ko/docs/Web/XML), [XSLT](/ko/docs/Web/XSLT), 그리고 제일 중요한 [XMLHttpRequest 객체](/ko/docs/Web/API/XMLHttpRequest)를 비롯해 기존의 여러 기술을 사용하는 "새로운" 접근법을 설명하는 용어입니다.
이렇게 다양한 기술을 AJAX 모델로서 결합했을 때, 웹 어플리케이션은 전체 페이지를 새로 고칠 필요 없이 사용자 인터페이스에 빠르고 점진적인 업데이트를 적용할 수 있습니다. 덕분에 어플리케이션은 보다 빨라지고, 사용자 행동에 대한 반응성도 좋아집니다.

AJAX의 X가 XML을 의미하긴 하지만, 요즘은 더 가벼운 용량과 JavaScript의 일부라는 장점 때문에 {{glossary("JSON")}}을 더 많이 사용합니다. JSON과 XML 양쪽 모두 AJAX 모델에서 정보를 담을 때 사용합니다.

## 문서

- [시작하기](/ko/docs/Web/Guide/AJAX/Getting_Started)
  - : AJAX 기초를 다룬 후에 간단한 연습 예제 두 개를 제공합니다.
- [XMLHttpRequest API 사용하기](/ko/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
  - : {{domxref("XMLHttpRequest")}} API는 Ajax의 핵심입니다. 이 글은 몇 가지 AJAX 기술을 사용하는 법을 설명합니다.\* [analyzing and manipulating the response of the server](/ko/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Handling_responses)
    - [monitoring the progress of a request](/ko/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Monitoring_progress)
    - [submitting forms and upload binary files](/ko/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Submitting_forms_and_uploading_files) – in _pure_ Ajax, or using {{domxref("FormData")}} objects
    - [creating synchronous or asynchronous requests](/ko/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Types_of_requests)
    - using Ajax within [Web workers](/ko/docs/Web/API/Worker)
- [Fetch API](/ko/docs/Web/API/Fetch_API)
  - : The Fetch API provides an interface for fetching resources. It will seem familiar to anyone who has used {{domxref("XMLHTTPRequest")}}, but this API provides a more powerful and flexible feature set.
- [서버발 이벤트](/ko/docs/Web/API/Server-sent_events)
  - : Traditionally, a web page has to send a request to the server to receive new data; that is, the page requests data from the server. With server-sent events, it's possible for a server to send new data to a web page at any time, by pushing messages to the web page. These incoming messages can be treated as _[Events](/ko/docs/Web/API/Event) + data_ inside the web page. See also: [Using server-sent events](/ko/docs/Web/API/Server-sent_events/Using_server-sent_events).
- [이진 데이터 주고받기](/ko/docs/Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data)
  - : The `responseType` property of the `XMLHttpRequest` object can be set to change the expected response type from the server. Possible values are the empty string (default), `arraybuffer`, `blob`, `document`, `json`, and `text`. The `response` property will contain the entity body according to `responseType`, as an `ArrayBuffer`, `Blob`, `Document`, `JSON`, or string. This article will show some Ajax I/O techniques.
- [XML](/ko/docs/Web/XML)
  - : The **Extensible Markup Language (XML)** is a W3C-recommended general-purpose markup language for creating special-purpose markup languages. It is a simplified subset of SGML, capable of describing many different kinds of data. Its primary purpose is to facilitate the sharing of data across different systems, particularly systems connected via the Internet.
- [XML 분석 및 직렬화](/ko/docs/Parsing_and_serializing_XML)
  - : How to parse an XML document from a string, a file or via javascript and how to serialize XML documents to strings, Javascript Object trees (JXON) or files.
- [XPath](/ko/docs/XPath)
  - : XPath stands for **X**ML **Path** Language, it uses a non-XML syntax that provides a flexible way of addressing (pointing to) different parts of an [XML](/ko/docs/XML) document. As well as this, it can also be used to test addressed nodes within a document to determine whether they match a pattern or not.
- {{domxref("FileReader")}} API
  - : The `FileReader` API lets web applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer, using {{domxref("File")}} or {{domxref("Blob")}} objects to specify the file or data to read. File objects may be obtained from a {{domxref("FileList")}} object returned as a result of a user selecting files using the {{HTMLElement("input")}} element, from a drag and drop operation's {{domxref("DataTransfer")}} object, or from the `mozGetAsFile()` API on an {{domxref("HTMLCanvasElement")}}.
- [XMLHttpRequest의 HTML](/ko/docs/HTML_in_XMLHttpRequest)
  - : The W3C [XMLHttpRequest](http://dvcs.w3.org/hg/xhr/raw-file/tip/Overview.html) specification adds HTML parsing support to {{domxref("XMLHttpRequest")}}, which originally supported only XML parsing. This feature allows Web apps to obtain an HTML resource as a parsed DOM using `XMLHttpRequest`.

## 같이 보기

- [Ajax: A New Approach to Web Applications](https://pdfs.semanticscholar.org/c440/ae765ff19ddd3deda24a92ac39cef9570f1e.pdf)
  - : Jesse James Garrett, of [adaptive path](http://www.adaptivepath.com), wrote this article in February 2005, introducing Ajax and its related concepts.
- [XMLHttpRequest 명세](https://xhr.spec.whatwg.org/)
  - : WHATWG Living Standard

## 관련 주제

[HTML](/ko/docs/Web/HTML), [XHTML](/ko/docs/XHTML), [CSS](/ko/docs/Web/CSS), [DOM](/ko/docs/Web/API/Document_Object_Model), [JavaScript](/ko/docs/Web/JavaScript), [XML](/ko/docs/Web/XML), [XMLHttpRequest](/ko/docs/Web/API/XMLHttpRequest), [XSLT](/ko/docs/Web/XSLT), [DHTML](/ko/docs/Glossary/DHTML), [Same Origin Policy](/ko/docs/JavaScript/Same_origin_policy_for_JavaScript)
