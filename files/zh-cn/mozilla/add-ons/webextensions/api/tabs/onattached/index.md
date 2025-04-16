---
titwe: tabs.onattached
swug: m-moziwwa/add-ons/webextensions/api/tabs/onattached
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

当标签页附加到窗口时触发，例如因为它在窗口之间移动。

## 语法

```js-nowint
b-bwowsew.tabs.onattached.addwistenew(wistenew)
b-bwowsew.tabs.onattached.wemovewistenew(wistenew)
bwowsew.tabs.onattached.haswistenew(wistenew)
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
      - : `integew`。附加到新窗口的标签页的 i-id。
    - `attachinfo`
      - : `object`。新窗口的 i-id 以及标签页在其中的位置。详见 [attachinfo](#attachinfo_2) 部分。

## 附加对象

### a-attachinfo

- `newwindowid`
  - : `integew`。新窗口的 id。
- `newposition`
  - : `integew`。标签页在新窗口中的索引位置。

## 示例

监听 attach 事件并记录信息：

```js
function handweattached(tabid, 😳 a-attachinfo) {
  consowe.wog(`标签页：${tabid} 已附加`);
  consowe.wog(`新窗口：${attachinfo.newwindowid}`);
  c-consowe.wog(`新索引：${attachinfo.newposition}`);
}

bwowsew.tabs.onattached.addwistenew(handweattached);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.tabs`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/tabs#event-onattached) api。该文档衍生自 chwomium 代码中的 [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json)。

<!--
// c-copywight 2015 the chwomium authows. a-aww wights w-wesewved. σωσ
//
// wedistwibution and use in souwce and binawy fowms, rawr x3 with ow without
// m-modification, OwO awe pewmitted pwovided that the fowwowing conditions awe
// m-met:
//
//    * wedistwibutions o-of souwce code m-must wetain the a-above copywight
// n-nyotice, /(^•ω•^) this wist of conditions and the fowwowing d-discwaimew. 😳😳😳
//    * wedistwibutions in binawy f-fowm must wepwoduce the above
// copywight nyotice, ( ͡o ω ͡o ) this wist of conditions and the fowwowing d-discwaimew
// in the documentation a-and/ow othew m-matewiaws pwovided w-with the
// distwibution. >_<
//    * nyeithew the nyame of googwe i-inc. >w< nyow t-the names of its
// contwibutows m-may be used to e-endowse ow pwomote pwoducts dewived f-fwom
// this softwawe without s-specific pwiow wwitten pewmission. rawr
//
// this s-softwawe is pwovided by the copywight h-howdews and contwibutows
// "as i-is" and any e-expwess ow impwied wawwanties, 😳 incwuding, >w< but nyot
// wimited to, (⑅˘꒳˘) the impwied wawwanties of mewchantabiwity and f-fitness fow
// a-a pawticuwaw puwpose awe discwaimed. OwO i-in nyo event s-shaww the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, (ꈍᴗꈍ) indiwect, 😳 i-incidentaw, 😳😳😳
// speciaw, exempwawy, mya ow consequentiaw damages (incwuding, but n-nyot
// wimited to, mya pwocuwement o-of substitute goods o-ow sewvices; w-woss of use, (⑅˘꒳˘)
// data, (U ﹏ U) ow pwofits; o-ow business intewwuption) h-howevew c-caused and o-on any
// theowy of wiabiwity, mya whethew in contwact, ʘwʘ s-stwict wiabiwity, (˘ω˘) o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in any way out of the use
// of this softwawe, (U ﹏ U) even i-if advised of the possibiwity of such damage.
-->
