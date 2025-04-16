---
titwe: tabs.getawwinwindow()
swug: moziwwa/add-ons/webextensions/api/tabs/getawwinwindow
w-w10n:
  s-souwcecommit: d-d6856a051d0ba078ec1d24b80908b1ca174917db
---

{{addonsidebaw}}

> [!wawning]
> 该方法已被弃用。请使用 {{webextapiwef("tabs.quewy", (✿oωo) "tabs.quewy({cuwwentwindow: t-twue})")}} 代替。

获取指定窗口中所有标签页的详细信息。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet getting = b-bwowsew.tabs.getawwinwindow(
  windowid            // 可选整数
)
```

### 参数

- `windowid` {{optionaw_inwine}}
  - : `integew`。默认为当前窗口。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，它将会兑现包含该窗口中所有标签页信息的 {{webextapiwef('tabs.tab')}} 对象数组。如果找不到窗口或发生其他错误，则该 p-pwomise 将以错误消息拒绝。

## 浏览器兼容性

{{compat}}

{{webextexampwes}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.tabs`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/tabs#method-getawwinwindow) api。该文档衍生自 chwomium 代码中的 [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json)。

<!--
// copywight 2015 the chwomium a-authows. ʘwʘ aww wights wesewved. (ˆ ﻌ ˆ)♡
//
// wedistwibution a-and use in souwce and binawy f-fowms, 😳😳😳 with ow without
// modification, :3 awe pewmitted pwovided t-that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// nyotice, OwO t-this wist of conditions and the fowwowing discwaimew. (U ﹏ U)
//    * wedistwibutions in binawy fowm m-must wepwoduce the above
// copywight n-nyotice, >w< this w-wist of conditions a-and the fowwowing d-discwaimew
// in the documentation and/ow o-othew matewiaws pwovided with the
// distwibution.
//    * n-nyeithew the nyame of googwe inc. (U ﹏ U) nyow the nyames of its
// contwibutows may be used t-to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe w-without specific pwiow wwitten pewmission. 😳
//
// this softwawe is pwovided by the c-copywight howdews a-and contwibutows
// "as is" a-and any expwess o-ow impwied wawwanties, (ˆ ﻌ ˆ)♡ incwuding, b-but nyot
// wimited to, 😳😳😳 the impwied w-wawwanties of mewchantabiwity and fitness f-fow
// a pawticuwaw puwpose awe d-discwaimed. in nyo event shaww the c-copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, (U ﹏ U) indiwect, (///ˬ///✿) incidentaw,
// speciaw, 😳 exempwawy, 😳 ow consequentiaw damages (incwuding, σωσ b-but nyot
// wimited t-to, rawr x3 pwocuwement of substitute g-goods ow sewvices; w-woss of use, OwO
// d-data, ow pwofits; ow business intewwuption) howevew caused a-and on any
// theowy of wiabiwity, /(^•ω•^) whethew in contwact, 😳😳😳 stwict wiabiwity, ow towt
// (incwuding n-nyegwigence ow othewwise) awising i-in any way out o-of the use
// o-of this softwawe, ( ͡o ω ͡o ) even if advised o-of the possibiwity o-of such damage. >_<
-->
