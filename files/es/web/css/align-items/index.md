---
title: align-items
slug: Web/CSS/align-items
---

La propiedad [CSS](/es/docs/Web/CSS) **`align-items`** establece el valor {{cssxref("align-self")}} sobre todos los descendientes directos de un grupo. La propiedad align-self indica la alineación de un elemento dentro del bloque que lo contiene. En Flexbox controla la alineación de los elementos del {{glossary("Cross Axis")}}, en Grid Layout controla la alineación de los elementos en el eje Block dentro de su [área grid](/es/docs/Glossary/Grid_Areas).

El ejemplo interactivo a continuación demuestra algunos de los valores de `align-items` utilizando el sistema grid.

{{EmbedInteractiveExample("pages/css/align-items.html")}}

## Sintaxis

```css
/* Palabras Clave Basicas */
align-items: normal;
align-items: stretch;

/* Alineamiento posicional */
/* align-items no considera los valores de "left" o "right"  */
align-items: center; /* Agrupa los elementos alrededor del centro */
align-items: start; /* Agrupa los elementos desde el inicio */
align-items: end; /* Agrupa los elementos desde el final */
align-items: flex-start; /* Agrupa los elementos flex desde el incio */
align-items: flex-end; /* Agrupa los elementos flex desde el final */
align-items: self-start;
align-items: self-end;

/* Alineamiento de Linea Base */
align-items: baseline;
align-items: first baseline;
align-items: last baseline; /* Alineamiento de desborde (solamente para alineamiento posicional) */
align-items: safe center;
align-items: unsafe center;

/* Valores globales */
align-items: inherit;
align-items: initial;
align-items: unset;
```

### Valores

- `normal`
  - : El efecto de esta palabra clave depende del modo de diseño utilizado:

<!---->

- en diseños de absolutamente-posicionados, esta clave se comporta como `start` en cajas-absolutamente-posicionadas _reemplazadas_. y como `stretch` en _todas las demas_ cajas-absolutamente-posicionadas.
- En la posicion estatica de diseños absolutamenteposicionados, esta clave se comporta como `stretch`.
- Para elementos flex, la clave se comporta como `stretch`.
- Para elementos grid, Esta palabra clave conduce a un comportamiento similar al de `stretch`, excepto para cuadros con una relación de aspecto o un tamaño intrínseco donde se comporta como `start`.
- La propiedad no se aplica a cajas de nivel de bloque ni a celdas de tabla.

<!---->

- `flex-start`
  - : El límite del margen transversal inicial del elemento flexible es unido al borde transversal final de la línea.
- `flex-end`
  - : El límite del margen transversal final del elemento flexible es unido al borde transversal final de la línea.
- `center`
  - : Los márgenes del elemento flexible son centrados dentro de la línea sobre su eje transversal. Si el tamaño transversal del elemento es mayor al del contenedor, se excederá por igual en ambas direcciones.
- `start`
  - : Los elementos se agrupan uno junto al otro hacia el borde inicial del contenedor de alineación en el eje apropiado.
- `end`
  - : Los elementos se agrupan uno junto al otro hacia el borde final del contenedor de alineación en el eje apropiado.
- `baseline`
  - : Todos los elementos flexibles son ajustados de modo que sus bases queden alineadas. El elemento con la distancia mayor entre su límite transversal inicial y su base es combinado con el borde transversal de la línea.
- `stretch`
  - : Las elementos flexibles son estirados de modo que el tamaño transversal de sus límites sea el mismo de la línea, manteniendo sus restricciones de anchura y altura.

### Sintaxis formal

{{csssyntax}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Usando las cajas flexibles CSS](/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Usando_las_cajas_flexibles_CSS)
