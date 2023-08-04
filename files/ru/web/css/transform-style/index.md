---
title: transform-style
slug: Web/CSS/transform-style
---

{{CSSRef("CSS Transforms")}}{{SeeCompatTable}}

Свойство `transform-style` [CSS](/ru/docs/Web/CSS) определяет положение дочернего элемента в 3D-пространстве или в той же плоскости, что и родительский элемент.

Если flat, то дочерний элемент не будет существовать в своём собственном 3D-пространстве.

Поскольку это свойство не наследуется, его следует устанавливать для всех не прямых потомков элемента.

{{cssinfo}}

## Syntax

```css
/* Keyword values */
transform-style: preserve-3d;
transform-style: flat;

/* Global values */
transform-style: inherit;
transform-style: initial;
transform-style: unset;
```

### Values

- `preserve-3d`
  - : Показывает, что дочерний элемент должен быть спозиционирован в 3D-пространстве.
- `flat`
  - : Показывает, что дочерний элемент лежит в той же плоскости, что и родительский.

### Formal syntax

{{csssyntax}}

## Specifications

| Specification                                                          | Status                       | Comment            |
| ---------------------------------------------------------------------- | ---------------------------- | ------------------ |
| {{SpecName('CSS3 Transforms', '#transform-style', 'transform-style')}} | {{Spec2('CSS3 Transforms')}} | Initial definition |

## Browser compatibility

{{Compat}}

## See also

- [Using CSS Transforms](/ru/docs/CSS/Using_CSS_transforms)
