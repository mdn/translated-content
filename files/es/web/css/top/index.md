---
title: Top
slug: Web/CSS/top
---

{{ CSSRef() }}

### Sumario

La propiedad `top` especifica parte de la posición de un elemento posicionado. No tiene efecto en elementos no posicionados.

Para los elementos con una posición absoluta (aquellos que tienen la propiedad {{ Cssxref("position") }}`: absolute` o {{ Cssxref("position") }}`: fixed`), determina la distancia entre el borde superior del elemento y el borde superior del bloque que lo contiene.

Para los elementos con una posición relativa (aquellos que tienen la propiedad {{ Cssxref("position") }}`: relative`), determina el desplazamiento hacia abajo que tendrá el elemento con respecto a su posición normal.

Cuando se define tanto la propiedad `top` como {{cssxref("bottom")}} para un elemento, y {{cssxref("height")}} no se ha definido, tiene un valor `auto` o 100%, tanto la distancia `top` como {{cssxref("bottom")}} se respetan. Si {{cssxref("height")}} está definida, la aplicación de la propiedad `top` tiene precedencia y {{cssxref("bottom")}} será ignorada.

- [Valor inicial](/es/docs/Web/CSS/initial_value): {{ Cssxref("auto") }}
- Aplicable a: [Posicionar Elementos](/es/docs/Web/CSS/position)
- [Heredable](/es/docs/Web/CSS/Inheritance): no
- Porcentajes: se refieren a la altura del bloque contenedor.
- Medio: {{cssxref("Media/Visual", "visual")}}
- [Valor calculado](/es/docs/Web/CSS/computed_value): valor absoluto, porcentaje ó auto.

### Sintaxis

```
   top: <longitud> | <porcentaje> | auto | inherit
```

### Ejemplos

```css
/* se puede también usar unidades px para posicionar body para luego operar con el div */
body {
  width: 100%;
  height: 100%;
}
/* ahora podemos operar con unidades de porcentajes (con al 100% respecto de body) */
div {
  position: absolute;
  left: 15%;
  top: 30%;
  bottom: 30%;
  width: 70%;
  height: 40%;
  text-align: left;
  border: 3px rgb(0, 0, 0) solid;
}
```

```html
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
  <head>
    <meta http-equiv="Content-Type" content="application/xhtml+xml" />
    <title>Mozzila.org height top left width porcentaje CSS</title>
    <style type="text/css">
      /* se puede también usar unidades px para posicionar body para luego operar con el div */
      body {
        width: 100%;
        height: 100%;
      }
      /* ahora podemos operar con unidades de porcentajes (con respecto al 100% del body) */
      div {
        position: absolute;
        left: 15%;
        top: 30%;
        bottom: 30%;
        width: 70%;
        height: 40%;
        text-align: left;
        border: 3px rgb(0, 0, 0) solid;
      }
    </style>
  </head>
  <body>
    <center>
      <div>...Contenido...</div>
    </center>
  </body>
</html>
```

### Especificaciones

{{Specifications}}

### Compatibilidad con navegadores

{{Compat}}

### Ver también

{{ Cssxref("position") }}, {{ Cssxref("right") }}, {{ Cssxref("bottom") }}, {{ Cssxref("left") }}
