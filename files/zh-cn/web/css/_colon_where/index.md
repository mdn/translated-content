---
title: ":where()"
slug: Web/CSS/:where
---

{{CSSRef}}

**`:where()`** [CSS 伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)函数接受[选择器列表](/zh-CN/docs/Web/CSS/Selector_list)作为它的参数，将会选择所有能被该选择器列表中任何一条规则选中的元素。

```css
/* Selects any paragraph inside a header, main
   or footer element that is being hovered */
:where(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

/* The above is equivalent to the following */
header p:hover,
main p:hover,
footer p:hover {
  color: red;
  cursor: pointer;
}
```

`:where()` 和 {{CSSxRef(":is", ":is()")}} 的不同之处在于，`:where()` 的[优先级](/zh-CN/docs/Web/CSS/Specificity)总是为 0，但是 `:is()` 的优先级是由它的选择器列表中优先级最高的[选择器](/zh-CN/docs/Glossary/CSS_Selector)决定的。

### 可容错选择器解析

规范将 `:is()` 和 `:where()` 定义为接受一个[可容错选择器列表](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list)。

在 CSS 中使用选择器列表时，如果任何选择器无效，则整个列表被视为无效。当使用 `:is()` 或 `:where()` 而不是整个选择器列表时，如果某个选择器无法解析，则被视为无效，不正确或不受支持的选择器将被忽略，其他选择器将被使用。

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

### 比较 :where() 和 :is()

该示例展示了 `:where()` 是如何起作用的，并且也阐述了 `:where()` 和 `:is()` 的区别。

跟随以下 HTML：

```html
<article>
  <h2>:is()-styled links</h2>
  <section class="is-styling">
    <p>
      Here is my main content. This
      <a href="https://mozilla.org">contains a link</a>.
    </p>
  </section>

  <aside class="is-styling">
    <p>
      Here is my aside content. This
      <a href="https://developer.mozilla.org">also contains a link</a>.
    </p>
  </aside>

  <footer class="is-styling">
    <p>
      This is my footer, also containing
      <a href="https://github.com/mdn">a link</a>.
    </p>
  </footer>
</article>

<article>
  <h2>:where()-styled links</h2>
  <section class="where-styling">
    <p>
      Here is my main content. This
      <a href="https://mozilla.org">contains a link</a>.
    </p>
  </section>

  <aside class="where-styling">
    <p>
      Here is my aside content. This
      <a href="https://developer.mozilla.org">also contains a link</a>.
    </p>
  </aside>

  <footer class="where-styling">
    <p>
      This is my footer, also containing
      <a href="https://github.com/mdn">a link</a>.
    </p>
  </footer>
</article>
```

在这个有点人为的例子中，我们有两篇文章，每篇文章包含一个段落、一个侧边栏和一个页脚。它们由于使用标记子元素的不同而不同。

为了使选择它们内部的链接更简单，但仍然不同，我们*可以*使用 `:is()` 或 `:where()`，方式如下：

```css
html {
  font-family: sans-serif;
  font-size: 150%;
}

:is(section.is-styling, aside.is-styling, footer.is-styling) a {
  color: red;
}

:where(section.where-styling, aside.where-styling, footer.where-styling) a {
  color: orange;
}
```

然而，我们以后想使用一个简单选择器覆盖页脚的链接应该怎么办？

```css
footer a {
  color: blue;
}
```

这个红色的链接不起作用，因为 `:is()` 中的选择器会计入整体选择器的优先级，并且类选择器的优先级高于元素选择器。

然而，`:where()` 中的选择器的优先级是 0，所以橘色的页脚链接将被我们的简单选择器覆盖。

> **备注：** 你也可以在 GitHub 上找到这个示例；参见 [is-where](https://mdn.github.io/css-examples/is-where/)。

{{EmbedLiveSample('示例', '100%', 600)}}

## 语法

```
:where( <complex-selector-list> )
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSxRef(":is", ":is()")}}
- [选择器列表](/zh-CN/docs/Web/CSS/Selector_list)
- [Web component](/zh-CN/docs/Web/API/Web_components)
