---
title: Range：setEnd() 方法
slug: Web/API/Range/setEnd
---

{{ApiRef("DOM")}}

**`Range.setEnd()`** 方法用于将 {{domxref("Range")}} 的结束位置设置为指定节点中给定偏移量处。如果将结束点设置在起始点之上（即文档结构中更高的位置），则会导致范围折叠，起始点和结束点都会被设置为指定的结束位置。

## 语法

```js-nolint
setEnd(endNode, endOffset)
```

### 参数

- `endNode`
  - : 应当作为 {{ domxref("Range") }} 结束位置的 {{ domxref("Node") }}。
- `endOffset`
  - : 一个大于或等于零的整数，表示 `Range` 的结束位置相对于 `endNode` 起始点的偏移量。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```js
const range = document.createRange();
const endNode = document.getElementsByTagName("p").item(3);
const endOffset = endNode.childNodes.length;
range.setEnd(endNode, endOffset);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [DOM 接口索引](/zh-CN/docs/Web/API/Document_Object_Model)
