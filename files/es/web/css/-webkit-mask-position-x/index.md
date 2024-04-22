---
title: "-webkit-mask-position-x"
slug: Web/CSS/-webkit-mask-position-x
---

{{CSSRef}}{{Non-standard_header}}

## Resumen

La propiedad CSS `-webkit-mask-position-x` CSS establece la posición horizontal inicial de una imagen de máscara.

{{cssinfo}}

## Síntaxis

```css
/* Palabras Clave valores */
-webkit-mask-position-x: left;
-webkit-mask-position-x: center;
-webkit-mask-position-x: right;

/* <porcentaje> valores */
-webkit-mask-position-x: 100%;
-webkit-mask-position-x: -50%;

/* <longitud> valores */
-webkit-mask-position-x: 50px;
-webkit-mask-position-x: -1cm;

/* Múltiples valores */
-webkit-mask-position-x:
  50px,
  25%,
  -3em;

/* Valores globales */
-webkit-mask-position-x: inherit;
-webkit-mask-position-x: initial;
-webkit-mask-position-x: unset;
```

## Valores

- `<percentage>`
  - : Un porcentaje que sirve para indicar, empezando por el lado izquierdo, la posición de la imagen en relación a la dimensión horizontal del área de la caja de relleno (padding). Un valor del 0% indica que el lado izquierdo de la imagen de máscara se alinea con el lado izquierdo de la caja. Un valor del 100% indica que que el lado derecho de la imagen se alinea con el lado derecho de la caja.
- `<length>`
  - : Una longitud indicando la posición del lado izquierdo de la imagen en relación con el lado izquierdo de la caja.
- **`left`**
  - : Equivalente a `0%`.
- **`center`**
  - : Equivalente a `50%`.
- **`right`**
  - : Equivalente a `100%`.

### Síntaxis Formal

{{csssyntax}}

## Ejemplos

```css
.exampleOne {
  -webkit-mask-image: url(mask.png);
  -webkit-mask-position-x: right;
}

.exampleTwo {
  -webkit-mask-image: url(mask.png);
  -webkit-mask-position-x: 25%;
}
```

## Especificaciones

No forma parte de ninguna especificación.

## Compatibilidad con navegadores

{{Compat}}

## See also

{{cssxref("-webkit-mask-position")}}, {{cssxref("-webkit-mask-position-y")}}, {{cssxref("-webkit-mask-origin")}}, {{cssxref("-webkit-mask-attachment")}}
