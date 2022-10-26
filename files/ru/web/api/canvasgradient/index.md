---
title: CanvasGradient
slug: Web/API/CanvasGradient
tags:
  - API
  - Canvas
  - CanvasGradient
  - Градиенты
  - Интерфейс
  - Справка
translation_of: Web/API/CanvasGradient
---
{{APIRef("Canvas API")}}

Интерфейс **`CanvasGradient`** представляет собой непрозрачный объект, описывающий градиент. Он возвращается методами {{domxref("CanvasRenderingContext2D.createLinearGradient()")}} и {{domxref("CanvasRenderingContext2D.createRadialGradient()")}}.

## Свойства

_Representing an opaque object, there is no exposed property._

## Методы

_Не имеет наследованных методов._

- {{domxref("CanvasGradient.addColorStop()")}}
  - : Добавляет в градиент новый маркер, определяемый смещением и цветом. `Если смещение входдит за пределы 0` и `1`, генерируется `INDEX_SIZE_ERR`. Если не удаётся обработать цвет как CSS {{cssxref("&lt;color&gt;")}}, генерируется `SYNTAX_ERR`.

## Характеристики

| Характеристика                                                                                                       | Состояние                        | Комментарий |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', "the-canvas-element.html#canvasgradient", "CanvasGradient")}} | {{Spec2('HTML WHATWG')}} |             |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Методы создания в {{domxref("CanvasRenderingContext2D")}}.
- Элемент {{HTMLElement("canvas")}} и связанный с ним интерфейс {{domxref("HTMLCanvasElement")}}.
