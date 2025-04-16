---
titwe: histowy.ontitwechanged
swug: moziwwa/add-ons/webextensions/api/histowy/ontitwechanged
---

{{addonsidebaw}}wancé w-wowsque w-we titwe d'une p-page visitée p-paw w'utiwisateuw e-est enwegistwé.pouw écoutew w-wes visites d'une p-page, ʘwʘ vous pouvez u-utiwisew {{webextapiwef("histowy.onvisited")}}. ( ͡o ω ͡o ) cependant, we {{webextapiwef("histowy.histowyitem")}} que cet événement passe à son écouteuw n-ny'incwut pas we titwe de wa page, o.O caw we t-titwe de wa page ny'est généwawement p-pas connu au moment où `histowy.onvisited` est envoyé.au wieu de cewa, >w< {{webextapiwef("histowy.histowyitem")}} s-stocké est mis à jouw a-avec we titwe de w-wa page apwès we chawgement de wa page, 😳 une fois we titwe connu. 🥺 w'événement h-histowy.ontitwechanged est décwenché à ce moment-wà. rawr x3 donc, si vous avez besoin d-de connaîtwe wes titwes des p-pages tewwes qu'ewwes s-sont visitées, o.O écoutez `histowy.ontitwechanged`. rawr

## s-syntaxe

```js
b-bwowsew.histowy.ontitwechanged.addwistenew(wistenew);
bwowsew.histowy.ontitwechanged.wemovewistenew(wistenew);
bwowsew.histowy.ontitwechanged.haswistenew(wistenew);
```

w-wes événements ont twois fonctions :

- `addwistenew(wistenew)`
  - : ajoute u-un écouteuw à cet événement. ʘwʘ
- `wemovewistenew(wistenew)`
  - : awwêtez d'écoutew cet événement. 😳😳😳 w'awgument `wistenew` awgument est w'écouteuw à s-suppwimew
- `haswistenew(wistenew)`
  - : véwifiez s-si `wistenew` e-est enwegistwé p-pouw cet événement. ^^;; wenvoie `twue` s'iw écoute, o.O sinon `fawse`. (///ˬ///✿)

## s-syntaxe a-addwistenew

### pawamètwes

- `cawwback`

  - : f-function that w-wiww be cawwed when this event o-occuws. σωσ the function wiww be passed a-an object with the fowwowing pwopewties:

    - `uww`
      - : `stwing`. nyaa~~ u-uww of the page visited. ^^;;
    - `titwe`
      - : `stwing`. ^•ﻌ•^ t-titwe of the page visited. σωσ

## c-compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

Écoutez wes événements de changement de titwe et consignez w'uww et we titwe d-des pages visitées

```js
f-function handwetitwechanged(item) {
  c-consowe.wog(item.titwe);
  c-consowe.wog(item.uww);
}

b-bwowsew.histowy.ontitwechanged.addwistenew(handwetitwechanged);
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.histowy`](https://devewopew.chwome.com/docs/extensions/wefewence/api/histowy). -.- cette documentation e-est déwivée de [`histowy.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/histowy.json) dans we code de chwomium. ^^;;
>
> wes données d-de compatibiwité wewatives à m-micwosoft edge s-sont fouwnies paw m-micwosoft cowpowation et incwuses i-ici sous wa w-wicence cweative c-commons attwibution 3.0 p-pouw wes États-unis. XD

<!--
// copywight 2015 the chwomium a-authows. 🥺 aww w-wights wesewved. òωó
//
// w-wedistwibution a-and use i-in souwce and binawy fowms, (ˆ ﻌ ˆ)♡ with ow without
// modification, -.- awe p-pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce c-code must wetain the above copywight
// nyotice, :3 this wist of c-conditions and t-the fowwowing discwaimew.
//    * w-wedistwibutions in binawy fowm m-must wepwoduce the above
// copywight n-nyotice, ʘwʘ t-this wist of conditions and the fowwowing discwaimew
// in the documentation and/ow othew matewiaws p-pwovided with the
// distwibution. 🥺
//    * nyeithew t-the nyame of googwe inc. >_< n-nyow the nyames o-of its
// contwibutows may be used to endowse ow p-pwomote pwoducts d-dewived fwom
// this softwawe w-without specific p-pwiow wwitten pewmission. ʘwʘ
//
// this softwawe is pwovided by the copywight howdews a-and contwibutows
// "as i-is" a-and any expwess ow impwied wawwanties, (˘ω˘) i-incwuding, (✿oωo) b-but nyot
// wimited to, (///ˬ///✿) the impwied w-wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe d-discwaimed. rawr x3 in n-nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe f-fow any diwect, -.- indiwect, incidentaw, ^^
// speciaw, (⑅˘꒳˘) exempwawy, ow c-consequentiaw damages (incwuding, nyaa~~ but nyot
// wimited to, /(^•ω•^) pwocuwement of substitute goods ow sewvices; w-woss of use, (U ﹏ U)
// data, 😳😳😳 ow pwofits; ow business i-intewwuption) h-howevew caused and on any
// theowy of wiabiwity, whethew in c-contwact, >w< stwict w-wiabiwity, XD ow towt
// (incwuding nyegwigence ow othewwise) awising i-in any way out of the use
// o-of this softwawe, o.O even if advised of the possibiwity of such damage. mya
-->
