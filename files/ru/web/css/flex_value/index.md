---
title: <flex>
slug: Web/CSS/flex_value
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS) [тип данных](/ru/docs/Web/CSS/CSS_Types) **`<flex>`** определяет гибкую длину в сеточном контейнере. Он используется в таких свойствах, как {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-rows")}}.

## Синтаксис

Тип данных `<flex>` определяется как {{cssxref("&lt;number&gt;")}} с единицей измерения `fr`. Единица измерения `fr` представляет собой долю оставшегося в сетке пространства. Как и все CSS размеры, между числом и единицей измерения нет пробела.

## Примеры

```css
1fr    /* Целочисленное значение */
2.5fr  /* Дробное значение */
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [CSS Grid Layout](/ru/docs/Web/CSS/CSS_Grid_Layout)
