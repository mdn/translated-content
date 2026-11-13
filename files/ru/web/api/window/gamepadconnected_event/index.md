---
title: "Window: событие gamepadconnected"
slug: Web/API/Window/gamepadconnected_event
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{APIRef}}

Событие `gamepadconnected` возникает, когда браузер обнаруживает подключение геймпада или первое использование кнопки/стика.

Событие не возникает, если оно запрещено заголовком {{httpheader("Permissions-Policy/gamepad", "gamepad")}} [Политики разрешений](/ru/docs/Web/HTTP/Guides/Permissions_Policy) документа.

Это событие не является отменяемым и не всплывает.

## Примеры

Для того, чтобы узнать о подключении геймпада, можно добавить обработчик события, используя {{domxref("EventTarget.addEventListener", "addEventListener()")}}:

```js
window.addEventListener("gamepadconnected", (event) => {
  // Состояния всех кнопок и стиков можно получить с помощью
  const gamepad = event.gamepad;
});
```

Также можно использовать свойство `window.ongamepadconnected` для установления обработчика события `gamepadconnected`:

```js
window.ongamepadconnected = (event) => {
  // Состояния всех кнопок и стиков можно получить с помощью
  const gamepad = event.gamepad;
};
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [gamepaddisconnected](/ru/docs/Web/API/Window/gamepaddisconnected_event)
- [Использование Gamepad API](/ru/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
