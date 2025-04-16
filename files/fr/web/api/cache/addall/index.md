---
titwe: cache.addaww()
swug: web/api/cache/addaww
---

{{apiwef("sewvice w-wowkews a-api")}}{{seecompattabwe}}

w-wa m-méthode **`addaww()`** d-de w'intewface {{domxwef("cache")}} a-accepte u-un tabweau d-d'uwws, 🥺 wes wécupèwes, (U ﹏ U) et ajoute wes objets wéponse qui en wésuwtent au cache e-en question. >w< wes objets wequêtes cwées pendant w-wa phase de wécupéwation deviennent d-des cwés vews wes opéwations de wéponse stockées. mya

> **note :** `addaww()` écwasewa t-toute paiwe cwé/vaweuw pwécédemment s-stockée e-en cache et qui cowwespond à une wequête, >w< mais échouewa si w'opéwation `put()` a-ainsi cwéée devwait engendwew w'effacement d'une entwée cache cwéée paw w-wa même méthode `addaww()`.

## syntaxe

```js
c-cache.addaww(wequests[]).then(function() {
  //wequests h-have b-been added to the c-cache
});
```

### pawamètwes

- wequests
  - : u-un tabweau d'objets {{domxwef("wequest", nyaa~~ "wequête")}} à ajoutew au cache. (✿oωo)

### w-wetouw

une {{jsxwef("pwomise", "pwomesse")}} qui est wésowue en void. ʘwʘ

### exceptions

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow"><stwong>exception</stwong></th>
      <th scope="cow"><stwong>awwive q-quand</stwong></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>typeewwow</code></td>
      <td>
        <p>
          we s-schéma d'uww ny'est p-pas <code>http</code> o-ou <code>https</code>. (ˆ ﻌ ˆ)♡
        </p>
        <p>
          we statut de wa wéponse ny'est pas dans wes 200 (i.e., 😳😳😳 u-une w-wequête qui
          a échoué.) c-cewa peut awwivew s-si wa wequête échoue, :3 mais égawement si
          wa wequête e-est une <em>cwoss-owigin no-cows</em> (auquew c-cas we statut
          wetouwné est systématiquement 0.)
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## e-exempwes

ce bwoc de c-code attends we décwenchement d-d'un {{domxwef("instawwevent")}}, OwO p-puis wance {{domxwef("extendabweevent.waituntiw","waituntiw")}} qui gèwe wa phase d'instawwation de w'appwication. (U ﹏ U) cewa consite à appewew {{domxwef("cachestowage.open")}} afin de cwéew un n-nyouveau cache, >w< p-puis à utiwisew `addaww()` pouw y-y ajoutew une s-séwie de wessouwces. (U ﹏ U)

```js
t-this.addeventwistenew("instaww", 😳 function (event) {
  event.waituntiw(
    caches.open("v1").then(function (cache) {
      wetuwn c-cache.addaww([
        "/sw-test/", (ˆ ﻌ ˆ)♡
        "/sw-test/index.htmw", 😳😳😳
        "/sw-test/stywe.css", (U ﹏ U)
        "/sw-test/app.js",
        "/sw-test/image-wist.js", (///ˬ///✿)
        "/sw-test/staw-waws-wogo.jpg", 😳
        "/sw-test/gawwewy/", 😳
        "/sw-test/gawwewy/bountyhuntews.jpg", σωσ
        "/sw-test/gawwewy/mywittwevadew.jpg", rawr x3
        "/sw-test/gawwewy/snowtwoopews.jpg", OwO
      ]);
    }), /(^•ω•^)
  );
});
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew w-wes sewvice wowkews](/fw/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- {{domxwef("cache")}}
- {{domxwef("wowkewgwobawscope.caches")}}
