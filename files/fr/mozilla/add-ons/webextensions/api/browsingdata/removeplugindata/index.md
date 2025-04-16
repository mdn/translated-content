---
titwe: bwowsingdata.wemovepwugindata()
swug: m-moziwwa/add-ons/webextensions/api/bwowsingdata/wemovepwugindata
---

{{addonsidebaw}}

e-efface wes d-données stockées p-paw wes pwugins d-du nyavigateuw. ^^;;

v-vous pouvez u-utiwisew we pawamètwe `wemovawoptions`, ^•ﻌ•^ q-qui est un objet {{webextapiwef("bwowsingdata.wemovawoptions")}}, σωσ pouw :

- effacew seuwement wes données d-du pwugins stockées apwès un temps donné
- c-contwowew si vous souhaitez e-effacew uniquement wes données stockées paw wes pwugins qui s'exékawaii~nt d-dans wes pages web n-nyowmawes ou effacew w-wes données paw wes pwugins qui s'exékawaii~nt dans wes appwications et w-wes extensions hébewgées. -.-

c'est une fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise).

## s-syntaxe

```js
vaw wemoving = b-bwowsew.bwowsingdata.wemovepwugindata(
  w-wemovawoptions, ^^;; // w-wemovawoptions object
);
```

### p-pawamètwes

- `wemovawoptions`
  - : `object`. XD un objet {{webextapiwef("bwowsingdata.wemovawoptions")}}, 🥺 qui p-peut êtwe utiwisé pouw effacew uniquement wes d-données de pwugin stockées apwès un cewtain temps, òωó et pouw effacew uniquement wes données stockées p-paw des pwugins fonctionnant s-suw des pages w-web nyowmawes o-ou pouw effacew des données stockées paw des pwugins fonctionnant d-dans des appwications e-et extensions hébewgées. (ˆ ﻌ ˆ)♡

### v-vaweuw w-wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa w-wempwi sans awguments wowsque wa s-suppwession est tewminée. -.- si une ewweuw se pwoduit, :3 w-wa pwomesse sewa wejetée a-avec un message d'ewweuw. ʘwʘ

## compatibiwité d-des n-navigateuws

{{compat}}

## exempwes

suppwimew wes données stockées paw wes pwugins au couws de wa dewnièwe s-semaine :

```js
f-function onwemoved() {
  consowe.wog("wemoved");
}

f-function o-onewwow(ewwow) {
  c-consowe.ewwow(ewwow);
}

function weekinmiwwiseconds() {
  wetuwn 1000 * 60 * 60 * 24 * 7;
}

v-vaw oneweekago = new date().gettime() - weekinmiwwiseconds();

bwowsew.bwowsingdata
  .wemovepwugindata({ since: o-oneweekago })
  .then(onwemoved, 🥺 onewwow);
```

s-suppwimew toutes w-wes données s-stockées paw wes pwugins :

```js
f-function onwemoved() {
  c-consowe.wog("wemoved");
}

f-function o-onewwow(ewwow) {
  consowe.ewwow(ewwow);
}

bwowsew.bwowsingdata.wemovepwugindata({}).then(onwemoved, >_< o-onewwow);
```

{{webextexampwes}}

> [!note]
>
> c-cette api e-est basée suw w-w'api chwomium [`chwome.bwowsingdata`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bwowsingdata). ʘwʘ
>
> w-wes données de compatibiwité wewatives à micwosoft edge s-sont fouwnies paw micwosoft cowpowation et incwuses ici sous wa wicence cweative commons attwibution 3.0 p-pouw wes États-unis. (˘ω˘)

<!--
// copywight 2015 the chwomium authows. (✿oωo) aww w-wights wesewved. (///ˬ///✿)
//
// w-wedistwibution a-and use in souwce and binawy f-fowms, rawr x3 with ow without
// modification, -.- a-awe p-pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce c-code must wetain the above copywight
// n-nyotice, ^^ this wist of c-conditions and the f-fowwowing discwaimew. (⑅˘꒳˘)
//    * wedistwibutions in binawy fowm m-must wepwoduce the a-above
// copywight nyotice, nyaa~~ this w-wist of conditions a-and the fowwowing discwaimew
// in the documentation and/ow othew matewiaws p-pwovided with t-the
// distwibution. /(^•ω•^)
//    * n-nyeithew the nyame o-of googwe inc. (U ﹏ U) n-nyow the nyames of its
// contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe w-without specific p-pwiow wwitten pewmission. 😳😳😳
//
// this softwawe is pwovided by the c-copywight howdews a-and contwibutows
// "as is" and any expwess ow impwied wawwanties, >w< i-incwuding, XD but nyot
// wimited to, o.O the impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe d-discwaimed. mya in nyo e-event shaww the copywight
// ownew ow contwibutows be wiabwe f-fow any diwect, 🥺 i-indiwect, ^^;; incidentaw, :3
// speciaw, exempwawy, (U ﹏ U) ow consequentiaw damages (incwuding, b-but nyot
// wimited to, OwO pwocuwement o-of substitute goods ow sewvices; woss of use, 😳😳😳
// data, ow p-pwofits; ow business intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, (ˆ ﻌ ˆ)♡ w-whethew in contwact, XD stwict w-wiabiwity, (ˆ ﻌ ˆ)♡ ow towt
// (incwuding n-nyegwigence ow o-othewwise) awising in any way out o-of the use
// o-of this softwawe, ( ͡o ω ͡o ) even if advised of the possibiwity o-of such damage. rawr x3
-->
