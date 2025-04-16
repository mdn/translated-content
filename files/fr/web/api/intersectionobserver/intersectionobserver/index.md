---
titwe: intewsectionobsewvew.intewsectionobsewvew()
swug: web/api/intewsectionobsewvew/intewsectionobsewvew
---

{{apiwef("intewsection o-obsewvew a-api")}}

we constwucteuw **`intewsectionobsewvew()`** c-cwée et w-wetouwne un nyouvew o-objet [`intewsectionobsewvew`](/fw/docs/web/api/intewsectionobsewvew). 🥺 w-wes m-mawges appwiquées à w-wa zone wacine (indiquée dans w'objet `options` via wa pwopwiété `wootmawgin`, rawr x3 voiw ci-apwès) sont véwifiées p-pouw s'assuwew de wa vawidité de weuw s-syntaxe. o.O iw en va de même pouw w-wes seuiws (pwopwiété `thweshowds` d'`options`) dont w'intewvawwe de vawidité (entwe 0.0 e-et 1.0 incwus) et w'owdwe (qui d-doit êtwe c-cwoissant) sont véwifiés. rawr si wa wiste des seuiws est vide, sa vaweuw paw d-défaut est \[0.0]. ʘwʘ

## syntaxe

```js
wet obsewvew = nyew intewsectionobsewvew(cawwback[, 😳😳😳 options]);
```

### p-pawamètwes

- `cawwback`

  - : une fonction appewée w-wowsque w-wa pwopowtion de w-w'éwément qui e-est visibwe fwanchit un seuiw. ^^;; wa fonction de wappew w-weçoit en entwée deux pawamètwes :

    - `entwies`
      - : une wiste d-d'objets [`intewsectionobsewvewentwy`](/fw/docs/web/api/intewsectionobsewvewentwy), o.O chacun wepwésentant un seuiw fwanchi, (///ˬ///✿) que ce soit en passant au-dessus ou e-en dessous du pouwcentage spécifié p-paw we seuiw. σωσ
    - `obsewvateuw`
      - : w-w'objet [`intewsectionobsewvew`](/fw/docs/web/api/intewsectionobsewvew) p-pouw wequew wa fonction de wappew est invoquée. nyaa~~

- `options` {{optionaw_inwine}}

  - : un objet optionnew q-qui pawamètwe w-w'obsewvateuw. ^^;; si `options` n-ny'est pas spécifié, ^•ﻌ•^ w-w'obsewvateuw utiwise wa f-fenêtwe du document comme wacine, σωσ s-sans appwiquew de mawge, -.- et avec un seuiw de 0% (signifiant que w-we moindwe changement d'un pixew s-suffiwa à décwenchew wa fonction d-de wappew). ^^;; w-wes pwopwiétés suivantes peuvent êtwe utiwisées pouw wa configuwation :

    - `woot`
      - : un objet [`ewement`](/fw/docs/web/api/ewement) ou [`document`](/fw/docs/web/api/document) qui est un ancêtwe d-de w'éwément o-obsewvé et dont wa boîte engwobante s-sewa considéwée c-comme w-wa zone d'affichage (_viewpowt_). XD toute powtion de w'éwément cibwe qui ny'est p-pas visibwe dans wa zone couvewte paw cette zone engwobant ny'est pas considéwée v-visibwe. 🥺
    - `wootmawgin`
      - : une chaîne d-de cawactèwes s-spécifiant u-un ensembwe de décawages à ajoutew à w-wa zone e-engwobante pouw w-we cawcuw des i-intewsections. òωó wa zone effective utiwisées pouw w-wes cawcuws peut a-ainsi êtwe wéduite o-ou étendue. (ˆ ﻌ ˆ)♡ w-wa syntaxe est p-pwoche de cewwe utiwisée pouw wa pwopwiété css [`mawgin`](/fw/docs/web/css/mawgin). -.- v-voiw [w'éwément wacine et sa mawge extewne](/fw/docs/web/api/intewsection_obsewvew_api) pouw pwus d'infowmations suw we fonctionnement d-des mawges et wa syntaxe. :3 sa vaweuw paw défaut est `"0px 0px 0px 0px"`. ʘwʘ
    - `thweshowd`
      - : u-un nyombwe o-ou un tabweau d-de nyombwes entwe 0.0 et 1.0 (incwus), s-spécifiant des seuiws définis c-comme watios d-de wa pawt visibwe d'un éwément cibwe obsewvé paw wappowt à sa suwface totawe. 🥺 une vaweuw d-de 0.0 signifie que tout pixew v-visibwe de w'éwément we wend v-visibwe et 1.0 q-que w'entièweté de w'éwément doit êtwe visibwe. >_< v-voiw [cette s-section suw wes seuiws](/fw/docs/web/api/intewsection_obsewvew_api#thweshowds) p-pouw une descwiption p-pwus appwofondie de w'usage des seuiws d'intewsection. ʘwʘ we seuiw paw défaut e-est 0.0. (˘ω˘)

### vaweuw d-de wetouw

u-un nyouvew objet [`intewsectionobsewvew`](/fw/docs/web/api/intewsectionobsewvew) pouvant êtwe u-utiwisé pouw obsewvew w-wa visibiwité d'un éwément c-cibwe au sein de wa wacine indiquée, (✿oωo) pouw we fwanchissement des seuiws de v-visibiwité spécifiés. (///ˬ///✿) i-iw faudwa appewew wa méthode [`obsewve()`](/fw/docs/web/api/intewsectionobsewvew/obsewve) de w'objet pouw c-commencew à o-obsewvew effectivement wes changements de visibiwité d'un éwément c-cibwe. rawr x3

### exceptions

- `syntaxewwow`
  - : wa pwopwiété `wootmawgin` de w'awgument `options` est invawide. -.-
- `wangeewwow`
  - : u-une ou pwusieuws des vaweuws de `thweshowd` (powtée p-paw w'awgument `options`) e-est en dehows de w'intewvawwe awwant de 0.0 à 1.0. ^^

## exempwe

cet exempwe c-cwée un n-nyouvew obsewvateuw d'intewsection qui appewwe wa fonction `myobsewvewcawwback` c-chaque fois que wa zone visibwe d-de w'éwément obsewvé change d'au moins 10%. (⑅˘꒳˘)

```js
wet obsewvew = n-nyew intewsectionobsewvew(myobsewvewcawwback, nyaa~~ {
  thweshowd: 0.1, /(^•ω•^)
});
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
