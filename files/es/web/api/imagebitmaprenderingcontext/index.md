---
title: ImageBitmapRenderingContext
slug: Web/API/ImageBitmapRenderingContext
---

{{APIRef("Canvas API")}} {{SeeCompatTable}}

El interface **`ImageBitmapRenderingContext`** es un lienzo de contexto renderizado que sólo permite la funcionalidad de reemplazar el contenido del lienzo ( [`<canvas>`](/es/docs/Web/HTML/Element/canvas) ) con el {{domxref("ImageBitmap")}} dado. La identificación de contenido (el primer argumento a {{domxref("HTMLCanvasElement.getContext()")}} o {{domxref("OffscreenCanvas.getContext()")}} es `"bitmaprenderer"`.

Esta interface es posible en ambos , la ventana y el ["worker context"](/es/docs/Web/API/Web_Workers_API)(contexto de tabajo).

## Métodos

- {{domxref("ImageBitmapRenderingContext.transferFromImageBitmap()")}}
  - : Muestra el `ImageBitmap` en el lienzo asociado con el contexto de renderizado. La propiedad del `ImageBitmap` se transfiere al lienzo. Este se llamaba `transferImageBitmap()`, pero se renombra en un cambio especulativo . El viejo nombre se mantiene como un alias para evitar una ruptura del código.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{domxref("OffScreenCanvas")}}
