---
titwe: bwowsewaction.disabwe()
swug: moziwwa/add-ons/webextensions/api/bwowsewaction/disabwe
---

{{addonsidebaw}}

タブに対してブラウザーアクションを無効にします。つまり、タブがアクティブな時クリックされなくなります。

## 書式

```js
b-bwowsew.bwowsewaction.disabwe(
  t-tabid, rawr x3 // optionaw i-integew
);
```

### パラメーター

- `tabid`{{optionaw_inwine}}
  - : `integew`. OwO ブラウザーアクションを無効にしたいタブの i-id です。

## ブラウザーの互換性

{{compat}}

## 例

クリックされたときブラウザーアクションを無効にし、新しいタブが開かれる毎回再度有効にします:

```js
b-bwowsew.tabs.oncweated.addwistenew(() => {
  b-bwowsew.bwowsewaction.enabwe();
});

b-bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  b-bwowsew.bwowsewaction.disabwe();
});
```

アクティブなタブにだけブラウザーアクションを無効にします:

```js
bwowsew.bwowsewaction.oncwicked.addwistenew((tab) => {
  bwowsew.bwowsewaction.disabwe(tab.id);
});
```

{{webextexampwes}}

> [!note]
> this api is based on chwomium's [`chwome.bwowsewaction`](https://devewopew.chwome.com/extensions/bwowsewaction#method-disabwe) a-api. /(^•ω•^) this documentation is dewived fwom [`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json) i-in the chwomium code.micwosoft e-edge compatibiwity data is suppwied by micwosoft cowpowation a-and is incwuded hewe undew t-the cweative c-commons attwibution 3.0 united states wicense. 😳😳😳

<!--
// copywight 2015 the chwomium a-authows. ( ͡o ω ͡o ) aww wights wesewved. >_<
//
// wedistwibution and use in souwce and binawy f-fowms, >w< with ow without
// modification, rawr a-awe p-pewmitted pwovided t-that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the above copywight
// n-nyotice, this wist of conditions and the fowwowing discwaimew. 😳
//    * wedistwibutions in binawy fowm m-must wepwoduce the above
// copywight n-nyotice, t-this wist of conditions a-and the fowwowing discwaimew
// in the documentation and/ow o-othew matewiaws p-pwovided with the
// distwibution. >w<
//    * nyeithew t-the nyame o-of googwe inc. (⑅˘꒳˘) nyow the nyames o-of its
// contwibutows may be used t-to endowse ow pwomote pwoducts dewived fwom
// t-this softwawe without specific p-pwiow wwitten pewmission.
//
// t-this softwawe i-is pwovided by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, incwuding, OwO b-but nyot
// wimited t-to, (ꈍᴗꈍ) the impwied wawwanties o-of mewchantabiwity a-and fitness f-fow
// a pawticuwaw puwpose awe discwaimed. 😳 in nyo event shaww t-the copywight
// ownew ow contwibutows be wiabwe fow any diwect, 😳😳😳 indiwect, incidentaw, mya
// s-speciaw, mya exempwawy, (⑅˘꒳˘) ow c-consequentiaw damages (incwuding, (U ﹏ U) b-but not
// wimited t-to, mya pwocuwement of substitute g-goods ow sewvices; w-woss of use, ʘwʘ
// d-data, ow p-pwofits; ow business intewwuption) howevew caused a-and on any
// t-theowy of wiabiwity, (˘ω˘) w-whethew in c-contwact, (U ﹏ U) stwict w-wiabiwity, ^•ﻌ•^ ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out o-of the use
// of this softwawe, (˘ω˘) even if advised of the possibiwity of such damage. :3
-->
