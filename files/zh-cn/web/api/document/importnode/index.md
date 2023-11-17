---
title: document.importNode
slug: Web/API/Document/importNode
---

{{APIRef("DOM")}}

将外部文档的一个节点拷贝一份，然后可以把这个拷贝的节点插入到当前文档中。

## 语法

```js-nolint
importNode(externalNode)
importNode(externalNode, deep)
```

- `externalNode`
  - : 导入当前文档的外部 {{domxref("Node")}} 或 {{domxref("DocumentFragment")}}。
- `deep` {{ optional_inline() }}

  - : 一个布尔值，默认为 `false`。表明是否要导入 `externalNode` 的整个 DOM 子树。

    - `deep` 设置为 `true`，则拷贝 `externalNode` 和它的所有后代。
    - `deep` 设置为 `false`，则仅拷贝 `externalNode`——新的节点没有后代。

## 示例

```js
const iframe = document.querySelector("iframe");
const oldNode = iframe.contentWindow.document.getElementById("myNode");
const newNode = document.importNode(oldNode, true);
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

## 参见

- {{ domxref("document.adoptNode()") }}
