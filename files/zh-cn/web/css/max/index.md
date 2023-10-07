---
title: max()
slug: Web/CSS/max
---

{{CSSRef}}

**`max()`** 这个 CSS 函数让你可以从一个逗号分隔的表达式列表中选择最大（正方向）的值作为属性的值 . `max()` 可以用于以下场合 {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}}, 或 {{CSSxRef("&lt;integer&gt;")}} 。

```css
/* property: max(expression [, expression]) */
width: max(10vw, 4em, 80px);
```

在上面这个例子中，宽度最小会是 80px，除非视图宽度大于 800px 或者是一个 em 比 20px 宽。简单来说，最小宽度是 80px。你也可以认为 max() 的值提供了一个属性最小可能的值。

## 语法

`max()` 方法接受一个或多个用逗号分隔的表达式作为他的参数，数值最大的表达式的值将会作为指定的属性的值。

表达式可以是数学运算 (可在 {{CSSxRef("calc", "calc()")}} 了解更多信息), 直接数值，或者是其他表达式，例如 attr()，这将会计算成一个合法的参数类型（例如 {{CSSxRef("&lt;length&gt;")}}），也可以是嵌套的 {{CSSxRef("min", "min()")}} 和 `max()` 函数。

你可以使用你的表达式中分别使用不同的单位。需要时，你也可以使用小括号来设定运算顺序。

### 备注

- Math expressions involving percentages for widths and heights on table columns, table column groups, table rows, table row groups, and table cells in both auto and fixed layout tables _may_ be treated as if `auto` had been specified.
- It is permitted to nest `min()` and other `max()` functions as expression values. The expressions are full math expressions, so you can use direct addition, subtraction, multiplication and division without using the calc() function itself.
- The expression can be values combining the addition ( + ), subtraction ( - ), multiplication ( \* ) and division ( / ) operators, using standard operator precedence rules. Make sure to put a space on each side of the + and - operands. The operands in the expression may be any \<length> syntax value.
- Oftentimes you will want to combine `min()` and `max()` values, or use `max()` within a `clamp()` or `calc()` function.

### 形式语法

{{CSSSyntax}}

## 示例

### 为字体设定一个最小字号

Another use case for CSS functions is allow a font size to grow while ensuring it is at least a mimum size, enabling responsive font sizes while ensuring legibility.

Let's look at some CSS:

```css
h1 {
  font-size: 2rem;
}
h1.responsive {
  font-size: max(4vw, 2em, 2rem);
}
```

The font-size will at minimum be 2rems, or twice the default size of font for the page. This ensure it is legible and ensures accessibility

```html
<h1>This text is always legible, but doesn't change size</h1>
<h1 class="responsive">
  This text is always legible, and is responsive, to a point
</h1>
```

{{EmbedLiveSample("为字体设定一个最小字号", "100%", "300")}}

Think of the `max()` function as finding the minimum value allowed for a property.

## 无障碍

When `max()` is used for controlling text size, make sure the text is always large enough to read. A suggestion is to use the {{CSSxRef("min", "min()")}} function nested within a `max()` that has as its second value a [relative length unit](/zh-CN/docs/Web/CSS/length#Relative_length_units) that is always large enough to read. For example:

```css
small {
  font-size: max(min(0.5vw, 0.5em), 1rem);
}
```

This ensures a minimum size of _1rem_, with a text size that scales if the page is zoomed.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSxRef("calc", "calc()")}}
- {{CSSxRef("clamp", "clamp()")}}
- {{CSSxRef("min", "min()")}}
- [CSS Values](/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Values_and_units)
