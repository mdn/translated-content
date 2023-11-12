---
title: ImageBitmap
slug: Web/API/ImageBitmap
---

{{APIRef("Canvas API")}}

Интерфейс **`ImageBitmap`** представляет собой bitmap изображение которое может быть нарисовано на {{HTMLElement("canvas")}} без чрезмерной задержки. Создать его можно несколькими способами используя {{domxref("ImageBitmapFactories.createImageBitmap", "createImageBitmap()")}}. `ImageBitmap` предоставляет асинхронный и ресурсоэффективный метод подготовки текстур для рендеринга в WebGL.

## Свойства

- {{domxref("ImageBitmap.height")}} {{readonlyInline}}
  - : Высота `ImageData` в CSS пикселях типа `unsigned` `long`.
- {{domxref("ImageBitmap.width")}} {{readonlyInline}}
  - : Ширина `ImageData` в CSS пикселях типа `unsigned` `long`.

## Методы

- {{domxref("ImageBitmap.close()")}}
  - : Удаляет все графические ресурсы связанные с `ImageBitmap`.

## Спецификации

{{Specifications}}

## Совместимость

{{Compat}}

## Полезные ссылки

- {{domxref("ImageBitmapFactories.createImageBitmap()")}}
- {{domxref("CanvasRenderingContext2D.drawImage()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
- {{domxref("OffScreenCanvas.transferToImageBitmap()")}}
