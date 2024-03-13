---
title: "-moz-box-ordinal-group"
slug: Web/CSS/box-ordinal-group
---

{{CSSRef}}

> **Advertencia:** Esta propiedad pertenece al borrador original del diseño o esquema de la caja CSS flexible, y ha sido reemplazada en borradores posteriores.

Ver [Flexbox](/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) para más información sobre qué usar en sustitución de esta propiedad.

## Resumen

Indica el grupo ordinal al que pertenece el elemento. Aquellos elementos con un grupo ordinal menor son mostrados antes que aquellos con un grupo ordinal mayor.

## Valores

Los valores deben ser enteros positivos (mayores de cero). El valor por defecto para esta propiedad es 1.

## Ejemplos

```html
<style type="text/css">
  #Flexbox {
    display: -ms-box;
    display: -moz-box;
    display: -webkit-box;
  }

  #text1 {
    background: red;
    -ms-box-ordinal-group: 4;
    -moz-box-ordinal-group: 4;
    -webkit-box-ordinal-group: 4;
  }

  #text2 {
    background: green;
    -ms-box-ordinal-group: 3;
    -moz-box-ordinal-group: 3;
    -webkit-box-ordinal-group: 3;
  }

  #text3 {
    background: blue;
    -ms-box-ordinal-group: 2;
    -moz-box-ordinal-group: 2;
    -webkit-box-ordinal-group: 2;
  }

  #text4 {
    background: orange;
  }
</style>

<div id="Flexbox">
  <div id="text1">text 1</div>
  <div id="text2">text 2</div>
  <div id="text3">text 3</div>
  <div id="text4">text 4</div>
</div>
```
