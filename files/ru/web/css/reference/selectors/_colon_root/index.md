---
title: :root
slug: Web/CSS/Reference/Selectors/:root
original_slug: Web/CSS/:root
---

{{CSSRef}}

## Описание

CSS [псевдокласс](/ru/docs/Web/CSS/Reference/Selectors/Pseudo-classes) `:root` находит корневой элемент дерева документа. Применимо к HTML, `:root` находит элемент {{HTMLElement("html")}} и идентичен селектору по тегу `html`, но его [специфичность](/ru/docs/Web/CSS/CSS_cascade/Specificity) выше.

## Пример

Использование `:root` полезно для объявления [CSS Переменных](/ru/docs/Web/CSS/Reference/Properties/--*):

```css
:root {
  --main-color: hotpink;
  --pane-padding: 5px 42px;
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
