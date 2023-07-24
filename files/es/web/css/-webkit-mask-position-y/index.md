---
title: "-webkit-mask-position-y"
slug: Web/CSS/-webkit-mask-position-y
---

{{CSSRef}}{{Non-standard_header}}

## Resumen

La propiedad CSS `-webkit-mask-position-y` fija la posición inicial vertical de una imagen de máscara.

{{cssinfo}}

## Síntaxis

```css
/* Palabras clave valores */
-webkit-mask-position-y: top;
-webkit-mask-position-y: center;
-webkit-mask-position-y: bottom;

/* valores <porcentaje> */
-webkit-mask-position-y: 100%;
-webkit-mask-position-y: -50%;

/* valores <longitud> */
-webkit-mask-position-y: 50px;
-webkit-mask-position-y: -1cm;

/* Valores Múltiples*/
-webkit-mask-position-y:
  50px,
  25%,
  -3em;

/* Valores globales */
-webkit-mask-position-y: inherit;
-webkit-mask-position-y: initial;
-webkit-mask-position-y: unset;
```

## Values

- `<percentage>`
  - : Un porcentaje que sirve para indicar, empezando por el lado superior, la posición de la imagen en relación a la dimensión vertical del área de la caja de relleno (padding). Un valor del 0% indica que el lado superior de la imagen de máscara se alinea con el lado superior de la caja. Un valor del 100% indica que que el lado inferior de la imagen se alinea con el lado inferior de la caja.
- `<length>`
  - : Una longitud indicando la posición del lado superior de la imagen en relación con el lado superior de la cajade relleno (padding).
- **`top`**
  - : Equivalente a `0%`.
- **`bottom`**
  - : Equivalente a `100%`.
- **`center`**
  - : Equivalente a `50%`.

### Síntaxis Formal

{{csssyntax}}

## Ejemplos

```css
.exampleOne {
  -webkit-mask-image: url(mask.png);
  -webkit-mask-position-y: bottom;
}

.exampleTwo {
  -webkit-mask-image: url(mask.png);
  -webkit-mask-position-y: 25%;
}
```

## Especificaciones

No forma parte de ninguna especificación.

## Compatibilidad con navegadores

{{Compat}}

## Ver además

{{cssxref("-webkit-mask-position")}}, {{cssxref("-webkit-mask-position-x")}}, {{cssxref("-webkit-mask-origin")}}, {{cssxref("-webkit-mask-attachment")}}
