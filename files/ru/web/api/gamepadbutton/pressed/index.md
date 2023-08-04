---
title: GamepadButton.pressed
slug: Web/API/GamepadButton/pressed
---

{{APIRef("Gamepad API")}}

Свойство **`GamepadButton.pressed`** интерфейса {{domxref("GamepadButton")}} возвращает `boolean`, указывающий, нажата ли текущая кнопка (`true`), или нет (`false`).

## Синтаксис

```
var isPressed = navigator.getGamepads()[0].pressed;
```

## Пример

```js
var gp = navigator.getGamepads()[0]; // Get the first gamepad object

if (gp.buttons[0].pressed == true) {
  // respond to button being pressed
}
```

## Значение

{{domxref("boolean")}}.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## See also

- [Using the Gamepad API](/ru/docs/Web/Guide/API/Gamepad)
