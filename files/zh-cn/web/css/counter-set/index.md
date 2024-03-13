---
title: counter-set
slug: Web/CSS/counter-set
---

{{CSSRef}}

**`counter-set`** [CSS](/zh-CN/docs/Web/CSS) 属性将 [CSS 计数器](/zh-CN/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)设置为给定值。它会操作现有计数器的值，并且只有在元素上没有给定名称的计数器时才会创建新计数器。

{{EmbedInteractiveExample("pages/css/counter-set.html")}}

> **备注：** 计数器的值可以通过 {{cssxref("counter-increment")}} CSS 属性进行递增或递减。

## 语法

```css
/* 将 "my-counter" 设置为 0 */
counter-set: my-counter;

/* 将 "my-counter" 设置为 -1 */
counter-set: my-counter -1;

/* 将 "counter1" 设置为 1，将 "counter2" 设置为 4 */
counter-set: counter1 1 counter2 4;

/* 取消在不太具体的规则中可能设置的任何计数器 */
counter-set: none;

/* 全局值 */
counter-set: inherit;
counter-set: initial;
counter-set: revert;
counter-set: revert-layer;
counter-set: unset;
```

`counter-set` 属性可以指定为以下之一：

- 一个命名计数器的 `<custom-ident>`，后面可跟一个 `<integer>`。你可以指定要重置的计数器数量，每个名称或名称—数字对之间用空格分隔。
- 关键字值 `none`。

### 值

- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : 要设置的计数器的名称。
- {{cssxref("&lt;integer&gt;")}}
  - : 在元素每次出现时设置计数器的值。如果未指定，则默认为 `0`。如果当前元素上没有给定名称的计数器，元素将创建一个给定名称的新计数器，起始值为 0（尽管它可能会立即将该值设置或增加为不同的值）。
- `none`
  - : 不执行计数器设置。这可以用来覆盖在较不具体的规则中定义的 `counter-set`。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置命名计数器

```css
h1 {
  counter-set: chapter section 1 page;
  /* 将章节和页面计数器设置为 0，
     将部分计数器设置为 1 */
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 CSS 计数器](/zh-CN/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)
- {{cssxref("counter-increment")}}
- {{cssxref("counter-reset")}}
- {{cssxref("@counter-style")}}
- {{cssxref("counter", "counter()")}} 和 {{cssxref("counters", "counters()")}} 函数
- {{cssxref("content")}} 属性
