---
title: Selection.focusOffset
slug: Web/API/Selection/focusOffset
---

{{ ApiRef("DOM") }}{{SeeCompatTable}}

只读属性 **`Selection.focusOffset`** 返回选区终点（鼠标松开瞬间所记录的那个点）在焦点（{{domxref("Selection.focusNode")}}）中的偏移量。返回值从零开始计数，如果选区（{{domxref("Selection")}}）在焦点（{{domxref("Selection.focusNode")}}）的第一个字符前结束，返回值为 0。

## 语法

```plain
offset = sel.focusOffset
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("Selection")}}, 这个属性所属的接口。
