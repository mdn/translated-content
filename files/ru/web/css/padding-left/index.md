---
title: padding-left
slug: Web/CSS/padding-left
---

{{CSSRef}}

Свойство [CSS](/ru/docs/Web/CSS) **`padding-left`** определяет ширину левого внутреннего отступа элемента.

{{EmbedInteractiveExample("pages/css/padding-left.html")}}

Внутренний отступ элемента (англ. "padding") - это пространство между его содержимым и его границей.

> **Примечание:** Свойство {{cssxref ("padding")}} можно использовать для установки внутренних отступов на всех четырёх сторонах элемента одним значением.

## Синтаксис

```css
/ * <length> значения * /
padding-left: 0.5em;
padding-left: 0;
padding-left: 2cm;

/ * <percentage> значение * /
padding-left: 10%;

/ * Глобальные значения * /
padding-left: inherit;
padding-left: initial;
padding-left: unset;
```

### Значения

- {{cssxref("&lt;length&gt;")}}
  - : Фиксированный размер заполнения отступа. Не может быть отрицательным.
- {{cssxref("&lt;percentage&gt;")}}
  - : Размер заполнения зависит от ширины блока. Не может быть отрицательным.

### Формальный синтаксис

{{csssyntax}}

## Примеры

```css
.content {
  padding-left: 5%;
}
.sidebox {
  padding-left: 10px;
}
```

## Определения

| Спецификация                                                            | Статус                          | Комментарий                                             |
| ----------------------------------------------------------------------- | ------------------------------- | ------------------------------------------------------- |
| {{ SpecName('CSS3 Box', '#the-padding', 'padding-left') }}              | {{ Spec2('CSS3 Box') }}         | Без изменений.                                          |
| {{ SpecName('CSS3 Transitions', '#animatable-css', 'padding-left') }}   | {{ Spec2('CSS3 Transitions') }} | Переопределяет `padding-left` как анимируемое свойство. |
| {{ SpecName('CSS2.1', 'box.html#padding-properties', 'padding-left') }} | {{ Spec2('CSS2.1') }}           | Без изменений.                                          |
| {{ Specname('CSS1', '#padding-left', 'padding-left') }}                 | {{ Spec2('CSS1') }}             | Первоначальное определение.                             |

{{cssinfo}}

## Совместимость

{{Compat}}
