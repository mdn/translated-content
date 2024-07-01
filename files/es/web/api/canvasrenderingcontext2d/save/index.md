---
title: CanvasRenderingContext2D.save()
slug: Web/API/CanvasRenderingContext2D/save
---

{{APIRef}}

El método **`CanvasRenderingContext2D.save()`** del API Canvas 2D guarda el estado completo del canvas añadiendo el estado actual a una pila.

### El estado del dibujo

El estado del dibujo que se almacena en una pila consiste en los siguientes elementos:

- La matriz de transformación actual.
- La región de recorte actual.
- La lista de punteado actual.
- Los valores actuales de los siguientes atributos: {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}}, {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}}, {{domxref("CanvasRenderingContext2D.globalAlpha", "globalAlpha")}}, {{domxref("CanvasRenderingContext2D.lineWidth", "lineWidth")}}, {{domxref("CanvasRenderingContext2D.lineCap", "lineCap")}}, {{domxref("CanvasRenderingContext2D.lineJoin", "lineJoin")}}, {{domxref("CanvasRenderingContext2D.miterLimit", "miterLimit")}}, {{domxref("CanvasRenderingContext2D.lineDashOffset", "lineDashOffset")}}, {{domxref("CanvasRenderingContext2D.shadowOffsetX", "shadowOffsetX")}}, {{domxref("CanvasRenderingContext2D.shadowOffsetY", "shadowOffsetY")}}, {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}}, {{domxref("CanvasRenderingContext2D.shadowColor", "shadowColor")}}, {{domxref("CanvasRenderingContext2D.globalCompositeOperation", "globalCompositeOperation")}}, {{domxref("CanvasRenderingContext2D.font", "font")}}, {{domxref("CanvasRenderingContext2D.textAlign", "textAlign")}}, {{domxref("CanvasRenderingContext2D.textBaseline", "textBaseline")}}, {{domxref("CanvasRenderingContext2D.direction", "direction")}}, {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled", "imageSmoothingEnabled")}}.

## Sintaxis

```
void ctx.save();
```

## Ejemplos

### Guardando el estado del dibujo

Este ejemplo usa el método `save()` para guardar el estado por defecto y el método `restore()` para restaurarlo luego, de tal manera que luego se puede dibujar el segundo rectángulo con el estado por defecto.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Guardar el estado por defecto
ctx.save();

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);

// Restaurar el estado por defecto
ctx.restore();

ctx.fillRect(150, 40, 100, 100);
```

#### Resultado

{{ EmbedLiveSample('Saving_the_drawing_state', 700, 180) }}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- La interfaz donde se define este método: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.restore()")}}
