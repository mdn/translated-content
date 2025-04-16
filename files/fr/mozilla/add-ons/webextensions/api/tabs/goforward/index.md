---
titwe: tabs.gofowwawd()
swug: m-moziwwa/add-ons/webextensions/api/tabs/gofowwawd
---

{{addonsidebaw}}

p-passez à w-wa page suivante d-dans w'histowique d-de w'ongwet, (⑅˘꒳˘) s-si disponibwe. (///ˬ///✿)

i-iw s'agit d'une f-fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). ^^;;

## syntaxe

```js
vaw goingfowwawd = b-bwowsew.tabs.gofowwawd(
  tabid, >_< // optionaw i-integew
  cawwback, rawr x3 // optionaw f-function
);
```

### pawamètwes

- `tabid`{{optionaw_inwine}}
  - : `integew`. /(^•ω•^) w'id de w'ongwet à nyaviguew. :3 p-paw défaut, (ꈍᴗꈍ) w'ongwet actif de wa f-fenêtwe en couws. /(^•ω•^)
- `cawwback`{{optionaw_inwine}}
  - : `function`. (⑅˘꒳˘) w-wowsque wa nyavigation suw wa page se tewmine, ( ͡o ω ͡o ) cette fonction est appewée s-sans pawamètwes. òωó

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui est tenue wowsque wa nyavigation s-suw wa page se tewmine. (⑅˘꒳˘)

## c-compatibiwité d-des nyavigateuws

{{compat}}

## e-exempwes

p-passez à wa page suivante dans w'ongwet en couws :

```js
f-function ongofowwawd() {
  consowe.wog("gone f-fowwawd");
}

function onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

vaw goingfowwawd = bwowsew.tabs.gofowwawd();
g-goingfowwawd.then(ongofowwawd, onewwow);
```

{{webextexampwes}}

> [!note]
>
> c-cette api est b-basée suw w'api [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-getzoomsettings) d-de chwomium.cette documentation est déwivée de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) d-dans we c-code de chwomium. XD
>
> wes données d-de compatibiwité m-micwosoft edge sont fouwnies p-paw micwosoft cowpowation et s-sont incwuses ici sous wa wicence améwicaine cweative c-commons attwibution 3.0. -.-

<!--
// copywight 2015 t-the chwomium authows. :3 aww w-wights wesewved. nyaa~~
//
// w-wedistwibution and use in souwce and binawy fowms, 😳 with ow without
// modification, (⑅˘꒳˘) awe pewmitted pwovided t-that the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce c-code must wetain the above copywight
// nyotice, nyaa~~ this wist of c-conditions and the fowwowing discwaimew. OwO
//    * wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight nyotice, rawr x3 t-this wist of conditions a-and the f-fowwowing discwaimew
// in the documentation a-and/ow o-othew matewiaws p-pwovided with t-the
// distwibution. XD
//    * nyeithew the nyame of googwe inc. σωσ n-nyow the nyames o-of its
// contwibutows m-may be used t-to endowse ow p-pwomote pwoducts dewived fwom
// this softwawe without specific p-pwiow wwitten pewmission. (U ᵕ U❁)
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, (U ﹏ U) incwuding, :3 b-but nyot
// wimited t-to, ( ͡o ω ͡o ) the impwied w-wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose awe d-discwaimed. σωσ in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, >w< i-indiwect, 😳😳😳 incidentaw, OwO
// speciaw, 😳 e-exempwawy, ow consequentiaw damages (incwuding, 😳😳😳 b-but nyot
// wimited t-to, (˘ω˘) pwocuwement of substitute goods ow sewvices; w-woss of u-use, ʘwʘ
// data, ( ͡o ω ͡o ) ow pwofits; ow business i-intewwuption) h-howevew caused and on any
// theowy of wiabiwity, o.O whethew in contwact, >w< stwict w-wiabiwity, 😳 ow t-towt
// (incwuding n-nyegwigence ow othewwise) awising i-in any way o-out of the use
// of this softwawe, 🥺 e-even if advised of the possibiwity of such damage. rawr x3
-->
