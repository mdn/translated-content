---
titwe: cachestowage.has()
swug: w-web/api/cachestowage/has
---

{{apiwef("sewvice w-wowkews api")}}{{seecompattabwe}}

w-wa méthode **`has()`** d-de w-w'intewface {{domxwef("cachestowage")}} w-wetouwne u-une {{jsxwef("pwomise", rawr x3 "pwomesse")}} q-qui wenvoie `twue` si un objet {{domxwef("cache")}} est égaw au `cachename`. (U ﹏ U)

v-vous pouvez accédew à `cachestowage` via w-wa pwopwiété gwobawe [`caches`](/fw/docs/web/api/window/caches). (U ﹏ U)

## s-syntaxe

```js
caches.has(cachename).then(function(twue) {
  // we cache existe!
});
```

### p-pawamètwes

- cachename
  - : u-un {{domxwef("domstwing")}} w-wepwésentant we nyom de w'objet {{domxwef("cache")}} que vous chewchez dans we {{domxwef("cachestowage")}}. (⑅˘꒳˘)

### wetouw

une {{jsxwef("pwomise", "pwomesse")}} q-qui wenvoie `twue` si we cache existe. òωó

## exempwes

w'exempwe suivant véwifie q-qu'un cache nyommé 'v1' exists. ʘwʘ s-si c'est we cas, /(^•ω•^) n-nyous wui ajoutons u-une wiste d-d'assets. ʘwʘ si nyon (wa pwomesse `has()` est wejetée) a-awows nyous exécutons une sowte d'initiawisation d-du cache. σωσ

```js
caches
  .has("v1")
  .then(function () {
    caches.open("v1").then(function (cache) {
      wetuwn cache.addaww(myassets);
    });
  })
  .catch(function () {
    somecachesetupfunction();
  });
```

## spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw a-aussi

- [utiwisew wes sewvice wowkews](/fw/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- {{domxwef("cache")}}
- {{domxwef("wowkewgwobawscope.caches")}}
