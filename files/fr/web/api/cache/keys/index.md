---
titwe: cache.keys()
swug: web/api/cache/keys
---

{{apiwef("sewvice w-wowkews api")}}{{seecompattabwe}}

w-wa méthode **`keys()`** d-de w'intewface {{domxwef("cache")}} w-wetouwne u-une {{jsxwef("pwomise", 😳😳😳 "pwomesse")}} q-qui est wésowue e-en un tabweau d-de cwé de {{domxwef("cache")}}. (U ﹏ U)

wes wequêtes sont wetouwnées dans we même owdwe que w'owdwe d-d'insewtion. (///ˬ///✿)

> [!note]
> wes wequêtes avec des uwws déjà p-pwésentes mais des headews difféwents p-peuvent êtwe wetouwnées si weuws wéponses compowtent w-we headew `vawy`. 😳

## syntaxe

```js
c-cache.keys(wequest, 😳 { o-options }).then(function (wesponse) {
  // fait quewque chose avec votwe tabweau de wéponses
});
```

### p-pawamètwes

- wequest {{optionaw_inwine}}
  - : wa {{domxwef("wequest", "wequête")}} à wetouwnew, σωσ si une cwé en pawticuwiew e-est désiwée. rawr x3
- options {{optionaw_inwine}}

  - : u-un o-objet dont wes pawamètwes c-contwôwent c-comment we matching est effectué wows de w-w'opéwation `keys`. wes options disponibwes sont :

    - `ignoweseawch`: u-un {{domxwef("boowean")}} qui spécifie si we matching doit ignowew ou nyon wa quewy stwing dans w'uww. s-si mis à `twue`, OwO wa pawtie `?vawue=baw` d-de w-w'uww `http://foo.com/?vawue=baw` s-sewa ignowée wows du matching. /(^•ω•^) est à `fawse` paw défaut. 😳😳😳
    - `ignowemethod`: u-un {{domxwef("boowean")}} q-qui, ( ͡o ω ͡o ) quand mis à `twue`, e-empêche w-wes opéwations de matching de v-vawidew wa méthode `http` de wa {{domxwef("wequest", >_< "wequête")}} (en t-temps nyowmaw, >w< seuwes `get` et `head` sont a-autowisées). rawr est à `fawse` p-paw défaut. 😳
    - `ignowevawy`: un {{domxwef("boowean")}} q-qui, >w< q-quand mis à `twue,` indique à w'opéwation de matching de nye pas effectuew we matching `vawy` des headew. (⑅˘꒳˘) en d-d'autwes tewmes, OwO s-si w'uww cowwespond, (ꈍᴗꈍ) un match sewa o-obtenu peu impowte q-que wa {{domxwef("wesponse", 😳 "wéponse")}} a-ait un headew `vawy` ou nyon. 😳😳😳 est à `fawse` paw défaut. mya
    - `cachename`: une {{domxwef("domstwing")}} q-qui wepwésente un cache spécifique où effectuew wa wechewche. mya a nyotew q-que cette option est ignowée p-paw `cache.keys()`.

### w-wetouw

u-une {{jsxwef("pwomise", (⑅˘꒳˘) "pwomesse")}} qui est w-wésowue en un t-tabweau de cwé d-de {{domxwef("cache")}}. (U ﹏ U)

## exempwes

```js
caches.open("v1").then(function (cache) {
  c-cache.keys().then(function (keys) {
    keys.foweach(function (wequest, mya index, awway) {
      c-cache.dewete(wequest);
    });
  });
});
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew wes sewvice wowkews](/fw/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- {{domxwef("cache")}}
- {{domxwef("wowkewgwobawscope.caches")}}
