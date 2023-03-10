---
title: overscroll-behavior-y
slug: Web/CSS/overscroll-behavior-y
---

{{CSSRef}}

**`overscroll-behavior-y`** 这个 CSS 属性用来控制当滚动到区域的垂直边界时的浏览器行为。

> **备注：** 详细的解释请访问 {{cssxref("overscroll-behavior")}}。

```css
/* Keyword values */
overscroll-behavior: auto; /* default */
overscroll-behavior: contain;
overscroll-behavior: none;

/* Global values */
overflow: inherit;
overflow: initial;
overflow: unset;
```

{{cssinfo}}

## 语法

`overscroll-behavior-y` 属性可以选用下列值。

### 值

- `auto`
  - : 默认的滚动溢出行为表现的和正常一样。 .
- `contain`
  - : 默认的滚动溢出行为将被内部的元素观察到，(例如：“bounce”效果或者刷新)，但是相邻的区域不会产生连续滚动效果，例如：在下面的元素不会被滚动。
- `none`
  - : 相邻的滚动区域不会有连续滚动效果，并且默认的滚动溢出行为会被阻止。

### 正式语法

{{csssyntax}}

## 示例

```css
.messages {
  height: 220px;
  overflow: auto;
  overscroll-behavior-y: contain;
}
```

详细的解释请访问 {{cssxref("overscroll-behavior")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Take control of your scroll: customizing pull-to-refresh and overflow effects](https://developers.google.com/web/updates/2017/11/overscroll-behavior#demo)
