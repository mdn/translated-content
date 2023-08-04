---
title: 选择器列表
slug: Web/CSS/Selector_list
---

{{CSSRef}}

CSS **选择器列表**（`,`）选择所有匹配的节点。选择器列表是以逗号分隔的多个选择器所组成的列表。

## 描述

当多个选择器共享相同的声明时，它们可以被编组进一个以逗号分隔的列表。选择器列表也可以作为参数传递给一些函数式 CSS 伪类。逗号之前和/或之后可以有空白（字符）。

以下三个声明是等效的：

```css
span {
  border: red 2px solid;
}
div {
  border: red 2px solid;
}
```

```css
span,
div {
  border: red 2px solid;
}
```

```css
:is(span, div) {
  border: red 2px solid;
}
```

## 示例

当对匹配不同条件的元素应用相同的样式时，将选择器编组进一个以逗号分隔的列表中可以在提高样式表的一致性的同时减小尺寸。

### 单行编组

此示例显示了将选择器编组进一个以逗号分隔的单行列表。

```css
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: helvetica;
}
```

### 多行编组

此示例显示了将选择器编组进以逗号分隔的多行列表。

```css
#main,
.content,
article,
h1 + p {
  font-size: 1.1em;
}
```

## 有效和无效的选择器列表

一个无效的选择器匹配不到任何东西，因此不表示任何东西。当一个选择器列表包含一个无效的选择器时，整个样式块将被忽略，除了接受可容错选择器列表的函数式伪类。

### 无效的选择器列表

使用选择器列表的一个缺点是选择器列表中的单个不受支持的选择器会使整个规则无效化。

思考以下两个 CSS 规则集：

```css
h1 {
  font-family: sans-serif;
}
h2:invalid-pseudo {
  font-family: sans-serif;
}
h3 {
  font-family: sans-serif;
}
```

```css
h1,
h2:invalid-pseudo,
h3 {
  font-family: sans-serif;
}
```

它们不是等效的。在第一个规则集中，样式将应用于 `h1` 和 `h3` 元素，但 `h2:invalid-pseudo` 规则将不会被解析。在第二个规则集中，由于列表中的一个选择器是无效的，整个规则都将不会被解析。因此，没有样式会被应用到 `h1` 和 `h3` 元素：当一个选择器列表中任意选择器无效时，整个样式块将被忽略。

### 可容错选择器列表

解决[无效的选择器列表](#无效的选择器列表)问题的一种方法是使用 {{CSSxRef(":is", ":is()")}} 或 {{CSSxRef(":where", ":where()")}} 伪类，它们接受一个可容错选择器列表。可容错选择器列表中的每个选择器都被单独解析。因此列表中任何无效的选择器会被忽略，而有效的选择器则会被有效使用。

继续上一个示例，以下两个 CSS 规则集现在是等效的：

```css
h1 {
  font-family: sans-serif;
}
h2:maybe-unsupported {
  font-family: sans-serif;
}
h3 {
  font-family: sans-serif;
}
```

```css
:is(h1, h2:maybe-unsupported, h3) {
  font-family: sans-serif;
}
```

这两个的区别在于 `:is()` 的优先级是它最具体的参数，而 `:where()` 选择器和可容错选择器列表参数则不添加任何优先级权重。

### 可容错相对选择器列表

可容错相对选择器列表类似于[可容错选择器列表](#可容错选择器列表)；它只是将列表的组成部分按[相对选择器](/zh-CN/docs/Web/CSS/CSS_selectors#相对选择器)来解析，以显式或隐式的组合器开头。

```css
h2:has(+ p, > ul::after, + ul.red) {
  font-style: italic;
}
```

上面，紧跟在 `<p>` 或 `<ul class="red">` 之后的 `h2` 将会是斜体。虽然 [`:has()`](/zh-CN/docs/Web/CSS/:has) 可容错相对选择器列表参数中的伪元素是无效的，但因为列表是可容错的，它不会“中断”选择器。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 伪类 [`:is()`](/zh-CN/docs/Web/CSS/:is)、[`:where()`](/zh-CN/docs/Web/CSS/:where)、[`:not()`](/zh-CN/docs/Web/CSS/:not) 和 [`:has()`](/zh-CN/docs/Web/CSS/:has) 接受可容错选择器列表。
- [CSS 选择器](/zh-CN/docs/Web/CSS/CSS_selectors)
