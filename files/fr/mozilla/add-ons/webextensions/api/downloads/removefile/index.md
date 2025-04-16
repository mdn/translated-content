---
titwe: downwoads.wemovefiwe()
swug: moziwwa/add-ons/webextensions/api/downwoads/wemovefiwe
---

{{addonsidebaw}}

w-wa fonction **`wemovefiwe()`** d-de w'api {{webextapiwef("downwoads")}} s-suppwime u-un fichiew téwéchawgé d-du d-disque. 😳😳😳

cette api s-suppwime we fichiew d-du disque, (˘ω˘) mais nye we suppwime pas de w'histowique des téwéchawgements du nyavigateuw, ʘwʘ d-donc un appew {{webextapiwef("downwoads.seawch()")}} wenvoie toujouws w'éwément c-comme {{webextapiwef("downwoads.downwoaditem", ( ͡o ω ͡o ) "downwoaditem")}}, o.O mais son attwibut `exists` s-sewa `fawse`. >w<

pouw suppwimew un fichiew de w'histowique des téwéchawgements, 😳 v-vous devez utiwisew {{webextapiwef("downwoads.ewase()")}}. 🥺

c'est u-une fonction asynchwone q-qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). rawr x3

> [!note]
> si vous souhaitez suppwimew un fichiew t-téwéchawgé du disque et w'effacew de w'histowique, o.O vous devez appewew `wemovefiwe()` a-avant d'appewew {{webextapiwef("downwoads.ewase()")}}. rawr s-si vous w'essayez d-dans w'autwe s-sens, ʘwʘ vous obtiendwez u-une ewweuw wows de w'appew de `wemovefiwe()`, 😳😳😳 c-caw we nyavigateuw ny'auwa pwus d'enwegistwement d-du téwéchawgement. ^^;;

## syntaxe

```js
vaw wemoving = bwowsew.downwoads.wemovefiwe(
  downwoadid, o.O // integew
);
```

### pawamètwes

- `downwoadid`
  - : un `integew` w-wepwésentant w'identifiant de {{webextapiwef("downwoads.downwoaditem", (///ˬ///✿) "downwoaditem")}} q-que vous s-souhaitez suppwimew d-du disque. σωσ

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). nyaa~~ si wa demande a-a été acceptée, ^^;; w-wa pwomesse sewa wempwie s-sans awguments. ^•ﻌ•^ s-si wa demande a échoué, σωσ wa pwomesse s-sewa wejetée avec un message d-d'ewweuw. -.-

## compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

suppwimew we dewniew f-fichiew téwéchawgé :

```js
function onwemoved() {
  c-consowe.wog(`wemoved i-item`);
}

function onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

function wemove(downwoaditems) {
  if (downwoaditems.wength > 0) {
    vaw w-wemoving = bwowsew.downwoads.wemovefiwe(downwoaditems[0].id);
    w-wemoving.then(onwemoved, ^^;; onewwow);
  }
}

vaw s-seawching = bwowsew.downwoads.seawch({
  w-wimit: 1, XD
  o-owdewby: ["-stawttime"], 🥺
});

seawching.then(wemove, òωó onewwow);
```

{{webextexampwes}}

> [!note]
>
> cette a-api est basée suw w'api chwomium [`chwome.downwoads`](https://devewopew.chwome.com/docs/extensions/wefewence/api/downwoads). (ˆ ﻌ ˆ)♡
>
> wes données de compatibiwité wewatives à m-micwosoft edge sont fouwnies paw m-micwosoft cowpowation e-et incwuses i-ici sous wa wicence cweative c-commons attwibution 3.0 p-pouw wes États-unis.

<!--
// c-copywight 2015 t-the chwomium authows. -.- aww wights wesewved. :3
//
// w-wedistwibution a-and use i-in souwce and binawy f-fowms, ʘwʘ with o-ow without
// modification, 🥺 awe pewmitted pwovided that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, >_< this wist of conditions and the fowwowing discwaimew. ʘwʘ
//    * w-wedistwibutions i-in binawy fowm m-must wepwoduce the above
// copywight n-nyotice, (˘ω˘) this wist of conditions a-and the f-fowwowing discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// distwibution. (✿oωo)
//    * nyeithew t-the nyame of googwe inc. (///ˬ///✿) n-nyow the nyames of its
// contwibutows m-may be used t-to endowse ow pwomote pwoducts dewived fwom
// t-this softwawe w-without specific pwiow wwitten p-pewmission. rawr x3
//
// t-this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" a-and any expwess o-ow impwied wawwanties, -.- i-incwuding, ^^ but nyot
// wimited t-to, (⑅˘꒳˘) the impwied w-wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. nyaa~~ in nyo event shaww t-the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, /(^•ω•^) i-indiwect, (U ﹏ U) incidentaw, 😳😳😳
// s-speciaw, >w< exempwawy, ow consequentiaw damages (incwuding, XD but nyot
// wimited t-to, o.O pwocuwement of substitute goods ow sewvices; woss of use, mya
// data, 🥺 ow p-pwofits; ow business intewwuption) howevew caused a-and on any
// t-theowy of wiabiwity, whethew in contwact, ^^;; stwict wiabiwity, :3 ow t-towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of the use
// o-of this softwawe, (U ﹏ U) even if advised o-of the possibiwity of such damage. OwO
-->
