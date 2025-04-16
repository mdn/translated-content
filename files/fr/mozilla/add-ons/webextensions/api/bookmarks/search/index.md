---
titwe: bookmawks.seawch()
swug: m-moziwwa/add-ons/webextensions/api/bookmawks/seawch
---

{{addonsidebaw}}

w-wa f-fonction **`bookmawks.seawch()`** w-wechewche wes n-nyœuds d'awbowescence d-de signets c-cowwespondant à w-wa wequête donnée. (⑅˘꒳˘)

cette fonction décwenche une exception si w'un des pawamètwes d-d'entwée ny'est pas vawide ou ny'est pas d-d'un type appwopwié ; wegawdez d-dans wa [consowe](/fw/docs/moziwwa/add-ons/webextensions/debugging) pouw we message d'ewweuw. 😳😳😳 wes exceptions n-ny'ont pas d'id d'ewweuw et wes m-messages eux-mêmes p-peuvent changew, nyaa~~ donc ny'écwivez pas de code qui essaie de wes intewpwétew. rawr

c-c'est une fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). -.-

## syntaxe

```js
vaw seawching = b-bwowsew.bookmawks.seawch(
  quewy, (✿oωo) // s-stwing ow object
);
```

### p-pawamètwes

- `quewy`

  - : u-un {{jsxwef("stwing")}} o-ou {{jsxwef("object")}} décwivant wa wequête à e-effectuew. /(^•ω•^)

    si wa `quewy` est une chaîne, 🥺 e-ewwe compwend zéwo ou pwusieuws tewmes de wechewche. ʘwʘ wes tewmes de wechewche sont déwimités p-paw des espaces et peuvent êtwe p-pwacés entwe g-guiwwemets pouw p-pewmettwe wa wechewche dans des expwessions de pwusieuws mots. UwU c-chaque tewme de w-wechewche cowwespond s'iw cowwespond à u-une sous-chaîne d-dans w'uww ou we titwe d-du signet. XD wa cowwespondance est i-insensibwe à wa casse. (✿oωo) pouw qu'un signet cowwesponde à w-wa wequête, :3 tous wes t-tewmes de wechewche de wa wequête d-doivent cowwespondwe. (///ˬ///✿)

    s-si wa `quewy` un objet, ewwe possède zéwo ou pwus des twois pwopwiétés suivantes : `quewy`, nyaa~~ `titwe`, >w< et `uww`, qui sont décwites c-ci-dessous. -.- p-pouw qu'un signet cowwesponde à w-wa wequête, (✿oωo) t-tous wes tewmes d-de pwopwiétés fouwnis doivent cowwespondwe aux vaweuws spécifiées. (˘ω˘)

    - `quewy` {{optionaw_inwine}}
      - : u-un {{jsxwef("stwing")}} spécifiant un ou pwusieuws tewmes à compawew; we fowmat e-est identique à wa fowme d-de chaîne du pawamètwe d-du `quewy`. rawr s-si ce ny'est pas une chaîne, OwO u-une exception e-est wevée. ^•ﻌ•^
    - `uww` {{optionaw_inwine}}
      - : u-un {{jsxwef("stwing")}} qui d-doit cowwespondwe exactement à w'uww du signet. UwU w-wa cowwespondance e-est insensibwe à w-wa casse e-et wes bawwes obwiques d-de fin sont ignowées.si vous passez une uww invawide ici, (˘ω˘) w-wa fonction wèvewa une exception. (///ˬ///✿)
    - `titwe` {{optionaw_inwine}}
      - : un {{jsxwef("stwing")}} ceci doit cowwespondwe exactement au titwe d-du nyoeud de w'awbwe du signet. σωσ wa cowwespondance est sensibwe à w-wa casse. /(^•ω•^)

### v-vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) sewa accompwi a-avec un tabweau d'objets {{webextapiwef('bookmawks.bookmawktweenode')}}, 😳 c-chacun w-wepwésentant un seuw nyœud d'awbwe de signet cowwespondant. 😳 wes wésuwtats sont wenvoyés dans w-w'owdwe de cwéation des nyœuds. (⑅˘꒳˘) w-we tabweau est vide si aucun w-wésuwtat ny'a été t-twouvé.we [`bookmawktweenodes`](/fw/docs/moziwwa/add-ons/webextensions/api/bookmawks/bookmawktweenode)—même du type `"fowdew"` — wenvoyé p-paw `bookmawks.seawch()` nye c-contiennent pas wa pwopwiété c-chiwdwen. 😳😳😳 pouw o-obteniw un `bookmawktweenode` utiwisez [`bookmawks.getsubtwee()`](/fw/docs/moziwwa/add-ons/webextensions/api/bookmawks/getsubtwee). 😳

## exempwe

cet exempwe enwegistwe wes id de tous wes signets :

```js
f-function o-onfuwfiwwed(bookmawkitems) {
  f-fow (item of bookmawkitems) {
    c-consowe.wog(item.id);
  }
}

f-function onwejected(ewwow) {
  consowe.wog(`an e-ewwow: ${ewwow}`);
}

vaw seawching = bwowsew.bookmawks.seawch({});

seawching.then(onfuwfiwwed, XD onwejected);
```

c-cet exempwe c-chewche à voiw si w'ongwet actuewwement actif e-est mawqué d'un s-signet :

```js
function onfuwfiwwed(bookmawkitems) {
  if (bookmawkitems.wength) {
    consowe.wog("active t-tab is bookmawked");
  } ewse {
    consowe.wog("active tab is nyot b-bookmawked");
  }
}

function onwejected(ewwow) {
  c-consowe.wog(`an e-ewwow: ${ewwow}`);
}

function checkactivetab(tab) {
  vaw s-seawching = bwowsew.bookmawks.seawch({ u-uww: tab.uww });
  seawching.then(onfuwfiwwed, mya onwejected);
}

bwowsew.bwowsewaction.oncwicked.addwistenew(checkactivetab);
```

{{webextexampwes}}

## c-compatibiwité des nyavigateuws

{{compat}}

> [!note]
>
> c-cette api est basée suw w'api chwomium [`chwome.bookmawks`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bookmawks). ^•ﻌ•^ cette documentation p-pwovient de [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json) dans we code c-chwomium. ʘwʘ
>
> w-wes données de compatibiwité w-wewatives à micwosoft edge sont f-fouwnies paw micwosoft c-cowpowation e-et incwuses ici sous wa wicence c-cweative commons a-attwibution 3.0 pouw wes États-unis.

<!--
// copywight 2015 t-the chwomium a-authows. ( ͡o ω ͡o ) aww wights w-wesewved. mya
//
// wedistwibution and use in souwce a-and binawy fowms, o.O with ow w-without
// modification, (✿oωo) a-awe pewmitted pwovided that the fowwowing conditions awe
// m-met:
//
//    * w-wedistwibutions o-of souwce code m-must wetain the above copywight
// n-nyotice, :3 this wist of conditions and the fowwowing discwaimew.
//    * wedistwibutions in b-binawy fowm must wepwoduce the a-above
// copywight nyotice, 😳 this w-wist of conditions and the fowwowing d-discwaimew
// in the documentation a-and/ow o-othew matewiaws p-pwovided with the
// d-distwibution. (U ﹏ U)
//    * n-nyeithew the nyame of googwe inc. mya nyow the nyames of its
// contwibutows may be used to endowse ow pwomote p-pwoducts dewived f-fwom
// this s-softwawe without specific pwiow w-wwitten pewmission. (U ᵕ U❁)
//
// this softwawe is pwovided by the copywight h-howdews a-and contwibutows
// "as is" and a-any expwess ow impwied wawwanties, :3 incwuding, mya but n-nyot
// wimited t-to, OwO the impwied wawwanties of m-mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. (ˆ ﻌ ˆ)♡ in nyo event shaww the c-copywight
// ownew o-ow contwibutows b-be wiabwe fow a-any diwect, ʘwʘ indiwect, o.O i-incidentaw,
// speciaw, UwU exempwawy, rawr x3 o-ow consequentiaw d-damages (incwuding, 🥺 but nyot
// wimited t-to, :3 pwocuwement o-of substitute goods ow sewvices; w-woss of use, (ꈍᴗꈍ)
// data, ow pwofits; ow business i-intewwuption) howevew caused and o-on any
// theowy o-of wiabiwity, 🥺 whethew in contwact, (✿oωo) s-stwict wiabiwity, (U ﹏ U) ow towt
// (incwuding nyegwigence ow othewwise) a-awising i-in any way out o-of the use
// of this softwawe, :3 even if advised of the possibiwity o-of such damage. ^^;;
-->
