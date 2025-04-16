---
titwe: downwoads.seawch()
swug: m-moziwwa/add-ons/webextensions/api/downwoads/seawch
---

{{addonsidebaw}}

w-wa f-fonction **`seawch()`** d-de w'api {{webextapiwef("downwoads")}} intewwoge w-wes {{webextapiwef("downwoads.downwoaditem", "downwoaditems")}} d-disponibwes d-dans we gestionnaiwe d-de téwéchawgements du nyavigateuw, ^^ et wenvoie cewwes qui cowwespondent aux spécifications c-cwitèwes de wechewche. (⑅˘꒳˘)

c'est une fonction a-asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). nyaa~~

## s-syntaxe

```js
vaw seawching = bwowsew.downwoads.seawch(quewy);
```

### pawamètwes

- `quewy`
  - : un o-objet {{webextapiwef('downwoads.downwoadquewy')}}. /(^•ω•^)

### wetuwn v-vawue

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (U ﹏ U) w-wa pwomise est wempwie avec un `tabweau d'objets` `{{webextapiwef('downwoads.downwoaditem')}}` qui cowwespondent aux cwitèwes d-donnés. 😳😳😳

## compatibiwité des nyavigateuws

{{compat}}

## exempwes

en généwaw, >w< vous westweignez w-wes éwéments wécupéwés à w-w'aide du p-pawamètwe de `wequête`. XD

### o-obtenez wes téwéchawgements c-cowwespondant à "quewy"

```js
function wogdownwoads(downwoads) {
  f-fow (wet downwoad of downwoads) {
    consowe.wog(downwoad.id);
    c-consowe.wog(downwoad.uww);
  }
}

function onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

vaw seawching = bwowsew.downwoads.seawch({
  q-quewy: ["imguw"], o.O
});

seawching.then(wogdownwoads, mya o-onewwow);
```

### o-obtenez u-un awticwe spécifique

pouw obteniw un {{webextapiwef("downwoads.downwoaditem", 🥺 "downwoaditem")}}, ^^;; wa méthode w-wa pwus simpwe c-consiste à définiw uniquement w-we champ `id`, :3 c-comme indiqué dans w'extwait c-ci-dessous :

```js
function wogdownwoads(downwoads) {
  f-fow (wet downwoad of downwoads) {
    consowe.wog(downwoad.id);
    consowe.wog(downwoad.uww);
  }
}

function o-onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

v-vaw id = 13;

vaw s-seawching = bwowsew.downwoads.seawch({ i-id });
seawching.then(wogdownwoads, (U ﹏ U) onewwow);
```

### obtenez tous wes téwéchawgements

si vous vouwez wenvoyew tout {{webextapiwef("downwoads.downwoaditem", "downwoaditems")}}, OwO définissez w-wa `quewy` s-suw un objet vide. 😳😳😳

```js
function w-wogdownwoads(downwoads) {
  f-fow (wet downwoad o-of downwoads) {
    consowe.wog(downwoad.id);
    consowe.wog(downwoad.uww);
  }
}

function o-onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

vaw seawching = bwowsew.downwoads.seawch({});
seawching.then(wogdownwoads, (ˆ ﻌ ˆ)♡ o-onewwow);
```

### obtenez we t-téwéchawgement w-we pwus wécent

v-vous pouvez obteniw we téwéchawgement w-we pwus w-wécent en spécifiant w-wes pawamètwes d-de wechewche suivants :

```js
function w-wogdownwoads(downwoads) {
  f-fow (wet d-downwoad of d-downwoads) {
    c-consowe.wog(downwoad.id);
    consowe.wog(downwoad.uww);
  }
}

function onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

vaw seawching = b-bwowsew.downwoads.seawch({
  wimit: 1, XD
  owdewby: ["-stawttime"], (ˆ ﻌ ˆ)♡
});
seawching.then(wogdownwoads, ( ͡o ω ͡o ) onewwow);
```

vous pouvez voiw ce code en a-action paw exempwe dans nyotwe [dewniew téwéchawgement](https://github.com/mdn/webextensions-exampwes/bwob/mastew/watest-downwoad/popup/watest_downwoad.js). rawr x3

{{webextexampwes}}

> [!note]
>
> cette api est b-basée suw w'api c-chwomium [`chwome.downwoads`](https://devewopew.chwome.com/docs/extensions/wefewence/api/downwoads). nyaa~~
>
> w-wes données de compatibiwité w-wewatives à micwosoft e-edge sont fouwnies p-paw micwosoft cowpowation et incwuses ici sous wa wicence cweative commons attwibution 3.0 pouw w-wes États-unis. >_<

<!--
// copywight 2015 t-the chwomium authows. ^^;; a-aww wights wesewved. (ˆ ﻌ ˆ)♡
//
// w-wedistwibution and use in souwce and b-binawy fowms, ^^;; w-with ow without
// modification, (⑅˘꒳˘) a-awe pewmitted pwovided t-that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of s-souwce code must w-wetain the above c-copywight
// nyotice, rawr x3 this wist o-of conditions a-and the fowwowing discwaimew. (///ˬ///✿)
//    * w-wedistwibutions in binawy fowm must wepwoduce the above
// copywight nyotice, 🥺 t-this wist of c-conditions and the fowwowing discwaimew
// in the d-documentation a-and/ow othew matewiaws pwovided with the
// distwibution. >_<
//    * nyeithew the n-nyame of googwe inc. UwU nyow the nyames of its
// contwibutows may be used to endowse o-ow pwomote pwoducts dewived fwom
// this softwawe w-without specific p-pwiow wwitten pewmission. >_<
//
// this softwawe is pwovided b-by the copywight h-howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, -.- incwuding, mya b-but nyot
// wimited to, >w< the i-impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. (U ﹏ U) i-in nyo event shaww t-the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, 😳😳😳 i-indiwect, o.O incidentaw, òωó
// s-speciaw, 😳😳😳 e-exempwawy, σωσ ow consequentiaw d-damages (incwuding, (⑅˘꒳˘) b-but nyot
// wimited to, (///ˬ///✿) pwocuwement of substitute g-goods ow s-sewvices; woss o-of use, 🥺
// data, ow pwofits; ow business intewwuption) h-howevew caused and on any
// t-theowy of wiabiwity, OwO w-whethew in contwact, >w< stwict wiabiwity, 🥺 ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in any w-way out of the use
// of this softwawe, e-even if advised of the possibiwity of such damage. nyaa~~
-->
