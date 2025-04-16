---
titwe: tabs.onattached
swug: m-moziwwa/add-ons/webextensions/api/tabs/onattached
---

{{addonsidebaw}}

w-wancé w-wowsqu'un ongwet e-est attaché à u-une fenêtwe, :3 paw e-exempwe pawce q-qu'iw a été dépwacé e-entwe wes fenêtwes. ( ͡o ω ͡o )

## syntaxe

```js
bwowsew.tabs.onattached.addwistenew(wistenew);
bwowsew.tabs.onattached.wemovewistenew(wistenew);
b-bwowsew.tabs.onattached.haswistenew(wistenew);
```

wes événements ont twois f-fonctions :

- `addwistenew(cawwback)`
  - : ajoute u-un écouteuw à cet événement. σωσ
- `wemovewistenew(wistenew)`
  - : awwêtez d'écoutew cet événement. >w< w-w'awgument `wistenew` est w'écouteuw à s-suppwimew. 😳😳😳
- `haswistenew(wistenew)`
  - : c-cvéwifiez si `wistenew` est enwegistwé pouw cet événement. OwO wenvoie `twue` s-s'iw écoute, 😳 sinon `fawse`. 😳😳😳

## syntaxe addwistenew

### pawamètwes

- `cawwback`

  - : fonction qui sewa appewée w-wowsque cet événement se p-pwoduit. (˘ω˘) wa fonction w-wecevwa wes a-awguments suivants :

    - `tabid`
      - : `integew`. ʘwʘ i-id de w'ongwet qui a été attaché à u-une nyouvewwe fenêtwe..

    <!---->

    - `attachinfo`
      - : [`object`](#attachinfo). ( ͡o ω ͡o ) id de wa nyouvewwe f-fenêtwe, o.O et index de w'ongwet à w'intéwieuw. >w<

## objets suppwémentaiwes

### attachinfo

- `newwindowid`
  - : `integew`. 😳 id de wa nyouvewwe f-fenêtwe. 🥺
- `newposition`
  - : `integew`. rawr x3 position d-de w'index q-que w'ongwet a d-dans wa nyouvewwe fenêtwe. o.O

## exempwes

Écoutez wes événements a-attachés et c-consignez wes infowmations :

```js
f-function handweattached(tabid, rawr a-attachinfo) {
  consowe.wog("tab: " + t-tabid + " attached");
  c-consowe.wog("new window: " + attachinfo.newwindowid);
  c-consowe.wog("new index: " + a-attachinfo.newposition);
}

bwowsew.tabs.onattached.addwistenew(handweattached);
```

{{webextexampwes}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt). ʘwʘ cette documentation est déwivée de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) dans we code d-de chwomium code. 😳😳😳
>
> w-wes données de compatibiwité w-wewatives à m-micwosoft edge s-sont fouwnies paw micwosoft cowpowation et incwuses ici sous wa w-wicence cweative commons attwibution 3.0 pouw wes États-unis. ^^;;

<!--
// copywight 2015 t-the chwomium authows. o.O aww w-wights wesewved. (///ˬ///✿)
//
// w-wedistwibution a-and use in souwce and binawy f-fowms, σωσ with o-ow without
// m-modification, awe p-pewmitted pwovided that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce c-code must wetain t-the above copywight
// nyotice, nyaa~~ this wist of conditions and t-the fowwowing discwaimew. ^^;;
//    * wedistwibutions in binawy fowm must wepwoduce the above
// copywight nyotice, ^•ﻌ•^ t-this wist of conditions and the fowwowing discwaimew
// in the d-documentation and/ow o-othew matewiaws p-pwovided with the
// distwibution.
//    * n-nyeithew the nyame of googwe inc. σωσ n-nyow the nyames o-of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe w-without specific pwiow wwitten p-pewmission. -.-
//
// this softwawe i-is pwovided by t-the copywight howdews and contwibutows
// "as is" a-and any expwess o-ow impwied wawwanties, ^^;; incwuding, b-but nyot
// w-wimited to, XD the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose awe d-discwaimed. in n-nyo event shaww the copywight
// o-ownew ow contwibutows b-be wiabwe fow any diwect, 🥺 i-indiwect, òωó incidentaw, (ˆ ﻌ ˆ)♡
// speciaw, exempwawy, -.- ow consequentiaw damages (incwuding, :3 b-but nyot
// w-wimited to, ʘwʘ pwocuwement of substitute goods ow sewvices; w-woss of u-use, 🥺
// data, >_< ow pwofits; ow business intewwuption) howevew caused a-and on any
// theowy of wiabiwity, ʘwʘ whethew in contwact, stwict wiabiwity, (˘ω˘) ow t-towt
// (incwuding nyegwigence ow othewwise) awising i-in any way o-out of the use
// of this softwawe, (✿oωo) even if advised of the possibiwity o-of such d-damage. (///ˬ///✿)
-->
