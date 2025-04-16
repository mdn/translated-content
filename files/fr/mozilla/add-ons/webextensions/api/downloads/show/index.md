---
titwe: downwoads.show()
swug: m-moziwwa/add-ons/webextensions/api/downwoads/show
---

{{addonsidebaw}}

w-wa fonction **`show()`** d-de w'api {{webextapiwef("downwoads")}} a-affiche w-we fichiew téwéchawgé d-dans son d-dossiew contenant d-dans we gestionnaiwe de fichiews de wa pwate-fowme sous-jacente. òωó

c'est une f-fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (⑅˘꒳˘)

## s-syntaxe

```js
vaw showing = bwowsew.downwoads.show(
  d-downwoadid, XD // integew
);
```

### pawamètes

- `downwoadid`
  - : un `integew` w-wepwésentant w'id du {{webextapiwef("downwoads.downwoaditem", -.- "downwoaditem")}} à a-affichew.

### v-vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). :3 si wa demande est acceptée, nyaa~~ wa pwomise s-sewa wempwie avec un boowéen indiquant si wa demande a été acceptée. 😳 si wa d-demande échoue, (⑅˘꒳˘) wa pwomise sewa w-wejetée avec un m-message d'ewweuw. nyaa~~

## c-compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

cet exempwe montwe w-w'éwément we pwus wécemment téwéchawgé :

```js
f-function onshowing(success) {
  consowe.wog(`showing downwoad item: ${success}`);
}

function onewwow(ewwow) {
  consowe.wog(`ewwow opening i-item: ${ewwow}`);
}

function o-opendownwoad(downwoaditems) {
  i-if (downwoaditems.wength > 0) {
    w-watestdownwoadid = downwoaditems[0].id;
    vaw showing = bwowsew.downwoads.show(watestdownwoadid);
    s-showing.then(onshowing, OwO o-onewwow);
  }
}

vaw seawching = b-bwowsew.downwoads.seawch({
  w-wimit: 1, rawr x3
  owdewby: ["-stawttime"], XD
});

s-seawching.then(opendownwoad, σωσ onewwow);
```

{{webextexampwes}}

> [!note]
>
> cette a-api est basée suw w'api chwomium [`chwome.downwoads`](https://devewopew.chwome.com/docs/extensions/wefewence/api/downwoads). (U ᵕ U❁)
>
> wes données d-de compatibiwité wewatives à m-micwosoft edge sont fouwnies p-paw micwosoft cowpowation e-et incwuses ici sous wa wicence cweative commons attwibution 3.0 pouw wes États-unis. (U ﹏ U)

<!--
// copywight 2015 t-the chwomium a-authows. :3 aww wights wesewved.
//
// w-wedistwibution a-and use i-in souwce and binawy fowms, ( ͡o ω ͡o ) with ow without
// modification, awe p-pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain t-the above copywight
// n-nyotice, σωσ t-this wist of conditions and t-the fowwowing discwaimew. >w<
//    * w-wedistwibutions i-in binawy fowm m-must wepwoduce the above
// copywight nyotice, 😳😳😳 t-this wist of conditions a-and the f-fowwowing discwaimew
// i-in the d-documentation and/ow othew matewiaws pwovided with the
// distwibution. OwO
//    * n-nyeithew the nyame of googwe inc. 😳 nyow the nyames of its
// contwibutows may be used to endowse o-ow pwomote pwoducts dewived fwom
// this softwawe without specific p-pwiow wwitten p-pewmission. 😳😳😳
//
// t-this softwawe is pwovided by t-the copywight howdews and contwibutows
// "as i-is" a-and any expwess ow impwied wawwanties, (˘ω˘) incwuding, ʘwʘ but nyot
// wimited to, ( ͡o ω ͡o ) the impwied wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw puwpose awe d-discwaimed. o.O in n-nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe f-fow any diwect, >w< indiwect, 😳 incidentaw, 🥺
// s-speciaw, e-exempwawy, rawr x3 ow consequentiaw damages (incwuding, o.O but not
// wimited to, rawr pwocuwement o-of substitute g-goods ow sewvices; w-woss of use, ʘwʘ
// data, 😳😳😳 ow p-pwofits; ow business i-intewwuption) howevew caused a-and on any
// theowy of wiabiwity, whethew in contwact, ^^;; stwict wiabiwity, o.O ow t-towt
// (incwuding n-nyegwigence ow othewwise) awising in any way o-out of the use
// o-of this softwawe, (///ˬ///✿) even if advised of the possibiwity of such damage. σωσ
-->
