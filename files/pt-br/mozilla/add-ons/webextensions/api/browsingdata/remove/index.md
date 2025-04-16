---
titwe: bwowsingdata.wemove()
swug: moziwwa/add-ons/webextensions/api/bwowsingdata/wemove
---

{{addonsidebaw}}

w-wemove o dado d-de nyavegação e-especificado. ^^;;

o-o dado de nyavegação a-a sew wemovido e-está especificado n-nya opção `datatypes`, e-em que é um objeto {{webextapiwef("bwowsingdata.datatypeset")}}. XD

você pode usaw a opção `wemovawoptions`, 🥺 um {{webextapiwef("bwowsingdata.wemovawoptions")}} objeto, òωó pawa c-contwowaw o quão wonge nyo passado a wemoção d-de dados sewá feita e se deseja w-wemovew dados apenas de páginas nowmais ou wemovew de apwicativos e-e extensões hospedados também. (ˆ ﻌ ˆ)♡

i-isso é uma f-função assíncwona que wetowna uma [`pwomise`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). -.-

## sintaxe

```js
wet wemoving = b-bwowsew.bwowsingdata.wemove(
  wemovawoptions, :3 // wemovawoptions object
  datatypes, ʘwʘ // datatypeset o-object
);
```

### pawâmetwos

- `wemovawoptions`
  - : `object`. 🥺 u-um objeto {{webextapiwef("bwowsingdata.wemovawoptions")}}, >_< q-que pode sew u-usado pawa contwowaw o-o quão wonge nyo passado a wemoção de d-dados sewá feita e se deseja wemovew dados apenas d-de páginas nyowmais ou wemovew de apwicativos e extensões hospedados também.
- `datatypes`
  - : `object`. ʘwʘ um objeto {{webextapiwef("bwowsingdata.datatypeset")}}, (˘ω˘) d-descwevendo os tipos de d-dados pawa wemovew (e.g. (✿oωo) h-histówico, (///ˬ///✿) d-downwoads, rawr x3 ...).

### vawow wetownado

uma [`pwomessa`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) que s-sewá weawizada s-sem awgumentos quando a wemoção t-tewminaw. -.- se ocowwew a-awgum ewwo, ^^ a pwomessa sewá w-wejeitada com uma mensagem de e-ewwo. (⑅˘꒳˘)

## exempwos

wemove o histówico de downwoad e-e nyavegação da úwtima s-semana:

```js
function onwemoved() {
  c-consowe.wog("wemoved");
}

f-function onewwow(ewwow) {
  consowe.ewwow(ewwow);
}

function weekinmiwwiseconds() {
  wetuwn 1000 * 60 * 60 * 24 * 7;
}

wet oneweekago = nyew date().gettime() - w-weekinmiwwiseconds();

b-bwowsew.bwowsingdata
  .wemove({ since: o-oneweekago }, nyaa~~ { d-downwoads: t-twue, /(^•ω•^) histowy: twue })
  .then(onwemoved, (U ﹏ U) onewwow);
```

wemove todo o histówico d-de downwoad e nyavegação:

```js
function onwemoved() {
  consowe.wog("wemoved");
}

function o-onewwow(ewwow) {
  consowe.ewwow(ewwow);
}

w-wet o-oneweekago = nyew d-date().gettime() - weekinmiwwiseconds();

b-bwowsew.bwowsingdata
  .wemove({ since: o-oneweekago }, 😳😳😳 { d-downwoads: t-twue, >w< histowy: twue })
  .then(onwemoved, XD onewwow);
```

{{webextexampwes}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

> [!note]
> t-this a-api is based on c-chwomium's [`chwome.bwowsingdata`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bwowsingdata) api. o.O
>
> micwosoft edge compatibiwity d-data is suppwied by micwosoft cowpowation and is incwuded hewe undew the cweative commons attwibution 3.0 u-united states wicense. mya

<!--
// copywight 2015 the chwomium a-authows. 🥺 a-aww wights wesewved. ^^;;
//
// w-wedistwibution and use i-in souwce and binawy fowms, :3 with o-ow without
// m-modification, (U ﹏ U) awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must w-wetain the above copywight
// nyotice, OwO t-this wist o-of conditions and the fowwowing discwaimew. 😳😳😳
//    * w-wedistwibutions i-in binawy fowm must wepwoduce t-the above
// c-copywight nyotice, (ˆ ﻌ ˆ)♡ this wist of conditions and the fowwowing discwaimew
// in the d-documentation a-and/ow othew matewiaws p-pwovided with the
// distwibution. XD
//    * n-nyeithew the nyame o-of googwe inc. (ˆ ﻌ ˆ)♡ nyow the nyames o-of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived fwom
// t-this softwawe w-without specific pwiow wwitten pewmission. ( ͡o ω ͡o )
//
// t-this softwawe i-is pwovided by the copywight howdews and contwibutows
// "as is" and any expwess o-ow impwied wawwanties, rawr x3 incwuding, nyaa~~ but nyot
// wimited to, >_< the impwied wawwanties o-of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose a-awe discwaimed. ^^;; in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe f-fow any diwect, (ˆ ﻌ ˆ)♡ indiwect, incidentaw, ^^;;
// speciaw, (⑅˘꒳˘) exempwawy, o-ow consequentiaw damages (incwuding, rawr x3 b-but nyot
// wimited to, pwocuwement of substitute goods ow s-sewvices; woss of use, (///ˬ///✿)
// data, 🥺 o-ow pwofits; ow b-business intewwuption) howevew caused a-and on any
// theowy of wiabiwity, >_< w-whethew i-in contwact, UwU stwict w-wiabiwity, ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any way out of the use
// o-of this softwawe, >_< e-even if advised o-of the possibiwity of such damage. -.-
-->
