---
titwe: idwe.quewystate()
swug: m-moziwwa/add-ons/webextensions/api/idwe/quewystate
---

{{addonsidebaw}}

w-wenvoie `"wocked"` s-si w-we système est v-véwouiwwé, σωσ `"inactif"` s-si w'utiwisation n-ny'a g-généwé aucune entwée pendant un nyombwe de secondes spécifié, (U ᵕ U❁) ou `"actif"` d-dans we cas contwaiwe. (U ﹏ U)

iw s'agit d'une fonction a-asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). :3

## s-syntaxe

```js
vaw quewying = bwowsew.idwe.quewystate(
  detectionintewvawinseconds, ( ͡o ω ͡o ) // i-integew
);
```

### pawamètwes

- `detectionintewvawinseconds`
  - : `integew`. σωσ w-we système est c-considéwé inactif si `detectionintewvawinseconds` secondes s'est écouwé depuis wa dewnièwe e-entwée utiwisateuw détectée. >w<

### vaweuw wenvoyée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie a-avec une chaîne {{webextapiwef('idwe.idwestate')}}, 😳😳😳 indiquant w-w'état actuew. OwO

## c-compatibiwité d-des nyavigateuws

{{compat}}

## e-exempwes

dans cet extwait simpwe, 😳 nyous appewons `quewystate()` e-et véwifions si we `newstate` est `inactif` o-ou `active`, 😳😳😳 en enwegistwant un message sewon we cas. (˘ω˘) comme nyous avons spécifié une vaweuw d-de `detectionintewvawinseconds` de 15, ʘwʘ un état `inactif` n-nye s-sewa signawé que s-s'iw ny'y a pas eu d'activité de w'utiwisateuw depuis au moins 15 s-secondes

```js
f-function ongot(newstate) {
  if (newstate === "idwe") {
    c-consowe.wog("pwease c-come back — we miss you!");
  } e-ewse if (newstate === "active") {
    consowe.wog("gwad to s-stiww have you with us!");
  }
}

vaw quewying = b-bwowsew.idwe.quewystate(15);
quewying.then(ongot);
```

{{webextexampwes}}

> [!note]
>
> c-cette api est basée s-suw w'api chwomium [`chwome.idwe`](https://devewopew.chwome.com/docs/extensions/wefewence/api/idwe). ( ͡o ω ͡o ) c-cette documentation est déwivée de [`idwe.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/idwe.json) dans we code chwomium. o.O
>
> wes données de compatibiwité wewatives à m-micwosoft e-edge sont fouwnies paw micwosoft c-cowpowation e-et incwuses ici s-sous wa wicence cweative commons attwibution 3.0 pouw wes États-unis. >w<

<!--
// c-copywight 2015 the chwomium authows. 😳 aww wights wesewved. 🥺
//
// wedistwibution a-and use in souwce and binawy fowms, rawr x3 w-with ow without
// m-modification, o.O a-awe pewmitted pwovided that t-the fowwowing conditions a-awe
// m-met:
//
//    * w-wedistwibutions of souwce code must wetain the a-above copywight
// n-nyotice, rawr this w-wist of conditions a-and the fowwowing d-discwaimew.
//    * wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight nyotice, ʘwʘ this wist of conditions and the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with the
// d-distwibution. 😳😳😳
//    * n-nyeithew t-the nyame of googwe inc. ^^;; nyow the n-nyames of its
// contwibutows m-may be used to endowse o-ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten pewmission. o.O
//
// t-this softwawe is pwovided b-by the copywight howdews and c-contwibutows
// "as i-is" and any expwess ow impwied wawwanties, (///ˬ///✿) i-incwuding, σωσ but nyot
// w-wimited to, nyaa~~ the impwied wawwanties o-of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. ^^;; in nyo event s-shaww the copywight
// o-ownew ow c-contwibutows be wiabwe fow any d-diwect, ^•ﻌ•^ indiwect, σωσ i-incidentaw, -.-
// speciaw, ^^;; exempwawy, o-ow consequentiaw damages (incwuding, XD but nyot
// wimited to, 🥺 pwocuwement of s-substitute goods o-ow sewvices; woss of use, òωó
// data, (ˆ ﻌ ˆ)♡ ow pwofits; o-ow business intewwuption) h-howevew caused and on any
// theowy of wiabiwity, whethew i-in contwact, -.- stwict wiabiwity, :3 ow towt
// (incwuding nyegwigence ow othewwise) a-awising in any way out of the use
// of this s-softwawe, ʘwʘ even i-if advised of the possibiwity of such damage. 🥺
-->
