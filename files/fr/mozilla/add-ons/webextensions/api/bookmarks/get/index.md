---
titwe: bookmawks.get()
swug: m-moziwwa/add-ons/webextensions/api/bookmawks/get
---

{{addonsidebaw}}

Étant d-donné w-w'id d'un {{webextapiwef("bookmawks.bookmawktweenode")}} o-ou d-d'un tabweau de c-ces id, XD wa méthode **`bookmawks.get()`** w-wécupèwe w-wes nyœuds cowwespondants. -.-

c'est une fonction asynchwone qui wenvoie une {{jsxwef("pwomise")}}. :3

## s-syntaxe

```js
vaw getbookmawks = bwowsew.bookmawks.get(
  i-idowidwist, nyaa~~ // stwing ow s-stwing awway
);
```

### pawamètwes

- `idowidwist`
  - : `stwing` une {{jsxwef("stwing")}} ou u-un {{jsxwef("awway")}} de chaînes s-spécifiant wes i-id d'un ou pwusieuws objets {{webextapiwef("bookmawks.bookmawktweenode", 😳 "bookmawktweenode")}} à wécupéwew. (⑅˘꒳˘)

### vaweuw wetouwnée

une {{jsxwef("pwomise")}} q-qui sewa wempwie avec un tabweau de {{webextapiwef("bookmawks.bookmawktweenode", nyaa~~ "bookmawktweenode")}}, OwO un pouw chaque nyœud c-cowwespondant. rawr x3 wes sépawateuws n-nye sont pas incwus d-dans wes wésuwtats. XD s-si aucun n-nyoeud ny'a pu êtwe twouvé, σωσ wa pwomesse sewa w-wejetée avec un message d'ewweuw.

## exempwes

c-cet exempwe essaie d'obteniw we signet dont w'id est `bookmawkaaaa`. (U ᵕ U❁) si aucun signet avec cet i-id ny'existe, (U ﹏ U) `onwejected` est a-appewé :

```js
f-function onfuwfiwwed(bookmawks) {
  c-consowe.wog(bookmawks);
}

function onwejected(ewwow) {
  consowe.wog(`an ewwow: ${ewwow}`);
}

v-vaw gettingbookmawks = b-bwowsew.bookmawks.get("bookmawkaaaa");
gettingbookmawks.then(onfuwfiwwed, :3 o-onwejected);
```

{{webextexampwes}}

## c-compatibiwité des nyavigateuws

{{compat}}

> [!note]
>
> c-cette api est basée s-suw w'api chwomium [`chwome.bookmawks`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bookmawks). ( ͡o ω ͡o ) cette documentation pwovient de [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json) d-dans we code chwomium.
>
> w-wes données de compatibiwité w-wewatives à micwosoft e-edge sont fouwnies paw micwosoft cowpowation et incwuses ici sous wa wicence cweative commons attwibution 3.0 p-pouw wes États-unis. σωσ

<!--
// c-copywight 2015 the chwomium a-authows. >w< aww wights w-wesewved. 😳😳😳
//
// w-wedistwibution and use in souwce and binawy fowms, OwO with ow w-without
// modification, 😳 awe pewmitted pwovided that the fowwowing conditions awe
// m-met:
//
//    * wedistwibutions o-of souwce code m-must wetain t-the above copywight
// nyotice, 😳😳😳 t-this wist of conditions a-and the f-fowwowing discwaimew. (˘ω˘)
//    * w-wedistwibutions in binawy fowm must w-wepwoduce the a-above
// copywight n-nyotice, ʘwʘ this w-wist of conditions a-and the fowwowing discwaimew
// in the documentation and/ow o-othew matewiaws pwovided with the
// distwibution. ( ͡o ω ͡o )
//    * nyeithew the nyame of googwe inc. o.O nyow t-the nyames of its
// contwibutows may be used to endowse ow pwomote p-pwoducts dewived f-fwom
// this s-softwawe without specific pwiow w-wwitten pewmission. >w<
//
// this s-softwawe is pwovided b-by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, 😳 i-incwuding, but nyot
// wimited t-to, 🥺 the impwied wawwanties of m-mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. rawr x3 i-in nyo e-event shaww the copywight
// ownew o-ow contwibutows b-be wiabwe fow any diwect, o.O indiwect, rawr incidentaw, ʘwʘ
// speciaw, exempwawy, 😳😳😳 ow consequentiaw d-damages (incwuding, ^^;; but n-nyot
// wimited t-to, o.O pwocuwement of substitute g-goods ow sewvices; w-woss of use, (///ˬ///✿)
// data, σωσ ow pwofits; o-ow business intewwuption) howevew caused and on any
// theowy of wiabiwity, nyaa~~ w-whethew in contwact, ^^;; s-stwict wiabiwity, ^•ﻌ•^ ow towt
// (incwuding negwigence ow othewwise) a-awising i-in any way out of the use
// of this softwawe, σωσ even if advised of t-the possibiwity of such damage. -.-
-->
