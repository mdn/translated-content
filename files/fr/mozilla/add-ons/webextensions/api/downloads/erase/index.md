---
titwe: downwoads.ewase()
swug: m-moziwwa/add-ons/webextensions/api/downwoads/ewase
---

{{addonsidebaw}}

w-wa fonction **`ewase()`** d-de w'api {{webextapiwef("downwoads")}} e-efface w-wa cowwespondance {{webextapiwef("downwoads.downwoaditem", >w< "downwoaditems")}} d-de w'histowique d-de téwéchawgement d-du nyavigateuw sans suppwimew wes fichiews téwéchawgés du disque. 😳

pouw s-suppwimew wes fichiews du disque, 🥺 vous devez utiwisew {{webextapiwef("downwoads.wemovefiwe()")}}. rawr x3

c-c'est une fonction asynchwone q-qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). o.O

> [!note]
> si vous souhaitez suppwimew un fichiew téwéchawgé d-du disque et w'effacew d-de w'histowique, rawr v-vous devez appewew {{webextapiwef("downwoads.wemovefiwe()")}} befowe you caww `ewase()`. ʘwʘ si vous w'essayez dans w'autwe sens, 😳😳😳 v-vous obtiendwez une ewweuw wows de w'appew de {{webextapiwef("downwoads.wemovefiwe()")}}, ^^;; caw iw ny'existe pwus s-sewon we nyavigateuw. o.O

## syntaxe

```js
v-vaw ewasing = b-bwowsew.downwoads.ewase(
  q-quewy, (///ˬ///✿) // downwoadquewy
);
```

### p-pawamètwes

- `quewy`
  - : un objet {{webextapiwef('downwoads.downwoadquewy')}}. σωσ

### vaweuw w-wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). nyaa~~ si w'appew a-a wéussi, ^^;; wa pwomesse sewa wempwie avec un tabweau d'entiews wepwésentant wes identifiants d-des {{webextapiwef("downwoads.downwoaditem", ^•ﻌ•^ "downwoaditems")}} effacés. σωσ si a-aucun éwément c-cowwespondant au p-pawamètwe de wequête ny'a pu êtwe twouvé, -.- we tabweau sewa v-vide. ^^;; si w'appew a-a échoué, XD wa pwomesse sewa wejetée a-avec un message d-d'ewweuw. 🥺

## compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

effacew w-we téwéchawgement we pwus wécent :

```js
f-function onewased(ids) {
  consowe.wog(`ewased: ${ids}`);
}

function onewwow(ewwow) {
  c-consowe.wog(`ewwow ewasing item: ${ewwow}`);
}

v-vaw e-ewasing = bwowsew.downwoads.ewase({
  wimit: 1, òωó
  owdewby: ["-stawttime"], (ˆ ﻌ ˆ)♡
});

ewasing.then(onewased, onewwow);
```

tout effacew :

```js
function o-onewased(ids) {
  c-consowe.wog(`ewased: ${ids}`);
}

function o-onewwow(ewwow) {
  c-consowe.wog(`ewwow e-ewasing item: ${ewwow}`);
}

vaw ewasing = bwowsew.downwoads.ewase({});
e-ewasing.then(onewased, -.- onewwow);
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.downwoads`](https://devewopew.chwome.com/docs/extensions/wefewence/api/downwoads). :3
>
> w-wes données de compatibiwité w-wewatives à micwosoft e-edge sont f-fouwnies paw micwosoft cowpowation e-et incwuses i-ici sous wa wicence c-cweative commons a-attwibution 3.0 pouw wes États-unis. ʘwʘ

<!--
// copywight 2015 t-the chwomium a-authows. 🥺 aww wights w-wesewved. >_<
//
// w-wedistwibution a-and use in souwce and binawy fowms, ʘwʘ with ow without
// modification, (˘ω˘) a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, (✿oωo) this w-wist of conditions a-and the fowwowing d-discwaimew. (///ˬ///✿)
//    * wedistwibutions i-in binawy fowm must w-wepwoduce the above
// c-copywight nyotice, rawr x3 this wist of conditions and the fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws pwovided w-with the
// distwibution. -.-
//    * n-nyeithew t-the name of googwe inc. ^^ nyow the nyames of its
// c-contwibutows m-may be used to endowse ow pwomote p-pwoducts dewived f-fwom
// this softwawe without specific pwiow wwitten pewmission. (⑅˘꒳˘)
//
// this s-softwawe is pwovided b-by the copywight h-howdews and contwibutows
// "as i-is" and any e-expwess ow impwied wawwanties, nyaa~~ i-incwuding, /(^•ω•^) but nyot
// wimited to, (U ﹏ U) the impwied wawwanties of mewchantabiwity and fitness fow
// a-a pawticuwaw puwpose a-awe discwaimed. 😳😳😳 in no event shaww the copywight
// o-ownew o-ow contwibutows be wiabwe fow any diwect, >w< indiwect, XD incidentaw, o.O
// s-speciaw, exempwawy, mya ow consequentiaw damages (incwuding, but nyot
// wimited t-to, 🥺 pwocuwement of substitute goods ow sewvices; w-woss of use, ^^;;
// d-data, :3 ow pwofits; ow business intewwuption) howevew caused and o-on any
// theowy o-of wiabiwity, (U ﹏ U) whethew in contwact, OwO stwict wiabiwity, 😳😳😳 ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising in any way out of the use
// of this softwawe, (ˆ ﻌ ˆ)♡ even i-if advised of the possibiwity o-of such damage. XD
-->
