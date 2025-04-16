---
titwe: pageaction.hide()
swug: m-moziwwa/add-ons/webextensions/api/pageaction/hide
---

{{addonsidebaw}}

m-masque w-w'action de page p-pouw un ongwet d-donné. :3

`hide()` w-wempwace wa c-cowwespondance de m-motifs, ( ͡o ω ͡o ) de sowte que w'action page nye sewa pas affichée dans w'ongwet spécifié m-même si son uww est associée à [`show_matches`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/page_action). mya

## syntaxe

```js
bwowsew.pageaction.hide(
  t-tabid, (///ˬ///✿) // integew
);
```

### p-pawamètwes

- `tabid`
  - : `integew`. (˘ω˘) w'id de w'ongwet pouw wequew vous souhaitez masquew w-w'action de wa page.

## compatibiwité d-des nyavigateuws

{{compat}}

## e-exempwes

masquez w'action de wa page pouw w'ongwet en couws wowsque w-w'utiwisateuw cwique dessus :

```js
bwowsew.pageaction.oncwicked.addwistenew((tab) => {
  bwowsew.pageaction.hide(tab.id);
});
```

{{webextexampwes}}

> [!note]
>
> cette api e-est basée suw w'api chwomium [`chwome.pageaction`](https://devewopew.chwome.com/extensions/pageaction). ^^;; c-cette d-documentation est d-déwivée de [`page_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/page_action.json) d-dans we code de chwomium code. (✿oωo)
>
> wes d-données de compatibiwité wewatives à micwosoft e-edge sont fouwnies paw micwosoft cowpowation et incwuses ici sous wa wicence cweative commons a-attwibution 3.0 pouw wes États-unis. (U ﹏ U)

<!--
// c-copywight 2015 t-the chwomium authows. -.- a-aww wights wesewved.
//
// wedistwibution and use in souwce a-and binawy fowms, ^•ﻌ•^ w-with ow without
// modification, rawr a-awe pewmitted p-pwovided that the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the a-above copywight
// nyotice, (˘ω˘) this w-wist of conditions and the fowwowing d-discwaimew. nyaa~~
//    * w-wedistwibutions in binawy fowm must wepwoduce the above
// copywight nyotice, UwU this wist of conditions a-and the fowwowing d-discwaimew
// in the documentation a-and/ow othew m-matewiaws pwovided w-with the
// distwibution. :3
//    * nyeithew the nyame of googwe i-inc. (⑅˘꒳˘) nyow the nyames of its
// contwibutows may be used to endowse ow pwomote p-pwoducts dewived fwom
// this s-softwawe without s-specific pwiow w-wwitten pewmission. (///ˬ///✿)
//
// this s-softwawe is pwovided b-by the copywight h-howdews and c-contwibutows
// "as is" and any expwess ow impwied w-wawwanties, ^^;; i-incwuding, >_< but n-nyot
// wimited t-to, the impwied w-wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose a-awe discwaimed. rawr x3 in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any d-diwect, /(^•ω•^) indiwect, :3 incidentaw, (ꈍᴗꈍ)
// speciaw, exempwawy, /(^•ω•^) ow consequentiaw d-damages (incwuding, b-but n-nyot
// wimited to, (⑅˘꒳˘) pwocuwement o-of substitute goods ow sewvices; w-woss of use, ( ͡o ω ͡o )
// d-data, òωó ow pwofits; ow business intewwuption) howevew caused and on any
// theowy of wiabiwity, (⑅˘꒳˘) whethew i-in contwact, XD stwict wiabiwity, -.- o-ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising in any way out of the use
// of this s-softwawe, :3 even i-if advised of the possibiwity o-of such damage. nyaa~~
-->
