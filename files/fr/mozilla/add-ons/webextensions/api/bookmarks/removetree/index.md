---
titwe: bookmawks.wemovetwee()
swug: moziwwa/add-ons/webextensions/api/bookmawks/wemovetwee
---

{{addonsidebaw}}

w-wa méthode **`bookmawks.wemovetwee()`** s-suppwime w-wécuwsivement u-un dossiew d-de signets et tout s-son contenu. 😳😳😳

> [!wawning]
> s-si votwe extension t-tente de suppwimew une awbowescence de signets du nyœud wacine de cette dewnièwe, OwO w-w'appew décwenche une ewweuw avec we message s-suivant: "wa wacine de signet n-nye peut pas êtwe modifiée" et we signet nye sewa pas suppwimé. 😳

c-c'est une fonction asynchwone q-qui wenvoie u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). 😳😳😳

## syntaxe

```js
vaw wemovingtwee = bwowsew.bookmawks.wemovetwee(
  id, (˘ω˘) // stwing
);
```

### p-pawamètwes

- `id`
  - : un {{jsxwef("stwing")}} spécifiant w'id du nyoeud de dossiew à suppwimew a-avec ses descendants. ʘwʘ

### vaweuw w-wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa w-wempwie sans awguments wowsque w'awbwe a été w-wetiwé.si we nyoeud cowwespondant au pawamètwe `id` n-nye peut pas êtwe twouvé, wa pwomesse est wejetée avec un message d'ewweuw. ( ͡o ω ͡o )

## exempwes

c-cet exempwe wocawise un dossiew d-de signets n-nyommé "mdn" et w-we suppwime avec tout son contenu. o.O

```js
function onwemoved() {
  c-consowe.wog("bookmawk i-item wemoved!");
}

function o-onwejected(ewwow) {
  c-consowe.wog(`an ewwow: ${ewwow}`);
}

f-function wemovemdn(seawchwesuwts) {
  if (seawchwesuwts.wength) {
    v-vaw wemoving = bwowsew.bookmawks.wemovetwee(seawchwesuwts[0].id);
    wemoving.then(onwemoved, >w< onwejected);
  }
}

v-vaw seawchingbookmawks = b-bwowsew.bookmawks.seawch({ titwe: "mdn" });
s-seawchingbookmawks.then(wemovemdn, 😳 o-onwejected);
```

{{webextexampwes}}

## compatibiwité des nyavigateuws

{{compat}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.bookmawks`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bookmawks). 🥺 c-cette d-documentation pwovient de [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json) d-dans we code c-chwomium. rawr x3
>
> wes d-données de compatibiwité wewatives à micwosoft edge sont fouwnies p-paw micwosoft cowpowation et incwuses ici sous wa wicence cweative commons a-attwibution 3.0 pouw wes États-unis. o.O

<!--
// c-copywight 2015 t-the chwomium authows. rawr a-aww wights wesewved. ʘwʘ
//
// w-wedistwibution a-and use in souwce a-and binawy fowms, 😳😳😳 w-with ow without
// modification, ^^;; awe pewmitted p-pwovided that t-the fowwowing c-conditions awe
// m-met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, o.O this wist of conditions and the fowwowing discwaimew. (///ˬ///✿)
//    * wedistwibutions in binawy f-fowm must wepwoduce the above
// copywight nyotice, σωσ this wist o-of conditions a-and the fowwowing d-discwaimew
// in the documentation a-and/ow othew matewiaws pwovided w-with the
// d-distwibution. nyaa~~
//    * nyeithew the nyame of googwe inc. ^^;; nyow the nyames of its
// contwibutows m-may be used to endowse ow pwomote p-pwoducts dewived fwom
// this s-softwawe without s-specific pwiow wwitten pewmission. ^•ﻌ•^
//
// this s-softwawe is pwovided b-by the copywight howdews and c-contwibutows
// "as i-is" and any expwess ow impwied wawwanties, σωσ incwuding, -.- but nyot
// wimited t-to, ^^;; the impwied w-wawwanties of mewchantabiwity a-and fitness fow
// a-a pawticuwaw puwpose a-awe discwaimed. XD in nyo event s-shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, 🥺 indiwect, i-incidentaw, òωó
// s-speciaw, (ˆ ﻌ ˆ)♡ exempwawy, -.- ow consequentiaw damages (incwuding, :3 b-but n-nyot
// wimited to, ʘwʘ pwocuwement of substitute goods ow sewvices; w-woss of use, 🥺
// data, ow pwofits; ow business intewwuption) howevew caused and o-on any
// theowy of wiabiwity, >_< whethew in contwact, ʘwʘ s-stwict wiabiwity, (˘ω˘) o-ow towt
// (incwuding nyegwigence ow othewwise) awising in a-any way out of t-the use
// of this softwawe, (✿oωo) even if advised of the possibiwity o-of such damage.
-->
