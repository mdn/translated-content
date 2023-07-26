---
title: "-moz-image-rect"
slug: Web/CSS/-moz-image-rect
---

{{Non-standard_header}}{{CSSRef}}

## Resumen

Este valor para la propiedad [CSS](/es/docs/Web/CSS) {{cssxref("background-image")}} te permite usar una parte de una imagen de gran tamaño como fondo. Esto permitirá, por ejemplo, usar diferentes partes de una imagen grande como si fueran una sóla imagen grande usada como fondo de diferentes partes de tú contenido.

Funciona de manera similar a la propiedad {{cssxref("-moz-image-region")}} , que se usa junto con la propiedad{{cssxref("list-style-image")}} para utilizar partes de imágnes como iconos de listas. Sin embargo puede ser usado para cualquier fondo CSS.

La síntaxis para el rectánigulo es similar a la de la función [`rect()`](/es/docs/Web/CSS/shape#Syntax) y genera un tipo CSS {{cssxref("&lt;shape&gt;")}} . Los cuatro valores son relativos a la esquina superior izquierda de la imagen.

## Síntaxis

```
-moz-image-rect({{cssxref("&lt;uri&gt;")}}, top, right, bottom, left);
```

### Valores

- {{cssxref("&lt;uri&gt;")}}
  - : La URI de la imagen de la que se cogera una parte.
- `top`
  - : El borde superior, especificado como {{cssxref("&lt;length&gt;")}}, de la subimagen dentro de la imagen seleccionada.
- `right`
  - : El borde derecho, especificado como {{cssxref("&lt;length&gt;")}}, de la subimagen dentro de la imagen seleccionada.
- `bottom`
  - : El borde inferior, especificado como {{cssxref("&lt;length&gt;")}}, de la subimagen dentro de la imagen seleccionada.
- `left`
  - : El borde izquierdo, especificado como {{cssxref("&lt;length&gt;")}}, de la subimagen dentro de la imagen seleccionada.

## Ejemplo

Este ejemplo carga una imagen y la usa en cuatro segmento para dibujar el logo de Firefox en cuatro bloques {{HTMLElement("div")}} blocks. Si hacemos click en el contenedor los cuatro segmentos rotarán cmabiando los valores de la propiedad {{cssxref("background-image")}} entre estos cuatro bloques {{HTMLElement("div")}}.

### CSS

El CSS define un estilo para el contenedor y, posteriormente los estilos para las cuatro cajas que comprenden la imagen completa.

Para el contenedor:

```css
#container {
  width: 267px;
  height: 272px;
  top: 100px;
  left: 100px;
  position: absolute;
  font-size: 16px;
  text-shadow: white 0px 0px 6px;
  text-align: center;
}
```

posteriormente las cuatro caja se defines las cajas que especifican los segmentos de la imagen. La vamos a ver una por una.

```css
#box1 {
  background-image: -moz-image-rect(url(firefox.png), 0%, 50%, 50%, 0%);
  width: 133px;
  height: 136px;
  position: absolute;
}
```

Esta es la esquina superior izquierda de la imagen. Define un rectángulo que contiene el cuartil superior izquierda de la imagen `firefox.jpg`.

```css
#box2 {
  background-image: -moz-image-rect(url(firefox.png), 0%, 100%, 50%, 50%);
  width: 133px;
  height: 136px;
  position: absolute;
}
```

Esto define la esquina superior derecha:

Las otras dos siguen un patrón similar:

```css
#box3 {
  background-image: -moz-image-rect(url(firefox.png), 50%, 50%, 100%, 0%);
  width: 133px;
  height: 136px;
  position: absolute;
}
#box4 {
  background-image: -moz-image-rect(url(firefox.png), 50%, 100%, 100%, 50%);
  width: 133px;
  height: 136px;
  position: absolute;
}
```

### HTML

Es bastante simple:

```html
<div id="container" onclick="rotate()">
  <div id="box1" style="left:0px;top:0px;">Top left</div>
  <div id="box2" style="left:133px;top:0px;">Top right</div>
  <div id="box3" style="left:0px;top:136px;">Bottom left</div>
  <div id="box4" style="left:133px;top:136px;">Bottom right</div>
</div>
```

Sitúa los 4 segmentos de una imagen en un caja de 2x2 celdas. Estos cuatro elementos están dentro de un bloque {{HTMLElement("div")}} más grande cuya función es recibir eventos click y mandarlos al código JavaScript.

### El codigo javaScript

Gestiona el evento click cuando el contenedor recibe un click de ratón

```js
function rotate() {
  var prevStyle = window
    .getComputedStyle(document.getElementById("box4"), null)
    .getPropertyValue("background-image");

  // Una vez hemos guardado la última, empezamos a rotar.

  for (var i = 1; i <= 4; i++) {
    var curId = "box" + i;

    // Permuta las imágenes de fondo.

    var curStyle = window
      .getComputedStyle(document.getElementById(curId), null)
      .getPropertyValue("background-image");
    document.getElementById(curId).style.backgroundImage = prevStyle;
    prevStyle = curStyle;
  }
}
```

Usa {{domxref("window.getComputedStyle()")}} para establecer el estilo de cada elemento, cambiándolo al elemento posterior. Destacar que, una vez se empieza se guarda una copia del estilo de la última caja ya que será sobreescrito por el tercer elemento. Simplemente copiando los valores de la propiedad {{cssxref("background-image")}} de un elemento al siguiente, cuando hacemos click de ratón, conseguiremos el efecto deseado.

### Como queda

{{EmbedLiveSample("Example","400","400")}}

### Bugs

- [Error 32177 en WebKit](https://webkit.org/b/32177)
