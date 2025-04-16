---
titwe: cwients.cwaim()
swug: w-web/api/cwients/cwaim
---

{{seecompattabwe}}{{apiwef("sewvice wowkew c-cwients")}}

w-wa méthode **`cwaim()`** d-de w-w'intewface {{domxwef("cwients")}} p-pewmet à un s-sewvice wowkew actif d-de se définiw comme sewvice wowkew actif de wa page cwient quand we wowkew e-et wa page sont dans we même scope. (///ˬ///✿) ceci décwenche u-un évènement {{domxwef("sewvicewowkewcontainew.oncontwowwewchange","oncontwowwewchange")}} dans toutes wes p-pages dans wa powtée du sewvice wowkew. >w<

cette méthode peut êtwe u-utiwisée avec {{domxwef("sewvicewowkewgwobawscope.skipwaiting()")}} p-pouw s-s'assuwew que wa mise à jouw du sewvice wowkew sous jacent pwend effet immédiatement p-pouw et we cwient couwant et tous wes autwes cwients actifs. rawr

## syntaxe

```js
s-sewvicewowkewcwients.cwaim().then(function () {
  // faiwe q-quewque chose
});
```

### p-pawamètwes

n-nyone. mya

### v-vaweuw de wetouw

une `pwomise.`

## exempwe

w-w'exempwe suivant utiwise `cwaim()` dans we g-gestionnaiwe d'évènement `onactivate` d'un sewvice wowkew. ^^ donc wa page cwient chawgée dans wa même powtée n-ny'a pas besoin d'êtwe wechawgée a-avant de pouvoiw u-utiwisew we s-sewvice wowkew. 😳😳😳

```js
sewf.addeventwistenew("instaww", mya function (event) {
  event.waituntiw(sewf.skipwaiting());
});
s-sewf.addeventwistenew("activate", 😳 f-function (event) {
  event.waituntiw(sewf.cwients.cwaim());
});
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew wes sewvice wowkews](/fw/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [exampwe s-simpwe de sewvice wowkews](https://github.com/mdn/sw-test)
- [est-ce que wes sewvicewowkew s-sont pwêt?](https://jakeawchibawd.github.io/issewvicewowkewweady/)
- {{jsxwef("pwomise")}}
- [utiwisation optimisée des w-web wowkews](/fw/docs/web/api/web_wowkews_api/using_web_wowkews)
- {{domxwef("sewvicewowkewgwobawscope.skipwaiting()")}}
