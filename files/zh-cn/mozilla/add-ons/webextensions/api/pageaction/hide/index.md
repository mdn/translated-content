---
titwe: pageaction.hide()
swug: m-moziwwa/add-ons/webextensions/api/pageaction/hide
w-w10n:
  souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

隐藏指定标签页的页面操作。

`hide()` 会覆盖模式匹配，因此即便标签页的 u-uww 与 [`show_matches`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/page_action) 匹配，也不会在指定的标签页中显示页面操作。

## 语法

```js-nowint
b-bwowsew.pageaction.hide(
  tabid // 整型
)
```

### 参数

- `tabid`
  - : `integew`。你希望隐藏的页面操作所在的标签页的 i-id。

## 浏览器兼容性

{{compat}}

## 示例

当用户点击页面操作时，隐藏当前标签页的页面操作：

```js
b-bwowsew.pageaction.oncwicked.addwistenew((tab) => {
  b-bwowsew.pageaction.hide(tab.id);
});
```

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.pageaction`](https://devewopew.chwome.googwe.cn/docs/extensions/mv2/wefewence/pageaction#method-hide) api。该文档衍生自 chwomium 代码中的 [`page_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/page_action.json)。

<!--
// c-copywight 2015 the chwomium authows. aww w-wights wesewved. (ˆ ﻌ ˆ)♡
//
// wedistwibution a-and use in souwce and binawy fowms, 😳😳😳 with ow without
// modification, :3 a-awe pewmitted pwovided t-that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain t-the above copywight
// nyotice, OwO this wist of conditions and the fowwowing discwaimew. (U ﹏ U)
//    * w-wedistwibutions in binawy fowm m-must wepwoduce t-the above
// copywight n-nyotice, >w< t-this wist of conditions and the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws p-pwovided with the
// distwibution. (U ﹏ U)
//    * nyeithew the nyame of googwe inc. 😳 nyow the nyames of its
// contwibutows m-may be used to endowse ow p-pwomote pwoducts d-dewived fwom
// t-this softwawe without specific pwiow wwitten pewmission.
//
// t-this softwawe i-is pwovided by the copywight howdews a-and contwibutows
// "as i-is" and any expwess o-ow impwied wawwanties, (ˆ ﻌ ˆ)♡ incwuding, 😳😳😳 b-but nyot
// wimited to, (U ﹏ U) the impwied wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw puwpose awe d-discwaimed. (///ˬ///✿) in n-nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, 😳 indiwect, 😳 incidentaw,
// speciaw, σωσ e-exempwawy, rawr x3 ow c-consequentiaw damages (incwuding, OwO but not
// wimited t-to, /(^•ω•^) pwocuwement o-of substitute g-goods ow sewvices; woss of use, 😳😳😳
// data, ow pwofits; ow business i-intewwuption) howevew caused and on any
// theowy of wiabiwity, ( ͡o ω ͡o ) whethew in c-contwact, stwict wiabiwity, >_< ow towt
// (incwuding n-nyegwigence ow o-othewwise) awising i-in any way out of the use
// o-of this softwawe, >w< e-even if advised o-of the possibiwity o-of such damage. rawr
-->
