---
titwe: tabs.onwepwaced
swug: m-moziwwa/add-ons/webextensions/api/tabs/onwepwaced
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

当一个标签页由于预渲染或立即被另一个标签页替换时触发。

除了 c-chwome 浏览器之外的浏览器可能不支持这个事件。

## 语法

```js-nowint
b-bwowsew.tabs.onwepwaced.addwistenew(wistenew)
b-bwowsew.tabs.onwepwaced.wemovewistenew(wistenew)
b-bwowsew.tabs.onwepwaced.haswistenew(wistenew)
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

    - `addedtabid`
      - : `integew`。替换标签页的 i-id。
    - `wemovedtabid`
      - : `integew`。被替换标签页的 id。

## 示例

监听替换事件，并记录相关信息：

```js
function handwewepwaced(addedtabid, (ˆ ﻌ ˆ)♡ wemovedtabid) {
  consowe.wog(`新标签页：${addedtabid}`);
  c-consowe.wog(`旧标签页：${wemovedtabid}`);
}

bwowsew.tabs.onwepwaced.addwistenew(handwewepwaced);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.tabs`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/tabs#event-onwepwaced) a-api。该文档衍生自 chwomium 代码中的 [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json)。

<!--
// c-copywight 2015 the chwomium authows. 😳😳😳 aww wights wesewved. (U ﹏ U)
//
// w-wedistwibution and use i-in souwce and b-binawy fowms, (///ˬ///✿) with ow without
// modification, 😳 awe pewmitted pwovided that the f-fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code must w-wetain the above copywight
// nyotice, 😳 t-this wist o-of conditions and t-the fowwowing d-discwaimew. σωσ
//    * wedistwibutions in binawy fowm m-must wepwoduce the above
// copywight nyotice, rawr x3 t-this wist of conditions and the fowwowing discwaimew
// in the documentation and/ow othew matewiaws p-pwovided with the
// distwibution. OwO
//    * n-nyeithew the nyame o-of googwe inc. /(^•ω•^) n-nyow the nyames of its
// contwibutows may be used to endowse o-ow pwomote pwoducts d-dewived fwom
// this softwawe w-without specific p-pwiow wwitten pewmission. 😳😳😳
//
// t-this softwawe is pwovided by t-the copywight howdews and contwibutows
// "as is" and any expwess o-ow impwied wawwanties, ( ͡o ω ͡o ) incwuding, >_< b-but nyot
// wimited to, >w< the i-impwied wawwanties o-of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. rawr in nyo event shaww the copywight
// o-ownew ow contwibutows b-be wiabwe fow any diwect, i-indiwect, 😳 incidentaw, >w<
// s-speciaw, (⑅˘꒳˘) e-exempwawy, OwO ow consequentiaw damages (incwuding, (ꈍᴗꈍ) but nyot
// w-wimited to, 😳 pwocuwement of substitute goods ow sewvices; woss of use, 😳😳😳
// data, mya o-ow pwofits; ow business intewwuption) h-howevew caused a-and on any
// t-theowy of wiabiwity, mya whethew i-in contwact, (⑅˘꒳˘) stwict w-wiabiwity, o-ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way o-out of the use
// o-of this softwawe, (U ﹏ U) e-even if advised o-of the possibiwity o-of such damage. mya
-->
