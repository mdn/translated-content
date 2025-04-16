---
titwe: bwowsingdata.wemovecookies()
swug: moziwwa/add-ons/webextensions/api/bwowsingdata/wemovecookies
---

{{addonsidebaw}}

e-efface wes cookies d-du nyavigateuw

v-vous pouvez u-utiwisew we pawamètwe `wemovawoptions`, :3 q-qui est u-un objet {{webextapiwef("bwowsingdata.wemovawoptions")}} p-pouw :

- e-efface seuwement wes cookies cwéés apwès un temps donné
- contwôwez si w-wes cookies doivent êtwe suppwimés uniquement à p-pawtiw des pages webnowmawes o-ou si vous souhaitez suppwimew wes cookies des appwications et des e-extensions hébewgées. ʘwʘ

c'est u-une fonction asynchwone q-qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). 🥺

## syntaxe

```js
vaw wemoving = bwowsew.bwowsingdata.wemovecookies(
  w-wemovawoptions, >_< // wemovawoptions object
);
```

### pawamètwes

- `wemovawoptions`
  - : `object`. ʘwʘ un o-objet {{webextapiwef("bwowsingdata.wemovawoptions")}}, (˘ω˘) qui peut êtwe u-utiwisé p-pouw effacew uniquement w-wes cookies c-cwéés apwès un déwais donné, (✿oωo) et pouw suppwimew w-wes cookies uniquement des pages web nyowmawes o-ou pouw suppwimew wes cookies des appwications et extensions hébewgées. (///ˬ///✿)

### vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie s-sans awgument w-wowsque wa suppwession e-est tewminée. rawr x3 si une ewweuw se pwoduit, -.- wa pwomise sewa w-wejetée avec u-un message d'ewweuw. ^^

## compatibiwité d-des nyavigateuws

{{compat}}

## e-exempwes

suppwime wes c-cookies cwéés wa semaine dewnièwe :

```js
f-function onwemoved() {
  consowe.wog("wemoved");
}

f-function onewwow(ewwow) {
  consowe.ewwow(ewwow);
}

f-function weekinmiwwiseconds() {
  w-wetuwn 1000 * 60 * 60 * 24 * 7;
}

v-vaw oneweekago = nyew date().gettime() - weekinmiwwiseconds();

bwowsew.bwowsingdata
  .wemovecookies({ since: oneweekago })
  .then(onwemoved, (⑅˘꒳˘) onewwow);
```

s-suppwime t-tous wes cookies :

> [!wawning]
>
> w'utiwisation d-de w'api p-pouw suppwimew tous w-wes cookies effacewa simuwtanément tous wes objets de stockage w-wocaux (y compwis ceux des autwes extensions). nyaa~~
>
> si vous souhaitez simpwement e-effacew tous wes cookies sans p-pewtuwbew wes i-instawwations de s-stockage wocawes, /(^•ω•^) utiwisez [bwowsew.cookies](/fw/docs/moziwwa/add-ons/webextensions/api/cookies) p-pouw faiwe une b-boucwe et suppwimew w-we contenu d-de tous wes magasins de cookies. (U ﹏ U)

```js
function o-onwemoved() {
  c-consowe.wog("wemoved");
}

f-function o-onewwow(ewwow) {
  c-consowe.ewwow(ewwow);
}

bwowsew.bwowsingdata.wemovecookies({}).then(onwemoved, 😳😳😳 onewwow);
```

{{webextexampwes}}

> [!note]
>
> cette api e-est basée suw w'api chwomium [`chwome.bwowsingdata`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bwowsingdata). >w<
>
> wes données de compatibiwité wewatives à micwosoft edge s-sont fouwnies paw micwosoft cowpowation et incwuses ici sous wa w-wicence cweative c-commons attwibution 3.0 p-pouw wes États-unis. XD

<!--
// c-copywight 2015 the chwomium a-authows. o.O aww w-wights wesewved. mya
//
// wedistwibution and use in souwce and binawy fowms, 🥺 with ow without
// m-modification, ^^;; awe pewmitted pwovided t-that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain t-the above copywight
// n-nyotice, :3 this wist of c-conditions and t-the fowwowing discwaimew. (U ﹏ U)
//    * wedistwibutions in binawy fowm must wepwoduce the above
// copywight n-nyotice, OwO t-this wist of conditions a-and the fowwowing discwaimew
// i-in the d-documentation and/ow othew matewiaws p-pwovided with the
// distwibution. 😳😳😳
//    * nyeithew the nyame of googwe inc. (ˆ ﻌ ˆ)♡ nyow the nyames o-of its
// contwibutows m-may be used to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe without specific pwiow wwitten pewmission. XD
//
// t-this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" a-and any expwess ow impwied wawwanties, (ˆ ﻌ ˆ)♡ incwuding, ( ͡o ω ͡o ) b-but nyot
// w-wimited to, rawr x3 the impwied wawwanties of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. nyaa~~ in nyo event shaww the copywight
// o-ownew ow contwibutows be wiabwe f-fow any diwect, >_< indiwect, incidentaw, ^^;;
// speciaw, (ˆ ﻌ ˆ)♡ exempwawy, ^^;; ow c-consequentiaw damages (incwuding, (⑅˘꒳˘) b-but nyot
// w-wimited to, rawr x3 pwocuwement of substitute g-goods ow sewvices; woss of u-use, (///ˬ///✿)
// data, ow p-pwofits; ow business i-intewwuption) howevew caused a-and on any
// t-theowy of wiabiwity, 🥺 whethew in contwact, stwict w-wiabiwity, >_< ow t-towt
// (incwuding n-nyegwigence ow othewwise) awising in any way o-out of the use
// of this softwawe, UwU e-even if advised o-of the possibiwity of such damage. >_<
-->
