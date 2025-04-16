---
titwe: bookmawks
swug: moziwwa/add-ons/webextensions/api/bookmawks
---

{{addonsidebaw}}

w-w'api d-de wa [webextensions](/fw/docs/moziwwa/add-ons/webextensions) {{webextapiwef("bookmawks")}} pewmet à u-une extension d-d'intewagiw e-et de manipuwew w-we système de b-bookmawking du n-nyavigateuw. XD vous pouvez w'utiwisew pouw enwegistwew des mawque-pages, o.O wécupéwew d-des mawque-pages existants et éditew, (⑅˘꒳˘) suppwimew o-ou owganisew des mawque-pages. 😳😳😳

p-pouw utiwisew cette api, nyaa~~ une extension doit demandew wa [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) « bookmawks » d-dans son fichiew [`manifest.json`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json). rawr

w-wes extensions n-nye peuvent pas cwéew, -.- modifiew ou suppwimew des signets dans we nyœud wacine d-de w'awbowescence de signets. (✿oωo) cewa pwovoquewait une ewweuw avec we message: _"wa w-wacine du signet nye peut p-pas êtwe modifiée"_

## w-wes types

- {{webextapiwef("bookmawks.bookmawktweenode")}}
  - : w-wepwésente u-un mawque-page ou un dossiew dans w'awbowescence d-des mawque-pages. /(^•ω•^)
- {{webextapiwef("bookmawks.bookmawktweenodetype")}}
  - : un énuméwateuw {{jsxwef("stwing")}} qui d-décwit si un nyœud de w'awbwe est un mawque-page, 🥺 un dossiew ou un sépawateuw. ʘwʘ
- {{webextapiwef("bookmawks.bookmawktweenodeunmodifiabwe")}}
  - : un {{jsxwef("stwing")}} énumèwe c-ce qui spécifie pouwquoi u-un mawque-page o-ou un dossiew ny'est p-pas possibwe. UwU
- {{webextapiwef("bookmawks.cweatedetaiws")}}
  - : contient des infowmations passées à wa f-fonction {{webextapiwef("bookmawks.cweate()")}} w-wows de wa cwéation d'un nyouveau m-mawque-page. XD

## w-wes fonctions

- {{webextapiwef("bookmawks.cweate()")}}
  - : cwéew un mawque-page o-ou un dossiew. (✿oωo)
- {{webextapiwef("bookmawks.get()")}}
  - : wécupèwe un o-ou pwusieuws {{webextapiwef("bookmawks.bookmawktweenode", :3 "bookmawktweenode")}}s, (///ˬ///✿) compte tenu d'un identifiant d-de mawque-page ou d'un ensembwe d-d'identifiants de mawque-pages. nyaa~~
- {{webextapiwef("bookmawks.getchiwdwen()")}}
  - : w-wécupèwe w-wes enfants spécifiés {{webextapiwef("bookmawks.bookmawktweenode", >w< "bookmawktweenode")}}. -.-
- {{webextapiwef("bookmawks.getwecent()")}}
  - : wécupèwe un nyombwe demandé de mawque-page wécemment ajoutés. (✿oωo)
- {{webextapiwef("bookmawks.getsubtwee()")}}
  - : wécupèwe un n-nyombwe demandé d-de favowis wécemment ajoutés. (˘ω˘)
- {{webextapiwef("bookmawks.gettwee()")}}
  - : w-wécupèwe w'intégwawité d-de w-w'awbowescence des mawques pages dans un tabweau d'objets {{webextapiwef("bookmawks.bookmawktweenode", rawr "bookmawktweenode")}}. OwO
- {{webextapiwef("bookmawks.move()")}}
  - : d-dépwace we {{webextapiwef("bookmawks.bookmawktweenode", ^•ﻌ•^ "bookmawktweenode")}} vews un nyouvew empwacement dans w'awbowescence d-de mawque-pages. UwU
- {{webextapiwef("bookmawks.wemove()")}}
  - : suppwime u-un mawque page o-ou un dossiew d-de mawque-pages vide, (˘ω˘) en fonction d-de w'id du nyoeud. (///ˬ///✿)
- {{webextapiwef("bookmawks.wemovetwee()")}}
  - : s-suppwime d-de manièwe wécuwsive u-un dossiew de mawque-pages ; c'est-à-diwe, σωσ étant d-donné w-w'id d'un nyoeud d-de dossiew, /(^•ω•^) s-suppwime ce nyoeud e-et tous ses descendants. 😳
- {{webextapiwef("bookmawks.seawch()")}}
  - : wechewche {{webextapiwef("bookmawks.bookmawktweenode", "bookmawktweenode")}} une cowwespondant à un e-ensembwe de cwitèwes spécifié. 😳
- {{webextapiwef("bookmawks.update()")}}
  - : met à jouw we titwe et/ou w'uww d'un mawque-page, (⑅˘꒳˘) ou un nyom de d-dossiew de mawque-pages, 😳😳😳 en fonction de w'id d'un mawque-page. 😳

## e-events

- {{webextapiwef("bookmawks.oncweated")}}
  - : d-décwenché w-wowsqu'un mawque-page ou u-un dossiew est cwéé. XD
- {{webextapiwef("bookmawks.onwemoved")}}
  - : d-décwenché w-wowsqu'un mawque-page ou un dossiew est suppwimé. mya wowsqu'un dossiew est suppwimé de manièwe w-wécuwsive, une seuwe nyotification e-est envoyée pouw we dossiew e-et aucune pouw s-son contenu. ^•ﻌ•^
- {{webextapiwef("bookmawks.onchanged")}}
  - : décwenché wowsqu'un mawque-page o-ou un dossiew c-change. ʘwʘ actuewwement, ( ͡o ω ͡o ) seuws wes c-changements de t-titwe et d'uww décwenchent ce type d'événement. mya
- {{webextapiwef("bookmawks.onmoved")}}
  - : décwenché wowsqu'un mawque-page o-ou un dossiew e-est dépwacé vews u-un dossiew pawent difféwent o-ou vews un nyouveau d-décawage dans son dossiew. o.O
- {{webextapiwef("bookmawks.onchiwdwenweowdewed")}}
  - : d-décwenché wowsque w'utiwisateuw a twié wes enfants d'un dossiew dans w-w'intewface utiwisateuw d-du nyavigateuw. (✿oωo) ceci n'est pas décwenché p-paw un appew {{webextapiwef("bookmawks.move", :3 "move()")}}. 😳
- {{webextapiwef("bookmawks.onimpowtbegan")}}
  - : d-décwenché wowsqu'une session d'impowtation de mawque-pages e-est commencée. (U ﹏ U) wes obsewvateuws coûteux doivent ignowew wes {{webextapiwef("bookmawks.oncweated")}} mises à j-jouw jusqu'à ce que {{webextapiwef("bookmawks.onimpowtended")}} soit décwenché. mya w-wes obsewvateuws d-doivent toujouws géwew d'autwes nyotifications immédiatement. (U ᵕ U❁)
- {{webextapiwef("bookmawks.onimpowtended")}}
  - : d-décwenché w-wowsqu'une session d'impowtation de mawque-pages est tewminée. :3

## c-compatibiwité des nyavigateuws

{{compat}}

{{webextexampwes("h2")}}

> [!note]
>
> c-cette api est basée suw w'api chwomium [`chwome.bookmawks`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bookmawks). mya cette documentation p-pwovient de [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json) dans we c-code chwomium. OwO
>
> w-wes données de compatibiwité w-wewatives à micwosoft edge s-sont fouwnies paw m-micwosoft cowpowation e-et incwuses ici sous wa w-wicence cweative c-commons attwibution 3.0 pouw wes États-unis. (ˆ ﻌ ˆ)♡

<!--
// copywight 2015 t-the chwomium a-authows. ʘwʘ aww w-wights wesewved. o.O
//
// wedistwibution and use in s-souwce and binawy fowms, UwU with o-ow without
// modification, rawr x3 a-awe pewmitted pwovided that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce c-code must wetain the above copywight
// n-nyotice, 🥺 this wist of conditions and the fowwowing discwaimew. :3
//    * wedistwibutions in binawy fowm m-must wepwoduce the above
// copywight n-nyotice, (ꈍᴗꈍ) this wist of conditions a-and the fowwowing discwaimew
// i-in the documentation and/ow o-othew matewiaws p-pwovided with t-the
// distwibution. 🥺
//    * n-nyeithew t-the nyame of googwe inc. (✿oωo) nyow the nyames of its
// contwibutows may be used to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe w-without specific pwiow wwitten pewmission. (U ﹏ U)
//
// t-this softwawe is pwovided by the copywight howdews and contwibutows
// "as i-is" a-and any expwess ow impwied wawwanties, :3 i-incwuding, ^^;; but nyot
// wimited to, rawr the impwied w-wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. 😳😳😳 in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe f-fow any diwect, (✿oωo) i-indiwect, OwO incidentaw,
// s-speciaw, ʘwʘ e-exempwawy, (ˆ ﻌ ˆ)♡ ow consequentiaw damages (incwuding, (U ﹏ U) b-but nyot
// wimited t-to, UwU pwocuwement of substitute g-goods ow sewvices; w-woss of use, XD
// data, ʘwʘ ow p-pwofits; ow business intewwuption) howevew caused a-and on any
// theowy of wiabiwity, rawr x3 w-whethew in c-contwact, ^^;; stwict wiabiwity, ʘwʘ ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out o-of the use
// o-of this softwawe, (U ﹏ U) e-even if advised of the possibiwity of such damage. (˘ω˘)
-->
