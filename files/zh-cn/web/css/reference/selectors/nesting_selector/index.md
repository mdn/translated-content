---
title: "& 嵌套选择器"
slug: Web/CSS/Reference/Selectors/Nesting_selector
l10n:
  sourceCommit: c6b772b874485e67bb8cf8eff8c1874deb2e66c3
---

CSS **`&` 嵌套选择器**明确指示在使用 [CSS 嵌套](/zh-CN/docs/Web/CSS/Guides/Nesting)时，父规则和子规则的关系。它使得内嵌子规则的选择器*相对于其父元素*。若没有 `&` 嵌套选择器，则子规则将选择子元素。子选择器的[优先级](/zh-CN/docs/Web/CSS/Guides/Nesting/Nesting_and_specificity)和它们被包含在 {{cssxref(":is", ":is()")}} 伪类内的情况一样。

> [!NOTE]
> *子规则*不等于*子元素选择器*。子规则可以根据 `&` 嵌套选择器的使用与否来选择父元素或子元素。

如果不在一个嵌套规则里使用，则 `&` 嵌套选择器将代表其[根作用域](/zh-CN/docs/Web/CSS/Reference/Selectors/:scope)。

## 语法

```css
parentRule {
  /* 父规则样式属性 */
  & childRule {
    /* 子规则样式属性 */
  }
}
```

### `&` 嵌套选择器与空格

考虑以下*不使用* `&` 嵌套选择器的嵌套代码。

```css
.parent-rule {
  /* 父规则的属性 */
  .child-rule {
    /* 子规则的属性 */
  }
}
```

当浏览器解析嵌套选择器时，它将自动在选择器之间添加空格以创建新 CSS 选择器规则。以下代码显示不使用嵌套的等价规则：

```css
.parent-rule {
  /* 父规则的属性 */
}

.parent-rule .child-rule {
  /* 样式属性：是 .parent-rule 的子元素且具有 .child-rule 的元素 */
}
```

当嵌套规则需要被附加（无空格）到父规则上时，例如当使用[伪类](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-classes)，或者创建[组合选择器](/zh-CN/docs/Web/CSS/Guides/Selectors/Selector_structure#组合选择器)时，`&` 嵌套选择器必须紧贴在子选择器之前。

考虑以下示例。我们想要为一个元素添加样式，一些是需要永久应用的，而另一些嵌套样式则仅当鼠标悬停时才被应用。如果不添加 `&` 嵌套选择器，浏览器会添加空格，最终我们得到的将是一个匹配*任意被悬停的子元素*的选择器。当然，这才不是我们想要的结果。

```css
.parent-rule {
  /* 父规则的属性 */
  :hover {
    /* 子规则的属性 */
  }
}

/* 浏览器会将以上嵌套规则解析为 */
.parent-rule {
  /* 父规则的属性 */
}

.parent-rule *:hover {
  /* 子规则的属性 */
}
```

在添加 `&` 嵌套选择器（不添加空格）后，由父规则匹配的元素在被悬停时就会应用样式了。

```css
.parent-rule {
  /* 父规则的属性 */
  &:hover {
    /* 子规则的属性 */
  }
}

/* 浏览器会将以上嵌套规则解析为 */
.parent-rule {
  /* 父规则的属性 */
}

.parent-rule:hover {
  /* 子规则的属性 */
}
```

## 后附 `&` 嵌套选择器

`&` 嵌套选择器也可以添加到一个选择器的后方，来反转上下文。

```css
.card {
  /* .card 的样式 */
  .featured & {
    /* .featured .card 的样式 */
  }
}

/* 浏览器会将以上嵌套规则解析为 */

.card {
  /* .card 的样式 */
}

.featured .card {
  /* .featured .card 的样式 */
}
```

`&` 嵌套选择器可以在一个选择器里多次使用：

```css
.card {
  /* .card 的样式 */
  .featured & & & {
    /* .featured .card .card .card 的样式 */
  }
}

/* 浏览器会将以上嵌套规则解析为 */

.card {
  /* .card 的样式 */
}

.featured .card .card .card {
  /* .featured .card .card .card 的样式 */
}
```

## 示例

这两个示例的输出相同。第一个使用常规 CSS 样式，第二个使用 `&` 嵌套选择器。

### 使用常规 CSS 样式

使用常规 CSS 样式的示例。

#### HTML

```html
<p class="example">这段文字<a href="#">包含一个链接</a>，尝试悬停或聚焦它。</p>
```

#### CSS

```css
.example {
  font-family: system-ui;
  font-size: 1.2rem;
}

.example > a {
  color: tomato;
}

.example > a:hover,
.example > a:focus {
  color: ivory;
  background-color: tomato;
}
```

#### 结果

{{EmbedLiveSample('使用常规 CSS 样式','100%','65')}}

### 在嵌套 CSS 样式中使用 `&`

此示例使用嵌套 CSS 样式。

#### HTML

```html
<p class="example">这段文字<a href="#">包含一个链接</a>，尝试悬停或聚焦它。</p>
```

#### CSS

```css
.example {
  font-family: system-ui;
  font-size: 1.2rem;
  & > a {
    color: tomato;
    &:hover,
    &:focus {
      color: ivory;
      background-color: tomato;
    }
  }
}
```

#### 结果

{{EmbedLiveSample('在嵌套 CSS 样式中使用 &','100%','65')}}

### 在嵌套规则外使用 `&`

如果不在一个嵌套规则里使用，则 `&` 嵌套选择器将代表其[根作用域](/zh-CN/docs/Web/CSS/Reference/Selectors/:scope)。

```html
<p>在结果框上方悬停以更改文档的背景颜色。</p>
```

```css
& {
  color: blue;
  font-weight: bold;
}

&:hover {
  background-color: wheat;
}
```

#### 结果

在这个示例中，所有样式均被应用到 [document](/zh-CN/docs/Web/API/Document) 上。

{{EmbedLiveSample('在嵌套规则外使用 &','100%','65')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 CSS 嵌套](/zh-CN/docs/Web/CSS/Guides/Nesting/Using)
- [CSS 嵌套](/zh-CN/docs/Web/CSS/Guides/Nesting)模块
- [CSS 选择器](/zh-CN/docs/Web/CSS/Guides/Selectors)模块
