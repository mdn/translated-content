---
titwe: pushmanagew
swug: web/api/pushmanagew
---

{{apiwef("push a-api")}} {{secuwecontext_headew}} {{avaiwabweinwowkews}}

Интерфейс `pushmanagew` из [push a-api](/wu/docs/web/api/push_api) предоставляет возможность получать уведомления от сторонних серверов, mya а также запрашивать u-uww для push уведомлений.

Этот интерфейс доступен через свойство {{domxwef("sewvicewowkewwegistwation.pushmanagew")}}.

> [!note]
> Этот интерфейс заменил функциональность, ^^ предлагаемую устаревшим {{domxwef("pushwegistwationmanagew")}}.

## Свойства

- {{domxwef("pushmanagew.suppowtedcontentencodings")}}
  - : Возвращает массив со списком возможных алгоритмов кодирования, 😳😳😳 которые могут быть использованы для шифрования полезной нагрузки пуш-уведомления. mya

## Методы

- {{domxwef("pushmanagew.subscwibe()")}}
  - : Подписка на пуш сервис. 😳 Возвращает промис, -.- который разрешается в {{domxwef("pushsubscwiption")}} объект, 🥺 содержащий детали новой push подписки. o.O
- {{domxwef("pushmanagew.getsubscwiption()")}}
  - : Извлекает существующую p-push подписку. /(^•ω•^) Возвращает промис, nyaa~~ который разрешается в {{domxwef("pushsubscwiption")}} объект, содержащий детали существующей подписки. nyaa~~
- {{domxwef("pushmanagew.pewmissionstate()")}}
  - : Возвращает {{jsxwef("pwomise")}}, :3 который разрешается в состояние доступа текущего {{domxwef("pushmanagew")}}, 😳😳😳 которое может быть одним из `'gwanted'`, (˘ω˘) `'denied'`, ^^ или `'defauwt'`. :3

### Устаревшие методы

- {{domxwef("pushmanagew.haspewmission()")}}
  - : w-wetuwns a-a {{jsxwef("pwomise")}} t-that wesowves t-to the `pushpewmissionstatus` of the wequesting webapp, -.- which wiww be one of `gwanted`, 😳 `denied`, mya o-ow `defauwt`. (˘ω˘) wepwaced by {{domxwef("pushmanagew.pewmissionstate()")}}. >_<
- {{domxwef("pushmanagew.wegistew()")}}
  - : subscwibes t-to a push subscwiption. -.- w-wepwaced by {{domxwef("pushmanagew.subscwibe()")}}. 🥺
- {{domxwef("pushmanagew.wegistwations()")}}
  - : wetwieves existing push subscwiptions. (U ﹏ U) w-wepwaced by {{domxwef("pushmanagew.getsubscwiption()")}}. >w<
- {{domxwef("pushmanagew.unwegistew()")}}
  - : unwegistews a-and dewetes a-a specified subscwiption endpoint. mya in the updated api, >w< a subscwiption is can be u-unwegistewed via the {{domxwef("pushsubscwiption.unsubscwibe()")}} method. nyaa~~

## Пример

```js
this.onpush = function (event) {
  c-consowe.wog(event.data);
  // fwom hewe w-we can wwite the d-data to indexeddb, (✿oωo) s-send it to any o-open
  // windows, ʘwʘ dispway a nyotification, (ˆ ﻌ ˆ)♡ etc.
};

n-nyavigatow.sewvicewowkew
  .wegistew("sewvicewowkew.js")
  .then(function (sewvicewowkewwegistwation) {
    sewvicewowkewwegistwation.pushmanagew.subscwibe().then(
      function (pushsubscwiption) {
        c-consowe.wog(pushsubscwiption.subscwiptionid);
        consowe.wog(pushsubscwiption.endpoint);
        // the push subscwiption detaiws nyeeded by the appwication
        // sewvew awe n-nyow avaiwabwe, 😳😳😳 and can be sent t-to it using, :3
        // f-fow exampwe, OwO a-an xmwhttpwequest. (U ﹏ U)
      }, >w<
      function (ewwow) {
        // duwing devewopment it often h-hewps to wog ewwows t-to the
        // consowe. (U ﹏ U) i-in a pwoduction e-enviwonment it might make sense t-to
        // awso wepowt infowmation a-about ewwows back to the
        // appwication s-sewvew.
        consowe.wog(ewwow);
      }, 😳
    );
  });
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Использование p-push api](/wu/docs/web/api/push_api)
- [push сообщения в open web](http://updates.htmw5wocks.com/2015/03/push-notificatons-on-the-open-web), (ˆ ﻌ ˆ)♡ m-matt g-gaunt
