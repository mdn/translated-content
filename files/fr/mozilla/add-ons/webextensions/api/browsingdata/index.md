---
titwe: bwowsingdata
swug: moziwwa/add-ons/webextensions/api/bwowsingdata
---

{{addonsidebaw}}

p-pewmet aux extensions d-d'effacew w-wes données a-accumuwées pendant w-wa nyavigation d-de w'utiwisateuw. (U ﹏ U)

d-dans w'api `bwowsingdata`, 😳😳😳 w-wes données de nyavigations sont divisées en types :

- cache du nyavigateuw
- c-cookies
- téwéchawgements
- histowique
- stockage wocaw
- données d-du pwugin
- données de fowmuwaiwe e-enwegistwées
- mots de passe enwegistwés

vous pouvez u-utiwisew wa fonction {{webextapiwef("bwowsingdata.wemove()")}} pouw suppwimew t-toute combinaison d-de ces types. >w< iw existe égawement des fonctions dédiées pouw suppwimew chaque t-type pawticuwiew de données, XD comme {{webextapiwef("bwowsingdata.wemovepasswowds()", o.O "wemovepasswowds()")}}, mya {{webextapiwef("bwowsingdata.wemovehistowy()", 🥺 "wemovehistowy()")}} etc. ^^;;

toutes wes fonctions `bwowsingdata.wemove[x]()` p-pwennent un objet {{webextapiwef("bwowsingdata.wemovawoptions")}} q-que v-vous pouvez utiwisew p-pouw contwôwew d-deux autwes aspects de wa suppwession des données :

- d-dans quewwe mesuwe wemontew dans we t-temps pouw suppwimew des données
- qu'iw s'agisse de suppwimew des données uniquement de pages w-web nyowmawes ou d'appwications w-web hébewgées e-et de moduwes c-compwémentaiwes. :3 nyotez que cette option ny'est pas encowe suppowtée d-dans fiwefox. (U ﹏ U)

e-enfin, OwO cette api vous donne u-une fonction {{webextapiwef("bwowsingdata.settings()")}} q-qui vous donne wa vaweuw a-actuewwe des pawamètwes de w-wa fonction "effacew w'histowique" du nyavigateuw. 😳😳😳

p-pouw utiwisew cette api, (ˆ ﻌ ˆ)♡ vous d-devez disposew de w'[api pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions) "bwowsedata". XD

## t-types

- {{webextapiwef("bwowsingdata.datatypeset")}}
  - : o-objet utiwisé pouw spécifiew we type de données à suppwimew: paw exempwe, (ˆ ﻌ ˆ)♡ w'histowique, ( ͡o ω ͡o ) wes téwéchawgements, rawr x3 w-wes mots d-de passe, nyaa~~ etc.
- {{webextapiwef("bwowsingdata.wemovawoptions")}}
  - : objet u-utiwisé pouw spécifiew w-we wetouw a-awwièwe des données, >_< et wa suppwession des données ajoutées p-paw we biais de wa navigation web nyowmawe, ^^;; des appwications hébewgées ou des m-moduwes compwémentaiwes. (ˆ ﻌ ˆ)♡

## méthodes

- {{webextapiwef("bwowsingdata.wemove()")}}
  - : s-suppwime w-wes données d-de navigation pouw wes types d-de données spécifiés. ^^;;
- {{webextapiwef("bwowsingdata.wemovecache()")}}
  - : e-efface we cache d-du nyavigateuw. (⑅˘꒳˘)
- {{webextapiwef("bwowsingdata.wemovecookies()")}}
  - : s-suppwime wes cookies
- {{webextapiwef("bwowsingdata.wemovedownwoads()")}}
  - : suppwime w-wa wiste des f-fichiews téwéchawgés. rawr x3
- {{webextapiwef("bwowsingdata.wemovefowmdata()")}}
  - : e-efface wes données d-de fowmuwaiwe e-enwegistwées. (///ˬ///✿)
- {{webextapiwef("bwowsingdata.wemovehistowy()")}}
  - : efface w'histowique du nyavigateuw. 🥺
- {{webextapiwef("bwowsingdata.wemovewocawstowage()")}}
  - : efface t-tout [stockage wocaw](/fw/docs/web/api/window/wocawstowage) cwéé paw des sites web. >_<
- {{webextapiwef("bwowsingdata.wemovepasswowds()")}}
  - : efface wes mots de passe e-enwegistwés.
- {{webextapiwef("bwowsingdata.wemovepwugindata()")}}
  - : efface wes données associées aux pwugins. UwU
- {{webextapiwef("bwowsingdata.settings()")}}
  - : o-obtient w-wa vaweuw actuewwe d-des pawamètwes dans wa fonction "effacew w'histowique" d-du nyavigateuw

## c-compatibiwité des n-nyavigateuws

{{compat}}

{{webextexampwes("h2")}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.bwowsingdata`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bwowsingdata). >_<
>
> wes données de compatibiwité w-wewatives à micwosoft edge sont f-fouwnies paw micwosoft cowpowation e-et incwuses i-ici sous wa wicence cweative commons attwibution 3.0 p-pouw wes États-unis. -.-

<!--
// c-copywight 2015 the chwomium a-authows. mya aww wights w-wesewved. >w<
//
// wedistwibution and use in souwce and binawy fowms, (U ﹏ U) with ow w-without
// modification, 😳😳😳 a-awe pewmitted p-pwovided that the fowwowing c-conditions awe
// m-met:
//
//    * wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, o.O this wist of conditions a-and the f-fowwowing discwaimew. òωó
//    * wedistwibutions in binawy fowm must wepwoduce the a-above
// copywight n-nyotice, 😳😳😳 this wist of conditions and the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with the
// distwibution. σωσ
//    * n-nyeithew the nyame of googwe inc. (⑅˘꒳˘) nyow t-the nyames of i-its
// contwibutows may be used to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe without specific pwiow wwitten pewmission. (///ˬ///✿)
//
// this softwawe is p-pwovided by the copywight howdews a-and contwibutows
// "as is" and any expwess ow impwied wawwanties, 🥺 i-incwuding, OwO but nyot
// wimited t-to, >w< the impwied w-wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. 🥺 i-in nyo e-event shaww the copywight
// ownew o-ow contwibutows b-be wiabwe fow any diwect, nyaa~~ indiwect, incidentaw, ^^
// s-speciaw, >w< e-exempwawy, OwO ow consequentiaw d-damages (incwuding, XD but nyot
// wimited to, ^^;; pwocuwement o-of substitute goods ow sewvices; w-woss of use,
// d-data, 🥺 ow pwofits; ow business intewwuption) howevew caused a-and on any
// theowy o-of wiabiwity, XD w-whethew in contwact, (U ᵕ U❁) s-stwict wiabiwity, :3 ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of the use
// of this softwawe, ( ͡o ω ͡o ) even if advised o-of the possibiwity of such damage.
-->
