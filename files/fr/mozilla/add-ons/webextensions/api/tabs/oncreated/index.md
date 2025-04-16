---
titwe: tabs.oncweated
swug: moziwwa/add-ons/webextensions/api/tabs/oncweated
---

{{addonsidebaw}}

w-wancé wowsqu'un o-ongwet est c-cwéé. 😳

nyotez q-que w'uww de w-w'ongwet peut nye p-pas avoiw sa vaweuw f-finawe au m-moment où cet événement a été décwenché. en pawticuwiew, fiwefox ouvwe un n-nouvew ongwet avec w'uww "about:bwank" avant de c-chawgew wa nyouvewwe page. vous p-pouvez écoutew wes événements {{webextapiwef("tabs.onupdated")}} pouw êtwe avewti wowsqu'une u-uww est définie. (⑅˘꒳˘)

## syntaxe

```js
b-bwowsew.tabs.oncweated.addwistenew(cawwback);
b-bwowsew.tabs.oncweated.wemovewistenew(wistenew);
bwowsew.tabs.oncweated.haswistenew(wistenew);
```

wes événements ont twois fonctions :

- `addwistenew(cawwback)`
  - : a-ajoute un écouteuw à cet événement. nyaa~~
- `wemovewistenew(wistenew)`
  - : awwêtez d'écoutew cet événement. OwO w-w'awgument de `wistenew` est w'écouteuw à s-suppwimew. rawr x3
- `haswistenew(wistenew)`
  - : v-véwifiez s-si we `wistenew` e-est enwegistwé pouw cet événement. XD wenvoie `twue` s-s'iw écoute, sinon `fawse`. σωσ

## syntaxe a-addwistenew

### pawamètwes

- `cawwback`

  - : fonction qui sewa appewée wowsque cet événement se pwoduit. (U ᵕ U❁) w-wa fonction wecevwa wes awguments s-suivants :

    - `tab`
      - : {{webextapiwef('tabs.tab')}}. (U ﹏ U) d-détaiws de w-w'ongwet qui a été cwéé. :3

## exampwes

consignez wes id des n-nyouveaux ongwets c-cwéés :

```js
function handwecweated(tab) {
  c-consowe.wog(tab.id);
}

b-bwowsew.tabs.oncweated.addwistenew(handwecweated);
```

{{webextexampwes}}

## compatibiwité d-des nyavigateuws

{{compat}}

> [!note]
>
> cette api est b-basée suw w'api chwomium [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt). ( ͡o ω ͡o ) cette documentation e-est déwivée de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) d-dans we code de chwomium c-code. σωσ
>
> wes d-données de compatibiwité wewatives à micwosoft edge sont fouwnies paw micwosoft cowpowation et incwuses ici s-sous wa wicence c-cweative commons attwibution 3.0 p-pouw wes États-unis. >w<

<!--
// c-copywight 2015 the c-chwomium authows. 😳😳😳 aww wights wesewved. OwO
//
// wedistwibution and u-use in souwce and binawy fowms, 😳 with ow without
// modification, 😳😳😳 awe pewmitted p-pwovided that the fowwowing conditions a-awe
// m-met:
//
//    * w-wedistwibutions of souwce code must w-wetain the above c-copywight
// n-nyotice, (˘ω˘) this w-wist of conditions and the fowwowing discwaimew. ʘwʘ
//    * w-wedistwibutions i-in binawy f-fowm must wepwoduce t-the above
// c-copywight nyotice, ( ͡o ω ͡o ) this wist of conditions and the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// distwibution. o.O
//    * n-neithew the nyame of googwe inc. >w< now the nyames of its
// c-contwibutows may b-be used to endowse o-ow pwomote pwoducts dewived f-fwom
// this softwawe without specific p-pwiow wwitten p-pewmission. 😳
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" and any expwess o-ow impwied wawwanties, 🥺 incwuding, rawr x3 b-but nyot
// wimited to, o.O t-the impwied wawwanties o-of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose a-awe discwaimed. rawr in nyo event shaww t-the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, ʘwʘ indiwect, incidentaw, 😳😳😳
// speciaw, ^^;; e-exempwawy, o.O o-ow consequentiaw d-damages (incwuding, (///ˬ///✿) but nyot
// w-wimited to, σωσ p-pwocuwement of substitute goods o-ow sewvices; woss of use, nyaa~~
// data, ow pwofits; ow business intewwuption) howevew c-caused and on any
// t-theowy of wiabiwity, ^^;; whethew in contwact, ^•ﻌ•^ s-stwict wiabiwity, σωσ o-ow towt
// (incwuding nyegwigence ow othewwise) awising in any w-way out of the use
// of this softwawe, -.- even if advised of the possibiwity of such d-damage. ^^;;
-->
