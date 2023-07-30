---
title: transition-property
slug: Web/CSS/transition-property
---

{{CSSRef("CSS Transitions")}}

La propiedad CSS **`transition-property`** se usa para definir los nombres de las propiedades CSS en las que el efecto de la transición debe aplicarse.

```css
/* Keyword values */
transition-property: none;
transition-property: all;
transition-property: test_05;
transition-property: -specific;
transition-property: sliding-vertically;

transition-property: test1;
transition-property: test1, animation4;
transition-property: all, height, all;
transition-property:
  all,
  -moz-specific,
  sliding;

/* Global values */
transition-property: inherit;
transition-property: initial;
transition-property: unset;
```

> **Nota:** El [conjunto de propiedades que puede ser animado](/es/docs/Web/CSS/CSS_animated_properties) está sujeto a cambios. Por lo tanto deberías evitar incluir en la lista cualquiera de las propiedades que actualmente no puede animarse, aunque algún día pudieran, ya que podría causar resultados inesperados.

Si se especifica una propiedad abreviada (por ejemplo , {{cssxref("background")}}) todas sus subpropiedades que soporten animación serán animadas.

{{cssinfo}}

## Sintaxis

### Valores

- `none`
  - : Ninguna propiedad tendrá transición.
- `all`
  - : Todas las propiedades que puedan tener una transición animada la tendrán.
- `IDENT`
  - : Una cadena que identifique la propiedad en la que el efecto de la transición debe ser aplicado cuando su valor cambie. Este identificador está compuesto por letras de la `a` a la `z` insensibles a mayúsculas, números del `0` al `9`, un guión bajo (`_`) o un guión simple (`-`). El primer carácter que no sea un guión debe ser una letra (es decir: no debe haber números al principio, aunque esten precedidos de un guión). Además, no están permitidos dos guiones al principio del identificador.

### Sintaxis formal

{{csssyntax}}

## Ejemplos

Hay varios ejemplos de transiciones CSS incluídos en el artículo principal [Transiciones CSS.](/es/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Usando transiciones CSS](/es/docs/Web/Guide/CSS/Using_CSS_transitions)
- {{domxref("TransitionEvent")}}
