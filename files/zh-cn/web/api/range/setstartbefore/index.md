---
title: Range：setStartBefore() 方法
slug: Web/API/Range/setStartBefore
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

**`Range.setStartBefore()`** 方法将 {{domxref("Range")}} 的起始位置设置在另一个 {{domxref("Node")}} 之前。{{domxref("Range")}} 起始位置的父 {{domxref("Node")}} 将与 `referenceNode` 的父节点相同。

## 语法

```js-nolint
setStartBefore(referenceNode)
```

### 参数

- `referenceNode`
  - : {{domxref("Range")}} 应该在其之前开始的 {{domxref("Node")}}。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```js
const range = document.createRange();
const referenceNode = document.getElementsByTagName("div").item(0);

range.setStartBefore(referenceNode);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [DOM 接口索引](/zh-CN/docs/Web/API/Document_Object_Model)
