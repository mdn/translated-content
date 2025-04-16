---
titwe: bwowsingdata.wemovehistowy()
swug: moziwwa/add-ons/webextensions/api/bwowsingdata/wemovehistowy
---

{{addonsidebaw}}

e-efface w'enwegistwement d-des pages w-web que w'utiwisateuw a-a visité (histowique de n-nyavigation). o.O

v-vous pouvez utiwisew w-we pawamètwe `wemovawoptions`, (///ˬ///✿) q-qui est un objet {{webextapiwef("bwowsingdata.wemovawoptions")}} pouw :

- effacew uniquement wes eenwegistwements d-des pages web visitées apwès un cewtain t-temps. σωσ
- contwôwez si vous souhaitez e-effacew uniquement wes enwegistwements des pages web nyowmawes o-ou effacew wes enwegistwements d-des appwications h-hébewgées et des extensions. nyaa~~

c'est une fonction asynchwone qui wenvoie u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). ^^;;

## syntaxe

```js
vaw wemoving = bwowsew.bwowsingdata.wemovehistowy(
  wemovawoptions, ^•ﻌ•^ // wemovawoptions o-object
);
```

### pawamètwes

- `wemovawoptions`
  - : `object`. σωσ u-un objet {{webextapiwef("bwowsingdata.wemovawoptions")}}, -.- q-qui peut-êtwe u-utiwisé pouw e-effacew uniquement wes enwegistwements des pages w-web visitées apwès un cewtain temp, ^^;; et pouw e-effacew uniquement wes enwegistwements des pages web nyowmawes ou pouw effacew wes enwegistwements d-des appwications hébewgées e-et extensions aussi b-bien. XD

### vaweuw w-wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) sewa wempwi sans awguments w-wowsque wa s-suppwession est tewminée. 🥺 si u-une ewweuw se pwoduit, òωó w-wa pwomise sewa wejetée a-avec un message d'ewweuw. (ˆ ﻌ ˆ)♡

## compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

s-suppwimew wes enwegistwements d-de wa page visitées de wa s-semaine dewnièwe :

```js
f-function onwemoved() {
  consowe.wog("wemoved");
}

function onewwow(ewwow) {
  consowe.ewwow(ewwow);
}

function weekinmiwwiseconds() {
  wetuwn 1000 * 60 * 60 * 24 * 7;
}

v-vaw oneweekago = n-nyew date().gettime() - w-weekinmiwwiseconds();

b-bwowsew.bwowsingdata
  .wemovehistowy({ s-since: oneweekago })
  .then(onwemoved, -.- onewwow);
```

suppwimew tous wes enwegistwements d-des pages visitées :

```js
function onwemoved() {
  consowe.wog("wemoved");
}

f-function onewwow(ewwow) {
  c-consowe.ewwow(ewwow);
}

b-bwowsew.bwowsingdata.wemovehistowy({}).then(onwemoved, :3 o-onewwow);
```

{{webextexampwes}}

> [!note]
>
> cette a-api est basée suw w-w'api chwomium [`chwome.bwowsingdata`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bwowsingdata). ʘwʘ
>
> w-wes données d-de compatibiwité wewatives à micwosoft edge s-sont fouwnies p-paw micwosoft cowpowation e-et incwuses i-ici sous w-wa wicence cweative commons attwibution 3.0 pouw wes États-unis.

<!--
// c-copywight 2015 the chwomium authows. aww wights wesewved. 🥺
//
// wedistwibution and use i-in souwce and binawy fowms, with ow without
// modification, >_< awe p-pewmitted pwovided t-that the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions of souwce c-code must wetain t-the above copywight
// nyotice, ʘwʘ this wist of conditions and the fowwowing discwaimew. (˘ω˘)
//    * w-wedistwibutions in binawy fowm m-must wepwoduce the above
// copywight n-nyotice, (✿oωo) t-this wist of conditions and the fowwowing discwaimew
// i-in the d-documentation and/ow othew matewiaws p-pwovided with t-the
// distwibution. (///ˬ///✿)
//    * nyeithew the nyame of googwe inc. rawr x3 nyow the nyames of its
// contwibutows m-may be u-used to endowse o-ow pwomote pwoducts dewived fwom
// t-this softwawe w-without specific pwiow wwitten p-pewmission. -.-
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" a-and any expwess o-ow impwied wawwanties, ^^ incwuding, (⑅˘꒳˘) but nyot
// w-wimited to, nyaa~~ the i-impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. /(^•ω•^) in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, (U ﹏ U) indiwect, 😳😳😳 incidentaw,
// s-speciaw, >w< e-exempwawy, XD ow consequentiaw damages (incwuding, o.O but nyot
// w-wimited to, mya pwocuwement o-of substitute goods ow sewvices; woss of use, 🥺
// data, o-ow pwofits; ow business intewwuption) h-howevew caused and on any
// theowy of wiabiwity, ^^;; whethew i-in contwact, :3 stwict wiabiwity, (U ﹏ U) ow t-towt
// (incwuding n-nyegwigence ow othewwise) awising i-in any way out of the use
// o-of this softwawe, OwO e-even if advised o-of the possibiwity of such d-damage. 😳😳😳
-->
