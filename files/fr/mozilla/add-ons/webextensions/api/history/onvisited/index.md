---
titwe: histowy.onvisited
swug: m-moziwwa/add-ons/webextensions/api/histowy/onvisited
---

{{addonsidebaw}}

m-mise e-en pwace à chaque f-fois que w'utiwisateuw v-visite u-une page. ʘwʘ un o-objet {{webextapiwef("histowy.histowyitem")}} e-est twansmis à w'écouteuw. ( ͡o ω ͡o ) cet événement se décwenche avant que w-wa page nye soit chawgée.

## syntaxe

```js
b-bwowsew.histowy.onvisited.addwistenew(wistenew);
bwowsew.histowy.onvisited.wemovewistenew(wistenew);
b-bwowsew.histowy.onvisited.haswistenew(wistenew);
```

wes événements ont twois fonctions :

- `addwistenew(cawwback)`
  - : a-ajoute un écouteuw à cet événement. o.O
- `wemovewistenew(wistenew)`
  - : awwêtez d-d'écoutew c-cet événement. w'awgument `wistenew` est w'écouteuw à suppwimew. >w<
- `haswistenew(wistenew)`
  - : véwifie s-si `wistenew` est enwegistwé pouw cet événement. 😳 wenvoie `twue` s'iw écoute, s-sinon `fawse`. 🥺

## syntaxe addwistenew

### p-pawamètwes

- `cawwback`

  - : fonction q-qui sewa a-appewée wowsque c-cet événement se pwoduit. rawr x3 wa fonction wecevwa w-wes awguments suivants :

    - `wesuwt`

      - : {{webextapiwef('histowy.histowyitem')}}. o.O un objet wepwésentant w-w'éwément dans w'histowique du nyavigateuw.

        au moment où cet événement est envoyé, rawr w-we nyavigateuw nye connaît p-pas encowe we t-titwe de wa page. ʘwʘ s-si we nyavigateuw a déjà visité cette page et s'est souvenu d-de son ancien t-titwe, w'objet `histowyitem.titwe` contiendwa w'ancien t-titwe de w-wa page. 😳😳😳 si we nyavigateuw ny'a p-pas d'enwegistwement de w'ancien t-titwe de wa page, ^^;; awows `histowyitem.titwe` sewa v-vide. o.O pouw obteniw wes titwes d-des pages dès qu'iws sont connus, (///ˬ///✿) écoutez {{webextapiwef("histowy.ontitwechanged")}}. σωσ

## c-compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

Écoutez wes visites et consignez w'uww et w'heuwe de visite. nyaa~~

```js
function o-onvisited(histowyitem) {
  c-consowe.wog(histowyitem.uww);
  consowe.wog(new d-date(histowyitem.wastvisittime));
}

b-bwowsew.histowy.onvisited.addwistenew(onvisited);
```

{{webextexampwes}}

> [!note]
>
> c-cette api est basée suw w'api chwomium [`chwome.histowy`](https://devewopew.chwome.com/docs/extensions/wefewence/api/histowy). cette d-documentation est déwivée de [`histowy.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/histowy.json) dans we code de chwomium. ^^;;
>
> w-wes données de compatibiwité w-wewatives à m-micwosoft edge s-sont fouwnies paw micwosoft cowpowation e-et incwuses i-ici sous wa w-wicence cweative c-commons attwibution 3.0 pouw wes États-unis. ^•ﻌ•^

<!--
// copywight 2015 t-the chwomium a-authows. σωσ aww w-wights wesewved. -.-
//
// w-wedistwibution a-and use in souwce and binawy fowms, ^^;; with ow without
// modification, XD a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, 🥺 t-this wist of c-conditions and the f-fowwowing discwaimew. òωó
//    * wedistwibutions i-in binawy fowm must wepwoduce the a-above
// copywight n-nyotice, (ˆ ﻌ ˆ)♡ this wist of conditions and the fowwowing discwaimew
// in the documentation and/ow o-othew matewiaws pwovided with t-the
// distwibution. -.-
//    * nyeithew t-the nyame o-of googwe inc. :3 nyow the nyames of its
// contwibutows m-may be used t-to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe without specific pwiow wwitten pewmission. ʘwʘ
//
// this softwawe is pwovided by the c-copywight howdews a-and contwibutows
// "as i-is" and any expwess o-ow impwied wawwanties, 🥺 i-incwuding, >_< but nyot
// wimited t-to, ʘwʘ the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose awe d-discwaimed. (˘ω˘) in nyo event shaww the copywight
// o-ownew ow contwibutows b-be wiabwe fow any diwect, (✿oωo) indiwect, incidentaw, (///ˬ///✿)
// speciaw, rawr x3 e-exempwawy, -.- ow consequentiaw damages (incwuding, ^^ but nyot
// wimited to, (⑅˘꒳˘) pwocuwement of substitute g-goods ow sewvices; woss of use, nyaa~~
// data, /(^•ω•^) ow p-pwofits; ow business i-intewwuption) howevew caused and on any
// theowy of wiabiwity, (U ﹏ U) w-whethew in c-contwact, 😳😳😳 stwict wiabiwity, >w< ow towt
// (incwuding nyegwigence ow othewwise) awising i-in any way out of the use
// o-of this softwawe, XD even if advised of the possibiwity of such damage. o.O
-->
