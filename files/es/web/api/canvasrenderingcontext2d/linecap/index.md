---
title: CanvasRenderingContext2D.lineCap
slug: Web/API/CanvasRenderingContext2D/lineCap
---

{{APIRef}}

La propiedad **`CanvasRenderingContext2D.lineCap`** del API Canvas 2D determina la forma usada para dibujar los puntos finales de las líneas.

> **Nota:** La líneas se puede dibujar con los métodos {{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}}, {{domxref("CanvasRenderingContext2D.strokeRect()", "strokeRect()")}}, y {{domxref("CanvasRenderingContext2D.strokeText()", "strokeText()")}}.

## Sintaxis

```
ctx.lineCap = "butt" || "round" || "square";
```

### Opciones

- `"butt"`
  - : Los finales de las líneas son recortados. Valor por defecto.
- `"round"`
  - : Los finales de las líneas son redondeados.
- `"square"`
  - : Los finales de líneas son recortados al agregar un cuadrado de ancho y altura igual que el grosor de línea.

## Ejemplos

### Cambiando los finales de línea

En este ejemplo se redondean los puntos finales de una línea recta.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineWidth = 15;
ctx.lineCap = "round";
ctx.lineTo(100, 100);
ctx.stroke();
```

#### Result

{{ EmbedLiveSample('Changing_the_shape_of_line_caps', 700, 180) }}

### Comparando los finales de línea

En este ejemplo se dibujan 3 líneas, cada una con un valor distinto de la propiedad `lineCap`. Se agregaron dos guías para resaltar las diferencias entre las tres líneas. Cada una de estas líneas empiezan y terminan en estas guías.

La línea de la izquiera usa la opción por defecto `"butt"`. Esta es dibujada completamente al ras de las líneas de guía. La segunda esta configurada para usar la opción `"round`. Esta agrega un semicírculo al final que tiene un radio de la mitad del grosor de línea. La línea de la derecha use la opción `"square"`. Esta agrega un cuadrado con ancho y altura de la mitad del grosor de línea.

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const lineCap = ["butt", "round", "square"];

// Draw guides
ctx.strokeStyle = "#09f";
ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(140, 10);
ctx.moveTo(10, 140);
ctx.lineTo(140, 140);
ctx.stroke();

// Draw lines
ctx.strokeStyle = "black";
for (let i = 0; i < lineCap.length; i++) {
  ctx.lineWidth = 15;
  ctx.lineCap = lineCap[i];
  ctx.beginPath();
  ctx.moveTo(25 + i * 50, 10);
  ctx.lineTo(25 + i * 50, 140);
  ctx.stroke();
}
```

{{EmbedLiveSample("Comparison_of_line_caps", "180", "180", "canvas_linecap.png")}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- La interfaz que define esta propiedad: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.lineWidth")}}
- {{domxref("CanvasRenderingContext2D.lineJoin")}}
- [Aplicando estilos y color](/es/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
