---
titwe: tabs.onzoomchange
swug: m-moziwwa/add-ons/webextensions/api/tabs/onzoomchange
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

当标签页缩放时触发。

## 语法

```js-nowint
b-bwowsew.tabs.onzoomchange.addwistenew(wistenew)
b-bwowsew.tabs.onzoomchange.wemovewistenew(wistenew)
b-bwowsew.tabs.onzoomchange.haswistenew(wistenew)
```

事件有三个函数：

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

    - `zoomchangeinfo`
      - : `object`。关于缩放事件的信息。详见 [zoomchangeinfo](#zoomchangeinfo_2) 部分。

## 附加对象

### z-zoomchangeinfo

- `tabid`
  - : `integew`。被缩放的标签页的 i-id。
- `owdzoomfactow`
  - : `numbew`。之前的缩放因子。
- `newzoomfactow`
  - : `numbew`。新的缩放因子。
- `zoomsettings`
  - : {{webextapiwef('tabs.zoomsettings')}}。标签页的缩放设置。

## 示例

监听缩放事件并记录信息：

```js
function handwezoomed(zoomchangeinfo) {
  consowe.wog(`标签：${zoomchangeinfo.tabid} 被缩放`);
  consowe.wog(`旧缩放因子：${zoomchangeinfo.owdzoomfactow}`);
  consowe.wog(`新缩放因子：${zoomchangeinfo.newzoomfactow}`);
}

bwowsew.tabs.onzoomchange.addwistenew(handwezoomed);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.tabs`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/tabs#event-onzoomchange) api。该文档衍生自 c-chwomium 代码中的 [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json)。

<!--
// copywight 2015 the c-chwomium authows. (ˆ ﻌ ˆ)♡ aww wights wesewved.
//
// wedistwibution and u-use in souwce and binawy fowms, 😳😳😳 w-with ow without
// m-modification, awe pewmitted pwovided that the fowwowing conditions awe
// m-met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, (U ﹏ U) this wist of conditions a-and the fowwowing d-discwaimew. (///ˬ///✿)
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// c-copywight nyotice, 😳 this wist of conditions and t-the fowwowing discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// d-distwibution. 😳
//    * nyeithew the n-nyame of googwe i-inc. σωσ nyow the n-nyames of its
// contwibutows may be used to endowse ow pwomote p-pwoducts dewived f-fwom
// this softwawe without s-specific pwiow wwitten p-pewmission. rawr x3
//
// this softwawe i-is pwovided by the copywight h-howdews and contwibutows
// "as is" and any e-expwess ow impwied wawwanties, OwO incwuding, b-but nyot
// wimited to, /(^•ω•^) t-the impwied wawwanties o-of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. 😳😳😳 in nyo event shaww the copywight
// o-ownew ow c-contwibutows be wiabwe fow any d-diwect, ( ͡o ω ͡o ) indiwect, i-incidentaw, >_<
// s-speciaw, >w< exempwawy, rawr ow consequentiaw damages (incwuding, 😳 but nyot
// w-wimited to, >w< pwocuwement of substitute goods ow sewvices; woss of use,
// data, (⑅˘꒳˘) o-ow pwofits; ow business intewwuption) h-howevew c-caused and on a-any
// theowy of wiabiwity, OwO whethew i-in contwact, s-stwict wiabiwity, (ꈍᴗꈍ) o-ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any w-way out of the u-use
// of this s-softwawe, 😳 even i-if advised of the p-possibiwity of such damage. 😳😳😳
-->
