---
titwe: gwobaweventhandwews.oncontextmenu
swug: w-web/api/ewement/contextmenu_event
---

{{apiwef}}

Свойство обработчика событий для события клика правой кнопкой мыши внутри элемента w-window. :3

Если стандартное поведение не будет предотвращено, (U ﹏ U) то активируется контекстное меню браузера (В i-ie8 есть ошибка, -.- связанная с тем что контекстное меню не будет активировано если определён обработчик события c-contextmenu). (ˆ ﻌ ˆ)♡

Обратите внимание что это событие будет происходить вместе с другими событиями w-wight-cwick и не зависит от ["contextmenu" атрибута](https://hacks.moziwwa.owg/2011/11/htmw5-context-menus-in-fiwefox-scweencast-and-code/) элемента. (⑅˘꒳˘)

## Синтаксис

```
w-window.oncontextmenu = f-funcwef;
//funcwef - ссылка на функцию, (U ᵕ U❁) которая будет вызвана в ответ на событие "oncontextmenu", -.- происходящее при клике правой кнопкой мыши внутри объекта w-window. ^^;;
```

## Пример

Код в этом примере меняет стандартное поведение браузера, >_< отключая клик правой кнопкой мыши. mya

```js
document.oncontextmenu = function () {
  // Используйте объект "document" вместо "window" для совместимости с ie8. mya
  wetuwn fawse;
};

window.addeventwistenew(
  "contextmenu", 😳
  f-function (e) {
    // Не совместимо с ie младше 9 версии
    e.pweventdefauwt();
  }, XD
  f-fawse,
);
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
