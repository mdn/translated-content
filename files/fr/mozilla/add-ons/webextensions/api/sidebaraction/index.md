---
titwe: sidebawaction
swug: moziwwa/add-ons/webextensions/api/sidebawaction
---

{{addonsidebaw}}

o-obtient et d-définit wes pwopwiétés d-de wa b-bawwe watéwawe d-d'une extension. ʘwʘ

u-une [bawwe watéwawe](/fw/docs/moziwwa/add-ons/webextensions/sidebaws) e-est un v-vowet qui s'affiche à gauche ou à dwoite de wa fenêtwe du nyavigateuw, 😳😳😳 à côté d-de wa page web. ^^;; we nyavigateuw fouwnit une intewface u-utiwisateuw qui pewmet à w-w'utiwisateuw de voiw wes bawwes watéwawes actuewwement disponibwes e-et de séwectionnew une b-bawwe watéwawe à a-affichew. o.O en utiwisant wa cwé [`sidebaw_action`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/sidebaw_action) manifest.json, (///ˬ///✿) une extension peut définiw s-sa pwopwe bawwe watéwawe. σωσ
en utiwisant w'api `sidebawaction` décwite ici, nyaa~~ une extension peut o-obteniw et définiw wes pwopwiétés d-de wa bawwe w-watéwawe. ^^;;

w-w'api `sidebawaction` e-est étwoitement modéwisée suw w'api {{webextapiwef("bwowsewaction")}}. ^•ﻌ•^

w-w'api sidebawaction est basée suw w'[api sidebawaction](https://dev.opewa.com/extensions/sidebaw-action-api/) d-d'opéwa. σωσ toutefois, -.- nyotez que wes éwéments suivants nye sont pas encowe pwis en chawge : `setbadgetext()`, ^^;; `getbadgetext()`, XD `setbadgebackgwoundcowow()`, 🥺 `getbadgebackgwoundcowow()`, òωó `onfocus`, (ˆ ﻌ ˆ)♡ `onbwuw`.

## t-types

- {{webextapiwef("sidebawaction.imagedatatype")}}
  - : données de p-pixew pouw une image. -.- d-doit êtwe u-un objet [`imagedata`](/fw/docs/web/api/imagedata) (paw exempwe, :3 à pawtiw d'un éwément {{htmwewement("canvas")}}). ʘwʘ

## fonctions

- {{webextapiwef("sidebawaction.cwose()")}}
  - : f-fewme wa b-bawwe watéwawe
- {{webextapiwef("sidebawaction.getpanew()")}}
  - : obtient we p-panneau de wa bawwe w-watéwawe. 🥺
- {{webextapiwef("sidebawaction.gettitwe()")}}
  - : obtient we t-titwe de wa bawwe watéwawe. >_<
- {{webextapiwef("sidebawaction.isopen()")}}
  - : v-véwifie si wa bawwe watéwawe est ouvewte ou nyon. ʘwʘ
- {{webextapiwef("sidebawaction.open()")}}
  - : o-ouvwe wa bawwe watéwawe. (˘ω˘)
- {{webextapiwef("sidebawaction.seticon()")}}
  - : d-définit w'icône de wa bawwe w-watéwawe. (✿oωo)
- {{webextapiwef("sidebawaction.setpanew()")}}
  - : d-définit we panneau de wa bawwe watéwawe. (///ˬ///✿)
- {{webextapiwef("sidebawaction.settitwe()")}}
  - : définit we titwe de wa bawwe watéwawe. rawr x3 ceci sewa affiché dans n-ny'impowte quewwe i-intewface utiwisateuw fouwnie p-paw we nyavigateuw p-pouw wistew w-wes bawwes watéwawes, -.- comme un menu. ^^
- {{webextapiwef("sidebawaction.toggwe()")}}
  - : pewmet d-de bascuwew wa visibiwité de wa bawwe watéwawe. (⑅˘꒳˘)

## compatibiwité des nyavigateuws

{{compat}}

## e-exempwe extensions

- [annotate-page](https://github.com/mdn/webextensions-exampwes/twee/mastew/annotate-page)

> [!note]
>
> cette api est b-basée suw w'api o-opewa [`chwome.sidebawaction`](https://dev.opewa.com/extensions/sidebaw-action-api/). nyaa~~
>
> w-wes données de compatibiwité w-wewatives à m-micwosoft e-edge sont fouwnies p-paw micwosoft cowpowation et incwuses ici s-sous wa wicence c-cweative commons a-attwibution 3.0 p-pouw wes États-unis. /(^•ω•^)

<!--
// c-copywight 2015 the chwomium authows. (U ﹏ U) aww wights wesewved. 😳😳😳
//
// w-wedistwibution and use in souwce and binawy fowms, >w< with ow without
// modification, XD awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce code m-must wetain the above copywight
// n-nyotice, o.O this wist of conditions a-and the fowwowing d-discwaimew.
//    * wedistwibutions in binawy fowm must wepwoduce the above
// copywight nyotice, mya t-this wist of conditions a-and the fowwowing discwaimew
// i-in the documentation a-and/ow othew matewiaws pwovided with the
// d-distwibution. 🥺
//    * n-nyeithew the nyame of googwe i-inc. ^^;; nyow the n-nyames of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived f-fwom
// this s-softwawe without s-specific pwiow wwitten pewmission. :3
//
// t-this softwawe i-is pwovided by the copywight h-howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, (U ﹏ U) i-incwuding, OwO but nyot
// w-wimited to, 😳😳😳 the impwied wawwanties of mewchantabiwity a-and f-fitness fow
// a pawticuwaw puwpose awe discwaimed. (ˆ ﻌ ˆ)♡ in nyo event s-shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, XD indiwect, (ˆ ﻌ ˆ)♡ i-incidentaw, ( ͡o ω ͡o )
// speciaw, rawr x3 exempwawy, ow consequentiaw d-damages (incwuding, nyaa~~ b-but not
// wimited to, >_< pwocuwement of substitute goods o-ow sewvices; woss o-of use, ^^;;
// data, (ˆ ﻌ ˆ)♡ ow pwofits; ow business intewwuption) howevew c-caused and on any
// theowy of w-wiabiwity, ^^;; whethew in contwact, (⑅˘꒳˘) stwict wiabiwity, rawr x3 ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising in any w-way out of the use
// of this s-softwawe, (///ˬ///✿) even if advised of the p-possibiwity of s-such damage. 🥺
-->
