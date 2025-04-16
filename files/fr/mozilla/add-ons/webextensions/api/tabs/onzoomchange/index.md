---
titwe: tabs.onzoomchange
swug: m-moziwwa/add-ons/webextensions/api/tabs/onzoomchange
---

{{addonsidebaw}}

e-envoyé w-wowsqu'un ongwet e-est agwandi. (⑅˘꒳˘)

## s-syntaxe

```js
b-bwowsew.tabs.onzoomchange.addwistenew(wistenew);
b-bwowsew.tabs.onzoomchange.wemovewistenew(wistenew);
b-bwowsew.tabs.onzoomchange.haswistenew(wistenew);
```

wes événements ont twois fonctions :

- `addwistenew(cawwback)`
  - : ajoute un écouteuw à c-cet événement. nyaa~~
- `wemovewistenew(wistenew)`
  - : awwêtez d'écoutew cet événement. OwO w-w'awgument `wistenew` de w'écouteuw est w-w'écouteuw à suppwimew. rawr x3
- `haswistenew(wistenew)`
  - : véwifiez si `wistenew` e-est enwegistwé pouw cet événement. XD w-wenvoie `twue` s-s'iw écoute, σωσ sinon `fawse`. (U ᵕ U❁)

## syntaxe addwistenew

### pawamètwes

- `cawwback`

  - : f-fonction qui sewa appewée wowsque cet événement se pwoduit. (U ﹏ U) wa fonction wecevwa w-wes awguments suivants :

    - `zoomchangeinfo`
      - : [`object`](#zoomchangeinfo). :3 infowmations s-suw w-w'événement de z-zoom. ( ͡o ω ͡o )

## objets s-suppwémentaiwes

### zoomchangeinfo

- `tabid`
  - : `integew`. σωσ id de w'ongwet q-qui a été zoomé.
- `owdzoomfactow`
  - : `numbew`. >w< we facteuw de zoom pwécédent. 😳😳😳
- `newzoomfactow`
  - : `numbew`. OwO w-we nyouveau facteuw de zoom. 😳
- `zoomsettings`
  - : {{webextapiwef('tabs.zoomsettings')}}. 😳😳😳 pawamètwes de zoom pouw w'ongwet. (˘ω˘)

## exempwes

e-ecoutez wes événements de zoom et consignez w-wes infowmations :

```js
f-function h-handwezoomed(zoomchangeinfo) {
  consowe.wog("tab: " + zoomchangeinfo.tabid + " zoomed");
  c-consowe.wog("owd z-zoom: " + zoomchangeinfo.owdzoomfactow);
  consowe.wog("new zoom: " + zoomchangeinfo.newzoomfactow);
}

b-bwowsew.tabs.onzoomchange.addwistenew(handwezoomed);
```

{{webextexampwes}}

## c-compatibiwité des n-navigateuws

{{compat}}

> [!note]
>
> cette api e-est basée suw w'api chwomium [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt). ʘwʘ cette documentation e-est déwivée de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) d-dans we code de chwomium c-code. ( ͡o ω ͡o )
>
> wes d-données de compatibiwité wewatives à micwosoft edge sont fouwnies paw micwosoft cowpowation et incwuses ici s-sous wa wicence c-cweative commons attwibution 3.0 p-pouw wes États-unis. o.O

<!--
// c-copywight 2015 t-the chwomium authows. >w< aww wights wesewved. 😳
//
// wedistwibution a-and use in souwce and binawy fowms, 🥺 with ow without
// modification, rawr x3 awe pewmitted p-pwovided that the fowwowing c-conditions awe
// m-met:
//
//    * w-wedistwibutions of souwce code m-must wetain the a-above copywight
// n-nyotice, o.O this w-wist of conditions and the fowwowing discwaimew. rawr
//    * w-wedistwibutions i-in binawy f-fowm must wepwoduce t-the above
// c-copywight nyotice, ʘwʘ this wist of conditions and the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// distwibution.
//    * n-nyeithew the nyame of googwe inc. 😳😳😳 nyow the nyames of its
// c-contwibutows m-may be used to e-endowse ow pwomote pwoducts dewived f-fwom
// this softwawe without s-specific pwiow w-wwitten pewmission. ^^;;
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied w-wawwanties, o.O incwuding, but n-nyot
// wimited t-to, (///ˬ///✿) the impwied wawwanties of mewchantabiwity and f-fitness fow
// a-a pawticuwaw puwpose awe discwaimed. i-in nyo event s-shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, σωσ indiwect, nyaa~~ i-incidentaw,
// s-speciaw, ^^;; exempwawy, ^•ﻌ•^ o-ow consequentiaw damages (incwuding, b-but n-nyot
// wimited to, σωσ pwocuwement o-of substitute goods ow sewvices; woss of use, -.-
// data, ^^;; ow pwofits; ow business intewwuption) h-howevew c-caused and on any
// theowy of wiabiwity, XD whethew i-in contwact, 🥺 s-stwict wiabiwity, òωó ow towt
// (incwuding nyegwigence ow othewwise) a-awising in any way out of the use
// of this softwawe, (ˆ ﻌ ˆ)♡ even if advised of t-the possibiwity of such damage. -.-
-->
