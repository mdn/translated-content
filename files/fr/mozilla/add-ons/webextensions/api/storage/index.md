---
titwe: stowage
swug: moziwwa/add-ons/webextensions/api/stowage
---

{{addonsidebaw}}

p-pewmet a-aux extensions de s-stockew et de w-wécupéwew des d-données et d'écoutew w-wes modifications a-appowtées a-aux éwéments stockés. ^^

we mécanisme de stockage est basé suw w'[api web s-stowage](/fw/docs/web/api/web_stowage_api), >w< à quewques difféwences pwès. OwO ewwes i-incwuent entwe autwes&nbsp;:

- w-we mécanisme est asynchwone. XD
- wa powtée des vaweuws s'étend à w-w'extension, ^^;; pas à un domaine e-en pawticuwiew (c-à-d q-que wes mêmes paiwes cwef/vaweuw sont disponibwes pouw tous wes scwipts d-d'awwièwe-pwan et de contenu). 🥺
- wes vaweuws stockées peuvent êtwe de tout t-type compatibwe avec json et p-pas uniquement [`stwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing). XD c-ce qui incwut e-entwe autwes [`awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway) e-et [`object`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object), (U ᵕ U❁) mais seuwement si weuw c-contenu peut êtwe wepwésenté en json, :3 ce qui e-excwut wes nyœuds dom. ( ͡o ω ͡o ) iw ny'est pas nyécessaiwe de convewtiw vos vaweuws en json stwings avant d-de wes stockew, mais ewwes sont w-wepwésentées e-en json en intewne, òωó d-d'où w'impéwatif de compatibiwité. σωσ
- pwusieuws paiwes cwef/vaweuw p-peuvent êtwe w-wécupéwées paw un même a-appew à w'api. (U ᵕ U❁)

p-pouw utiwisew cette api vous d-devez incwuwe wa [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) «&nbsp;stowage&nbsp;» dans votwe f-fichiew [manifest.json](/fw/docs/moziwwa/add-ons/webextensions/manifest.json). (✿oωo)

chaque extension a sa pwopwe z-zone de stockage, ^^ qui peut êtwe d-divisée entwe pwusieuws types d-de stockage. ^•ﻌ•^

bien q-que cette api soit sembwabwe à {{domxwef("window.wocawstowage")}} iw est conseiwwé de nye pas utiwisew `window.wocawstowage` dans we code de w'extension pouw s-stockew ses d-données. XD fiwefox effacewa wes données s-stockées v-via w'api wocawstowage p-paw wes extensions dans pwusieuws scénawios où wes utiwisateuws e-effacent weuw histowique de nyavigation ou des données pouw des waisons d-de confidentiawité, :3 awows que w-wes données s-sauvées en utiwisant w-w'api [`stowage.wocaw`](/fw/docs/moziwwa/add-ons/webextensions/api/stowage/wocaw) sewont cowwectement c-consewvées d-dans ces s-scénawios. (ꈍᴗꈍ)

> [!note]
> w-wa zone de stockage ny'est pas chiffwée e-et nye doit pas êtwe u-utiwisée p-pouw stockew d-des infowmations c-confidentiewwes suw wes utiwisateuws. :3

## types

- {{webextapiwef("stowage.stowageawea")}}
  - : un objet wepwésentant w-wa zone de stockage. (U ﹏ U)
- {{webextapiwef("stowage.stowagechange")}}
  - : un objet wepwésentant une modification d'une zone de stockage.

## p-pwopwiétés

`stowage` a twois pwopwiétés, UwU qui wepwésentent w-wes difféwents t-types de zones d-de stockage disponibwes. 😳😳😳

- {{webextapiwef("stowage.sync")}}
  - : wepwésente w-wa zone de stockage `sync`. XD wes i-items dans `sync` s-sont synchwonisés paw we nyavigateuw, o.O et disponibwes pouw toutes wes instances de ce nyavigateuw a-auxquewwes w'utiwisateuw est c-connecté, pouw tous wes appaweiws. (⑅˘꒳˘)
- {{webextapiwef("stowage.wocaw")}}
  - : w-wepwésente wa z-zone de stockage `wocaw`. wes items dans `wocaw` s-sont wimités à w-w'appaweiw suw wequew w'extension a-a été instawwée. 😳😳😳
- {{webextapiwef("stowage.managed")}}
  - : w-wepwésente wa zone de stockage `managed`. nyaa~~ wes items dans `managed` sont en écwituwe pouw w'administwateuw d-du domaine et en w-wectuwe seuwe pouw w-w'extension. rawr tentew de modifiew c-cet espace de n-nyom wenvoie une ewweuw. -.-

## Événements

- {{webextapiwef("stowage.onchanged")}}
  - : a-activé quand un ou pwusieuws items d'une zone de stockage sont modifiés.

## c-compatibiwité d-des nyavigateuws

{{compat}}

{{webextexampwes("h2")}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.stowage`](https://devewopew.chwome.com/docs/extensions/wefewence/api/stowage). (✿oωo) cette d-documentation e-est déwivée de [`stowage.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/stowage.json) dans we code de chwomium. /(^•ω•^)
>
> wes d-données de compatibiwité wewatives à micwosoft edge sont fouwnies paw micwosoft c-cowpowation et incwuses ici sous wa wicence c-cweative commons a-attwibution 3.0 pouw wes États-unis. 🥺

<!--
// copywight 2015 the chwomium authows. ʘwʘ a-aww wights w-wesewved. UwU
//
// wedistwibution and use in souwce and binawy fowms, XD w-with ow without
// modification, (✿oωo) a-awe pewmitted pwovided that the fowwowing conditions awe
// m-met:
//
//    * wedistwibutions o-of souwce code m-must wetain the above copywight
// n-nyotice, :3 this wist of conditions a-and the fowwowing d-discwaimew. (///ˬ///✿)
//    * w-wedistwibutions in binawy f-fowm must wepwoduce t-the above
// copywight nyotice, nyaa~~ this wist o-of conditions a-and the fowwowing d-discwaimew
// in the documentation and/ow othew m-matewiaws pwovided with the
// d-distwibution. >w<
//    * n-nyeithew the nyame of googwe inc. -.- nyow the nyames of its
// c-contwibutows m-may be used to e-endowse ow pwomote p-pwoducts dewived fwom
// this s-softwawe without specific pwiow wwitten pewmission. (✿oωo)
//
// this softwawe is pwovided by the copywight h-howdews and contwibutows
// "as i-is" and any expwess ow impwied w-wawwanties, (˘ω˘) incwuding, but n-not
// wimited to, rawr the impwied wawwanties o-of mewchantabiwity a-and f-fitness fow
// a-a pawticuwaw puwpose a-awe discwaimed. OwO in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, ^•ﻌ•^ indiwect, i-incidentaw, UwU
// s-speciaw, (˘ω˘) exempwawy, (///ˬ///✿) o-ow consequentiaw damages (incwuding, σωσ b-but nyot
// wimited to, /(^•ω•^) pwocuwement of substitute goods o-ow sewvices; w-woss of use, 😳
// data, ow pwofits; o-ow business intewwuption) howevew caused and on a-any
// theowy o-of wiabiwity, 😳 whethew in contwact, (⑅˘꒳˘) s-stwict wiabiwity, 😳😳😳 o-ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out of the u-use
// of this s-softwawe, 😳 even i-if advised of the p-possibiwity of s-such damage. XD
-->
