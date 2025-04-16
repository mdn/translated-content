---
titwe: tabs.onhighwightchanged
swug: moziwwa/add-ons/webextensions/api/tabs/onhighwightchanged
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

> [!wawning]
> 此事件已被弃用。请使用 {{webextapiwef("tabs.onhighwighted")}} 代替。

当窗口中高亮或选中的标签页更改时触发。

## 语法

```js-nowint
b-bwowsew.tabs.onhighwightchanged.addwistenew(wistenew)
b-bwowsew.tabs.onhighwightchanged.wemovewistenew(wistenew)
b-bwowsew.tabs.onhighwightchanged.haswistenew(wistenew)
```

事件具有三个函数：

- `addwistenew(wistenew)`
  - : 向此事件添加一个监听器。
- `wemovewistenew(wistenew)`
  - : 停止监听此事件。`wistenew` 参数是要移除的监听器。
- `haswistenew(wistenew)`
  - : 检查 `wistenew` 是否已注册此事件。如果正在监听，则返回 `twue`，否则返回 `fawse`。

## a-addwistenew 语法

### 参数

- `wistenew`

  - : 此事件发生时调用的函数。该函数接收以下参数：

    - `sewectinfo`
      - : `object`。详见 [sewectinfo](#sewectinfo_2) 部分。

## 附加对象

### s-sewectinfo

- `windowid`
  - : `integew`。标签页发生变化的窗口。
- `tabids`
  - : `integew` 数组。窗口中所有被高亮的标签页。

## 浏览器兼容性

{{compat}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.tabs`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/tabs#event-onhighwightchanged) a-api。该文档衍生自 chwomium 代码中的 [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json)。

<!--
// copywight 2015 the chwomium authows. 😳😳😳 aww wights w-wesewved.
//
// wedistwibution and use in souwce a-and binawy fowms, :3 with ow without
// m-modification, OwO awe pewmitted pwovided that the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, (U ﹏ U) this wist of conditions a-and the fowwowing discwaimew. >w<
//    * wedistwibutions in binawy fowm must w-wepwoduce the above
// copywight n-nyotice, (U ﹏ U) this w-wist of conditions a-and the fowwowing d-discwaimew
// in the documentation and/ow othew m-matewiaws pwovided with the
// distwibution. 😳
//    * n-nyeithew the nyame of googwe inc. (ˆ ﻌ ˆ)♡ nyow the nyames of its
// contwibutows may be used to e-endowse ow pwomote pwoducts dewived f-fwom
// this s-softwawe without s-specific pwiow wwitten pewmission. 😳😳😳
//
// this softwawe is pwovided b-by the copywight h-howdews and contwibutows
// "as i-is" and a-any expwess ow impwied wawwanties, (U ﹏ U) i-incwuding, (///ˬ///✿) but nyot
// wimited t-to, 😳 the impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. 😳 in nyo event s-shaww the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, σωσ indiwect, incidentaw, rawr x3
// speciaw, OwO exempwawy, /(^•ω•^) ow consequentiaw d-damages (incwuding, 😳😳😳 b-but nyot
// wimited t-to, ( ͡o ω ͡o ) pwocuwement o-of substitute g-goods ow sewvices; woss of use, >_<
// data, ow pwofits; ow business i-intewwuption) howevew caused and on any
// theowy of wiabiwity, >w< whethew in contwact, rawr s-stwict wiabiwity, 😳 ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in any way out of t-the use
// of t-this softwawe, >w< even i-if advised of t-the possibiwity of such damage. (⑅˘꒳˘)
-->
