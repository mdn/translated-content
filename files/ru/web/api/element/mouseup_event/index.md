---
title: "Element: событие mouseup"
slug: Web/API/Element/mouseup_event
l10n:
  sourceCommit: b965392d6e4f2c897e914a3b69dec3e2a4212782
---

{{APIRef}}

Событие **`mouseup`** возникает, когда отпускается кнопка на устройстве ввода (таком как мышь или трекпад) и указатель находится внутри {{domxref("Element", "элемента")}}.

События `mouseup` являются противоположностью событиям {{domxref("Element.mousedown_event", "mousedown")}}.

## Синтаксис

Используйте имя события в методе {{domxref("EventTarget.addEventListener", "addEventListener()")}} или при установке обработчика события.

```js
addEventListener("mouseup", (event) => {});

onmouseup = (event) => {};
```

## Тип события

{{domxref("MouseEvent")}}, наследуется от {{domxref("Event")}}.

{{InheritanceDiagram("MouseEvent")}}

## Свойства события

_Этот интерфейс также наследует свойства родителей, {{domxref("UIEvent")}} и {{domxref("Event")}}._

- {{domxref("MouseEvent.altKey")}} {{ReadOnlyInline}}
  - : Возвращает `true` если во время события была нажата клавиша <kbd>alt</kbd>.
- {{domxref("MouseEvent.button")}} {{ReadOnlyInline}}
  - : Номер кнопки, которая была нажата (если есть такая информация).
- {{domxref("MouseEvent.buttons")}} {{ReadOnlyInline}}
  - : Кнопки, которые были нажаты (если есть такая информация).
- {{domxref("MouseEvent.clientX")}} {{ReadOnlyInline}}
  - : Координата X указателя мыши в [системе координат области просмотра](/ru/docs/Web/CSS/CSSOM_view/Coordinate_systems#viewport).
- {{domxref("MouseEvent.clientY")}} {{ReadOnlyInline}}
  - : Координата Y указателя мыши в [системе координат области просмотра](/ru/docs/Web/CSS/CSSOM_view/Coordinate_systems#viewport).
- {{domxref("MouseEvent.ctrlKey")}} {{ReadOnlyInline}}
  - : Возвращает `true` если во время события была нажата клавиша <kbd>control</kbd>.
- {{domxref("MouseEvent.layerX")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : Возвращает координату события по горизонтали относительно текущего слоя.
- {{domxref("MouseEvent.layerY")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : Возвращает координату события по вертикали относительно текущего слоя.
- {{domxref("MouseEvent.metaKey")}} {{ReadOnlyInline}}
  - : Возвращает `true` если во время события была нажата клавиша <kbd>meta</kbd>.
- {{domxref("MouseEvent.movementX")}} {{ReadOnlyInline}}
  - : Координата X указателя относительно позиции последнего события {{domxref("Element/mousemove_event", "mousemove")}}.
- {{domxref("MouseEvent.movementY")}} {{ReadOnlyInline}}
  - : Координата Y указателя относительно позиции последнего события {{domxref("Element/mousemove_event", "mousemove")}}.
- {{domxref("MouseEvent.offsetX")}} {{ReadOnlyInline}}
  - : Координата X указателя относительно границ целевого узла.
- {{domxref("MouseEvent.offsetY")}} {{ReadOnlyInline}}
  - : Координата Y указателя относительно границ целевого узла.
- {{domxref("MouseEvent.pageX")}} {{ReadOnlyInline}}
  - : Координата X указателя относительно документа.
- {{domxref("MouseEvent.pageY")}} {{ReadOnlyInline}}
  - : Координата Y указателя относительно документа.
- {{domxref("MouseEvent.relatedTarget")}} {{ReadOnlyInline}}
  - : Вторичная цель события, если она есть.
- {{domxref("MouseEvent.screenX")}} {{ReadOnlyInline}}
  - : Координата X указателя в [экранных координатах](/ru/docs/Web/CSS/CSSOM_view/Coordinate_systems#screen).
- {{domxref("MouseEvent.screenY")}} {{ReadOnlyInline}}
  - : Координата Y указателя в [экранных координатах](/ru/docs/Web/CSS/CSSOM_view/Coordinate_systems#screen).
- {{domxref("MouseEvent.shiftKey")}} {{ReadOnlyInline}}
  - : Возвращает `true` если во время события была нажата клавиша <kbd>shift</kbd>.
- {{domxref("MouseEvent.mozInputSource")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Тип устройства, вызвавшего событие (одна из констант `MOZ_SOURCE_*`).
    Помогает определить, было ли событие вызвано мышью или событием касания (что может повлиять на степень точности, с которой следует интерпретировать координаты).
- {{domxref("MouseEvent.webkitForce")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Величина давления, оказываемого при нажатии.
- {{domxref("MouseEvent.x")}} {{ReadOnlyInline}}
  - : Синоним для {{domxref("MouseEvent.clientX")}}.
- {{domxref("MouseEvent.y")}} {{ReadOnlyInline}}
  - : Синоним для {{domxref("MouseEvent.clientY")}}.

## Примеры

Смотрите примеры кода в описании [события `mousemove`](/ru/docs/Web/API/Element/mousemove_event#examples).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Введение в события](/ru/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/mousemove_event", "mousemove")}}
- {{domxref("Element/click_event", "click")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mouseover_event", "mouseover")}}
- {{domxref("Element/mouseout_event", "mouseout")}}
- {{domxref("Element/mouseenter_event", "mouseenter")}}
- {{domxref("Element/mouseleave_event", "mouseleave")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
