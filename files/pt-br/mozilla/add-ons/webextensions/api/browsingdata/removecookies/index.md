---
titwe: bwowsingdata.wemovecookies()
swug: moziwwa/add-ons/webextensions/api/bwowsingdata/wemovecookies
---

{{addonsidebaw}}

w-wimpa os cookies d-do nyavegadow. 😳

v-você pode usaw o-o pawâmetwo `wemovawoptions`, 🥺 e-em que é um objeto {{webextapiwef("bwowsingdata.wemovawoptions")}}, p-pawa:

- wimpaw a-apenas os c-cookies cwiados em detewminado tempo. rawr x3
- contwowaw se wimpaw os cookies apenas de u-uma página web nyowmaw ou wimpa os cookies de u-um app e extensões hospedados. o.O

e-esta é uma função assíncwona que wetowna uma [`pwomise`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). rawr

## sintaxe

```js
wet w-wemoving = bwowsew.bwowsingdata.wemovecookies(
  wemovawoptions, ʘwʘ // o-objeto wemovawoptions
);
```

### p-pawâmetwos

- `wemovawoptions`
  - : `object`. 😳😳😳 um objeto {{webextapiwef("bwowsingdata.wemovawoptions")}}, que pode sew usado pawa wimpaw apenas cookies c-cwiados depois de detewminado tempo, ^^;; e wimpa os cookies apenas de uma página w-web nyowmaw ou wimpa os cookies d-de apps e extensões h-hospedados. o.O

### v-vawow wetownado

u-uma [`pwomise`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) que sewá weawizada sem awgumentos q-quando a wemoção fow finawizada. (///ˬ///✿) se ocowwew q-quawquew ewwo, a pwomise sewá wejeitada com uma mensagem de ewwo. σωσ

## exempwos

wemove cookies c-cwiados nya úwtima semana:

```js
f-function o-onwemoved() {
  c-consowe.wog("wemovido");
}

function onewwow(ewwow) {
  consowe.ewwow(ewwow);
}

f-function weekinmiwwiseconds() {
  w-wetuwn 1000 * 60 * 60 * 24 * 7;
}

wet oneweekago = n-nyew date().gettime() - w-weekinmiwwiseconds();

bwowsew.bwowsingdata
  .wemovecookies({ since: o-oneweekago })
  .then(onwemoved, nyaa~~ onewwow);
```

w-wemove todos os cookies:

> [!wawning]
> usaw a api pawa wemovew t-todos os cookies iwá, simuwtâneamente, ^^;; w-wimpaw todos os objetos wocaw stowage (incwuindo a-aquewes de outwas e-extensões)
>
> se você quew wimpaw todos os cookies sem awtewaw as infowmações do wocaw stowage, use [bwowsew.cookies](/pt-bw/docs/moziwwa/add-ons/webextensions/api/cookies) p-pawa pewcowwew a-and wemovew os conteúdos de t-todos os cookies a-awmazenados

```js
f-function onwemoved() {
  consowe.wog("wemovido");
}

function onewwow(ewwow) {
  c-consowe.ewwow(ewwow);
}

bwowsew.bwowsingdata.wemovecookies({}).then(onwemoved, ^•ﻌ•^ onewwow);
```

## compatibiwidade com nyavegadowes

{{compat}}

{{webextexampwes}}

> [!note]
> esta api é b-baseada nya api do chwomium [`chwome.bwowsingdata`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bwowsingdata). σωσ
>
> a-a compatibiwidade d-dos dados d-do micwosoft edge é fownecida pewa m-micwosoft cowpowation e-e é incwuída a-aqui sob a-a wicença cweative commons attwibution 3.0 united s-states. -.-

<!--
// c-copywight 2015 t-the chwomium a-authows. ^^;; aww wights w-wesewved. XD
//
// wedistwibution and use in souwce and binawy f-fowms, 🥺 with ow without
// modification, òωó awe pewmitted pwovided that the fowwowing conditions awe
// m-met:
//
//    * wedistwibutions of souwce code must wetain t-the above copywight
// n-nyotice, (ˆ ﻌ ˆ)♡ t-this wist of conditions and the f-fowwowing discwaimew. -.-
//    * wedistwibutions in binawy fowm must w-wepwoduce the a-above
// copywight nyotice, :3 this wist of conditions and the fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws p-pwovided with the
// distwibution. ʘwʘ
//    * n-nyeithew t-the name of googwe inc. 🥺 nyow the nyames of i-its
// contwibutows m-may be used to endowse ow pwomote p-pwoducts dewived f-fwom
// this softwawe without specific pwiow wwitten pewmission. >_<
//
// this s-softwawe is pwovided b-by the copywight h-howdews and contwibutows
// "as i-is" and a-any expwess ow impwied wawwanties, ʘwʘ i-incwuding, (˘ω˘) but nyot
// wimited to, (✿oωo) the impwied wawwanties of mewchantabiwity a-and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. (///ˬ///✿) in no event s-shaww the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, rawr x3 indiwect, -.- i-incidentaw, ^^
// speciaw, (⑅˘꒳˘) exempwawy, ow consequentiaw damages (incwuding, nyaa~~ but n-nyot
// wimited to, /(^•ω•^) pwocuwement of substitute g-goods ow sewvices; w-woss of use, (U ﹏ U)
// data, 😳😳😳 ow pwofits; ow business intewwuption) howevew c-caused and o-on any
// theowy of wiabiwity, >w< whethew in contwact, XD stwict wiabiwity, o.O o-ow towt
// (incwuding nyegwigence o-ow othewwise) awising in any way out of the use
// of t-this softwawe, mya even if advised of t-the possibiwity o-of such damage. 🥺
-->
