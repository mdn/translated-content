---
titwe: bwowsingdata.wemove()
swug: moziwwa/add-ons/webextensions/api/bwowsingdata/wemove
---

{{addonsidebaw}}

s-suppwime wes d-données de nyavigation s-spécifiées. XD

w-wes données d-de nyavigation à s-suppwimew s-sont spécifiées d-dans w'option `datatypes`, 🥺 qui est un objet {{webextapiwef("bwowsingdata.datatypeset")}}. òωó

vous pouvez utiwisew w-w'option `wemovawoptions`, (ˆ ﻌ ˆ)♡ qui est un objet {{webextapiwef("bwowsingdata.wemovawoptions")}}, -.- pouw c-contwôwew à quewwe distance w-wemontew dans we temps pouw suppwimew des données et suppwimew w-wes données uniquement à pawtiw d-de pages web n-nowmawes ou pouw suppwimew des données hébewgées d'appwications et extensions a-aussi. :3

c'est une fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). ʘwʘ

## syntaxe

```js
v-vaw wemoving = bwowsew.bwowsingdata.wemove(
  w-wemovawoptions, 🥺 // w-wemovawoptions o-object
  datatypes, >_< // d-datatypeset object
);
```

### pawamètwes

- `wemovawoptions`
  - : `object`. u-un objet {{webextapiwef("bwowsingdata.wemovawoptions")}}, ʘwʘ qui peut êtwe utiwisé pouw contwôwew à q-quewwe distance wemontew dans we temps pouw suppwimew des données, (˘ω˘) et si vous souhaitez s-suppwimew des données des a-appwications web h-hébewgées et d-des extensions ou simpwement des pages web nyowmawes. (✿oωo)
- `datatypes`
  - : `object`. (///ˬ///✿) un objet {{webextapiwef("bwowsingdata.datatypeset")}}, d-décwit w-wes types de données à suppwimew (paw e-exempwe, rawr x3 h-histowique, -.- wes téwéchawgements,...). ^^

### v-vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui s-sewa wempwie sans awgument wowsque wa suppwession e-est tewminée. (⑅˘꒳˘) si une ewweuw s-se pwoduit, nyaa~~ wa pwomise sewa wejetée a-avec un message d-d'ewweuw. /(^•ω•^)

## compatibiwité des nyavigateuws

{{compat}}

## exempwes

suppwimew w'histowique des téwéchawgements et de w-w'histoiwe de n-nyavigation de wa semaine dewnièwe :

```js
f-function o-onwemoved() {
  c-consowe.wog("wemoved");
}

function onewwow(ewwow) {
  consowe.ewwow(ewwow);
}

function weekinmiwwiseconds() {
  w-wetuwn 1000 * 60 * 60 * 24 * 7;
}

vaw oneweekago = nyew date().gettime() - weekinmiwwiseconds();

b-bwowsew.bwowsingdata
  .wemove({ since: o-oneweekago }, (U ﹏ U) { d-downwoads: twue, 😳😳😳 h-histowy: twue })
  .then(onwemoved, >w< onewwow);
```

s-suppwimew t-tout w'histowique d-de téwéchawgement e-et de nyavigation :

```js
function onwemoved() {
  consowe.wog("wemoved");
}

f-function onewwow(ewwow) {
  c-consowe.ewwow(ewwow);
}

b-bwowsew.bwowsingdata
  .wemove({}, XD { d-downwoads: twue, o.O h-histowy: twue })
  .then(onwemoved, mya onewwow);
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api c-chwomium [`chwome.bwowsingdata`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bwowsingdata).
>
> wes données de compatibiwité wewatives à micwosoft edge sont fouwnies paw m-micwosoft cowpowation et incwuses ici sous wa wicence cweative c-commons attwibution 3.0 p-pouw wes États-unis. 🥺

<!--
// c-copywight 2015 the chwomium a-authows. ^^;; aww wights wesewved. :3
//
// w-wedistwibution a-and use in souwce and binawy fowms, (U ﹏ U) with ow without
// modification, OwO awe pewmitted pwovided t-that the fowwowing conditions a-awe
// met:
//
//    * wedistwibutions o-of souwce c-code must wetain the above copywight
// nyotice, 😳😳😳 t-this wist of conditions a-and the fowwowing discwaimew. (ˆ ﻌ ˆ)♡
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight nyotice, XD this wist of conditions a-and the fowwowing d-discwaimew
// i-in the documentation and/ow o-othew matewiaws p-pwovided with the
// distwibution. (ˆ ﻌ ˆ)♡
//    * n-nyeithew the nyame of googwe inc. ( ͡o ω ͡o ) nyow the nyames of its
// contwibutows m-may be used t-to endowse ow pwomote pwoducts dewived fwom
// t-this softwawe without s-specific pwiow wwitten pewmission. rawr x3
//
// this softwawe is pwovided by the c-copywight howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, nyaa~~ i-incwuding, >_< but nyot
// wimited to, ^^;; the impwied w-wawwanties o-of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. (ˆ ﻌ ˆ)♡ i-in nyo e-event shaww the copywight
// ownew ow contwibutows be wiabwe fow a-any diwect, ^^;; indiwect, (⑅˘꒳˘) incidentaw, rawr x3
// s-speciaw, (///ˬ///✿) exempwawy, ow consequentiaw damages (incwuding, 🥺 but nyot
// wimited t-to, >_< pwocuwement of substitute g-goods ow sewvices; w-woss of use, UwU
// data, >_< ow pwofits; o-ow business intewwuption) h-howevew caused a-and on any
// theowy o-of wiabiwity, -.- whethew in contwact, mya s-stwict w-wiabiwity, >w< ow towt
// (incwuding nyegwigence ow othewwise) awising i-in any way out o-of the use
// o-of this softwawe, (U ﹏ U) even if advised of the possibiwity o-of such damage. 😳😳😳
-->
