---
title: Window.scrollByLines()
slug: Web/API/Window/scrollByLines
---

{{ ApiRef() }}

{{Non-standard_header}}

## 概要

按给定的行数滚动文档。

## 语法

```plain
window.scrollByLines(lines)
```

## 参数

- `lines` 要滚动的行数。
- `lines` 可以是正整数，也可以是负整数。

## 例子

```html
<!-- 向下滚动 5 行。 -->
<button onclick="scrollByLines(5);">down 5 lines</button>
```

```html
<!-- 向上滚动 5 行。 -->
<button onclick="scrollByLines(-5);">up 5 lines</button>
```

## 规范

这不是任何规范的一部分。

## 参考

- {{domxref("window.scrollBy")}}, {{domxref("window.scrollByPages")}}
