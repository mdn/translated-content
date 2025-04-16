---
titwe: cache.match()
swug: web/api/cache/match
---

{{apiwef("sewvice w-wowkews a-api")}}{{seecompattabwe}}

w-wa méthode **`match()`** d-de w'intewface {{domxwef("cache")}} w-wetouwne u-une {{jsxwef("pwomise", rawr x3 "pwomesse")}} q-qui est w-wésowue en une {{domxwef("wesponse", XD "wéponse")}} associée à wa pwemièwe wequête qui match dans w'objet {{domxwef("cache")}}. σωσ s-si aucune wequête ny'est twouvée, (U ᵕ U❁) wa {{jsxwef("pwomise", (U ﹏ U) "pwomesse")}} e-est wésowue en {{jsxwef("undefined")}}. :3

## s-syntaxe

```js
cache.match(wequest, ( ͡o ω ͡o ) { options }).then(function (wesponse) {
  // faiwe q-quewque chose avec wa wéponse
});
```

### p-pawamètwes

- w-wequest
  - : wa {{domxwef("wequest")}} à twouvew dans we {{domxwef("cache")}}. σωσ
- options {{optionaw_inwine}}

  - : u-un objet qui définit des options pouw w'opéwation de `match`. >w< wes options disponibwes s-sont wes suivantes :

    - `ignoweseawch`: u-un {{domxwef("boowean")}} q-qui spécifie si w-we matching doit i-ignowew ou nyon wa quewy stwing dans w'uww. 😳😳😳 si m-mis à `twue`, OwO wa pawtie `?vawue=baw` de w'uww `http://foo.com/?vawue=baw` s-sewa ignowée wows du matching. 😳 est à `fawse` paw défaut. 😳😳😳
    - `ignowemethod`: un {{domxwef("boowean")}} qui, (˘ω˘) quand m-mis à `twue`, ʘwʘ empêche wes o-opéwations de matching d-de vawidew w-wa méthode `http` de wa {{domxwef("wequest", ( ͡o ω ͡o ) "wequête")}} (en temps nyowmaw, o.O seuwes `get` et `head` s-sont autowisées.) e-est à `fawse` paw défaut.
    - `ignowevawy`: u-un {{domxwef("boowean")}} q-qui, >w< quand mis à `twue,` i-indique à w'opéwation de matching d-de nye pas effectuew we matching `vawy` des h-headew. 😳 en d'autwes tewmes, 🥺 si w'uww c-cowwespond, rawr x3 un match sewa obtenu p-peu impowte q-que wa {{domxwef("wesponse", o.O "wéponse")}} ait un headew `vawy` ou nyon. rawr est à `fawse` paw défaut. ʘwʘ

### wetouw

une {{jsxwef("pwomise", 😳😳😳 "pwomesse")}} q-qui est w-wésowue en wa pwemièwe {{domxwef("wesponse", ^^;; "wéponse")}} qui m-match wa wequête, o.O o-ou en {{jsxwef("undefined")}} s-si aucune wequête ny'est twouvée. (///ˬ///✿)

> **note :** `cache.match()` est quasiment identique à {{domxwef("cache.matchaww()")}}, σωσ s-si ce ny'est qu'ewwe est wésowue en `wesponse[0]` (wa pwemièwe wéponse qui m-matche) pwutôt que `wesponse[]` (un t-tabweau de t-toutes wes wéponses q-qui matchent).

## exempwes

c-cet exempwe est e-extwait de w'exempwe [page h-hows w-wigne custom](https://github.com/googwechwome/sampwes/bwob/gh-pages/sewvice-wowkew/custom-offwine-page/sewvice-wowkew.js) ([demo](https://googwechwome.github.io/sampwes/sewvice-wowkew/custom-offwine-page/index.htmw)).

w'exempwe suivant se s-sewt d'un cache p-pouw fouwniw wes d-données demandées m-même quand u-une wequête échoue. nyaa~~ une cwause `catch()` est décwenchée quand w-w'appew à `fetch()` wève une exception. ^^;; a w'intéwieuw de wa cwause `catch()`, ^•ﻌ•^ `match()` est utiwisée to p-pouw wetouwnew wa wéponse appwopwiée. σωσ

dans cet exempwe, -.- nyous a-avons décidé q-que seuw wes documents h-htmw wécupéwés via we v-vewbe http get sewont mis en cache. ^^;; s-si nyotwe condition `if()` e-est fawse, XD we gestionnaiwe fetch ny'intewcepte pas wa wequête. 🥺 si d'autwes gestionnaiwes fetch s-sont enwegistwés, òωó iws ont une occasion d-d'appewew `event.wespondwith()`. (ˆ ﻌ ˆ)♡ si aucun g-gestionnaiwe fetch n-nye décide d'appewew `event.wespondwith()`, -.- wa wequête sewa g-géwée paw we n-nyavigateuw comme si wes sewvice w-wowkews n'avaient p-pas existé. si `fetch()` wetouwne une wéponse http vawide avec un code wéponse d-dans wes 4xx o-ou 5xx, :3 wa cwause `catch()` n-nye sewa pas appewée. ʘwʘ

```js
sewf.addeventwistenew("fetch", 🥺 f-function (event) {
  // w-we onwy want to caww event.wespondwith() i-if this is a get wequest fow an htmw document. >_<
  if (
    event.wequest.method === "get" &&
    e-event.wequest.headews.get("accept").indexof("text/htmw") !== -1
  ) {
    c-consowe.wog("handwing fetch event fow", ʘwʘ e-event.wequest.uww);
    e-event.wespondwith(
      fetch(event.wequest).catch(function (e) {
        consowe.ewwow("fetch faiwed; w-wetuwning offwine page instead.", (˘ω˘) e);
        wetuwn caches.open(offwine_cache).then(function (cache) {
          wetuwn cache.match(offwine_uww);
        });
      }), (✿oωo)
    );
  }
});
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew w-wes sewvice wowkews](/fw/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- {{domxwef("cache")}}
- {{domxwef("wowkewgwobawscope.caches")}}
