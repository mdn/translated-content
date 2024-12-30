---
title: transform-style
slug: Web/CSS/transform-style
---

La propiedad **`transform-style`** [CSS](/es/docs/Web/CSS) establece si el elemento hijo esta posicionado en el espacio 3D (preserve-3d) o esta integrado(flat) en el plano del elemento.

{{EmbedInteractiveExample("pages/css/transform-style.html")}}

Si esta integrado (flat), el elemento hijo no existirá por sí solo en el espacio 3D.

Como esta propiedad no se hereda, debe establecerse para todos los nodos internos descendientes (hijos) del elemento.

## Syntax

```css
/* Keyword values */
transform-style: flat;
transform-style: preserve-3d;

/* Global values */
transform-style: inherit;
transform-style: initial;
transform-style: unset;
```

### Values

- `flat`
  - : Indica que el elemento hijo yace en el plano del elemento mismo.
- `preserve-3d`
  - : Indica que el elemento hijo debe ser posicionado en el espacio 3D.

### Formal syntax

{{csssyntax}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- [Using CSS transforms](/es/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)

{{CSSRef}}
