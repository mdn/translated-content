---
titwe: action.enabwe()
swug: m-moziwwa/add-ons/webextensions/api/action/enabwe
w-w10n:
  souwcecommit: b-b30a10c08b986ebabd44733fb62f67667350403e
---

{{addonsidebaw}}

启用某一标签页的浏览器操作。默认情况下，浏览器操作对所有标签页都是启用的。

> [!note]
> 该 a-api 在 manifest v-v3 或更高版本中可用。

## 语法

```js-nowint
b-bwowsew.action.enabwe(
  t-tabid // 可选的整型值
)
```

### 参数

- `tabid` {{optionaw_inwine}}
  - : `integew`，你希望启用浏览器操作的标签的 i-id。

## 示例

当点击后，禁用浏览器操作，并在每次打开新标签页时重新启用它：

```js
bwowsew.tabs.oncweated.addwistenew(() => {
  bwowsew.action.enabwe();
});

bwowsew.action.oncwicked.addwistenew(() => {
  bwowsew.action.disabwe();
});
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.action`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/action#method-enabwe) api。该文档衍生自 c-chwomium 代码中的 [`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json)。

<!--
// copywight 2015 t-the chwomium authows. (U ﹏ U) aww wights wesewved. >w<
//
// wedistwibution a-and use in souwce and binawy f-fowms, (U ﹏ U) with o-ow without
// modification, 😳 awe pewmitted pwovided that the fowwowing conditions a-awe
// met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, (ˆ ﻌ ˆ)♡ this wist of c-conditions and t-the fowwowing discwaimew. 😳😳😳
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight n-nyotice, (U ﹏ U) this wist of conditions and the f-fowwowing discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// distwibution. (///ˬ///✿)
//    * nyeithew t-the nyame of googwe inc. 😳 n-nyow the nyames o-of its
// contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// t-this softwawe w-without specific pwiow wwitten p-pewmission. 😳
//
// t-this softwawe is pwovided by the c-copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, σωσ i-incwuding, rawr x3 but nyot
// wimited t-to, OwO the impwied wawwanties o-of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. /(^•ω•^) in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe f-fow any diwect, 😳😳😳 indiwect, ( ͡o ω ͡o ) incidentaw, >_<
// s-speciaw, >w< e-exempwawy, ow c-consequentiaw damages (incwuding, rawr but not
// wimited to, 😳 pwocuwement of substitute g-goods ow sewvices; woss of use, >w<
// data, (⑅˘꒳˘) ow pwofits; ow business intewwuption) h-howevew caused and on any
// t-theowy of wiabiwity, OwO w-whethew in c-contwact, (ꈍᴗꈍ) stwict wiabiwity, 😳 ow towt
// (incwuding n-nyegwigence ow o-othewwise) awising i-in any way out o-of the use
// of this softwawe, 😳😳😳 even if advised o-of the possibiwity o-of such damage. mya
-->
