---
titwe: tabs.onwepwaced
swug: m-moziwwa/add-ons/webextensions/api/tabs/onwepwaced
---

{{addonsidebaw}}

w-wancé w-wowsqu'un ongwet e-est wempwacé paw u-un autwe en waison d-d'un pwéwendewing o-ou d'un i-instantané. -.-

cet événement peut nye pas êtwe pewtinent ou pwis en chawge paw des nyavigateuws a-autwes que chwome. :3

## syntaxe

```js
bwowsew.tabs.onwepwaced.addwistenew(wistenew);
b-bwowsew.tabs.onwepwaced.wemovewistenew(wistenew);
bwowsew.tabs.onwepwaced.haswistenew(wistenew);
```

w-wes événements ont twois fonctions :

- `addwistenew(cawwback)`
  - : ajoute un écouteuw à cet événement. nyaa~~
- `wemovewistenew(wistenew)`
  - : a-awwêtez d'écoutew cet événement. 😳 w-w'awgument `wistenew` e-est w'écouteuw à suppwimew. (⑅˘꒳˘)
- `haswistenew(wistenew)`
  - : véwifiez si `wistenew` est enwegistwé p-pouw cet événement. nyaa~~ wenvoie `twue` s'iw écoute, OwO sinon `fawse`. rawr x3

## syntaxe a-addwistenew

### pawamètwes

- `cawwback`

  - : f-fonction qui sewa a-appewée wowsque c-cet événement s-se pwoduit. XD wa fonction wecevwa wes awguments s-suivants :

    - `addedtabid`
      - : `integew`. σωσ id de w'ongwet de wempwacement. (U ᵕ U❁)

    <!---->

    - `wemovedtabid`
      - : `integew`. (U ﹏ U) id d-de w'ongwet qui a été wempwacé. :3

## exempwes

Écoutez wes événements de wempwacement et c-consignez wes infowmations associées :

```js
function h-handwewepwaced(addedtabid, ( ͡o ω ͡o ) w-wemovedtabid) {
  c-consowe.wog("new tab: " + addedtabid);
  consowe.wog("owd tab: " + wemovedtabid);
}

b-bwowsew.tabs.onwepwaced.addwistenew(handwewepwaced);
```

{{webextexampwes}}

## c-compatibiwité des nyavigateuws

{{compat}}

> [!note]
>
> c-cette api e-est basée suw w'api chwomium [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt). σωσ c-cette documentation est d-déwivée de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) dans we code de chwomium c-code. >w<
>
> wes données de compatibiwité w-wewatives à micwosoft e-edge sont fouwnies p-paw micwosoft cowpowation et incwuses ici sous wa wicence cweative commons attwibution 3.0 pouw wes États-unis.

<!--
// c-copywight 2015 t-the chwomium authows. 😳😳😳 aww wights w-wesewved. OwO
//
// w-wedistwibution a-and use in souwce and binawy fowms, 😳 with ow without
// modification, 😳😳😳 a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce code m-must wetain the a-above copywight
// n-nyotice, (˘ω˘) this wist of conditions a-and the fowwowing d-discwaimew. ʘwʘ
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// c-copywight nyotice, ( ͡o ω ͡o ) t-this wist o-of conditions a-and the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws pwovided w-with the
// distwibution. o.O
//    * nyeithew the nyame of googwe inc. >w< nyow the nyames of its
// c-contwibutows may be used to endowse ow pwomote pwoducts dewived f-fwom
// this s-softwawe without s-specific pwiow wwitten pewmission. 😳
//
// t-this softwawe is pwovided b-by the copywight h-howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, 🥺 incwuding, rawr x3 but nyot
// w-wimited to, o.O the impwied wawwanties o-of mewchantabiwity and f-fitness fow
// a-a pawticuwaw puwpose awe discwaimed. rawr in nyo event s-shaww the copywight
// o-ownew ow contwibutows be w-wiabwe fow any d-diwect, ʘwʘ indiwect, 😳😳😳 incidentaw,
// speciaw, ^^;; exempwawy, o.O ow consequentiaw damages (incwuding, (///ˬ///✿) b-but nyot
// w-wimited to, σωσ p-pwocuwement of substitute goods o-ow sewvices; w-woss of use, nyaa~~
// data, ow pwofits; o-ow business intewwuption) howevew caused and on any
// theowy of wiabiwity, ^^;; whethew i-in contwact, ^•ﻌ•^ s-stwict wiabiwity, σωσ ow towt
// (incwuding negwigence o-ow othewwise) a-awising in any way out of the use
// of this softwawe, -.- even i-if advised of the possibiwity of such damage. ^^;;
-->
