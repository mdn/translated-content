---
title: Document：adoptNode() 方法
slug: Web/API/Document/adoptNode
l10n:
  sourceCommit: 3d4f158c8ab2e1ee7141b59f020e8e5de911ac62
---

{{ ApiRef("DOM") }}

**`Document.adoptNode()`** 将{{Glossary("node/dom", "节点（DOM）")}}从另一个{{domxref("Document", "文档", "", 1)}}转移至调用该方法的文档中。被转移的节点及其子树将会从原始文档（如果存在的话）中移除，并且它们的 {{domxref("Node.ownerDocument", "ownerDocument")}} 会变更为当前文档。然后节点将被插入到当前文档中。

## 语法

```js-nolint
adoptNode(externalNode)
```

### 参数

- `externalNode`
  - : 将要从另一份文档中转移的节点。

### 返回值

在导入文档的作用域中复制的 `importedNode`。

调用此方法后，`importedNode` 和 `externalNode` 是同个对象。

> **备注：** `importedNode` 的 {{domxref("Node.parentNode")}} 为 `null`，因为它尚未插入文档树中！

## 示例

```js
const iframe = document.querySelector("iframe");
const iframeImages = iframe.contentDocument.querySelectorAll("img");
const newParent = document.getElementById("images");

iframeImages.forEach((imgEl) => {
  newParent.appendChild(document.adoptNode(imgEl));
});
```

## 备注

在将来自外部文档的节点插入到当前文档之前，应该先进行以下操作之一：

- 使用 {{domXref("document.importNode()")}} 进行克隆；或
- 使用 `document.adoptNode()` 进行转移。

有关 {{domXref("Node.ownerDocument")}} 问题的更多信息，请参阅 [W3C DOM 常见问题](https://www.w3.org/DOM/faq.html#ownerdoc)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("document.importNode()")}}
