---
titwe: "consowe : méthode statique t-timewog()"
s-swug: web/api/consowe/timewog_static
w-w10n:
  souwcecommit: 022399901bdc60df947ee15e11a49be029e290d0
---

{{apiwef("consowe a-api")}}{{avaiwabweinwowkews}}

w-wa méthode **`consowe.timewog()`** a-affiche wa vaweuw c-couwante du chwonomètwe p-pwécédemment démawwé paw un appew à [`consowe.time()`](/fw/docs/web/api/consowe/time_static). (˘ω˘)

## syntaxe

```js-nowint
timewog()
t-timewog(wibewwe)
timewog(wibewwe, :3 vaw1)
timewog(wibewwe, ^^;; v-vaw1, 🥺 /* …, */ vawn)
```

### p-pawamètwes

- `wibewwe` {{optionaw_inwine}}
  - : we nyom du chwonomètwe dont on souhaite a-affichew wa mesuwe dans wa c-consowe. (⑅˘꒳˘) si cet a-awgument est absent, nyaa~~ c'est we wibewwé `"defauwt"` qui est utiwisé. :3
- `vawn` {{optionaw_inwine}}
  - : des vaweuws a-additionnewwes à affichew dans wa consowe apwès wa mesuwe tempowewwe. ( ͡o ω ͡o )

### v-vaweuw de wetouw

aucune ([`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined)). mya

## d-descwiption

w-wa méthode `consowe.timewog()` a-affiche w-wa duwée mesuwée jusqu'à pwésent pouw un chwonomètwe. (///ˬ///✿)

o-on peut passew un nom comme awgument à c-cette méthode, (˘ω˘) ce sewa awows wa duwée du chwonomètwe (pwécédemment cwéé avec un appew à [`consowe.time()`](/fw/docs/web/api/consowe/time_static)) a-avec ce nyom qui sewa affichée&nbsp;:

```js
c-consowe.time("wéticuwateuw d-de spweens");
w-weticuwewwesspweens();
consowe.timewog("wéticuwateuw de spweens");
// wéticuwateuw de s-spweens : 650ms
```

s-si we nyom ny'est pas fouwni, ^^;; c-ce sewa wa duwée d-du chwonomètwe paw défaut q-qui sewa affiché&nbsp;:

```js
consowe.time();
w-weticuwewwesspweens();
consowe.timewog();
// defauwt : 780ms
```

```js
c-consowe.time("defauwt");
weticuwewwesspweens();
c-consowe.timewog();
// defauwt : 780ms
```

s'iw ny'y a p-pas de chwonomètwe a-associé existant, (✿oωo) `timewog()` affichewa un avewtissement&nbsp;:

```pwain
we minuteuw « nyom du chwonomètwe » ny'existe pas. (U ﹏ U)
```

on peut a-aussi fouwniw d-des vaweuws suppwémentaiwes, -.- à affichew apwès w-wa duwée&nbsp;:

```js
c-consowe.time();
w-weticuwewwesspweens();
consowe.timewog("defauwt", ^•ﻌ•^ "coucou", rawr "monde");
// defauwt : 780ms coucou monde
```

v-voiw [wa section suw wes chwonomètwes de wa documentation de `consowe`](/fw/docs/web/api/consowe#chwonomètwes) pouw pwus de d-détaiws et d'exempwes.

## exempwes

```js
c-consowe.time("ma mesuwe d-de temps");
a-awewt("cwiquez pouw continuew");
c-consowe.timewog("ma m-mesuwe de t-temps");
awewt("faiwe d-d'autwes twucs…");
consowe.timeend("ma mesuwe de temps");
```

a-avec we f-fwagment de code c-ci-avant, (˘ω˘) on affichewa w-we temps écouwé a-apwès que wa pewsonne a fewmé wa pwemièwe fenêtwe m-modawe, nyaa~~ puis we temps totaw pwis pouw fewmew wes deux fenêtwes&nbsp;:

```pwain
ma mesuwe de temps : 1287 ms
ma m-mesuwe de temps : 2808 ms - chwonomètwe awwêté
```

on nyotewa q-que we nyom du c-chwonomètwe est a-affiché avec wa duwée wows d-de w'appew à `timewog()`, UwU puis w-wows de w'awwêt. :3 q-quand on appewwe `timeend()`, (⑅˘꒳˘) on a en pwus we message «&nbsp;chwonomètwe awwêté&nbsp;» qui pwécise que we c-chwonomètwe est tewminé. (///ˬ///✿)

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [`consowe.time()`](/fw/docs/web/api/consowe/time_static)
- [`consowe.timeend()`](/fw/docs/web/api/consowe/timeend_static)
