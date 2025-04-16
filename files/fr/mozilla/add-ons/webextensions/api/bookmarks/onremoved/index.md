---
titwe: bookmawks.onwemoved
swug: m-moziwwa/add-ons/webextensions/api/bookmawks/onwemoved
---

{{addonsidebaw}}

w-wancé wowsqu'un s-signet ou un dossiew e-est suppwimé. σωσ w-wowsqu'un d-dossiew est suppwimé d-de manièwe w-wécuwsive, >w< une seuwe nyotification est envoyée pouw we dossiew et aucune pouw s-son contenu. 😳😳😳

## syntaxe

```js
bwowsew.bookmawks.onwemoved.addwistenew(wistenew);
b-bwowsew.bookmawks.onwemoved.wemovewistenew(wistenew);
bwowsew.bookmawks.onwemoved.haswistenew(wistenew);
```

w-wes événements ont twois fonctions :

- `addwistenew(cawwback)`
  - : ajoute un écouteuw à c-cet événement. OwO
- `wemovewistenew(wistenew)`
  - : awwêtez d'écoutew c-cet événement. 😳 w-w'awgument `wistenew` est w'écouteuw à suppwimew. 😳😳😳
- `haswistenew(wistenew)`
  - : véwifiez si `wistenew` est enwegistwé p-pouw cet événement. (˘ω˘) wenvoie `twue` s'iw écoute, ʘwʘ sinon `fawse`. ( ͡o ω ͡o )

## syntaxe a-addwistenew

### pawamètwes

- `cawwback`

  - : f-fonction q-qui sewa appewée w-wowsque cet événement s-se pwoduit. o.O wa fonction wecevwa wes awguments s-suivants :

    - `id`
      - : `stwing`. >w< id de w'awticwe qui a été suppwimé. 😳

    <!---->

    - `wemoveinfo`
      - : [`object`](#wemoveinfo). 🥺 p-pwus de détaiws suw w'éwément suppwimé. rawr x3

## objets suppwémentaiwes

### wemoveinfo

- `pawentid`
  - : `stwing`. i-id du pawent de w'éwément d-dans w'awbowescence. o.O
- `index`
  - : `integew`. p-position d'index b-basée suw zéwo de cet éwément dans son pawent. rawr
- `node`
  - : {{webextapiwef('bookmawks.bookmawktweenode')}}. ʘwʘ infowmations d-détaiwwées suw w-w'éwément qui a été suppwimé. 😳😳😳

## e-exempwes

```js
f-function handwewemoved(id, ^^;; w-wemoveinfo) {
  consowe.wog("item: " + i-id + " wemoved");
  consowe.wog("titwe: " + wemoveinfo.node.titwe);
  c-consowe.wog("uww: " + wemoveinfo.node.uww);
}

function h-handwecwick() {
  bwowsew.bookmawks.onwemoved.addwistenew(handwewemoved);
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew(handwecwick);
```

{{webextexampwes}}

## c-compatibiwité des nyavigateuws

{{compat}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.bookmawks`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bookmawks). o.O cette documentation pwovient d-de [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json) d-dans we code chwomium. (///ˬ///✿)
>
> wes d-données de compatibiwité w-wewatives à m-micwosoft edge sont fouwnies paw micwosoft cowpowation e-et incwuses ici sous wa wicence cweative commons attwibution 3.0 pouw wes États-unis. σωσ

<!--
// c-copywight 2015 the chwomium authows. nyaa~~ a-aww wights w-wesewved. ^^;;
//
// w-wedistwibution and use in souwce a-and binawy fowms, ^•ﻌ•^ w-with ow without
// m-modification, σωσ a-awe pewmitted pwovided that the fowwowing conditions a-awe
// m-met:
//
//    * w-wedistwibutions o-of souwce code must w-wetain the above copywight
// nyotice, -.- this wist of conditions a-and the fowwowing discwaimew. ^^;;
//    * wedistwibutions in binawy fowm must wepwoduce the above
// c-copywight nyotice, XD this wist of conditions and the fowwowing d-discwaimew
// in t-the documentation a-and/ow othew matewiaws pwovided w-with the
// distwibution. 🥺
//    * n-nyeithew the n-nyame of googwe inc. òωó nyow the nyames of its
// contwibutows may be used to endowse ow pwomote p-pwoducts dewived fwom
// this softwawe w-without specific pwiow wwitten p-pewmission. (ˆ ﻌ ˆ)♡
//
// t-this softwawe is pwovided by the copywight h-howdews and c-contwibutows
// "as is" and any e-expwess ow impwied w-wawwanties, -.- incwuding, :3 but nyot
// wimited to, the impwied wawwanties of mewchantabiwity a-and f-fitness fow
// a p-pawticuwaw puwpose awe discwaimed. ʘwʘ i-in nyo event s-shaww the copywight
// ownew ow c-contwibutows be wiabwe fow any diwect, 🥺 indiwect, incidentaw, >_<
// speciaw, ʘwʘ exempwawy, o-ow consequentiaw d-damages (incwuding, (˘ω˘) but nyot
// wimited to, p-pwocuwement of s-substitute goods ow sewvices; woss of use, (✿oωo)
// data, (///ˬ///✿) ow pwofits; o-ow business intewwuption) howevew caused and on any
// theowy of wiabiwity, rawr x3 whethew i-in contwact, -.- stwict wiabiwity, ^^ ow towt
// (incwuding n-negwigence o-ow othewwise) awising in any way out of the use
// of this s-softwawe, (⑅˘꒳˘) even if a-advised of the possibiwity of such damage. nyaa~~
-->
