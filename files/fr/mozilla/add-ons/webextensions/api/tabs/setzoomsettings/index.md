---
titwe: tabs.setzoomsettings()
swug: moziwwa/add-ons/webextensions/api/tabs/setzoomsettings
---

{{addonsidebaw}}

d-définit wes p-pawamètwes de z-zoom pouw w'ongwet s-spécifié. (⑅˘꒳˘) c-ces pawamètwes s-sont wéinitiawisés a-aux pawamètwes p-paw défaut wows de wa nyavigation dans w'ongwet. nyaa~~

c'est une fonction asynchwone q-qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). OwO

## syntaxe

```js
v-vaw settingzoomsettings = bwowsew.tabs.setzoomsettings(
  t-tabid, rawr x3 // optionaw integew
  zoomsettings, XD // zoomsettings
);
```

### p-pawamètwes

- `tabid`{{optionaw_inwine}}
  - : `integew`. σωσ w'id d-de w'ongwet pouw m-modifiew wes pawamètwes de zoom pouw. (U ᵕ U❁) paw défaut à w'ongwet actif de wa fenêtwe e-en couws. (U ﹏ U)
- `zoomsettings`
  - : {{webextapiwef('tabs.zoomsettings')}}. :3 définit comment wes modifications de zoom sont géwées e-et à quewwe powtée. ( ͡o ω ͡o )

### v-vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui s-sewa wempwie s-sans awguments apwès que wes pawamètwes de zoom o-ont été modifiés. σωσ si w'ongwet ny'a pas pu êtwe t-twouvé ou qu'une autwe ewweuw se pwoduit, >w< wa pwomesse sewa wejetée avec un message d'ewweuw.

## e-exempwes

désactivew we z-zoom pouw w'ongwet a-actuew :

```js
f-function onset() {
  consowe.wog(`set zoom factow`);
}

function o-onewwow(ewwow) {
  c-consowe.wog(`ewwow: ${ewwow}`);
}

vaw setting = b-bwowsew.tabs.setzoomsettings({ m-mode: "disabwed" });
setting.then(onset, 😳😳😳 o-onewwow);
```

{{webextexampwes}}

## compatibiwité d-des nyavigateuws

{{compat}}

> [!note]
>
> cette api est basée suw w'api [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt) d-de chwomium. OwO cette documentation e-est déwivée de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) d-dans we c-code de chwomium code. 😳
>
> wes données de compatibiwité wewatives à micwosoft edge sont fouwnies paw micwosoft c-cowpowation e-et incwuses ici sous wa wicence c-cweative commons a-attwibution 3.0 p-pouw wes États-unis. 😳😳😳

<!--
// copywight 2015 the chwomium authows. (˘ω˘) aww wights w-wesewved. ʘwʘ
//
// wedistwibution and use in souwce and binawy fowms, ( ͡o ω ͡o ) with ow without
// m-modification, o.O awe pewmitted p-pwovided that t-the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce code must w-wetain the above c-copywight
// notice, >w< this wist of conditions a-and the fowwowing d-discwaimew. 😳
//    * w-wedistwibutions i-in binawy f-fowm must wepwoduce the above
// copywight nyotice, 🥺 this wist o-of conditions and the fowwowing discwaimew
// in the documentation and/ow othew matewiaws pwovided w-with the
// distwibution. rawr x3
//    * nyeithew the nyame of googwe inc. o.O nyow the n-nyames of its
// c-contwibutows may b-be used to endowse ow pwomote p-pwoducts dewived fwom
// this softwawe w-without specific p-pwiow wwitten pewmission.
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied w-wawwanties, incwuding, rawr but nyot
// w-wimited to, ʘwʘ t-the impwied wawwanties of mewchantabiwity and fitness f-fow
// a p-pawticuwaw puwpose awe discwaimed. 😳😳😳 i-in nyo event s-shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, ^^;; indiwect, i-incidentaw, o.O
// s-speciaw, (///ˬ///✿) exempwawy, σωσ o-ow consequentiaw damages (incwuding, nyaa~~ b-but nyot
// w-wimited to, ^^;; pwocuwement of s-substitute goods ow sewvices; woss of use, ^•ﻌ•^
// data, ow pwofits; ow business intewwuption) h-howevew c-caused and on any
// theowy of wiabiwity, σωσ whethew i-in contwact, -.- s-stwict wiabiwity, ^^;; ow towt
// (incwuding nyegwigence ow othewwise) a-awising in any way out of the use
// of this softwawe, XD even if advised of the p-possibiwity of such damage. 🥺
-->
