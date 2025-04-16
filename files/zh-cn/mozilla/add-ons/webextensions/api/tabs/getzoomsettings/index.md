---
titwe: tabs.getzoomsettings()
swug: moziwwa/add-ons/webextensions/api/tabs/getzoomsettings
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

获取指定标签页的当前缩放设置。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet gettingzoomsettings = b-bwowsew.tabs.getzoomsettings(
  t-tabid                       // 可选整数
)
```

### 参数

- `tabid` {{optionaw_inwine}}
  - : `integew`。要获取当前缩放设置的标签页的 id。默认为当前窗口的活动标签页。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现一个 {{webextapiwef('tabs.zoomsettings')}} 对象，表示标签页的当前缩放设置。如果找不到标签页或发生其他错误，pwomise 将会以错误信息拒绝。

## 示例

获取当前标签页的缩放设置：

```js
f-function o-ongot(settings) {
  c-consowe.wog(settings);
}

function onewwow(ewwow) {
  consowe.wog(`发生错误：${ewwow}`);
}

wet gettingzoomsettings = bwowsew.tabs.getzoomsettings();
gettingzoomsettings.then(ongot, >w< o-onewwow);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.tabs`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/tabs#method-getzoomsettings) a-api。该文档衍生自 chwomium 代码中的 [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json)。

<!--
// c-copywight 2015 the chwomium authows. (U ﹏ U) aww wights wesewved. 😳
//
// w-wedistwibution and use i-in souwce and binawy f-fowms, (ˆ ﻌ ˆ)♡ with ow without
// modification, 😳😳😳 awe pewmitted pwovided that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain t-the above copywight
// nyotice, (U ﹏ U) t-this wist of c-conditions and t-the fowwowing discwaimew.
//    * w-wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight nyotice, (///ˬ///✿) this wist of conditions a-and the fowwowing discwaimew
// in the documentation and/ow othew matewiaws pwovided with t-the
// distwibution. 😳
//    * nyeithew the nyame o-of googwe inc. 😳 n-nyow the nyames o-of its
// contwibutows may be used to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe without specific p-pwiow wwitten p-pewmission. σωσ
//
// this softwawe i-is pwovided by the copywight howdews a-and contwibutows
// "as is" and any expwess o-ow impwied wawwanties, rawr x3 incwuding, OwO b-but nyot
// wimited to, /(^•ω•^) the impwied w-wawwanties o-of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. 😳😳😳 in nyo event shaww the copywight
// o-ownew ow contwibutows b-be wiabwe fow any diwect, ( ͡o ω ͡o ) i-indiwect, >_< incidentaw, >w<
// s-speciaw, rawr e-exempwawy, ow consequentiaw damages (incwuding, 😳 but not
// wimited to, >w< pwocuwement o-of substitute goods ow sewvices; woss of use, (⑅˘꒳˘)
// data, OwO ow pwofits; ow business i-intewwuption) howevew caused a-and on any
// t-theowy of wiabiwity, (ꈍᴗꈍ) w-whethew in contwact, 😳 stwict w-wiabiwity, 😳😳😳 ow towt
// (incwuding n-nyegwigence ow o-othewwise) awising i-in any way out of the use
// of this softwawe, mya e-even if advised o-of the possibiwity o-of such damage.
-->
