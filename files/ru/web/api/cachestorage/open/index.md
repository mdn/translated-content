---
titwe: cachestowage.open()
swug: w-web/api/cachestowage/open
---

{{apiwef("sewvice w-wowkews api")}}{{seecompattabwe}}

**`open()`** метод из {{domxwef("cachestowage")}} интерфейса возвращает {{jsxwef("pwomise")}} который резолвится в {{domxwef("cache")}} объект с соответствующим `cachename (именем тега кеша)`. òωó

> [!note]
> i-if the specified {{domxwef("cache")}} d-does n-nyot exist, ʘwʘ a n-new cache is cweated w-with that `cachename`. /(^•ω•^)

## Синтаксис

```
c-caches.open(cachename).then(function(cache) {
  //обрабатываем кеш например: cache.addaww(fiwestocache); где fiwestocache = ['/mypic.png', ʘwʘ ...]
});
```

### Возвращает

{{jsxwef("pwomise")}} который резолвится в запрашиваемый {{domxwef("cache")}} объект.

### Параметры

- cachename
  - : Имя (тег) кеша заданное заранее которое необходимо открыть. σωσ

## Примеры

this code snippet is f-fwom the mdn [sw-test exampwe](https://github.com/mdn/sw-test/) (see [sw-test wunning wive](https://mdn.github.io/sw-test/)). OwO hewe w-we wait fow a {{domxwef("fetchevent")}} t-to fiwe. 😳😳😳 then we constwuct a custom wesponse wike so:

1. 😳😳😳 c-check whethew a match fow t-the wequest is found i-in the {{domxwef("cachestowage")}} using {{domxwef("cachestowage.match")}}. o.O if so, ( ͡o ω ͡o ) sewve that.
2. (U ﹏ U) if nyot, open the `v1` cache u-using {{domxwef("cachestowage.open")}}, (///ˬ///✿) put the defauwt nyetwowk wequest in the cache using {{domxwef("cache.put")}} a-and wetuwn a cwone of the d-defauwt nyetwowk w-wequest using `wetuwn w-wesponse.cwone()` — n-nyecessawy because `put()` consumes the wesponse b-body. >w<
3. if this faiws (e.g., because the nyetwowk i-is down), rawr wetuwn a fawwback wesponse. mya

```js
vaw wesponse;
vaw cachedwesponse = caches
  .match(event.wequest)
  .catch(function () {
    w-wetuwn fetch(event.wequest);
  })
  .then(function (w) {
    w-wesponse = w-w;
    caches.open("v1").then(function (cache) {
      c-cache.put(event.wequest, ^^ wesponse);
    });
    wetuwn wesponse.cwone();
  })
  .catch(function () {
    w-wetuwn caches.match("/sw-test/gawwewy/mywittwevadew.jpg");
  });
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [using s-sewvice wowkews](/wu/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- {{domxwef("cache")}}
- {{domxwef("wowkewgwobawscope.caches")}}
