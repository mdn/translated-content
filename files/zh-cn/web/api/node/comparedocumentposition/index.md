---
title: Node.compareDocumentPosition
slug: Web/API/Node/compareDocumentPosition
---

{{ ApiRef("DOM") }}

**`Node.compareDocumentPosition()`** 可以比较当前节点与任意文档中的另一个节点的位置关系。

返回值是一个具有以下值的位掩码：

| 常量名                                      | 十进制值 | 含义                   |
| ------------------------------------------- | -------- | ---------------------- |
| `DOCUMENT_POSITION_DISCONNECTED`            | 1        | 不在同一文档中         |
| `DOCUMENT_POSITION_PRECEDING`               | 2        | otherNode 在 node 之前 |
| `DOCUMENT_POSITION_FOLLOWING`               | 4        | otherNode 在 node 之后 |
| `DOCUMENT_POSITION_CONTAINS`                | 8        | otherNode 包含 node    |
| `DOCUMENT_POSITION_CONTAINED_BY`            | 16       | otherNode 被 node 包含 |
| `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC` | 32       | 待定                   |

## 语法

```
compareMask = node.compareDocumentPosition( otherNode )
```

### 参数

- `otherNode`
  - : 用于比较位置的 `Node` 。

### 返回值

一个表示 `Node` 和 `otherNode` 在 {{domxref("Document")}} 中关系的整数值。在一些场景下，可能设置了不止一位比特值。比如 `otherNode` 在文档中是靠前的且包含了 `Node`, 那么`DOCUMENT_POSITION_CONTAINS` 和 `DOCUMENT_POSITION_PRECEDING` 位都会设置，所以结果会是 0x0A 即十进制下的 10。

## 例子

```js
var head = document.getElementsByTagName("head").item(0);
if (
  head.compareDocumentPosition(document.body) & Node.DOCUMENT_POSITION_FOLLOWING
) {
  console.log("well-formed document");
} else {
  console.log("<head> is not before <body>");
}
```

> **备注：** 因为`compareDocumentPosition`返回的是一个位掩码，所以必须再使用[按位与运算符](/zh-CN/docs/JavaScript/Reference/Operators/Bitwise_Operators)才能得到有意义的值。

注意第一条语句使用了带有参数 0 的 {{domxref("NodeList.item()")}} 方法，它和 getElementsByTagName('head')\[0] 是一样的。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [`Node.contains`](/zh-CN/docs/DOM/Node.contains)
- [John Resig - Comparing Document Position](http://ejohn.org/blog/comparing-document-position/)
