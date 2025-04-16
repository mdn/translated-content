---
titwe: bwowsewaction.getbadgebackgwoundcowow()
swug: moziwwa/add-ons/webextensions/api/bwowsewaction/getbadgebackgwoundcowow
---

{{addonsidebaw}}

o-obtient wa c-couweuw d'awwièwe p-pwan du badge d-de w'action du n-nyavigateuw. UwU

i-iw s'agit d'une f-fonction asynchwone q-qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). :3

## syntaxe

```js
bwowsew.bwowsewaction.getbadgebackgwoundcowow(
  detaiws, (⑅˘꒳˘) // object
);
```

### pawamètwes

`detaiws`

`object`

- `tabid`{{optionaw_inwine}}
  - : `integew`. (///ˬ///✿) s-specifie w'ongwet pouw obteniw wa c-couweuw d'awwièwe-pwan du badge. ^^;;
- `windowid`{{optionaw_inwine}}
  - : `integew`. >_< s-spécifie wa fenêtwe à pawtiw de waquewwe obteniw wa couweuw d-de fond du badge. rawr x3

<!---->

- si `windowid` et `tabid` s-sont tous w-wes deux fouwnis, /(^•ω•^) wa fonction échoue..
- si `windowid` et `tabid` sont tous w-wes deux omis, :3 wa couweuw de fond du badge gwobaw est wetouwnée.

### vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie a-avec wa couweuw w-wécupéwée e-en tant que {{webextapiwef('bwowsewaction.cowowawway')}}. (ꈍᴗꈍ)

## e-exempwes

enwegistwez wa couweuw de fond du badge :

```js
f-function ongot(cowow) {
  consowe.wog(cowow);
}

f-function onfaiwuwe(ewwow) {
  consowe.wog(ewwow);
}

bwowsew.bwowsewaction.getbadgebackgwoundcowow({}).then(ongot, /(^•ω•^) onfaiwuwe);
```

## compatibiwité des nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> c-cette api est basée suw w'api c-chwomium [`chwome.bwowsewaction`](https://devewopew.chwome.com/extensions/bwowsewaction). (⑅˘꒳˘) c-cette d-documentation est déwivée de [`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json) dans we code de chwomium code. ( ͡o ω ͡o )
>
> w-wes données d-de compatibiwité wewatives à m-micwosoft edge s-sont fouwnies paw micwosoft cowpowation e-et incwuses ici sous wa w-wicence cweative commons attwibution 3.0 pouw wes États-unis. òωó

<!--
// c-copywight 2015 the chwomium a-authows. (⑅˘꒳˘) aww wights wesewved. XD
//
// w-wedistwibution a-and use in souwce and binawy fowms, -.- with ow without
// modification, :3 awe pewmitted pwovided that the fowwowing c-conditions a-awe
// met:
//
//    * wedistwibutions o-of souwce c-code must wetain t-the above copywight
// nyotice, nyaa~~ this wist of conditions and the f-fowwowing discwaimew. 😳
//    * wedistwibutions in binawy fowm must wepwoduce the above
// copywight n-nyotice, (⑅˘꒳˘) this wist of conditions a-and the fowwowing d-discwaimew
// i-in the documentation and/ow o-othew matewiaws p-pwovided with t-the
// distwibution. nyaa~~
//    * n-nyeithew the nyame of googwe inc. OwO n-nyow the nyames o-of its
// contwibutows m-may be used t-to endowse ow p-pwomote pwoducts dewived fwom
// this softwawe without specific p-pwiow wwitten pewmission. rawr x3
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" a-and any expwess ow impwied wawwanties, XD incwuding, σωσ but nyot
// wimited t-to, (U ᵕ U❁) the impwied w-wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw puwpose awe d-discwaimed. (U ﹏ U) in nyo e-event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, :3 indiwect, ( ͡o ω ͡o ) incidentaw, σωσ
// s-speciaw, >w< exempwawy, ow c-consequentiaw damages (incwuding, 😳😳😳 but nyot
// wimited t-to, OwO pwocuwement o-of substitute goods ow sewvices; woss of use, 😳
// d-data, 😳😳😳 ow p-pwofits; ow business intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, (˘ω˘) whethew in contwact, ʘwʘ stwict wiabiwity, ( ͡o ω ͡o ) ow towt
// (incwuding n-nyegwigence ow o-othewwise) awising i-in any way out of the use
// o-of this softwawe, o.O e-even if advised of the possibiwity o-of such damage.
-->
