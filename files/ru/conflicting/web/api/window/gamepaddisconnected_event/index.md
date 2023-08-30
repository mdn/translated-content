---
title: Window.ongamepaddisconnected
slug: conflicting/Web/API/Window/gamepaddisconnected_event
original_slug: Web/API/Window/ongamepaddisconnected
---

{{DefaultAPISidebar("Gamepad API")}}{{SeeCompatTable}}

Свойство **`ongamepaddisconnected`** интерфейса {{domxref("Window")}} представляет собой обработчик события, который будет вызван при отключении геймпада (когда сработает событие {{event('gamepaddisconnected')}}).

Тип объекта события {{domxref("GamepadEvent")}}.

## Синтаксис

```
window.ongamepaddisconnected = function() { ... };
```

## Пример

```js
window.ongamepaddisconnected = function() {
  // A gamepad has been disconnected
};
```

## Спецификация

{{Specifications}}

## Браузерная совместимость

{{Compat}}

## Смотрите также

- [The Gamepad API](https://hacks.mozilla.org/2013/12/the-gamepad-api/) by Ted Mielczarek and Robert Nyman
- [Simple API demo page](http://luser.github.io/gamepadtest/) ([source](https://github.com/luser/gamepadtest))
