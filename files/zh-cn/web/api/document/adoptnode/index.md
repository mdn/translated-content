---
title: Document.adoptNode()
slug: Web/API/Document/adoptNode
---

{{ ApiRef("DOM") }}

从其他的 document 文档中获取一个节点。该节点以及它的子树上的所有节点都会从原文档删除 (如果有这个节点的话), 并且它的[`ownerDocument`](/zh-CN/docs/DOM/Node.ownerDocument) 属性会变成当前的 document 文档。之后你可以把这个节点插入到当前文档中。

## 语法

```js-nolint
adoptNode(externalNode)
```

- `externalNode`
  - : 将要从外部文档导入的节点。

## 示例

```js
const iframe = document.querySelector("iframe");
const iframeImages = iframe.contentDocument.querySelectorAll("img");
const newParent = document.getElementById("images");

iframeImages.forEach((imgEl) => {
  newParent.appendChild(document.adoptNode(imgEl));
});
```

## 笔记

有时候调用 adopNode 可能会失败因为节点资源来自不同的源，但是这不应该是浏览器的实现问题。

In general the `adoptNode` call may fail due to the source node coming from a different implementation, however this should not be a problem with browser implementations.

> 译者注：
>
> 该方法不但可以从 iframe 中获取 adopt 元素，在同一 document 文档下的不同两个元素中也可以使用，该方法可以实现从左边栏列表中选取某些元素加载到右边栏的功能。

将外部文档的节点插入当前文档之前，你必须使用 [`document.importNode()`](/zh-CN/docs/Web/API/Document/importNode) 从外部文档导入源节点，或者使用 [`document.adoptNode()`](/zh-CN/docs/Web/API/Document/adoptNode)导入源节点，
想要了解更多的 [`Node.ownerDocument`](/zh-CN/docs/Web/API/Node/ownerDocument) 问题，请参考 [W3C DOM FAQ](http://www.w3.org/DOM/faq.html#ownerdoc).

即使你不执行导入动作，就执行插入外部文档中的节点.Firefox 目前也不会报错 (如果严格按标准执行，很多已有的网站都无法正常运行).
我们鼓励开发者严格按标准修改自己已有的不符合上述标准的代码。

## 规范

- [DOM Level 3 Core: Document.adoptNode](http://www.w3.org/TR/DOM-Level-3-Core/core.html#Document3-adoptNode)

## 参见

- [document.importNode](/zh-CN/docs/DOM/document.importNode)
