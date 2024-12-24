---
title: Node.ownerDocument
slug: Web/API/Node/ownerDocument
---

{{ APIRef("DOM")}}

**Node.ownerDocument** 只读属性会返回当前节点的顶层的 document 对象。

## 语法

```plain
document = node.ownerDocument
```

- `document` 是当前元素的 [`document`](/zh-CN/docs/Web/API/Document) 对象，其是当前元素的祖先。

## 例子

```plain
// 得到 p 元素所在文档的 HTML 节点
d = p.ownerDocument;
html = d.documentElement;
```

## 注意

`被此属性返回的 document` 对象是在实际的 HTML 文档中的所有子节点所属的主对象`。如果在文档节点自身上使用此属性，则结果是 null`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
