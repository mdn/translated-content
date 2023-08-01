---
title: line-height
slug: Web/CSS/line-height
---

{{ CSSRef() }}

### Resumen

La propiedad [CSS](/es/docs/Web/CSS) `line-height` establece la altura de una casilla remarcada por líneas. Comúnmente se usa para establecer la distancia entre líneas de texto. A nivel de elementos de bloque, define la altura mínima de las casillas encuadradas por líneas dentro del elemento. En elementos en linea no reemplazables, especifica la altura que se usa para calcular la altura de la casila encuadrada por líneas.

- {{ Cssxref("initial", "Valor inicial") }}: {{ Cssxref("normal") }}
- Aplicable a: todos los elementos.
- {{ Cssxref("inheritance", "Valor heredado") }}: sí
- Porcentajes: se refieren a tamaño de la fuente del elemento mismo.
- Medio: {{ Xref_cssvisual() }}
- {{ Cssxref("computed value", "Valor calculado") }}: para los valores \<length> y \<percentage>, el valor absoluto, en otro caso, como se especifica.

## Syntax

```
/* Keyword value */
line-height: normal;

/* Unitless values: usa esta cifra multiplicada por el tamaño de fuente
del elemento */
line-height: 3.5;

/* <longitud> valores */
line-height: 3em;

/* <porcentaje> valores */
line-height: 34%;

/* Valores absolutos */
line-height: inherit;
line-height: initial;
line-height: unset;
```

### Valores

- `normal`
  - : Depende del agente del usuario. Los navegadores de escritorio (incluido Firefox) usan un valor por defecto de apenas **1.2,** dependiendo del `font-family` del elemento.
- `<número>`
  - : El valor utilizado es este `<número>` sin unidades multiplicado por el propio tamaño de fuente del elemento. El valor calculado es el mismo que el [`<número>`](/es/docs/Web/CSS/number) especificado. En la mayoría de los casos, esta es la forma preferida de establecer `line-height` y evitar resultados inesperados debido a la herencia.
- `<longitud>`
  - : La [`<longitud>`](/es/docs/Web/CSS/length) especificada se utiliza en el cálculo de la altura de la casilla encuadrada por líneas. Los valores dados en unidades `em` pueden producir resultados inesperados (ver ejemplo más abajo).
- `<porcentaje>`
  - : En relación con el tamaño de fuente del elemento en sí. El valor calculado es este [\<porcentaje>](/es/docs/Web/CSS/porcentaje) multiplicado por el tamaño de letra del elemento calculado. Los valores porcentuales pueden producir resultados inesperados (ver el segundo ejemplo a continuación).

### Ejemplos

```
/* Todas las reglas debajo ofrecen la misma line-height resultante */

div { line-height: 1.2;   font-size: 10pt; }   /* número/unitless */
div { line-height: 1.2em; font-size: 10pt; }   /* longitud */
div { line-height: 120%;  font-size: 10pt; }   /* porcentaje */
div { font: 10pt/1.2  Georgia,"Bitstream Charter",serif; } /* font shorthand */
```

A menudo es más conveniente establecer el `line-height` usando {{cssxref("font")}} abreviadamente, como se muestra arriba, pero esto también requiere especificar la propiedad `font-family`.

### Especificaciones

{{Specifications}}

### Compatibilidad de navegadores

{{Compat}}

### Ver también

{{ Cssxref("font-size") }}
