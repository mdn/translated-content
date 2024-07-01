---
title: flex-flow
slug: Web/CSS/flex-flow
---

{{ CSSRef}}

**`flex-flow`** [CSS](/ru/docs/CSS) свойство, которое является сокращением для отдельных свойств `flex-direction` и `flex-wrap`.

```css
/* flex-flow: <'flex-direction'> */
flex-flow: row;
flex-flow: row-reverse;
flex-flow: column;
flex-flow: column-reverse;

/* flex-flow: <'flex-wrap'> */
flex-flow: nowrap;
flex-flow: wrap;
flex-flow: wrap-reverse;

/* flex-flow: <'flex-direction'> and <'flex-wrap'> */
flex-flow: row nowrap;
flex-flow: column wrap;
flex-flow: column-reverse wrap-reverse;

/* Global values */
flex-flow: inherit;
flex-flow: initial;
flex-flow: unset;
```

{{cssinfo}}

Больше информации и свойств описано в [Using CSS flexible boxes](/ru/docs/CSS/Using_CSS_flexible_boxes).

## Синтаксис

### Значения

Смотрите [`flex-direction`](/ru/docs/CSS/flex-direction) и [`flex-wrap`](/ru/docs/CSS/flex-wrap).

### Формальный синтаксис

{{csssyntax}}

## Примеры

```css
element {
  /* Main-axis is the block direction with reversed main-start and main-end. Flex items are laid out in multiple lines */
  flex-flow: column-reverse wrap;
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Using CSS flexible boxes](/ru/docs/CSS/Using_CSS_flexible_boxes)
