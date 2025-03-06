---
title: gamepaddisconnected
slug: Web/API/Window/gamepaddisconnected_event
---

{{APIRef}}

Событие `gampaddisconnected` вызывается, когда браузер обнаруживает, что геймпад был отключён.

## Основная информация

- Спецификация
  - : [Gamepad](https://www.w3.org/TR/gamepad/#the-gamepaddisconnected-event)
- Интерфейс
  - : Event
- Всплывающее
  - : Нет
- Отменяемое
  - : Нет
- Цель
  - : DefaultView (`<window>`)
- Действие по умолчанию
  - : Отсутствует

## Свойства

| Свойство                        | Тип                        | Описание                                                                          |
| ------------------------------- | -------------------------- | --------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | Цель события (самый верхний элемент DOM дерева).                                  |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}   | Тип события.                                                                      |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}      | Является ли событие всплывающим.                                                  |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}      | Является ли событие отменяемым.                                                   |
| `gamepad` {{readonlyInline}}    | {{domxref("Gamepad")}}     | Единственный атрибут, предоставляющий доступ к данным геймпада для этого события. |

## Связанные события

- [`gamepadconnected`](/ru/docs/Web/API/Window/gamepadconnected_event)

## Смотрите также

- [Using Gamepad API](/ru/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
