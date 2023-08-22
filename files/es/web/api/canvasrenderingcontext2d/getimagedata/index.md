---
title: CanvasRenderingContext2D.getImageData()
slug: Web/API/CanvasRenderingContext2D/getImageData
---

{{APIRef}}

El método CanvasRenderingContext2D.getImageData() de la API de Canvas 2D devuelve un objeto ImageData que representa los datos de píxeles subyacentes para el área del lienzo denotada por el rectángulo que comienza en (sx, sy) y tiene un ancho de sw y una altura de sh. Este método no se ve afectado por la matriz de transformación de la lona.

Los píxeles fuera del área del lienzo están presentes como valores negros transparentes en los datos de imagen devueltos.

## Sintaxis

```
ImageData ctx.getImageData(sx, sy, sw, sh);
```

### Parámetros

- `sx`
  - : La coordenada 'x' de la esquina superior izquierda del rectángulo del que se extraerán los datos de imagen.
- `sy`
  - : La coordenada 'y' de la esquina superior izquierda del rectángulo del que se extraerá el ImageData.
- `sw`
  - : El ancho del rectángulo del que se extraerán los datos de la imagen.
- `sh`
  - : La altura del rectángulo del que se extraerán los datos de la imagen.

### Valor de retorno

An [`ImageData`](/es/docs/Web/API/ImageData) object containing the image data for the given rectangle of the canvas.

### Errores cometidos

- IndexSizeError
  - : Lanzado si cualquiera de los argumentos de anchura o altura es cero.

## Ejemplos

### Usando el método getImageData

Esto es sólo un simple fragmento de código que utiliza el método getImageData. Para obtener más información, consulte [Manipulación de píxeles con Canvas](/es/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas) y el objeto ImageData.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.rect(10, 10, 100, 100);
ctx.fill();

console.log(ctx.getImageData(50, 50, 100, 100));
// ImageData { width: 100, height: 100, data: Uint8ClampedArray[40000] }
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- La interfaz que lo define, {{domxref("CanvasRenderingContext2D")}}.
- {{domxref("ImageData")}}
- [Manipulación de píxeles con Canvas](/es/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
