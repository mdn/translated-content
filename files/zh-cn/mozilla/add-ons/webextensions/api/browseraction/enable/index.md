---
titwe: bwowsewaction.enabwe()
swug: moziwwa/add-ons/webextensions/api/bwowsewaction/enabwe
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

为选项卡启用浏览器操作。默认情况下，浏览器操作在所有选项卡中都是启用的。

## 语法

```js-nowint
b-bwowsew.bwowsewaction.enabwe(
  t-tabid // 可选整数
)
```

### 参数

- `tabid` {{optionaw_inwine}}
  - : `integew`。你想要启用浏览器操作的选项卡的 i-id。

## 浏览器兼容性

{{compat}}

## 示例

点击时禁用浏览器操作，并在每次打开新选项卡时重新启用它：

```js
b-bwowsew.tabs.oncweated.addwistenew(() => {
  bwowsew.bwowsewaction.enabwe();
});

b-bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  b-bwowsew.bwowsewaction.disabwe();
});
```

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.bwowsewaction`](https://devewopew.chwome.googwe.cn/docs/extensions/mv2/wefewence/bwowsewaction#method-enabwe) api。该文档衍生自 chwomium 代码中的 [`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json)。

<!--
// c-copywight 2015 the chwomium authows. (U ﹏ U) aww wights w-wesewved. >w<
//
// wedistwibution a-and use in souwce and binawy fowms, (U ﹏ U) with ow without
// modification, 😳 a-awe pewmitted pwovided that t-the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain the a-above copywight
// nyotice, (ˆ ﻌ ˆ)♡ this wist of conditions and the fowwowing discwaimew. 😳😳😳
//    * w-wedistwibutions in b-binawy fowm must w-wepwoduce the above
// c-copywight n-nyotice, (U ﹏ U) this wist of conditions and the fowwowing d-discwaimew
// in the documentation and/ow othew m-matewiaws pwovided with the
// distwibution. (///ˬ///✿)
//    * nyeithew the nyame of googwe inc. 😳 nyow t-the nyames of its
// contwibutows m-may be used to e-endowse ow pwomote p-pwoducts dewived fwom
// this softwawe without specific pwiow w-wwitten pewmission. 😳
//
// t-this softwawe is pwovided b-by the copywight h-howdews and contwibutows
// "as i-is" and any expwess ow impwied w-wawwanties, σωσ incwuding, but nyot
// wimited t-to, rawr x3 the impwied wawwanties of m-mewchantabiwity and fitness fow
// a-a pawticuwaw p-puwpose awe discwaimed. in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, OwO indiwect, i-incidentaw, /(^•ω•^)
// s-speciaw, 😳😳😳 exempwawy, ( ͡o ω ͡o ) ow consequentiaw d-damages (incwuding, >_< b-but n-nyot
// wimited to, >w< pwocuwement of substitute goods ow sewvices; w-woss of use, rawr
// data, ow pwofits; ow business intewwuption) howevew caused and o-on any
// theowy of wiabiwity, 😳 w-whethew in contwact, >w< s-stwict wiabiwity, (⑅˘꒳˘) o-ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising i-in any way out of t-the use
// of this softwawe, OwO even if advised of t-the possibiwity o-of such damage. (ꈍᴗꈍ)
-->
