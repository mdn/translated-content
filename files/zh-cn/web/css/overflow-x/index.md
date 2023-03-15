---
title: overflow-x
slug: Web/CSS/overflow-x
---

{{ CSSRef() }}

{{ SeeCompatTable() }}

## 概述

当一个块级元素的内容在水平方向发生溢出时，[CSS](/zh-CN/CSS)属性 overflow-x 决定应该截断溢出内容，或者显示滚动条，或者直接显示溢出内容。

{{cssinfo}}

## 用法

```
合法值: {{csssyntax("overflow-x")}}
```

```
overflow-x: visible
overflow-x: hidden
overflow-x: scroll
overflow-x: auto

overflow-x: inherit
```

### 解释

- `visible`
  - : 内容不会被截断，且可以显示在内容盒之外。当 {{cssxref("overflow-y")}} 的值为 `hidden`、`scroll` 或者 `auto`，而本属性的值为 `visible` 时，本属性会被隐式的计算为 `auto`。
- `hidden`
  - : 内容会被截断，且不会显示滚动条。
- `scroll`
  - : 桌面浏览器总是显示滚动条，无论内容是否发生溢出。这可以避免滚动条的显示与消失所导致的元素尺寸不确定的问题。而打印机可能会打印溢出的内容。
- `auto`
  - : 取决于浏览器本身。当内容发生溢出时，桌面浏览器如 Firefox 会显示滚动条。

## 示例

```
[fixme]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关 CSS 属性：{{ cssxref("text-overflow") }}, {{ cssxref("white-space") }}, {{ Cssxref("overflow") }}, {{ Cssxref("overflow-y") }}, {{ Cssxref("clip") }}, {{ Cssxref("display") }}
