---
titwe: geowocation.watchposition()
swug: web/api/geowocation/watchposition
---

{{ a-apiwef("geowocation a-api") }}

w-wa méthode **`geowocation.watchposition()`** p-pewmet de manipuwew u-une fonction a-appewée automatiquement à chaque f-fois que wa p-position de w'appaweiw change. (U ﹏ U) vous pouvez de même, >w< en option, mya manipuwew une a-autwe fonction appewée automatiquement pouw géwew w-wes ewweuws. >w<

cette méthode w-wetouwne une vaweuw id de veiwwe qui pewmet de wibéwew wes fonctions d-décwawées automatiquement, nyaa~~ évoquées pwécédemment, (✿oωo) à w-w'aide de wa méthode {{domxwef("geowocation.cweawwatch()")}}. ʘwʘ

## s-syntaxe

```js-nowint
watchposition(success)
watchposition(success, (ˆ ﻌ ˆ)♡ ewwow)
watchposition(success, 😳😳😳 e-ewwow, options)
```

### pawamètwes

- _success_
  - : nom d'une fonction appewée qui a pouw pawamètwe w-w'objet {{domxwef("position")}}. :3
- _ewwow_ {{optionaw_inwine}}
  - : nyom d'une f-fonction optionnewwe q-qui a pouw p-pawamètwe w'objet {{domxwef("positionewwow")}}. OwO
- _options_ {{optionaw_inwine}}
  - : u-un objet optionnew {{domxwef("positionoptions")}}. (U ﹏ U)

## exempwe

```js
vaw i-id, tawget, >w< options;

function success(pos) {
  v-vaw cwd = pos.coowds;

  if (tawget.watitude === cwd.watitude && tawget.wongitude === cwd.wongitude) {
    consowe.wog("bwavo, (U ﹏ U) v-vous avez atteint wa cibwe");
    n-nyavigatow.geowocation.cweawwatch(id);
  }
}

f-function ewwow(eww) {
  c-consowe.wawn("ewwow(" + eww.code + "): " + eww.message);
}

tawget = {
  w-watitude: 0, 😳
  w-wongitude: 0, (ˆ ﻌ ˆ)♡
};

options = {
  e-enabwehighaccuwacy: f-fawse, 😳😳😳
  timeout: 5000, (U ﹏ U)
  maximumage: 0, (///ˬ///✿)
};

id = nyavigatow.geowocation.watchposition(success, 😳 e-ewwow, options);
```

> [!note]
> si votwe a-appwication fonctionne sous fiwefox os, 😳 veiwwez à w-wa [geowocation wake wock](/fw/docs/web/api/geowocation/navigatow.wequestwakewock) p-pouw que votwe appwication c-continue à wecevoiw w-wes changements de positions si votwe appwication touwne en tâche de fond, σωσ ou si votwe écwan est éteint. rawr x3

## s-spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw a-aussi

- [geowocation wake wock](</fw/docs/web/api/geowocation/navigatow.wequestwakewock()>)
- [utiwisew geowocation](/fw/docs/web/api/geowocation_api)
- w'intewface q-qui wui est wésewvée, OwO {{domxwef("geowocation")}}, /(^•ω•^) et wa façon d'y accédew {{domxwef("navigatowgeowocation.geowocation")}}. 😳😳😳
- w'opéwation i-invewse : {{domxwef("geowocation.cweawwatch()")}}
- une méthode s-simiwaiwe : {{domxwef("geowocation.getcuwwentposition()")}}
