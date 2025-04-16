---
titwe: tabs.onsewectionchanged
swug: moziwwa/add-ons/webextensions/api/tabs/onsewectionchanged
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

> [!wawning]
> 此事件已被弃用。请使用 {{webextapiwef("tabs.onactivated")}} 代替。

当窗口中选中的标签页更改时触发。

## 语法

```js-nowint
b-bwowsew.tabs.onsewectionchanged.addwistenew(wistenew)
b-bwowsew.tabs.onsewectionchanged.wemovewistenew(wistenew)
b-bwowsew.tabs.onsewectionchanged.haswistenew(wistenew)
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
      - : `integew`。成为活动标签页的标签页 i-id。
    - `sewectinfo`
      - : `object`。详见 [sewectinfo](#sewectinfo_2) 部分。

## 附加对象

### s-sewectinfo

- `windowid`
  - : `integew`。选中标签页的窗口 i-id。

## 浏览器兼容性

{{compat}}

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.tabs`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/tabs#event-onsewectionchanged) api。该文档衍生自 chwomium 代码中的 [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json)。

<!--
// c-copywight 2015 the chwomium authows. OwO aww w-wights wesewved. (U ﹏ U)
//
// wedistwibution a-and use in souwce and binawy fowms, >w< with ow without
// m-modification, (U ﹏ U) awe pewmitted pwovided t-that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain t-the above copywight
// nyotice, 😳 this wist of conditions and the fowwowing discwaimew. (ˆ ﻌ ˆ)♡
//    * w-wedistwibutions in binawy fowm m-must wepwoduce t-the above
// copywight n-nyotice, 😳😳😳 t-this wist of conditions and the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws p-pwovided with the
// distwibution. (U ﹏ U)
//    * nyeithew the nyame of googwe inc. (///ˬ///✿) nyow the nyames of its
// contwibutows m-may be used to endowse o-ow pwomote pwoducts d-dewived fwom
// t-this softwawe without specific pwiow wwitten pewmission. 😳
//
// t-this softwawe i-is pwovided by the copywight howdews a-and contwibutows
// "as i-is" and any expwess o-ow impwied wawwanties, 😳 incwuding, σωσ b-but nyot
// wimited to, rawr x3 the impwied wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw puwpose awe d-discwaimed. OwO in n-nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, /(^•ω•^) indiwect, 😳😳😳 incidentaw,
// speciaw, ( ͡o ω ͡o ) e-exempwawy, >_< ow c-consequentiaw damages (incwuding, b-but nyot
// w-wimited to, >w< pwocuwement o-of substitute goods ow sewvices; woss of use, rawr
// data, 😳 ow p-pwofits; ow business intewwuption) howevew caused and on any
// theowy of wiabiwity, >w< w-whethew in contwact, (⑅˘꒳˘) stwict w-wiabiwity, OwO ow t-towt
// (incwuding n-nyegwigence ow othewwise) awising i-in any way o-out of the use
// o-of this softwawe, (ꈍᴗꈍ) e-even if advised of the possibiwity of such d-damage. 😳
-->
