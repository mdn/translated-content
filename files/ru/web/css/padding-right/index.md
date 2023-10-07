---
title: padding-right
slug: Web/CSS/padding-right
---

{{CSSRef}}

## Summary

[CSS](/en/CSS) свойство **`padding-right`** элемента устанавливает значение поля от правого края элемента. Поля элемента ([padding area](/en/CSS/box_model#padding)) это область, расположенная между контентом и границей элемента. Отрицательное значение не валидно.

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

## Specifications

| Specification                                                            | Status                          | Comment                                               |
| ------------------------------------------------------------------------ | ------------------------------- | ----------------------------------------------------- |
| {{ SpecName('CSS3 Box', '#the-padding', 'padding-right') }}              | {{ Spec2('CSS3 Box') }}         | Без изменений.                                        |
| {{ SpecName('CSS3 Transitions', '#animatable-css', 'padding-right') }}   | {{ Spec2('CSS3 Transitions') }} | Определяет `padding-right`, как анимируемое свойство. |
| {{ SpecName('CSS2.1', 'box.html#padding-properties', 'padding-right') }} | {{ Spec2('CSS2.1') }}           | Без изменений.                                        |
| {{ Specname('CSS1', '#padding-right', 'padding-right') }}                | {{ Spec2('CSS1') }}             | Исходное определение.                                 |

## Browser compatibility

{{Compat}}
