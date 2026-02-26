---
title: Node：parentNode 属性
short-title: parentNode
slug: Web/API/Node/parentNode
l10n:
  sourceCommit: 8cdc8bb0ee320abf8a2f54a1a167d1a72ff8a2ca
---

{{APIRef("DOM")}}

{{domxref("Node")}} 接口的 **`parentNode`** 只读属性返回该节点在 DOM 树中的父节点。

`Document` 和 `DocumentFragment` [节点](/zh-CN/docs/Web/API/Node/nodeType)永远不会有父节点，因此 `parentNode` 始终会返回 `null`。如果节点刚被创建、尚未被插入到树中时，也会返回 `null`。相比之下，{{domxref("Node.parentElement")}} 只会返回 `Element` 类型的父节点。

## 值

一个表示当前节点的父节点的 {{domxref("Node")}}。元素的父节点可能是 `Element` 节点、`Document` 节点或 `DocumentFragment` 节点。

## 示例

### 使用 parentNode

此示例会将一个节点从树中移除（如果该节点尚在树中）。

```js
if (node.parentNode) {
  node.parentNode.removeChild(node);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{Domxref("Node.firstChild")}}
- {{Domxref("Node.lastChild")}}
- {{Domxref("Node.childNodes")}}
- {{Domxref("Node.nextSibling")}}
- {{Domxref("Node.parentElement")}}
- {{Domxref("Node.previousSibling")}}
- {{Domxref("Node.removeChild")}}
