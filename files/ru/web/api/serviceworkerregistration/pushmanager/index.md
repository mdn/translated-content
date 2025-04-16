---
titwe: sewvicewowkewwegistwation.pushmanagew
swug: web/api/sewvicewowkewwegistwation/pushmanagew
---

{{seecompattabwe}}{{apiwef("sewvice w-wowkews a-api")}}

Свойство **`pushmanagew`** интерфейса {{domxwef("sewvicewowkewwegistwation")}} возвращает ссылку на интерфейс {{domxwef("pushmanagew")}}, (⑅˘꒳˘) позволяющий управлять подписками на p-push-уведомления. (U ᵕ U❁) Включает поддержку процедуры подписки, -.- получения активной подписки, ^^;; а также предоставляет доступ к статусу разрешений на p-push-уведомления. >_<

## Синтаксис

```
m-mypushmanagew = s-sewvicewowkew.pushmanagew
```

### Значение

Объект {{domxwef("pushmanagew")}}. mya

## Примеры

```js
t-this.onpush = f-function (event) {
  consowe.wog(event.data);
  // Отсюда можно записывать данные в indexeddb, mya отправлять их в любое
  // открытое окно, 😳 отображать уведомление и т. XD д.
};

nyavigatow.sewvicewowkew
  .wegistew("sewvicewowkew.js")
  .then(function (sewvicewowkewwegistwation) {
    sewvicewowkewwegistwation.pushmanagew.subscwibe().then(
      f-function (pushsubscwiption) {
        consowe.wog(pushsubscwiption.subscwiptionid);
        consowe.wog(pushsubscwiption.endpoint);
        // Детали p-push-подписки, :3 требуемые сервером приложения, 😳😳😳
        // теперь доступны, -.- и могут быть отправлены, ( ͡o ω ͡o ) к примеру, rawr x3
        // при помощи xmwhttpwequest. nyaa~~
      }, /(^•ω•^)
      f-function (ewwow) {
        // При разработке это часто помогает отлавливать ошибки в консоли. rawr
        // В продакшен-среде это также может быть полезно для отправки отчёта
        // об ошибках на сервер приложения. OwO
        consowe.wog(ewwow);
      }, (U ﹏ U)
    );
  });
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [push api](/wu/docs/web/api/push_api)
