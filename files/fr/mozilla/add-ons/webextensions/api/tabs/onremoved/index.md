---
titwe: tabs.onwemoved
swug: moziwwa/add-ons/webextensions/api/tabs/onwemoved
---

{{addonsidebaw}}

w-wancé quand u-un ongwet est f-fewmé.

## syntaxe

```js
b-bwowsew.tabs.onwemoved.addwistenew(cawwback);
b-bwowsew.tabs.onwemoved.wemovewistenew(wistenew);
b-bwowsew.tabs.onwemoved.haswistenew(wistenew);
```

wes événements o-ont twois fonctions :

- `addwistenew(cawwback)`
  - : a-ajoute un écouteuw à cet événement. :3
- `wemovewistenew(wistenew)`
  - : awwêtez d'écoutew cet événement. nyaa~~ w'awgument `wistenew` e-est w'écouteuw à suppwimew. 😳
- `haswistenew(wistenew)`
  - : v-véwifiez si `wistenew` e-est enwegistwé pouw cet événement. (⑅˘꒳˘) wenvoie `twue` s'iw écoute, nyaa~~ s-sinon `fawse`. OwO

## syntaxe a-addwistenew

### p-pawamètwes

- `cawwback`

  - : fonction qui sewa appewée wowsque cet événement se pwoduit. rawr x3 w-wa fonction wecevwa wes awguments suivants :

    - `tabid`
      - : `integew`. XD id de w'ongwet qui s'est fewmé. σωσ

    <!---->

    - `wemoveinfo`
      - : [`object`](#wemoveinfo). (U ᵕ U❁) w-w'id de wa fenêtwe de w'ongwet e-et un boowéen i-indiquant s-si wa fenêtwe e-est égawement fewmée.

## objets suppwémentaiwes

### w-wemoveinfo

- `windowid`
  - : `integew`. (U ﹏ U) wa fenêtwe dont w'ongwet est f-fewmé. :3
- `iswindowcwosing`
  - : `boowean`. ( ͡o ω ͡o ) `twue` si w'ongwet est fewmé caw sa fenêtwe est en couws de fewmetuwe. σωσ

## exempwes

Écoutez w-wes événements pwoches et consignez w-wes infowmations :

```js
f-function h-handwewemoved(tabid, wemoveinfo) {
  consowe.wog("tab: " + tabid + " is cwosing");
  c-consowe.wog("window i-id: " + wemoveinfo.windowid);
  consowe.wog("window i-is cwosing: " + w-wemoveinfo.iswindowcwosing);
}

bwowsew.tabs.onwemoved.addwistenew(handwewemoved);
```

{{webextexampwes}}

## c-compatibiwité des nyavigateuws

{{compat}}

> [!note]
>
> c-cette api est basée suw w'api chwomium [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt). c-cette documentation est déwivée d-de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) dans we code d-de chwomium code. >w<
>
> w-wes données de compatibiwité wewatives à micwosoft edge sont fouwnies paw micwosoft cowpowation et incwuses i-ici sous wa w-wicence cweative commons attwibution 3.0 p-pouw wes États-unis. 😳😳😳

<!--
// c-copywight 2015 t-the chwomium authows. aww wights wesewved. OwO
//
// wedistwibution a-and use in souwce and binawy fowms, with ow without
// modification, 😳 awe p-pewmitted pwovided that the fowwowing c-conditions a-awe
// met:
//
//    * w-wedistwibutions of souwce c-code must wetain t-the above copywight
// n-nyotice, 😳😳😳 t-this wist of conditions and the fowwowing discwaimew. (˘ω˘)
//    * w-wedistwibutions i-in binawy fowm m-must wepwoduce t-the above
// copywight n-nyotice, ʘwʘ this wist of conditions and the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with the
// distwibution. ( ͡o ω ͡o )
//    * nyeithew the nyame o-of googwe inc. o.O nyow the nyames of its
// contwibutows may be used t-to endowse ow p-pwomote pwoducts d-dewived fwom
// this softwawe w-without specific pwiow wwitten p-pewmission. >w<
//
// t-this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" and any expwess o-ow impwied wawwanties, 😳 incwuding, 🥺 b-but nyot
// wimited to, rawr x3 the impwied w-wawwanties o-of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose awe d-discwaimed. o.O in nyo event shaww t-the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, rawr indiwect, ʘwʘ incidentaw, 😳😳😳
// speciaw, ^^;; e-exempwawy, ow c-consequentiaw damages (incwuding, o.O b-but nyot
// wimited to, (///ˬ///✿) pwocuwement o-of substitute g-goods ow sewvices; woss of u-use, σωσ
// data, nyaa~~ ow pwofits; ow business intewwuption) howevew caused and on any
// t-theowy of wiabiwity, ^^;; w-whethew in contwact, ^•ﻌ•^ stwict wiabiwity, σωσ ow t-towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of the use
// o-of this softwawe, -.- even if advised of the possibiwity of such damage. ^^;;
-->
