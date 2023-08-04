---
title: self.createImageBitmap()
slug: Web/API/createImageBitmap
---

{{APIRef("Canvas API")}}

El método **`createImageBitmap()`** crea un _bitmap_ a partir de un recurso especificado, opcionalmente recortado para mostrar únicamente una porción de este. El método existe a nivel global como parte, tanto de las ventanas (_window_), como de los _workers_. Este admite una variedad de tipos de entrada, y devuelve una {{domxref("Promise")}} que es resuelta con un {{domxref("ImageBitmap")}}.

## Sintaxis

```
createImageBitmap(image[, options]).then(function(response) { ... });
createImageBitmap(image, sx, sy, sw, sh[, options]).then(function(response) { ... });
```

### Parámetros

- `image`
  - : Un recurso/imagen origen, que puede uno de los siguientes elementos: {{HTMLElement("img")}}, SVG {{SVGElement("image")}}, {{HTMLElement("video")}}, {{HTMLElement("canvas")}}, {{domxref("HTMLImageElement")}}, {{domxref("SVGImageElement")}}, {{domxref("HTMLVideoElement")}}, {{domxref("HTMLCanvasElement")}}, {{domxref("Blob")}}, {{domxref("ImageData")}}, {{domxref("ImageBitmap")}}, o {{domxref("OffscreenCanvas")}}.
- `sx`
  - : La coordenada x del rectángulo que será usado para la extracción del `ImageBitmap`.
- `sy`
  - : La coordenada y del rectángulo que será usado para la extracción del `ImageBitmap`.
- `sw`
  - : La anchura del rectángulo que será usado para extraer el `ImageBitmap`. El valor podría ser negativo.
- `sh`
  - : La altura del rectángulo que será usado para extraer el `ImageBitmap`. El valor podría ser negativo.
- `options` {{optional_inline}}

  - : Un objeto que proporciona opciones para la extracción de la imagen. Las opciones posibles son:

    - `imageOrientation`: Especifica si la imagen debe ser extraida tal y como se muestra, o debe ser volteada verticalmente. Las valores posibles: `none` (por defecto) o `flipY`.
    - `premultiplyAlpha`: Especifica si los canales de color del mapa de bits generado deben premultiplicarse por el canal alpha. Uno de: `none`, `premultiply`, o `default` (por defecto).
    - `colorSpaceConversion`: Especifica si la imagen debe ser decodificada usando conversión del espacio de color. Uno de: `none` o `default` (por defecto). El valor `default` indica que se usará la implementación que haya disponible.
    - `resizeWidth`: Un entero largo que especifica la anchura final.
    - `resizeHeight`: Un entero largo que especifica la altura final.
    - `resizeQuality`: Especifica que algorítmo debe ser usado en el redimensionado para alcanzar las dimensiones deseadas. Uno de estos valores: `pixelated`, `low` (por defecto), `medium`, o `high`.

### Valor devuelto

Una {{domxref("Promise")}} que es resuelta con un objeto {{domxref("ImageBitmap")}}, el cual contiene los datos del mapa de bits generado para el rectángulo dado.

## Ejemplo

### Creando sprites desde un sprite sheet

El siguiente ejemplo carga un _sprite sheet_, extrae los _sprites_, y muestra cada uno de ellos en el _canvas_. Un _sprite sheet_ es una imagen que contiene multiples imágenes más pequeñas, que finalmente son utilizadas de manera individual.

```js
var canvas = document.getElementById("myCanvas"),
  ctx = canvas.getContext("2d"),
  image = new Image();

// Esperar que el sprite sheet se cargue
image.onload = function () {
  Promise.all([
    // Recortar dos sprites del conjunto
    createImageBitmap(image, 0, 0, 32, 32),
    createImageBitmap(image, 32, 0, 32, 32),
  ]).then(function (sprites) {
    // Pintar cada uno de los sprites en el canvas
    ctx.drawImage(sprites[0], 0, 0);
    ctx.drawImage(sprites[1], 32, 32);
  });
};

// Cargar el sprite sheet desde un archivo de imagen
image.src = "sprites.png";
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{domxref("CanvasRenderingContext2D.drawImage()")}}
- {{domxref("ImageData")}}
