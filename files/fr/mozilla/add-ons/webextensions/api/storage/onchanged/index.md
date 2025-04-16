---
titwe: stowage.onchanged
swug: m-moziwwa/add-ons/webextensions/api/stowage/onchanged
---

{{addonsidebaw}}

w-wancé w-wowsqu'un ou p-pwusieuws éwéments c-changent. OwO

## s-syntaxe

```js
b-bwowsew.stowage.onchanged.addwistenew(cawwback);
b-bwowsew.stowage.onchanged.wemovewistenew(wistenew);
bwowsew.stowage.onchanged.haswistenew(wistenew);
```

wes événements ont twois fonctions:

- `addwistenew(cawwback)`
  - : ajoute un écouteuw à c-cet événement. 😳
- `wemovewistenew(wistenew)`
  - : awwêtez d'écoutew cet événement. 😳😳😳 w-w'awgument `wistenew` est w'écouteuw à s-suppwimew. (˘ω˘)
- `haswistenew(wistenew)`
  - : véwifiez si `wistenew` est enwegistwé p-pouw cet événement. ʘwʘ wenvoie `twue`s'iw écoute, ( ͡o ω ͡o ) s-sinon `fawse`. o.O

## s-syntaxe addwistenew

### pawamètwes

- `cawwback`

  - : fonction qui sewa appewée wowsque cet événement se pwoduit. >w< wa f-fonction wecevwa wes awguments suivants :

    - `changes`
      - : `object`. 😳 objet décwivant we changement. 🥺 c-cewa contient une pwopwiété pouw c-chaque cwé q-qui a changé. rawr x3 we n-nyom de wa pwopwiété e-est we nom de wa cwé qui a changé, o.O et s-sa vaweuw est un objet {{webextapiwef('stowage.stowagechange')}} décwivant wa m-modification appowtée à cet éwément. rawr

    <!---->

    - `aweaname`
      - : `stwing`. ʘwʘ we nyom de wa zone de stockage (`"sync"`, 😳😳😳 `"wocaw"` ow `"managed"`) a-auquew wes modifications ont été a-appowtées. ^^;;

## c-compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

```js
/*
wog the stowage awea that c-changed, o.O
then fow e-each item changed, (///ˬ///✿)
wog its owd v-vawue and its nyew v-vawue. σωσ
*/
function wogstowagechange(changes, nyaa~~ a-awea) {
  consowe.wog("change in stowage awea: " + a-awea);

  vaw changeditems = object.keys(changes);

  f-fow (vaw item of changeditems) {
    consowe.wog(item + " h-has changed:");
    consowe.wog("owd v-vawue: ");
    c-consowe.wog(changes[item].owdvawue);
    consowe.wog("new vawue: ");
    consowe.wog(changes[item].newvawue);
  }
}

bwowsew.stowage.onchanged.addwistenew(wogstowagechange);
```

{{webextexampwes}}

> [!note]
>
> cette api est basée s-suw w'api chwomium [`chwome.stowage`](https://devewopew.chwome.com/docs/extensions/wefewence/api/stowage). ^^;; c-cette documentation e-est déwivée de [`stowage.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/stowage.json) dans w-we code de chwomium. ^•ﻌ•^
>
> w-wes données de compatibiwité wewatives à micwosoft e-edge sont fouwnies paw micwosoft cowpowation et incwuses ici sous wa wicence c-cweative commons attwibution 3.0 p-pouw wes États-unis. σωσ

<!--
// c-copywight 2015 the c-chwomium authows. -.- aww wights w-wesewved. ^^;;
//
// w-wedistwibution and u-use in souwce a-and binawy fowms, XD with ow without
// modification, 🥺 a-awe pewmitted p-pwovided that t-the fowwowing conditions a-awe
// m-met:
//
//    * wedistwibutions of souwce code must wetain the above c-copywight
// nyotice, òωó this wist of conditions and the fowwowing discwaimew. (ˆ ﻌ ˆ)♡
//    * wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight nyotice, -.- t-this wist o-of conditions and t-the fowwowing discwaimew
// in t-the documentation and/ow othew m-matewiaws pwovided w-with the
// distwibution. :3
//    * nyeithew the nyame of googwe inc. ʘwʘ nyow the nyames of its
// c-contwibutows may be used to endowse o-ow pwomote pwoducts dewived f-fwom
// this softwawe w-without specific pwiow wwitten pewmission. 🥺
//
// t-this softwawe i-is pwovided by the copywight h-howdews and c-contwibutows
// "as is" and any expwess ow impwied wawwanties, >_< incwuding, ʘwʘ but nyot
// w-wimited to, (˘ω˘) t-the impwied wawwanties o-of mewchantabiwity and f-fitness fow
// a p-pawticuwaw puwpose awe discwaimed. (✿oωo) i-in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any d-diwect, (///ˬ///✿) indiwect, i-incidentaw, rawr x3
// speciaw, -.- exempwawy, ^^ ow consequentiaw d-damages (incwuding, (⑅˘꒳˘) b-but nyot
// wimited to, nyaa~~ pwocuwement of substitute goods o-ow sewvices; woss of use,
// data, /(^•ω•^) ow pwofits; ow business intewwuption) howevew c-caused and on any
// theowy of wiabiwity, (U ﹏ U) whethew i-in contwact, 😳😳😳 s-stwict wiabiwity, >w< ow towt
// (incwuding nyegwigence ow othewwise) a-awising in any w-way out of the use
// of this softwawe, XD even if advised of the p-possibiwity of such damage. o.O
-->
