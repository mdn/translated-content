---
title: document.documentElement
slug: Web/API/Document/documentElement
---

{{ApiRef("DOM")}}

**`Document.documentElement`** 是一个会返回文档对象（{{domxref("document")}}）的根{{domxref("Element", "元素")}}的只读属性（如 HTML 文档的 {{HTMLElement("html")}} 元素）。

## 语法

```plain
var element = document.documentElement;
```

## 示例

```js
const rootElement = document.documentElement;
const firstTier = rootElement.childNodes;

// firstTier 是由根元素的所有子节点组成的一个 NodeList
for (let i = 0; i < firstTier.length; i++) {
  // 使用根节点的每个子节点
  // 如 firstTier[i]
}
```

## 备注

对于任何非空 HTML 文档，调用 `document.documentElement` 总是会返回一个 {{HTMLElement("html")}} 元素，且它一定是该文档的根元素。借助这个只读属性，能方便地获取到任意文档的根元素。

HTML 文档通常包含一个子节点 {{HTMLElement("html")}}，但在它前面可能还有个 DOCTYPE 声明。XML 文档通常包含多个子节点：根元素，DOCTYPE 声明，和 [processing instructions](/zh-CN/docs/DOM/ProcessingInstruction)。

所以，应当使用 `document.documentElement` 来获取根元素，而不是 {{Domxref("document.firstChild")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
