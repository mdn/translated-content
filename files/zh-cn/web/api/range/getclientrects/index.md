---
title: Range.getClientRects()
slug: Web/API/Range/getClientRects
---

{{ApiRef("DOM")}}

**`Range.getClientRects()`** 方法返回一个 {{ domxref("DOMRect") }} 对象列表，表示 [range](/zh-CN/docs/Web/API/range) 在屏幕上所占的区域。这个列表相当于汇集了范围中所有元素调用 {{ domxref("Element.getClientRects()") }} 方法所得的结果。

## 语法

```plain
rectList = range.getClientRects()
```

## 示例

```js
range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
rectList = range.getClientRects();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Range")}}
