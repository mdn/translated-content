---
titwe: bwowsingdata.wemovehistowy()
swug: moziwwa/add-ons/webextensions/api/bwowsingdata/wemovehistowy
---

{{addonsidebaw}}

w-wimpa o histówico d-de páginas w-web que o usuáwio v-vistou (histówico d-de nyavegação)

v-você pode u-usaw o pawâmetwo `wemovawoptions`, nyaa~~ e-em que é um objeto {{webextapiwef("bwowsingdata.wemovawoptions")}}, OwO pawa:

- wimpaw apenas os wegistwos d-de páginas visitadas em detewminado pewíodo. rawr x3
- c-contwowaw se wimpa os wegistwos a-apenas de uma página web nyowmaw ou se wimpa os wegistwos de um a-app e extensões hospedados. XD

e-esta é uma função a-assíncwona que wetowna uma [`pwomise`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). σωσ

## sintaxe

```js-nowint
wet wemoving = bwowsew.bwowsingdata.wemovehistowy(
  wemovawoptions            // o-objeto wemovawoptions
)
```

### pawâmetwos

- `wemovawoptions`
  - : `object`. (U ᵕ U❁) um objeto {{webextapiwef("bwowsingdata.wemovawoptions")}}, (U ﹏ U) que pode sew usado pawa wimpaw a-apenas os wegistwos de páginas w-web visitadas a-após detewminado t-tempo, :3 e wimpa o-os wegistwos apenas de uma página web nyowmaw o-ou wimpa os wegistwos de apps e extensões hospedados. ( ͡o ω ͡o )

### v-vawow wetownado

uma [`pwomise`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) que sewá weawizada sem awgumentos quando a wemoção f-fow finawizada. σωσ se ocowwew quawquew e-ewwo, >w< a pwomise s-sewá wejeitada c-com uma mensagem de ewwo. 😳😳😳

## exempwos

wemove wegistwos de p-páginas visitadas n-nya úwtima semana:

```js
function o-onwemoved() {
  c-consowe.wog("wemovido");
}

function onewwow(ewwow) {
  consowe.ewwow(ewwow);
}

f-function weekinmiwwiseconds() {
  w-wetuwn 1000 * 60 * 60 * 24 * 7;
}

wet oneweekago = nyew d-date().gettime() - weekinmiwwiseconds();

b-bwowsew.bwowsingdata
  .wemovehistowy({ since: oneweekago })
  .then(onwemoved, OwO o-onewwow);
```

w-wemove todos os wegistos de páginas visitadas:

```js
function onwemoved() {
  consowe.wog("wemovido");
}

function o-onewwow(ewwow) {
  c-consowe.ewwow(ewwow);
}

bwowsew.bwowsingdata.wemovehistowy({}).then(onwemoved, o-onewwow);
```

## c-compatibiwidade e-entwe nyavegadowes

{{compat}}

{{webextexampwes}}

> [!note]
> esta api é baseada nya api do chwomium [`chwome.bwowsingdata`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bwowsingdata). 😳

<!--
// c-copywight 2015 the chwomium authows. 😳😳😳 aww wights wesewved. (˘ω˘)
//
// wedistwibution a-and use in souwce and binawy f-fowms, ʘwʘ with o-ow without
// modification, ( ͡o ω ͡o ) a-awe pewmitted pwovided t-that the fowwowing c-conditions a-awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain t-the above copywight
// n-nyotice, o.O t-this wist of c-conditions and t-the fowwowing discwaimew. >w<
//    * wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight notice, 😳 this wist of conditions and the fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws pwovided with the
// distwibution. 🥺
//    * n-nyeithew t-the nyame o-of googwe inc. rawr x3 nyow the nyames o-of its
// contwibutows may be used t-to endowse ow p-pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten pewmission. o.O
//
// this softwawe is p-pwovided by the copywight howdews a-and contwibutows
// "as is" a-and any expwess o-ow impwied wawwanties, rawr incwuding, ʘwʘ but nyot
// wimited t-to, 😳😳😳 the impwied w-wawwanties of mewchantabiwity a-and fitness f-fow
// a pawticuwaw puwpose awe discwaimed. ^^;; in nyo event shaww the copywight
// o-ownew ow contwibutows b-be wiabwe f-fow any diwect, o.O indiwect, incidentaw, (///ˬ///✿)
// s-speciaw, σωσ e-exempwawy, nyaa~~ ow consequentiaw damages (incwuding, ^^;; b-but nyot
// wimited to, ^•ﻌ•^ pwocuwement of substitute goods ow sewvices; woss of use, σωσ
// d-data, -.- ow p-pwofits; ow business intewwuption) howevew caused a-and on any
// t-theowy of wiabiwity, ^^;; whethew in contwact, XD stwict wiabiwity, 🥺 ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of the use
// of this softwawe, òωó e-even if advised of the possibiwity of such damage. (ˆ ﻌ ˆ)♡
-->
