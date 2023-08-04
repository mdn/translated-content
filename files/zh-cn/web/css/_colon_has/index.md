---
title: ":has()"
slug: Web/CSS/:has
---

{{CSSRef}}

CSS 函数式[伪类](/zh-CN/docs/Web/CSS/Pseudo-classes) **`:has()`** 表示一个元素，如果作为参数传递的任何[相对选择器](/zh-CN/docs/Web/CSS/CSS_selectors#relative_selector)在锚定到该元素时，至少匹配一个元素。这个伪类通过把[可容错相对选择器列表](/zh-CN/docs/Web/CSS/Selector_list#可容错相对选择器列表)作为参数，提供了一种针对引用元素选择父元素或者先前的兄弟元素的方法。

```css
/* Selects an h1 heading with a
paragraph element that immediately follows
the h1 and applies the style to h1 */
h1:has(+ p) {
  margin-bottom: 0;
}
```

`:has()` 伪类的[优先级](/zh-CN/docs/Web/CSS/Specificity)计算方法与 {{CSSxRef(":is", ":is()")}} 和 {{CSSxRef(":not", ":not()")}} 相同：以其参数中具体的选择器进行计算。

## 语法

```
:has( <forgiving-relative-selector-list> )
```

相对选择器列表参数是[可容错](/zh-CN/docs/Web/CSS/Selector_list#可容错选择器列表)的。通常在 CSS 中，选择器列表中的某个选择器无效时，那么整个列表则被视为无效。当 `:has()` 选择器列表中的一个选择器无法解析时，不正确或不受支持的选择器将被忽略，而其他的则将被正常使用。

注意，如果一个浏览器中不支持 `:has()` 伪类本身，则整个选择器块将失效（除非 `:has()` 本身位于一个可容错选择器列表中，比如在 [`:is()`](/zh-CN/docs/Web/CSS/:is) 或 [`:where()`](/zh-CN/docs/Web/CSS/:where) 中）。

`:has()` 伪类不能被嵌套在另一个 `:has()` 内。另外，伪元素不是 `:has()` 内的有效选择器。这是因为许多伪元素基于其祖先的样式有条件地存在，如果允许通过 `:has()` 查询这些伪元素可能导致循环查询。虽然 `:has()` 和伪元素在 `:has()` 中是无效的选择器，但由于选择器列表是可容错的，它们将只是被忽略。选择器将不会失效。

## 示例

### 与兄弟组合器一起使用

以下示例中的 `:has()` 样式声明会调整 `H1` 标题后面的间距，如果它们后面紧跟着 `H2` 标题。

#### HTML

```html
<section>
  <article>
    <h1>Morning Times</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </article>
  <article>
    <h1>Morning Times</h1>
    <h2>Delivering you news every morning</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
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

h1,
h2 {
  font-size: 1.2em;
}

h2 {
  font-size: 1em;
  color: rgb(150, 149, 149);
}
```

```css
h1,
h2 {
  margin: 0 0 1rem 0;
}

h1:has(+ h2) {
  margin: 0 0 0.25rem 0;
}
```

#### 结果

{{EmbedLiveSample('与兄弟组合器一起使用', 600, 150)}}

该示例并排显示了两个相似的文本，以进行比较：左侧的带有 `H1` 标题，并紧跟一个段落，而右侧的带有 `H1` 标题，并紧跟一个 `H2` 标题和一个段落。该示例的右侧，`:has()` 可以帮助选择 `H1` 元素后紧跟的 `H2` 元素（由兄弟选择器 [`+`](/zh-CN/docs/Web/CSS/Adjacent_sibling_combinator) 指示），并通过 CSS 规则来减少此类 `H1` 元素后的间距。若没有 `:has()` 伪类，你就无法使用 CSS 选择器来选择具有不同类型的前一个兄弟元素或父元素。

### 与 :is() 伪类一起使用

这个示例建立在前一个示例之上，展示了如何用 `:has()` 选择多个元素。

#### HTML

```html
<section>
  <article>
    <h1>Morning Times</h1>
    <h2>Delivering you news every morning</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </article>
  <article>
    <h1>Morning Times</h1>
    <h2>Delivering you news every morning</h2>
    <h3>8:00 am</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
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
  font-size: 1em;
  color: rgb(150, 149, 149);
}

h3 {
  font-size: 0.9em;
  color: darkgrey;
}
```

```css
h1,
h2,
h3 {
  margin: 0 0 1rem 0;
}

:is(h1, h2, h3):has(+ :is(h2, h3, h4)) {
  margin: 0 0 0.25rem 0;
}
```

#### 结果

{{EmbedLiveSample('与 :is() 伪类一起使用', 600, 170)}}

这里，第一个 [`:is()`](/zh-CN/docs/Web/CSS/:is) 伪类用于选择列表中的任何标题元素。第二个 `:is()` 伪类用于将相邻的兄弟选择器的列表作为参数传递给 `:has()`。`:has()` 伪类用于选择任何一个紧跟 `H2`、`H3` 或 `H4` 的 `H1`、`H2`、`H3` 元素（使用 [`+`](/zh-CN/docs/Web/CSS/Adjacent_sibling_combinator) 指示），并使用 CSS 规则来减少此类 `H1`、`H2` 或 `H3` 元素后的间距。

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
- [CSS 选择器](/zh-CN/docs/Web/CSS/CSS_selectors)
- [CSS 组合符](/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Combinators)
- [选择器列表](/zh-CN/docs/Web/CSS/Selector_list)
- [使用选择器定位 DOM 元素](/zh-CN/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
