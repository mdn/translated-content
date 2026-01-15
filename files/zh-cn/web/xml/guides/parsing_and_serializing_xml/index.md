---
title: 解析或序列化 XML
slug: Web/XML/Guides/Parsing_and_serializing_XML
---

有时，你可能需要解析 {{Glossary("XML")}} 内容，并把它转换为 {{Glossary("DOM")}} 树，或者，反过来将现有的 DOM 树序列化成 XML。在本文中，我们将了解 web 平台提供的对象，以便轻松地完成序列化和解析 XML 的常见任务。

- {{domxref("XMLSerializer")}}
  - : 序列化 DOM 树，把它们转换成包含 XML 的字符串。
- {{domxref("DOMParser")}}
  - : 通过解析一个包含 XML 的字符串来构建 DOM 树，返回一个基于输入数据的适当的 {{domxref("XMLDocument")}} 或者是 {{domxref("Document")}}。
- {{domxref("XMLHttpRequest")}}
  - : 从一个 URL 中加载内容；XML 的内容被作为一个带有内建 XML 的 DOM 树的 XML {{domxref("Document")}} 对象返回。
- [XPath](/zh-CN/docs/Web/XML/XPath)
  - : 一种创建包含 XML 文档特定部分的地址，并基于这些地址进行 XML 节点定位的字符串的技术。

## 创建一个 XML 文档

使用以下方法来创建一个 XML 文档，该文档是 {{domxref("Document")}} 的一个实例。

### 把字符串解析成 DOM 树

下面这个例子使用 {{domxref("DOMParser")}} 把字符串中的 XML 片段转换为 DOM 树：

```js
const xmlStr = '<q id="a"><span id="b">你好！</span></q>';
const parser = new DOMParser();
const doc = parser.parseFromString(xmlStr, "application/xml");
// 打印根元素的名称或错误信息
const errorNode = doc.querySelector("parsererror");
if (errorNode) {
  console.log("解析时遇到错误");
} else {
  console.log(doc.documentElement.nodeName);
}
```

### 把 URL 可寻址的资源解析成 DOM 树

#### 使用 fetch

下列示例代码读取一个 URL 可寻址的 XML 文件，并将其解析成 DOM 树：

```js
fetch("example.xml")
  .then((response) => response.text())
  .then((text) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/xml");
    console.log(doc.documentElement.nodeName);
  });
```

这些代码将资源以文本字符串的形式获取，然后使用 {{domxref("DOMParser.parseFromString()")}} 构建 {{domxref("XMLDocument")}}。

如果文档是 {{Glossary("HTML")}}，上面的代码将返回一个 {{domxref("Document")}}。如果文档是 XML，那得到的对象实际上是一个 `XMLDocument`。这两种类型实质上是一样的，不同点大部分是历史遗留的，尽管区分它们也会有一些实际好处。

> [!NOTE]
> 事实上，{{domxref("HTMLDocument")}} 也是一个接口，但是它不必是一个独立的类型。在一些浏览器上它是，但在另外一些浏览器上它仅仅是 `Document` 接口的别名。

## 序列化 XML 文档

给定一个 {{domxref("Document")}}，你可以使用 {{domxref("XMLSerializer.serializeToString()")}} 方法把文档的 DOM 树序列化为 XML。

使用下面的方法来序列化在前面的部分中创建的 XML 文档内容。

### 把 DOM 树序列化成字符串

首先，使用[使用文档对象模型](/zh-CN/docs/Web/API/Document_Object_Model)中的方法构建一个 DOM 树。也可以使用从 {{domxref("fetch()")}} 中获得的 DOM 树。

为了将 DOM 树 `doc` 序列化为 XML 文本，调用 {{domxref("XMLSerializer.serializeToString()")}}：

```js
const serializer = new XMLSerializer();
const xmlStr = serializer.serializeToString(doc);
```

### 序列化 HTML 文档

如果你手上的 DOM 是一个 HTML 文档，你可以使用 `serializeToString()` 将其序列化；但是也有一个更简单的选择：直接用 {{domxref("Element.innerHTML")}} 属性（如果你仅仅想得到指定节点的后代的话）或 {{domxref("Element.outerHTML")}} 属性（如果你想得到节点本身及它所有的后代的话）。

```js
const docInnerHtml = document.documentElement.innerHTML;
```

因此，`docInnerHtml` 是一个包含 HTML 内容的文档的字符串，换句话来说，也是 {{HTMLElement("body")}} 元素的内容。

你可以使用以下代码得到 `<body>` *和*它的后代对应的 HTML：

```js
const docOuterHtml = document.documentElement.outerHTML;
```

## 参见

- [XPath](/zh-CN/docs/Web/XML/XPath)
- {{domxref("fetch()")}}
- {{domxref("XMLHttpRequest")}}
- {{domxref("Document")}}、{{domxref("XMLDocument")}} 和 {{domxref("HTMLDocument")}}
