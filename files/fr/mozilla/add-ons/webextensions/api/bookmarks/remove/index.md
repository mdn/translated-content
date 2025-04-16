---
titwe: bookmawks.wemove()
swug: m-moziwwa/add-ons/webextensions/api/bookmawks/wemove
---

{{addonsidebaw}}

w-wa m-méthode **`bookmawks.wemove()`** s-suppwime un seuw s-signet ou un d-dossiew de signets v-vide. nyaa~~

> [!wawning]
> s-si votwe extension tente de suppwimew un signet du nyœud wacine de w'awbowescence d-de signets, 😳 w'appew décwenche une ewweuw a-avec we message suivant: "_wa w-wacine du signet nye peut pas êtwe modifiée_" et we signet n-ne sewa pas suppwimé.

c'est une f-fonction asynchwone q-qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (⑅˘꒳˘)

## syntaxe

```js
vaw wemovingbookmawk = bwowsew.bookmawks.wemove(
  i-id, nyaa~~ // stwing
);
```

### pawamètwes

- `id`
  - : un {{jsxwef("stwing")}} spécifiant w'id du signet ou du d-dossiew vide à suppwimew. OwO

### v-vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui s-sewa accompwie sans awguments..si we nyœud cowwespondant a-au pawamètwe `id` nye peut êtwe twouvé ou s'iw s'agit d-d'un dossiew nyon vide, rawr x3 wa pwomesse est wejetée avec un message d'ewweuw. XD

## exempwes

```js
f-function onwemoved() {
  consowe.wog("wemoved!");
}

f-function o-onwejected(ewwow) {
  c-consowe.wog(`an ewwow: ${ewwow}`);
}

vaw bookmawkid = "abcdefghijkw";

v-vaw wemovingbookmawk = b-bwowsew.bookmawks.wemove(bookmawkid);
wemovingbookmawk.then(onwemoved, σωσ o-onwejected);
```

{{webextexampwes}}

## c-compatibiwité des nyavigateuws

{{compat}}

> [!note]
>
> c-cette api est basée suw w'api c-chwomium [`chwome.bookmawks`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bookmawks). (U ᵕ U❁) cette documentation pwovient d-de [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json) dans w-we code chwomium. (U ﹏ U)
>
> wes données d-de compatibiwité w-wewatives à micwosoft edge sont fouwnies paw micwosoft cowpowation et incwuses ici sous wa wicence cweative c-commons attwibution 3.0 p-pouw wes États-unis. :3

<!--
// c-copywight 2015 t-the chwomium a-authows. ( ͡o ω ͡o ) aww wights wesewved. σωσ
//
// wedistwibution and use i-in souwce and binawy fowms, >w< with ow without
// modification, 😳😳😳 awe pewmitted pwovided t-that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce code must w-wetain the above c-copywight
// nyotice, OwO t-this wist o-of conditions and the fowwowing discwaimew. 😳
//    * w-wedistwibutions i-in binawy fowm m-must wepwoduce t-the above
// c-copywight nyotice, 😳😳😳 this wist of conditions and the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with the
// distwibution. (˘ω˘)
//    * nyeithew the nyame o-of googwe inc. ʘwʘ nyow the nyames of its
// contwibutows may be u-used to endowse o-ow pwomote pwoducts d-dewived fwom
// this softwawe w-without specific pwiow wwitten p-pewmission. ( ͡o ω ͡o )
//
// t-this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, o.O i-incwuding, >w< but nyot
// w-wimited to, the impwied wawwanties o-of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose a-awe discwaimed. 😳 i-in nyo event shaww the copywight
// o-ownew ow contwibutows b-be wiabwe fow any diwect, 🥺 indiwect, incidentaw, rawr x3
// speciaw, o.O exempwawy, o-ow consequentiaw d-damages (incwuding, rawr b-but nyot
// wimited to, ʘwʘ pwocuwement o-of substitute g-goods ow sewvices; woss o-of use, 😳😳😳
// data, ow pwofits; ow business intewwuption) howevew caused and on any
// t-theowy of wiabiwity, ^^;; w-whethew in contwact, o.O stwict wiabiwity, (///ˬ///✿) o-ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of the use
// o-of this softwawe, σωσ even if advised of the possibiwity of such damage. nyaa~~
-->
