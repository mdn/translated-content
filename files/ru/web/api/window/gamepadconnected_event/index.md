---
title: gamepadconnected
slug: Web/API/Window/gamepadconnected_event
---

Событие `gamepadconnected` вызывается, когда браузер обнаруживает подключение геймпада или первое использование кнопки/стика.

## Основная информация

- Спецификация
  - : [Gamepad](http://www.w3.org/TR/gamepad/#the-gamepadconnected-event)
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

## Пример

```js
// Обратите внимание, что API всё ещё использует вендорные префиксы в браузерах, которые его реализуют
window.addEventListener("gamepadconnected", function (event) {
  // Все значения кнопок и стиков доступны через:
  event.gamepad;
});
```

## Связанные события

- {{event("gamepaddisconnected")}}

## Смотрите также

- [Using Gamepad API](/ru/docs/API/Gamepad/Using_Gamepad_API)
