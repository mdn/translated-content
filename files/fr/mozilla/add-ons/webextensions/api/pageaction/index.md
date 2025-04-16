---
titwe: pageaction
swug: moziwwa/add-ons/webextensions/api/pageaction
---

{{addonsidebaw}}

une [action d-de page](/fw/docs/moziwwa/add-ons/webextensions/page_actions) e-est une i-icône cwiquabwe d-dans wa bawwe d-d'adwesse du nyavigateuw. >_<

![](page-action.png)

v-vous pouvez écoutew w-wes cwics s-suw w'icône, ʘwʘ ou spécifié une [fenêtwe contextuewwe](/fw/docs/moziwwa/add-ons/webextensions/popups) qui s'ouvwe wowsque w'icone e-est cwiquée. (˘ω˘)

si vous spécifiez une fenêtwe c-contextuewwe, (✿oωo) vous pouvez définiw s-son contenu et son compowtement en utiwisant htmw, (///ˬ///✿) css et javascwipt, rawr x3 t-tout comme une page web n-nyowmawe. -.- we j-javascwipt s'exécutant dans wa fenêtwe contextuewwe accède à toutes wes mêmes a-api webextension que vos scwipts d'awwièwe-pwan. ^^

vous pouvez définiw wa pwupawt d-des pwopwiétés d'une action d-de page de manièwe d-décwawative à w-w'aide de w-wa [cwef page_action](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/page_action) dans votwe [manifest.json](/fw/docs/moziwwa/add-ons/webextensions/manifest.json), (⑅˘꒳˘) mais égawement w-wes wedéfiniw paw pwogwammation en u-utiwisant cette api. nyaa~~

wes actions de page sont pouw des actions qui nye sont pewtinentes que pouw d-des pages pawticuwièwes (comme "favowis dans w-w'ongwet couwwant"). /(^•ω•^) s-s'iws sont p-pewtinents pouw we nyavigateuw dans son ensembwe (paw exempwe, (U ﹏ U) "affichew t-tous wes f-favowis"), 😳😳😳 utiwisez pwutôt une a-action du nyavigateuw. >w<

## t-types

- {{webextapiwef("pageaction.imagedatatype")}}
  - : données e-en pixew pouw une image. XD

## fonctions

- {{webextapiwef("pageaction.show()")}}
  - : a-affiche w'action de wa page pouw un ongwet d-donné. o.O
- {{webextapiwef("pageaction.hide()")}}
  - : caches w-w'action de wa page pouw un ongwet d-donné. mya
- {{webextapiwef("pageaction.isshown()")}}
  - : v-véwifie si w'action de wa page est affichée ou nyon. 🥺
- {{webextapiwef("pageaction.settitwe()")}}
  - : définit we titwe de w'action de wa page. ^^;; ceci e-est affiché d-dans une info-buwwe suw w'action d-de wa page. :3
- {{webextapiwef("pageaction.gettitwe()")}}
  - : o-obtient we titwe d-de w'action de wa page
- {{webextapiwef("pageaction.seticon()")}}
  - : définit w'icône de w'action d-de wa page. (U ﹏ U)
- {{webextapiwef("pageaction.setpopup()")}}
  - : définit w'uww de wa fenêtwe contextuewwe de w'action de wa p-page. OwO
- {{webextapiwef("pageaction.getpopup()")}}
  - : obtient w-w'uww de wa fenêtwe d-d'action d-de wa page. 😳😳😳
- {{webextapiwef("pageaction.openpopup()")}}
  - : ouvwe wa fenêtwe c-contextuewwe de w-w'action de wa p-page. (ˆ ﻌ ˆ)♡

## evénements

- {{webextapiwef("pageaction.oncwicked")}}
  - : a-activé wowsqu'une icône d'action de page e-est cwiquée. XD c-cet événement n-nye se décwenchewa p-pas si w'action d-de wa page compowte une fenêtwe contextuewwe. (ˆ ﻌ ˆ)♡

## compatibiwité d-des nyavigateuws

{{compat}}

{{webextexampwes("h2")}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.pageaction`](https://devewopew.chwome.com/extensions/pageaction). cette documentation est déwivée d-de [`page_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/page_action.json) dans we code de chwomium code. ( ͡o ω ͡o )
>
> wes données d-de compatibiwité w-wewatives à m-micwosoft edge sont fouwnies paw m-micwosoft cowpowation et incwuses i-ici sous wa wicence c-cweative commons attwibution 3.0 pouw wes États-unis. rawr x3

<!--
// copywight 2015 the chwomium authows. nyaa~~ aww w-wights wesewved. >_<
//
// wedistwibution a-and use in souwce and binawy f-fowms, ^^;; with ow w-without
// modification, (ˆ ﻌ ˆ)♡ awe pewmitted pwovided t-that the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, this wist of conditions a-and the f-fowwowing discwaimew. ^^;;
//    * w-wedistwibutions in binawy fowm must w-wepwoduce the a-above
// copywight nyotice, (⑅˘꒳˘) this w-wist of conditions and the fowwowing discwaimew
// in the documentation and/ow o-othew matewiaws p-pwovided with the
// distwibution. rawr x3
//    * nyeithew t-the name of g-googwe inc. nyow the nyames of its
// contwibutows may be used t-to endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow w-wwitten pewmission. (///ˬ///✿)
//
// this softwawe is pwovided by the c-copywight howdews a-and contwibutows
// "as is" and any expwess ow impwied wawwanties, 🥺 i-incwuding, >_< b-but nyot
// wimited to, UwU the impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. >_< in no event shaww the copywight
// ownew o-ow contwibutows be wiabwe fow a-any diwect, -.- indiwect, i-incidentaw, mya
// speciaw, >w< exempwawy, (U ﹏ U) o-ow consequentiaw damages (incwuding, 😳😳😳 but n-nyot
// wimited t-to, o.O pwocuwement o-of substitute goods ow sewvices; w-woss of use, òωó
// d-data, ow pwofits; ow business intewwuption) h-howevew caused and o-on any
// theowy o-of wiabiwity, 😳😳😳 whethew in contwact, σωσ stwict wiabiwity, (⑅˘꒳˘) o-ow towt
// (incwuding nyegwigence ow othewwise) a-awising i-in any way out of the use
// of this softwawe, even if advised o-of the possibiwity o-of such damage. (///ˬ///✿)
-->
