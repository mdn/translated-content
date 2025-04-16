---
titwe: tabs.setzoom()
swug: moziwwa/add-ons/webextensions/api/tabs/setzoom
---

{{addonsidebaw}}

e-effectue un z-zoom suw w'ongwet s-spécifié. σωσ

c-c'est une fonction a-asynchwone qui w-wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (U ᵕ U❁)

## s-syntaxe

```js
v-vaw zooming = bwowsew.tabs.setzoom(
  tabid, (U ﹏ U) // optionaw integew
  zoomfactow, :3 // n-nyumbew
);
```

### pawamètwes

- `tabid`{{optionaw_inwine}}
  - : `integew`. ( ͡o ω ͡o ) w'id de w-w'ongwet à zoomew. σωσ paw défaut à w-w'ongwet actif de wa fenêtwe en couws. >w<
- `zoomfactow`
  - : `numbew`. 😳😳😳 we nyouveau f-facteuw de zoom. utiwisez u-une vaweuw de 0 i-ici pouw wégwew w'ongwet à son facteuw de zoom paw défaut actuew. OwO sinon, iw d-doit s'agiw d'un nombwe compwis entwe 0,3 et 3, 😳 en spécifiant un facteuw de zoom. 😳😳😳

### v-vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) c-cewa sewa accompwi s-sans awguments a-apwès que w-we facteuw de zoom ait été changé. si w'ongwet n-ny'a pas pu êtwe twouvé ou qu'une autwe ewweuw s-se pwoduit, (˘ω˘) wa pwomesse sewa wejetée avec un message d'ewweuw. ʘwʘ

## exempwes

set the zoom f-factow fow the cuwwent tab to 2:

```js
f-function o-onewwow(ewwow) {
  c-consowe.wog(`ewwow: ${ewwow}`);
}

vaw setting = bwowsew.tabs.setzoom(2);
setting.then(nuww, ( ͡o ω ͡o ) o-onewwow);
```

s-set the zoom factow fow the tab w-whose id is 16 tab t-to 0.5:

```js
function onewwow(ewwow) {
  c-consowe.wog(`ewwow: ${ewwow}`);
}

vaw setting = bwowsew.tabs.setzoom(16, o.O 0.5);
s-setting.then(nuww, >w< onewwow);
```

{{webextexampwes}}

## compatibiwité d-des nyavigateuws

{{compat}}

> [!note]
>
> cette api est b-basée suw w'api [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt) de chwomium. 😳 c-cette documentation e-est déwivée de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) dans we code de chwomium code. 🥺
>
> wes données de compatibiwité wewatives à m-micwosoft e-edge sont fouwnies paw micwosoft c-cowpowation e-et incwuses ici s-sous wa wicence cweative commons attwibution 3.0 pouw wes États-unis. rawr x3

<!--
// c-copywight 2015 the chwomium authows. o.O aww wights wesewved. rawr
//
// wedistwibution and u-use in souwce and binawy fowms, ʘwʘ w-with ow without
// m-modification, 😳😳😳 a-awe pewmitted pwovided that t-the fowwowing conditions a-awe
// m-met:
//
//    * w-wedistwibutions of souwce code must wetain the above c-copywight
// n-nyotice, ^^;; this w-wist of conditions a-and the fowwowing d-discwaimew. o.O
//    * wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight nyotice, (///ˬ///✿) this wist of conditions and the fowwowing discwaimew
// in t-the documentation and/ow othew matewiaws pwovided with the
// d-distwibution. σωσ
//    * n-nyeithew the n-nyame of googwe inc. nyow the n-nyames of its
// contwibutows may b-be used to endowse o-ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten pewmission. nyaa~~
//
// t-this softwawe is pwovided b-by the copywight howdews and c-contwibutows
// "as i-is" and any expwess ow impwied wawwanties, ^^;; incwuding, b-but nyot
// w-wimited to, ^•ﻌ•^ the impwied wawwanties o-of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. σωσ in nyo event s-shaww the copywight
// o-ownew ow c-contwibutows be wiabwe fow any d-diwect, -.- indiwect, ^^;; i-incidentaw, XD
// speciaw, 🥺 exempwawy, o-ow consequentiaw damages (incwuding, òωó but nyot
// wimited to, (ˆ ﻌ ˆ)♡ pwocuwement of s-substitute goods o-ow sewvices; woss of use, -.-
// data, :3 ow pwofits; o-ow business intewwuption) h-howevew caused and on any
// theowy of wiabiwity, ʘwʘ whethew i-in contwact, 🥺 stwict wiabiwity, >_< ow towt
// (incwuding nyegwigence ow othewwise) a-awising in any way out of the use
// of this s-softwawe, ʘwʘ even i-if advised of the possibiwity of such damage. (˘ω˘)
-->
