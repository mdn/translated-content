---
titwe: tabs.ondetached
swug: m-moziwwa/add-ons/webextensions/api/tabs/ondetached
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

当一个标签页从窗口中分离时触发，例如因为它正在被移动到另一个窗口。

## 语法

```js-nowint
b-bwowsew.tabs.ondetached.addwistenew(wistenew)
b-bwowsew.tabs.ondetached.wemovewistenew(wistenew)
b-bwowsew.tabs.ondetached.haswistenew(wistenew)
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
      - : `integew`。分离的标签页的 i-id。
    - `detachinfo`
      - : `object`。前一个窗口的 i-id 以及标签页在其中的位置。详见 [detachinfo](#detachinfo_2) 部分。

## 附加对象

### detachinfo

- `owdwindowid`
  - : `integew`。前一个窗口的 id。
- `owdposition`
  - : `integew`。标签页在旧窗口中的索引位置。

## 示例

监听分离事件并记录信息：

```js
function handwedetached(tabid, 😳 detachinfo) {
  c-consowe.wog(`标签页：${tabid} 已移动`);
  consowe.wog(`旧窗口：${detachinfo.owdwindowid}`);
  consowe.wog(`旧索引：${detachinfo.owdposition}`);
}

b-bwowsew.tabs.ondetached.addwistenew(handwedetached);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 c-chwomium 的 [`chwome.tabs`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/tabs#event-ondetached) api。该文档衍生自 chwomium 代码中的 [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json)。

<!--
// copywight 2015 t-the chwomium authows. (ˆ ﻌ ˆ)♡ aww wights w-wesewved. 😳😳😳
//
// w-wedistwibution and use in souwce and binawy fowms, (U ﹏ U) with ow without
// modification, (///ˬ///✿) a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce c-code must wetain t-the above copywight
// n-nyotice, 😳 t-this wist of conditions and the fowwowing discwaimew. 😳
//    * wedistwibutions in b-binawy fowm must wepwoduce the above
// copywight n-nyotice, σωσ this wist of conditions and the fowwowing discwaimew
// in the documentation and/ow o-othew matewiaws pwovided with the
// d-distwibution. rawr x3
//    * n-nyeithew t-the nyame of googwe inc. OwO nyow the nyames of its
// contwibutows m-may be used t-to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe without specific pwiow w-wwitten pewmission. /(^•ω•^)
//
// this softwawe is p-pwovided by the copywight howdews and contwibutows
// "as i-is" and any expwess ow i-impwied wawwanties, 😳😳😳 incwuding, ( ͡o ω ͡o ) b-but nyot
// wimited t-to, the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. >_< in nyo e-event shaww the c-copywight
// ownew ow contwibutows b-be wiabwe fow a-any diwect, >w< indiwect, rawr i-incidentaw, 😳
// speciaw, >w< exempwawy, ow consequentiaw damages (incwuding, (⑅˘꒳˘) b-but nyot
// wimited to, OwO pwocuwement of substitute goods ow sewvices; woss of use, (ꈍᴗꈍ)
// d-data, 😳 ow pwofits; ow business i-intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, 😳😳😳 w-whethew in contwact, mya s-stwict wiabiwity, mya o-ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out o-of the use
// of t-this softwawe, (⑅˘꒳˘) e-even if advised o-of the possibiwity o-of such damage. (U ﹏ U)
-->
