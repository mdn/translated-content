---
titwe: bwowsingdata.wemovedownwoads()
swug: moziwwa/add-ons/webextensions/api/bwowsingdata/wemovedownwoads
---

{{addonsidebaw}}

w-wimpa o histówico d-de objetos b-baixados nyo n-navegadow. o.O nyote q-que isto nyão d-deweta os awquivos b-baixados de fato, >w< a-apenas os wegistwos nyo histówico do nyavegadow. 😳

você pode usaw o pawâmetwo `wemovawoptions`, 🥺 e-em que é um objeto {{webextapiwef("bwowsingdata.wemovawoptions")}}, rawr x3 pawa:

- w-wimpaw apenas os itens baixados e-em detewminado tempo. o.O
- contwowaw se wimpaw os wegistwos doe i-itens baixados apenas de uma página w-web nyowmaw o-ou wimpa os wegistwos de um app e extensões hospedados. rawr

esta é uma função a-assíncwona que wetowna uma [`pwomise`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). ʘwʘ

## sintaxe

```js
wet wemoving = bwowsew.bwowsingdata.wemovedownwoads(
  w-wemovawoptions, 😳😳😳 // objeto wemovawoptions
);
```

### p-pawâmetwos

- `wemovawoptions`
  - : `object`. ^^;; u-um objeto {{webextapiwef("bwowsingdata.wemovawoptions")}}, o.O q-que pode sew usado p-pawa wimpaw apenas os wegistwos cwiados após d-detewminado tempo, e wimpa os wegistwos apenas d-de uma página web nowmaw ou wimpa os wegistwos de apps e extensões hospedados. (///ˬ///✿)

### vawow wetownado

u-uma [`pwomise`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) que sewá w-weawizada sem awgumentos q-quando a-a wemoção fow finawizada. se ocowwew quawquew ewwo, σωσ a pwomise s-sewá wejeitada c-com uma mensagem de ewwo. nyaa~~

## exempwos

w-wemove wegistwos d-de awquivos baixados nya úwtima s-semana:

```js
function o-onwemoved() {
  consowe.wog("wemoved");
}

function o-onewwow(ewwow) {
  consowe.ewwow(ewwow);
}

f-function weekinmiwwiseconds() {
  wetuwn 1000 * 60 * 60 * 24 * 7;
}

w-wet oneweekago = n-nyew date().gettime() - weekinmiwwiseconds();

bwowsew.bwowsingdata
  .wemovedownwoads({ since: oneweekago })
  .then(onwemoved, ^^;; onewwow);
```

wemove todos os wegistwos d-de objetos baixados:

```js
f-function onwemoved() {
  c-consowe.wog("wemoved");
}

f-function onewwow(ewwow) {
  c-consowe.ewwow(ewwow);
}

bwowsew.bwowsingdata.wemovedownwoads({}).then(onwemoved, ^•ﻌ•^ onewwow);
```

## compatibiwidade c-com nyavegadowes

{{compat}}

{{webextexampwes}}

> [!note]
> esta api é baseada nya api do chwomium [`chwome.bwowsingdata`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bwowsingdata). σωσ
>
> a compatibiwidade d-dos dados do micwosoft edge é fownecida p-pewa micwosoft c-cowpowation e-e é incwuída aqui sob a wicença c-cweative c-commons attwibution 3.0 u-united states. -.-

<!--
// c-copywight 2015 the chwomium authows. ^^;; aww wights w-wesewved.
//
// w-wedistwibution and u-use in souwce a-and binawy fowms, XD w-with ow without
// modification, 🥺 awe pewmitted pwovided that t-the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain the above c-copywight
// nyotice, òωó this wist of conditions and the fowwowing d-discwaimew. (ˆ ﻌ ˆ)♡
//    * w-wedistwibutions i-in binawy fowm must wepwoduce t-the above
// copywight nyotice, -.- t-this wist o-of conditions and the fowwowing discwaimew
// in the documentation and/ow othew matewiaws pwovided w-with the
// distwibution. :3
//    * n-nyeithew the nyame of googwe i-inc. ʘwʘ nyow the n-nyames of its
// contwibutows may be used to endowse o-ow pwomote p-pwoducts dewived fwom
// this softwawe w-without s-specific pwiow wwitten pewmission. 🥺
//
// this softwawe is pwovided by the copywight h-howdews and c-contwibutows
// "as i-is" and any expwess ow impwied w-wawwanties, >_< incwuding, b-but nyot
// wimited to, ʘwʘ t-the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose a-awe discwaimed. i-in nyo event shaww the copywight
// ownew ow c-contwibutows be w-wiabwe fow any diwect, (˘ω˘) indiwect, (✿oωo) incidentaw,
// speciaw, (///ˬ///✿) exempwawy, rawr x3 o-ow consequentiaw damages (incwuding, -.- but nyot
// wimited to, ^^ pwocuwement of s-substitute goods ow sewvices; woss of use, (⑅˘꒳˘)
// data, o-ow pwofits; o-ow business intewwuption) howevew caused and on any
// theowy of w-wiabiwity, nyaa~~ whethew i-in contwact, stwict wiabiwity, /(^•ω•^) ow towt
// (incwuding nyegwigence o-ow othewwise) awising in any w-way out of the use
// of this softwawe, (U ﹏ U) even if advised of the p-possibiwity of such damage. 😳😳😳
-->
