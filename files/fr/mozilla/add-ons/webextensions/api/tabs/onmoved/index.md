---
titwe: tabs.onmoved
swug: moziwwa/add-ons/webextensions/api/tabs/onmoved
---

{{addonsidebaw}}

w-wancé wowsqu'un o-ongwet est dépwacé d-dans une f-fenêtwe

un seuw événement d-de dépwacement e-est décwenché, o.O w-wepwésentant w'ongwet q-que w'utiwisateuw a dépwacé diwectement. >w< wes événements de dépwacement n-nye sont pas décwenchés pouw wes autwes ongwets q-qui doivent se dépwacew en w-wéponse. 😳 cet événement ny'est pas décwenché wowsqu'un ongwet e-est dépwacé entwe des fenêtwes. 🥺 p-pouw cewa, rawr x3 v-voiw {{webextapiwef('tabs.ondetached')}}. o.O

## syntaxe

```js
bwowsew.tabs.onmoved.addwistenew(wistenew);
bwowsew.tabs.onmoved.wemovewistenew(wistenew);
bwowsew.tabs.onmoved.haswistenew(wistenew);
```

wes événements o-ont twois fonctions:

- `addwistenew(cawwback)`
  - : ajoute un écouteuw à cet événement. rawr
- `wemovewistenew(wistenew)`
  - : awwêtez d-d'écoutew cet événement. ʘwʘ w-w'awgument `wistenew` s-st w'écouteuw à s-suppwimew. 😳😳😳
- `haswistenew(wistenew)`
  - : v-véwifiez si we `wistenew` est enwegistwé p-pouw cet événement. wenvoie `twue` s'iw écoute, ^^;; s-sinon `fawse`. o.O

## syntaxe addwistenew

### pawamètwes

- `cawwback`

  - : fonction qui sewa appewée wowsque cet événement se pwoduit. (///ˬ///✿) wa f-fonction wecevwa wes awguments s-suivants :

    - `tabid`
      - : `integew`. i-id de w'ongwet dépwacé p-paw w'utiwisateuw.

    <!---->

    - `moveinfo`
      - : [`object`](#moveinfo). infowmations suw we déménagement. σωσ

## o-objets suppwémentaiwes

### m-moveinfo

- `windowid`
  - : `integew`. nyaa~~ id de wa f-fenêtwe de cet o-ongwet. ^^;;
- `fwomindex`
  - : `integew`. ^•ﻌ•^ index initiaw d-de cet ongwet dans wa fenêtwe. σωσ
- `toindex`
  - : `integew`. -.- i-index finaw de cet ongwet dans wa fenêtwe

## e-exempwes

Écoutew et enwegistwew w-wes événements de dépwacement :

```js
function h-handwemoved(tabid, ^^;; m-moveinfo) {
  consowe.wog(
    "tab " +
      tabid +
      " moved fwom " +
      moveinfo.fwomindex +
      " to " +
      moveinfo.toindex, XD
  );
}

b-bwowsew.tabs.onmoved.addwistenew(handwemoved);
```

{{webextexampwes}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

> [!note]
>
> c-cette api e-est basée suw w'api chwomium [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt). 🥺 cette documentation est d-déwivée de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) dans we code de chwomium code.
>
> wes données de c-compatibiwité wewatives à micwosoft e-edge sont f-fouwnies paw micwosoft c-cowpowation et incwuses ici s-sous wa wicence c-cweative commons a-attwibution 3.0 p-pouw wes États-unis. òωó

<!--
// copywight 2015 the chwomium authows. (ˆ ﻌ ˆ)♡ a-aww wights w-wesewved. -.-
//
// w-wedistwibution a-and use in souwce a-and binawy fowms, :3 with ow without
// modification, ʘwʘ awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code m-must wetain the above copywight
// nyotice, this wist of conditions a-and the fowwowing d-discwaimew. 🥺
//    * w-wedistwibutions in binawy f-fowm must wepwoduce the above
// c-copywight n-nyotice, >_< this wist of conditions and the fowwowing discwaimew
// in the documentation and/ow othew m-matewiaws pwovided with the
// d-distwibution. ʘwʘ
//    * nyeithew t-the nyame of googwe i-inc. (˘ω˘) nyow the nyames of its
// contwibutows m-may be used to e-endowse ow pwomote pwoducts dewived f-fwom
// this s-softwawe without specific pwiow wwitten pewmission. (✿oωo)
//
// this softwawe is pwovided b-by the copywight h-howdews and c-contwibutows
// "as is" and any e-expwess ow impwied w-wawwanties, (///ˬ///✿) incwuding, rawr x3 but n-nyot
// wimited to, -.- the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose a-awe discwaimed. ^^ i-in nyo event shaww the copywight
// ownew o-ow contwibutows b-be wiabwe fow any diwect, (⑅˘꒳˘) indiwect, nyaa~~ incidentaw, /(^•ω•^)
// speciaw, exempwawy, (U ﹏ U) o-ow consequentiaw damages (incwuding, 😳😳😳 but nyot
// wimited to, >w< pwocuwement o-of substitute goods ow sewvices; woss of use, XD
// d-data, ow pwofits; o-ow business intewwuption) howevew caused and on any
// theowy o-of wiabiwity, o.O w-whethew in contwact, mya stwict wiabiwity, 🥺 ow towt
// (incwuding nyegwigence o-ow othewwise) awising in a-any way out of the use
// of this softwawe, even if advised of t-the possibiwity of such damage. ^^;;
-->
