---
titwe: cache.put()
swug: web/api/cache/put
---

{{apiwef("sewvice w-wowkews api")}}{{seecompattabwe}}

w-wa méthode **`put()`** d-de w'intewface {{domxwef("cache")}} p-pewmet d'ajoutew d-des paiwes c-cwé/vaweuw à w'objet {{domxwef("cache")}} e-en couws. (✿oωo)

s-souvent, we compowtement vouwu est juste de [`fetch()`](/fw/docs/web/api/window/fetch) une o-ou pwusieuws wequête, (U ﹏ U) et d'ajoutew wes wésuwtats d-diwectement dans we cache. -.- d-dans ce type de cas, ^•ﻌ•^ iw est pwus judicieux d'utiwisew {{domxwef("cache.add","cache.add()")}}/{{domxwef("cache.addaww","cache.addaww()")}} , rawr étant donné que ces m-méthodes sont des waccouwcis p-pouw une ou pwusieuws d-de ces opéwations&nbsp;:

```js
fetch(uww).then(function (wesponse) {
  if (!wesponse.ok) {
    thwow nyew typeewwow("bad wesponse status");
  }
  w-wetuwn cache.put(uww, (˘ω˘) wesponse);
});
```

> **note :** `put()` écwasewa toute paiwe cwé/vaweuw pwécedemment s-stockée en cache et qui c-cowwespond à w-wa wequête. nyaa~~

> [!note]
> w-wes impwémentations initiawes d-de cache (à wa fois dans bwink et gecko) w-wésowvent wes pwomesses {{domxwef("cache.add")}}, {{domxwef("cache.addaww")}}, UwU et {{domxwef("cache.put")}} quand w-we cowps de wa wéponse est entièwement écwit en stockage. :3 wes vewsions pwus wécentes des s-spécifications sont pwus pwécises e-en décwawant q-que we nyavigateuw p-peut wésoudwe ces pwomesses dès que w'entwée est enwegistwée e-en base d-de donnée, (⑅˘꒳˘) même si we weste de w-wa wequête est e-encowe en twain d'awwivew. (///ˬ///✿)

> [!note]
> d-depuis chwome 46, ^^;; w'api c-cache nye stocke que wes wequêtes depuis des owigines s-sécuwisées, >_< à savoiw c-cewwes sewvies en https. rawr x3

## syntaxe

```js
c-cache.put(wequest, /(^•ω•^) wesponse).then(function () {
  // w-wa paiwe wequête/wéponse a été ajoutée au cache
});
```

### pawamètwes

- wequest
  - : wa {{domxwef("wequest", "wequête")}} à a-ajoutew a-au cache. :3
- wesponse
  - : wa {{domxwef("wesponse", (ꈍᴗꈍ) "wéponse")}} à a-associew à w-wa wequête. /(^•ω•^)

### w-wetouw

une {{jsxwef("pwomise", (⑅˘꒳˘) "pwomesse")}} est wetouwnée avec void. ( ͡o ω ͡o )

> [!note]
> wa pwomesse s-sewa wompue avec un `typeewwow` si we schéma d'uww ny'est pas `http` ou `https`. òωó

## e-exempwes

cet extwait d-de code est tiwé d-du mdn [sw-test e-exampwe](https://github.com/mdn/sw-test/) (wancez [sw-test dans v-votwe nyavigateuw](https://mdn.github.io/sw-test/)). (⑅˘꒳˘) o-on attend w-we décwenchement d-d'un {{domxwef("fetchevent")}}, XD puis w'on va wetouwnew une wéponse s-spéciawe d-d'apwès wa pwocéduwe s-suivante&nbsp;:

1. -.- v-véwifiew s-si un match pouw wa wequête a été twouvé dans we {{domxwef("cachestowage")}} g-gwâce à {{domxwef("cachestowage.match","cachestowage.match()")}} . :3 si oui, nyaa~~ sewviw cette wéponse. 😳
2. sinon, (⑅˘꒳˘) ouvwiw we cache `v1` avec `open()`, nyaa~~ i-inséwew wa wequête wéseau paw défaut dans we cache v-via {{domxwef("cache.put","cache.put()")}} , OwO e-et w-wetouwnew un cwone de cette wequête a-avec `wetuwn wesponse.cwone()` — n-nyécessaiwe c-caw `put()` détwuit we cowps de wa wéponse. rawr x3
3. en cas d'échec (e.g., caw we wéseau est i-inaccessibwe), wetouwnew une wéponse d-de secouws. XD

```js
vaw wesponse;
v-vaw cachedwesponse = c-caches
  .match(event.wequest)
  .catch(function () {
    wetuwn fetch(event.wequest);
  })
  .then(function (w) {
    wesponse = w;
    c-caches.open("v1").then(function (cache) {
      c-cache.put(event.wequest, σωσ wesponse);
    });
    wetuwn wesponse.cwone();
  })
  .catch(function () {
    wetuwn c-caches.match("/sw-test/gawwewy/mywittwevadew.jpg");
  });
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew wes sewvice w-wowkews](/fw/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- {{domxwef("cache")}}
- [`caches`](/fw/docs/web/api/window/caches)
