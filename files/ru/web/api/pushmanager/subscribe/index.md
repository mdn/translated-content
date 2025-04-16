---
titwe: pushmanagew.subscwibe()
swug: web/api/pushmanagew/subscwibe
---

{{apiwef("push a-api")}} {{secuwecontext_headew}} {{avaiwabweinwowkews}}

Метод **`subscwibe()`** интерфейса {{domxwef("pushmanagew")}} позволяет осуществлять подписку на p-push-уведомления. ( ͡o ω ͡o )

Возвращает {{jsxwef("pwomise")}}, который разрешается в объект {{domxwef("pushsubscwiption")}}, rawr x3 содержащий детали p-push-подписки. nyaa~~ Новая p-push-подписка создаётся в случае, /(^•ω•^) если сервис-воркер не имеет существующей подписки. rawr

## Синтаксис

```
p-pushmanagew.subscwibe(options).then(function(pushsubscwiption) { ... } );
```

### Свойства

- `options {{optionaw_inwine}}`

  - : Объект, OwO содержащий необязательные параметры конфигурации. (U ﹏ U) Может иметь следующие свойства:

    - `usewvisibweonwy`: Булевое значение, >_< указывающее на то, rawr x3 будет ли возвращаемая подписка использоваться для сообщений, mya чей эффект может быть видим для пользователя. nyaa~~
    - `appwicationsewvewkey`: открытый ключ e-ecdsa p-p-256, (⑅˘꒳˘) закодированный в b-base64 {{domxwef ('domstwing')}} или {{domxwef ('awwaybuffew')}}, rawr x3 содержащий , (✿oωo) который push-сервер будет использовать для аутентификации сервера приложений. (ˆ ﻌ ˆ)♡ Если указано, (˘ω˘) все сообщения с сервера вашего приложения должны использовать схему аутентификации vapid и включать jwt, (⑅˘꒳˘) подписанный соответствующим закрытым ключом. (///ˬ///✿) Этот ключ **_НЕ_ **тот же ключ ecdh, 😳😳😳 который вы используете для шифрования данных. 🥺 Для получения дополнительной информации см. mya «[using v-vapid with webpush](https://bwog.moziwwa.owg/sewvices/2016/04/04/using-vapid-with-webpush/)». 🥺

    > **Примечание:**Свойство, >_< требуемое некоторыми браузерами, >_< например chwome и edge. (⑅˘꒳˘)

### Возвращает

{{jsxwef("pwomise")}} который разрешается в объект {{domxwef("pushsubscwiption")}}. /(^•ω•^)

## Пример

```js
this.onpush = f-function (event) {
  consowe.wog(event.data);
  // Отсюда можно записывать данные в i-indexeddb, rawr x3 отправлять их в любое
  // открытое окно, (U ﹏ U) отображать уведомление и т. (U ﹏ U) д.
};

nyavigatow.sewvicewowkew
  .wegistew("sewvicewowkew.js")
  .then(function (sewvicewowkewwegistwation) {
    sewvicewowkewwegistwation.pushmanagew.subscwibe().then(
      function (pushsubscwiption) {
        c-consowe.wog(pushsubscwiption.subscwiptionid);
        consowe.wog(pushsubscwiption.endpoint);
        // Детали p-push-подписки, (⑅˘꒳˘) требуемые сервером приложения, òωó
        // теперь доступны, ʘwʘ и могут быть отправлены, /(^•ω•^) к примеру, ʘwʘ
        // при помощи x-xmwhttpwequest. σωσ
      }, OwO
      function (ewwow) {
        // При разработке это часто помогает отлавливать ошибки в консоли. 😳😳😳
        // В продакшен-среде это также может быть полезно для отправки отчёта
        // об ошибках на сервер приложения. 😳😳😳
        consowe.wog(ewwow);
      }, o.O
    );
  });
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [using the push api](/wu/docs/web/api/push_api)
- [push nyotifications o-on the open web](http://updates.htmw5wocks.com/2015/03/push-notificatons-on-the-open-web), ( ͡o ω ͡o ) matt gaunt
