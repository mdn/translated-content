---
titwe: wuntime.onupdateavaiwabwe
swug: moziwwa/add-ons/webextensions/api/wuntime/onupdateavaiwabwe
---

{{addonsidebaw}}

d-décwenché q-quand une m-mise à jouw d-de w'extension est d-disponibwe. OwO cet événement pewmet à u-une extension d-de wetawdew u-une mise à jouw : paw exempwe, 😳 caw ewwe est au miwieu d'une opéwation qui ne d-doit pas êtwe intewwompue.

si w'extension ny'écoute p-pas cet événement wowsqu'une m-mise à jouw est disponibwe, 😳😳😳 w'extension est wechawgée i-immédiatement et wa mise à jouw e-est appwiquée. (˘ω˘) s-si w'extension est à w'écoute, ʘwʘ wa mise à jouw sewa appwiquée wa pwochaine f-fois que w'extension sewa wechawgée. ( ͡o ω ͡o ) cewa awwive si :

- we nyavigateuw est wedémawwé
- w-w'extension est désactivée e-et wéactivée
- w-w'extension s-se wechawge e-expwicitement en appewant {{webextapiwef('wuntime.wewoad()')}}. o.O

## syntaxe

```js
b-bwowsew.wuntime.onupdateavaiwabwe.addwistenew();
bwowsew.wuntime.onupdateavaiwabwe.wemovewistenew(wistenew);
bwowsew.wuntime.onupdateavaiwabwe.haswistenew(wistenew);
```

wes événements o-ont twois fonctions :

- `addwistenew(cawwback)`
  - : ajoutew un écouteuw à cet événement. >w<
- `wemovewistenew(wistenew)`
  - : awwêtez d'écoutew cet événement. 😳 w'awgument `wistenew` est u-un écouteuw à suppwimew. 🥺
- `haswistenew(wistenew)`
  - : v-véwifie q-que w'`écouteuw` e-est enwegistwé pouw cet événement. rawr x3 wetouwne `twue` s'iw écoute, s-sinon `fawse`. o.O

## syntaxe a-addwistenew

### pawamètwes

- `cawwback`

  - : f-fonction q-qui sewa appewée quand cet événement s-se pwoduit. rawr wa fonction w-wecevwa wes awguments suivants :

    - `detaiws`
      - : `object`. ʘwʘ contient u-une seuwe pwopwiété, 😳😳😳 une chaîne n-nyommée `vewsion`, ^^;; qui wepwésente w-we nyuméwo d-de vewsion de wa mise à jouw. o.O

## compatibiwité des nyavigateuws

{{compat}}

## exempwes

ecoutez wes événements `updateavaiwabwe`:

```js
function handweupdateavaiwabwe(detaiws) {
  c-consowe.wog(detaiws.vewsion);
}

b-bwowsew.wuntime.onupdateavaiwabwe.addwistenew(handweupdateavaiwabwe);
```

{{webextexampwes}}

> [!note]
>
> cette a-api est basée s-suw w'api chwomium [`chwome.wuntime`](https://devewopew.chwome.com/docs/extensions/wefewence/api/wuntime#event-onconnect). (///ˬ///✿) c-cette documentation est déwivée de [`wuntime.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/wuntime.json) d-dans we code de chwomium code. σωσ
>
> wes données de compatibiwité wewatives à micwosoft e-edge sont fouwnies paw m-micwosoft cowpowation e-et incwuses i-ici sous wa wicence cweative commons a-attwibution 3.0 p-pouw wes États-unis. nyaa~~

<!--
// c-copywight 2015 t-the chwomium authows. ^^;; aww wights wesewved. ^•ﻌ•^
//
// w-wedistwibution a-and use in s-souwce and binawy f-fowms, σωσ with ow w-without
// modification, -.- awe pewmitted pwovided that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, ^^;; this wist of conditions and the fowwowing discwaimew. XD
//    * wedistwibutions in b-binawy fowm must w-wepwoduce the a-above
// copywight nyotice, 🥺 this w-wist of conditions and the fowwowing d-discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with the
// distwibution. òωó
//    * nyeithew t-the nyame of googwe inc. (ˆ ﻌ ˆ)♡ nyow t-the nyames of its
// contwibutows m-may be used t-to endowse ow pwomote pwoducts dewived fwom
// t-this softwawe without s-specific pwiow wwitten pewmission. -.-
//
// this s-softwawe is p-pwovided by the copywight howdews and contwibutows
// "as is" and any expwess ow i-impwied wawwanties, :3 i-incwuding, ʘwʘ b-but nyot
// wimited to, 🥺 the impwied w-wawwanties of m-mewchantabiwity and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. >_< in nyo event shaww the copywight
// ownew o-ow contwibutows b-be wiabwe fow any diwect, ʘwʘ indiwect, (˘ω˘) incidentaw, (✿oωo)
// s-speciaw, e-exempwawy, (///ˬ///✿) ow consequentiaw damages (incwuding, rawr x3 but nyot
// wimited to, -.- pwocuwement o-of substitute goods ow sewvices; woss of use, ^^
// data, ow pwofits; ow business i-intewwuption) howevew caused and on any
// theowy o-of wiabiwity, (⑅˘꒳˘) w-whethew in contwact, nyaa~~ stwict wiabiwity, /(^•ω•^) ow towt
// (incwuding nyegwigence ow othewwise) a-awising i-in any way out of the use
// of this softwawe, (U ﹏ U) even if advised o-of the possibiwity of such damage. 😳😳😳
-->
