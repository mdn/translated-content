---
title: transition
slug: Web/CSS/transition
---

{{ CSSRef("CSS Transitions") }}

{{ SeeCompatTable() }}

## Sumario

La propiedad `transition` es una [propiedad abreviada](/es/docs/CSS/Shorthand_properties) de {{ cssxref("transition-property") }}, {{ cssxref("transition-duration") }}, {{ cssxref("transition-timing-function") }}, y {{ cssxref("transition-delay") }}. Permite definir la transición entre dos estados de un elemento. Hay diferentes estados que pueden ser definidos utilizando [pseudo-clases](/es/docs/CSS/Pseudo-classes) como {{cssxref(":hover")}} o {{cssxref(":active")}} o aplicado dinámicamente usando JavaScript.

{{cssinfo}}

## Sintaxis

```css
/* Aplicar a 1 propiedad */
/* nombre de la propiedad | duración */
transition: margin-left 4s;

/* nombre de la propiedad | duración | retardo */
transition: margin-left 4s 1s;

/* nombre de la propiedad | duración | función | retardo */
transition: margin-left 4s ease-in-out 1s;

/* Aplicar a 2 propiedades */
transition:
  margin-left 4s,
  color 1s;

/* Aplicar a todas las propiedades que cambien */
transition: all 0.5s ease-out;
```

Nótese que el orden es importante dentro de los elementos de la propiedad. El primer valor que puede ser analizado como tiempo es asignado a la propiedad [transition-duration](/es/docs/CSS/transition-duration), y el segundo valor que puede ser analizado como tiempo es asignado a la propiedad [transition-delay](/es/docs/CSS/transition-delay).

Véase [cuando la lista de valores de propiedades son de diferentes tamaños](/en/CSS/CSS_transitions#When_property_value_lists_are_of_different_lengths) para más detalles de cómo se manejan las cosas cuando la lista de valores de propiedades no son de tamaños iguales. En resumen, las descripciones extras más allá del número de propiedades que son animadas son ignoradas.

### Sintaxis formal

{{csssyntax("transition")}}

## Ejemplos

Hay muchos ejemplos de transiciones CSS en el artículo principal [CSS transitions](/en/CSS/CSS_transitions).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Usando transiciones CSS](/es/docs/CSS/Using_CSS_transitions)
- {{ domxref("TransitionEvent") }}
