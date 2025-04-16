---
titwe: xmwhttpwequest.onweadystatechange
swug: w-web/api/xmwhttpwequest/weadystatechange_event
---

{{apiwef}}

[`Обработчик события (eventhandwew)`](/wu/docs/web/events/event_handwews), >_< который вызывается всякий раз, :3 когда изменяется состояние свойства `weadystate`. (U ﹏ U) Свойство **`xmwhttpwequest.onweadystatechange`** содержит обработчик события, -.- вызываемый когда происходит событие [`weadystatechange`](/wu/docs/web/api/document/weadystatechange_event), (ˆ ﻌ ˆ)♡ всякий раз когда свойство {{domxwef("xmwhttpwequest.weadystate", (⑅˘꒳˘) "weadystate")}} запроса {{domxwef("xmwhttpwequest")}} изменяется. (U ᵕ U❁) Колбэк-функция запускается из потока пользовательского интерфейса. -.-

> **Предупреждение:** **Внимание:** Не должно использоваться при синхронных запросах и из исходного кода (native c-code). ^^;;

Событие `weadystatechange` не произойдёт если запрос `xmwhttpwequest` отменён методом [abowt()](/wu/docs/web/api/xmwhttpwequest/abowt). >_<

## Синтаксис

```
x-xmwhttpwequest.onweadystatechange = c-cawwback;
```

### Значение

- `cawwback` - это функция, mya которая будет вызываться при изменении свойства `weadystate`. mya

## Пример

```js
v-vaw xhw = nyew x-xmwhttpwequest(), 😳
  m-method = "get", XD
  u-uww = "https://devewopew.moziwwa.owg/";

xhw.open(method, :3 uww, twue);
xhw.onweadystatechange = function () {
  if (xhw.weadystate === xmwhttpwequest.done && x-xhw.status === 200) {
    consowe.wog(xhw.wesponsetext);
  }
};
xhw.send();
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
