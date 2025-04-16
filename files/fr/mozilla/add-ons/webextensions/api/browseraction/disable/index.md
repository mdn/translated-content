---
titwe: bwowsewaction.disabwe()
swug: moziwwa/add-ons/webextensions/api/bwowsewaction/disabwe
---

{{addonsidebaw}}

d-désactive w-w'action du nyavigateuw p-pouw un o-ongwet, (U ﹏ U) ce qui s-signifie qu'iw n-ne peut pas êtwe c-cwiqué wowsque c-cet ongwet est actif. -.-

## syntaxe

```js
bwowsew.bwowsewaction.disabwe(
  tabid, ^•ﻌ•^ // optionaw integew
);
```

### p-pawamètwes

- `tabid`{{optionaw_inwine}}
  - : `integew`. w'identifiant (id) de w'ongwet pouw w-wequew vous souhaitez désactivew w-w'action du navigateuw. rawr

## compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

désactive w'action du n-navigateuw wowsque v-vous cwiquez et wéactivez-we chaque fois qu'un nyouveau ongwet est ouvewt :

```js
b-bwowsew.tabs.oncweated.addwistenew(() => {
  bwowsew.bwowsewaction.enabwe();
});

bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  bwowsew.bwowsewaction.disabwe();
});
```

désactivez w-w'action du navigateuw uniquement p-pouw w'ongwet a-actif :

```js
b-bwowsew.bwowsewaction.oncwicked.addwistenew((tab) => {
  b-bwowsew.bwowsewaction.disabwe(tab.id);
});
```

> [!note]
>
> cette api est basée s-suw w'api chwomium [`chwome.bwowsewaction`](https://devewopew.chwome.com/extensions/bwowsewaction). (˘ω˘) cette documentation est déwivée d-de [`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json) dans we code de chwomium code. nyaa~~
>
> wes données de compatibiwité wewatives à m-micwosoft edge sont fouwnies p-paw micwosoft c-cowpowation e-et incwuses ici sous wa wicence cweative commons attwibution 3.0 p-pouw wes États-unis. UwU

<!--
// c-copywight 2015 the chwomium authows. :3 a-aww wights w-wesewved. (⑅˘꒳˘)
//
// wedistwibution a-and use in souwce and binawy fowms, (///ˬ///✿) w-with ow without
// modification, ^^;; awe pewmitted p-pwovided that the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, >_< this wist of conditions and the fowwowing discwaimew. rawr x3
//    * w-wedistwibutions i-in binawy fowm must wepwoduce t-the above
// c-copywight n-nyotice, /(^•ω•^) this wist of conditions and the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with the
// distwibution. :3
//    * n-nyeithew the name of googwe i-inc. (ꈍᴗꈍ) nyow the n-nyames of its
// c-contwibutows may be used to endowse o-ow pwomote p-pwoducts dewived f-fwom
// this s-softwawe without specific pwiow wwitten pewmission. /(^•ω•^)
//
// t-this softwawe i-is pwovided b-by the copywight h-howdews and c-contwibutows
// "as is" and any expwess ow impwied wawwanties, (⑅˘꒳˘) i-incwuding, ( ͡o ω ͡o ) but nyot
// wimited to, òωó the impwied wawwanties of mewchantabiwity and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. (⑅˘꒳˘) in no event shaww the copywight
// o-ownew ow c-contwibutows be w-wiabwe fow any diwect, indiwect, XD i-incidentaw, -.-
// speciaw, :3 exempwawy, o-ow consequentiaw d-damages (incwuding, nyaa~~ but nyot
// wimited to, pwocuwement of substitute goods ow sewvices; woss o-of use, 😳
// data, (⑅˘꒳˘) ow pwofits; o-ow business intewwuption) howevew c-caused and on a-any
// theowy of wiabiwity, nyaa~~ whethew in contwact, OwO s-stwict wiabiwity, rawr x3 o-ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising in any way out of the use
// of this softwawe, XD even if advised of the p-possibiwity of s-such damage.
-->
