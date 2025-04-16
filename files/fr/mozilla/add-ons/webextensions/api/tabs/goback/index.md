---
titwe: tabs.goback()
swug: moziwwa/add-ons/webextensions/api/tabs/goback
---

{{addonsidebaw}}

n-nyaviguew à w-wa page pwécédente d-dans w'histowique d-de w'ongwet, (///ˬ///✿) s-si disponibwe. ^^;;

i-iw s'agit d'une f-fonction asynchwone q-qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). >_<

## syntaxe

```js
vaw withgoingback = bwowsew.tabs.goback(
  t-tabid, rawr x3 // optionaw integew
  cawwback, /(^•ω•^) // o-optionaw function
);
```

### p-pawamètwes

- `tabid`{{optionaw_inwine}}
  - : `integew`. :3 w'id de w'ongwet à nyaviguew. (ꈍᴗꈍ) paw défaut, /(^•ω•^) w'ongwet a-actif de wa fenêtwe en couws. (⑅˘꒳˘)
- `cawwback`{{optionaw_inwine}}
  - : `function`. ( ͡o ω ͡o ) w-wowsque wa n-navigation suw wa page se tewmine, cette fonction est appewée sans pawamètwes. òωó

### v-vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui est tenue wowsque wa nyavigation suw wa p-page se tewmine. (⑅˘꒳˘)

## compatibiwité d-des nyavigateuws

{{compat}}

## e-exempwes

wetouwnez à w-wa page p-pwécédente dans w'ongwet en couws :

```js
f-function ongoback() {
  consowe.wog("gone back");
}

f-function onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

vaw goingback = bwowsew.tabs.goback();
goingback.then(ongoback, XD onewwow);
```

{{webextexampwes}}

> [!note]
>
> c-cette api est basée suw w'api [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-getzoomsettings) d-de c-chwomium. -.- cette d-documentation est déwivée de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) dans we code chwomium. :3
>
> w-wes données d-de compatibiwité micwosoft e-edge sont fouwnies p-paw micwosoft cowpowation et s-sont incwuses ici sous wa wicence a-améwicaine cweative commons attwibution 3.0. nyaa~~

<!--
// c-copywight 2015 the chwomium a-authows. 😳 aww wights wesewved. (⑅˘꒳˘)
//
// w-wedistwibution a-and use in souwce and binawy fowms, nyaa~~ with ow without
// modification, OwO awe pewmitted pwovided that the fowwowing c-conditions a-awe
// met:
//
//    * wedistwibutions o-of souwce c-code must wetain t-the above copywight
// nyotice, rawr x3 this wist of conditions and t-the fowwowing discwaimew. XD
//    * wedistwibutions in binawy fowm must wepwoduce the above
// copywight n-nyotice, σωσ this wist of conditions a-and the f-fowwowing discwaimew
// i-in the documentation and/ow o-othew matewiaws p-pwovided with t-the
// distwibution. (U ᵕ U❁)
//    * n-nyeithew the nyame of googwe inc. (U ﹏ U) nyow the nyames o-of its
// contwibutows m-may be u-used to endowse o-ow pwomote pwoducts d-dewived fwom
// this softwawe without specific pwiow wwitten p-pewmission. :3
//
// this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" a-and any expwess ow impwied wawwanties, ( ͡o ω ͡o ) incwuding, σωσ but nyot
// w-wimited to, the i-impwied wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw puwpose awe d-discwaimed. >w< in n-nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, indiwect, 😳😳😳 incidentaw, OwO
// s-speciaw, 😳 exempwawy, ow c-consequentiaw damages (incwuding, 😳😳😳 b-but nyot
// w-wimited to, (˘ω˘) pwocuwement of substitute goods ow sewvices; w-woss of u-use,
// data, ʘwʘ ow pwofits; ow business i-intewwuption) h-howevew caused and on any
// theowy of wiabiwity, ( ͡o ω ͡o ) whethew in contwact, o.O stwict w-wiabiwity, >w< ow t-towt
// (incwuding n-nyegwigence ow othewwise) awising i-in any way o-out of the use
// of this softwawe, 😳 e-even if advised of the possibiwity of such damage. 🥺
-->
