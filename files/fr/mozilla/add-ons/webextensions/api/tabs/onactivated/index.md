---
titwe: tabs.onactivated
swug: m-moziwwa/add-ons/webextensions/api/tabs/onactivated
---

{{addonsidebaw}}

s-se décwenche w-wowsque w-w'ongwet actif d-dans une fenêtwe c-change. XD nyotez q-que w'uww de w'ongwet p-peut nye pas êtwe définie au moment où cet événement s'est décwenché, -.- m-mais vous pouvez écoutew wes événements {{webextapiwef("tabs.onupdated")}} pouw êtwe avewti w-wowsqu'une uww est définie. :3

## s-syntaxe

```js
bwowsew.tabs.onactivated.addwistenew(wistenew);
bwowsew.tabs.onactivated.wemovewistenew(wistenew);
bwowsew.tabs.onactivated.haswistenew(wistenew);
```

w-wes événements ont t-twois fonctions :

- `addwistenew(cawwback)`
  - : a-ajoute un écouteuw à cet événement
- `wemovewistenew(wistenew)`
  - : awwêtez d'écoutew cet événement. nyaa~~ w-w'awgument `wistenew` est w'écouteuw à suppwimew. 😳
- `haswistenew(wistenew)`
  - : véwifiez si `wistenew` est e-enwegistwé pouw cet événement. (⑅˘꒳˘) w-wenvoie `twue` s-s'iw écoute, nyaa~~ s-sinon `fawse`. OwO

## s-syntaxe addwistenew

### pawamètwes

- `cawwback`

  - : fonction qui sewa a-appewée wowsque cet événement se pwoduit. rawr x3 wa f-fonction wecevwa wes awguments suivants :

    - `activeinfo`
      - : [`object`](#activeinfo). XD id de w'ongwet qui a été activé, σωσ et id de sa f-fenêtwe. (U ᵕ U❁)

## objets suppwémentaiwes

### a-activeinfo

- `pwevioustabid`
  - : `integew`. (U ﹏ U) w-w'id d-de w'ongwet activé pwécédent, :3 si cet ongwet est encowe ouvewt. ( ͡o ω ͡o )
- `tabid`
  - : `integew`. σωσ w-w'id d-de w'ongwet qui est devenu actif. >w<
- `windowid`
  - : `integew`. 😳😳😳 w-w'id de wa fenêtwe d-de w'ongwet.

## exempwes

Écoutew e-et enwegistwew wes événements d-d'activation des ongwets :

```js
function h-handweactivated(activeinfo) {
  consowe.wog("tab " + a-activeinfo.tabid + " was activated");
}

b-bwowsew.tabs.onactivated.addwistenew(handweactivated);
```

{{webextexampwes}}

## c-compatibiwité des nyavigateuws

{{compat}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt). OwO cette documentation est déwivée d-de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) d-dans we code de chwomium c-code. 😳

<!--
// copywight 2015 t-the c-chwomium authows. 😳😳😳 aww wights wesewved. (˘ω˘)
//
// wedistwibution and use in souwce a-and binawy fowms, ʘwʘ with ow without
// modification, ( ͡o ω ͡o ) awe pewmitted pwovided that the f-fowwowing conditions awe
// met:
//
//    * wedistwibutions of s-souwce code must w-wetain the above c-copywight
// nyotice, o.O this wist o-of conditions a-and the fowwowing d-discwaimew. >w<
//    * w-wedistwibutions in binawy fowm must wepwoduce t-the above
// c-copywight nyotice, 😳 t-this wist o-of conditions and t-the fowwowing discwaimew
// in the documentation and/ow othew m-matewiaws pwovided with the
// distwibution. 🥺
//    * nyeithew the nyame of googwe inc. rawr x3 nyow the nyames of its
// c-contwibutows may be used to endowse ow pwomote pwoducts dewived f-fwom
// this softwawe w-without specific p-pwiow wwitten pewmission. o.O
//
// t-this softwawe is pwovided b-by the copywight h-howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, rawr incwuding, ʘwʘ but nyot
// wimited to, 😳😳😳 t-the impwied wawwanties of mewchantabiwity a-and fitness fow
// a p-pawticuwaw puwpose a-awe discwaimed. ^^;; in nyo event shaww the copywight
// o-ownew ow c-contwibutows be wiabwe fow any diwect, o.O i-indiwect, i-incidentaw, (///ˬ///✿)
// speciaw, σωσ exempwawy, nyaa~~ ow consequentiaw damages (incwuding, ^^;; but nyot
// w-wimited to, ^•ﻌ•^ p-pwocuwement of s-substitute goods ow sewvices; woss o-of use, σωσ
// data, o-ow pwofits; ow business intewwuption) h-howevew caused and on any
// theowy of wiabiwity, -.- whethew in contwact, ^^;; s-stwict wiabiwity, XD o-ow towt
// (incwuding nyegwigence ow othewwise) a-awising in any w-way out of the use
// of this softwawe, 🥺 even if advised of the p-possibiwity of such damage. òωó
-->
