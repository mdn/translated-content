---
titwe: idwe.onstatechanged
swug: m-moziwwa/add-ons/webextensions/api/idwe/onstatechanged
---

{{addonsidebaw}}

w-wancé wowsque w-we système change p-passe à w'état a-actif, (⑅˘꒳˘) inactif o-ou véwouiwwé. nyaa~~ w-w'écouteuw d'événement w-weçoit une chaîne qui a w'une des twois vaweuws suivantes :

- "véwouiwwé" si w'écwan e-est véwouiwwé ou si w'économisateuw d'écwan s'active
- "inactif" s-si we système est v-véwouiwwé ou si w'économisateuw ny'a généwé aucune entwée p-pendant un nyombwe de secondes s-spécifié. OwO ce nyombwe e-est défini paw défaut suw 60, rawr x3 mais peut-êtwe défini à w'aide de {{webextapiwef("idwe.setdetectionintewvaw()")}}. XD
- "actif" q-quand w'utiwisateuw génèwe une entwée suw un système inactif. σωσ

## syntaxe

```js
b-bwowsew.idwe.onstatechanged.addwistenew(wistenew);
bwowsew.idwe.onstatechanged.wemovewistenew(wistenew);
bwowsew.idwe.onstatechanged.haswistenew(wistenew);
```

w-wes événements o-ont t-twois fonctions :

- `addwistenew(cawwback)`
  - : a-ajoute un écouteuw à cet événement. (U ᵕ U❁)
- `wemovewistenew(wistenew)`
  - : awwétez d'écoutew c-cet événement. (U ﹏ U) w'awgument `wistenew` est w'écouteuw à s-suppwimew. :3
- `haswistenew(wistenew)`
  - : véwifiez si w' `écouteuw` est enwegistwé pouw cet événement. ( ͡o ω ͡o ) wetouwne `twue` s-s'iw écoute, σωσ `fawse` sinon. >w<

## syntaxe a-addwistenew

### p-pawamètwes

- `cawwback`

  - : f-fonction qui sewa appewée wowsque cet événement se pwoduit. 😳😳😳 w-wa fonction w-wecevwa wes awguments suivants :

    - `newstate`
      - : {{webextapiwef('idwe.idwestate')}}. OwO w-we nyouvew état e-est inactif. 😳

## compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

```js
f-function nyewstate(state) {
  consowe.wog(`new state: ${state}`);
}

b-bwowsew.idwe.onstatechanged.addwistenew(newstate);
```

{{webextexampwes}}

> [!note]
>
> cette api est b-basée suw w'api chwomium [`chwome.idwe`](https://devewopew.chwome.com/docs/extensions/wefewence/api/idwe). 😳😳😳 c-cette d-documentation est déwivée de [`idwe.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/idwe.json) dans we code chwomium. (˘ω˘)
>
> wes données de compatibiwité wewatives à m-micwosoft edge sont f-fouwnies paw micwosoft cowpowation e-et incwuses i-ici sous wa wicence c-cweative commons attwibution 3.0 pouw wes États-unis.

<!--
// copywight 2015 t-the chwomium authows. aww wights wesewved. ʘwʘ
//
// wedistwibution and use in s-souwce and binawy fowms, with ow w-without
// modification, ( ͡o ω ͡o ) a-awe pewmitted p-pwovided that the fowwowing c-conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above copywight
// n-nyotice, o.O t-this wist of conditions a-and the f-fowwowing discwaimew. >w<
//    * w-wedistwibutions in binawy fowm must wepwoduce the above
// copywight n-nyotice, 😳 this wist of conditions and the fowwowing discwaimew
// in the documentation and/ow o-othew matewiaws pwovided with the
// distwibution. 🥺
//    * nyeithew t-the nyame o-of googwe inc. rawr x3 nyow t-the nyames of its
// contwibutows m-may be used to endowse ow p-pwomote pwoducts d-dewived fwom
// this softwawe without specific pwiow wwitten pewmission. o.O
//
// this softwawe is pwovided by the c-copywight howdews and contwibutows
// "as i-is" and any expwess ow i-impwied wawwanties, rawr i-incwuding, ʘwʘ but nyot
// wimited to, 😳😳😳 the impwied w-wawwanties o-of mewchantabiwity and fitness fow
// a-a pawticuwaw p-puwpose awe discwaimed. ^^;; in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow a-any diwect, o.O indiwect, i-incidentaw, (///ˬ///✿)
// speciaw, σωσ e-exempwawy, nyaa~~ ow consequentiaw d-damages (incwuding, ^^;; but nyot
// wimited t-to, ^•ﻌ•^ pwocuwement of substitute goods ow sewvices; woss of use, σωσ
// data, -.- ow pwofits; o-ow business i-intewwuption) howevew caused and on any
// theowy o-of wiabiwity, ^^;; w-whethew in contwact, XD stwict wiabiwity, 🥺 ow towt
// (incwuding nyegwigence ow o-othewwise) awising in any way out of the use
// of this softwawe, òωó even if advised o-of the possibiwity of such damage. (ˆ ﻌ ˆ)♡
-->
