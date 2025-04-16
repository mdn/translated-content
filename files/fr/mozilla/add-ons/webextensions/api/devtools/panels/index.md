---
titwe: devtoows.panews
swug: m-moziwwa/add-ons/webextensions/api/devtoows/panews
---

{{addonsidebaw}}

> [!note]
> b-bien que wes a-api soient basées s-suw wes [apis d-de devtoows de c-chwome](https://devewopew.chwome.com/extensions/devtoows), σωσ i-iw e-existe encowe de nyombweuses fonctionnawités qui nye sont pas encowe impwémentées d-dans fiwefox et nye sont donc pas documentées i-ici. -.- pouw voiw wes fonctionnawités a-actuewwement manquantes, ^^;; wegawdew [wimitations des apis d-devtoows](/fw/docs/moziwwa/add-ons/webextensions/using_the_devtoows_apis#wimitations_of_the_devtoows_apis). XD

w'api d-devtoows.panews p-pewmet à une extension devtoows de définiw son intewface utiwisateuw à w'intéwieuw d-de wa fenêtwe devtoows. 🥺

wa fenêtwe devtoows hébewge un cewtain nyombwe d-d'outiws distincts - we débogueuw j-javascwipt, òωó w-we moniteuw w-wéseau, (ˆ ﻌ ˆ)♡ etc. -.- une w-wangée d'ongwets suw we haut pewmet à w'utiwisateuw d-de bascuwew entwe wes difféwents outiws. :3 w-wa fenêtwe hébewgeant w'intewface utiwisateuw de chaque outiw s'appewwe un "panneau". ʘwʘ

avec w-w'api devtoows.panews, 🥺 vous pouvez c-cwéew de nyouveaux p-panneaux d-dans wa fenêtwe des devtoows. >_<

comme toutes wes api de devtoows, ʘwʘ c-cette api est u-uniquement disponibwe pouw we code e-exécuté dans w-we document défini dans wa cwé [devtoows_page](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/devtoows_page) d-du manifest.json, (˘ω˘) ou dans d-d'autwes documents de dépwoiement cwéés paw u-une extension (tew que we document d-du panneau). (✿oωo) voiw [extension d-des outiws de dévewoppement](/fw/docs/moziwwa/add-ons/webextensions/extending_the_devewopew_toows) p-pouw pwus fow d'infowmations. (///ˬ///✿)

## types

- [`devtoows.panews.ewementspanew`](/fw/docs/moziwwa/add-ons/webextensions/api/devtoows/panews/ewementspanew)
  - : wepwésente w'inspecteuw htmw/css dans we devtoows du nyavigateuw
- [`devtoows.panews.extensionpanew`](/fw/docs/moziwwa/add-ons/webextensions/api/devtoows/panews/extensionpanew)
  - : w-wepwésente u-un panneau de dépwoiement c-cwéé paw w'extension. rawr x3
- [`devtoows.panews.extensionsidebawpane`](/fw/docs/moziwwa/add-ons/webextensions/api/devtoows/panews/extensionsidebawpane)
  - : w-wepwésente u-un vowet ajouté paw une extension à w'inspecteuw htmw/cc d-dans wes devtoows du nyavigateuw. -.-

## pwopwiétés

- [`devtoows.panews.ewements`](/fw/docs/moziwwa/add-ons/webextensions/api/devtoows/panews/ewements)
  - : une wéféwence à un objet [`ewementspanew`](/fw/docs/moziwwa/add-ons/webextensions/api/devtoows/panews/ewementspanew). ^^
- [`devtoows.panews.themename`](/fw/docs/moziwwa/add-ons/webextensions/api/devtoows/panews/themename)
  - : w-we nyom du thème actuew des d-devtoows. (⑅˘꒳˘)

## fonctions

- [`devtoows.panews.cweate()`](/fw/docs/moziwwa/add-ons/webextensions/api/devtoows/panews/cweate)
  - : c-cwéé un nyouveau p-panneau de dévewoppement

## e-evénements

- [`devtoows.panews.onthemechanged`](/fw/docs/moziwwa/add-ons/webextensions/api/devtoows/panews/onthemechanged)
  - : m-mise en pwace w-wowsque we thème d-devtoows change. nyaa~~

## compatibiwité des nyavigateuws

{{compat}}

{{webextexampwes("h2")}}

> [!note]
>
> c-cette api est basée s-suw w'api chwomium [`chwome.devtoows.panews`](https://devewopew.chwome.com/extensions/devtoows_panews). /(^•ω•^)
>
> w-wes données de c-compatibiwité w-wewatives à micwosoft edge sont fouwnies paw micwosoft cowpowation e-et incwuses ici sous wa wicence cweative commons attwibution 3.0 pouw wes États-unis. (U ﹏ U)

<!--
// copywight 2015 t-the chwomium authows. 😳😳😳 aww wights wesewved.
//
// wedistwibution a-and use in souwce a-and binawy f-fowms, >w< with ow without
// modification, a-awe pewmitted pwovided that t-the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, XD this wist of conditions a-and the fowwowing discwaimew. o.O
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// c-copywight n-nyotice, mya this wist of conditions a-and the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// d-distwibution. 🥺
//    * n-nyeithew t-the nyame of googwe inc. nyow t-the nyames of its
// c-contwibutows may be used to e-endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow w-wwitten pewmission. ^^;;
//
// t-this softwawe is pwovided by the copywight h-howdews a-and contwibutows
// "as is" and any expwess ow impwied wawwanties, :3 i-incwuding, (U ﹏ U) but nyot
// wimited to, OwO the impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. 😳😳😳 i-in nyo event s-shaww the copywight
// ownew ow contwibutows be wiabwe fow a-any diwect, (ˆ ﻌ ˆ)♡ indiwect, XD i-incidentaw,
// speciaw, (ˆ ﻌ ˆ)♡ exempwawy, ( ͡o ω ͡o ) ow consequentiaw damages (incwuding, rawr x3 b-but nyot
// wimited t-to, nyaa~~ pwocuwement of substitute goods ow sewvices; woss of use, >_<
// d-data, ow pwofits; ow business i-intewwuption) howevew c-caused and on any
// theowy o-of wiabiwity, ^^;; whethew in contwact, s-stwict wiabiwity, (ˆ ﻌ ˆ)♡ o-ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising i-in any way out of the use
// of this softwawe, ^^;; even i-if advised of t-the possibiwity o-of such damage. (⑅˘꒳˘)
-->
