---
title: hashchange
slug: Web/API/Window/hashchange_event
---

Событие `hashchange` генерируется когда изменяется идентификатор фрагмента URL (т.е. часть URL следующая за символом #, включая сам символ #).

## Общая информация

- Спецификация
  - : [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/history.html#event-hashchange)
- Интерфейс
  - : HashChangeEvent
- Bubbles
  - : Yes
- Cancelable
  - : No
- Target
  - : defaultView
- Действие по умолчанию
  - : None

## Свойства

| Property                        | Type                       | Description                                           |
| ------------------------------- | -------------------------- | ----------------------------------------------------- |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The browsing context (`window`).                      |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}   | The type of event.                                    |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}      | Whether the event normally bubbles or not.            |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}      | Whether the event is cancellable or not.              |
| `oldURL` {{readonlyInline}}     | {{jsxref("String")}}       | The previous URL from which the window was navigated. |
| newURL {{readonlyInline}}       | {{jsxref("String")}}       |                                                       |

## Совместимость с браузерами

{{Compat}}

## Похожие события

- [`popstate`](/ru/docs/Mozilla_event_reference/popstate)
