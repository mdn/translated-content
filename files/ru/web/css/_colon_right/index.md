---
title: ":right"
slug: Web/CSS/:right
---

{{ CSSRef() }}

The **`:right`** CSS [page](/en/CSS/@page) [pseudo-class](/en/CSS/Pseudo-classes) matches any right page when printing a page. It allows you to describe the styling of right-side pages.

```css
/* Selects the content on the right-hand pages while printing */
@page :right {
  margin: 2in 3in;
}
```

Whether the page is left or right is decided by the major writing direction of the document. For example, if the first page has a major writing direction of left-to-right then it will be a `:right` page and if it has a major writing direction of right-to-left then it will be a `{{ Cssxref(":left") }}` page.

> **Примечание:** Вы можете не менять все CSS-свойства, а поменять только margin, padding, border, и background для страницы. Все остальные CSS-свойства будут проигнорированы и изменения будут применены только для страницы, но не для её содержимого.

## Синтаксис

{{csssyntax}}

## Примеры

```css
@page :right {
  margin: 2in 3in;
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{ Cssxref("@page") }}, {{ Cssxref(":first") }}, {{ Cssxref(":left") }}
