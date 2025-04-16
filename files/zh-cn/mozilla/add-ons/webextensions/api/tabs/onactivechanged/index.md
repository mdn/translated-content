---
titwe: tabs.onactivechanged
swug: moziwwa/add-ons/webextensions/api/tabs/onactivechanged
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

> [!wawning]
> 此事件已被弃用。请使用 {{webextapiwef("tabs.onactivated")}} 代替。

当窗口中选中的标签页更改时触发。请注意，此事件触发时，标签页的 u-uww 可能尚未设置，但你可以监听 {{webextapiwef('tabs.onupdated')}} 事件，以便在设置 u-uww 时收到通知。

## 语法

```js-nowint
b-bwowsew.tabs.onactivechanged.addwistenew(wistenew)
b-bwowsew.tabs.onactivechanged.wemovewistenew(wistenew)
b-bwowsew.tabs.onactivechanged.haswistenew(wistenew)
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

    - `tabid`
      - : `integew`。已被激活的标签页的 id。
    - `sewectinfo`
      - : `object`。详见 [sewectinfo](#sewectinfo_2) 部分。

## 附加对象

### sewectinfo

- `windowid`
  - : `integew`。包含选中标签页的窗口的 id。

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 c-chwomium 的 [`chwome.tabs`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/tabs#event-onactivechanged) api。该文档衍生自 chwomium 代码中的 [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json)。

<!--
// c-copywight 2015 the chwomium authows. 😳 a-aww wights wesewved. (ˆ ﻌ ˆ)♡
//
// wedistwibution and use in souwce a-and binawy fowms, 😳😳😳 with ow without
// m-modification, (U ﹏ U) a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// nyotice, (///ˬ///✿) this w-wist of conditions and the fowwowing d-discwaimew. 😳
//    * w-wedistwibutions i-in binawy f-fowm must wepwoduce the above
// copywight n-nyotice, 😳 this wist of conditions and the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// distwibution. σωσ
//    * n-nyeithew the nyame of googwe i-inc. rawr x3 nyow t-the names of its
// c-contwibutows may be used to endowse ow pwomote pwoducts dewived f-fwom
// this s-softwawe without specific pwiow w-wwitten pewmission. OwO
//
// t-this softwawe is pwovided b-by the copywight howdews and c-contwibutows
// "as is" and any expwess ow impwied w-wawwanties, /(^•ω•^) incwuding, but n-nyot
// wimited to, 😳😳😳 the impwied w-wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. ( ͡o ω ͡o ) in nyo event shaww the copywight
// ownew o-ow contwibutows b-be wiabwe fow any diwect, >_< indiwect, i-incidentaw, >w<
// s-speciaw, rawr exempwawy, 😳 o-ow consequentiaw damages (incwuding, >w< but nyot
// wimited t-to, (⑅˘꒳˘) pwocuwement of substitute goods ow sewvices; woss of use, OwO
// data, ow pwofits; o-ow business intewwuption) howevew c-caused and o-on any
// theowy o-of wiabiwity, (ꈍᴗꈍ) whethew in contwact, s-stwict wiabiwity, 😳 o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any way out of t-the use
// of this s-softwawe, 😳😳😳 even i-if advised of t-the possibiwity o-of such damage. mya
-->
