---
title: Ajax
slug: Web/Guide/AJAX
---

<section id="Quick_links">
  {{ListSubpagesForSidebar("/zh-CN/docs/Web/Guide/AJAX")}}
  <ol>
    <li class="toggle">
      <details>
        <summary>指南</summary>
        <ol>
          {{ListSubpagesForSidebar("/zh-CN/docs/Web/Guide")}}
        </ol>
      </details>
    </li>
  </ol>
</section>

**异步 JavaScript 和 XML**，或 [**Ajax**](https://www.semanticscholar.org/paper/Ajax%3A-A-New-Approach-to-Web-Applications-Garrett/c440ae765ff19ddd3deda24a92ac39cef9570f1e?p2df) 本身不是一种技术，而是一种将一些现有技术结合起来使用的方法，包括：[HTML](/zh-CN/docs/Web/HTML) 或 [XHTML](/zh-CN/docs/Glossary/XHTML)、[CSS](/zh-CN/docs/Web/CSS)、[JavaScript](/zh-CN/docs/Web/JavaScript)、[DOM](/zh-CN/docs/Web/API/Document_Object_Model)、[XML](/zh-CN/docs/Web/XML)、[XSLT](/zh-CN/docs/Web/XSLT)、以及最重要的 {{domxref("XMLHttpRequest")}} 对象。当使用结合了这些技术的 Ajax 模型以后，网页应用能够快速地将增量更新呈现在用户界面上，而不需要重载（刷新）整个页面。这使得程序能够更快地回应用户的操作。

尽管 Ajax 中的 X 代表 XML，但是 {{glossary("JSON")}} 才是首选，因为它更加轻量，而且是用 JavaScript 编写的。在 Ajax 模型中，JSON 和 XML 都被用来包装信息。

## 文档

- [新手入门](/zh-CN/docs/Web/Guide/AJAX/Getting_Started)
  - : 这篇文章引导你了解 Ajax 的基础知识，并给你两个简单的实践例子来让你开始上手。
- [使用 XMLHttpRequest API](/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
  - : {{domxref("XMLHttpRequest")}} API 是 Ajax 的核心。本文将解释如何使用一些 Ajax 技术，比如：
    - [分析和操纵服务器响应](/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#处理响应)
    - [监控请求过程](/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#监控请求过程)
    - [提交表单或者上传二进制文件](/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#提交表单和上传文件)，使用*纯* Ajax 或者 {{domxref("FormData")}} 对象
    - 在 [Web worker](/zh-CN/docs/Web/API/Worker) 中使用 Ajax
- [*纯 Ajax* 导航示例](/zh-CN/docs/Web/API/History_API/Example)
  - : 本文提供了一个仅由三个页面组成的*纯 Ajax* 网站的（最小）工作示例。
- [发送和接收二进制数据](/zh-CN/docs/Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data)
  - : `XMLHttpRequest` 对象的 `responseType` 属性可以被设置来改变服务器的预期响应类型。可能的值是空字符串（默认）、`arraybuffer`、`blob`、`document`、`json` 和 `text`。`response` 属性将根据 `responseType` 包含，作为一个 `ArrayBuffer`、`Blob`、`Document`、`JSON` 或字符串的实体主体。这篇文章将展示一些 Ajax I/O 技术。
- [XML](/zh-CN/docs/Glossary/XML)
  - : **Extensible Markup Language (XML)** 可扩展标记语言是 W3C 推荐的一种专用于创建专用标记语言的通用标记语言。它是 SGML 的简化子集，能够描述许多不同类型的数据。其主要目的是促进在不同的系统，尤其是通过互联网连接的系统间的数据共享。
- [解析和序列化 XML](/zh-CN/docs/Web/Guide/Parsing_and_serializing_XML)
  - : 如何从字符串、文件或通过 JavaScript 解析 XML 文档，以及如何将 XML 文档序列化为字符串或文件。
- [XPath](/zh-CN/docs/Web/XPath)
  - : XPath 代表 **X**ML **Path** Language，它使用非 XML 语法，提供了一种灵活的方式来寻址（指向）[XML](/zh-CN/docs/Web/XML) 文档的不同部分。除此之外，它还可以用于测试文档中的寻址节点，以确定它们是否匹配模式。
- {{domxref("FileReader")}} API
  - : `FileReader` API 允许 Web 应用程序异步读取存储在用户计算机上的文件（或原始数据缓存）的内容，使用 {{domxref("File")}} 或 {{domxref("Blob")}} 对象指定要读取的文件或数据。文件对象可以从用户选择文件后的 {{HTMLElement("input")}} 元素的 {{domxref("FileList")}} 对象中获取，也可以从拖放操作的 {{domxref("DataTransfer")}} 对象获取。
- [XMLHttpRequest 对 HTML 的支持](/zh-CN/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)
  - : W3C [XMLHttpRequest](https://xhr.spec.whatwg.org/)规范向 {{domxref("XMLHttpRequest")}} 添加了 HTML 解析支持，XMLHttpRequest 原本只支持 XML 解析。此功能允许 Web 应用程序使用 `XMLHttpRequest` 获取 HTML 资源作为解析的 DOM。

## 相关技术

虽然 Ajax 仍然有用，但自 2005 年以来，已经开发了可以实现类似功能的其他 API，包括[Fetch API](/zh-CN/docs/Web/API/Fetch_API)和[服务端发送事件](/zh-CN/docs/Web/API/Server-sent_events)。

- [Fetch API](/zh-CN/docs/Web/API/Fetch_API)
  - : Fetch API 提供了一个获取资源的接口。对于使用过 {{domxref("XMLHTTPRequest")}} 的人来说非常熟悉，但这个 API 提供了一个更强大和灵活的功能集。
- [服务端发送事件](/zh-CN/docs/Web/API/Server-sent_events)
  - : 传统上，一个网页必须向服务器发送请求以接收新数据；也就是说，网页向服务器请求数据。有了服务器发送的事件，服务器就有可能在任何时候向网页发送新的数据，通过推送消息给网页。这些传入的消息可以被视为网页内部的[*事件*](/zh-CN/docs/Web/API/Event) _+ 数据_。也请参见[使用服务器发送的事件](/zh-CN/docs/Web/API/Server-sent_events/Using_server-sent_events)。

## 参见

- [XMLHttpRequest 规范](https://xhr.spec.whatwg.org/)
  - : WHATWG 现行标准
