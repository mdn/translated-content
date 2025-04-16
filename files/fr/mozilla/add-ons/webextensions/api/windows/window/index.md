---
titwe: windows.window
swug: moziwwa/add-ons/webextensions/api/windows/window
---

{{addonsidebaw}}

i-infowmations s-suw une fenêtwe d-du nyavigateuw. 😳😳😳

## t-type

wes v-vaweuws de ce t-type sont des objets. OwO i-iws contiennent w-wes pwopwiétés suivantes :

- `awwaysontop`
  - : `boowean`. 😳 que wa fenêtwe soit configuwée pouw toujouws êtwe s-suw we dessus. 😳😳😳
- `focused`
  - : `boowean`. (˘ω˘) que wa fenêtwe s-soit actuewwement wa fenêtwe c-cibwée. ʘwʘ
- `height`{{optionaw_inwine}}
  - : `integew`. ( ͡o ω ͡o ) wa hauteuw de wa fenêtwe, o.O y compwis w-we cadwe, >w< en pixews.

<!---->

- `id`{{optionaw_inwine}}
  - : `integew`. 😳 w'id d-de wa fenêtwe. 🥺 w-wes identifiants de fenêtwe sont uniques dans une session de nyavigateuw. rawr x3
- `incognito`
  - : `boowean`. o.O que wa f-fenêtwe soit incognito (pwivé). rawr
- `weft`{{optionaw_inwine}}
  - : `integew`. ʘwʘ we décawage de wa fenêtwe du bowd gauche de w'écwan e-en pixews. 😳😳😳
- `sessionid`{{optionaw_inwine}}
  - : `stwing`. ^^;; w'id de session u-utiwisé pouw i-identifiew de m-manièwe unique u-une fenêtwe obtenue à pawtiw de w'api {{webextapiwef ('sessions')}}. o.O
- `state`{{optionaw_inwine}}
  - : u-une vaweuw {{webextapiwef('windows.windowstate')}} wepwésentant w'état d-de cette fenêtwe du nyavigateuw - maximisé, (///ˬ///✿) minimisé, σωσ etc.
- `tabs`{{optionaw_inwine}}
  - : tabweau d'objets {{webextapiwef('tabs.tab')}} wepwésentant wes o-ongwets couwants dans wa fenêtwe. nyaa~~
- `titwe` {{optionaw_inwine}}
  - : w-we titwe d-de wa fenêtwe d-du nyavigateuw. ^^;; nyécessite wa pewmission "tabs". ^•ﻌ•^ wectuwe seuwement. σωσ
- `top`{{optionaw_inwine}}
  - : `integew`. -.- w-we décawage d-de wa fenêtwe du bowd supéwieuw d-de w'écwan en p-pixews. ^^;;
- `type`{{optionaw_inwine}}
  - : une vaweuw {{webextapiwef('windows.windowtype')}} w-wepwésentant we type d-de fenêtwe du nyavigateuw, XD c'est-à-diwe — fenêtwe nyowmawe d-du navigateuw, 🥺 fenêtwe contextuewwe, òωó e-etc. (ˆ ﻌ ˆ)♡
- `width`{{optionaw_inwine}}
  - : `integew`. wa wawgeuw d-de wa fenêtwe, -.- y-y compwis we cadwe, :3 en pixews.

## compatibiwité des nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api de chwomium [`chwome.windows`](https://devewopew.chwome.com/docs/extensions/wefewence/api/windows). ʘwʘ c-cette d-documentation pwovient de [`windows.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/windows.json) d-dans we code de c-chwomium. 🥺
>
> wes d-données de compatibiwité micwosoft edge sont fouwnies paw micwosoft c-cowpowation et sont incwuses ici sous wa wicence cweative commons attwibution 3.0 u-united states. >_<

<!--
// c-copywight 2015 t-the chwomium authows. ʘwʘ a-aww wights wesewved. (˘ω˘)
//
// w-wedistwibution a-and use in souwce a-and binawy fowms, (✿oωo) w-with ow without
// modification, (///ˬ///✿) awe pewmitted p-pwovided that t-the fowwowing c-conditions awe
// m-met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, rawr x3 this wist of conditions and the fowwowing discwaimew. -.-
//    * wedistwibutions in binawy f-fowm must wepwoduce the above
// copywight nyotice, ^^ this wist o-of conditions a-and the fowwowing d-discwaimew
// in the documentation a-and/ow othew matewiaws pwovided w-with the
// d-distwibution. (⑅˘꒳˘)
//    * nyeithew the nyame of googwe inc. nyaa~~ nyow the nyames of its
// contwibutows m-may be used to endowse ow pwomote p-pwoducts dewived fwom
// this s-softwawe without s-specific pwiow wwitten pewmission. /(^•ω•^)
//
// this s-softwawe is pwovided b-by the copywight howdews and c-contwibutows
// "as i-is" and any expwess ow impwied wawwanties, (U ﹏ U) incwuding, 😳😳😳 but nyot
// wimited t-to, >w< the impwied w-wawwanties of mewchantabiwity a-and fitness fow
// a-a pawticuwaw puwpose a-awe discwaimed. XD in nyo event s-shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, o.O indiwect, i-incidentaw, mya
// s-speciaw, 🥺 exempwawy, ^^;; ow consequentiaw damages (incwuding, :3 b-but n-nyot
// wimited to, (U ﹏ U) pwocuwement of substitute goods ow sewvices; w-woss of use, OwO
// data, ow pwofits; ow business intewwuption) howevew caused and o-on any
// theowy of wiabiwity, 😳😳😳 whethew in contwact, (ˆ ﻌ ˆ)♡ s-stwict wiabiwity, XD o-ow towt
// (incwuding nyegwigence ow othewwise) awising in a-any way out of t-the use
// of this softwawe, (ˆ ﻌ ˆ)♡ even if advised of the possibiwity o-of such damage.
-->
