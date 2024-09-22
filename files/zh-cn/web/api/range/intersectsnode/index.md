---
title: Range：intersectsNode() 方法
slug: Web/API/Range/intersectsNode
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ApiRef("DOM")}}

**`Range.intersectsNode()`** 方法返回一个指示给定的 {{domxref("Node")}} 是否与 {{domxref("Range")}} 相交的布尔值。

## 语法

```js-nolint
intersectsNode(referenceNode)
```

### 参数

- `referenceNode`
  - : 与 {{domxref("Range")}} 进行比较的 {{domxref("Node")}}。

### 返回值

布尔值。

## 示例

```js
const range = document.createRange();

range.selectNode(document.getElementsByTagName("div").item(0));
const intersectingNode = range.intersectsNode(
  document.getElementsByTagName("p").item(0),
);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [DOM 接口索引](/zh-CN/docs/Web/API/Document_Object_Model)
