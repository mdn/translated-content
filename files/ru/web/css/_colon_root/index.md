---
title: ":root"
slug: Web/CSS/:root
---

{{CSSRef}}

## Описание

CSS [псевдокласс](/ru/docs/Web/CSS/Псевдо-классы) `:root` находит корневой элемент дерева документа. Применимо к HTML, `:root` находит элемент {{HTMLElement("html")}} и идентичен селектору по тегу `html`, но его [специфичность](/ru/docs/Web/CSS/Specificity) выше.

## Пример

Использование `:root` полезно для объявления [CSS Переменных](/ru/docs/Web/CSS/--*):

```css
:root {
  --main-color: hotpink;
  --pane-padding: 5px 42px;
}
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}
