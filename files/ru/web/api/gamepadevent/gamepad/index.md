---
title: GamepadEvent.gamepad
slug: Web/API/GamepadEvent/gamepad
---

{{APIRef("Gamepad API")}}

Свойство **`GamepadEvent.gamepad`**, интерфейса **{{domxref("GamepadEvent")}},** возвращает объект {{domxref("Gamepad")}}, предоставляющий доступ к данным геймпада для событий [`gamepadconnected`](/ru/docs/Web/Events/gamepadconnected) и [`gamepaddisconnected`](/ru/docs/Web/Events/gamepaddisconnected).

> **Примечание:** Эти события не возникают Chrome, только в Firefox. В Chrome вы должны использовать {{domxref("Navigator.getGamepads")}} для доступа к объекту {{domxref("Gamepad")}}.

## Синтаксис

```
readonly    attribute Gamepad gamepad;
```

## Пример

Свойство `gamepad` будет передано при возникновении события [`Window.gamepadconnected`](/ru/docs/Web/Events/gamepadconnected).

```js
window.addEventListener("gamepadconnected", function (e) {
  console.log(
    "Gamepad connected at index %d: %s. %d buttons, %d axes.",
    e.gamepad.index,
    e.gamepad.id,
    e.gamepad.buttons.length,
    e.gamepad.axes.length,
  );
});
```

## Значение

Объект {{domxref("Gamepad")}}.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

[Using the Gamepad API](/ru/docs/Web/Guide/API/Gamepad)
