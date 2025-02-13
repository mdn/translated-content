---
title: :is()
slug: Web/CSS/:is
---

{{CSSRef}}

**`:is()`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)函数以选择器列表作为参数，并选择该列表中任意一个选择器可以选择的元素。这对于以更紧凑的形式编写大型选择器非常有用。

> [!NOTE]
> 最初该选择器被命名为 `:matches()`（以及 `:any()`），但在 [CSSWG issue #3258](https://github.com/w3c/csswg-drafts/issues/3258) 中被重命名为 `:is()`。

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-is.html", "tabbed-shorter")}}

伪元素在 `:is()` 的选择器列表中无效。

### :is() 和 :where() 的区别

两者之间的区别在于，`:is()` 会计入整个选择器的优先级（它采用其最具体参数的优先级），而 [`:where()`](/zh-CN/docs/Web/CSS/:where) 的优先级为 0。这可以通过 [`:where()` 参考页面上的示例](/zh-CN/docs/Web/CSS/:where#示例)来演示。

### 可容错选择器解析

规范将 `:is()` 和 `:where()` 定义为接受[容错选择器列表](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list)。

在 CSS 中，当使用选择器列表时，如果任何一个选择器无效，则整个列表将被视为无效。使用 `:is()` 或 `:where()` 时，如果一个选择器无法解析，整个选择器列表不会被视为无效，而是会忽略不正确或不支持的选择器，并使用其他的选择器。

```css
:is(:valid, :unsupported) {
  /* … */
}
```

即使在不支持 `:unsupported` 的浏览器中，仍将正确解析 `:valid`，而：

```css
:valid,
:unsupported {
  /* … */
}
```

在不支持 `:unsupported` 浏览器中即使它们支持 `:valid`，仍将忽略。

## 示例

### 简化列表选择器

`:is()` 伪类可以大大简化你的 CSS 选择器。例如，考虑以下 CSS：

```css
/* 三层或更深的无序列表使用方形符号。 */
ol ol ul,
ol ul ul,
ol menu ul,
ol dir ul,
ol ol menu,
ol ul menu,
ol menu menu,
ol dir menu,
ol ol dir,
ol ul dir,
ol menu dir,
ol dir dir,
ul ol ul,
ul ul ul,
ul menu ul,
ul dir ul,
ul ol menu,
ul ul menu,
ul menu menu,
ul dir menu,
ul ol dir,
ul ul dir,
ul menu dir,
ul dir dir,
menu ol ul,
menu ul ul,
menu menu ul,
menu dir ul,
menu ol menu,
menu ul menu,
menu menu menu,
menu dir menu,
menu ol dir,
menu ul dir,
menu menu dir,
menu dir dir,
dir ol ul,
dir ul ul,
dir menu ul,
dir dir ul,
dir ol menu,
dir ul menu,
dir menu menu,
dir dir menu,
dir ol dir,
dir ul dir,
dir menu dir,
dir dir dir {
  list-style-type: square;
}
```

你可以将其替换为：

```css
/* 三层或更深的无序列表使用方形符号。 */
:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) :is(ul, menu, dir) {
  list-style-type: square;
}
```

### 简化段落选择器

`:is()` 伪类在处理[段落和标题](/zh-CN/docs/Web/HTML/Element/Heading_Elements)时特别有用。由于 {{HTMLElement("section")}}、{{HTMLElement("article")}}、{{HTMLElement("aside")}} 和 {{HTMLElement("nav")}} 通常嵌套在一起，如果没有 `:is()`，将它们设置为相互匹配很棘手。

例如，没有 `:is()`，在不同的深度对所有 {{HTMLElement("Heading_Elements", "h1")}} 元素进行样式化可能是非常复杂的：

```css
/* 0 级 */
h1 {
  font-size: 30px;
}

/* 1 级 */
section h1,
article h1,
aside h1,
nav h1 {
  font-size: 25px;
}

/* 2 级 */
section section h1,
section article h1,
section aside h1,
section nav h1,
article section h1,
article article h1,
article aside h1,
article nav h1,
aside section h1,
aside article h1,
aside aside h1,
aside nav h1,
nav section h1,
nav article h1,
nav aside h1,
nav nav h1 {
  font-size: 20px;
}

/* 3 级 */
/* 想都别想！ */
```

然而，使用 `:is()` 将容易的多：

```css
/* 0 级 */
h1 {
  font-size: 30px;
}
/* 1 级 */
:is(section, article, aside, nav) h1 {
  font-size: 25px;
}
/* 2 级 */
:is(section, article, aside, nav) :is(section, article, aside, nav) h1 {
  font-size: 20px;
}
/* 3 级 */
:is(section, article, aside, nav)
  :is(section, article, aside, nav)
  :is(section, article, aside, nav)
  h1 {
  font-size: 15px;
}
```

### :is() 不能选择伪元素

`:is()` 伪类不匹配伪元素。所以这样不行：

```css example-bad
some-element:is(::before, ::after) {
  display: block;
}
```

这样可以

```css example-good
some-element::before,
some-element::after {
  display: block;
}
```

## 语法

```css-nolint
:is(<forgiving-selector-list>) {
  /* ... */
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSxRef(":where", ":where()")}}——类似于 `:is()`，但是其[优先级](/zh-CN/docs/Web/CSS/Specificity)为 0。
- [选择器列表](/zh-CN/docs/Web/CSS/Selector_list)
- [Web 组件](/zh-CN/docs/Web/API/Web_components)
