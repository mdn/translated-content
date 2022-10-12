---
title: ':has()'
slug: Web/CSS/:has
---

{{CSSRef}}

当锚定到一个元素时，如果作为参数传递的任何[相对选择器](/zh-CN/docs/Web/CSS/CSS_Selectors#relative_selector)匹配到至少一个元素，则函数式 CSS [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes) **`:has()`** 表示该元素。这个伪类提供了一种把[可容错相对选择器列表](/zh-CN/docs/Web/CSS/Selector_list#可容错相对选择器列表)作为参数来选择相对于参考元素的父元素或前一个兄弟元素的方法。

```css
/* Selects an h1 heading with a
paragraph element that immediately follows
the h1 and applies the style to h1 */
h1:has(+ p) { margin-bottom: 0; }
```

## 语法

```
:has( <forgiving-relative-selector-list> )
```

相对选择器列表参数是[可容错](/zh-CN/docs/Web/CSS/Selector_list#可容错选择器列表)的。通常在 CSS 中，选择器列表中的某个选择器无效时，那么整个列表则被视为无效。当 `:has()` 选择器列表中的一个选择器无法解析时，不正确或不受支持的选择器将被忽略，而其它的则将被正常使用。

注意，如果一个浏览器中不支持 `:has()` 伪类本身，则整个选择器块将失效（除非 `:has()` 本身位于一个可容错选择器列表中，比如在 [`:is()`](/zh-CN/docs/Web/CSS/:is) 或 [`:where()`](/zh-CN/docs/Web/CSS/:where) 中）。

`:has()` 伪类不能被嵌套在另一个 `:has()` 内。另外，伪元素不是 `:has()` 内的有效选择器。这是因为许多伪元素基于其祖先的样式有条件地存在，如果允许通过 `:has()` 查询这些伪元素可能导致循环查询。虽然 `:has()` 和伪元素在 `:has()` 中是无效的选择器，但由于选择器列表是可容错的，它们将只是被忽略。选择器将不会失效。

## 示例

### 与兄弟组合符一起

以下示例中的 `:has()` 样式声明会调整 `H1` 标题后面的间距，如果它们后面紧跟着 `H2` 标题。

#### HTML

```html
<section>
  <article>
    <h1>Morning Times</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </article>
  <article>
    <h1>Morning Times</h1>
    <h2>Delivering you news every morning</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </article>
</section>
```

#### CSS

```css hidden
section {
    display: flex;
    align-items: start;
    justify-content: space-around;
}

article {
  display: inline-block;
  width: 40%;
}

h1, h2 {
  font-size: 1.2em;
}

h2 {
  font-size: 1.0em;
  color: rgb(150, 149, 149);
}
```

```css
h1, h2 {
  margin: 0 0 1.0rem 0;
}

h1:has(+ h2) {
  margin: 0 0 0.25rem 0;
}
```

#### 结果

{{EmbedLiveSample('With_the_sibling_combinator', 600, 150)}}

This example shows two similar texts side-by-side for comparison – the left one with an `H1` heading followed by a paragraph and the right one with an `H1` heading followed by an `H2` heading and then a paragraph. In the example on the right, `:has()` helps to select the `H1` element that is immediately followed by an `H2` element (indicated by the adjacent sibling combinator[`+`](/zh-CN/docs/Web/CSS/Adjacent_sibling_combinator)) and the CSS rule reduces the spacing after such an `H1` element. Without the `:has()` pseudo-class, you cannot use CSS selectors to select a preceding sibling of a different type or a parent element.

### 与 :is() 伪类一起

这个例子建立在前一个例子之上，展示了如何用 `:has()` 选择多个元素。

#### HTML

```html
<section>
  <article>
    <h1>Morning Times</h1>
    <h2>Delivering you news every morning</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </article>
  <article>
    <h1>Morning Times</h1>
    <h2>Delivering you news every morning</h2>
    <h3>8:00 am</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </article>
</section>
```

#### CSS

```css hidden
section {
    display: flex;
    align-items: start;
    justify-content: space-around;
}

article {
  display: inline-block;
  width: 40%;
}

h1 {
  font-size: 1.2em;
}

h2 {
  font-size: 1.0em;
  color: rgb(150, 149, 149);
}

h3 {
  font-size: 0.9em;
  color: darkgrey;
}
```

```css
h1, h2, h3 {
  margin: 0 0 1.0rem 0;
}

:is(h1, h2, h3):has(+ :is(h2, h3, h4)) {
  margin: 0 0 0.25rem 0;
}
```

#### 结果

{{EmbedLiveSample('With_the_:is()_pseudo-class', 600, 170)}}

Here, the first [`:is()`](/zh-CN/docs/Web/CSS/:is) pseudo-class is used to select any of the heading elements in the list. The second `:is()` pseudo-class is used to pass a list of adjacent sibling selectors as an argument to `:has()`. The `:has()` pseudo-class helps to select any `H1`, `H2`, or `H3` element that is immediately followed by (indicated by [`+`](/zh-CN/docs/Web/CSS/Adjacent_sibling_combinator)) an `H2`, `H3`, or `H4` element and the CSS rule reduces the spacing after such `H1`, `H2`, or `H3` elements.

这个选择器也可以写作：

```css
:is(h1, h2, h3):has(+ h2, + h3, + h4) {
  margin: 0 0 0.25rem 0;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`:is()`](/zh-CN/docs/Web/CSS/:is)、[`:where()`](/zh-CN/docs/Web/CSS/:where)、[`:not()`](/zh-CN/docs/Web/CSS/:not)
- [CSS 选择器](/zh-CN/docs/Web/CSS/CSS_Selectors)
- [CSS 组合符](/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Combinators)
- [选择器列表](/zh-CN/docs/Web/CSS/Selector_list)
- [使用选择器定位 DOM 元素](/zh-CN/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
