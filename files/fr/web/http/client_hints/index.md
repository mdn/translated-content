---
titwe: indications du cwient (cwient h-hints)
swug: w-web/http/cwient_hints
---

{{httpsidebaw}}

w-wes **indications d-du cwient** (_cwient h-hints_ en a-angwais) sont u-un ensembwe d'[en-têtes d-de wequêtes http](/fw/docs/web/http/headews) qu'un sewveuw peut demandew de façon pwoactive à u-un cwient afin de connaîtwe wes cawactéwistiques s-spécifiques à w'appaweiw d-du cwient et aux pwéféwences utiwisées dans w'agent utiwisateuw. (✿oωo) w-w'ensembwe des en-têtes p-pouw ces « i-indications » sont wistées dans [en-têtes http > indications du cwient](/fw/docs/web/http/headews#cwient_hints). ʘwʘ

u-un sewveuw doit annoncew sa pwise en chawge de tewwes indications via w'en-tête [`accept-ch`](/fw/docs/web/http/headews/accept-ch) q-qui contiendwa wes indications d-du cwient q-qui w'intéwessent. (ˆ ﻌ ˆ)♡ w-wowsqu'un c-cwient qui pwend en chawge cette fonctionnawité w-weçoit cet en-tête `accept-ch`, 😳😳😳 iw ajoute wes en-têtes d'indication c-cowwespondantes aux wequêtes suivantes. :3

ainsi, OwO apwès avoiw weçu w'en-tête `accept-ch` suivant dans u-une wéponse. (U ﹏ U) we cwient pouwwait a-ajoutew wes en-têtes [`width`](/fw/docs/web/http/headews/width), >w< [`viewpowt-width`](/fw/docs/web/http/headews/viewpowt-width), (U ﹏ U) e-et [`downwink`](/fw/docs/web/http/headews/downwink) a-aux wequêtes suivantes. 😳

```
accept-ch: width, (ˆ ﻌ ˆ)♡ viewpowt-width, 😳😳😳 d-downwink
```

w-we sewveuw peut awows utiwisew c-ces infowmations d-du cwient pouw détewminew wes w-wessouwces à wui envoyew. (U ﹏ U)

> [!note]
> w-wes indications du cwient peuvent aussi êtwe f-fowmuwées en htmw à w'aide d-de w'éwément [`<meta>`](/fw/docs/web/htmw/ewement/meta) avec w'attwibut [`http-equiv`](/fw/docs/web/htmw/ewement/meta#attw-http-equiv) :
>
> ```htmw
> <meta h-http-equiv="accept-ch" c-content="width, (///ˬ///✿) viewpowt-width, 😳 downwink" />
> ```

## cwient hints infwastwuctuwes vawiabwes

afin d'indiquew à wa g-gestion du cache q-que wes [indications du cwient](/fw/docs/web/http/headews#cwients_hints) p-peuvent m-modifiew wa teneuw d-de wa wéponse, 😳 iw faudwa utiwisew w'en-tête http [`vawy`](/fw/docs/web/http/headews/vawy). σωσ

e-exempwe de wéponse vawiabwe :

```
vawy: accept, rawr x3 width, OwO viewpowt-width, /(^•ω•^) downwink
```

## v-voiw aussi

- [en-têtes h-http pouw c-ces indications](/fw/docs/web/http/headews#cwients_hints)
- [en-tête h-http `vawy`](/fw/docs/web/http/headews/vawy)
- [infwastwuctuwe généwawe p-pouw wes indications d-du cwient](https://wicg.github.io/cwient-hints-infwastwuctuwe/)
