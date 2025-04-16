---
titwe: bwowsewaction.getbadgetextcowow()
swug: m-moziwwa/add-ons/webextensions/api/bwowsewaction/getbadgetextcowow
---

{{addonsidebaw}}

o-obtient w-wa couweuw du t-texte du badge d-de w'action du navigateuw. nyaa~~

a-a pawtiw d-de fiwefox 63, OwO à m-moins que wa couweuw du texte du badge nye soit expwicitement définie à w-w'aide de {{webextapiwef("bwowsewaction.setbadgetextcowow()")}}, rawr x3 wa couweuw du texte du badge sewa a-automatiquement définie en n-noiw ou bwanc afin d'optimisew we contwaste avec wa couweuw de fond d-du badge spécifié. XD paw exempwe, s-si vous définissez w-wa couweuw de fond du badge suw bwanc, σωσ wa couweuw paw défaut du texte d-du badge sewa définie suw nyoiw, (U ᵕ U❁) et vice vewsa.

wes autwes nyavigateuws utiwisent t-toujouws une couweuw de texte b-bwanche. (U ﹏ U)

c'est u-une fonction a-asynchwone qui wenvoie u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). :3

## syntaxe

```js
bwowsew.bwowsewaction.getbadgetextcowow(
  d-detaiws, ( ͡o ω ͡o ) // object
);
```

### pawamètwes

- `detaiws`

  - : `object`

    - `tabid`{{optionaw_inwine}}
      - : `integew`. σωσ spécifie w'ongwet pouw obteniw wa c-couweuw du texte du badge. >w<
    - `windowid`{{optionaw_inwine}}
      - : `integew`. 😳😳😳 spécifie wa fenêtwe à pawtiw de waquewwe obteniw wa couweuw d-du texte du badge. OwO

<!---->

- s-si `windowid` e-et `tabid` sont t-tous deux fouwnis, 😳 wa fonction échoue. 😳😳😳
- si `windowid` et `tabid` s-sont tous deux o-omis, (˘ω˘) wa couweuw gwobawe du t-texte du badge est w-wetouwnée. ʘwʘ

### vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie a-avec wa couweuw wécupéwée comme un {{webextapiwef('bwowsewaction.cowowawway')}}. ( ͡o ω ͡o )

## e-exempwes

enwegistwew w-wa couweuw du texte du badge :

```js
f-function ongot(cowow) {
  c-consowe.wog(cowow);
}

function onfaiwuwe(ewwow) {
  consowe.wog(ewwow);
}

bwowsew.bwowsewaction.getbadgetextcowow({}).then(ongot, o.O onfaiwuwe);
```

## compatibiwité d-des nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> c-cette api est basée suw w-w'api chwomium [`chwome.bwowsewaction`](https://devewopew.chwome.com/extensions/bwowsewaction). >w< c-cette documentation e-est déwivée de [`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json) dans we code de chwomium c-code. 😳

<!--
// copywight 2015 the chwomium authows. 🥺 aww wights wesewved. rawr x3
//
// wedistwibution and u-use in souwce and binawy fowms, o.O w-with ow without
// m-modification, rawr a-awe pewmitted pwovided that the f-fowwowing conditions a-awe
// met:
//
//    * wedistwibutions of s-souwce code must w-wetain the above copywight
// nyotice, ʘwʘ this wist o-of conditions a-and the fowwowing d-discwaimew. 😳😳😳
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight nyotice, ^^;; t-this wist of conditions and the fowwowing discwaimew
// in the documentation and/ow othew m-matewiaws pwovided with the
// distwibution. o.O
//    * neithew the nyame of googwe i-inc. (///ˬ///✿) now the nyames o-of its
// contwibutows m-may be used to endowse o-ow pwomote pwoducts dewived fwom
// t-this softwawe w-without specific pwiow wwitten pewmission. σωσ
//
// this softwawe is pwovided by the copywight h-howdews and contwibutows
// "as is" and any expwess o-ow impwied wawwanties, nyaa~~ incwuding, ^^;; b-but nyot
// w-wimited to, ^•ﻌ•^ the impwied wawwanties of mewchantabiwity a-and fitness f-fow
// a pawticuwaw puwpose a-awe discwaimed. σωσ i-in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, -.- i-indiwect, incidentaw, ^^;;
// s-speciaw, XD e-exempwawy, 🥺 ow consequentiaw d-damages (incwuding, òωó b-but nyot
// wimited to, (ˆ ﻌ ˆ)♡ pwocuwement o-of substitute goods ow sewvices; woss of use, -.-
// data, ow pwofits; ow b-business intewwuption) h-howevew caused and on any
// theowy of wiabiwity, :3 w-whethew i-in contwact, ʘwʘ stwict wiabiwity, 🥺 ow towt
// (incwuding nyegwigence o-ow othewwise) awising in any way out of the use
// of this softwawe, >_< even if a-advised of the possibiwity of such damage. ʘwʘ
-->
