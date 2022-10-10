---
title: document.importNode
slug: Web/API/Document/importNode
---

{{ ApiRef() }}

## 概述

将外部文档的一个节点拷贝一份，然后可以把这个拷贝的节点插入到当前文档中。

## 语法

```
var node = document.importNode(externalNode, deep);
```

- `node`
  - : 导入当前文档的新节点。新节点的 [`parentNode`](/zh-CN/DOM/Node.parentNode) 是 `null`, 因为它还没有插入当前文档的文档树中，属于游离状态。
- `externalNode`
  - : 将要从外部文档导入的节点。
- `deep` {{ optional_inline() }}
  - : 一个布尔值，表明是否要导入节点的后代节点。

> **备注：** 在 DOM4 规范中 (实现于 Gecko 10.0 {{ geckoRelease("10.0") }}), `deep` 是个可选的参数。如果省略不写，则使用默认值 `true`, 表示深度克隆。如果你想使用浅克隆，则传入 false 参数。
>
> 在没有实现 DOM4 的浏览器中，这个参数不可以省略。

## 例子

```js
var iframe = document.getElementsByTagName("iframe")[0];
var oldNode = iframe.contentDocument.getElementById("myNode");
var newNode = document.importNode(oldNode, true);
document.getElementById("container").appendChild(newNode);
```

## 备注

源节点不会从外部文档中删除，被导入的节点是源节点的一个拷贝。

将外部文档的节点插入当前文档之前，你必须使用 [`document.importNode()`](/zh-CN/docs/Web/API/Document/importNode) 从外部文档导入源节点，或者使用 [`document.adoptNode()`](/zh-CN/docs/Web/API/Document/adoptNode)导入源节点，想要了解更多的 [`Node.ownerDocument`](/zh-CN/docs/Web/API/Node/ownerDocument) 问题，请参考 [W3C DOM FAQ](http://www.w3.org/DOM/faq.html#ownerdoc).

即使你不执行导入动作，就执行插入外部文档中的节点.Firefox 目前也不会报错 (如果严格按标准执行，很多已有的网站都无法正常运行). 我们鼓励开发者严格按标准修改自己已有的不符合上述标准的代码。

## 浏览器兼容性

{{Compat}}

## 规范

- [DOM Level 2 Core: Document.importNode](http://www.w3.org/TR/DOM-Level-2-Core/core.html#Core-Document-importNode)
- [DOM4 (draft): Document.importNode](http://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html#dom-document-importnode)

## 相关介绍

- {{ domxref("document.adoptNode()") }}
