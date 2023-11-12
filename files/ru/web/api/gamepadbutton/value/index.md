---
title: GamepadButton.value
slug: Web/API/GamepadButton/value
---

{{APIRef("Gamepad API")}}

Свойство **`GamepadButton.value`** интерфейса {{domxref("GamepadButton")}} возвращает состояние аналоговой клавиши геймпада, такой, как, например триггеры.

Представляет собой дробное число в диапазоне `0.0` — `1.0`, где `0.0` показывает, что кнопка не нажата, а 1.0 - что нажата полностью.

## Синтаксис

```
    readonly    attribute double  value;
```

## Пример

```js
var gp = navigator.getGamepads()[0];

if (gp.buttons[0].value > 0) {
  // respond to analog button being pressed in
}
```

## Значение

{{domxref("double")}}.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

[Using the Gamepad API](/ru/docs/Web/Guide/API/Gamepad)
