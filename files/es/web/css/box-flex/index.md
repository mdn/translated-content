---
title: "-moz-box-flex"
slug: Web/CSS/box-flex
---

{{CSSRef}}

> **Advertencia:** Esta propiedad es para controlar parte del modelo de caja XUL. No coincide ni con el antiguo borrador del módulo CSS para el diseño de caja flexibles '`box-flex`' (que se basa en esta propiedad) ni con el comportamiento de '`-webkit-box-flex`' (que se basa en esos borradores).

Ver [Flexbox](/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) para más información acerca de qué usar en vez de esta propiedad.

## Resumen

Las propiedades [CSS](/es/docs/Web/CSS)`-moz-box-flex` y `-webkit-box-flex` especifican cómo una `-moz-box` o `-webkit-box` crecen para rellenar la caja que los contienen, en la dirección del diseño o esquema (layout) de la caja contenedora.Ver [Flexbox](/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) para más información sobre las propiedades de los elementos flexbox.

{{cssinfo}}

## Síntaxis

```css
/* Valores <number> */
-moz-box-flex: 0;
-moz-box-flex: 3;
-webkit-box-flex: 0;
-webkit-box-flex: 3;

/* Valores gloables */
-moz-box-flex: inherit;
-moz-box-flex: initial;
-moz-box-flex: unset;
```

### Valores

- 0
  - : La caja no crece.
- \> 0
  - : La caja crece para rellenar un proporción del espacio disponible..

### Síntaxis Formal

{{csssyntax}}

## Ejemplos

```html
<!doctype html>
<html>
  <head>
    <title>Ejemplo de -moz-box-flex</title>
    <style>
      div.example {
        display: -moz-box;
        display: -webkit-box;
        border: 1px solid black;
        width: 100%;
      }
      div.example > p:nth-child(1) {
        -moz-box-flex: 1; /* Mozilla */
        -webkit-box-flex: 1; /* WebKit */
        border: 1px solid black;
      }
      div.example > p:nth-child(2) {
        -moz-box-flex: 0; /* Mozilla */
        -webkit-box-flex: 0; /* WebKit */
        border: 1px solid black;
      }
    </style>
  </head>
  <body>
    <div class="example">
      <p>Creceré para rellenar un espacio extra</p>
      <p>No creceré</p>
    </div>
  </body>
</html>
```

## Notas

La caja contenedora asigna el espacio extra disponible de manera proporcional al valor flex de cada uno de los elementos que contiene.

Los elementos dentro del contenedor que tienen 0 flex no crecen.

Si śolo uno de los elementos tiene un valor distinto de cero ocupará todo el espacio disponible.

Los elementos que tienen el mismo valor para flex crecen en la misma cantidad en términos absolutos.

Si el valor flex se ha establecido usando el atributo flex del elemento, entonces el estilo es ignorado.

Para hacer que los elementos XUL dentro de una caja contenedora tengan el mismo tamaño, fijaremos el atributo `equalsize` de la caja contenedora a `always`. Este atributo no tiene correspondencia con ninguna propiedad CSS.

Un truco para hacer que todos los elementos dentro una caja contenedora tengan el mismo tamaño es darles un tamaño fijo,(por ejemplo `height: 0`), y el mismo valor box-flex mayor que cero a todos (por ejemplo `-moz-box-flex: 1`).

## Especificaciones

Esta propiedad es una extensión no estándar. Había una [old draft of the CSS3 Flexbox specification](http://www.w3.org/TR/2009/WD-css3-flexbox-20090723/) que definía una propiedad `box-flex`, pero ese borrador nunca ha sido sustituido.

## Compatibilidad con navegadores

{{Compat}}

## Ver además

{{cssxref("-moz-box-orient")}}, {{cssxref("-moz-box-pack")}}, {{cssxref("-moz-box-direction")}}, {{cssxref("flex")}}
