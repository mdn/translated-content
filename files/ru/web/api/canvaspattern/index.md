---
title: CanvasPattern
slug: Web/API/CanvasPattern
---

{{APIRef("Canvas API")}}

**`CanvasPattern`** представляет собой интерфейс [непрозрачного объекта](https://en.wikipedia.org/wiki/Opaque_data_type), описывающего шаблон, который может быть представлен как картинка, canvas или видео.

**`CanvasPattern`** создаётся с помощью метода {{domxref("CanvasRenderingContext2D.createPattern()")}}.

Может быть использован как {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} или {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}}.

## Свойства

_Не имеет доступных свойств._

## Методы

_Не имеет унаследованных методов._

- {{domxref("CanvasPattern.setTransform()")}} {{experimental_inline}}
  - : Используется в качестве {{domxref("SVGMatrix")}} представления линейной трансформации.

## Спецификации

{{Specifications}}

## Браузерная совместимость

{{Compat}}

## Смотрите также

- {{domxref("CanvasRenderingContext2D.createPattern()")}}
- {{HTMLElement("canvas")}} тег и связанный с ним интерфейс - {{domxref("HTMLCanvasElement")}}
