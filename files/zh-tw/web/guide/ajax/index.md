---
title: Ajax
slug: Web/Guide/AJAX
---

**[入門篇](/zh-TW/docs/Web/Guide/AJAX/Getting_Started)**
Ajax 簡介。

非同步 JavaScript 及 XML（Asynchronous JavaScript and XML，AJAX）並不能稱做是種「技術」，而是 2005 年時由 Jesse James Garrett 所發明的術語，描述一種使用數個既有技術的「新」方法。這些技術包括 [HTML](/zh-TW/docs/HTML) 或 [XHTML](/zh-TW/docs/XHTML)、[層疊樣式表](/zh-TW/docs/CSS)、[JavaScript](/zh-TW/docs/JavaScript)、[文件物件模型](/zh-TW/docs/DOM)、[XML](/zh-TW/docs/XML)、[XSLT](/zh-TW/docs/XSLT) 以及最重要的 [XMLHttpRequest 物件](/zh-TW/docs/XMLHttpRequest)。
當這些技術被結合在 Ajax 模型中，Web 應用程式便能快速、即時更動介面及內容，不需要重新讀取整個網頁，讓程式更快回應使用者的操作。

雖然 X 在 Ajax 中代表 XML，但由於 [JSON](/zh-TW/docs/JSON) 的許多優點，如輕量以及其本身就是 JavaScript 的一部分等，讓現今 JSON 比起 XML 被更廣泛的使用。JSON 與 XML 兩者都被用來在 Ajax 模型中包裝資訊。

## 文件

- [入門篇](/zh-TW/docs/AJAX/Getting_Started)
  - : 這篇文章會指引你瞭解 Ajax 的基礎知識並提供了兩個簡單的動手做範例來入門。
- [使用 XMLHttpRequest API](/zh-TW/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest)
  - : [`XMLHttpRequest` API](/zh-TW/docs/DOM/XMLHttpRequest) 是 Ajax 的核心。這篇文章將解釋如何使用一些 Ajax 技術，例如： [分析及處理伺服器回應](/zh-TW/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest#Handling_responses)
    - [監視請求進度](/zh-TW/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest#Monitoring_progress)
    - [提交表單與上傳二進制檔案](/zh-TW/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest#Submitting_forms_and_uploading_files) – 使用*單純的* Ajax，或使用 [`FormData`](/zh-TW/docs/DOM/XMLHttpRequest/FormData) 物件
    - [建立同步或非同步請求](/zh-TW/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest#Types_of_requests)
    - 在 [Web workers](/zh-TW/docs/DOM/Worker) 中使用 Ajax
- [Fetch API](/zh-TW/docs/Web/API/Fetch_API)
  - : Fetch API 提供了取得資源（fetching resources）的介面（interface）。這似乎對於曾使用過 {{domxref("XMLHTTPRequest")}} 的人而言並不陌生，然而這個 API 提供一個更強大且彈性的功能集。
- [Server-sent events](/zh-TW/docs/Server-sent_events)
  - : 傳統上來說，一個網頁必須送出 request 到伺服器來得到新的資料，也就是說，網頁藉由 server-sent 事件從伺服器請求 (request) 資料，伺服器在任何時候都能送新的資料給網頁，藉由推送訊息到網頁。這些傳入的訊息可以被視為網頁中的 _[事件](/zh-TW/docs/DOM/event)_ + 資料，請參見 [使用 server-sent event](/zh-TW/docs/Server-sent_events/Using_server-sent_events)。
- [_Pure-Ajax_ navigation example](/zh-TW/docs/Web/Guide/DOM/Manipulating_the_browser_history/Example)
  - : This article provides a working (minimalist) example of a _pure-Ajax_ website composed only of three pages.
- [Sending and Receiving Binary Data](/zh-TW/docs/DOM/XMLHttpRequest/Sending_and_Receiving_Binary_Data)
  - : The `responseType` property of the XMLHttpRequest object can be set to change the expected response type from the server. Possible values are the empty string (default), `"arraybuffer"`, `"blob"`, `"document"`, `"json"`, and `"text"`. The `response` property will contain the entity body according to `responseType`, as an `ArrayBuffer`, `Blob`, `Document`, `JSON`, or string. This article will show some Ajax I/O techniques.
- [XML](/zh-TW/docs/XML)
  - : 可擴展標記語言（The Extensible Markup Language, XML）是 W3C 推薦的用於創建特殊用途標記語言的通用標記語言。它是 SGML 的簡化子集，能夠描述許多不同類型的數據。其主要目的是促進不同系統間的數據共享，特別是通過網際網路連接的系統。
- [JXON](/zh-TW/docs/JXON)
  - : JXON 代表無損耗 **J**avascript **X**ML **O**bject **N**otation, 是一個通用名稱，用來定義使用 XML 的 Javascript 物件樹(JSON) 的通用名稱。
- [解析和序列化 XML](/zh-TW/docs/Parsing_and_serializing_XML)
  - : 如何從一串字串，一個檔案中透過 Javascript 解析一個 XML 文件 ，以及如何將 XML 檔案序列化成字串、Javascript 物件樹(JXON) 或檔案。
- [XPath](/zh-TW/docs/XPath)
  - : XPath stands for **X**ML **Path** Language, it uses a non-XML syntax that provides a flexible way of addressing (pointing to) different parts of an [XML](/zh-TW/docs/XML) document. As well as this, it can also be used to test addressed nodes within a document to determine whether they match a pattern or not.
- [The `FileReader` API](/zh-TW/docs/DOM/FileReader)
  - : The `FileReader` API lets web applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer, using [`File`](/zh-TW/docs/DOM/File) or [`Blob`](/zh-TW/docs/DOM/Blob) objects to specify the file or data to read. File objects may be obtained from a [`FileList`](/zh-TW/docs/DOM/FileList) object returned as a result of a user selecting files using the [`"><input>`](/zh-TW/docs/HTML/Element/input) element, from a drag and drop operation's [`DataTransfer`](/En/DragDrop/DataTransfer) object, or from the `mozGetAsFile()` API on an [`HTMLCanvasElement`](/zh-TW/docs/DOM/HTMLCanvasElement).
- [HTML in XMLHttpRequest](/zh-TW/docs/HTML_in_XMLHttpRequest)
  - : The W3C [XMLHttpRequest](http://dvcs.w3.org/hg/xhr/raw-file/tip/Overview.html) specification adds HTML parsing support to [`XMLHttpRequest`](/zh-TW/DOM/XMLHttpRequest), which originally supported only XML parsing. This feature allows Web apps to obtain an HTML resource as a parsed DOM using `XMLHttpRequest`.
- [Other resources](/zh-TW/docs/AJAX/Other_Resources)
  - : Other Ajax resources you may find useful.

## 參見

- [Alternate Ajax Techniques](http://www.webreference.com/programming/ajax_tech/)
  - : Most articles on Ajax have focused on using XMLHttp as the means to achieving such communication, but Ajax techniques are not limited to just XMLHttp. There are several other methods.
- [Ajax: A New Approach to Web Applications](http://adaptivepath.org/ideas/ajax-new-approach-web-applications/)
  - : Jesse James Garrett, of [adaptive path](http://www.adaptivepath.com), wrote this article in February 2005, introducing Ajax and its related concepts.
- [A Simpler Ajax Path](http://www.onlamp.com/pub/a/onlamp/2005/05/19/xmlhttprequest.html)
  - : "As it turns out, it's pretty easy to take advantage of the XMLHttpRequest object to make a web app act more like a desktop app while still using traditional tools like web forms for collecting user input."
- [Ajax Mistakes](http://alexbosworth.backpackit.com/pub/67688)
  - : Alex Bosworth has written this article outlining some of the mistakes Ajax application developers can make.
- [Tutorial](http://www.xul.fr/en-xml-ajax.html) with examples.
  - : TBD
- [XMLHttpRequest specification](http://www.w3.org/TR/XMLHttpRequest/)
  - : W3C Working draft

## 社群

- [Ajax community links](/zh-TW/docs/AJAX/Community)

## 工具

- [Toolkits and frameworks](http://www.ajaxprojects.com)
- [Firebug - Ajax/Web development tool](http://www.getfirebug.com/)
- [AJAX Debugging Tool](http://blog.monstuff.com/archives/000252.html)
- [Flash/AJAX Integration Kit](http://www.osflash.org/doku.php?id=flashjs)
- [A Simple XMLHTTP Interface Library](http://xkr.us/code/javascript/XHConn/)

## 範例

- [Ajax poller script](http://www.dhtmlgoodies.com/index.html?whichScript=ajax-poller)
- [Ajax Chat Tutorial](http://www.ajaxprojects.com/ajax/tutorialdetails.php?itemid=9)
- [RSS Ticker with Ajax](http://www.ajaxprojects.com/ajax/tutorialdetails.php?itemid=13)
- [Create your own Ajax effects](http://www.thinkvitamin.com/features/ajax/create-your-own-ajax-effects)
- [Ajax: Creating Huge Bookmarklets](http://codinginparadise.org/weblog/2005/08/ajax-creating-huge-bookmarklets.html)
- [Ajax: Hot!Ajax There are many cool examples](http://www.hotajax.org)

## 相關主題

[HTML](/zh-TW/docs/HTML), [XHTML](/zh-TW/docs/XHTML), [CSS](/zh-TW/docs/CSS), [DOM](/zh-TW/docs/DOM), [JavaScript](/zh-TW/docs/JavaScript), [XML](/zh-TW/docs/XML), [XMLHttpRequest](/zh-TW/docs/nsIXMLHttpRequest), [XSLT](/zh-TW/docs/XSLT), [Same Origin Policy](/zh-TW/docs/JavaScript/Same_origin_policy_for_JavaScript)

{{ListSubpages}}
