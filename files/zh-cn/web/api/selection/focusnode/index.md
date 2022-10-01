---
title: Selection.focusNode
slug: Web/API/Selection/focusNode
---

{{ ApiRef("DOM") }}{{SeeCompatTable}}

**`Selection.focusNode`** 是只读的，返回所选内容的结束位置部分所属的节点。

用户可能会从左到右 (按文字方向) 或从右到左 (按文字相反方向) 进行选择。focusNode 就是用户选择时最后停下来所处的元素节点。当你同时按下 shift 键和任何一个方向键来改变选择时，你就能看到：选择的结束位置在移动，但是选择的锚点 - 起始位置不会改变。

## 语法

```plain
node = sel.focusNode
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- {{domxref("Selection")}}, Selection 接口规范。
