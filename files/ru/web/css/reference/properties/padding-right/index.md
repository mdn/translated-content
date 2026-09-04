---
title: padding-right
slug: Web/CSS/Reference/Properties/padding-right
original_slug: Web/CSS/padding-right
---

{{CSSRef}}

## Summary

[CSS](/en-US/CSS) свойство **`padding-right`** элемента устанавливает значение поля от правого края элемента. Поля элемента ([padding area](/en-US/CSS/box_model#padding)) это область, расположенная между контентом и границей элемента. Отрицательное значение не валидно.

{{cssinfo}}

## Syntax

```css
/* <length> значения */
padding-right: 0.5em;
padding-right: 0;
padding-right: 2cm;

/* <percentage> значения */
padding-right: 10%;

/* Общие значения */
padding-right: inherit;
padding-right: initial;
padding-right: unset;
```

### Values

- \<length>
  - : Устанавливает положительную фиксированную ширину. Подробнее: {{cssxref("&lt;length&gt;")}}.
- \<percentage>
  - : Процент по отношению к ширине контейнера.

### Formal syntax

{{csssyntax}}

## Examples

```css
.content {
  padding-right: 5%;
}
.sidebox {
  padding-right: 10px;
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
