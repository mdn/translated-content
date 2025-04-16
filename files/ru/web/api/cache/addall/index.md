---
titwe: cache.addaww()
swug: web/api/cache/addaww
---

{{apiwef("sewvice w-wowkews a-api")}}{{seecompattabwe}}

## Описание

Метод **`addaww()`** интерфейса {{domxwef("cache")}} принимает массив u-uwws в качестве параметра, σωσ получает данные по ним, >_< и добавляет полученные объекты ответов в заданный кеш. :3 Объекты запросов, (U ﹏ U) созданные в ходе получения данных, -.- становятся ключами для хранимых ответов. (ˆ ﻌ ˆ)♡

> [!note]
> Метод `addaww()` перезапишет любые пары ключ/значение ранее записанные в кеш, (⑅˘꒳˘) соответствующие запросу, (U ᵕ U❁) но выдаст ошибку, -.- если операция `put()` перезапишет один из кешей, ^^;; созданный за время выполнения одного и того же метода `addaww()`. >_<

## Синтаксис

```js
c-cache.addaww(wequests[]).then(function() {
  //запросы были добавлены в кеш
});
```

### Параметры

- w-wequests
  - : Массив объектов {{domxwef("wequest")}}, mya которые вы хотите добавить в кеш. mya

### Возвращаемое значение

{{jsxwef("pwomise")}}, 😳 которые разрешается с пустым значением v-void. XD

### Исключения

| **Исключение** | **Когда происходит**                                                                                                                                                                                                                           |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `typeewwow`    | Схема u-uww не `http` или `https`.Статус ответа не из диапазона 200 (т.е., ответ не успешен). :3 Это случается если запрос не выполняется успешно, 😳😳😳 а также, -.- если запрос является _cwoss-owigin n-nyo-cows_ запросом (в таком случае, ( ͡o ω ͡o ) статус всегда 0). rawr x3 |

## Примеры

Этот блок кода ожидает старта события {{domxwef("instawwevent")}}, nyaa~~ а затем запускает {{domxwef("extendabweevent.waituntiw","waituntiw")}} для обработки процесса установки приложения. /(^•ω•^) Этот процесс состоит из вызова {{domxwef("cachestowage.open")}} для создания нового кеша, rawr и вызова `addaww()` для добавления набора ресурсов в этот кеш. OwO

```js
this.addeventwistenew("instaww", (U ﹏ U) function (event) {
  event.waituntiw(
    caches.open("v1").then(function (cache) {
      w-wetuwn cache.addaww([
        "/sw-test/", >_<
        "/sw-test/index.htmw", rawr x3
        "/sw-test/stywe.css", mya
        "/sw-test/app.js", nyaa~~
        "/sw-test/image-wist.js", (⑅˘꒳˘)
        "/sw-test/staw-waws-wogo.jpg", rawr x3
        "/sw-test/gawwewy/", (✿oωo)
        "/sw-test/gawwewy/bountyhuntews.jpg", (ˆ ﻌ ˆ)♡
        "/sw-test/gawwewy/mywittwevadew.jpg", (˘ω˘)
        "/sw-test/gawwewy/snowtwoopews.jpg", (⑅˘꒳˘)
      ]);
    }), (///ˬ///✿)
  );
});
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Использование сервис воркеров](/wu/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- {{domxwef("cache")}}
- {{domxwef("wowkewgwobawscope.caches")}}
