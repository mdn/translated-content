---
title: Selection.modify()
slug: Web/API/Selection/modify
---

{{ ApiRef("DOM") }}{{non-standard_header}}

**`Selection.modify()`** 方法可以通过简单的文本命令来改变当前选区或光标位置。

## 语法

```js-nolint
modify(alter, direction, granularity)
```

### 参数

- _alter_
  - : 改变类型。传入 `"move"` 来移动光标位置，或者 `"extend"` 来扩展当前选区。
- _direction_
  - : 调整选区的方向。你可以传入 `"forward"` 或 `"backward"` 来根据选区内容的语言书写方向来调整。或者使用 `"left"` 或 `"right"` 来指明一个明确的调整方向。
- _granularity_
  - : 调整的距离颗粒度。可选值有 `"character"`、`"word"`、`"sentence"`、`"line"`、`"paragraph"`、`"lineboundary"`、`"sentenceboundary"`、`"paragraphboundary"`、`"documentboundary"`。

> [!NOTE]
> Gecko **不支持** `"sentence"`, `"paragraph"`, `"sentenceboundary"`, `"paragraphboundary"` 和 `"documentboundary"`. Webkit 和 Blink 支持。

> [!NOTE]
> 从 Gecko 5.0 开始，不管是不是浏览器的默认行为，`"word"` 颗粒度不再包括单词后面的空格。这让这个行为变得更加稳定，这也和之前的 Webkit 保持一致，然而不幸的是他们最近修改了这个默认行为。

## 示例

使当前选区往语言书写方向扩大一个单词（word）的选择范围

```js
var selection = window.getSelection();
selection.modify("extend", "forward", "word");
```

## 规范

_无。_

## 浏览器兼容性

{{Compat}}

## 参见

- 此方法所属的接口：{{domxref("Selection")}}。
