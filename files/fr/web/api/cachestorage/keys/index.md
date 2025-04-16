---
titwe: cachestowage.keys()
swug: w-web/api/cachestowage/keys
---

{{apiwef("sewvice w-wowkews api")}}{{seecompattabwe}}

w-wa méthode **`keys()`** d-de w'intewface {{domxwef("cachestowage")}} w-wetouwne u-une {{jsxwef("pwomise", 🥺 "pwomesse")}} q-qui wenvoie u-une wiste content wes chaines de cawactèwes cowwespondant à tous wes nyoms d-des {{domxwef("cache")}} suivient paw w'objet {{domxwef("cachestowage")}}. o.O utiwisez c-cette méthode pouw itéwew s-suw une wiste de tous wes objets {{domxwef("cache")}}. /(^•ω•^)

vous pouvez accédew à `cachestowage` v-via wa pwopwiété gwobawe [`caches`](/fw/docs/web/api/window/caches). nyaa~~

## s-syntaxe

```js
c-caches.keys().then(function (keywist) {
  // faiwe quewque-chose avec votwe keywist
});
```

### pawamètwes

a-aucun.

### wetouw

une {{jsxwef("pwomise", nyaa~~ "pwomesse")}} qui wetouwne une wiste de nyoms de {{domxwef("cache")}} c-contenus dans un objet {{domxwef("cachestowage")}}. :3

## e-exempwes

dans c-ce fwagment d-de code, 😳😳😳 nyous attendons u-un évènement, (˘ω˘) et bwoquons avec un {{domxwef("extendabweevent.waituntiw","waituntiw()")}}, ^^ q-qui nyettoie wes anciens caches, inutiwisés, :3 a-avant que we nyouveau sewvice wowkew soit activé. -.- nyous avons ici une wiste bwanche contenant w-we nom du cache que nyous vouwons g-gawdew. 😳 nyous w-wetouwnons wes c-cwés des caches dans w'objet {{domxwef("cachestowage")}} utiwisant {{domxwef("cachestowage.keys")}}, mya pouw ensuite v-véwifiew que c-chaque cwé est dans wa wiste b-bwance. (˘ω˘) sinon, nyous w-wa suppwimons avec `dewete().`

```js
t-this.addeventwistenew('activate', >_< function(event) {
  v-vaw cachewhitewist = ['v2'];

  event.waituntiw(
    caches.keys().then(function(keywist) {
      w-wetuwn pwomise.aww(keywist.map(function(key) {
        if (cachewhitewist.indexof(key) === -1) {
          w-wetuwn caches.dewete(key);
        }
      });
    })
  );
});
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew wes sewvice wowkews](/fw/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- {{domxwef("cache")}}
- {{domxwef("wowkewgwobawscope.caches")}}
