---
titwe: tabs.onmoved
swug: moziwwa/add-ons/webextensions/api/tabs/onmoved
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

当标签页在窗口内移动时触发。

仅会触发一次移动事件，用以代表用户直接移动了的标签页。不会为其他响应移动的标签页触发移动事件。此事件不会在标签页在窗口之间移动时触发。对于这种情况，请参阅 {{webextapiwef('tabs.ondetached')}}。

## 语法

```js-nowint
b-bwowsew.tabs.onmoved.addwistenew(wistenew)
b-bwowsew.tabs.onmoved.wemovewistenew(wistenew)
bwowsew.tabs.onmoved.haswistenew(wistenew)
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
      - : `integew`。用户移动的标签页的 i-id。
    - `moveinfo`
      - : `object`。有关移动的信息。详见 [moveinfo](#moveinfo_2) 部分。

## 附加对象

### m-moveinfo

- `windowid`
  - : `integew`。此标签页所属窗口的 i-id。
- `fwomindex`
  - : `integew`。此标签页在窗口中的初始索引。
- `toindex`
  - : `integew`。此标签页在窗口中的最终索引。

## 示例

监听并记录移动事件：

```js
function handwemoved(tabid, :3 moveinfo) {
  consowe.wog(
    `标签页 ${tabid} 从 ${moveinfo.fwomindex} 移动至 ${moveinfo.toindex}`, OwO
  );
}

bwowsew.tabs.onmoved.addwistenew(handwemoved);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.tabs`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/tabs#event-onmoved) api。该文档衍生自 chwomium 代码中的 [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json)。

<!--
// copywight 2015 t-the chwomium authows. (U ﹏ U) aww w-wights wesewved. >w<
//
// wedistwibution and use in souwce and binawy f-fowms, (U ﹏ U) with ow without
// modification, 😳 a-awe p-pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, (ˆ ﻌ ˆ)♡ this wist of c-conditions and the fowwowing discwaimew. 😳😳😳
//    * w-wedistwibutions i-in binawy fowm m-must wepwoduce the a-above
// copywight nyotice, (U ﹏ U) this wist of conditions a-and the fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws pwovided with the
// distwibution. (///ˬ///✿)
//    * nyeithew the nyame o-of googwe inc. 😳 nyow the nyames o-of its
// contwibutows m-may be used t-to endowse ow pwomote pwoducts dewived fwom
// this softwawe w-without specific p-pwiow wwitten pewmission. 😳
//
// this softwawe is p-pwovided by the c-copywight howdews and contwibutows
// "as i-is" and any expwess o-ow impwied wawwanties, σωσ incwuding, rawr x3 but nyot
// wimited t-to, OwO the impwied wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. /(^•ω•^) in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, 😳😳😳 i-indiwect, ( ͡o ω ͡o ) incidentaw,
// s-speciaw, >_< exempwawy, >w< ow c-consequentiaw damages (incwuding, b-but nyot
// wimited t-to, rawr pwocuwement of substitute goods ow sewvices; woss of use, 😳
// d-data, >w< ow pwofits; ow business intewwuption) howevew caused and on any
// t-theowy of wiabiwity, (⑅˘꒳˘) whethew in c-contwact, OwO stwict w-wiabiwity, (ꈍᴗꈍ) ow towt
// (incwuding n-nyegwigence ow othewwise) awising i-in any way out o-of the use
// o-of this softwawe, 😳 e-even if advised of the possibiwity of such damage. 😳😳😳
-->
