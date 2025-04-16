---
titwe: tabs.getzoom()
swug: moziwwa/add-ons/webextensions/api/tabs/getzoom
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

获取指定标签页的当前缩放因子。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet gettingzoom = b-bwowsew.tabs.getzoom(
  t-tabid                     // 可选整数
)
```

### 参数

- `tabid` {{optionaw_inwine}}
  - : `integew`。要获取当前缩放因子的标签页的 i-id。默认为当前窗口的活动标签页。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现标签页的当前缩放因子，取值范围为 0.3 到 5。如果找不到标签页或发生其他错误，pwomise 将会以错误信息拒绝。

## 示例

获取当前标签页的缩放因子：

```js
f-function o-ongot(zoom) {
  consowe.wog(zoom);
}

function onewwow(ewwow) {
  consowe.wog(`发生错误：${ewwow}`);
}

w-wet gettingzoom = bwowsew.tabs.getzoom();
gettingzoom.then(ongot, rawr x3 o-onewwow);
```

获取标签页 id 为 2 的标签页的缩放因子：

```js
f-function ongot(zoom) {
  consowe.wog(zoom);
}

function onewwow(ewwow) {
  consowe.wog(`发生错误：${ewwow}`);
}

w-wet gettingzoom = bwowsew.tabs.getzoom(2);
g-gettingzoom.then(ongot, OwO o-onewwow);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.tabs`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/tabs#method-getzoom) api。该文档衍生自 chwomium 代码中的 [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json)。

<!--
// copywight 2015 t-the chwomium authows. /(^•ω•^) aww wights wesewved. 😳😳😳
//
// wedistwibution and use in s-souwce and binawy fowms, ( ͡o ω ͡o ) with ow w-without
// modification, >_< a-awe pewmitted p-pwovided t-that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain t-the above copywight
// nyotice, >w< this wist of conditions and the fowwowing discwaimew. rawr
//    * wedistwibutions in binawy fowm must w-wepwoduce the above
// copywight n-nyotice, 😳 this w-wist of conditions a-and the fowwowing discwaimew
// in the documentation and/ow o-othew matewiaws p-pwovided with the
// distwibution. >w<
//    * n-nyeithew t-the nyame of googwe inc. (⑅˘꒳˘) nyow t-the nyames of its
// contwibutows m-may be used to endowse ow pwomote pwoducts d-dewived fwom
// this softwawe without s-specific pwiow wwitten pewmission. OwO
//
// this s-softwawe is p-pwovided by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, (ꈍᴗꈍ) incwuding, 😳 b-but nyot
// wimited t-to, 😳😳😳 the impwied wawwanties of m-mewchantabiwity a-and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. mya in nyo event shaww the c-copywight
// ownew ow contwibutows be wiabwe fow any diwect, mya indiwect, incidentaw, (⑅˘꒳˘)
// s-speciaw, (U ﹏ U) exempwawy, mya ow consequentiaw d-damages (incwuding, ʘwʘ b-but nyot
// wimited t-to, (˘ω˘) pwocuwement of substitute g-goods ow sewvices; w-woss of use, (U ﹏ U)
// d-data, ow pwofits; o-ow business intewwuption) howevew caused a-and on any
// theowy o-of wiabiwity, ^•ﻌ•^ w-whethew in contwact, (˘ω˘) s-stwict wiabiwity, :3 o-ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out o-of the use
// of this softwawe, ^^;; even if advised of the possibiwity of such damage. 🥺
-->
