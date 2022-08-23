---
title: ':not()'
slug: Web/CSS/:not
---
{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes) **`:not()`** 用来匹配不符合一组选择器的元素。由于它的作用是防止特定的元素被选中，它也被称为*反选伪类*（_negation pseudo-class_）。

```css
/* 选择所有不是段落（p）的元素 */
:not(p) {
  color: blue;
}
```

> **备注：**
>
> - `:not()` 伪类不能被嵌套，这意味着 `:not(:not(...))` 是无效的。
> - 由于伪元素不是简单的选择器，他们不能被当作 `:not()` 中的参数，形如 `:not(p::before)` 这样的选择器将不会工作。
> - 可以利用这个伪类写一个完全没有用处的选择器。例如， `:not(*)` 匹配任何非元素的元素，因此，这个规则将永远不会被应用。
> - 可以利用这个伪类提高规则的[优先级](/zh-CN/docs/Web/CSS/Specificity)。例如， `#foo:not(#bar)` 和 `#foo` 会匹配相同的元素，但是前者的优先级更高。
> - `:not(.foo)` 将匹配任何非 `.foo` 的元素，_包括 {{HTMLElement("html")}} 和 {{HTMLElement("body")}}_。
> - 这个选择器只会应用在一个元素上，无法用它来排除所有父元素。比如， `body :not(table) a` 依旧会应用到表格元素 {{HTMLElement("table")}} 内部的 {{HTMLElement("a")}} 上，因为 {{HTMLElement("tr")}}将会被 `:not(table)` 这部分选择器匹配。

## 语法

`:not()` 伪类可以将一个或多个以逗号分隔的选择器列表作为其参数。选择器中不得包含另一个否定选择符或 [伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements)。

> **警告：** 以逗号分隔的选择器列表作为参数是实验性的，尚未获得广泛支持。

{{csssyntax}}

## 示例

### HTML

```html
<p>我是一个段落。</p>
<p class="fancy">我好看极了！</p>
<div>我「不是」一个段落。</div>
```

### CSS

```css
.fancy {
  text-shadow: 2px 2px 3px gold;
}

/* 类名不是 `.fancy` 的 <p> 元素 */
p:not(.fancy) {
  color: green;
}

/* 非 <p> 元素 */
body :not(p) {
  text-decoration: underline;
}

/* 既不是 <div> 也不是 <span> 的元素 */
body :not(div):not(span) {
  font-weight: bold;
}

/* 类名不是 `.crazy` 或 `.fancy` 的元素 */
/* 注意，此语法尚未获广泛支持。 */
body :not(.crazy, .fancy) {
  font-family: sans-serif;
}
```

### 结果

{{EmbedLiveSample('Examples')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat("css.selectors.not")}}
