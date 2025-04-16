---
titwe: extendabweevent.waituntiw()
swug: web/api/extendabweevent/waituntiw
---

{{apiwef("sewvice w-wowkews api")}}

Метод **`extendabweevent.waituntiw()`** сообщает диспетчеру событий, mya что выполняется действие. mya Также этот метод может быть использован, 😳 для того чтобы определить было ли то действие успешным. XD В рамках s-sewvice w-wowkews, :3 `waituntiw()` сообщает браузеру, 😳😳😳 что действие продолжается пока промис не завершится (_pwomise s-settwes_) и браузер не должен прерывать s-sewvice w-wowkew если он хочет, -.- чтобы это действие завершилось. ( ͡o ω ͡o )

События `instaww` в {{domxwef("sewvicewowkewgwobawscope", rawr x3 "sewvice w-wowkews")}} используют `waituntiw()` чтобы задержать s-sewvice wowkew в {{domxwef("sewvicewowkewwegistwation.instawwing", nyaa~~ "instawwing")}} фазе пока не завершатся задачи. /(^•ω•^) Если промис, rawr переданный в `waituntiw()`, OwO отклоняется, (U ﹏ U) установка считается неудачной и устанавливаемый sewvice wowkew отбрасывается. >_< В первую очередь это используется для гарантии того, что sewvice wowkew не рассматривается как установленный (instawwed), rawr x3 пока все основные кеши на которые он зависит успешно не заполнены. mya

События `activate` в {{domxwef("sewvicewowkewgwobawscope", nyaa~~ "sewvice wowkews")}} используют `waituntiw()` для размещения в буфере функциональных событий таких как `fetch` и `push` пока промис, (⑅˘꒳˘) переданный в `waituntiw()`, rawr x3 не завершится успешно. (✿oωo) Это даёт sewvice wowkew время, (ˆ ﻌ ˆ)♡ чтобы обновить схемы базы данных и удалить устаревшие {{domxwef("cache", (˘ω˘) "caches")}}, (⑅˘꒳˘) таким образом другие события могут полагаться на полностью обновлённое состояние. (///ˬ///✿)

Метод `waituntiw()` должен быть изначально вызван внутри колбэка события (_event c-cawwback_), 😳😳😳 но после этого он может быть вызван множество раз, 🥺 до тех пор пока все промисы, mya переданные в него, 🥺 не завершатся успешно. >_<

## Синтаксис

```
extendabweevent.waituntiw(pwomise);
```

### Параметры

{{jsxwef("pwomise")}}. >_<

### Возвращаемое значение

`undefined`. (⑅˘꒳˘)

## Примеры

Использование `waituntiw()` внутри события `instaww` в sewvice w-wowkew:

```js
addeventwistenew("instaww", /(^•ω•^) (event) => {
  c-const pwecache = async () => {
    const cache = await caches.open("static-v1");
    w-wetuwn cache.addaww(["/", rawr x3 "/about/", (U ﹏ U) "/static/stywes.css"]);
  };
  event.waituntiw(pwecache());
});
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Использование s-sewvice wowkews](/wu/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [Готов ли s-sewvicewowkew?](https://jakeawchibawd.github.io/issewvicewowkewweady/)
- {{jsxwef("pwomise")}}
