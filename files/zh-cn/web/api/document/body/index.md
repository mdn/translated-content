---
title: Document：body 属性
slug: Web/API/Document/body
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

**`Document.body`** 属性表示当前文档的 {{HTMLElement("body")}} 或 {{HTMLElement("frameset")}} 节点，如果不存在此类元素，则为 `null`。

## 值

以下其中一项：

- {{HTMLElement("body")}}
- {{HTMLElement("frameset")}}
- `null`

## 示例

```js
// 给定以下 HTML：<body id="oldBodyElement"></body>
alert(document.body.id); // “oldBodyElement”

const aNewBodyElement = document.createElement("body");

aNewBodyElement.id = "newBodyElement";
document.body = aNewBodyElement;
alert(document.body.id); // “newBodyElement”
```

## 备注

`document.body` 是包含文档内容的元素。在具有 `<body>` 内容的文档中，返回 `<body>` 元素，在框架集文档中，返回最外层的 `<frameset>` 元素。

虽然 `body` 属性是可设置的，但在文档中设置一个新的 body 会有效地移除现有 `<body>` 元素的所有当前子元素。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("document.head")}}
