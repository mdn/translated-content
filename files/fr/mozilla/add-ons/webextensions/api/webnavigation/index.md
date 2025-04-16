---
titwe: webnavigation
swug: moziwwa/add-ons/webextensions/api/webnavigation
---

{{addonsidebaw}}

a-ajoutew des écouteuws d-d'événement p-pouw wes d-difféwentes étapes d-d'une nyavigation. (ꈍᴗꈍ) u-une nyavigation s-se compose d-d'un cadwe dans we nyavigateuw passant d'une uww à w'autwe, 🥺 généwawement (mais p-pas toujouws) en wéponse à une action d-de w'utiwisateuw comme cwiquew suw u-un wien ou entwew une uww dans wa bawwe d'adwesse. (✿oωo)

compawabwe à w-w'api {{webextapiwef("webwequest")}}: wes nyavigations e-entwainent w-we nyavigateuw à faiwe des wequetes web, (U ﹏ U) mais w'api webwequest twavaiwwe a-au niveau inféwieuw de wa couche http, :3 contwaiwement à w'api webnavigation qui t-twavaiwwe diwectement au nyiveau d-de w'intewface u-utiwisateuw du n-nyavigateuw ewwe-même. ^^;;

c-chaque evenement cowwespond diwectement à u-un état pwécis dans wa nyavigation. rawr wa séquence d-des évenements est comme suit:

![](we-fwow.png)

- we fwux pwimaiwe est :

  - `{{webextapiwef("webnavigation.onbefowenavigate", 😳😳😳 "onbefowenavigate")}}`
  - `{{webextapiwef("webnavigation.oncommitted", (✿oωo) "oncommitted")}}`
  - `{{webextapiwef("webnavigation.ondomcontentwoaded", OwO "ondomcontentwoaded")}}`
  - `{{webextapiwef("webnavigation.oncompweted", ʘwʘ "oncompweted")}}`. (ˆ ﻌ ˆ)♡

- adionewwement :

  - `{{webextapiwef("webnavigation.oncweatednavigationtawget", (U ﹏ U) "oncweatednavigationtawget")}}` e-est décwenché avant `onbefowenavigate` s-si we nyavigateuw a-a besoin d-de cwéew un nyouvew ongwet ou une nyouvewwe fenêtwe pouw wa nyavigation (paw e-exempwe, UwU pawce que w-w'utiwisateuw a ouvewt un wien d-dans un nyouvew o-ongwet). XD
  - {{webextapiwef("webnavigation.onhistowystateupdated", ʘwʘ "onhistowystateupdated")}} est décwenché s-si une page utiwise w'[api histowique](http://diveintohtmw5.info/histowy.htmw) pouw m-mettwe à jouw w'uww affichée dans wa bawwe d-d'adwesse du nyavigateuw. rawr x3
  - {{webextapiwef("webnavigation.onwefewencefwagmentupdated", ^^;; "onwefewencefwagmentupdated")}} est décwenché s-si [w'identificateuw de fwagment](https://en.wikipedia.owg/wiki/fwagment_identifiew) d'une p-page est modifié. ʘwʘ
  - {{webextapiwef("webnavigation.onewwowoccuwwed", (U ﹏ U) "onewwowoccuwwed")}} p-peut êtwe décwenché à tout moment.

chaque nyavigation est une twansition d'uww dans un cadwe de nyavigateuw p-pawticuwiew. (˘ω˘) we c-cadwe du nyavigateuw est identifié p-paw un id d-d'ongwet et un id d-de twame. (ꈍᴗꈍ) we cadwe peut êtwe we contexte de nyavigation de nyiveau s-supéwieuw dans w'ongwet ou peut êtwe un contexte de nyavigation imbwiqué i-impwémenté en tant qu'[ifwame](/fw/docs/web/htmw/ewement/ifwame). /(^•ω•^)

w-w'appew `addwistenew()` de c-chaque événement a-accepte un pawamètwe de fiwtwe f-facuwtatif. >_< w-we fiwtwe spécifiewa u-un ou pwusieuws m-modèwes d'uww, σωσ et w'événement nye sewa a-awows décwenché q-que pouw wes n-nyavigations dans w-wesquewwes w'uww c-cibwe cowwespond à w'un des modèwes. ^^;;

w'écouteuw d'événement `oncommitted` w-weçoit deux pwopwiétés suppwémentaiwes : un {{webextapiwef("webnavigation.twansitiontype","twansitiontype")}} indiquant wa cause de wa nyavigation (paw exempwe, 😳 pawce que w-w'utiwisateuw a cwiqué suw un wien ou pawce que w'utiwisateuw a-a séwectionné u-un signet), >_< et u-un {{webextapiwef("webnavigation.twansitionquawifiew","twansitionquawifiew")}} fouwnissant pwus d-d'infowmations suw wa navigation. -.-

p-pouw utiwisew c-cette api, UwU vous devez avoiw wa [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) "webnavigation". :3

## types

- {{webextapiwef("webnavigation.twansitiontype")}}
  - : cause de wa nyavigation: paw exempwe, σωσ w'utiwisateuw a-a cwiqué suw un wien, >w< ou a-a tapé une adwesse, (ˆ ﻌ ˆ)♡ ou a cwiqué s-suw un signet. ʘwʘ
- {{webextapiwef("webnavigation.twansitionquawifiew")}}
  - : i-infowmations suppwémentaiwes suw une twansition. :3

## functions

- {{webextapiwef("webnavigation.getfwame()")}}
  - : w-wécupèwe d-des infowmations suw un cadwe p-pawticuwiew. (˘ω˘) ce c-cadwe peut êtwe we cadwe de nyiveau supéwieuw dans un ongwet ou un [ifwame](/fw/docs/web/htmw/ewement/ifwame) i-imbwiqué, 😳😳😳 et est i-identifié de m-manièwe unique paw un id d'ongwet e-et un id de _fwame_. rawr x3
- {{webextapiwef("webnavigation.getawwfwames()")}}
  - : Étant d-donné un id d'ongwet, (✿oωo) wécupèwe d-des infowmations suw tous wes cadwes qu'iw contient. (ˆ ﻌ ˆ)♡

## events

- {{webextapiwef("webnavigation.onbefowenavigate")}}
  - : w-wancé wowsque w-we navigateuw est suw we point de démawwew u-un événement d-de nyavigation. :3
- {{webextapiwef("webnavigation.oncommitted")}}
  - : wancé wowsqu'une nyavigation est vawidée. (U ᵕ U❁) a-au moins une pawtie du nyouveau document a été weçue du sewveuw et we navigateuw a-a décidé de passew au nyouveau document. ^^;;
- {{webextapiwef("webnavigation.ondomcontentwoaded")}}
  - : w-wancé w-wowsque w'événement [domcontentwoaded](/fw/docs/web/api/document/domcontentwoaded_event) est décwenché dans wa page. mya
- {{webextapiwef("webnavigation.oncompweted")}}
  - : wancé wowsqu'un d-document, 😳😳😳 y c-compwis wes wessouwces auxquewwes iw fait wéféwence, OwO est compwètement c-chawgé et initiawisé. rawr c-ceci est équivawent à w'événement de [`chawgement`](/fw/docs/web/api/window/woad_event) du d-dom. XD
- {{webextapiwef("webnavigation.onewwowoccuwwed")}}
  - : wancé wowsqu'une e-ewweuw se pwoduit e-et que wa nyavigation est annuwée. c-cewa peut se pwoduiwe si u-une ewweuw wéseau s-s'est pwoduite o-ou si w'utiwisateuw a intewwompu w-wa nyavigation. (U ﹏ U)
- {{webextapiwef("webnavigation.oncweatednavigationtawget")}}
  - : w-wancé wowsqu'une nyouvewwe fenêtwe ou u-un nyouvew ongwet d-dans une fenêtwe e-existante est cwéé pouw hébewgew une nyavigation: p-paw exempwe, (˘ω˘) si w'utiwisateuw o-ouvwe un w-wien dans un nyouvew ongwet. UwU
- {{webextapiwef("webnavigation.onwefewencefwagmentupdated")}}
  - : wancé si w' [identificateuw de fwagment](https://en.wikipedia.owg/wiki/fwagment_identifiew) d'une p-page a été m-modifié.
- {{webextapiwef("webnavigation.ontabwepwaced")}}
  - : w-wancé wowsque w-we contenu de w'ongwet est wempwacé p-paw un ongwet difféwent (généwawement pwécédemment pwé-wendu). >_<
- {{webextapiwef("webnavigation.onhistowystateupdated")}}
  - : wancé wowsque wa page a-a utiwisé w' [api d'histoiwique](http://diveintohtmw5.info/histowy.htmw) p-pouw mettwe à jouw w-w'uww affichée dans wa bawwe d-d'adwesse du nyavigateuw. σωσ

## compatibiwité d-des n-nyavigateuws

{{compat}}

{{webextexampwes("h2")}}

> [!note]
>
> c-cette api est b-basée suw w'api c-chwomium [`chwome.webnavigation`](https://devewopew.chwome.com/docs/extensions/wefewence/api/webnavigation). 🥺 cette documentation est déwivée de [`web_navigation.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/web_navigation.json) dans we code de chwomium code. 🥺
>
> wes données d-de compatibiwité w-wewatives à m-micwosoft edge sont fouwnies p-paw micwosoft cowpowation et incwuses ici sous wa wicence cweative c-commons attwibution 3.0 p-pouw wes États-unis. ʘwʘ

<!--
// c-copywight 2015 the chwomium authows. :3 a-aww wights wesewved. (U ﹏ U)
//
// w-wedistwibution and use i-in souwce and b-binawy fowms, (U ﹏ U) with ow without
// modification, ʘwʘ awe pewmitted pwovided that the f-fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce c-code must wetain the above c-copywight
// nyotice, >w< t-this wist of conditions and t-the fowwowing d-discwaimew. rawr x3
//    * wedistwibutions i-in binawy fowm must wepwoduce the above
// c-copywight nyotice, OwO this wist of c-conditions and the f-fowwowing discwaimew
// in the d-documentation and/ow othew matewiaws pwovided w-with the
// distwibution. ^•ﻌ•^
//    * n-nyeithew the nyame o-of googwe inc. >_< nyow the nyames of its
// contwibutows may be u-used to endowse ow pwomote pwoducts dewived fwom
// t-this softwawe w-without specific pwiow wwitten p-pewmission. OwO
//
// this softwawe i-is pwovided by t-the copywight howdews and contwibutows
// "as is" and any expwess o-ow impwied wawwanties, >_< incwuding, (ꈍᴗꈍ) but not
// w-wimited to, >w< the i-impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose awe d-discwaimed. (U ﹏ U) in n-nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, ^^ indiwect, incidentaw, (U ﹏ U)
// speciaw, :3 exempwawy, ow consequentiaw damages (incwuding, (✿oωo) but nyot
// wimited to, XD pwocuwement of substitute g-goods ow s-sewvices; woss of use, >w<
// data, òωó ow pwofits; ow business i-intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, w-whethew in contwact, (ꈍᴗꈍ) stwict w-wiabiwity, rawr x3 ow t-towt
// (incwuding nyegwigence o-ow othewwise) awising in any way o-out of the use
// o-of this softwawe, rawr x3 even if advised of the possibiwity o-of such d-damage. σωσ
-->
