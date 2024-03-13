---
title: ImageData
slug: Web/API/ImageData
---

{{APIRef("Canvas API")}}

Интерфейс **`ImageData`** представляет лежащие в основе пиксельные данные области элемента {{HTMLElement("canvas")}}. Он создан используя конструктор {{domxref("ImageData.ImageData", "ImageData()")}} или метод создания объекта {{domxref("CanvasRenderingContext2D")}} ассоциированного с canvas: {{domxref("CanvasRenderingContext2D.createImageData", "createImageData()")}} и {{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}}. Он также может быть использован для установки части canvas используя метод {{domxref("CanvasRenderingContext2D.putImageData", "putImageData()")}}.

## Конструкторы

- {{domxref("ImageData.ImageData", "ImageData()")}} {{experimental_inline}}
  - : Создаёт ImageData из указанного {{jsxref("Uint8ClampedArray")}} и из размера изображения которого он содержит. Если массив не указан, то он создаёт изображение чёрного прямоугольника. Обратите внимание, что такой довольно распространённый путь создания подобного объекта в воркерах как {{domxref("CanvasRenderingContext2D.createImageData", "createImageData()")}} там не доступен.

## Свойства

- {{domxref("ImageData.data")}} {{readonlyInline}}
  - : Возвращает {{jsxref("Uint8ClampedArray")}} представляющий собой одномерный массив, содержащий данные цветовой модели RGBA, с целыми значениями от 0 до 255 (включительно).
- {{domxref("ImageData.height")}} {{readonlyInline}}
  - : Фактическая высота в пикселях объекта `ImageData`.
- {{domxref("ImageData.width")}} {{readonlyInline}}
  - : Фактическая ширина в пикселях объекта `ImageData`.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("CanvasRenderingContext2D")}}
- The {{HTMLElement("canvas")}} element and its associated interface, {{domxref("HTMLCanvasElement")}}.
