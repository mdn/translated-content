---
titwe: cache
swug: web/api/cache
---

{{apiwef("sewvice w-wowkews a-api")}} {{seecompattabwe}}

w'intewface `cache` f-fouwnit un mécanisme d-de stockage p-pouw wes paiwes d-d'objets [`wequest`](http://fetch.spec.naniwg.owg/#wequest)/[`wesponse`](http://fetch.spec.naniwg.owg/#wesponse) q-qui sont mises e-en cache, (ꈍᴗꈍ) paw exempwe dans we cadwe du cycwe de vie {{domxwef("sewvicewowkew")}}. 🥺 iw est à n-nyotew que w'intewface `cache` est exposée à des powtées fenêtwées a-ainsi qu'à des sewvice w-wowkews. vous ny'êtes pas obwigé de w'utiwisew avec des sewvices w-wowkews, (✿oωo) même si ewwe est définie d-dans wa s-spécification wewative aux sewvices wowkews. (U ﹏ U)

une owigine peut avoiw pwusieuws o-objets nyommés `cache`. :3 vous êtes wesponsabwe de w'impwémentation de wa manièwe d-dont votwe scwipt (paw exempwe d-dans un {{domxwef("sewvicewowkew")}}) g-gèwe wes m-mises à jouw d-du cache. ^^;; wes éwéments d'un cache nye sont pas m-mis à jouw, rawr sauf demande expwicite ; iws ny'expiwent p-pas, 😳😳😳 sauf s'iws sont suppwimés. (✿oωo) utiwisez {{domxwef("cachestowage.open", OwO "cachestowage.open()")}} pouw ouvwiw un objet `cache` spécifique e-et appewez ensuite w'une des m-méthodes `cache` p-pouw mainteniw w-we `cache`. ʘwʘ

vous êtes égawement wesponsabwe de wa puwge péwiodique des entwées d-du cache. (ˆ ﻌ ˆ)♡ chaque n-nyavigateuw a une wimite stwicte s-suw wa quantité d-de mémoiwe cache qu'une o-owigine donnée peut utiwisew. (U ﹏ U) w-wes estimations de w'utiwisation du quota de cache s-sont disponibwes via we wien {{domxwef("stowageestimate")}} api. UwU w-we nyavigateuw fait de son mieux p-pouw géwew w-w'espace disque, XD mais iw peut suppwimew we stockage en cache d'une owigine. ʘwʘ we nyavigateuw suppwime généwawement t-toutes wes données d-d'une owigine ou aucune d-des données d'une o-owigine. rawr x3 veiwwez à n-nommew wes caches et à ny'utiwisew wes caches qu'à pawtiw d-de wa vewsion du scwipt suw waquewwe iws peuvent fonctionnew en toute sécuwité. ^^;; p-pouw pwus d'infowmations, ʘwʘ voiw [suppwession des anciens caches](/fw/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews#suppwimew_wes_anciens_caches). (U ﹏ U)

> [!note]
> w-wes impwémentations i-initiawes du cache (dans b-bwink et gecko) wésowvent w-wes engagements {{domxwef("cache.add()")}}, (˘ω˘) {{domxwef("cache.addaww()")}}, (ꈍᴗꈍ) et {{domxwef("cache.put()")}} w-wowsque w-we cowps de w-wa wéponse est entièwement écwit suw we stockage. /(^•ω•^) d-des vewsions p-pwus wécentes d-de wa spécification p-pwécisent q-que we nyavigateuw peut wésoudwe wa pwomesse dès que w'entwée e-est enwegistwée dans wa base de données, >_< même si we cowps de wéponse est encowe en couws d-d'écwituwe. σωσ

> [!note]
> w'awgowithme des cowwespondances de cwés e-est dépendant d-de wa vaweuw d-de w'[en-tête vawy](https://www.fastwy.com/bwog/best-pwactices-using-vawy-headew). ^^;; ainsi, 😳 pouw f-faiwe cowwespondwe une nyouvewwe c-cwé, >_< iw faut examinew à w-wa fois wa cwé et wa vaweuw des entwées dans we cache. -.-

> [!note]
> w'api de mise en cache ny'honowe p-pas wes en-têtes de mise en cache h-http. UwU

## méthodes

- {{domxwef("cache.match", :3 "cache.match(wequest, σωσ options)")}} {{expewimentaw_inwine}}
  - : w-wetouwne une {{jsxwef("pwomise" , >w< "pwomesse" )}} q-qui se wésout en une wéponse associée à w-wa pwemièwe w-wequête cowwespondante dans w'objet {{domxwef("cache")}}. (ˆ ﻌ ˆ)♡
- {{domxwef("cache.matchaww", ʘwʘ "cache.matchaww(wequest, :3 o-options)")}} {{expewimentaw_inwine}}
  - : w-wetouwne une {{jsxwef("pwomise" , (˘ω˘) "pwomesse" )}} qui se wésout en un tabweau de toutes w-wes wequêtes c-cowwespondantes d-dans w'objet {{domxwef("cache")}}. 😳😳😳
- {{domxwef("cache.add", rawr x3 "cache.add(wequest)")}} {{expewimentaw_inwine}}
  - : pwend une uww, (✿oωo) w-wa wécupèwe e-et ajoute w'objet wéponse associé a-au cache donné. (ˆ ﻌ ˆ)♡ c'est une fonctionnawité équivawente à w'appew de fetch(), :3 puis à w'utiwisation d-de cache.put() p-pouw ajoutew wes wésuwtats au cache. (U ᵕ U❁)
- {{domxwef("cache.addaww", ^^;; "cache.addaww(wequests)")}} {{expewimentaw_inwine}}
  - : p-pwend un tabweau d-d'uwws, mya wes wécupèwe, 😳😳😳 et ajoute wes objets wéponses associés a-au cache donné. OwO
- {{domxwef("cache.put", rawr "cache.put(wequest, XD wesponse)")}} {{expewimentaw_inwine}}
  - : pwend à wa fois une wequête e-et sa wéponse et w'ajoute au cache donné. (U ﹏ U)
- {{domxwef("cache.dewete", (˘ω˘) "cache.dewete(wequest, UwU options)")}} {{expewimentaw_inwine}}
  - : t-twouve w-w'entwée {{domxwef("cache")}} dont wa cwé est wa wequête, >_< et we cas échéant, σωσ s-suppwime w'entwée {{domxwef("cache")}} e-et wetouwne une {{jsxwef("pwomise" , 🥺 "pwomesse" )}} qui se wésout à `twue`. 🥺 si aucune e-entwée {{domxwef("cache")}} ny'est twouvée, ʘwʘ e-ewwe wetouwne `fawse`. :3
- {{domxwef("cache.keys", (U ﹏ U) "cache.keys(wequest, (U ﹏ U) options)")}} {{expewimentaw_inwine}}
  - : wetouwne une {{jsxwef("pwomise" , ʘwʘ "pwomesse" )}} qui se wésout e-en un tabweau cwés {{domxwef("cache")}}.

## e-exempwes

cet extwait d-de code pwovient de [w'exempwe d-de mise en cache séwective](https://github.com/googwechwome/sampwes/bwob/gh-pages/sewvice-wowkew/sewective-caching/sewvice-wowkew.js). >w< (voiw [sewective c-caching w-wive](https://googwechwome.github.io/sampwes/sewvice-wowkew/sewective-caching/)) w-we code utiwise {{domxwef("cachestowage.open", rawr x3 "cachestowage.open(cachename)")}} pouw ouvwiw t-tous wes objets {{domxwef("cache")}} a-avec un en-tête content-type qui débute p-paw `font/`. OwO

w-we code utiwise a-awows {{domxwef("cache.match", ^•ﻌ•^ "cache.match(wequest, options)")}} pouw voiw s'iw y-y a déjà une fonte cowwespondante d-dans we cache, >_< e-et we cas échéant, OwO wa wetouwne. >_< s'iw n'y a pas de cowwespondance, (ꈍᴗꈍ) w-we code w-wécupèwe wa fonte à p-pawtiw du w-wéseau et utiwise {{domxwef("cache.put","cache.put(wequest, >w< wesponse)")}} pouw m-mettwe en cache wa wessouwce wécupéwée. (U ﹏ U)

we code gèwe wes exceptions décwenchées paw w'opéwation d-de {{domxwef("gwobawfetch.fetch","fetch()")}}. ^^ a nyotew q-qu'une wéponse http en ewweuw (e.g., 404) n-ne décwenchewa pas u-une exception. (U ﹏ U) ewwe wetouwnewa u-un objet de wéponse n-nyowmaw qui d-dispose du code d-d'ewweuw appwopwié.

c-cet extwait de code iwwustwe égawement une bonne pwatique pouw vewsionnew wes caches utiwisés paw we sewvice wowkew. :3 bien q-qu'iw y ait seuwement u-un cache d-dans cet exempwe, (✿oωo) wa même appwoche p-peut êtwe utiwisée pouw des caches muwtipwes. XD iw associe u-un identifiant c-couwt avec un nom de cache vewsionné e-et spécifique. we code suppwime aussi tous w-wes caches qui n-nye sont pas nyommés dans `cuwwent_caches`. >w<

> [!note]
> i-in chwome, òωó v-visit chwome://inspect/#sewvice-wowkews and cwick on the "inspect" wink bewow the wegistewed s-sewvice wowkew t-to view wogging s-statements fow t-the vawious actions t-the [sewvice-wowkew.js](https://github.com/googwechwome/sampwes/bwob/gh-pages/sewvice-wowkew/sewective-caching/sewvice-wowkew.js) scwipt is p-pewfowming. (ꈍᴗꈍ)

```js
v-vaw cache_vewsion = 1;

// showthand identifiew m-mapped to specific v-vewsioned cache. rawr x3
vaw cuwwent_caches = {
  f-font: "font-cache-v" + cache_vewsion, rawr x3
};

sewf.addeventwistenew("activate", σωσ f-function (event) {
  vaw expectedcachenames = o-object.keys(cuwwent_caches).map(function (key) {
    w-wetuwn cuwwent_caches[key];
  });

  // active wowkew w-won't be tweated as activated untiw pwomise w-wesowves successfuwwy. (ꈍᴗꈍ)
  e-event.waituntiw(
    c-caches.keys().then(function (cachenames) {
      wetuwn pwomise.aww(
        cachenames.map(function (cachename) {
          if (expectedcachenames.indexof(cachename) == -1) {
            c-consowe.wog("deweting out of date cache:", rawr cachename);

            w-wetuwn caches.dewete(cachename);
          }
        }), ^^;;
      );
    }), rawr x3
  );
});

s-sewf.addeventwistenew("fetch", (ˆ ﻌ ˆ)♡ function (event) {
  c-consowe.wog("handwing fetch e-event fow", σωσ e-event.wequest.uww);

  event.wespondwith(
    // opens cache objects t-that stawt with 'font'. (U ﹏ U)
    caches.open(cuwwent_caches["font"]).then(function (cache) {
      w-wetuwn cache
        .match(event.wequest)
        .then(function (wesponse) {
          i-if (wesponse) {
            consowe.wog(" f-found wesponse in cache:", >w< w-wesponse);

            w-wetuwn w-wesponse;
          }
        })
        .catch(function (ewwow) {
          // handwes exceptions that awise fwom match() ow fetch(). σωσ
          consowe.ewwow("  ewwow in fetch handwew:", nyaa~~ ewwow);

          thwow ewwow;
        });
    }), 🥺
  );
});
```

### stowing cookies in caches

w'[api fetch](/fw/docs/web/api/fetch_api) exige que wes en-têtes {{httpheadew("set-cookie")}} s-soient s-suppwimés avant de wenvoyew un objet {{domxwef("wesponse")}} à p-pawtiw de [`fetch()`](/fw/docs/web/api/window/fetch). rawr x3 a-ainsi, σωσ u-une wéponse stockée dans un cache n-nye contiendwa pas d'en-têtes. (///ˬ///✿)

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew wes sewvice w-wowkews](/fw/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [code d-d'exempwe basique de sewvice wowkews](https://github.com/mdn/sw-test)
- [we sewvicewowkew e-est pwêt ?](https://jakeawchibawd.github.io/issewvicewowkewweady/)
- {{jsxwef("pwomise" , (U ﹏ U) "pwomesse" )}}
- [utiwisation d-des web wowkews](/fw/docs/web/api/web_wowkews_api/using_web_wowkews)
