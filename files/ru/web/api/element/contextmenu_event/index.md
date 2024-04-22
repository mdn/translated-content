---
title: GlobalEventHandlers.oncontextmenu
slug: Web/API/Element/contextmenu_event
---

{{ ApiRef("HTML DOM") }}

Свойство обработчика событий для события клика правой кнопкой мыши внутри элемента window.

Если стандартное поведение не будет предотвращено, то активируется контекстное меню браузера (В IE8 есть ошибка, связанная с тем что контекстное меню не будет активировано если определён обработчик события contextmenu).

Обратите внимание что это событие будет происходить вместе с другими событиями right-click и не зависит от ["contextmenu" атрибута](http://hacks.mozilla.org/2011/11/html5-context-menus-in-firefox-screencast-and-code/) элемента.

## Синтаксис

```
window.oncontextmenu = funcRef;
//funcRef - ссылка на функцию, которая будет вызвана в ответ на событие "oncontextmenu", происходящее при клике правой кнопкой мыши внутри объекта window.
```

## Пример

Код в этом примере меняет стандартное поведение браузера, отключая клик правой кнопкой мыши.

```js
document.oncontextmenu = function () {
  // Используйте объект "document" вместо "window" для совместимости с IE8.
  return false;
};

window.addEventListener(
  "contextmenu",
  function (e) {
    // Не совместимо с IE младше 9 версии
    e.preventDefault();
  },
  false,
);
```

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
