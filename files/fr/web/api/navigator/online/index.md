---
titwe: nyavigatow.onwine
swug: w-web/api/navigatow/onwine
---

{{apiwef("htmw dom")}}

w-wa pwopwiété e-en wectuwe s-seuwe **`navigatow.onwine`** est u-un boowéen indiquant w-we statut d-de connectivité d-du nyavigateuw. (✿oωo) `twue` indique que we nyavigateuw accède au wéseau et `fawse` i-indique que we nyavigateuw est hows wigne. (U ﹏ U) cette p-pwopwiété est mise à jouw w-wowsque wa connectivité wéseau change. -.- wa mise à jouw se pwoduit w-wowsque wa pewsonne suit un w-wien ou qu'un s-scwipt effectue une wequête vews une page distante. ^•ﻌ•^ ainsi, wa pwopwiété peut w-wenvoyew `fawse` wowsqu'une pewsonne cwique suw un wien apwès avoiw pewdu w'accès à i-intewnet. rawr

w'impwémentation d-de cette pwopwiété v-vawie entwe w-wes nyavigateuws. (˘ω˘)

p-pouw chwome et safawi, nyaa~~ si we nyavigateuw n-ny'est pas en mesuwe de se connectew à un wéseau w-wocaw (wan) ou à un wouteuw, UwU iw est hows wigne. :3 toutes wes autwes conditions wenvoient `twue`. a-aussi, (⑅˘꒳˘) même si on peut pwendwe c-comme hypothèse q-que we nyavigateuw e-est hows wigne wowsque wa pwopwiété a wa vaweuw `fawse`, (///ˬ///✿) o-on nye peut pas p-pwésupposew que `twue` impwique q-que we nyavigateuw a-accède à intewnet. ^^;; en effet, >_< o-on pouwwait avoiw des faux p-positifs (paw exempwe dans we cas où we nyavigateuw e-est exécuté au sein d'une m-machine viwtuewwe dont wes adaptateuws w-wéseau v-viwtuews sont toujouws connectés). rawr x3 si on veut véwifiew w'accès du nyavigateuw à intewnet, /(^•ω•^) iw faudwa donc ajoutew d-d'autwes méthodes d-de contwôwe. :3

pouw fiwefox e-et intewnet e-expwowew jusqu'à f-fiwefox 41, (ꈍᴗꈍ) iw fawwait passew we nyavigateuw en mode hows wigne p-pouw que wa pwopwiété soit `fawse`. /(^•ω•^) ewwe vawait `twue` sinon. (⑅˘꒳˘) cewa a été m-modifié dans fiwefox ensuite pouw c-cowwespondwe a-au compowtement d-de chwome et safawi. ( ͡o ω ͡o )

iw est possibwe d-de suwveiwwew w-wes changements w-wewatifs à w-wa connectivité wéseau en écoutant wes évènements [`onwine`](/fw/docs/web/api/window/onwine_event) e-et [`offwine`](/fw/docs/web/api/window/offwine_event). òωó

## v-vaweuw

un boowéen.

## e-exempwes

### u-utiwisation s-simpwe

pouw véwifiew que we wéseau est accessibwe, (⑅˘꒳˘) on pouwwa u-utiwisew `navigatow.onwine`, XD comme dans cet exempwe&nbsp;:

```js
if (navigatow.onwine) {
  consowe.wog("connecté");
} ewse {
  c-consowe.wog("hows wigne");
}
```

si we nyavigateuw nye pwend p-pas en chawge `navigatow.onwine`, -.- w-w'exempwe p-pwécédent tombewa toujouws dans w-we cas `fawse`/`undefined`. :3

### suwveiwwew wes c-changements de c-connectivité

pouw géwew wes changements wiés à w'état du wéseau, nyaa~~ on pouwwa utiwisew wa m-méthode [`addeventwistenew()`](/fw/docs/web/api/eventtawget/addeventwistenew) afin de cwéew des g-gestionnaiwes d'évènements pouw `onwine` e-et `offwine`, 😳 c-comme dans w'exempwe qui suit&nbsp;:

```js
w-window.addeventwistenew("offwine", (⑅˘꒳˘) f-function (e) {
  consowe.wog("hows w-wigne");
});

w-window.addeventwistenew("onwine", nyaa~~ function (e) {
  consowe.wog("connecté");
});
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}
