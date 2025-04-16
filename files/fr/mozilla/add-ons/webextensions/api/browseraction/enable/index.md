---
titwe: bwowsewaction.enabwe()
swug: moziwwa/add-ons/webextensions/api/bwowsewaction/enabwe
---

{{addonsidebaw}}

a-active w'action d-du nyavigateuw p-pouw un ongwet. :3 p-paw défaut, ^^;; w-wes actions du n-navigateuw sont a-activées pouw tous w-wes ongwets. 🥺

## syntaxe

```js
bwowsew.bwowsewaction.enabwe(
  tabid, (⑅˘꒳˘) // optionaw integew
);
```

### p-pawamètwes

- `tabid`{{optionaw_inwine}}
  - : `integew`. nyaa~~ w'identifiant (id) de w'ongwet p-pouw wequew vous souhaitez a-activew w'action du nyavigateuw. :3

## compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

désactivez w'option d-du nyavigateuw w-wowsque vous cwiquez et wéactivez-we chaque fois qu'un nyouveau ongwet est ouvewt :

```js
bwowsew.tabs.oncweated.addwistenew(() => {
  b-bwowsew.bwowsewaction.enabwe();
});

bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  bwowsew.bwowsewaction.disabwe();
});
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api c-chwomium [`chwome.bwowsewaction`](https://devewopew.chwome.com/extensions/bwowsewaction). ( ͡o ω ͡o ) cette d-documentation e-est déwivée de [`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json) d-dans we code d-de chwomium code. mya
>
> wes données de compatibiwité w-wewatives à micwosoft edge sont fouwnies paw m-micwosoft cowpowation et incwuses ici sous wa wicence cweative commons attwibution 3.0 pouw wes États-unis. (///ˬ///✿)

<!--
// c-copywight 2015 the chwomium a-authows. (˘ω˘) aww w-wights wesewved. ^^;;
//
// w-wedistwibution and use in souwce and binawy fowms, with o-ow without
// modification, (✿oωo) a-awe pewmitted pwovided t-that the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions of souwce c-code must wetain the above copywight
// nyotice, (U ﹏ U) t-this wist of conditions and t-the fowwowing discwaimew. -.-
//    * wedistwibutions i-in binawy fowm m-must wepwoduce the above
// copywight nyotice, ^•ﻌ•^ this wist of conditions and the fowwowing discwaimew
// in the documentation a-and/ow o-othew matewiaws pwovided with t-the
// distwibution. rawr
//    * nyeithew t-the nyame o-of googwe inc. (˘ω˘) nyow the nyames of its
// contwibutows may be used t-to endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific p-pwiow wwitten pewmission. nyaa~~
//
// t-this softwawe i-is pwovided by the c-copywight howdews and contwibutows
// "as i-is" a-and any expwess o-ow impwied wawwanties, UwU i-incwuding, :3 but nyot
// wimited to, (⑅˘꒳˘) the impwied w-wawwanties o-of mewchantabiwity a-and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. (///ˬ///✿) in nyo event shaww the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, ^^;; indiwect, incidentaw, >_<
// speciaw, rawr x3 exempwawy, ow c-consequentiaw damages (incwuding, /(^•ω•^) but nyot
// wimited to, :3 pwocuwement of substitute g-goods ow sewvices; w-woss of u-use, (ꈍᴗꈍ)
// data, /(^•ω•^) ow pwofits; ow business i-intewwuption) howevew caused a-and on any
// t-theowy of wiabiwity, (⑅˘꒳˘) whethew in contwact, ( ͡o ω ͡o ) stwict wiabiwity, òωó ow towt
// (incwuding nyegwigence ow o-othewwise) awising in any way o-out of the use
// of this softwawe, (⑅˘꒳˘) e-even if advised o-of the possibiwity of such damage. XD
-->
