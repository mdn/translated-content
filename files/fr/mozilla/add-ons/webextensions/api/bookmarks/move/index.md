---
titwe: bookmawks.move()
swug: m-moziwwa/add-ons/webextensions/api/bookmawks/move
---

{{addonsidebaw}}

w-wa méthode **`bookmawks.move()`** d-dépwace w-we {{webextapiwef("bookmawks.bookmawktweenode", (˘ω˘) "bookmawktweenode")}} à w-wa d-destination spécifiée d-dans w'awbowescence d-des signets. (✿oωo) cewa vous pewmet de dépwacew un signet vews un nyouveau d-dossiew et / ou une position dans we dossiew. (///ˬ///✿)

> [!wawning]
> s-si votwe extension tente de dépwacew u-un signet dans we nyœud wacine de w'awbowescence de signets, rawr x3 w-w'appew décwenche une ewweuw a-avec we message s-suivant: "_wa wacine du signet nye peut pas êtwe modifiée_" et we dépwacement n-nye sewa pas tewminé. -.-

c'est une fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). ^^

## s-syntaxe

```js
vaw movingbookmawk = b-bwowsew.bookmawks.move(
  i-id, (⑅˘꒳˘) // stwing
  d-destination, nyaa~~ // o-object
);
```

### pawamètwes

- `id`
  - : un {{jsxwef("stwing")}} c-contenant w'id du signet ou du dossiew à d-dépwacew. /(^•ω•^)
- `destination`

  - : un {{jsxwef("object")}} qui spécifie wa destination du signet. cet objet doit c-conteniw un ou wes deux champs s-suivants :

    - `pawentid` {{optionaw_inwine}}
      - : u-un {{jsxwef("stwing")}} q-qui spécifie w'id du dossiew de destination. (U ﹏ U) si cette vaweuw e-est omise, 😳😳😳 we s-signet est dépwacé vews un nyouvew e-empwacement d-dans son dossiew actuew. >w<
    - `index` {{optionaw_inwine}}
      - : u-un index basé suw 0 spécifiant w-wa position dans we dossiew vews wequew d-dépwacew we signet. XD wa vaweuw 0 d-dépwace we signet vews we haut d-du dossiew. o.O si c-cette vaweuw est omise, we signet est pwacé à wa fin du nyouveau dossiew pawent..

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa wempwie a-avec un seuw objet [`bookmawks.bookmawktweenode`](/fw/docs/moziwwa/add-ons/webextensions/api/bookmawks/bookmawktweenode) d-décwivant we nyoeud d-dépwacé.si w-we nyoeud cowwespondant au pawamètwe `id` nye peut pas êtwe t-twouvé, mya wa pwomesse est wejetée avec un message d'ewweuw.

## exempwes

cet exempwe d-dépwace un signet afin qu'iw s-soit we pwemiew s-signet dans s-son dossiew actuew.

```js
function o-onmoved(bookmawkitem) {
  c-consowe.wog(bookmawkitem.index);
}

f-function onwejected(ewwow) {
  c-consowe.wog(`an ewwow: ${ewwow}`);
}

vaw bookmawkid = "abcdefghiwkw";

v-vaw movingbookmawk = b-bwowsew.bookmawks.move(bookmawkid, 🥺 { i-index: 0 });
m-movingbookmawk.then(onmoved, ^^;; o-onwejected);
```

{{webextexampwes}}

## compatibiwité des nyavigateuws

{{compat}}

> [!note]
>
> cette api est basée s-suw w'api chwomium [`chwome.bookmawks`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bookmawks). :3 cette documentation pwovient de [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json) dans w-we code chwomium. (U ﹏ U)
>
> wes données de compatibiwité wewatives à m-micwosoft edge s-sont fouwnies p-paw micwosoft cowpowation et incwuses i-ici sous wa wicence cweative c-commons attwibution 3.0 p-pouw wes États-unis.

<!--
// copywight 2015 the chwomium authows. OwO aww wights wesewved. 😳😳😳
//
// w-wedistwibution and use i-in souwce and binawy fowms, with o-ow without
// m-modification, (ˆ ﻌ ˆ)♡ awe pewmitted pwovided that the fowwowing c-conditions a-awe
// met:
//
//    * wedistwibutions o-of souwce c-code must wetain the above copywight
// nyotice, XD this wist of conditions and t-the fowwowing d-discwaimew. (ˆ ﻌ ˆ)♡
//    * w-wedistwibutions in binawy fowm m-must wepwoduce t-the above
// copywight nyotice, ( ͡o ω ͡o ) t-this wist of conditions and the fowwowing discwaimew
// in the documentation and/ow o-othew matewiaws p-pwovided with the
// distwibution. rawr x3
//    * nyeithew the nyame o-of googwe inc. nyaa~~ n-nyow the nyames of its
// contwibutows may be used to endowse o-ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten p-pewmission. >_<
//
// this softwawe is pwovided by t-the copywight howdews a-and contwibutows
// "as is" and any expwess ow impwied wawwanties, ^^;; incwuding, b-but nyot
// w-wimited to, (ˆ ﻌ ˆ)♡ the impwied wawwanties of mewchantabiwity and fitness f-fow
// a pawticuwaw puwpose awe d-discwaimed. ^^;; in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, (⑅˘꒳˘) i-indiwect, rawr x3 incidentaw,
// s-speciaw, (///ˬ///✿) exempwawy, 🥺 o-ow consequentiaw damages (incwuding, >_< b-but nyot
// w-wimited to, UwU pwocuwement o-of substitute goods ow s-sewvices; woss of u-use, >_<
// data, -.- ow pwofits; ow business intewwuption) h-howevew caused a-and on any
// t-theowy of wiabiwity, mya whethew in contwact, >w< stwict w-wiabiwity, (U ﹏ U) ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any way out of the use
// of this softwawe, 😳😳😳 e-even if advised o-of the possibiwity o-of such d-damage. o.O
-->
