---
title: Node.contains()
slug: Web/API/Node/contains
---

{{APIRef("DOM")}}

{{domxref("Node")}} 接口的 **`contains()`** 方法返回一个布尔值，表示一个节点是否是给定节点的后代，即该节点本身、其直接子节点（{{domxref("Node.childNodes", "childNodes")}}）、子节点的直接子节点等。

> **备注：** 节点*包含*在自身内部。

## 语法

```js-nolint
contains(otherNode)
```

## 参数

- `otherNode`

  - : 要测试的[节点](/zh-CN/docs/Web/API/Node)。

    > **备注：** `otherNode` 不是可选的，但是可以设置为 `null`。

## 返回值

返回一个布尔值，如果 `otherNode` 包含在节点中会返回 `true`，否则返回 `false`。

如果 `otherNode` 参数为 `null`，则 `contains()` 始终返回 `false`。

## 示例

下面的函数用来检查一个元素是否是 body 元素的后代元素。由于 `contains` 会包含元素自身，而确定 body 是否包含自身不是设计 `isInPage` 的意图，这种情况明确返回 `false`。

```js
function isInPage(node) {
  return node === document.body ? false : document.body.contains(node);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Node.compareDocumentPosition")}}
- {{domxref("Node.hasChildNodes")}}
