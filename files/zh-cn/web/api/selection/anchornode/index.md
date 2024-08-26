---
title: Selection.anchorNode
slug: Web/API/Selection/anchorNode
---

{{ApiRef}}

## 概述

**`Selection.anchorNode`** 只读属性返回选区开始位置所属的节点（{{domxref("Node")}}）。

## 语法

```plain
sel.anchorNode
```

## 注意

用户可能从左至右进行框选（沿着文字顺序）或者从右至左框选（沿着文字顺序的反方向）。锚点位于用户开始选择的位置。可以通过按住 Shift 和方向键来得知锚点所在的位置。选区的锚点是不会移动的，但是选区的焦点、选区其他的结束位置（多个选区，译者注）可以移动。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("Selection")}}, 此属性所属接口。
