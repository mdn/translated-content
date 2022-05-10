---
title: color-scheme
slug: Web/CSS/color-scheme
tags:
  - CSS
  - CSS Colors
  - CSS Property
  - HTML Colors
  - HTML Styles
  - Layout
  - Reference
  - Styling HTML
  - Styling text
  - Web
  - color-scheme
  - recipe:css-property
browser-compat: css.properties.color-scheme
---
{{CSSRef}}

CSS-свойство **`color-scheme`** позволяет указать цветовые схемы, в которых может быть отображён текущий элемент.

Как правило, в операционных системах используется "светлые" и "тёмные" цветовые схемы, например, одна для дневного времени суток, другая — для ночного. Когда пользователь включает одну из них, операционная система подстраивает графический интерфейс под выбранную цветовую схему. К этому также относятся элементы форм, полосы прокрутки и используемые цвета системных цветов в CSS.

## Синтаксис

```css
color-scheme: normal;
color-scheme: light;
color-scheme: dark;
color-scheme: light dark;

/* Глобальные значения */
color-scheme: inherit;
color-scheme: initial;
color-scheme: revert;
color-scheme: revert-layer;
color-scheme: unset;
```

Свойство `color-scheme` принимает одно из следующих ключевых слов.

### Значения

- `normal`
  - : Означает, что элемент не осведомлён о каких-либо цветовых схемах, поэтому он должен использовать цветовую схему по умолчанию.
- `light`
  - : Означает, что элемент может быть отображён в светлой цветовой схеме операционной системы.
- `dark`
  - : Означает, что элемент может быть отображён в тёмной цветовой схеме операционной системы.

## Формальное определение

{{cssinfo}}

## Формальный синтаксис

{{csssyntax}}

## Примеры

### Использование цветовой схемы

Чтобы применить ко всей странице текущую цветовую схему пользователя, нужно определить свойство `color-scheme` для элемента {{cssxref(":root")}}.

```css
:root {
  color-scheme: light dark;
}
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [Применение цвета к HTML-элементам с помощью CSS](/ru/docs/Web/HTML/Applying_color)
- Другие свойства, относящиеся к цвету: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, and {{cssxref("column-rule-color")}}
- {{cssxref("background-image")}}
- {{cssxref("print-color-adjust")}}
