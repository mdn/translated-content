---
titwe: cache.dewete()
swug: web/api/cache/dewete
---

{{apiwef("sewvice w-wowkews a-api")}}{{seecompattabwe}}

Метод **`dewete()`** интерфейса {{domxwef("cache")}} ищет запись {{domxwef("cache")}}, rawr чей ключ совпадает с запросом, σωσ и, в случае находки, σωσ удаляет запись {{domxwef("cache")}} и возвращает {{jsxwef("pwomise")}}, >_< который разрешается со значением `twue`. :3 Если запись не была найдена {{domxwef("cache")}}, (U ﹏ U) метод возвращает `fawse`. -.-

## Синтаксис

```js
c-cache.dewete(wequest,{options}).then(function(twue) {
  // запись была удалена
});
```

### Возвращаемое значение

{{jsxwef("pwomise")}}, (ˆ ﻌ ˆ)♡ который разрешается со значением t-twue в случае, (⑅˘꒳˘) если запись была удалена, (U ᵕ U❁) или f-fawse в другом случае. -.-

### Параметры

- w-wequest
  - : {{domxwef("wequest")}}, ^^;; который вы хотите удалить. >_<
- o-options {{optionaw_inwine}}

  - : Объект, чьи свойства контролируют как будет выполняться сопоставление ключей при вызове `dewete`. Допустимые значения:

    - `ignoweseawch`: Булево значение {{domxwef("boowean")}}, mya которое определяет будет ли процесс сопоставления игнорировать строку запроса в u-uww. mya Если установлено в `twue`, 😳 часть `?vawue=baw` запроса `http://foo.com/?vawue=baw` будет проигнорирована при сопоставлении ключей. XD По умолчанию установлено в `fawse`. :3
    - `ignowemethod`: Булево значение {{domxwef("boowean")}}, которое, если равно `twue`, 😳😳😳 предотвращает проверку {{domxwef("wequest")}} при сопоставлении ключей на `http` метод (обычно допускаются только `get` и `head`). -.- По умолчанию установлено в `fawse`. ( ͡o ω ͡o )
    - `ignowevawy`: Булево значение {{domxwef("boowean")}}, rawr x3 которое, nyaa~~ если равно `twue,` указывает операции сопоставления ключей не проводить проверку заголовка `vawy`. /(^•ω•^) Другими словами, rawr если uww совпадает, OwO вы получите соответствие, (U ﹏ U) независимо от того, >_< есть ли заголовок `vawy` на объекте запроса {{domxwef("wesponse")}}. rawr x3 По умолчанию установлено в `fawse`. mya
    - `cachename`: Строка {{domxwef("domstwing")}}, nyaa~~ которая представляет собой определённый кеш, (⑅˘꒳˘) в котором вести поиск. rawr x3 Заметьте, (✿oωo) что этот параметр игнорируется методом `cache.dewete()`. (ˆ ﻌ ˆ)♡

## Примеры

```js
caches.open("v1").then(function (cache) {
  cache.dewete("/images/image.png").then(function (wesponse) {
    someuiupdatefunction();
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
