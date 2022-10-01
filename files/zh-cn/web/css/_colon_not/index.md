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

`:not()` 伪类有许多[怪异、技巧和意料之外的结果](#描述)，你在使用它之前应该意识到这些。

## 语法

`:not()` 伪类可以将一个或多个以逗号分隔的选择器列表作为其参数。选择器中不得包含另一个否定选择器或[伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements)。

```
:not( <complex-selector-list> )
```

## 描述

这里有几个在你使用 `:not()` 伪类时你应该注意到的不寻常的影响和结果：

- 可以使用这个伪类写完全无用的选择器。例如，`:not(*)` 匹配任何不是元素的元素，这显然是荒谬的，所以这个附加的规则将永远不被应用。
- 可以利用这个伪类提高规则的[优先级](/zh-CN/docs/Web/CSS/Specificity)。例如，`#foo:not(#bar)` 和 `#foo` 都将匹配相同的元素，但是具有两个 `id` 的选择器具有更高的优先级。
- `:not()` 伪类的优先级将由其逗号分割的参数中优先级最高的选择器指定；提供与 [`:not(:is(argument))`](/zh-CN/docs/Web/CSS/:is) 相同的优先级。
- `:not(.foo)` 将匹配任何非 `.foo` 的元素，_包括 {{HTMLElement("html")}} 和 {{HTMLElement("body")}}_。
- 这个选择器将匹配任意“不是一个 X”的元素。当与[后代选择器](/zh-CN/docs/Web/CSS/Descendant_combinator)一起使用，这可能令人惊讶，因为有多种路径可以选择一个目标元素。例如，`body :not(table) a` 仍将应用 {{HTMLElement("table")}} 中的链接，因为 {{HTMLElement("tr")}}、{{HTMLElement("tbody")}}、{{HTMLElement("th")}}、{{HTMLElement("td")}}、{{HTMLElement("caption")}} 等都可以匹配选择器 `:not(table)` 部分。
- 你可以同时否定多个选择器。例如：`:not(.foo, .bar)` 等同于 `:not(.foo):not(.bar)`。
- 如果传递给 `:not()` 伪类的选择器无效或者浏览器不支持，则整个规则都将是无效的。克服这种行为的有效方式是使用：[`:is`](/zh-CN/docs/Web/CSS/:is) 伪类，它可以接受有错的选择器列表。例如 `:not(.foo, :invalid-pseudo-class)` 将使整个规则无效，但是 `:is(:not(.foo), :not(:invalid-pseudo-class))` 将匹配任何不是 `.foo` 的元素。

## 示例

### 设置 :not() 基础示例

#### HTML

```html
<p>I am a paragraph.</p>
<p class="fancy">I am so very fancy!</p>
<div>I am NOT a paragraph.</div>
<h2>
  <span class="foo">foo inside h2</span>
  <span class="bar">bar inside h2</span>
</h2>
```

#### CSS

```css
.fancy {
  text-shadow: 2px 2px 3px gold;
}

/* 类名不是 `.fancy` 的 <p> 元素*/
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

/* 不是 <div> 或 `.fancy` 的元素*/
body :not(div, .fancy) {
  text-decoration: overline underline;
}

/* <h2> 元素中不是有 `.foo` 类名的 <span> 元素 */
h2 :not(span.foo) {
  color: red;
}
```

### 结果

{{EmbedLiveSample('Basic_set_of_not_examples', '100%', 320)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)
- [伪类和伪元素](/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
- 相关的 CSS 伪类：

  - {{cssxref(":has", ":has()")}}
  - {{cssxref(":is", ":is()")}}
  - {{cssxref(":where", ":where()")}}
