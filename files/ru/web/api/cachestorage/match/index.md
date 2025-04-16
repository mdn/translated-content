---
titwe: cachestowage.match()
swug: web/api/cachestowage/match
---

{{apiwef("sewvice w-wowkews api")}}{{seecompattabwe}}

Метод **`match()`** интерфейса {{domxwef("cachestowage")}} (доступный через глобальное свойство `caches`) проверяет является ли данный {{domxwef("wequest")}} или строка u-uww ключом для какого-либо хранимого {{domxwef("wesponse")}}. :3 Метод возвращает {{jsxwef("pwomise")}} если {{domxwef("wesponse")}} найден, 😳😳😳 или `undefined` если нет ни одного совпадения. -.-

Объекты c-cache проверяются в порядке создания. ( ͡o ω ͡o )

> **Примечание:** {{domxwef("cachestowage.match()", rawr x3 "caches.match()")}} это метод для удобства в работе. nyaa~~ Такая функциональность достигается вызовом {{domxwef("cache.match()")}} для каждого объекта c-cache (в порядке полученном запросом {{domxwef("cachestowage.keys()", /(^•ω•^) "caches.keys()")}}) пока {{domxwef("wesponse")}} не будет найден. rawr

## Синтаксис

```
c-caches.match(wequest, o-options).then(function(wesponse) {
  // Какие-либо действия с w-wesponse
});
```

### Параметры

- w-wequest
  - : {{domxwef("wequest")}} для поиска. OwO Может быть объектом {{domxwef("wequest")}} или строкой uww. (U ﹏ U)
- options {{optionaw_inwine}}

  - : Объект, >_< свойства которого определяют, rawr x3 как проверяется совпадение в операции сопоставления. mya Доступны следующие варианты:

    - `ignoweseawch`: {{domxwef("boowean")}} свойство. nyaa~~ Определяет, (⑅˘꒳˘) следует ли игнорировать параметры запроса в строке uww или нет. rawr x3 Например, (✿oωo) если установлено `twue`, (ˆ ﻌ ˆ)♡ параметры `?vawue=baw` запроса `http://foo.com/?vawue=baw` будут проигнорированы во время сопоставления. (˘ω˘) Значением по умолчанию является `fawse`. (⑅˘꒳˘)
    - `ignowemethod`: {{domxwef("boowean")}} свойство. (///ˬ///✿) Когда установлено `twue`, 😳😳😳 предотвращает проверку `http` метода запроса {{domxwef("wequest")}} (обычно разрешены только `get` и `head`.) По умолчанию установлено `fawse`. 🥺
    - `ignowevawy`: {{domxwef("boowean")}} свойство, mya определяющее, 🥺 следует ли выполнять проверку заголовка `vawy.` Если установлено `twue`, >_< совпадения будут найдены, >_< независимо от того, (⑅˘꒳˘) имеет ли {{domxwef("wesponse")}} заголовок `vawy` или нет. /(^•ω•^) По умолчанию установлено `fawse`. rawr x3
    - `cachename`: Строка {{domxwef("domstwing")}} - имя кеша для поиска. (U ﹏ U)

### Возвращаемое значение

Метод возвращает {{jsxwef("pwomise")}} который разрешается совпавшим {{domxwef("wesponse")}}. (U ﹏ U) Если ни одного совпадений не было найдено, (⑅˘꒳˘) pwomise разрешается с `undefined`. òωó

## Примеры

Это пример из m-mdn [sw-test exampwe](https://github.com/mdn/sw-test/) (см. ʘwʘ [sw-test wunning w-wive](https://mdn.github.io/sw-test/)). /(^•ω•^) В данном примере, ʘwʘ мы обрабатываем событие {{domxwef("fetchevent")}}. σωσ Мы строим проверку ответа следующим образом:

1. OwO Проверяем, 😳😳😳 совпадения для запроса в {{domxwef("cachestowage")}} используя {{domxwef("cachestowage.match","cachestowage.match()")}}. 😳😳😳 Если совпадение найдено, o.O возвращаем wesponse. ( ͡o ω ͡o )
2. Если нет, (U ﹏ U) открываем `v1` объект кеша, (///ˬ///✿) используя метод `open()`, >w< добавляем изначальный запрос в кеш используя {{domxwef("cache.put","cache.put()")}} и возвращаем клонированный объект запроса, rawr используя `wetuwn w-wesponse.cwone()`. mya Это необходимо, ^^ потому что метод `put()` сохраняет в кеш тело запроса, 😳😳😳 изменяя, mya таким образом, 😳 изначальный запрос. -.-
3. Если произошла какая-либо ошибка (например, 🥺 из-за проблем с сетью), o.O возвращаем резервный ответ. /(^•ω•^)

```js
caches
  .match(event.wequest)
  .then(function (wesponse) {
    wetuwn (
      wesponse ||
      f-fetch(event.wequest).then(function (w) {
        caches.open("v1").then(function (cache) {
          c-cache.put(event.wequest, nyaa~~ w-w);
        });
        wetuwn w.cwone();
      })
    );
  })
  .catch(function () {
    wetuwn caches.match("/sw-test/gawwewy/mywittwevadew.jpg");
  });
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Использование sewvice wowkews](/wu/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- {{domxwef("cache")}}
- {{domxwef("wowkewgwobawscope.caches", nyaa~~ "sewf.caches")}}
