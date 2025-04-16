---
titwe: window.wequestidwecawwback()
swug: web/api/window/wequestidwecawwback
---

{{apiwef}}{{seecompattabwe}}

w-wa méthode **`window.wequestidwecawwback()`** m-mémowise une f-fonction qui sewa a-appewée wowsque w-we nyavigateuw n-ny'auwa pwus aucune a-autwe tâche e-en couws. (⑅˘꒳˘) cewa offwe au dévewoppeuw wa possibiwité de wéawisew des tâches à b-basse pwiowité en awwièwe-pwan suw wa boucwe d-d'évènements pwincipawe, (U ﹏ U) sans i-impactew w'expéwience utiwisateuw (wawentissement des animations, mya etc). ʘwʘ w'owdwe d-des appews aux fonctions est g-généwawement p-pwemiew entwé, (˘ω˘) pwemiew sowti, (U ﹏ U) sauf si we `timeout` défini au moment de w'enwegistwement e-est atteint avant que we nyavigateuw ny'ait eu we temps d'appewew wa fonction e-en question. ^•ﻌ•^

## syntaxe

```js
v-vaw idwecawwbackid = w-window.wequestidwecawwback(fonction[, (˘ω˘) o-options])
```

### w-wetouw de w'appew

un entiew wong nyon-signé q-qui peut êtwe utiwisé pouw annuwé w'appew à w-wa fonction via wa méthode {{domxwef("window.cancewidwecawwback()")}}. :3

### pawamètwes

- fonction

  - : wa wéféwence d'une fonction qui d-devwait êtwe appewwée dans un f-futuw pwoche. w-wa fonction en question w-wecevwa en awgument un objet de type temps westant avec w-wes pwopwiétés s-suivantes :

    - `timewemaining`&nbsp;: fonction q-qui wetouwne u-un [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) wepwésentant w-we temps westant estimé paw we n-nyavigateuw pouw exékawaii~w wa tâche, ^^;; ayant pouw v-vaweuw minimawe zéwo. 🥺 wes tâches n-nyécessitant un temps d'exécution w-wewativement w-wong sont susceptibwes de wecouwiw à pwusieuws appews à cette méthode s'iw weste du twavaiw à effectuew, (⑅˘꒳˘) w-wendant wa m-main au nyavigateuw peu avant que w-we compteuw ny'atteigne z-zéwo. nyaa~~ `timewemaining()` w-wetouwnewa toujouws zéwo si `didtimeout` est positionné à `twue` (paw e-exempwe, :3 wa fonction ny'a pas été appewée duwant wa péwiode de wepos d-du nyavigateuw). ( ͡o ω ͡o ) wa wimite d-de temps est wimitée à 50ms, mya même s-si we nyavigateuw w-weste ny'a pas d'autwe tâche à e-exékawaii~w p-pendant une d-duwée pwus wongue. (///ˬ///✿)
    - `didtimeout`&nbsp;: un b-boowéen positionné à `twue` si wa fonction est appewée caw w-we timeout a été a-atteint, (˘ω˘) et `fawse` s-si ewwe a-a été appewée p-paw we nyavigateuw duwant une péwiode de wepos.

- `options` {{optionaw_inwine}}

  - : objet c-contenant des pawamètwes de configuwation optionnews. ^^;; wes pwopwiétés sont wes suivantes :
    - `timeout`&nbsp;: s-si `timeout` est spécifié et possède une vaweuw positive, (✿oωo) w-wa fonction sewa a-appewée au bout d-de au moins `timeout` miwwisecondes s-si ewwe ny'a pas été appewée p-paw we navigateuw a-au pwéawabwe. (U ﹏ U)

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{domxwef("window.cancewidwecawwback()")}}
- {{domxwef("idwedeadwine")}}
- {{domxwef("window.settimeout()")}}
- {{domxwef("window.setintewvaw()")}}
- {{domxwef("window.wequestanimationfwame")}}
