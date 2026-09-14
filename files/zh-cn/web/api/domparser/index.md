---
title: DOMParser
slug: Web/API/DOMParser
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

{{APIRef("DOM")}}

**`DOMParser`** 接口提供了将字符串中的 {{Glossary("XML")}} 或 {{Glossary("HTML")}} 源代码解析为 DOM {{domxref("Document")}} 的功能。

你可以使用 {{domxref("XMLSerializer")}} 接口执行相反的操作——将 DOM 树转换为 XML 或 HTML 源代码。

对于 HTML 文档，你也可以通过设置 {{domxref("Element.innerHTML")}} 和 {{domxref("Element.outerHTML", "outerHTML")}} 属性的值，将部分 DOM 替换为由 HTML 构建的新 DOM 树。

请注意，{{domxref("XMLHttpRequest")}} 可以直接从一个可通过 URL 访问的资源中解析 XML 和 HTML，并将 `Document` 返回到其 {{domxref("XMLHttpRequest.response", "response")}} 属性中。

> [!NOTE]
> 请注意，如果在一个[块级元素](/zh-CN/docs/Glossary/Block-level_content)（例如 `<p>`）内部嵌套了另一个块级元素，因而该嵌套元素在闭合的 `</p>` 标签之前被解析，那么元素将会被自动闭合。

## 构造函数

- {{domxref("DOMParser.DOMParser","DOMParser()")}}
  - : 创建一个新的 `DOMParser` 对象。

## 实例方法

- {{domxref("DOMParser.parseFromString()")}}
  - : 使用 HTML 解析器或 XML 解析器解析字符串，并返回一个 {{domxref("HTMLDocument")}} 或 {{domxref("XMLDocument")}}。

## 示例

{{domxref("DOMParser.parseFromString()")}} 是该接口的唯一方法，其文档中包含了用于解析 XML、SVG 和 HTML 字符串的示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [解析或序列化 XML](/zh-CN/docs/Web/XML/Guides/Parsing_and_serializing_XML)
- {{domxref("XMLHttpRequest")}}
- {{domxref("XMLSerializer")}}
- {{jsxref("JSON.parse()")}}——{{jsxref("JSON")}} 文档的对应方法。
