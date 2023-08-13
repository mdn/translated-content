---
title: DOMParser
slug: Web/API/DOMParser
---

{{APIRef("DOM")}}

**`DOMParser`** 可以将存储在字符串中的 {{Glossary("XML")}} 或 {{Glossary("HTML")}} 源代码解析为一个 DOM {{domxref("Document")}}。

> **备注：** {{domxref("XMLHttpRequest")}} 支持从 URL 可寻址资源解析 XML 和 HTML，在其{{domxref("XMLHttpRequest.response", "response")}} 属性中返回`Document`。

你可以使用{{domxref("XMLSerializer")}} 接口执行相反的操作 - 将 DOM 树转换为 XML 或 HTML 源。

对于 HTML 文档，您还可以通过设置 {{domxref("Element.innerHTML")}} 和{{domxref("Element.outerHTML", "outerHTML")}} 属性的值，将部分 DOM 替换为从 HTML 构建的新 DOM 树。还可以读取这些属性以获取对应于相应 DOM 子树的 HTML 片段。

## 语法

```js
let domparser = new DOMParser();
```

## 方法

{{domxref("DOMParser.parseFromString()")}}

### 语法

```js
let doc = domparser.parseFromString(string, mimeType);
```

### 返回值

基于 **[`mimeType`](#Argument02)** 参数，返回 {{domxref("Document")}} 或 {{domxref("XMLDocument")}} 或其他文档类型。

### 参数

该方法接收 2 个必要参数：

- `string`
  - : 要解析的 {{domxref("DOMString")}}。它必须包含 {{Glossary("HTML")}}、{{Glossary("xml")}}、{{Glossary("xhtml+xml")}} 或 {{Glossary("svg")}} 文档。
- `mimeType`

  - : 一个 {{domxref("DOMString")}}。This string determines a class of the the method's return value. The possible values are the following:

| `mimeType`              | doc.constructor            |
| ----------------------- | -------------------------- |
| `text/html`             | {{domxref("Document")}}    |
| `text/xml`              | {{domxref("XMLDocument")}} |
| `application/xml`       | {{domxref("XMLDocument")}} |
| `application/xhtml+xml` | {{domxref("XMLDocument")}} |
| `image/svg+xml`         | {{domxref("XMLDocument")}} |

## 解析 XML

一旦建立了一个解析对象以后，你就可以使用它的 `parseFromString` 方法来解析一个 XML 字符串：

```js
let parser = new DOMParser(),
  doc = parser.parseFromString(stringContainingXMLSource, "application/xml");
```

#### 错误处理

如果解析失败，`DOMParser` 不会抛出任何异常，而是会返回一个给定的错误文档：

```xml
<parsererror xmlns="http://www.mozilla.org/newlayout/xml/parsererror.xml">
(error description)
<sourcetext>(a snippet of the source XML)</sourcetext>
</parsererror>
```

解析错误会显示在[错误控制台](/zh-CN/docs/Error_Console)，包括文档的地址和错误的源代码。

## 解析 SVG 或者 HTML 文档

`DOMParser` 也可以用来解析 SVG 文档或者 HTML 文档。根据给定的 MIME 类型不同，`parseFromString` 方法可能返回三种不同类型的文档。如果 MIME 类型是 `text/xml`，则返回一个 `XMLDocument`，如果 MIME 类型是 `text/svg+xml`，则返回一个 `SVGDocument`，如果 MIME 类型是 `text/html`，则返回一个 `HTMLDocument`。

```js
let parser = new DOMParser();
let doc = parser.parseFromString(stringContainingXMLSource, "application/xml");
// 返回一个 Document 对象，但不是 SVGDocument，也不是 HTMLDocument

parser = new DOMParser();
doc = parser.parseFromString(stringContainingXMLSource, "image/svg+xml");
// 返回一个 SVGDocument 对象，同时也是一个 Document 对象。

parser = new DOMParser();
doc = parser.parseFromString(stringContainingHTMLSource, "text/html");
// 返回一个 HTMLDocument 对象，同时也是一个 Document 对象。
```

## DOMParser HTML 扩展

```js
/*
 * DOMParser HTML extension
 * 2012-09-04
 *
 * By Eli Grey, http://eligrey.com
 * Public domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */

/*! @source https://gist.github.com/1129031 */
/*global document, DOMParser*/

(function (DOMParser) {
  "use strict";

  var proto = DOMParser.prototype,
    nativeParse = proto.parseFromString;

  // Firefox/Opera/IE throw errors on unsupported types
  try {
    // WebKit returns null on unsupported types
    if (new DOMParser().parseFromString("", "text/html")) {
      // text/html parsing is natively supported
      return;
    }
  } catch (ex) {}

  proto.parseFromString = function (markup, type) {
    if (/^\s*text\/html\s*(?:;|$)/i.test(type)) {
      var doc = document.implementation.createHTMLDocument("");
      if (markup.toLowerCase().indexOf("<!doctype") > -1) {
        doc.documentElement.innerHTML = markup;
      } else {
        doc.body.innerHTML = markup;
      }
      return doc;
    } else {
      return nativeParse.apply(this, arguments);
    }
  };
})(DOMParser);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Parsing and serializing XML](/zh-CN/docs/Parsing_and_serializing_XML)
- {{domxref("XMLHttpRequest")}}
- {{domxref("XMLSerializer")}}
- {{jsxref("JSON.parse()")}} - counterpart for {{jsxref("JSON")}} documents.
