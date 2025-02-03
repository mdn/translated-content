---
title: Range.selectNode()
slug: Web/API/Range/selectNode
---

{{ApiRef("DOM")}}

**`Range.selectNode()`** 方法将 {{domxref("Range")}} 设置为包含整个 {{domxref("Node")}} 及其内容。{{domxref("Range")}} 的起始和结束节点的父节点与 _referenceNode_ 的父节点相同。

## 语法

```js-nolint
selectNode(referenceNode)
```

### 参数

- _referenceNode_
  - : {{domxref("Range")}} 要包含的 {{domxref("Node")}}。

## 示例

```js
var range = document.createRange();
var referenceNode = document.getElementsByTagName("div").item(0);

range.selectNode(referenceNode);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [The DOM interfaces index](/zh-CN/docs/Web/API/Document_Object_Model)
