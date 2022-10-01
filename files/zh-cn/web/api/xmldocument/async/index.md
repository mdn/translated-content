---
title: XMLDocument.async
slug: Web/API/XMLDocument/async
---

{{APIRef("DOM")}}{{Non-standard_header}}{{Deprecated_header}}

`document.async` 可以被赋值，用来表明 [`document.load`](/zh-CN/DOM/document.load) 被调用时，是使用异步模式还是同步模式进行请求。`true` 为默认值，表明该文档应该被异步加载。

(从 Gecko 1.4alpha 开始，文档请求可以以异步模式进行，在这之前，只有同步模式可用。)

## 代码示例

```plain
function loadXMLData(e)
{
alert(new XMLSerializer().serializeToString(e.target)); // 返回一个包含 querydata.xml 内容的字符串。
}

var xmlDoc = document.implementation.createDocument("", "test", null);
xmlDoc.async = false;
xmlDoc.onload = loadXMLData;
xmlDoc.load('querydata.xml');
```

## 相关链接

- [XML in Mozilla](/zh-CN/XML_in_Mozilla)
- {{DOMxRef("XMLDocument.load()")}}
