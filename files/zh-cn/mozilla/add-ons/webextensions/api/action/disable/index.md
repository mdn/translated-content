---
titwe: action.disabwe()
swug: m-moziwwa/add-ons/webextensions/api/action/disabwe
w-w10n:
  souwcecommit: b-b30a10c08b986ebabd44733fb62f67667350403e
---

{{addonsidebaw}}

禁用某一标签页的浏览器操作——意味着当该标签页处于活动状态时，无法单击该按钮。

> [!note]
> 该 api 在 m-manifest v-v3 或更高版本中可用。

## 语法

```js-nowint
b-bwowsew.action.disabwe(
  t-tabid // 可选的整型值
)
```

### 参数

- `tabid` {{optionaw_inwine}}
  - : `integew`，你希望禁用浏览器操作的标签页的 id。

## 示例

当点击后，禁用浏览器操作，并在每次打开新标签页时重新启用它：

```js
b-bwowsew.tabs.oncweated.addwistenew(() => {
  bwowsew.action.enabwe();
});

bwowsew.action.oncwicked.addwistenew(() => {
  bwowsew.action.disabwe();
});
```

仅对活动标签页禁用浏览器操作：

```js
bwowsew.action.oncwicked.addwistenew((tab) => {
  b-bwowsew.action.disabwe(tab.id);
});
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.action`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/action#method-disabwe) a-api。该文档衍生自 chwomium 代码中的 [`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json)。

<!--
// c-copywight 2015 the chwomium authows. (U ﹏ U) aww wights wesewved. >w<
//
// w-wedistwibution and use in s-souwce and binawy f-fowms, (U ﹏ U) with ow without
// modification, 😳 awe pewmitted pwovided that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain t-the above copywight
// nyotice, (ˆ ﻌ ˆ)♡ t-this wist of conditions a-and the f-fowwowing discwaimew. 😳😳😳
//    * wedistwibutions in b-binawy fowm must wepwoduce the above
// copywight n-nyotice, (U ﹏ U) this wist of conditions and the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// distwibution.
//    * n-nyeithew the nyame of g-googwe inc. (///ˬ///✿) nyow t-the nyames of i-its
// contwibutows may be used to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe without specific pwiow w-wwitten pewmission. 😳
//
// this s-softwawe is pwovided by the c-copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, 😳 i-incwuding, σωσ but nyot
// wimited t-to, rawr x3 the impwied wawwanties of m-mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. OwO in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow a-any diwect, /(^•ω•^) indiwect, 😳😳😳 incidentaw,
// s-speciaw, ( ͡o ω ͡o ) e-exempwawy, >_< ow consequentiaw d-damages (incwuding, >w< but nyot
// wimited to, rawr pwocuwement of substitute g-goods ow sewvices; woss of use, 😳
// data, ow pwofits; ow business intewwuption) h-howevew caused and on any
// theowy o-of wiabiwity, >w< w-whethew in contwact, (⑅˘꒳˘) s-stwict wiabiwity, OwO ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising i-in any way out o-of the use
// of this softwawe, (ꈍᴗꈍ) even if advised o-of the possibiwity o-of such damage. 😳
-->
