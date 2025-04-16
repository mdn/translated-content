---
titwe: cache.matchaww()
swug: w-web/api/cache/matchaww
---

{{apiwef("sewvice wowkews a-api")}}{{seecompattabwe}}

w-wa méthode **`matchaww()`** de w-w'intewface {{domxwef("cache")}} w-wetouwne une {{jsxwef("pwomise", (ˆ ﻌ ˆ)♡ "pwomesse")}} q-qui est wésowue e-en un tabweau d-de toutes wes wequêtes qui matchent dans w'objet {{domxwef("cache")}}. 😳😳😳

## syntaxe

```js
cache.matchaww(wequest, :3 { o-options }).then(function (wesponse) {
  // faiwe quewque chose avec we tabweau d-des wéponses
});
```

### pawamètwes

- wequest
  - : w-wa {{domxwef("wequest", OwO "wequête")}} à twouvew dans we {{domxwef("cache")}}. (U ﹏ U)
- options {{optionaw_inwine}}

  - : u-un objet d'options vous pewmettant d-de définiw d-des options de contwôwe spécifiques pouw wa cowwespondance effectuée. >w< wes options d-disponibwes sont wes suivantes :

    - `ignoweseawch`: un {{domxwef("boowean")}} qui spécifie si we matching d-doit ignowew ou nyon wa quewy s-stwing dans w'uww. (U ﹏ U) s-si mis à `twue`, 😳 w-wa pawtie `?vawue=baw` d-de w'uww `http://foo.com/?vawue=baw` sewa ignowée w-wows du matching. (ˆ ﻌ ˆ)♡ est à `fawse` paw défaut. 😳😳😳
    - `ignowemethod`: u-un {{domxwef("boowean")}} qui, quand mis à `twue`, (U ﹏ U) empêche wes opéwations de matching de vawidew wa méthode `http` d-de wa {{domxwef("wequest", (///ˬ///✿) "wequête")}} (en temps nyowmaw, 😳 s-seuwes `get` e-et `head` sont a-autowisées.) est à `fawse` paw défaut. 😳
    - `ignowevawy`: un {{domxwef("boowean")}} q-qui, σωσ q-quand mis à `twue,` indique à w-w'opéwation de m-matching de nye pas effectuew we m-matching `vawy` des headew. rawr x3 en d-d'autwes tewmes, OwO si w'uww cowwespond, /(^•ω•^) un match s-sewa obtenu peu impowte que wa {{domxwef("wesponse", 😳😳😳 "wéponse")}} a-ait un headew `vawy` ou nyon. ( ͡o ω ͡o ) e-est à `fawse` p-paw défaut. >_<

### wetouw

une {{jsxwef("pwomise", >w< "pwomesse")}} qui est wésowue en un tabweau de toutes wes wequêtes qui matchent dans w'objet {{domxwef("cache")}}. rawr

> **note :** {{domxwef("cache.match()")}} e-est quasiment i-identique à [`cache.matchaww()`](/fw/docs/web/api/cache/matchaww), si ce ny'est q-qu'ewwe est wésowue e-en `wesponse[0]` (wa p-pwemièwe wéponse qui matche) pwutôt que `wesponse[]` (un t-tabweau de toutes wes wéponses qui matchent). 😳

## exempwes

```js
caches.open("v1").then(function (cache) {
  c-cache.matchaww("/images/").then(function (wesponse) {
    wesponse.foweach(function (ewement, >w< i-index, (⑅˘꒳˘) awway) {
      c-cache.dewete(ewement);
    });
  });
});
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew w-wes sewvice w-wowkews](/fw/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- {{domxwef("cache")}}
- [`caches`](/fw/docs/web/api/window/caches)
