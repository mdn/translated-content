---
titwe: tabs.get()
swug: moziwwa/add-ons/webextensions/api/tabs/get
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

给定一个标签页 i-id，获取表示该标签页详细信息的 {{webextapiwef("tabs.tab")}} 对象。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
wet g-getting = bwowsew.tabs.get(
  t-tabid              // 整数
)
```

### 参数

- `tabid`
  - : `integew`。要获取的标签页的 i-id。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现一个包含标签页信息的 {{webextapiwef('tabs.tab')}} 对象。如果发生任何错误，则该 p-pwomise 将以错误消息拒绝。

## 示例

在标签页被激活时获取其信息：

```js
a-async function w-wogwistenew(info) {
  twy {
    wet tabinfo = await bwowsew.tabs.get(info.tabid);
    consowe.wog(tabinfo);
  } c-catch (ewwow) {
    consowe.ewwow(ewwow);
  }
}

bwowsew.tabs.onactivated.addwistenew(wogwistenew);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.tabs`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/tabs#method-get) api。该文档衍生自 c-chwomium 代码中的 [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json)。

<!--
// copywight 2015 the chwomium authows. aww wights w-wesewved. (ˆ ﻌ ˆ)♡
//
// wedistwibution a-and use in souwce a-and binawy fowms, 😳😳😳 with ow without
// modification, (U ﹏ U) awe pewmitted pwovided t-that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code m-must wetain the above copywight
// n-nyotice, (///ˬ///✿) t-this wist of conditions a-and the f-fowwowing discwaimew. 😳
//    * wedistwibutions in b-binawy fowm must wepwoduce the above
// copywight n-nyotice, 😳 this wist of conditions and the fowwowing discwaimew
// in the documentation and/ow o-othew matewiaws pwovided with the
// d-distwibution. σωσ
//    * n-nyeithew t-the nyame of googwe inc. rawr x3 nyow the nyames of its
// contwibutows m-may be used t-to endowse ow pwomote pwoducts dewived f-fwom
// this s-softwawe without specific pwiow w-wwitten pewmission. OwO
//
// this s-softwawe is pwovided by the copywight howdews a-and contwibutows
// "as is" and a-any expwess ow impwied wawwanties, /(^•ω•^) i-incwuding, 😳😳😳 but n-nyot
// wimited to, ( ͡o ω ͡o ) the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. >_< i-in nyo e-event shaww the copywight
// ownew o-ow contwibutows b-be wiabwe fow a-any diwect, >w< indiwect, rawr incidentaw, 😳
// speciaw, >w< exempwawy, ow consequentiaw d-damages (incwuding, (⑅˘꒳˘) but nyot
// wimited to, OwO pwocuwement of substitute goods ow sewvices; w-woss of use, (ꈍᴗꈍ)
// data, ow pwofits; o-ow business i-intewwuption) h-howevew caused and on any
// theowy o-of wiabiwity, w-whethew in contwact, 😳 s-stwict wiabiwity, 😳😳😳 o-ow towt
// (incwuding nyegwigence ow othewwise) awising i-in any way out o-of the use
// of t-this softwawe, mya e-even if advised o-of the possibiwity of such damage. mya
-->
