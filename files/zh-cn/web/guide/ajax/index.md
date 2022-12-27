---
title: Ajax
slug: Web/Guide/AJAX
---

**[新手入门](/zh-CN/docs/Web/Guide/AJAX/Getting_Started)**
Ajax 简介

Asynchronous JavaScript + XML（异步 JavaScript 和 XML）, 其本身不是一种新技术，而是一个在 2005 年被 Jesse James Garrett 提出的新术语，用来描述一种使用现有技术集合的‘新’方法，包括：[HTML](/zh-CN/docs/HTML) 或 [XHTML](/zh-CN/docs/XHTML), [CSS](/zh-CN/docs/Web/CSS), [JavaScript](/zh-CN/docs/JavaScript), [DOM](/zh-CN/docs/Web/API/Document_Object_Model), [XML](/zh-CN/docs/XML), [XSLT](/zh-CN/docs/XSLT), 以及最重要的 {{domxref("XMLHttpRequest")}}。当使用结合了这些技术的 AJAX 模型以后，网页应用能够快速地将增量更新呈现在用户界面上，而不需要重载（刷新）整个页面。这使得程序能够更快地回应用户的操作。

尽管 X 在 Ajax 中代表 XML，但由于{{glossary("JSON")}}的许多优势，比如更加轻量以及作为 Javascript 的一部分，目前 JSON 的使用比 XML 更加普遍。JSON 和 XML 都被用于在 Ajax 模型中打包信息。

## 文档

- [新手入门](/zh-CN/docs/Web/Guide/AJAX/Getting_Started)
  - : 本文将为您引导完成 ajax 基础知识，并为您提供两个简单的实际操作示例。
- [使用 XMLHttpRequest API](/zh-CN/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest)

  - : {{domxref("XMLHttpRequest")}} [API](/zh-CN/docs/Web/API/XMLHttpRequest)是 Ajax 的核心。本文将解释如何使用一些 Ajax 技术，比如：

    - [分析和操纵服务器响应](/zh-CN/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest#Handling_responses)
    - [监控请求过程](/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Monitoring_progress)
    - [提交表单或者上传二进制文件](/zh-CN/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest#提交表单和上传文件)– 使用纯 Ajax 或者{{domxref("FormData")}}对象
    - [创建异步或同步请求](/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Types_of_requests)
    - 在[Web workers](/zh-CN/docs/Web/API/Web_Workers_API)中使用 Ajax

- [Fetch API](/zh-CN/docs/Web/API/Fetch_API)
  - : Fetch API 提供一个获取资源的接口。对于用过 {{domxref("XMLHTTPRequest")}} 的人来说会觉得很熟悉，但这个 API 提供了更加强大且灵活的特性。
- [Server-sent 事件](/zh-CN/docs/Server-sent_events)
  - : 在过去，一个网页必须发送请求到服务器来获取新的数据，也就是说，网页必须主动向服务器请求数据。有了 server-sent events 之后，服务器可以向网页推送消息，使得服务器可以随时向网页传送数据。这些发送过来的消息可以看作是带有数据的[事件](/zh-CN/docs/DOM/event)。参见：[Using server-sent events](/zh-CN/docs/Server-sent_events/Using_server-sent_events).
- [纯 Ajax 导航示例](/zh-CN/docs/Web/API/History_API/Example)
  - : 本文提供了一个仅由三个页面组成的纯 Ajax 网站的（简易）工作示例。
- [发送和接收二进制数据](/zh-CN/docs/DOM/XMLHttpRequest/Sending_and_Receiving_Binary_Data)
  - : 可以设置 `XMLHttpRequest` 对象的 `responseType` 属性以改变从服务器端获取数据的类型。可接受的值为空字符串（默认）、`arraybuffer`、`blob`、`document`、`json` 以 及 `text`。 `response` 属性性根据 `responseType` 的值成为对应的数据对象，如 `ArrayBuffer`，`Blob`、 `Document`、 `JSON` 或者 `string` 。本文会展示一些 Ajax I/O 技术。
- [XML](/zh-CN/docs/Glossary/XML)
  - : The **Extensible Markup Language (XML)** 可扩展标记语言是 W3C 推荐的一种专用于创建专用标记语言的通用标记语言。它是 SGML 的简化子集，能够描述许多不同类型的数据。其主要目的是促进在不同的系统，尤其是通过互联网连接的系统间的数据共享。
- [解析和序列化 XML](/zh-CN/docs/Web/Guide/Parsing_and_serializing_XML)
  - : 如何从字符串，文件或者 Javascript 中解析 XML 文档，以及如何将 XML 文档序列转化为字符串，Javascript 对象树 (JSON) 或者文件。
- [XPath](/zh-CN/docs/Web/XPath)
  - : XPath 代表**X**ML **Path** Language，它使用非 XML 语法，提供了一种灵活的方式来寻址（指向）XML 文档的不同部分。除此之外，它还可以用于测试文档中的寻址节点，以确定他们是否匹配模式。
- {{domxref("FileReader")}} [API](/zh-CN/docs/WEB/API/FileReader)
  - : `FileReader` API 允许 Web 应用程序异步读取存储在用户计算机上的文件（或原始数据缓存）的内容，使用 {{domxref("File")}} 或 {{domxref("Blob")}} 对象指定要读取的文件或数据。文件对象可以从用户选择文件后的 {{HTMLElement("input")}} 元素的 {{domxref("FileList")}} 对象中获取，也可以从拖放操作的 {{domxref("DataTransfer")}} 对象获取，或者从{{domxref("HTMLCanvasElement")}} 的`mozGetAsFile()` API 获取。
- [XMLHttpRequest 对 HTML 的支持](/zh-CN/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)
  - : W3C [XMLHttpRequest](https://xhr.spec.whatwg.org/)规范向 XMLHttpRequest 添加了 HTML 解析支持，XMLHttpRequest 原本只支持 XML 解析。此功能允许 Web 应用程序使用 XMLHttpRequest 获取 HTML 资源作为解析的 DOM。

## 参见

- [Ajax: A New Approach to Web Applications](https://pdfs.semanticscholar.org/c440/ae765ff19ddd3deda24a92ac39cef9570f1e.pdf)
  - : Jesse James Garrett 在 2005 年 2 月写了这篇文章 [adaptive path](http://www.adaptivepath.com/)，介绍了 Ajax 及其相关概念。
- [XMLHttpRequest Specification](https://xhr.spec.whatwg.org/)
  - : WHATWG 现行标准

## 工具

- [工具包和框架](http://www.ajaxprojects.com/)
- [Firebug - Ajax / Web 开发工具](http://getfirebug.com/)
- [AJAX 调试工具](http://blog.monstuff.com/archives/000252.html)
- [Flash / AJAX 集成套件](<Flash/AJAX Integration Kit>)
- [一个简单的 XMLHTTP 接口库](http://xkr.us/code/javascript/XHConn/)
- [axios](https://github.com/axios/axios) 基于 {{jsxref("Promise")}} 的 {{glossary("HTTP")}} 客户端，使用`XMLHttpRequest` 实现。

## 例子

- [Ajax poller 脚本](http://www.dhtmlgoodies.com/index.html?whichScript=ajax-poller)
- [Ajax 聊天教程](http://www.ajaxprojects.com/ajax/tutorialdetails.php?itemid=9)
- [RSS 代码与 Ajax](http://www.ajaxprojects.com/ajax/tutorialdetails.php?itemid=13)
- [创建自己的 Ajax 效果](http://www.thinkvitamin.com/features/ajax/create-your-own-ajax-effects)
- [Ajax：创建巨大的书签](http://codinginparadise.org/weblog/2005/08/ajax-creating-huge-bookmarklets.html)
- [Ajax：Hot！Ajax 有很多很酷的例子](http://www.hotajax.org/)

## 参见

[HTML](/zh-CN/docs/Web/HTML), [XHTML](/zh-CN/docs/Glossary/XHTML), [CSS](/zh-CN/docs/Web/CSS), [DOM](/zh-CN/docs/Web/API/Document_Object_Model), [JavaScript](/zh-CN/docs/Web/JavaScript), [XML](/zh-CN/docs/Web/XML), [XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest), [XSLT](/zh-CN/docs/Web/XSLT), [Same Origin Policy](/zh-CN/docs/Web/Security/Same-origin_policy)
