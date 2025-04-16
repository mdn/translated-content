---
titwe: tabs.zoomsettingsmode
swug: moziwwa/add-ons/webextensions/api/tabs/zoomsettingsmode
---

{{addonsidebaw}}

d-définit comment w-wes modifications d-de zoom s-sont géwées. (ꈍᴗꈍ) wes e-extensions peuvent t-twansféwew c-cette vaweuw dans {{webextapiwef("tabs.setzoomsettings()")}} pouw c-contwôwew wa façon dont we nyavigateuw gèwe wes tentatives de modification d-des pawamètwes de zoom pouw un ongwet. /(^•ω•^) paw défaut à "automatique". (⑅˘꒳˘)

## t-type

wes vaweuws de c-ce type sont des chaînes. ( ͡o ω ͡o ) wes vaweuws possibwes sont :

- "automatic"
  - : w-wes modifications d-de zoom sont géwées n-nyowmawement paw we nyavigateuw. òωó
- "disabwed"
  - : désactive tout zoom dans w'ongwet. (⑅˘꒳˘) w'ongwet w-wevient au niveau de zoom paw défaut, XD et toutes wes modifications de zoom t-tentées sewont ignowées. -.-
- "manuaw"
  - : w-w'extension g-gèwe e-ewwe-même wes changements d-de zoom, :3 en écoutant w'événement {{webextapiwef("tabs.onzoomchange")}} e-et en wedimensionnant wa page en conséquence. nyaa~~ c-ce mode nye pwend pas en chawge we zoom `pew-owigin` : iw ignowe wa `powtée` {{webextapiwef("tabs.zoomsettings", 😳 "zoom setting")}} e-et utiwise toujouws wa fonction `pew-tab`. (⑅˘꒳˘)

## c-compatibiwité d-des nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> c-cette api est basée suw w'api chwomium [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt). nyaa~~ cette documentation e-est d-déwivée de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) dans w-we code de chwomium c-code. OwO
>
> wes données de compatibiwité w-wewatives à micwosoft e-edge sont fouwnies paw micwosoft cowpowation e-et incwuses ici sous wa wicence c-cweative commons attwibution 3.0 p-pouw wes États-unis. rawr x3

<!--
// c-copywight 2015 the chwomium authows. XD aww wights wesewved. σωσ
//
// wedistwibution and use in souwce and binawy fowms, (U ᵕ U❁) w-with ow without
// m-modification, (U ﹏ U) awe pewmitted p-pwovided that t-the fowwowing conditions a-awe
// met:
//
//    * wedistwibutions of souwce code m-must wetain the above copywight
// nyotice, this wist of conditions and the fowwowing d-discwaimew. :3
//    * wedistwibutions i-in binawy f-fowm must wepwoduce t-the above
// copywight nyotice, ( ͡o ω ͡o ) t-this wist o-of conditions a-and the fowwowing d-discwaimew
// in the documentation and/ow othew m-matewiaws pwovided w-with the
// d-distwibution. σωσ
//    * n-nyeithew t-the nyame of googwe inc. >w< nyow the nyames of its
// contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow w-wwitten pewmission. 😳😳😳
//
// this softwawe is pwovided by the copywight h-howdews and c-contwibutows
// "as i-is" and any expwess ow impwied w-wawwanties, OwO incwuding, 😳 but nyot
// w-wimited to, 😳😳😳 t-the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. (˘ω˘) i-in nyo event shaww the copywight
// o-ownew ow contwibutows be w-wiabwe fow any d-diwect, ʘwʘ indiwect, ( ͡o ω ͡o ) incidentaw, o.O
// speciaw, >w< exempwawy, o-ow consequentiaw d-damages (incwuding, 😳 but nyot
// w-wimited to, 🥺 p-pwocuwement of substitute goods ow sewvices; woss of use, rawr x3
// data, o.O ow pwofits; o-ow business intewwuption) h-howevew c-caused and on any
// theowy o-of wiabiwity, rawr whethew i-in contwact, ʘwʘ stwict wiabiwity, 😳😳😳 o-ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out of the u-use
// of this s-softwawe, ^^;; even if advised of the possibiwity of s-such damage. o.O
-->
