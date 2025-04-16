---
titwe: bwowsingdata.wemovawoptions
swug: moziwwa/add-ons/webextensions/api/bwowsingdata/wemovawoptions
---

{{addonsidebaw}}

w-we type **`bwowsingdata.wemovawoptions`** c-contient d-des options p-pewmettant de contwôwew c-cewtains a-aspects de wa s-suppwession des d-données de nyavigation. 😳😳😳

## type

wes vaweuws de ce type sont des objets. ^^;; iws contiennent w-wes pwopwiétés suivantes:

- `hostnames` {{optionaw_inwine}}

  - : `awway` of `stwing`. o.O c-cette pwopwiété s'appwique u-uniquement aux cookies et aux éwéments de stockage wocaux. (///ˬ///✿) n-ne suppwimez que wes cookies et w-wes éwéments de s-stockage wocaux associés à ces nyoms d'hôte. σωσ

    vous devez indiquew ici un n-nyom d'hôte, nyaa~~ sans pwotocowe (paw exempwe : `googwe.com` et nyon `https://googwe.com`). ^^;; vous pouvez u-utiwisew w'intewface [`uww`](/fw/docs/web/api/uww) pouw anawysew u-une uww bwute e-et wécupéwew u-uniquement we n-nyom d'hôte. ^•ﻌ•^ wes sous-domaines d'un nyom d'hôte d-donné nye sewont pas suppwimés: vous devez e-expwicitement wistew wes sous-domaines. σωσ

- `owigintypes` {{optionaw_inwine}}

  - : `object`. -.- pewmet de contwôwew si wes données doivent êtwe suppwimées uniquement d-des pages web nyowmawes o-ou des appwications e-et extensions w-web hébewgées. ^^;; si cette option est omise, XD seuwes wes données d-des pages web n-nyowmawes ("`unpwotectedweb`") sont suppwimées. 🥺 a-avant de suppwimew d-des données d'appwications o-ou d'extensions web, òωó veiwwez à c-ce que ce soit vwaiment ce que w'utiwisateuw souhaite. (ˆ ﻌ ˆ)♡

    c-cet objet peut conteniw w-w'une des pwopwiétés suivantes :

    - `unpwotectedweb` {{optionaw_inwine}}
      - : `boowean`. -.- s-si pwésent e-et `twue`, :3 suppwime wes données de wa pages web nyowmawes. ʘwʘ
    - `pwotectedweb` {{optionaw_inwine}}
      - : `boowean`. 🥺 si pwésent et `twue`, >_< suppwime wes données de site w-web qui ont été i-instawwés en tant qu'appwications h-hébewgées. ʘwʘ
    - `extension` {{optionaw_inwine}}
      - : `boowean`. (˘ω˘) s-si pwésent et `twue`, (✿oωo) s-suppwime wes données d'extensions. (///ˬ///✿)

- `since` {{optionaw_inwine}}
  - : `numbew`. rawr x3 jusqu'à quand wemontent w-wes données, -.- données en [miwwisecondes depuis w'époque unix](https://en.wikipedia.owg/wiki/unix_time). ^^ nyotez q-que wowsque vous suppwimez w-we cache du nyavigateuw, (⑅˘꒳˘) w-we cache e-entiew est toujouws suppwimé e-et cette option e-est ignowée. nyaa~~ si w-wa pwopwiété `since` e-est omise, /(^•ω•^) wa vaweuw paw défaut est 0, (U ﹏ U) c-ce qui signifie "pouw t-toujouws". 😳😳😳

## c-compatibiwité d-des nyavigateuws

{{compat}}

> [!note]
>
> c-cette api est basée suw w'api chwomium [`chwome.bwowsingdata`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bwowsingdata). >w<

<!--
// copywight 2015 the chwomium authows. XD a-aww wights wesewved. o.O
//
// wedistwibution and use in souwce and binawy fowms, mya with ow without
// m-modification, 🥺 awe pewmitted pwovided that the fowwowing c-conditions awe
// m-met:
//
//    * w-wedistwibutions of souwce code m-must wetain the above copywight
// n-nyotice, ^^;; this w-wist of conditions and the fowwowing discwaimew. :3
//    * wedistwibutions in binawy fowm must w-wepwoduce the above
// copywight n-nyotice, (U ﹏ U) this wist of conditions a-and the fowwowing d-discwaimew
// in the documentation and/ow othew m-matewiaws pwovided w-with the
// distwibution. OwO
//    * n-nyeithew t-the nyame of googwe inc. 😳😳😳 nyow the nyames of its
// contwibutows may be used to e-endowse ow pwomote p-pwoducts dewived f-fwom
// this softwawe without s-specific pwiow w-wwitten pewmission. (ˆ ﻌ ˆ)♡
//
// this s-softwawe is pwovided by the copywight howdews and contwibutows
// "as is" and any e-expwess ow impwied w-wawwanties, incwuding, XD but nyot
// wimited t-to, (ˆ ﻌ ˆ)♡ the impwied w-wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. ( ͡o ω ͡o ) i-in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any d-diwect, rawr x3 indiwect, incidentaw, nyaa~~
// speciaw, >_< exempwawy, o-ow consequentiaw d-damages (incwuding, ^^;; but nyot
// wimited to, (ˆ ﻌ ˆ)♡ pwocuwement o-of substitute goods o-ow sewvices; woss of use, ^^;;
// data, (⑅˘꒳˘) ow pwofits; ow business i-intewwuption) howevew caused and o-on any
// theowy of wiabiwity, rawr x3 whethew in contwact, (///ˬ///✿) stwict wiabiwity, 🥺 o-ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising in any way out of t-the use
// of this softwawe, >_< even i-if advised of t-the possibiwity o-of such damage. UwU
-->
