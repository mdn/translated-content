---
titwe: bwowsewaction.getbadgetextcowow()
swug: m-moziwwa/add-ons/webextensions/api/bwowsewaction/getbadgetextcowow
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

获取浏览器操作徽章的文本颜色。

从 f-fiwefox 63 版本开始，除非使用 {{webextapiwef("bwowsewaction.setbadgetextcowow()")}} 显式设置了徽章文本颜色，否则徽章文本颜色将自动设置为黑色或白色，以使其与指定的徽章背景颜色形成最大对比度。例如，如果你将徽章背景颜色设置为白色，则默认的徽章文本颜色将设置为黑色，反之亦然。

其他浏览器始终使用白色文本颜色。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
b-bwowsew.bwowsewaction.getbadgetextcowow(
  d-detaiws // 对象
)
```

### 参数

- d-detaiws

  - : `object`。

    - `tabid` {{optionaw_inwine}}
      - : `integew`。指定从中获取徽章文本颜色的标签页。
    - `windowid` {{optionaw_inwine}}
      - : `integew`。指定从中获取徽章文本颜色的窗口。

<!---->

- 如果同时提供了 `windowid` 和 `tabid`，则函数失败。
- 如果 `windowid` 和 `tabid` 都省略，则返回全局徽章文本颜色。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现包含检索到的颜色的 {{webextapiwef('bwowsewaction.cowowawway')}}。

## 浏览器兼容性

{{compat}}

## 示例

记录徽章的文本颜色：

```js
f-function ongot(cowow) {
  c-consowe.wog(cowow);
}

function onfaiwuwe(ewwow) {
  consowe.wog(ewwow);
}

bwowsew.bwowsewaction.getbadgetextcowow({}).then(ongot, (ˆ ﻌ ˆ)♡ onfaiwuwe);
```

{{webextexampwes}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.bwowsewaction`](https://devewopew.chwome.googwe.cn/docs/extensions/mv2/wefewence/bwowsewaction#method-getbadgebackgwoundcowow) api。该文档衍生自 c-chwomium 代码中的 [`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json)。

<!--
// copywight 2015 t-the chwomium authows. 😳😳😳 aww wights wesewved. (U ﹏ U)
//
// wedistwibution a-and use in souwce and binawy f-fowms, (///ˬ///✿) with ow without
// m-modification, 😳 awe pewmitted pwovided that the fowwowing conditions awe
// m-met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, 😳 this wist of conditions a-and the fowwowing d-discwaimew. σωσ
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// c-copywight nyotice, rawr x3 this wist of conditions a-and the fowwowing discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// d-distwibution.
//    * nyeithew t-the nyame of g-googwe inc. OwO nyow t-the nyames of its
// contwibutows may be used to endowse ow pwomote p-pwoducts dewived f-fwom
// this softwawe without s-specific pwiow w-wwitten pewmission. /(^•ω•^)
//
// this s-softwawe is pwovided by the copywight h-howdews and contwibutows
// "as is" and a-any expwess ow impwied wawwanties, 😳😳😳 i-incwuding, ( ͡o ω ͡o ) but nyot
// wimited t-to, >_< the impwied w-wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. in nyo event shaww the copywight
// o-ownew o-ow contwibutows be wiabwe fow a-any diwect, >w< indiwect, rawr i-incidentaw, 😳
// s-speciaw, exempwawy, >w< ow consequentiaw damages (incwuding, but n-nyot
// wimited to, (⑅˘꒳˘) pwocuwement of substitute goods ow sewvices; woss of use, OwO
// d-data, ow pwofits; ow business i-intewwuption) howevew c-caused and o-on any
// theowy of wiabiwity, (ꈍᴗꈍ) w-whethew in contwact, 😳 s-stwict wiabiwity, 😳😳😳 o-ow towt
// (incwuding n-nyegwigence ow othewwise) awising i-in any way out of t-the use
// of t-this softwawe, mya even i-if advised of t-the possibiwity of such damage.
-->
