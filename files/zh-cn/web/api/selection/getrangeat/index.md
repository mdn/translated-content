---
title: Selection.getRangeAt()
slug: Web/API/Selection/getRangeAt
---

{{APIRef}}**概述**

返回一个包含当前选区内容的区域对象。

## 语法

```plain
range = sel.getRangeAt(index)
```

### 参数

- _`range`_
  - : 将返回 [range](/zh-CN/docs/DOM/range) 对象。
- _`index`_
  - : 该参数指定需要被处理的子集编号（从零开始计数）。如果该数值被错误的赋予了大于或等于 [rangeCount](/zh-CN/docs/DOM/Selection/rangeCount) 结果的数字，将会产生错误。

## 例子

```js
let ranges = [];

sel = window.getSelection();

for (var i = 0; i < sel.rangeCount; i++) {
  ranges[i] = sel.getRangeAt(i);
}
/* 在 ranges 数组的每一个元素都是一个 range 对象，
 * 对象的内容是当前选区中的一个。 */
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [Tree Selection](/zh-CN/docs/XUL_Tutorial/Tree_Selection) (for the `getRangeAt()` method on the `nsITreeSelection` interface)
