---
title: Node：ownerDocument 属性
slug: Web/API/Node/ownerDocument
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

{{domxref("Node")}} 接口的只读属性 **`ownerDocument`** 会返回该节点所属的顶层 document 对象。

## 值

一个 {{domxref("Document")}}，是所有子节点都在其中创建的顶层对象。

如果在文档节点自身上使用此属性，则值为 `null`。

## 示例

```js
// 给定一个节点 "p"，获取文档对象的顶级 HTML 子元素

const d = p.ownerDocument;
const html = d.documentElement;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
