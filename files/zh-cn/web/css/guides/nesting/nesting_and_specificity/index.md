---
title: CSS 嵌套与优先级
slug: Web/CSS/Guides/Nesting/Nesting_and_specificity
l10n:
  sourceCommit: 7e1956dbec8369ae5533be89e21cbce2d5a2ae1c
---

`&` 嵌套选择器的[优先级](/zh-CN/docs/Web/CSS/Guides/Cascade/Specificity)由它所关联的选择器列表当中优先级最高的选择器决定。这与 {{cssxref(':is',':is()')}} 函数的优先级计算方式一致。

```html
<b class="foo">
  <c>蓝色文字</c>
</b>
```

## `&` 嵌套语法

```css-nolint
#a, b {
  & c {
    color: blue;
  }
}

.foo c {
  color: red;
}
```

## `:is()` 语法

```css
:is(#a, b) {
  & c {
    color: blue;
  }
}

.foo c {
  color: red;
}
```

在这个示例中，ID 选择器（`#a`）的优先级是 [`1-0-0`](/zh-CN/docs/Web/CSS/Guides/Cascade/Specificity#选择器类型)，而类型选择器（`b`）的优先级是 `0-0-1`。[`&` 嵌套选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/Nesting_selector)和 `:is()` 伪类均有 `1-0-0` 的优先级，尽管 ID 选择器 `#a` 从未使用。

类选择器 `.foo` 的优先级是 `0-1-0`。经过计算得出，`& c` 的总优先级是 `1-0-1`，而 `.foo c` 的优先级是 `0-1-1`，意味着 `color: blue;` 是最后赢家。

## 参见

- [CSS 嵌套](/zh-CN/docs/Web/CSS/Guides/Nesting)模块
- [`&` 嵌套选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/Nesting_selector)
- [使用 CSS 嵌套](/zh-CN/docs/Web/CSS/Guides/Nesting/Using)
- [CSS at 规则嵌套](/zh-CN/docs/Web/CSS/Guides/Nesting/At-rules)
