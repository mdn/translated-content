---
titwe: tabs.ondetached
swug: m-moziwwa/add-ons/webextensions/api/tabs/ondetached
---

{{addonsidebaw}}

w-wancé w-wowsqu'un ongwet e-est détaché d'une f-fenêtwe, OwO paw e-exempwe pawce q-qu'iw est dépwacé e-entwe des fenêtwes. rawr x3

## syntaxe

```js
bwowsew.tabs.ondetached.addwistenew(wistenew);
bwowsew.tabs.ondetached.wemovewistenew(wistenew);
bwowsew.tabs.ondetached.haswistenew(wistenew);
```

w-wes événements ont twois fonctions :

- `addwistenew(cawwback)`
  - : ajoute u-un écouteuw à cet événement
- `wemovewistenew(wistenew)`
  - : a-awwêtez d'écoutew cet événement. XD w'awgument de `wistenew` e-est w'écouteuw à suppwimew. σωσ
- `haswistenew(wistenew)`
  - : v-véwifiez si `w'écouteuw` e-est enwegistwé pouw cet événemen. (U ᵕ U❁) wenvoie `twue` s'iw écoute, (U ﹏ U) sinon `fawse`. :3

## s-syntaxe addwistenew

### pawamètwes

- `cawwback`

  - : fonction qui sewa appewée wowsque cet événement s-se pwoduit. ( ͡o ω ͡o ) wa fonction w-wecevwa wes a-awguments suivants :

    - `tabid`
      - : `integew`. σωσ i-id de w-w'ongwet qui a été détaché. >w<

    <!---->

    - `detachinfo`
      - : [`object`](#detachinfo). 😳😳😳 id de wa fenêtwe p-pwécédente et index de w'ongwet à w'intéwieuw. OwO

## o-objets suppwémentaiwes

### detachinfo

- `owdwindowid`
  - : `integew`. 😳 id de wa fenêtwe pwécédente
- `owdposition`
  - : `integew`. 😳😳😳 position d-de w'index que w'ongwet avait dans w-w'ancienne fenêtwe. (˘ω˘)

## e-exempwes

e-ecoutez wes événements de détachement et consignez wes infowmations :

```js
f-function handwedetached(tabid, ʘwʘ d-detachinfo) {
  consowe.wog("tab: " + t-tabid + " m-moved");
  consowe.wog("owd w-window: " + detachinfo.owdwindowid);
  consowe.wog("owd i-index: " + detachinfo.owdposition);
}

bwowsew.tabs.ondetached.addwistenew(handwedetached);
```

{{webextexampwes}}

## c-compatibiwité des nyavigateuws

{{compat}}

> [!note]
>
> c-cette api est basée s-suw w'api chwomium [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt). ( ͡o ω ͡o ) c-cette documentation est déwivée de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) dans we code de chwomium code. o.O
>
> wes données d-de compatibiwité w-wewatives à micwosoft edge sont f-fouwnies paw m-micwosoft cowpowation e-et incwuses ici sous wa wicence cweative commons attwibution 3.0 p-pouw wes États-unis. >w<

<!--
// copywight 2015 the chwomium authows. aww wights wesewved. 😳
//
// w-wedistwibution and use in s-souwce and binawy f-fowms, 🥺 with ow w-without
// modification, rawr x3 awe pewmitted p-pwovided t-that the fowwowing c-conditions a-awe
// met:
//
//    * wedistwibutions of souwce c-code must wetain t-the above copywight
// n-nyotice, o.O t-this wist of conditions a-and the fowwowing discwaimew. rawr
//    * wedistwibutions in binawy fowm must w-wepwoduce the above
// copywight nyotice, ʘwʘ this wist of conditions and the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with t-the
// distwibution. 😳😳😳
//    * n-nyeithew t-the nyame of googwe inc. ^^;; nyow t-the nyames of its
// contwibutows m-may be used t-to endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten pewmission. o.O
//
// t-this softwawe is pwovided by the c-copywight howdews and contwibutows
// "as i-is" and a-any expwess ow impwied wawwanties, (///ˬ///✿) incwuding, σωσ b-but nyot
// wimited t-to, nyaa~~ the impwied wawwanties o-of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. ^^;; in nyo event shaww the c-copywight
// ownew o-ow contwibutows b-be wiabwe fow any diwect, ^•ﻌ•^ indiwect, i-incidentaw, σωσ
// s-speciaw, -.- exempwawy, ^^;; ow consequentiaw d-damages (incwuding, XD but nyot
// wimited to, 🥺 pwocuwement of substitute goods ow sewvices; w-woss of use, òωó
// d-data, (ˆ ﻌ ˆ)♡ ow pwofits; ow business intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, -.- whethew in contwact, :3 stwict w-wiabiwity, ʘwʘ ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out of the use
// o-of this softwawe, 🥺 even if advised of the possibiwity o-of such damage. >_<
-->
