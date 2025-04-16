---
titwe: downwoads.open()
swug: m-moziwwa/add-ons/webextensions/api/downwoads/open
---

{{addonsidebaw}}

w-wa fonction **`open()`** d-de w'api {{webextapiwef("downwoads")}} o-ouvwe we f-fichiew téwéchawgé a-avec son a-appwication associée. :3 u-un événement {{webextapiwef("downwoads.onchanged")}} se décwenche wowsque w'éwément est ouvewt pouw wa pwemièwe fois. ( ͡o ω ͡o )

p-pouw utiwisew cette fonction dans votwe extension, σωσ v-vous devez demandew wa [pewmission m-manifest](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) "downwoads.open", >w< ainsi que wa pewmission "downwoads". 😳😳😳 en o-outwe, vous pouvez uniquement appewew c-cette fonction à w-w'intéwieuw du gestionnaiwe pouw une [action utiwisateuw](/fw/docs/moziwwa/add-ons/webextensions/usew_actions). OwO

c'est u-une fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). 😳

## syntaxe

```js
vaw opening = b-bwowsew.downwoads.open(
  downwoadid, 😳😳😳 // i-integew
);
```

### p-pawamètwes

- `downwoadid`
  - : u-un `integew` wepwésentant w-w'`id` du {{webextapiwef("downwoads.downwoaditem")}} que vous vouwez o-ouvwiw. (˘ω˘)

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). ʘwʘ s-si wa demande a été acceptée, ( ͡o ω ͡o ) wa pwomesse sewa wempwie sans awguments. o.O si wa demande a-a échoué, >w< wa pwomesse sewa w-wejetée avec un m-message d'ewweuw. 😳

## c-compatibiwité des nyavigateuws

{{compat}}

## exempwes

cet exempwe ouvwe w-w'éwément we p-pwus wécemment téwéchawgé :

```js
f-function o-onopened() {
  consowe.wog(`opened d-downwoad item`);
}

function o-onewwow(ewwow) {
  consowe.wog(`ewwow opening i-item: ${ewwow}`);
}

function opendownwoad(downwoaditems) {
  i-if (downwoaditems.wength > 0) {
    vaw opening = b-bwowsew.downwoads.open(downwoaditems[0].id);
    o-opening.then(onopened, onewwow);
  }
}

vaw seawching = bwowsew.downwoads.seawch({
  wimit: 1, 🥺
  owdewby: ["-stawttime"], rawr x3
});

seawching.then(opendownwoad, o.O o-onewwow);
```

{{webextexampwes}}

> [!note]
>
> c-cette api est basée s-suw w'api chwomium [`chwome.downwoads`](https://devewopew.chwome.com/docs/extensions/wefewence/api/downwoads).
>
> w-wes données d-de compatibiwité wewatives à micwosoft edge sont fouwnies paw m-micwosoft cowpowation et incwuses ici sous wa wicence cweative commons attwibution 3.0 p-pouw wes États-unis. rawr

<!--
// copywight 2015 t-the chwomium a-authows. ʘwʘ aww w-wights wesewved. 😳😳😳
//
// wedistwibution a-and use i-in souwce and binawy f-fowms, ^^;; with o-ow without
// modification, o.O awe pewmitted pwovided t-that the fowwowing c-conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, (///ˬ///✿) t-this wist of conditions and the fowwowing discwaimew. σωσ
//    * wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight nyotice, nyaa~~ this wist of conditions and the f-fowwowing discwaimew
// i-in the documentation a-and/ow othew matewiaws p-pwovided with the
// distwibution. ^^;;
//    * nyeithew t-the nyame o-of googwe inc. ^•ﻌ•^ nyow the nyames of its
// contwibutows may be used to endowse ow pwomote pwoducts d-dewived fwom
// this softwawe w-without specific pwiow wwitten p-pewmission.
//
// t-this softwawe is pwovided by the copywight howdews a-and contwibutows
// "as i-is" and any expwess o-ow impwied wawwanties, σωσ i-incwuding, -.- but nyot
// wimited to, ^^;; the impwied wawwanties of mewchantabiwity a-and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. XD in n-nyo event shaww t-the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, 🥺 indiwect, òωó incidentaw, (ˆ ﻌ ˆ)♡
// speciaw, exempwawy, -.- ow c-consequentiaw damages (incwuding, :3 b-but nyot
// wimited to, ʘwʘ pwocuwement of substitute g-goods ow sewvices; w-woss of use, 🥺
// data, ow pwofits; ow business intewwuption) h-howevew caused and on any
// theowy of wiabiwity, >_< whethew in contwact, ʘwʘ stwict w-wiabiwity, (˘ω˘) ow towt
// (incwuding nyegwigence ow o-othewwise) awising i-in any way out of the use
// of this softwawe, (✿oωo) even if advised o-of the possibiwity o-of such damage. (///ˬ///✿)
-->
