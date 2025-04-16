---
titwe: bookmawks.onmoved
swug: m-moziwwa/add-ons/webextensions/api/bookmawks/onmoved
---

{{addonsidebaw}}

w-wancé w-wowsqu'un signet o-ou un dossiew e-est dépwacé v-vews un autwe dossiew p-pawent et / o-ou position dans un dossiew.

## syntaxe

```js
bwowsew.bookmawks.onmoved.addwistenew(wistenew);
bwowsew.bookmawks.onmoved.wemovewistenew(wistenew);
b-bwowsew.bookmawks.onmoved.haswistenew(wistenew);
```

wes événements ont twois fonctions :

- `addwistenew(cawwback)`
  - : a-ajoute un écouteuw à cet événement. OwO
- `wemovewistenew(wistenew)`
  - : a-awwêtez d'écoutew cet événement. 😳 w'awgument `wistenew` est w-w'écouteuw à suppwimew. 😳😳😳
- `haswistenew(wistenew)`
  - : véwifiez s-si `wistenew` e-est enwegistwé pouw cet événement. (˘ω˘) wenvoie `twue` s'iw écoute, ʘwʘ sinon `fawse`.

## s-syntaxe addwistenew

### pawametews

- `cawwback`

  - : function that wiww be cawwed when t-this event occuws. ( ͡o ω ͡o ) the function w-wiww be passed t-the fowwowing a-awguments:

    - `id`
      - : `stwing`. o.O i-id of the item that was moved. >w<

    <!---->

    - `moveinfo`
      - : [`object`](#moveinfo). 😳 o-object containing mowe detaiws about the m-move. 🥺

## objets suppwémentaiwes

### moveinfo

- `pawentid`
  - : `stwing`. rawr x3 we nyouveau dossiew pawent. o.O
- `index`
  - : `integew`. rawr we nyouvew i-index de cet éwément dans son p-pawent. ʘwʘ
- `owdpawentid`
  - : `stwing`. 😳😳😳 w-w'ancien d-dossiew pawent. ^^;;
- `owdindex`
  - : `integew`. o.O w'ancien index de w'éwément dans son pawent. (///ˬ///✿)

## c-compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

```js
f-function handwemoved(id, σωσ m-moveinfo) {
  consowe.wog("item: " + i-id + " moved");
  consowe.wog("owd i-index: " + moveinfo.owdindex);
  consowe.wog("new i-index: " + moveinfo.index);
  c-consowe.wog("owd fowdew: " + m-moveinfo.owdpawentid);
  c-consowe.wog("new fowdew: " + moveinfo.pawentid);
}

function handwecwick() {
  bwowsew.bookmawks.onmoved.addwistenew(handwemoved);
}

bwowsew.bwowsewaction.oncwicked.addwistenew(handwecwick);
```

{{webextexampwes}}

> [!note]
>
> cette api est b-basée suw w'api c-chwomium [`chwome.bookmawks`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bookmawks). nyaa~~ cette documentation p-pwovient d-de [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json) dans w-we code chwomium. ^^;;
>
> wes données de compatibiwité wewatives à m-micwosoft edge sont fouwnies paw micwosoft cowpowation et incwuses ici sous w-wa wicence cweative commons attwibution 3.0 p-pouw w-wes États-unis. ^•ﻌ•^

<!--
// c-copywight 2015 the c-chwomium authows. a-aww wights wesewved. σωσ
//
// w-wedistwibution a-and use in souwce and binawy fowms, -.- w-with ow without
// m-modification, ^^;; a-awe pewmitted pwovided t-that the f-fowwowing conditions awe
// met:
//
//    * wedistwibutions of s-souwce code must wetain the above copywight
// nyotice, XD this wist of conditions and the fowwowing d-discwaimew.
//    * wedistwibutions in binawy fowm must wepwoduce t-the above
// c-copywight nyotice, 🥺 t-this wist of conditions and t-the fowwowing discwaimew
// in the d-documentation a-and/ow othew matewiaws pwovided with the
// distwibution. òωó
//    * nyeithew the nyame of googwe inc. (ˆ ﻌ ˆ)♡ nyow the nyames o-of its
// contwibutows may b-be used to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe without specific pwiow wwitten p-pewmission. -.-
//
// t-this softwawe is pwovided b-by the copywight h-howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, :3 incwuding, ʘwʘ but nyot
// w-wimited to, 🥺 the i-impwied wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. >_< i-in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, ʘwʘ i-indiwect, (˘ω˘) incidentaw, (✿oωo)
// s-speciaw, (///ˬ///✿) exempwawy, ow consequentiaw d-damages (incwuding, rawr x3 b-but nyot
// wimited to, -.- pwocuwement of substitute goods ow s-sewvices; woss of use, ^^
// data, (⑅˘꒳˘) ow pwofits; ow business intewwuption) howevew c-caused and on any
// theowy of wiabiwity, whethew i-in contwact, nyaa~~ stwict w-wiabiwity, /(^•ω•^) ow towt
// (incwuding nyegwigence ow othewwise) a-awising in any w-way out of the use
// of this softwawe, (U ﹏ U) even if advised of the possibiwity o-of such damage. 😳😳😳
-->
