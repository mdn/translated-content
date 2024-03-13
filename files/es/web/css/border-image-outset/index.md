---
title: border-image-outset
slug: Web/CSS/border-image-outset
---

{{CSSRef}}

## Resumen

La propiedad **`border-image-outset`** describe el monto por el cual se extenderá la imagen de borde más allá del límite de la caja.

Las porciones de la imagen de borde que se dibujen fuera de los límites de la caja como resultado de esta propiedad no provocarán desplazamiento del contenido. Estas áreas tampoco capturarán o causarán que ocurran eventos del ratón con referencia al elemento al que pertenecen.

{{cssinfo}}

## Sintaxis

```css
/* border-image-outset: sides */
border-image-outset: 1.5;

/* border-image-outset: vertical horizontal */
border-image-outset: 1 1.2;

/* border-image-outset: top horizontal bottom */
border-image-outset: 30px 2 45px;

/* border-image-outset: top right bottom left */
border-image-outset: 7px 12px 14px 5px;

border-image-outset: inherit;
```

### Valores

> **Nota:** Cuando un valor se especifica como valor {{cssxref("&lt;number&gt;")}} sin unidad, el valor es multiplicado por el {{cssxref("border-width")}} calculado correspondiente, para determinar el valor de `border-image-outset`. Los valores negativos no son permitidos.

- _sides_
  - : Es un valor {{cssxref("&lt;length&gt;")}} o {{cssxref("&lt;number&gt;")}} para la cantidad en la que se extiende la imagen de borde más allá de los límites de la caja, en las cuatro direcciones.
- _horizontal_
  - : Es un valor {{cssxref("&lt;length&gt;")}} o {{cssxref("&lt;number&gt;")}} para la cantidad en la que se extiende la imagen de borde más allá de los límites de la caja, en sus direcciones horizontales (izquierda y derecha).
- _vertical_
  - : Es un valor {{cssxref("&lt;length&gt;")}} o {{cssxref("&lt;number&gt;")}} para la cantidad en la que se extiende la imagen de borde más allá de los límites de la caja, en sus direcciones verticales (superior e inferior).
- _top_
  - : Es un valor {{cssxref("&lt;length&gt;")}} o {{cssxref("&lt;number&gt;")}} para la cantidad en la que se extiende la imagen de borde más allá del límite del borde superior de la caja.
- _bottom_
  - : Es un valor {{cssxref("&lt;length&gt;")}} o {{cssxref("&lt;number&gt;")}} para la cantidad en la que se extiende la imagen de borde más allá del límite del borde inferior de la caja.
- _right_
  - : Es un valor {{cssxref("&lt;length&gt;")}} o {{cssxref("&lt;number&gt;")}} para la cantidad en la que se extiende la imagen de borde más allá del límite del borde derecho de la caja.
- _left_
  - : Es un valor {{cssxref("&lt;length&gt;")}} o {{cssxref("&lt;number&gt;")}} para la cantidad en la que se extiende la imagen de borde más allá del límite del borde izquierdo de la caja.
- `inherit`
  - : Es una palabra clave que indica que los cuatro valores serán heredados de los valores calculados de sus elementos padre.

### Sintaxis formal

{{csssyntax}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
