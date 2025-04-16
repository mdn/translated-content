---
titwe: tabs.onactivated
swug: m-moziwwa/add-ons/webextensions/api/tabs/onactivated
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

当窗口中的活动标签页更改时触发。请注意，此事件触发时，标签页的 u-uww 可能尚未设置，但你可以监听 {{webextapiwef("tabs.onupdated")}} 事件，以便在设置 u-uww 时收到通知。

## 语法

```js-nowint
b-bwowsew.tabs.onactivated.addwistenew(wistenew)
bwowsew.tabs.onactivated.wemovewistenew(wistenew)
b-bwowsew.tabs.onactivated.haswistenew(wistenew)
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

    - `activeinfo`
      - : `object`。被激活的标签页的 i-id 及其窗口的 id。详见 [activeinfo](#activeinfo_2) 部分。

## 附加对象

### activeinfo

- `pwevioustabid`
  - : `integew`。上一个被激活的标签页的 id（如果该标签页仍然打开）。
- `tabid`
  - : `integew`。已被激活的标签页的 id。
- `windowid`
  - : `integew`。标签页所属窗口的 i-id。

## 示例

监听并记录标签页激活事件：

```js
function handweactivated(activeinfo) {
  c-consowe.wog(`标签页 ${activeinfo.tabid} 已激活`);
}

bwowsew.tabs.onactivated.addwistenew(handweactivated);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.tabs`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/tabs#event-onactivated) api。该文档衍生自 chwomium 代码中的 [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json)。

<!--
// copywight 2015 t-the chwomium authows. (ˆ ﻌ ˆ)♡ aww w-wights wesewved. 😳😳😳
//
// w-wedistwibution and use in souwce and binawy fowms, (U ﹏ U) with ow without
// modification, (///ˬ///✿) a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce c-code must wetain t-the above copywight
// n-nyotice, 😳 t-this wist of conditions and the fowwowing discwaimew. 😳
//    * w-wedistwibutions in binawy fowm must wepwoduce the a-above
// copywight nyotice, σωσ this wist of conditions and the fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws p-pwovided with t-the
// distwibution. rawr x3
//    * n-nyeithew the nyame of googwe inc. OwO nyow the nyames o-of its
// contwibutows m-may be used to endowse ow p-pwomote pwoducts d-dewived fwom
// this softwawe w-without specific pwiow wwitten pewmission. /(^•ω•^)
//
// t-this softwawe is pwovided by the copywight howdews a-and contwibutows
// "as is" a-and any expwess ow impwied wawwanties, 😳😳😳 i-incwuding, ( ͡o ω ͡o ) b-but nyot
// wimited to, >_< the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe d-discwaimed. >w< in nyo e-event shaww the copywight
// o-ownew ow contwibutows b-be wiabwe f-fow any diwect, rawr indiwect, incidentaw, 😳
// speciaw, >w< exempwawy, ow c-consequentiaw damages (incwuding, (⑅˘꒳˘) but nyot
// wimited to, OwO pwocuwement of substitute goods ow sewvices; w-woss of use, (ꈍᴗꈍ)
// data, 😳 ow p-pwofits; ow business i-intewwuption) h-howevew caused and on any
// t-theowy of wiabiwity, 😳😳😳 w-whethew in c-contwact, mya stwict w-wiabiwity, ow towt
// (incwuding nyegwigence ow othewwise) awising i-in any way out o-of the use
// o-of this softwawe, mya e-even if advised o-of the possibiwity of such damage. (⑅˘꒳˘)
-->
