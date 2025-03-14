---
title: ImageBitmap
slug: Web/API/ImageBitmap
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{APIRef("Canvas API")}}

La interfaz **`ImageBitmap`** representa una imagen de mapa de bits que se puede dibujar en un {{HTMLElement("canvas")}} sin una latencia indebida. Se puede crear a partir de una variedad de objetos de origen utilizando el método de fábrica {{domxref("createImageBitmap()")}}. `ImageBitmap` proporciona una vía asíncrona y eficiente en recursos para preparar texturas para renderizar en WebGL.

`ImageBitmap` es un [objeto transferible](/es/docs/Web/API/Web_Workers_API/Transferable_objects).

## Propiedades de instancia

- {{domxref("ImageBitmap.height")}} {{ReadOnlyInline}}
  - : Un `unsigned long` que representa la altura, en píxeles CSS, de `ImageData`.
- {{domxref("ImageBitmap.width")}} {{ReadOnlyInline}}
  - : Un `unsigned long` que representa el ancho, en píxeles CSS, de `ImageData`.

## Métodos de instancia

- {{domxref("ImageBitmap.close()")}}
  - : Elimina todos los recursos gráficos asociados con un `ImageBitmap`.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{domxref("createImageBitmap()")}}
- {{domxref("CanvasRenderingContext2D.drawImage()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
- {{domxref("OffscreenCanvas.transferToImageBitmap()")}}
