---
title: Document：adoptNode() 方法
slug: Web/API/Document/adoptNode
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{ ApiRef("DOM") }}

**`Document.adoptNode()`** 将{{Glossary("node/dom", "节点（DOM）")}}从另一个 {{domxref("Document", "document", "", "1")}} 文档转移至调用该方法的文档中。被采纳的节点及其子树将会从原始文档（如果存在的话）中移除，并且它们的 {{domxref("Node.ownerDocument", "ownerDocument")}} 会变更为当前文档。然后就可以将节点插入到当前文档中。

## 语法

```js-nolint
adoptNode(externalNode)
```

### 参数

- `externalNode`
  - : 采用另一份文件中的节点。

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

- 使用 {{domXref("document.importNode()")}} 克隆；或
- 使用 {{domXref("document.adoptNode()")}} 采用

> **备注：** 虽然 Firefox 目前没有强制执行这一规则，但我们鼓励你遵守这一规则，以提高未来的兼容性。

有关 {{domXref("Node.ownerDocument")}} 问题的更多信息，请参阅 W3C DOM 常见问题。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("document.importNode()")}}
