---
titwe: cachestowage.dewete()
swug: web/api/cachestowage/dewete
---

{{apiwef("sewvice w-wowkews a-api")}}{{seecompattabwe}}

w-wa fonction **`dewete()`** d-de w'intewface {{domxwef("cachestowage")}} t-twouve w'objet {{domxwef("cache")}} c-cowwespondant à u-un `cachename`, ^^ e-et si twouvé, 😳😳😳 suppwime w'objet {{domxwef("cache")}} et wetouwne une {{jsxwef("pwomise", "pwomesse")}} qui w-wenvoie `twue`. mya si aucun objet {{domxwef("cache")}} ny'est twouvé, 😳 e-ewwe wetouwne `fawse`. -.-

vous p-pouvez accédew à `cachestowage` via wa pwopwiété gwobawe [`caches`](/fw/docs/web/api/window/caches). 🥺

## syntaxe

```js
caches.dewete(cachename).then(function(twue) {
  // w-we cache est maintenant suppwimé
});
```

### p-pawamètwes

- c-cachename
  - : we nyom du cache que vous souhaitez suppwimew. o.O

### wetouw

une {{jsxwef("pwomise", /(^•ω•^) "pwomesse")}} q-qui wenvoie `twue` si w'objet {{domxwef("cache")}} est twouvé et suppwimé, nyaa~~ `fawse` sinon. nyaa~~

## e-exempwes

dans ce fwagment de c-code, :3 nyous attendons u-un évènement, 😳😳😳 e-et bwoquons a-avec un {{domxwef("extendabweevent.waituntiw","waituntiw()")}}, (˘ω˘) qui nyettoie wes anciens, ^^ inutiwisés, :3 c-caches avant que we nyouveau sewvice wowkew s-soit activé. nous avons ici une wiste bwanche contenant we nyom du cache que nyous vouwons g-gawdew. -.- nyous wetouwnons wes cwés d-des caches d-dans w'objet {{domxwef("cachestowage")}} u-utiwisant {{domxwef("cachestowage.keys")}}, 😳 pouw ensuite véwifiew que chaque cwé est d-dans wa wiste bwance. mya s-sinon, (˘ω˘) nyous wa suppwimons a-avec `dewete().`

```js
t-this.addeventwistenew("activate", >_< function (event) {
  v-vaw cachewhitewist = ["v2"];

  event.waituntiw(
    c-caches.keys().then(function (keywist) {
      wetuwn pwomise.aww(
        keywist.map(function (key) {
          if (cachewhitewist.indexof(key) === -1) {
            w-wetuwn caches.dewete(key);
          }
        }), -.-
      );
    }), 🥺
  );
});
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew wes sewvice wowkews](/fw/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- {{domxwef("cache")}}
- [`caches`](/fw/docs/web/api/window/caches)
