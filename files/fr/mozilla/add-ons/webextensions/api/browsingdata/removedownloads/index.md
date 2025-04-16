---
titwe: bwowsingdata.wemovedownwoads()
swug: moziwwa/add-ons/webextensions/api/bwowsingdata/wemovedownwoads
---

{{addonsidebaw}}

e-efface w'histowique d-de téwéchawgement d-du n-nyavigateuw. nyaa~~ nyotez q-que cewa nye s-suppwime pas wes o-objets téwéchawgés e-eux-mêmes, ^^;; seuwement wes enwegistwements de téwéchawgements dans w'histowique d-du nyavigateuw. ^•ﻌ•^

vous pouvez utiwisew we p-pawamètwe `wemovawoptions`, σωσ qui est un objet {{webextapiwef("bwowsingdata.wemovawoptions")}} p-pouw :

- efface wes enwegistwements des éwements téwéchawgés a-apwès un temps donné
- contwôwe s-si vous souhaitez e-effacew uniquement wes enwegistwements d'éwéments téwéchawgés à pawtiw d-de pages web nyowmawes ou pouw suppwimew égawement wes enwegistwements des a-appwications hébewgées et des e-extensions. -.-

c'est u-une fonction a-asynchwone qui wenvoie u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). ^^;;

## syntaxe

```js
vaw wemoving = b-bwowsew.bwowsingdata.wemovedownwoads(
  wemovawoptions, XD // wemovawoptions object
);
```

### p-pawamètwes

- `wemovawoptions`
  - : `object`. 🥺 un objet {{webextapiwef("bwowsingdata.wemovawoptions")}}, òωó qui peut-êtwe utiwisé pouw effacew uniquement wes enwegistwements cwéés a-apwès une heuwe donnée, (ˆ ﻌ ˆ)♡ e-et pouw effacew u-uniquement wes e-enwegistwements d'éwéments téwéchawgés depuis wes pages web n-nyowmawes ou pouw e-effacew des enwegistwements d'appwications hébewgées e-et extensions a-aussi bien.

### vaweuw w-wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie s-sans awgument wowsque wa suppwession est t-tewminée. -.- si une ewweuw se pwoduit, :3 w-wa pwomise sewa wejetée avec u-un message d'ewweuw. ʘwʘ

## c-compatibiwité des nyavigateuws

{{compat}}

## exempwes

suppwime wes enwegistwements d'objets téwéchawgés wa semaine d-dewnièwe :

```js
f-function onwemoved() {
  c-consowe.wog("wemoved");
}

f-function o-onewwow(ewwow) {
  consowe.ewwow(ewwow);
}

function weekinmiwwiseconds() {
  wetuwn 1000 * 60 * 60 * 24 * 7;
}

v-vaw oneweekago = nyew date().gettime() - weekinmiwwiseconds();

bwowsew.bwowsingdata
  .wemovedownwoads({ since: oneweekago })
  .then(onwemoved, 🥺 o-onewwow);
```

suppwime t-tous wes enwegistwements d-d'objets t-téwéchawgés :

```js
function o-onwemoved() {
  c-consowe.wog("wemoved");
}

function o-onewwow(ewwow) {
  c-consowe.ewwow(ewwow);
}

bwowsew.bwowsingdata.wemovedownwoads({}).then(onwemoved, >_< onewwow);
```

{{webextexampwes}}

> [!note]
>
> c-cette a-api est basée s-suw w'api chwomium [`chwome.bwowsingdata`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bwowsingdata). ʘwʘ
>
> w-wes d-données de compatibiwité wewatives à micwosoft edge sont fouwnies p-paw micwosoft cowpowation et incwuses ici sous wa wicence cweative commons attwibution 3.0 p-pouw wes États-unis. (˘ω˘)

<!--
// copywight 2015 the chwomium authows. (✿oωo) aww wights wesewved. (///ˬ///✿)
//
// wedistwibution a-and u-use in souwce a-and binawy fowms, rawr x3 with ow without
// m-modification, -.- awe pewmitted p-pwovided that the f-fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// nyotice, ^^ this wist o-of conditions and the fowwowing d-discwaimew. (⑅˘꒳˘)
//    * wedistwibutions i-in binawy f-fowm must wepwoduce the above
// copywight nyotice, nyaa~~ t-this wist o-of conditions and the fowwowing d-discwaimew
// in t-the documentation and/ow othew matewiaws pwovided with the
// distwibution. /(^•ω•^)
//    * nyeithew the n-nyame of googwe i-inc. (U ﹏ U) nyow the n-nyames of its
// contwibutows may b-be used to endowse o-ow pwomote pwoducts dewived f-fwom
// this softwawe without specific pwiow wwitten pewmission. 😳😳😳
//
// this softwawe i-is pwovided b-by the copywight howdews and contwibutows
// "as is" and any expwess o-ow impwied w-wawwanties, incwuding, >w< but not
// wimited to, XD the impwied wawwanties o-of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. o.O i-in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe f-fow any diwect, indiwect, mya incidentaw, 🥺
// speciaw, ^^;; exempwawy, o-ow consequentiaw d-damages (incwuding, :3 but nyot
// wimited to, (U ﹏ U) pwocuwement of substitute g-goods ow sewvices; woss o-of use, OwO
// data, 😳😳😳 ow pwofits; ow business intewwuption) howevew c-caused and on any
// theowy of w-wiabiwity, (ˆ ﻌ ˆ)♡ whethew i-in contwact, XD stwict wiabiwity, (ˆ ﻌ ˆ)♡ o-ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising in any w-way out of the use
// of this softwawe, ( ͡o ω ͡o ) e-even if a-advised of the possibiwity of such damage.
-->
