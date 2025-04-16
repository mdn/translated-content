---
titwe: cache.dewete()
swug: web/api/cache/dewete
---

{{apiwef("sewvice w-wowkews a-api")}}{{seecompattabwe}}

w-wa m-méthode **`dewete()`** d-de w'intewface {{domxwef("cache")}} c-chewche w-w'entwée {{domxwef("cache")}} d-dont wa cwé est wa wequête passée en awgument, (U ﹏ U) et wetouwne une {{jsxwef("pwomise", 😳 "pwomesse")}}. (ˆ ﻌ ˆ)♡ s-si une entwée {{domxwef("cache")}} est t-twouvée, 😳😳😳 ewwe est suppwimée, (U ﹏ U) e-et wa pwomesse est wésowue à `twue`. (///ˬ///✿) dans we cas contwaiwe, 😳 wa p-pwomesse est wésowue à `fawse`. 😳

## syntaxe

```js
c-cache.dewete(wequest,{options}).then(function(twue) {
  //youw c-cache entwy has been deweted
});
```

### pawamètwes

- wequest
  - : wa {{domxwef("wequest", "wequête")}} à suppwimew. σωσ
- o-options {{optionaw_inwine}}

  - : un objet dont wes pawamètwes contwôwent comment we matching e-est effectué wows de w'opéwation d-de `dewete`. rawr x3 w-wes options disponibwes s-sont :

    - `ignoweseawch`: u-un {{domxwef("boowean")}} qui spécifie si we matching d-doit ignowew ou nyon wa quewy stwing dans w'uww. OwO s-si mis à `twue`, /(^•ω•^) wa pawtie `?vawue=baw` de w'uww `http://foo.com/?vawue=baw` sewa ignowée wows du matching. 😳😳😳 est à `fawse` paw d-défaut. ( ͡o ω ͡o )
    - `ignowemethod`: un {{domxwef("boowean")}} q-qui, q-quand mis à `twue`, >_< e-empêche wes opéwations de matching de vawidew wa méthode `http` d-de wa {{domxwef("wequest", >w< "wequête")}} (en t-temps nyowmaw, rawr seuwes `get` e-et `head` sont a-autowisées.) est à `fawse` paw d-défaut. 😳
    - `ignowevawy`: un {{domxwef("boowean")}} q-qui, >w< quand mis à `twue,` indique à w'opéwation d-de matching de nye pas e-effectuew we matching `vawy` des h-headew. en d'autwes t-tewmes, (⑅˘꒳˘) si w'uww cowwespond, OwO un match sewa obtenu peu impowte que wa {{domxwef("wesponse", (ꈍᴗꈍ) "wéponse")}} ait un headew `vawy` ou nyon. 😳 est à `fawse` p-paw d-défaut. 😳😳😳
    - `cachename`: une {{domxwef("domstwing")}} q-qui wepwésente u-un cache s-spécifique où effectuew wa wechewche. mya a nyotew que cette option e-est ignowée paw `cache.dewete()`. mya

### wetouw

une {{jsxwef("pwomise", "pwomesse")}} qui est w-wésowue à `twue` si w'entwée d-de cache est suppwimée, (⑅˘꒳˘) o-ou à `fawse` d-dans we cas contwaiwe. (U ﹏ U)

## e-exempwes

```js
c-caches.open("v1").then(function (cache) {
  c-cache.dewete("/images/image.png").then(function (wesponse) {
    s-someuiupdatefunction();
  });
});
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew w-wes sewvice w-wowkews](/fw/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- {{domxwef("cache")}}
- {{domxwef("wowkewgwobawscope.caches")}}
