---
title: <percentage>
slug: Web/CSS/percentage
---

{{CSSRef}}

## Sumario

Los tipos de dato `<porcentaje>` de [CSS](/en/CSS) representan un valor en forma de porcentaje. Muchas [propiedades de CSS](/en/CSS_Reference) pueden tomar valores porcentuales, siempre para definir longitudes con respecto al tamaño de los elementos padre. Los porcentajes estan formados por un [\<numero>](/es/docs/Web/CSS/number) seguido por el signo de porcentaje `%`. No hay un espacio entre el '%' y el numero.

Varias propriedades de longitud usan porcentajes, tales como `width, margin` y `padding`. Los porcentajes tambien se pueden ver en `font-size`, donde el tamaño del texto esta directamente relacionado al tamaño de su elemento padre.

> **Nota:** Solo los valores calculados son heredados. Entonces, incluso si un valor porcentual es usado en en la propiedad padre, un valor real, como una anchura en pixeles para un valor `<length>,`sera accesible en la propiedad heredada, no el valor porcentual.

## Interpolación

Los valores del tipo de dato `<porcentaje>` de CSS pueden ser interpolados en orden de permitir animaciones. En ese caso ellos son interpolados como numeros reales de punto flotante. La velocidad de la interpolación se determina por medio de la [funcion de temporizacion](/en/CSS/timing-function) asociada con la animacion.

## Examples

#### Usando `margin` y `width`

```html
<div style="background-color:#0000FF;">
  <div style="width:50%;margin-left:20%;background-color:#00FF00;">
    Width: 50%, Left margin: 20%
  </div>
  <div style="width:30%;margin-left:60%;background-color:#FF0000;">
    Width: 30%, Left margin: 60%
  </div>
</div>
```

El codigo de arriba se va a renderizar así:

{{EmbedLivesample}}

#### Usando `font-size`

```html
<div style="font-size:18px;">
  Full size text (18px)
  <span style="font-size:50%;">50%</span>
  <span style="font-size:200%;">200%</span>
</div>
```

El codigo de arriba de renderizara así:

{{EmbedLiveSample}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
