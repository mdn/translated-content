---
title: "-moz-image-region"
slug: Web/CSS/-moz-image-region
---

{{Non-standard_header}}{{CSSRef}}

_Para sistemas que funcionan con cualquier fondo ver {{ Cssxref("-moz-image-rect") }}._

## Resumen

Para cierto elementos y pseudo-elementos XUL que usan una imagen para la propiedad {{cssxref("list-style-image")}}, esta propiedad especifica la parte de una imagen que es usada en lugar en vez de la imagen completa. Esto permite a los elementos usar diferentes partes de la misma imagen para mejorar el rendimiento.

La síntaxis es similar a la síntaxis de la propiedad {{cssxref("clip")}}. Los 4 valors son relativos la esquina superior izquierda de la imagen.

{{cssinfo}}

## Síntaxis

{{csssyntax}}

## Ejemplos

```css
#example-button {
  /* muestra sólo el área 4x4 desde la esquina izquierda de esta imagen */
  list-style-image: url("chrome://example/skin/example.png");
  -moz-image-region: rect(0px, 4px, 4px, 0px);
}
#example-button:hover {
  /* muestra sólo el área 4x4 a la derecha del primero para cuando pongamos el ratón sobre el botón */
  -moz-image-region: rect(0px, 8px, 4px, 4px);
}
```
