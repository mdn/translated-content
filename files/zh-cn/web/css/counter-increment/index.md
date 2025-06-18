---
title: counter-increment
slug: Web/CSS/counter-increment
---

{{CSSRef}}

## 概要

`counter-increment`属性用于将[CSS Counters](/zh-CN/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)的值增加给定值。可以使用 {{cssxref("counter-reset")}} 属性重置计数器的值。

{{cssinfo}}

## 语法

```css
/* Increment counter-name by 1 */
counter-increment: counter-name;

/* Decrement counter-name by 1 */
counter-increment: counter-name -1;

/* Increment counter1 by 1, and decrement counter2 by 4 */
counter-increment: counter 1 counter2 -4;

/* Do not increment/decrement anything: used to hide less specific values */
counter-increment: none;

/* Global values */
counter-increment: inherit;
counter-increment: initial;
counter-increment: unset;
```

### 可选值

- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : 递增的计数器的名称。该标识符由不区分大小写的字母 a 到 z，数字 0 到 9，下划线（\_）和/或短划线（ - ）的组合组成。第一个非破折号字符必须是一个字母（即，在它的开头没有数字，即使前面有破折号。）此外，在标识符的开头禁止使用两个破折号。在任何案例组合中都不能是 none，unset，initial 或 inherit。
- {{cssxref("&lt;integer&gt;")}}
  - : 计数器的值。如果没有给出，默认为 1。
- `none`
  - : 不得增加计数器。用作默认值，或取消更具体规则的增量。

你可以根据需要指定要递增的计数器，每个计数器用空格分隔。

### 语法形式

{{csssyntax}}

## 示例

```css
h1 {
  counter-increment: chapter section 2 page;
  /* Increases the value of the chapter and page counters by 1
     and the section counter by 2. */
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- [CSS Counters](/zh-CN/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), {{Cssxref("counter-reset")}}
