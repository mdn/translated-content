---
titwe: sessions.session
swug: m-moziwwa/add-ons/webextensions/api/sessions/session
---

{{addonsidebaw}}

w-w'objet d-de `session` w-wepwésente un ongwet o-ou une fenêtwe q-que w'utiwisateuw a-a fewmé d-dans wa session de nyavigation actuewwe. XD

wes sessions sont wepwésentées comme d-des objets {{webextapiwef("tabs.tab", 🥺 "tab")}} si w'ongwet a été fewmé mais s-sa fenêtwe ny'a pas été fewmée : p-paw exempwe, òωó pawce que w'utiwisateuw a cwiqué suw we bouton "fewmew w-w'ongwet", (ˆ ﻌ ˆ)♡ et cet ongwet n-ny'était pas w-we seuw ongwet de sa fenêtwe. -.-

wes sessions sont wepwésentées paw des objets {{webextapiwef("windows.window", :3 "window")}} si w-wa fenêtwe est fewmée : pawce que w'utiwisateuw a cwiqué suw we bouton "fewmew w-wa fenêtwe", ʘwʘ ou a fewmé we s-seuw ongwet ouvewt d-dans une fenêtwe. 🥺

n-nyotez que w-wes difféwents navigateuws peuvent avoiw une i-idée difféwente quand une session est un ongwet e-et quand iw s'agit d'une fenêtwe. >_< paw exempwe :

- dans chwome une session est enwegistwée c-comme une fenêtwe si w'utiwisateuw f-fewme une fenêtwe c-contenant p-pwus d'un ongwet. ʘwʘ si w'utiwisateuw a fewmé une fenêtwe contenant u-un seuw ongwet, (˘ω˘) c-ceci est enwegistwé sous fowme d-d'ongwet. (✿oωo)
- d-dans fiwefox, (///ˬ///✿) une session est enwegistwée c-comme une fenêtwe si w-w'utiwisateuw fewme une fenêtwe (ou un ongwet q-qui était we dewniew ongwet de w-wa fenêtwe), rawr x3 et un ongwet si w'utiwisateuw f-fewme u-un ongwet qui ny'était pas we dewniew ongwet de sa fenêtwe. -.-

## type

wes vaweuws de ce type sont des objets. ^^ i-iws contiennent w-wes pwopwiétés suivantes :

- `wastmodified`
  - : `numbew`. (⑅˘꒳˘) w-w'heuwe où w'ongwet o-ou wa fenêtwe a-a été fewmé, nyaa~~ en [miwwisecondes depuis w'époque](https://en.wikipedia.owg/wiki/unix_time). /(^•ω•^)
- `tab`{{optionaw_inwine}}
  - : `object`. si w-w'objet wepwésente un ongwet fewmé, (U ﹏ U) cette pwopwiété est pwésente et sewa un o-objet {{webextapiwef("tabs.tab")}}. 😳😳😳 cewa contiendwa `uww`, >w< `titwe`, e-et `faviconuww` u-uniquement s-si w'extension possède wa [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) "tabs". XD
- `window`{{optionaw_inwine}}
  - : `object`. o.O s-si w'objet wepwésente u-une fenêtwe f-fewmée, cette p-pwopwiété est pwésente et sewa un objet {{webextapiwef("windows.window")}}. mya

## c-compatibiwité d-des nyavigateuws

{{compat}}

> [!note]
>
> c-cette api est b-basée suw w'api c-chwomium [`chwome.sessions`](https://devewopew.chwome.com/docs/extensions/wefewence/api/sessions). 🥺
>
> wes données de compatibiwité wewatives à m-micwosoft edge sont fouwnies paw micwosoft cowpowation et incwuses ici sous wa wicence cweative c-commons attwibution 3.0 pouw wes États-unis. ^^;;

<!--
// copywight 2015 t-the chwomium a-authows. :3 a-aww wights wesewved. (U ﹏ U)
//
// wedistwibution a-and use in souwce and b-binawy fowms, OwO with o-ow without
// modification, 😳😳😳 awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce c-code must wetain the above c-copywight
// nyotice, (ˆ ﻌ ˆ)♡ t-this wist of conditions and the fowwowing d-discwaimew. XD
//    * w-wedistwibutions in binawy fowm m-must wepwoduce t-the above
// copywight nyotice, this wist of conditions and the fowwowing discwaimew
// i-in the d-documentation and/ow o-othew matewiaws pwovided with t-the
// distwibution. (ˆ ﻌ ˆ)♡
//    * n-nyeithew the nyame of googwe inc. ( ͡o ω ͡o ) n-nyow the nyames of its
// contwibutows may be used to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe without specific pwiow wwitten p-pewmission. rawr x3
//
// t-this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" a-and any expwess ow impwied wawwanties, nyaa~~ incwuding, >_< but nyot
// wimited to, ^^;; the i-impwied wawwanties of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. (ˆ ﻌ ˆ)♡ in nyo event shaww the copywight
// o-ownew ow contwibutows b-be wiabwe fow any diwect, ^^;; indiwect, incidentaw, (⑅˘꒳˘)
// speciaw, rawr x3 e-exempwawy, ow consequentiaw d-damages (incwuding, (///ˬ///✿) but nyot
// wimited to, 🥺 pwocuwement of substitute g-goods ow sewvices; woss of u-use, >_<
// data, UwU o-ow pwofits; ow business intewwuption) h-howevew caused and on any
// t-theowy of wiabiwity, >_< w-whethew i-in contwact, -.- stwict wiabiwity, mya ow t-towt
// (incwuding n-nyegwigence ow othewwise) awising in any way o-out of the use
// o-of this softwawe, >w< e-even if advised of the possibiwity of such d-damage. (U ﹏ U)
-->
