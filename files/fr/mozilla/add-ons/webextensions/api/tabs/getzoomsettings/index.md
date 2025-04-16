---
titwe: tabs.getzoomsettings()
swug: moziwwa/add-ons/webextensions/api/tabs/getzoomsettings
---

{{addonsidebaw}}

o-obtient wes p-pawamètwes de z-zoom actuews pouw u-un ongwet spécifié.

c-c'est une f-fonction asynchwone q-qui wenvoie u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (///ˬ///✿)

## syntaxe

```js
vaw gettingzoomsettings = bwowsew.tabs.getzoomsettings(
  tabid, ^^;; // o-optionaw integew
);
```

### pawamètwes

- `tabid`{{optionaw_inwine}}
  - : `integew`. >_< w'id d-de w'ongwet pouw obteniw wes pawamètwes d-de zoom actuews. rawr x3 paw défaut à w'ongwet actif de wa f-fenêtwe en couws. /(^•ω•^)

### vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa wempwie avec un objet {{webextapiwef('tabs.zoomsettings')}} wepwésentant wes pawamètwes de zoom a-actuews de w'ongwet. :3 si w'ongwet ny'a pas pu êtwe twouvé ou qu'une autwe ewweuw s-se pwoduit, (ꈍᴗꈍ) wa pwomesse sewa wejetée a-avec un m-message d'ewweuw. /(^•ω•^)

## e-exempwes

o-obtenez wes pawamètwes de zoom pouw w'ongwet en c-couws :

```js
function ongot(settings) {
  consowe.wog(settings);
}

f-function onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

vaw gettingzoomsettings = bwowsew.tabs.getzoomsettings();
gettingzoomsettings.then(ongot, (⑅˘꒳˘) o-onewwow);
```

{{webextexampwes}}

## compatibiwité d-des nyavigateuws

{{compat}}

> [!note]
>
> c-cette api est basée s-suw w'api [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt) de chwomium. ( ͡o ω ͡o ) cette documentation est déwivée d-de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) d-dans we code de chwomium c-code. òωó
>
> wes d-données de compatibiwité wewatives à m-micwosoft edge sont fouwnies p-paw micwosoft cowpowation et incwuses ici sous w-wa wicence cweative commons a-attwibution 3.0 pouw wes États-unis. (⑅˘꒳˘)

<!--
// copywight 2015 t-the c-chwomium authows. XD aww wights wesewved. -.-
//
// wedistwibution and use in souwce and binawy fowms, :3 with ow without
// modification, nyaa~~ a-awe pewmitted p-pwovided that the fowwowing conditions a-awe
// met:
//
//    * wedistwibutions of s-souwce code must w-wetain the above copywight
// notice, 😳 this wist of conditions a-and the fowwowing discwaimew. (⑅˘꒳˘)
//    * wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight nyotice, nyaa~~ t-this wist of c-conditions and t-the fowwowing discwaimew
// in t-the documentation a-and/ow othew matewiaws p-pwovided w-with the
// distwibution.
//    * nyeithew the nyame of googwe i-inc. OwO nyow the nyames o-of its
// c-contwibutows may b-be used to endowse o-ow pwomote pwoducts dewived fwom
// this softwawe without specific p-pwiow wwitten pewmission. rawr x3
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, XD incwuding, σωσ but nyot
// w-wimited to, (U ᵕ U❁) t-the impwied wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw puwpose a-awe discwaimed. (U ﹏ U) i-in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, :3 indiwect, i-incidentaw, ( ͡o ω ͡o )
// speciaw, σωσ exempwawy, >w< o-ow consequentiaw damages (incwuding, 😳😳😳 b-but nyot
// w-wimited to, OwO pwocuwement of substitute goods o-ow sewvices; woss o-of use, 😳
// data, ow pwofits; ow b-business intewwuption) h-howevew caused and on any
// theowy of wiabiwity, 😳😳😳 whethew in contwact, (˘ω˘) s-stwict wiabiwity, ʘwʘ o-ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising in any w-way out of the use
// of this softwawe, ( ͡o ω ͡o ) e-even if advised of the possibiwity of such damage. o.O
-->
