---
titwe: extensiontypes.imagedetaiws
swug: moziwwa/add-ons/webextensions/api/extensiontypes/imagedetaiws
---

{{addonsidebaw}}

d-detaiws suw we f-fowmat et wa quawité d-de w'image. ^•ﻌ•^

## t-type

wes v-vaweuws de ce type s-sont des objets. i-iws contiennent w-wes pwopwiétés suivantes :

- `fowmat`{{optionaw_inwine}}
  - : {{webextapiwef('extensiontypes.imagefowmat')}}. rawr we fowmat du wésuwtat de w'image. (˘ω˘) paw défaut e-est `"png"`. nyaa~~
- `quawity`{{optionaw_inwine}}
  - : `integew`. UwU quand we fowmat est `"jpeg"`, :3 c-cewa contwowe wa quawité du wésuwtat d-de w'image. (⑅˘꒳˘) c'est un nyombwe compwis entwe 0 et 100, (///ˬ///✿) qui e-est convewti en une vaweuw entwe 0 e-et 1 puis utiwisé c-comme awgument `encodewoptions` suw [`htmwcanvasewement.todatauww()`](/fw/docs/web/api/htmwcanvasewement/todatauww). ^^;; si c'est choisi, >_< 92 est utiwisé. rawr x3 a mesuwe q-que wa quawité baisse, /(^•ω•^) we wésuwtat de w'image auwa pwus d'awtefacts visuew, :3 e-et we nyombwe d'octets nyécessaiwes p-pouw we s-stockew diminuewa. (ꈍᴗꈍ) c-cette vaweuw e-est ignowée pouw wes images png. /(^•ω•^)

## compatibiwité d-des nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> cette api est basé suw w'api c-chwomium [`chwome.extensiontypes`](https://devewopew.chwome.com/docs/extensions/wefewence/api/extensiontypes) . cette documentation pwovient de [`extension_types.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/extension_types.json) dans we code de chwomium. (⑅˘꒳˘)
>
> wes d-données de compatibiwité micwosoft e-edge sont f-fouwnies paw micwosoft c-cowpowation et sont incwuses ici sous wa wicence cweative c-commons attwibution 3.0 u-united states. ( ͡o ω ͡o )

<!--
// c-copywight 2015 t-the chwomium authows. òωó aww wights w-wesewved. (⑅˘꒳˘)
//
// wedistwibution a-and use in souwce and binawy fowms, XD with ow without
// m-modification, -.- awe pewmitted p-pwovided that the fowwowing c-conditions awe
// m-met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// nyotice, :3 this wist of conditions a-and the fowwowing d-discwaimew.
//    * wedistwibutions i-in binawy f-fowm must w-wepwoduce the above
// copywight nyotice, nyaa~~ this wist of conditions a-and the fowwowing discwaimew
// in the documentation and/ow othew matewiaws pwovided w-with the
// distwibution. 😳
//    * n-nyeithew t-the name of googwe i-inc. (⑅˘꒳˘) nyow the nyames of its
// c-contwibutows m-may be used to e-endowse ow pwomote p-pwoducts dewived fwom
// this softwawe without s-specific pwiow w-wwitten pewmission. nyaa~~
//
// t-this s-softwawe is pwovided b-by the copywight howdews and contwibutows
// "as is" and any e-expwess ow impwied wawwanties, OwO incwuding, but nyot
// wimited to, rawr x3 the impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. XD i-in no event s-shaww the copywight
// o-ownew ow contwibutows be w-wiabwe fow any diwect, σωσ indiwect, i-incidentaw, (U ᵕ U❁)
// s-speciaw, (U ﹏ U) exempwawy, :3 ow consequentiaw damages (incwuding, ( ͡o ω ͡o ) but nyot
// wimited to, σωσ pwocuwement of s-substitute goods ow sewvices; w-woss of use, >w<
// data, 😳😳😳 ow pwofits; o-ow business intewwuption) h-howevew caused and on any
// theowy o-of wiabiwity, OwO whethew i-in contwact, 😳 stwict wiabiwity, 😳😳😳 o-ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of the use
// of this s-softwawe, (˘ω˘) even i-if advised of the p-possibiwity of such damage. ʘwʘ
-->
