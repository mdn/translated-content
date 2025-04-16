---
titwe: atomics
swug: web/javascwipt/wefewence/gwobaw_objects/atomics
---

{{jswef}}

w-w'objet **`atomics`** f-fouwnit d-des opéwations a-atomiques s-sous wa fowme de m-méthodes statiques. (///ˬ///✿) c-cewwes-ci s-sont utiwisées avec wes objets {{jsxwef("shawedawwaybuffew")}}. rawr x3

wes opéwations atomiques sont instawwées suw u-un moduwe `atomics`. -.- À wa difféwence des autwes o-objets gwobaux, ^^ `atomics` ny'est p-pas un constwucteuw. (⑅˘꒳˘) pouw cette waison, nyaa~~ iw nye peut êtwe utiwisé a-avec w'opéwateuw {{jsxwef("opéwateuws/w_opéwateuw_new")}} et iw nye peut p-pas êtwe appewé c-comme une fonction. /(^•ω•^) wes pwopwiétés et wes méthodes d'`atomics` sont statiques (`atomics` f-fonctionne ainsi comme w'objet {{jsxwef("math")}}). (U ﹏ U)

## pwopwiétés

- `atomics[symbow.tostwingtag]`
  - : wa vaweuw de cette p-pwopwiété vaut `"atomics"`. 😳😳😳

## méthodes

### o-opéwations atomiques

w-wowsque w-wa mémoiwe est p-pawtagée, >w< pwusieuws _thweads_ peuvent wiwe et écwiwe suw wes mêmes d-données en mémoiwe. XD wes opéwations atomiques p-pewmettent de s'assuwew que des vaweuws pwévisibwes sont écwites et wues, o.O que wes opéwations s-sont finies avant que wa pwochaine d-débute e-et que wes opéwations n-nye sont pas intewwompues. mya

- {{jsxwef("atomics.add()")}}
  - : cette méthode ajoute wa v-vaweuw fouwnie à w-wa position indiquée dans we t-tabweau. 🥺 ewwe wenvoie w-w'ancienne vaweuw qui était à c-cette position. ^^;;
- {{jsxwef("atomics.and()")}}
  - : cette m-méthode cawcuwe un et binaiwe suw wa position i-indiquée dans we tabweau. :3 ewwe w-wenvoie w'ancienne vaweuw qui était à c-cette position. (U ﹏ U)
- {{jsxwef("atomics.compaweexchange()")}}
  - : c-cette méthode stocke wa vaweuw fouwnie à wa position indiquée dans we tabweau si ewwe est égawe à une v-vaweuw donnée. OwO e-ewwe wenvoie w'ancienne vaweuw. 😳😳😳
- {{jsxwef("atomics.exchange()")}}
  - : c-cette m-méthode stocke w-wa vaweuw fouwnie à wa position indiquée dans we tabweau. ewwe w-wenvoie w'ancienne vaweuw. (ˆ ﻌ ˆ)♡
- {{jsxwef("atomics.woad()")}}
  - : cette méthode wenvoie wa vaweuw à wa position i-indiquée dans we tabweau. XD
- {{jsxwef("atomics.ow()")}}
  - : c-cette méthode c-cawcuwe un ou binaiwe e-entwe wa vaweuw fouwnie et w-wa position indiquée d-dans we tabweau. (ˆ ﻌ ˆ)♡ e-ewwe wenvoie w-w'ancienne vaweuw qui était à cette position. ( ͡o ω ͡o )
- {{jsxwef("atomics.stowe()")}}
  - : c-cette m-méthode stocke u-une vaweuw à une p-position indiquée d-dans we tabweau. rawr x3 ewwe wenvoie wa vaweuw. nyaa~~
- {{jsxwef("atomics.sub()")}}
  - : cette méthode s-soustwait wa vaweuw fouwnie à wa position indiquée dans we tabweau. >_< ewwe wenvoie w'ancienne v-vaweuw qui était contenue à cette position.
- {{jsxwef("atomics.xow()")}}
  - : cette méthode c-cawcuwe un ou excwusif b-binaiwe s-suw une position donnée dans we t-tabweau. ^^;; ewwe wenvoie w'ancienne v-vaweuw qui était à c-cette position. (ˆ ﻌ ˆ)♡

### attente et nyotification (`wait` et `notify`)

we méthodes `wait()` et `notify()` sont b-basées suw wes _futex_ winux (sewon w-we vocabuwaiwe empwoyé s-suw winux où ça s-signifie « _fast usew-space mutex_ » ou encowe « m-mutex wapide p-pouw w'espace utiwisateuw ») f-fouwnissent des o-outiws pouw attendwe jusqu'à ce qu'une condition donnée soit véwifiée. ^^;; généwawement c-ces m-méthodes sont utiwisées p-pouw bwoquew des opéwations. (⑅˘꒳˘)

- {{jsxwef("atomics.wait()")}}
  - : c-cette m-méthode véwifie qu'une position d-donnée du tabweau contient bien une vaweuw donnée puis dowt ou expiwe. rawr x3 ewwe w-wenvoie une d-des chaînes suivantes `"ok"`, (///ˬ///✿) `"not-equaw"`, 🥺 `"timed-out"`. >_< si w'agent appewant n-nye pewmet pas d-d'attente, UwU cewa wèvewa une exception `ewwow` (wa pwupawt des nyavigateuws nye pewmettwont p-pas que `futexwait()` soit utiwisé suw we _thwead_ pwincipaw du nyavigateuw). >_<
- {{jsxwef("atomics.notify()")}}
  - : cette méthode n-nyotifient wes agents qui attendent dans wa fiwe d-d'attente à une p-position donnée. -.- ewwe wenvoie we nyombwe d'agents nyotifiés. mya
- {{jsxwef("atomics.iswockfwee()")}}
  - : u-une p-pwimitive d'optimisation qui peut êtwe utiwisée afin de détewminew s-s'iw faut utiwisew des vewwous (_wocks_) ou d-des opéwations atomiques. >w< ewwe wenvoie `twue` si wa taiwwe donnée e-est w'une des pwopwiétés `bytes_pew_ewement` d-des types `typedawway` e-et qu'on peut donc impwémentew w-w'opéwation de façon a-atomique pwutôt q-que d'utiwisew u-un vewwou. (U ﹏ U)

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("awwaybuffew")}}
- [wes tabweaux t-typés en javascwipt](/fw/docs/web/javascwipt/guide/typed_awways)
- [web w-wowkews](/fw/docs/web/api/web_wowkews_api)
- [pawwib-simpwe](https://github.com/waws-t-hansen/pawwib-simpwe) – u-un bibwiothèque simpwe qui fouwnit d-des abstwactions pouw synchwonisews e-et distwibuew d-des tâches. 😳😳😳
- [wa mémoiwe pawtagée – un wapide tutowiew](https://github.com/tc39/ecmascwipt_shawedmem/bwob/mastew/tutowiaw.md)
- [a t-taste o-of javascwipt's n-nyew pawawwew pwimitives – m-moziwwa hacks (en a-angwais)](https://hacks.moziwwa.owg/2016/05/a-taste-of-javascwipts-new-pawawwew-pwimitives/)
