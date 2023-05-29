---
title: bottom
slug: Web/CSS/bottom
---

<< [Volver](/es/Gu%c3%ada_de_referencia_de_CSS)

### Resumen

La propiedad `bottom` especifica parte de la posición de un elemento (posicionado - es decir, con una posición determinada por código).

Para los elementos con una posición absoluta (aquellos que tienen la propiedad `position: absolute` o `position: fixed`), la propiedad bottom determina la distancia entre el borde inferior del elemento y el borde inferior de su bloque contenedor.

Para los elementos con una posición relativa (los que tienen la propiedad `position: relative`), la propiedad bottom determina la distancia que el elemento se mueve hacia arriba desde su posición normal. Sin embargo, la propiedad {{ Cssxref("top") }} se antepone a la propiedad bottom, por lo que si `top` no es `auto`, el valor computado de `bottom` es el valor negativo del valor computado de `top`.

- {{ Cssxref("initial", "Valor inicial") }}: {{ Cssxref("auto", "automático") }}
- Se aplica a: {{ Cssxref("position", "la posición de los elementos") }}
- {{ Cssxref("inheritance", "Heredado") }}: no
- Porcentajes: se refieren a la altura del bloque contenedor.
- Medio: {{ Cssxref("Media:Visual", "visual") }}
- {{ Cssxref("computed value", "Valor calculada") }}: valor absoluto, porcentaje o auto.

### Sintaxis

```
   bottom: <length> | <percentage> | auto | inherit
```

### Valores

- \<length>
  - : Una longitud, usada como se describe en el [resumen](#Resumen). Puede ser un valor negativo, cero o un valor positivo.
- \<percentage>
  - : Un porcentaje de la altura del bloque contenedor, usado como se describe en el [resumen](#Resumen).
- `auto`
  - : Para los elementos con posición absoluta, el elemento se posiciona en base a la propiedad {{ Cssxref("top") }} y por tanto se trata `height: auto` como una altura basada en el contenido del elemento. Para los elementos posicionados como relativos, especifica un desplazamiento desde su posición normal basada en la propiedad {{ Cssxref("top") }} o si, `top` es también `auto`, no se produce desplazamiento alguno.
- `inherit`
  - : Recoge el valor que tenga el elemento padre (que puede no ser el bloque contenedor). Este valor calculado es tratado como si fuera un valor \<length>, \<percentage> o `auto`.

### Ejemplos

```
element {
    position: absolute;
    bottom: 20px;
    height: 200px;
    border: 1px solid #000;
}
```

El siguiente ejemplo permite contrastar entre `position:absolute` y `position:fixed`. Cuando el texto ocupa un espacio más alto que la porción visible de la página (la porción visible en la ventana del navegador) los bloques posicionados con `position:absolute` se desplazarán junto con la página, mientras que los bloques posicionados con `position:fixed`, no lo harán.

- **Atención**: IE6 **no** soporta el código `position:fixed`.

```
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN"
   "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=iso-8859-1">
<title>Position at bottom, absolute or fixed</title>
<style type="text/css">
p {font-size:30px; line-height:3em;}
div.pos {width:49%; text-align:center; border:2px solid #00f;}
div#abs {position:absolute; bottom:0; left:0;}
div#fix {position:fixed; bottom:0; right:0;}
</style>
</head>
<body>
  <p>Esto<br>es<br>un texto<br>alto,<br>alto,
    <br>alto,<br>alto,<br>alto<br>de prueba.</p>
  <div id="fix" class="pos"><p>Fixed</p></div>
  <div id="abs" class="pos"><p>Absolute</p></div>
</body>
</html>
```

### Notas

Para los elementos posicionados de forma absoluta cuyo bloque contenedor sea un elemento de tipo bloque, esta propiedad es un desplazamiento a partir del borde de relleno (padding) de dicho elemento.

Para los elementos posicionados de forma absoluta, la propiedad `bottom` no tiene efectos visibles cuando los valores {{ Cssxref("top") }}, {{ Cssxref("height") }}, y {{ Cssxref("margin-top") }} _no_ son `auto` (que es el valor por defecto para `top` y `height`).

### Especificaciones

- [CSS 2.1 (en)](http://www.w3.org/TR/CSS21/visuren.html#propdef-bottom)
- [CSS 3 (en)](http://www.w3.org/Style/CSS/current-work#positioning)

### Compatibilidad entre navegadores

This is as far back as the documentaion goes.

| Navegador         | Versión mínima |
| ----------------- | -------------- |
| Internet Explorer | 5              |
| Firefox           | 1              |
| Netscape          | 6              |
| Opera             | 6              |

### Ver también

{{ Cssxref("position") }}, {{ Cssxref("top") }}, {{ Cssxref("right") }}, {{ Cssxref("left") }}

Categorías

Interwiki Languages
