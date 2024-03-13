---
title: GamepadEvent
slug: Web/API/GamepadEvent
---

{{APIRef("Gamepad API")}}

`GamepadEvent` интерфейс {{ domxref("Gamepad API")}} содержит ссылки на геймпады, подключённые к системе, передающиеся при возникновении событий [Window.gamepadconnected](/ru/docs/Web/Events/gamepadconnected) и [Window.gamepaddisconnected](/ru/docs/Web/Events/gamepaddisconnected).

## Свойства

- {{ domxref("GamepadEvent.gamepad") }} {{ReadOnlyInline}}
  - : Возвращает объект {{ domxref("Gamepad") }}, предоставляющий доступ к данным геймпада, для возникнувшего события.

## Примеры

Свойства геймпада передаются при возникновении события [Window.gamepadconnected](/ru/docs/Web/Events/gamepadconnected).

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

И события [Window.gamepaddisconnected](/ru/docs/Web/Events/gamepaddisconnected).

```js
window.addEventListener("gamepaddisconnected", function (e) {
  console.log(
    "Gamepad disconnected from index %d: %s",
    e.gamepad.index,
    e.gamepad.id,
  );
});
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

[Using the Gamepad API](/ru/docs/Web/Guide/API/Gamepad)
