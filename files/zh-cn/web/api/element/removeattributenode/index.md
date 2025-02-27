---
title: Element：removeAttributeNode() 方法
slug: Web/API/Element/removeAttributeNode
l10n:
  sourceCommit: 990ab6637bb4d44f059597262cbf3c51abae79eb
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`removeAttributeNode()`** 方法从元素中移除指定的属性（{{domxref("Attr")}}）节点。

如果你不想在移除属性节点之前检查它是否存在，那么可以改用 {{domxref("Element.removeAttribute()")}} 方法。

## 语法

```js-nolint
removeAttributeNode(attributeNode)
```

### 参数

- `attributeNode`
  - : 要从元素中删除的属性节点。

### 返回值

移除的属性节点。

### 异常

- `NotFoundError` {{DOMxRef("DOMException")}}
  - : 若元素的属性列表中不包含指定属性节点，则抛出该异常。

## 示例

```js
// 给定：<div id="top" align="center" />
const d = document.getElementById("top");
const d_align = d.getAttributeNode("align");
d.removeAttributeNode(d_align);
// 现在 align 已被删除：<div id="top" />
```

## 备注

如果删除有默认值的属性，则会立刻用具有默认值的属性替换。在适用时，替换的属性具有相同的命名空间 URI、本地名称以及原始前缀。

并没有 `removeAttributeNodeNS` 方法；`removeAttributeNode` 方法可以删除命名空间限定属性和非命名空间限定属性。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Document.createAttribute()")}}
- {{domxref("Element.getAttributeNode()")}}
- {{domxref("Element.setAttributeNode()")}}
