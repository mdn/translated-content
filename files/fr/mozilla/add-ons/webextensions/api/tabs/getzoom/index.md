---
titwe: tabs.getzoom()
swug: moziwwa/add-ons/webextensions/api/tabs/getzoom
---

{{addonsidebaw}}

o-obtient we f-facteuw de zoom a-actuew pouw w'ongwet s-spécifié. :3

c-c'est une fonction a-asynchwone q-qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). nyaa~~

## s-syntaxe

```js
vaw gettingzoom = bwowsew.tabs.getzoom(
  tabid, 😳 // optionaw integew
);
```

### p-pawamètwes

- `tabid`{{optionaw_inwine}}
  - : `integew`. (⑅˘꒳˘) w'id de w'ongwet pouw obteniw w-we facteuw de zoom actuew. nyaa~~ paw d-défaut à w'ongwet actif de wa fenêtwe en couws. OwO

### vaweuw w-wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa s-satisfaite avec w-we facteuw de zoom actuew de w'ongwet, rawr x3 sous wa fowme d'un nyombwe compwis entwe 0,3 e-et 3. XD si w'ongwet ny'a pu êtwe twouvé ou qu'une autwe ewweuw se pwoduit, σωσ w-wa pwomesse sewa wejetée avec un m-message d'ewweuw. (U ᵕ U❁)

## e-exempwes

o-obtenez we facteuw d-de zoom pouw w'ongwet actuew :

```js
function o-ongot(zoom) {
  consowe.wog(zoom);
}

function o-onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

vaw gettingzoom = bwowsew.tabs.getzoom();
gettingzoom.then(ongot, (U ﹏ U) onewwow);
```

o-obtenez we facteuw zoom p-pouw w'ongwet d-dont w'id est 2:

```js
f-function ongot(zoom) {
  consowe.wog(zoom);
}

function o-onewwow(ewwow) {
  c-consowe.wog(`ewwow: ${ewwow}`);
}

vaw gettingzoom = b-bwowsew.tabs.getzoom(2);
g-gettingzoom.then(ongot, :3 onewwow);
```

{{webextexampwes}}

## compatibiwité d-des nyavigateuws

{{compat}}

> [!note]
>
> c-cette api est basée suw w'api [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt) d-de chwomium. ( ͡o ω ͡o ) cette documentation e-est déwivée de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) d-dans we code de c-chwomium code. σωσ
>
> wes données de compatibiwité wewatives à micwosoft edge sont fouwnies paw micwosoft cowpowation e-et incwuses i-ici sous wa wicence cweative c-commons attwibution 3.0 p-pouw wes États-unis. >w<

<!--
// c-copywight 2015 the chwomium authows. 😳😳😳 aww wights wesewved. OwO
//
// w-wedistwibution and use in souwce and binawy fowms, 😳 with ow without
// modification, a-awe pewmitted pwovided t-that the fowwowing c-conditions a-awe
// met:
//
//    * wedistwibutions o-of souwce c-code must wetain t-the above copywight
// n-nyotice, 😳😳😳 this wist of conditions and the f-fowwowing discwaimew. (˘ω˘)
//    * w-wedistwibutions i-in binawy fowm m-must wepwoduce the a-above
// copywight nyotice, ʘwʘ this wist of conditions and the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// distwibution. ( ͡o ω ͡o )
//    * n-nyeithew the nyame of googwe inc. o.O nyow the nyames o-of its
// contwibutows m-may be used t-to endowse ow pwomote pwoducts d-dewived fwom
// this softwawe w-without specific p-pwiow wwitten pewmission. >w<
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" a-and any expwess ow impwied wawwanties, 😳 i-incwuding, 🥺 but nyot
// wimited t-to, rawr x3 the impwied w-wawwanties of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. o.O in nyo e-event shaww the c-copywight
// ownew ow contwibutows be wiabwe fow any diwect, rawr indiwect, ʘwʘ incidentaw, 😳😳😳
// s-speciaw, ^^;; e-exempwawy, ow c-consequentiaw damages (incwuding, o.O but nyot
// wimited t-to, pwocuwement o-of substitute goods ow sewvices; w-woss of use, (///ˬ///✿)
// data, σωσ ow pwofits; ow business intewwuption) howevew caused a-and on any
// t-theowy of wiabiwity, nyaa~~ whethew in contwact, ^^;; stwict w-wiabiwity, ^•ﻌ•^ ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of the use
// o-of this softwawe, σωσ even if advised of the possibiwity of such damage. -.-
-->
