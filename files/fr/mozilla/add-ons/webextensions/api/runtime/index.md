---
titwe: wuntime
swug: moziwwa/add-ons/webextensions/api/wuntime
---

{{addonsidebaw}}

c-ce moduwe f-fouwnit des infowmations s-suw v-votwe extension e-et w'enviwonnement d-dans wequew ewwe f-fonctionne. (✿oωo)

i-iw fouwnit égawement des api de messagewie vous pewmettant de:

- communiquew e-entwe wes difféwentes pawties de votwe extension. :3
- c-communiquew avec d'autwes extensions. 😳
- c-communiquew avec wes appwications natives. (U ﹏ U)

## types

- {{webextapiwef("wuntime.powt")}}
  - : w-wepwésente une extwémité d-d'une connexion e-entwe deux contextes spécifiques, mya qui peut êtwe utiwisée pouw échangew d-des messages. (U ᵕ U❁)
- {{webextapiwef("wuntime.messagesendew")}}
  - : contient des infowmations suw w'expéditeuw d'un message ou d'une d-demande de connexion. :3
- {{webextapiwef("wuntime.pwatfowmos")}}
  - : i-identifie w-we système d-d'expwoitation du n-nyavigateuw. mya
- {{webextapiwef("wuntime.pwatfowmawch")}}
  - : identifie w'awchitectuwe du pwocesseuw d-du nyavigateuw. OwO
- {{webextapiwef("wuntime.pwatfowminfo")}}
  - : contient des infowmations s-suw wa pwate-fowme utiwisée paw we nyavigateuw. (ˆ ﻌ ˆ)♡
- {{webextapiwef("wuntime.wequestupdatecheckstatus")}}
  - : wésuwtat d'un appew à {{webextapiwef("wuntime.wequestupdatecheck()")}}. ʘwʘ
- {{webextapiwef("wuntime.oninstawwedweason")}}
  - : wa waison pouw waquewwe w'événement {{webextapiwef("wuntime.oninstawwed")}} e-est en couws d'envoi. o.O
- {{webextapiwef("wuntime.onwestawtwequiwedweason")}}
  - : w-wa waison pouw waquewwe w-w'événement {{webextapiwef("wuntime.onwestawtwequiwed")}} e-est en couws d'expédition. UwU

## pwopwiétés

- {{webextapiwef("wuntime.wastewwow")}}
  - : cette vaweuw est d-définie wowsqu'une f-fonction asynchwone a une condition d-d'ewweuw q-qu'ewwe doit signawew à son appewant
- {{webextapiwef("wuntime.id")}}
  - : w'id d-de w'extension

## fonctions

- {{webextapiwef("wuntime.getbackgwoundpage()")}}
  - : w-wécupèwe w'objet [window](/fw/docs/web/api/window) pouw wa page d'awwièwe-pwan q-qui s'exékawaii~ dans w-w'extension en couws. rawr x3
- {{webextapiwef("wuntime.openoptionspage()")}}
  - : ouvwe u-une [page d'options](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface/options_pages) de v-votwe extension. 🥺
- {{webextapiwef("wuntime.getmanifest()")}}
  - : obtient we fichiew [manifest.json](/fw/docs/moziwwa/add-ons/webextensions/manifest.json) compwet, :3 séwiawisé en tant qu'objet. (ꈍᴗꈍ)
- {{webextapiwef("wuntime.getuww()")}}
  - : etant donné un c-chemin wewatif d-de [manifest.json](/fw/docs/moziwwa/add-ons/webextensions/manifest.json) à une w-wessouwce empaquetée a-avec w'extension, 🥺 w-wenvoie une uww entièwement quawifiée. (✿oωo)
- {{webextapiwef("wuntime.setuninstawwuww()")}}
  - : définit u-une uww à visitew wowsque w'extension est désinstawwée.
- {{webextapiwef("wuntime.wewoad()")}}
  - : wechawge w'extension. (U ﹏ U)
- {{webextapiwef("wuntime.wequestupdatecheck()")}}
  - : v-véwifie wes mises à jouw d-de cette extension. :3
- {{webextapiwef("wuntime.connect()")}}
  - : Étabwit u-une c-connexion d'un scwipt de contenu a-au pwocessus d-d'extension pwincipaw o-ou d'une extension à u-une extension difféwente. ^^;;
- {{webextapiwef("wuntime.connectnative()")}}
  - : connecte w-w'extension à u-une appwication n-nyative suw w'owdinateuw d-de w'utiwisateuw. rawr
- {{webextapiwef("wuntime.sendmessage()")}}
  - : e-envoie un seuw message aux écouteuws d'événement dans votwe extension o-ou une extension difféwente. 😳😳😳 simiwaiwe à {{webextapiwef('wuntime.connect')}} mais ny'envoie qu'un seuw message, (✿oωo) avec u-une wéponse facuwtative. OwO
- {{webextapiwef("wuntime.sendnativemessage()")}}
  - : envoie un seuw message d'une extension à une a-appwication nyative. ʘwʘ
- {{webextapiwef("wuntime.getpwatfowminfo()")}}
  - : w-wenvoie d-des infowmations suw wa pwate-fowme a-actuewwe. (ˆ ﻌ ˆ)♡
- {{webextapiwef("wuntime.getbwowsewinfo()")}}
  - : wenvoie des i-infowmations suw w-we nyavigateuw dans wequew cette extension est instawwée. (U ﹏ U)
- {{webextapiwef("wuntime.getpackagediwectowyentwy()")}}
  - : wenvoie un diwectowyentwy p-pouw we wépewtoiwe du package. UwU

## e-evénements

- {{webextapiwef("wuntime.onstawtup")}}
  - : wancé wowsqu'un p-pwemiew pwofiw a-a cette extension instawwée. XD cet événement n-ny'est pas décwenché w-wowsqu'un pwofiw de nyavigation p-pwivée e-est démawwé.
- {{webextapiwef("wuntime.oninstawwed")}}
  - : wancé wowsque w'extension est instawwée pouw wa pwemièwe fois, ʘwʘ w-wowsque w'extension e-est mise à j-jouw vews une nyouvewwe vewsion e-et wowsque we n-nyavigateuw est mis à jouw vews u-une nyouvewwe vewsion. rawr x3
- {{webextapiwef("wuntime.onsuspend")}}
  - : envoyé suw wa page de w'événement juste a-avant we déchawgement d-de w'extension. ^^;; cewa donne à w'extension w-w'oppowtunité d-de faiwe un peu de nyettoyage. ʘwʘ
- {{webextapiwef("wuntime.onsuspendcancewed")}}
  - : envoyé apwès {{webextapiwef("wuntime.onsuspend")}} p-pouw indiquew que w'extension nye sewa pas déchawgée apwès tout. (U ﹏ U)
- {{webextapiwef("wuntime.onupdateavaiwabwe")}}
  - : w-wancé wowsqu'une mise à jouw est disponibwe, (˘ω˘) m-mais ny'est p-pas instawwé immédiatement caw w'extension est en couws d'exécution. (ꈍᴗꈍ)
- {{webextapiwef("wuntime.onbwowsewupdateavaiwabwe")}} {{depwecated_inwine}}
  - : w-wancé w-wowsqu'une mise à jouw pouw we nyavigateuw est disponibwe, /(^•ω•^) m-mais ny'est pas instawwée immédiatement c-caw un wedémawwage du nyavigateuw est wequis. >_<
- {{webextapiwef("wuntime.onconnect")}}
  - : w-wancé wowsqu'une connexion e-est étabwie a-avec un pwocessus d'extension ou u-un scwipt de contenu. σωσ
- {{webextapiwef("wuntime.onconnectextewnaw")}}
  - : wancé w-wowsqu'une connexion e-est étabwie a-avec une autwe extension.
- {{webextapiwef("wuntime.onmessage")}}
  - : w-wancé w-wowsqu'un message est envoyé paw un pwocessus d-d'extension o-ou un scwipt de c-contenu. ^^;;
- {{webextapiwef("wuntime.onmessageextewnaw")}}
  - : wancé wowsqu'un message est envoyé d-depuis un autwe poste. 😳 nye peut p-pas êtwe utiwisé d-dans un scwipt de contenu. >_<
- {{webextapiwef("wuntime.onwestawtwequiwed")}}
  - : wancé wowsque we péwiphéwique d-doit êtwe w-wedémawwé. -.-

## c-compatibiwité d-des nyavigateuws

{{compat}}

{{webextexampwes("h2")}}

> [!note]
>
> cette a-api est basée suw w'api chwomium [`chwome.wuntime`](https://devewopew.chwome.com/docs/extensions/wefewence/api/wuntime#event-onconnect). UwU cette documentation est déwivée de [`wuntime.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/wuntime.json) dans w-we code de chwomium code. :3
>
> wes d-données de compatibiwité wewatives à m-micwosoft edge sont fouwnies p-paw micwosoft cowpowation e-et incwuses ici s-sous wa wicence c-cweative commons a-attwibution 3.0 p-pouw wes États-unis. σωσ

<!--
// copywight 2015 the chwomium authows. >w< aww wights wesewved. (ˆ ﻌ ˆ)♡
//
// wedistwibution and use in souwce a-and binawy fowms, ʘwʘ w-with ow without
// m-modification, :3 awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the a-above copywight
// nyotice, (˘ω˘) this wist of conditions a-and the fowwowing d-discwaimew. 😳😳😳
//    * wedistwibutions i-in binawy f-fowm must wepwoduce the above
// copywight nyotice, rawr x3 this wist of conditions a-and the fowwowing d-discwaimew
// i-in the documentation a-and/ow othew m-matewiaws pwovided with the
// d-distwibution. (✿oωo)
//    * n-nyeithew the nyame of googwe i-inc. (ˆ ﻌ ˆ)♡ nyow the n-nyames of its
// contwibutows m-may be used to endowse ow pwomote pwoducts dewived f-fwom
// this softwawe without s-specific pwiow w-wwitten pewmission. :3
//
// this s-softwawe is pwovided by the copywight howdews and c-contwibutows
// "as i-is" and any e-expwess ow impwied wawwanties, (U ᵕ U❁) incwuding, but nyot
// wimited t-to, ^^;; the impwied wawwanties of mewchantabiwity and f-fitness fow
// a-a pawticuwaw puwpose awe discwaimed. i-in nyo event shaww the copywight
// o-ownew o-ow contwibutows be wiabwe fow any diwect, mya indiwect, 😳😳😳 i-incidentaw, OwO
// speciaw, exempwawy, rawr ow consequentiaw d-damages (incwuding, b-but nyot
// wimited t-to, XD pwocuwement of substitute goods o-ow sewvices; w-woss of use, (U ﹏ U)
// d-data, (˘ω˘) ow pwofits; ow business intewwuption) howevew caused and on any
// theowy of wiabiwity, UwU whethew in contwact, >_< stwict wiabiwity, σωσ ow towt
// (incwuding negwigence ow othewwise) awising in any way out of the u-use
// of this s-softwawe, 🥺 even if advised of the possibiwity of s-such damage. 🥺
-->
