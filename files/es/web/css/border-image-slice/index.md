---
title: border-image-slice
slug: Web/CSS/border-image-slice
---

{{CSSRef}}

## Resumen

La propiedad CSS **`border-image-slice`** divide la imagen especificada por {{cssxref("border-image-source")}} en nueve regiones: las cuatro esquinas, los cuatro bordes y el espacio enmedio. Esto se hace especificando cuatro desplazamientos hacia adentro.

[![The nine slices defined by the CSS border-image shorthand or border-image-slice longhand properties](/files/3814/border-image-slice.png)](/files/3814/border-image-slice.png)Cuatro valores controlan la posición de las líneas de corte. Si algunas no son especificada, se infieren de las otras, con la sintaxis común de cuatro valores de CSS.

La región media no es usada por el borde en sí, pero sí se usa como imagen de fondo si se establece la palabra clave `fill`. Se puede establecer este valor en cualquier posición en la propiedad (antes, después o entre los otros valores).

Las propiedades {{cssxref("border-image-repeat")}}, {{cssxref("border-image-width")}} y {{cssxref("border-image-outset")}} definen cómo se usarán estas imágenes.

La propiedad abreviada {{cssxref("border-image")}} podría restaurar esta propiedad a su valor predeterminado.

{{cssinfo}}

## Sintaxis

```css
/* border-image-slice: slice */
border-image-slice: 30%;

/* border-image-slice: horizontal vertical */
border-image-slice: 10% 30%;

/* border-image-slice: top horizontal bottom */
border-image-slice: 30 30% 45;

/* border-image-slice: top right bottom left */
border-image-slice: 7 12 14 5;

/* border-image-slice: … fill */
/* The fill value can be placed between any value */
border-image-slice: 10% fill 7 12;

/* Global values */
border-image-slice: inherit;
border-image-slice: initial;
border-image-slice: unset;
```

### Valores

- _slice_
  - : Es un valor {{cssxref("&lt;number&gt;")}} o {{cssxref("&lt;percentage&gt;")}} de la separación de las cuatro líneas de corte. Un valor {{cssxref("&lt;number&gt;")}} representa _píxeles_ para imágenes de mapa de bits y _coordenadas_ para imágenes vectoriales. A su vez, los valores {{cssxref("&lt;percentage&gt;")}} son relativos a la altura o anchura de la imagen, según sea más adecuado. Valores negativos son inváildos, y valores mayores al tamaño relevante, anchura o altura, son restringidos a `100%`.
- _horizontal_
  - : Es un valor {{cssxref("&lt;number&gt;")}} o {{cssxref("&lt;percentage&gt;")}} de la separación de las dos líneas de corte horizontales, la superior y la inferior. El valor {{cssxref("&lt;number&gt;")}} representa _píxeles_ para imágenes de mapa de bits y _coordenadas_ para imágenes vectoriales. A su vez, los valores {{cssxref("&lt;percentage&gt;")}} son relativos a la altura o anchura de la imagen, según sea más adecuado. Valores negativos son inválidos, y valores mayores al tamaño relevante, altura o anchura, son restringidos a `100%`.
- _vertical_
  - : Es un valor {{cssxref("&lt;number&gt;")}} o {{cssxref("&lt;percentage&gt;")}} de la separación de las dos líneas de corte verticales, la izquierda y la derecha. El valor {{cssxref("&lt;number&gt;")}} representa _píxeles_ para imágenes de mapa de bits y _coordenadas_ para imágenes vectoriales. A su vez, los valores {{cssxref("&lt;percentage&gt;")}} son relativos a la altura o anchura de la imagen, según sea más adecuado. Valores negativos son inválidos, y valores mayores al tamaño relevante, altura o anchura, son restringidos a `100%`.
- _top_
  - : Es un valor {{cssxref("&lt;number&gt;")}} o {{cssxref("&lt;percentage&gt;")}} de la separación de la línea de corte superior. El valor {{cssxref("&lt;number&gt;")}} representa _píxeles_ para imágenes de mapa de bits y _coordenadas_ para imágenes vectoriales. A su vez, los valores {{cssxref("&lt;percentage&gt;")}} son relativos a la altura o anchura de la imagen, según sea más adecuado. Valores negativos son inválidos, y valores mayores al tamaño relevante, altura o anchura, son restringidos a `100%`.
- _bottom_
  - : Es un valor {{cssxref("&lt;number&gt;")}} o {{cssxref("&lt;percentage&gt;")}} de la separación de la línea de corte inferior. El valor {{cssxref("&lt;number&gt;")}} representa _píxeles_ para imágenes de mapa de bits y _coordenadas_ para imágenes vectoriales. A su vez, los valores {{cssxref("&lt;percentage&gt;")}} son relativos a la altura o anchura de la imagen, según sea más adecuado. Valores negativos son inválidos, y valores mayores al tamaño relevante, altura o anchura, son restringidos a `100%`.
- _right_
  - : Es un valor {{cssxref("&lt;number&gt;")}} o {{cssxref("&lt;percentage&gt;")}} de la separación de la línea de corte derecha. El valor {{cssxref("&lt;number&gt;")}} representa _píxeles_ para imágenes de mapa de bits y _coordenadas_ para imágenes vectoriales. A su vez, los valores {{cssxref("&lt;percentage&gt;")}} son relativos a la altura o anchura de la imagen, según sea más adecuado. Valores negativos son inválidos, y valores mayores al tamaño relevante, altura o anchura, son restringidos a `100%`.
- _left_
  - : Es un valor {{cssxref("&lt;number&gt;")}} o {{cssxref("&lt;percentage&gt;")}} de la separación de la línea de corte izquierda. El valor {{cssxref("&lt;number&gt;")}} representa _píxeles_ para imágenes de mapa de bits y _coordenadas_ para imágenes vectoriales. A su vez, los valores {{cssxref("&lt;percentage&gt;")}} son relativos a la altura o anchura de la imagen, según sea más adecuado. Valores negativos son inválidos, y valores mayores al tamaño relevante, altura o anchura, son restringidos a `100%`.
- `fill`
  - : Es una palabra clave cuya presencia forza que la región media de la imagen sea mostrada sobre la imagen de fondo; su tamaño y altura son redimensionados acorde a los fragmentos superior e izquierdo, respectivamente.
- `inherit`
  - : Es una palabra clave que indica que los cuatro valores serán heredados de los valores calculados de su elemento padre.

### Sintaxis formal

{{csssyntax}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Illustrated description of the 1-to-4-value syntax](/es/docs/Web/CSS/Shorthand_properties#Tricky_edge_cases)
