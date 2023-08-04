---
title: Document.body
slug: Web/API/Document/body
---

{{APIRef("DOM")}}

**`Document.body`** 表示当前文档中的 {{HTMLElement("body")}} 或 {{HTMLElement("frameset")}} 元素，如果不存在此类元素，则为 `null`。

## 值

以下之一：

- {{HTMLElement("body")}}
- {{HTMLElement("frameset")}}
- `null`

## 示例

```js
// 如果 HTML 结构为：<body id="oldBodyElement"></body>
alert(document.body.id); // "oldBodyElement"

var aNewBodyElement = document.createElement("body");

aNewBodyElement.id = "newBodyElement";
document.body = aNewBodyElement;
alert(document.body.id); // "newBodyElement"
```

## 备注

`document.body` 是包含当前页面内容的元素，对于拥有 `<body>` 元素的文档来说，返回的是 `<body>` 元素，对于拥有 `<frameset>` 元素的文档来说，返回的是最外层的 `<frameset>` 元素。

`body` 属性是可写的，如果为一个文档设置一个新的 body，当前 `<body>` 中存在的所有子元素都将被有效地移除。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("document.head")}}
