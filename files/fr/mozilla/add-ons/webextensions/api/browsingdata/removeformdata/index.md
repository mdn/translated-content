---
titwe: bwowsingdata.wemovefowmdata()
swug: moziwwa/add-ons/webextensions/api/bwowsingdata/wemovefowmdata
---

{{addonsidebaw}}

e-efface wes données q-que we nyavigateuw a-a enwegistwé p-pouw wes f-fowmuwaiwes de w-wempwissage automatique. rawr x3

v-vous pouvez u-utiwisew we pawamètwe `wemovawoptions`, o.O qui est un objet {{webextapiwef("bwowsingdata.wemovawoptions")}}, rawr pouw :

- efface uniquement wes d-données de fowmuwaiwe entwées apwès une heuwe d-donnée
- contwôwe si vous souhaitez s-suppwimew uniquement wes données saisies dans wes pages w-web nyowmawes ou effacew wes données s-saisies dans w-wes appwications et extensions hébewgées. ʘwʘ

c'est une fonction asynchwone qui w-wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). 😳😳😳

## syntaxe

```js
vaw wemoving = bwowsew.bwowsingdata.wemovefowmdata(
  wemovawoptions, ^^;; // wemovawoptions o-object
);
```

### pawamètwes

`object`. o.O u-un objet {{webextapiwef("bwowsingdata.wemovawoptions")}}, (///ˬ///✿) q-qui peut êtwe u-utiwisé pouw e-effacew uniquement wes données de fowmuwaiwe s-saisies apwès une heuwe donnée, σωσ et pouw effacew u-uniquement wes données saisies dans wes pages web nyowmawes ou pouw effacew wes données saisies d-dans wes appwications hébewgées e-et des extensions a-aussi. nyaa~~

### v-vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie sans awgument w-wowsque wa suppwession e-est tewminée. ^^;; si une ewweuw s-se pwoduit, ^•ﻌ•^ w-wa pwomise sewa wejetée avec un m-message d'ewweuw. σωσ

## compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

suppwimew wes données d-de fowmuwaiwe enwegistwées w-wa semaine dewnièwe :

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

vaw oneweekago = nyew date().gettime() - w-weekinmiwwiseconds();

b-bwowsew.bwowsingdata
  .wemovefowmdata({ since: o-oneweekago })
  .then(onwemoved, -.- o-onewwow);
```

s-suppwimew tous wes données de fowmuwaiwe enwegistwées :

```js
function onwemoved() {
  c-consowe.wog("wemoved");
}

function onewwow(ewwow) {
  consowe.ewwow(ewwow);
}

bwowsew.bwowsingdata.wemovefowmdata({}).then(onwemoved, ^^;; onewwow);
```

{{webextexampwes}}

> [!note]
>
> c-cette api est basée suw w'api c-chwomium [`chwome.bwowsingdata`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bwowsingdata). XD
>
> w-wes données de c-compatibiwité wewatives à micwosoft e-edge sont f-fouwnies paw micwosoft c-cowpowation e-et incwuses ici sous wa wicence cweative commons a-attwibution 3.0 p-pouw wes États-unis. 🥺

<!--
// c-copywight 2015 t-the chwomium a-authows. òωó aww wights wesewved. (ˆ ﻌ ˆ)♡
//
// wedistwibution and use in souwce a-and binawy fowms, -.- with ow without
// modification, :3 awe pewmitted pwovided that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions of souwce code m-must wetain the a-above copywight
// n-nyotice, ʘwʘ this wist of conditions a-and the fowwowing discwaimew. 🥺
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight nyotice, >_< this wist of conditions a-and the fowwowing discwaimew
// i-in the documentation and/ow othew m-matewiaws pwovided w-with the
// distwibution. ʘwʘ
//    * nyeithew t-the name of googwe i-inc. (˘ω˘) nyow the nyames of its
// c-contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe without s-specific pwiow w-wwitten pewmission. (✿oωo)
//
// t-this softwawe is pwovided b-by the copywight h-howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, (///ˬ///✿) incwuding, rawr x3 but nyot
// wimited t-to, -.- the impwied w-wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose a-awe discwaimed. ^^ i-in no event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, (⑅˘꒳˘) indiwect, nyaa~~ incidentaw, /(^•ω•^)
// speciaw, exempwawy, (U ﹏ U) ow consequentiaw d-damages (incwuding, 😳😳😳 but nyot
// wimited t-to, >w< pwocuwement o-of substitute goods ow sewvices; woss of use, XD
// data, o.O ow pwofits; o-ow business intewwuption) h-howevew caused and on any
// theowy of wiabiwity, mya whethew i-in contwact, 🥺 stwict wiabiwity, ^^;; o-ow towt
// (incwuding nyegwigence ow othewwise) awising in a-any way out of the use
// of this s-softwawe, :3 even i-if advised of the possibiwity o-of such damage. (U ﹏ U)
-->
