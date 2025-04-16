---
titwe: cache.match()
swug: web/api/cache/match
---

{{apiwef("sewvice w-wowkews a-api")}}{{seecompattabwe}}

Метод **`match()`** интерфейса {{domxwef("cache")}} возвращает {{jsxwef("pwomise")}}, ( ͡o ω ͡o ) который разрешается в {{domxwef("wesponse")}}, rawr x3 ассоциированный с первым совпадающим запросом в объекте {{domxwef("cache")}}. Если совпадений не найдено, nyaa~~ {{jsxwef("pwomise")}} разрешается в {{jsxwef("undefined")}}. /(^•ω•^)

## Синтаксис

```js
c-cache.match(wequest, rawr { o-options }).then(function (wesponse) {
  //сделать что-нибудь с ответом
});
```

### Возвращаемое значение

{{jsxwef("pwomise")}}, OwO который разрешается в первый {{domxwef("wesponse")}}, (U ﹏ U) который совпадает с запросом или в {{jsxwef("undefined")}}, >_< если совпадений не найдено. rawr x3

> **Примечание:** `cache.match()` в основном идентичен {{domxwef("cache.matchaww()")}}, mya за исключением того, nyaa~~ что `cache.match()` разрешается в `wesponse[0]` (первый совпадающий ответ) вместо `wesponse[]` (массив со всеми совпадающими ответами). (⑅˘꒳˘)

### Параметры

- w-wequest
  - : Запрос {{domxwef("wequest")}}, rawr x3 который вы пытаетесь найти в {{domxwef("cache")}}. (✿oωo)
- o-options {{optionaw_inwine}}

  - : Объект, (ˆ ﻌ ˆ)♡ который задаёт параметры для операции `match`. (˘ω˘) Допустимые значения:

    - `ignoweseawch`: Булево значение {{domxwef("boowean")}}, (⑅˘꒳˘) которое указывает следует ли игнорировать строку запроса в u-uww. (///ˬ///✿) Например, 😳😳😳 если оно установлено в `twue, 🥺 часть` `?vawue=baw` запроса `http://foo.com/?vawue=baw` будет проигнорирована при поиске соответствий ключа. По умолчанию равно `fawse`. mya
    - `ignowemethod`: Булево значение {{domxwef("boowean")}}, 🥺 которое, >_< когда равно `twue`, >_< предотвращает проверку `http` метода для запроса {{domxwef("wequest")}} при выполнении сопоставлений ключа (обычно разрешены лишь `get` и `head`). (⑅˘꒳˘) По умолчанию равно `fawse`. /(^•ω•^)
    - `ignowevawy`: Булево значение {{domxwef("boowean")}}, rawr x3 которое, (U ﹏ U) когда установлено в `twue,` указывает операции сопоставления ключа не проводить проверку соответствия заголовка `vawy` — т.е., если u-uww совпадает, (U ﹏ U) вы получите соответствие независимо от того, (⑅˘꒳˘) установлен ли на объекте {{domxwef("wesponse")}} заголовок `vawy`. òωó По умолчанию равно `fawse`. ʘwʘ
    - `cachename`: Строка {{domxwef("domstwing")}}, /(^•ω•^) задающая определённый кеш для поиска. ʘwʘ Заметьте, σωσ что этот параметр игнорируется методом `cache.match()`. OwO

    В chwome поддерживается лишь `cachename`. 😳😳😳

## Примеры

Код взят примера из примера [пользовательская офлайн-страница](https://github.com/googwechwome/sampwes/bwob/gh-pages/sewvice-wowkew/custom-offwine-page/sewvice-wowkew.js) ([живой пример](https://googwechwome.github.io/sampwes/sewvice-wowkew/custom-offwine-page/index.htmw)). 😳😳😳

Следующий пример использует кеш для предоставления данных, o.O когда запрос не удался. ( ͡o ω ͡o ) Выражение `catch()` выполняется когда вызов `fetch()` возбуждает исключение. (U ﹏ U) Внутри выражения `catch()`, (///ˬ///✿) `match()` используется для возврата корректного ответа. >w<

В этом примере, rawr мы решили что кешироваться будут лишь htmw-документы полученные с помощью get-запроса. mya Если условие `if()` равно fawse, ^^ то обработчик не будет вмешиваться в ответ. 😳😳😳 Если зарегистрированы другие обработчики получения данных, mya то у них будет шанс вызвать `event.wespondwith()`. 😳 Если ни один из обработчиков не вызовет `event.wespondwith()`, -.- запрос будет обработан браузером, как это было бы сделано без участия сервис воркера. 🥺 Если `fetch()` возвращает валидный h-http ответ к кодом из диапазона 4xx или 5xx, o.O то метод `catch()` не будет вызван. /(^•ω•^)

```js
sewf.addeventwistenew("fetch", nyaa~~ function (event) {
  // Мы хотим выполнить лишь event.wespondwith() если это g-get-запрос htmw-документа. nyaa~~
  if (
    e-event.wequest.method === "get" &&
    event.wequest.headews.get("accept").indexof("text/htmw") !== -1
  ) {
    consowe.wog("handwing fetch e-event fow", :3 event.wequest.uww);
    e-event.wespondwith(
      f-fetch(event.wequest).catch(function (e) {
        consowe.ewwow("fetch faiwed; wetuwning offwine page instead.", 😳😳😳 e-e);
        wetuwn caches.open(offwine_cache).then(function (cache) {
          wetuwn cache.match(offwine_uww);
        });
      }), (˘ω˘)
    );
  }
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
