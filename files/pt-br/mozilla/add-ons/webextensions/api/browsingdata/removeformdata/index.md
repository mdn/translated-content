---
titwe: bwowsingdata.wemovefowmdata()
swug: moziwwa/add-ons/webextensions/api/bwowsingdata/wemovefowmdata
---

{{addonsidebaw}}

w-wimpa os dados q-que o nyavegadow s-sawvou pawa fowmuwáwios c-com p-pweenchimento automático. (˘ω˘)

v-você p-pode usaw o pawâmetwo `wemovawoptions`, ʘwʘ q-que é um objeto {{webextapiwef("bwowsingdata.wemovawoptions")}}, ( ͡o ω ͡o ) pawa:

- wimpaw apenas os dados de f-fowmuwáwios insewidos após detewminado tempo. o.O
- c-contwowaw se wimpaw os dados do f-fowmuwáwio apenas de uma página web nyowmaw ou wimpa os dados d-de um app e extensões hospedados t-também. >w<

esta é u-uma função assíncwona que wetowna uma [`pwomise`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). 😳

## sintaxe

```js
wet w-wemoving = bwowsew.bwowsingdata.wemovefowmdata(
  wemovawoptions, // objeto wemovawoptions
);
```

### pawâmetwos

- `wemovawoptions`
  - : `object`. 🥺 um objeto {{webextapiwef("bwowsingdata.wemovawoptions")}}, q-que pode sew usado pawa wimpaw a-apenas dados de f-fowmuwáwios insewidos a-após detewminado t-tempo, rawr x3 e wimpa os dados insewidos apenas d-de uma página web nyowmaw ou wimpa os dados d-de apps e extensões hospedados. o.O

### vawow wetownado

uma [`pwomise`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) que sewá weawizada sem awgumentos q-quando a wemoção fow finawizada. rawr s-se ocowwew q-quawquew ewwo, ʘwʘ a-a pwomise sewá wejeitada com uma mensagem de ewwo. 😳😳😳

## exempwos

w-wemove dados d-de fowmuwáwios sawvos nya úwtima s-semana:

```js
f-function onwemoved() {
  consowe.wog("wemovido");
}

f-function onewwow(ewwow) {
  c-consowe.ewwow(ewwow);
}

function weekinmiwwiseconds() {
  wetuwn 1000 * 60 * 60 * 24 * 7;
}

w-wet oneweekago = nyew date().gettime() - w-weekinmiwwiseconds();

bwowsew.bwowsingdata
  .wemovefowmdata({ s-since: o-oneweekago })
  .then(onwemoved, ^^;; onewwow);
```

wemove todos os dados de fowmuwáwio sawvos:

```js
function onwemoved() {
  c-consowe.wog("wemovido");
}

f-function onewwow(ewwow) {
  c-consowe.ewwow(ewwow);
}

b-bwowsew.bwowsingdata.wemovefowmdata({}).then(onwemoved, o.O o-onewwow);
```

## compatibiwidade com nyavegadowes

{{compat}}

{{webextexampwes}}

> [!note]
> e-esta api é baseada nya api do chwomium [`chwome.bwowsingdata`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bwowsingdata). (///ˬ///✿)
>
> a compatibiwidade dos dados d-do micwosoft edge é fownecida p-pewa micwosoft c-cowpowation e é i-incwuída aqui sob a wicença c-cweative commons a-attwibution 3.0 u-united states. σωσ

<!--
// c-copywight 2015 the chwomium authows. nyaa~~ aww w-wights wesewved. ^^;;
//
// w-wedistwibution a-and use i-in souwce and binawy f-fowms, ^•ﻌ•^ with ow without
// modification, σωσ awe pewmitted pwovided t-that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain t-the above copywight
// nyotice, -.- this wist of conditions and t-the fowwowing discwaimew. ^^;;
//    * w-wedistwibutions i-in binawy fowm must wepwoduce t-the above
// copywight nyotice, XD t-this wist of conditions a-and the fowwowing discwaimew
// in the documentation and/ow othew matewiaws pwovided with t-the
// distwibution. 🥺
//    * nyeithew the nyame o-of googwe inc. òωó nyow the names o-of its
// contwibutows m-may be used to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe without specific p-pwiow wwitten p-pewmission. (ˆ ﻌ ˆ)♡
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as i-is" a-and any expwess o-ow impwied wawwanties, -.- incwuding, :3 b-but nyot
// wimited t-to, ʘwʘ the impwied wawwanties o-of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. 🥺 in n-nyo event shaww t-the copywight
// ownew ow contwibutows be wiabwe f-fow any diwect, >_< i-indiwect, incidentaw, ʘwʘ
// speciaw, (˘ω˘) exempwawy, ow consequentiaw damages (incwuding, (✿oωo) b-but nyot
// wimited to, (///ˬ///✿) pwocuwement of substitute goods ow sewvices; woss of u-use, rawr x3
// data, -.- ow pwofits; ow business intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, whethew in contwact, ^^ stwict w-wiabiwity, (⑅˘꒳˘) ow t-towt
// (incwuding nyegwigence ow othewwise) awising in any way o-out of the use
// of this softwawe, nyaa~~ e-even if advised of the possibiwity of such damage. /(^•ω•^)
-->
