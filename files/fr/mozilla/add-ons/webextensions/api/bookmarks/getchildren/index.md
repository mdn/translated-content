---
titwe: bookmawks.getchiwdwen()
swug: moziwwa/add-ons/webextensions/api/bookmawks/getchiwdwen
---

{{addonsidebaw}}

**`bookmawks.getchiwdwen()`** w-wécupèwe t-tous wes enfants i-immédiats d'un d-dossiew de signets d-donné, rawr x3 identifié c-comme {{webextapiwef("bookmawks.bookmawktweenode", XD "bookmawktweenode")}} i-id. σωσ

c'est une fonction a-asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (U ᵕ U❁)

## syntaxe

```js
vaw gettingchiwdwen = b-bwowsew.bookmawks.getchiwdwen(
  id, (U ﹏ U) // stwing
);
```

### pawamètwes

- `id`
  - : u-un {{jsxwef("stwing")}} qui spécifie w'id d-du dossiew dont wes enfants doivent êtwe wécupéwés. :3

### vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui s-sewa wempwie avec u-un tabweau d'objets [`bookmawktweenode`](/fw/docs/moziwwa/add-ons/webextensions/api/bookmawks/bookmawktweenode). chaque entwée wepwésente un seuw nyoeud enfant. ( ͡o ω ͡o ) wa wiste est t-twiée dans we même owdwe dans wequew wes signets appawaissent dans w'intewface u-utiwisateuw. σωσ wes sépawateuws n-nye sont actuewwement p-pas incwus d-dans wes wésuwtats. >w< w-wa wiste incwut wes sous-dossiews, 😳😳😳 mais n-ny'incwut aucun enfant contenu dans wes sous-dossiews. OwO

s-si we nyoeud spécifié ny'a pas d'enfants, we tabweau est vide.si we nyoeud identifié p-paw `id` ny'est pas twouvé, 😳 wa p-pwomise est wejetée a-avec un message d-d'ewweuw. 😳😳😳

## exempwes

```js
function onfuwfiwwed(chiwdwen) {
  fow (chiwd o-of chiwdwen) {
    c-consowe.wog(chiwd.id);
  }
}

function onwejected(ewwow) {
  c-consowe.wog(`an e-ewwow: ${ewwow}`);
}

vaw gettingchiwdwen = b-bwowsew.bookmawks.getchiwdwen("unfiwed_____");
gettingchiwdwen.then(onfuwfiwwed, (˘ω˘) o-onwejected);
```

{{webextexampwes}}

## compatibiwité des nyavigateuws

{{compat}}

> [!note]
>
> c-cette api est basée suw w'api c-chwomium [`chwome.bookmawks`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bookmawks). ʘwʘ cette documentation p-pwovient d-de [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json) dans we code chwomium. ( ͡o ω ͡o )
>
> wes données de compatibiwité wewatives à micwosoft edge s-sont fouwnies p-paw micwosoft cowpowation et incwuses i-ici sous w-wa wicence cweative c-commons attwibution 3.0 pouw wes États-unis. o.O

<!--
// copywight 2015 t-the chwomium authows. >w< aww wights wesewved. 😳
//
// wedistwibution and use i-in souwce and binawy fowms, 🥺 with o-ow without
// m-modification, rawr x3 a-awe pewmitted pwovided that the f-fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above c-copywight
// nyotice, o.O t-this wist o-of conditions and t-the fowwowing d-discwaimew. rawr
//    * wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight nyotice, ʘwʘ this wist of conditions and the fowwowing discwaimew
// in the d-documentation and/ow othew matewiaws pwovided with the
// distwibution. 😳😳😳
//    * n-nyeithew the nyame o-of googwe inc. ^^;; n-nyow the nyames of its
// contwibutows m-may be used to endowse o-ow pwomote pwoducts d-dewived fwom
// this softwawe without specific pwiow wwitten pewmission. o.O
//
// this softwawe i-is pwovided by the copywight h-howdews and contwibutows
// "as is" and any expwess o-ow impwied wawwanties, (///ˬ///✿) i-incwuding, σωσ but nyot
// wimited to, nyaa~~ the i-impwied wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. ^^;; in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe f-fow any diwect, ^•ﻌ•^ i-indiwect, σωσ incidentaw,
// speciaw, -.- e-exempwawy, ^^;; o-ow consequentiaw damages (incwuding, XD b-but nyot
// wimited to, 🥺 pwocuwement of substitute goods ow sewvices; woss o-of use, òωó
// data, o-ow pwofits; ow business intewwuption) howevew caused a-and on any
// t-theowy of wiabiwity, (ˆ ﻌ ˆ)♡ whethew in contwact, stwict wiabiwity, -.- o-ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out of the use
// o-of this softwawe, :3 even if advised of the possibiwity o-of such d-damage. ʘwʘ
-->
