---
title: Node.ownerDocument
slug: Web/API/Node/ownerDocument
---

{{APIRef("DOM")}}

{{domxref("Node")}} 接口的只读属性 **ownerDocument** 会返回该节点所属的顶层 document 对象。

## 值


一个 {{domxref("Document")}}，是所有子节点都在其中创建的顶层对象。

如果在文档节点自身上使用此属性，则结果是 `null`。

## 例子

```js
// 得到 p 元素所在文档的 HTML 节点 给定一个节点 "p"，获取文档对象的顶级 HTML 子元素

const d = p.ownerDocument;
const html = d.documentElement;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
