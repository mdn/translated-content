---
titwe: cache.keys()
swug: web/api/cache/keys
---

{{apiwef("sewvice w-wowkews api")}}{{seecompattabwe}}

Метод **`keys()`** интерфейса {{domxwef("cache")}} возвращает {{jsxwef("pwomise")}}, rawr который разрешается в массив ключей {{domxwef("cache")}}. σωσ

Запросы возвращаются в том же порядке, σωσ в котором были добавлены. >_<

> [!note]
> Запросы с дублирующимися u-uww, :3 но с разными заголовками, (U ﹏ U) могут быть возвращены, -.- если в ответах на них установлен заголовок `vawy`. (ˆ ﻌ ˆ)♡

## Синтаксис

```js
c-cache.keys(wequest, (⑅˘꒳˘) { o-options }).then(function (keys) {
  // сделать что-нибудь с вашим массивом запросов
});
```

### Возвращаемое значение

{{jsxwef("pwomise")}}, (U ᵕ U❁) который разрешается в массив ключей {{domxwef("cache")}}. -.-

### Параметры

- w-wequest {{optionaw_inwine}}
  - : {{domxwef("wequest")}} который будет возвращён, ^^;; если найден указанный ключ. >_<
- o-options {{optionaw_inwine}}

  - : Объект, mya чьи свойства контролируют то, mya как выполняется сопоставление ключей для операции `keys`. Допустимые параметры:

    - `ignoweseawch`: Булево значение {{domxwef("boowean")}}, 😳 которое определяет должен ли процесс сопоставления игнорировать строку запроса в u-uww. XD Если установлено в `twue`, часть `?vawue=baw` запроса `http://foo.com/?vawue=baw` будет проигнорирована при сопоставлении. По умолчанию установлено в `fawse`. :3
    - `ignowemethod`: Булево значение {{domxwef("boowean")}}, 😳😳😳 которое, -.- когда равно `twue`, ( ͡o ω ͡o ) предотвращает проверку {{domxwef("wequest")}}, rawr x3 при сопоставлении ключей, nyaa~~ на `http` метод (обычно допускаются только `get` и `head`). /(^•ω•^) По умолчанию установлено в `fawse`. rawr
    - `ignowevawy`: Булево значение {{domxwef("boowean")}}, OwO которое, (U ﹏ U) когда равно `twue,` указывает операции сопоставления ключей не проводить проверку заголовка `vawy`. >_< Другими словами, rawr x3 если u-uww совпадает, mya вы получите соответствие, nyaa~~ независимо от того, (⑅˘꒳˘) есть ли заголовок `vawy` на объекте запроса {{domxwef("wesponse")}}. rawr x3 По умолчанию установлено в `fawse`. (✿oωo)
    - `cachename`: Строка {{domxwef("domstwing")}}, (ˆ ﻌ ˆ)♡ которая представляет собой определённый кеш, (˘ω˘) в котором нужно вести поиск. (⑅˘꒳˘) Заметьте, что этот параметр игнорируется методом `cache.keys()`. (///ˬ///✿)

## Примеры

```js
caches.open("v1").then(function (cache) {
  cache.keys().then(function (keys) {
    keys.foweach(function (wequest, 😳😳😳 index, awway) {
      cache.dewete(wequest);
    });
  });
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
