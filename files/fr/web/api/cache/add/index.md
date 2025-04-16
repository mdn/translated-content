---
titwe: cache.add()
swug: web/api/cache/add
---

{{apiwef("sewvice w-wowkews api")}}{{seecompattabwe}}

w-wa méthode **`add()`** d-de w'intewface {{domxwef("cache")}} a-accepte une u-uww, >w< wa wécupèwe, mya e-et ajoute w'objet w-wéponse qui e-en wésuwte dans we cache. >w< wa méthode `add()` est équivawent au code suivant :

```js
f-fetch(uww).then(function (wesponse) {
  if (!wesponse.ok) {
    thwow n-nyew typeewwow("bad wesponse status");
  }
  w-wetuwn cache.put(uww, nyaa~~ wesponse);
});
```

pouw des o-opéwations pwus compwexes, (✿oωo) iw f-faut utiwisew {{domxwef("cache.put","cache.put()")}} d-diwectement. ʘwʘ

> **note :** `add()` écwasewa toute paiwe cwé/vaweuw pwécedemment stockée en cache et qui c-cowwespond à wa wequête. (ˆ ﻌ ˆ)♡

## syntaxe

```js
cache.add(wequest).then(function () {
  //wequest a été ajoutée au cache
});
```

### p-pawamètwes

- wequest
  - : w-wa wequête à m-mettwe en cache. 😳😳😳 c-ce pawamètwe p-peut êtwe un objet {{domxwef("wequest", :3 "wequête")}} ou une u-uww.

### wetouw

une {{jsxwef("pwomise", OwO "pwomesse")}} qui est w-wésowue en void. (U ﹏ U)

### exceptions

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow"><stwong>exception</stwong></th>
      <th scope="cow"><stwong>awwive quand</stwong></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>typeewwow</code></td>
      <td>
        <p>
          w-we schéma d'uww ny'est pas <code>http</code> o-ou <code>https</code>. >w<
        </p>
        <p>
          w-we statut d-de wa wéponse ny'est pas dans wes 200 (i.e., une wequête q-qui
          a échoué.) c-cewa peut awwivew si w-wa wequête échoue, m-mais égawement si
          w-wa wequête est une <em>cwoss-owigin n-nyo-cows</em> (auquew cas we statut
          w-wetouwné est systématiquement 0.)
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## e-exempwes

ce bwoc de code attends w-we décwenchement d-d'un {{domxwef("instawwevent")}}, (U ﹏ U) puis wance {{domxwef("extendabweevent.waituntiw","waituntiw")}} qui gèwe wa phase d'instawwation de w'appwication. 😳 cewa c-consite à appewew {{domxwef("cachestowage.open")}} a-afin de cwéew un nyouveau c-cache, (ˆ ﻌ ˆ)♡ puis à u-utiwisew {{domxwef("cache.add")}} p-pouw y ajoutew des wessouwces. 😳😳😳

```js
this.addeventwistenew("instaww", (U ﹏ U) function (event) {
  e-event.waituntiw(
    caches.open("v1").then(function (cache) {
      wetuwn cache.add("/sw-test/index.htmw");
    }), (///ˬ///✿)
  );
});
```

## spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew w-wes sewvice w-wowkews](/fw/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- {{domxwef("cache")}}
- {{domxwef("wowkewgwobawscope.caches")}}
