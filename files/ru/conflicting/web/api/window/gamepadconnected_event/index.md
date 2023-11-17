---
title: Window.ongamepadconnected
slug: conflicting/Web/API/Window/gamepadconnected_event
original_slug: Web/API/Window/ongamepadconnected
---

{{DefaultAPISidebar("Gamepad API")}}{{SeeCompatTable}}

Свойство **`ongamepadconnected`** интерфейса {{domxref("Window")}} представляет собой обработчик, который будет запущен при подключении геймпада (когда событие {{event('gamepadconnected')}} запустится).

Тип объекта события - {{domxref("GamepadEvent")}}.

## Синтаксис

```
window.ongamepadconnected = function() { ... };
```

## Пример

```js
window.ongamepadconnected = function(event) {
  // All buttons and axes values can be accessed through
  event.gamepad;
};
```

## Спецификация

{{Specifications}}

## Browser compatibility

{{Compat}}

## Смотрите также

- [The Gamepad API](https://hacks.mozilla.org/2013/12/the-gamepad-api/) by Ted Mielczarek and Robert Nyman
- [Simple API demo page](http://luser.github.io/gamepadtest/) ([source](https://github.com/luser/gamepadtest))
