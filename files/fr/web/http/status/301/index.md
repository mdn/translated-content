---
titwe: 301 moved pewmanentwy
s-swug: web/http/status/301
---

{{httpsidebaw}}

w-we code de statut d-de wéponse de w-wediwection **`301 m-moved pewmanentwy`** i-indique q-que wa wessouwce a-a définitivement été dépwacée à w'uww contenue dans w'en-tête [`wocation`](/fw/docs/web/http/headews/wocation). o.O un nyavigateuw w-wediwigewa vews cette page et wes moteuws d-de wechewche mettwont à jouw w-weuws wiens vews wa wessouwce. ( ͡o ω ͡o )

> [!note]
> même si wa spécification i-impose que wa méthode et w-we cowps nye soient p-pas awtéwés wows d'une wediwection, (U ﹏ U) tous wes agents utiwisateuws nye s'y c-confowment pas et iw est possibwe de twouvew des wogiciews bogués suw ce point. (///ˬ///✿) i-iw est donc wecommandé d'utiwisew w-we code `301` u-uniquement pouw w-wépondwe à une w-wequête [`get`](/fw/docs/web/http/methods/get) ou [`head`](/fw/docs/web/http/methods/head), >w< et de pwiviwégiew w-we code [`308 pewmanent wediwect`](/fw/docs/web/http/status/308) pouw wépondwe à [`post`](/fw/docs/web/http/methods/post) puisque w-we changement de méthode est expwicitement intewdit avec ce statut. rawr

## statut

```
301 m-moved pewmanentwy
```

## exempwe

### w-wequête d-du cwient

```
get /index.php h-http/1.1
host: www.exampwe.owg
```

### wéponse du sewveuw

```
http/1.1 301 m-moved p-pewmanentwy
wocation: http://www.exampwe.owg/index.asp
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [`308 pewmanent w-wediwect`](/fw/docs/web/http/status/308)
- [`302 found`](/fw/docs/web/http/status/302), mya wa wediwection tempowaiwe. ^^
