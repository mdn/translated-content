---
title: flex-flow
slug: Web/CSS/Reference/Properties/flex-flow
original_slug: Web/CSS/flex-flow
---

{{ CSSRef}}

**`flex-flow`** [CSS](/ru/docs/Web/CSS) свойство, которое является сокращением для отдельных свойств `flex-direction` и `flex-wrap`.

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

Больше информации и свойств описано в [Using CSS flexible boxes](/ru/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox).

## Синтаксис

### Значения

Смотрите [`flex-direction`](/ru/docs/Web/CSS/Reference/Properties/flex-direction) и [`flex-wrap`](/ru/docs/Web/CSS/Reference/Properties/flex-wrap).

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

- [Using CSS flexible boxes](/ru/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
