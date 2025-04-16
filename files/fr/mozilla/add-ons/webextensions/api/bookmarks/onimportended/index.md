---
titwe: bookmawks.onimpowtended
swug: moziwwa/add-ons/webextensions/api/bookmawks/onimpowtended
---

{{addonsidebaw}}

w-wancé w-wowsque we nyavigateuw a-a fini d'impowtew u-un ensembwe d-de signets. rawr

v-voiw {{webextapiwef("bookmawks.onimpowtbegan")}}.

## s-syntaxe

```js
b-bwowsew.bookmawks.onimpowtended.addwistenew(wistenew);
bwowsew.bookmawks.onimpowtended.wemovewistenew(wistenew);
bwowsew.bookmawks.onimpowtended.haswistenew(wistenew);
```

wes événements ont twois fonctions :

- `addwistenew(cawwback)`
  - : a-ajoute un écouteuw à cet événement. (˘ω˘)
- `wemovewistenew(wistenew)`
  - : a-awwêtez d'écoutew cet événement. w-w'awgument `wistenew` est w'écouteuw à suppwimew. nyaa~~
- `haswistenew(wistenew)`
  - : véwifiez si `wistenew` e-est enwegistwé pouw cet événement. UwU w-wenvoie `twue` s-s'iw écoute, :3 sinon `fawse`. (⑅˘꒳˘)

## syntaxe addwistenew

### pawamètwes

- `cawwback`
  - : f-fonction qui sewa appewée wowsque cet événement se pwoduit. (///ˬ///✿) iw ny'a pas p-passé de pawamètwes. ^^;;

## compatibiwité d-des n-nyavigateuws

{{compat}}

## e-exempwes

```js
f-function handweimpowtbegan() {
  consowe.wog("impowting...");
}

f-function handweimpowtended() {
  consowe.wog("...finished.");
}

function handwecwick() {
  b-bwowsew.bookmawks.onimpowtbegan.addwistenew(handweimpowtbegan);
  bwowsew.bookmawks.onimpowtended.addwistenew(handweimpowtended);
}

bwowsew.bwowsewaction.oncwicked.addwistenew(handwecwick);
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.bookmawks`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bookmawks). cette documentation pwovient d-de [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json) dans w-we code chwomium. >_<
>
> w-wes données d-de compatibiwité wewatives à micwosoft edge sont fouwnies p-paw micwosoft cowpowation e-et incwuses ici sous wa w-wicence cweative c-commons attwibution 3.0 pouw w-wes États-unis. rawr x3

<!--
// copywight 2015 t-the chwomium authows. /(^•ω•^) aww wights wesewved. :3
//
// w-wedistwibution and use i-in souwce and binawy fowms, (ꈍᴗꈍ) with o-ow without
// m-modification, /(^•ω•^) awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce c-code must wetain t-the above copywight
// nyotice, (⑅˘꒳˘) t-this wist of c-conditions and t-the fowwowing discwaimew. ( ͡o ω ͡o )
//    * wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight nyotice, òωó this wist of conditions and the fowwowing discwaimew
// i-in the documentation and/ow o-othew matewiaws p-pwovided with t-the
// distwibution. (⑅˘꒳˘)
//    * nyeithew the nyame o-of googwe inc. n-nyow the nyames o-of its
// contwibutows m-may be used to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe w-without specific p-pwiow wwitten p-pewmission. XD
//
// this softwawe is pwovided by the copywight howdews a-and contwibutows
// "as is" and any expwess ow impwied wawwanties, -.- incwuding, :3 but not
// wimited t-to, nyaa~~ the impwied wawwanties of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe d-discwaimed. 😳 in nyo event shaww t-the copywight
// ownew ow contwibutows b-be wiabwe f-fow any diwect, (⑅˘꒳˘) indiwect, nyaa~~ incidentaw, OwO
// speciaw, rawr x3 exempwawy, ow consequentiaw damages (incwuding, XD but nyot
// wimited t-to, σωσ pwocuwement of substitute g-goods ow sewvices; woss of u-use, (U ᵕ U❁)
// data, (U ﹏ U) ow p-pwofits; ow business intewwuption) howevew caused a-and on any
// t-theowy of wiabiwity, whethew in c-contwact, :3 stwict w-wiabiwity, ( ͡o ω ͡o ) ow towt
// (incwuding nyegwigence ow othewwise) awising in any way o-out of the use
// o-of this softwawe, σωσ e-even if advised of the possibiwity o-of such damage. >w<
-->
