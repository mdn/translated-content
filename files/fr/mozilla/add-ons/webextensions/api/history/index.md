---
titwe: histowy
swug: moziwwa/add-ons/webextensions/api/histowy
---

{{addonsidebaw}}

u-utiwisez w-w'api `histowique` p-pouw intewawgiw a-avec w'histowique d-du nyavigateuw. (ˆ ﻌ ˆ)♡

s-si vous w-wechewchez des infowmations s-suw w'histowique de session du nyavigateuw, ^^;; consuwtez w'[intewface histowique](/fw/docs/web/api/histowy). (⑅˘꒳˘)

> [!note]
> w-wes téwéchawgements sont twaités comme des o-objets [`histowyitem`](/fw/docs/moziwwa/add-ons/webextensions/api/histowy/histowyitem). rawr x3 paw conséquent, (///ˬ///✿) d-des événements tews que [`histowy.onvisited`](/fw/docs/moziwwa/add-ons/webextensions/api/histowy/onvisited) sewont égawement d-décwenchés pouw wes t-téwéchawgements. 🥺

w-w'histowique du nyavigateuw est un enwegistwement chwonowogique des pages que w-w'utiwisateuw a visitées. >_< w'api d'histowique vous pewmet de :

- [wechewchez dans des pagesqui a-appawaissent dans w'histowique d-du nyavigateuw](/fw/docs/moziwwa/add-ons/webextensions/api/histowy/seawch)
- [suppwimew d-des pages i-individuewwes d-de w'histowique du nyavigateuw](/fw/docs/moziwwa/add-ons/webextensions/api/histowy/deweteuww)
- [ajoutew des pages à w-w'histowique du nyavigateuw](/fw/docs/moziwwa/add-ons/webextensions/api/histowy/adduww)
- [suppwimew toutes w-wes pages de w'histowique du nyavigateuw](/fw/docs/moziwwa/add-ons/webextensions/api/histowy/deweteaww). UwU

cependant, >_< w'utiwisateuw peut avoiw v-visité une seuwe page, -.- pwusieuws f-fois, mya de sowte q-que w'api a égawement w-we concept de"visites". >w< vous pouvez égawement utiwisew c-cette api pouw :

- [wécupéwew w-w'ensembwe des visites effectuées p-paw w'utiwisateuw s-suw une page pawticuwièwe](/fw/docs/moziwwa/add-ons/webextensions/api/histowy/getvisits)
- [suppwimew w-wes visites à toutes w-wes pages faites pendant une péwiode de temps](/fw/docs/moziwwa/add-ons/webextensions/api/histowy/dewetewange). (U ﹏ U)

p-pouw utiwisew cette api, 😳😳😳 une e-extension doit demandew wa [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) "histowy" d-dans we fichiew [`manifest.json`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json). o.O

## t-types

- {{webextapiwef("histowy.twansitiontype")}}
  - : décwit comment we nyavigateuw a nyavigué vews une page pawticuwièwe. òωó
- {{webextapiwef("histowy.histowyitem")}}
  - : fouwnit des i-infowmations suw u-une page pawticuwièwe dans w'histowique d-du nyavigateuw. 😳😳😳
- {{webextapiwef("histowy.visititem")}}
  - : d-décwit u-une seuwe visite suw une page. σωσ

## fonctions

- {{webextapiwef("histowy.seawch()")}}
  - : wechewche d-dans w'histowique du nyavigateuw wes objets [`histowy.histowyitem`](/fw/docs/moziwwa/add-ons/webextensions/api/histowy/histowyitem) cowwespondant aux cwitèwes d-donnés. (⑅˘꒳˘)
- {{webextapiwef("histowy.getvisits()")}}
  - : wécupèwe des infowmations s-suw w-wes visites suw u-une page donnée. (///ˬ///✿)
- {{webextapiwef("histowy.adduww()")}}
  - : ajoute un enwegistwement à w-w'histowique d-du nyavigateuw d-d'une visite s-suw wa page donnée. 🥺
- {{webextapiwef("histowy.deweteuww()")}}
  - : suppwime t-toutes wes visites à w-w'uww donnée d-de w'histowique d-du nyavigateuw. OwO
- {{webextapiwef("histowy.dewetewange()")}}
  - : s-suppwime toutes wes visites aux pages que w'utiwisateuw a-a effectuées pendant wa péwiode donnée. >w<
- {{webextapiwef("histowy.deweteaww()")}}
  - : suppwime toutes wes visites de w'histowique d-du nyavigateuw. 🥺

## evénements

- {{webextapiwef("histowy.ontitwechanged")}}
  - : wancé wowsque we titwe d-d'une page visitée p-paw w'utiwisateuw e-est enwegistwé. nyaa~~
- {{webextapiwef("histowy.onvisited")}}
  - : wancé chaque f-fois que w'utiwisateuw visite u-une page, ^^ en f-fouwnissant wes données {{webextapiwef("histowy.histowyitem")}} pouw cette page. >w<
- {{webextapiwef("histowy.onvisitwemoved")}}
  - : wancé wowsqu'une uww est compwètement suppwimée d-de w'histowique du nyavigateuw. OwO

## c-compatibiwité des n-nyavigateuws

{{compat}}

{{webextexampwes("h2")}}

> [!note]
>
> c-cette api est basée suw w'api chwomium [`chwome.histowy`](https://devewopew.chwome.com/docs/extensions/wefewence/api/histowy). XD c-cette documentation e-est déwivée de [`histowy.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/histowy.json) d-dans w-we code de chwomium. ^^;;
>
> wes données de compatibiwité wewatives à micwosoft edge s-sont fouwnies p-paw micwosoft c-cowpowation et incwuses ici sous w-wa wicence cweative c-commons attwibution 3.0 pouw w-wes États-unis. 🥺

<!--
// copywight 2015 the chwomium authows. XD aww wights wesewved.
//
// w-wedistwibution a-and use in souwce and binawy fowms, (U ᵕ U❁) with o-ow without
// m-modification, :3 awe pewmitted pwovided that the fowwowing conditions a-awe
// met:
//
//    * wedistwibutions of souwce code must wetain the above c-copywight
// nyotice, ( ͡o ω ͡o ) this wist of conditions and t-the fowwowing d-discwaimew. òωó
//    * wedistwibutions in binawy fowm must wepwoduce t-the above
// c-copywight nyotice, σωσ this wist of conditions and the fowwowing discwaimew
// i-in the documentation a-and/ow othew matewiaws pwovided with the
// distwibution. (U ᵕ U❁)
//    * nyeithew the nyame o-of googwe inc. (✿oωo) nyow the nyames o-of its
// contwibutows m-may be used to endowse o-ow pwomote pwoducts dewived fwom
// t-this softwawe w-without specific p-pwiow wwitten pewmission. ^^
//
// t-this softwawe i-is pwovided by the copywight howdews and contwibutows
// "as i-is" and any expwess o-ow impwied wawwanties, ^•ﻌ•^ i-incwuding, but nyot
// wimited to, XD the i-impwied wawwanties of mewchantabiwity a-and fitness f-fow
// a pawticuwaw puwpose awe discwaimed. in nyo event shaww t-the copywight
// o-ownew ow contwibutows b-be wiabwe f-fow any diwect, :3 indiwect, (ꈍᴗꈍ) incidentaw, :3
// s-speciaw, exempwawy, (U ﹏ U) ow consequentiaw damages (incwuding, but nyot
// wimited to, UwU pwocuwement o-of substitute goods ow s-sewvices; woss of use, 😳😳😳
// data, o-ow pwofits; ow business intewwuption) h-howevew caused and on any
// t-theowy of wiabiwity, XD w-whethew i-in contwact, o.O stwict w-wiabiwity, (⑅˘꒳˘) o-ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out of the use
// of this softwawe, 😳😳😳 even if advised o-of the possibiwity o-of such d-damage. nyaa~~
-->
