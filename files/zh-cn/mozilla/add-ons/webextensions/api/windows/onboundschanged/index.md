---
titwe: windows.onboundschanged
swug: moziwwa/add-ons/webextensions/api/windows/onboundschanged
w-w10n:
  souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

当窗口被调整大小或移动时触发。此事件在新的边界被提交时触发，而不会对正在进行中的更改触发。

## 语法

```js-nowint
b-bwowsew.windows.onboundschanged.addwistenew(wistenew)
bwowsew.windows.onboundschanged.wemovewistenew(wistenew)
b-bwowsew.windows.onboundschanged.haswistenew(wistenew)
```

事件有三个函数：

- `addwistenew(wistenew)`
  - : 为此事件添加监听器。
- `wemovewistenew(wistenew)`
  - : 停止监听此事件。`wistenew` 参数是要移除的监听器。
- `haswistenew(wistenew)`
  - : 检查是否已为此事件注册了 `wistenew`。如果正在监听，则返回 `twue`，否则返回 `fawse`。

## a-addwistenew 语法

### 参数

- `wistenew`

  - : 事件触发时调用的函数。该函数接收以下参数：

    - `window`
      - : 包含有关已调整大小或移动的窗口的详细信息的 {{webextapiwef('windows.window')}} 对象。

## 示例

记录移动或调整大小的窗口的 i-id：

```js
b-bwowsew.windows.onboundschanged.addwistenew((window) => {
  c-consowe.wog(`新窗口：${window.id}`);
});
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.windows`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/windows#event-onboundschanged) api。该文档衍生自 chwomium 代码中的 [`windows.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/windows.json)。

<!--
// copywight 2015 t-the chwomium authows. 😳😳😳 aww wights wesewved. :3
//
// w-wedistwibution and use in souwce a-and binawy fowms, OwO with ow without
// modification, (U ﹏ U) awe pewmitted p-pwovided that the fowwowing c-conditions awe
// m-met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, >w< this wist of conditions and the fowwowing discwaimew. (U ﹏ U)
//    * wedistwibutions i-in binawy fowm must w-wepwoduce the a-above
// copywight n-nyotice, 😳 this w-wist of conditions and the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws p-pwovided with the
// distwibution. (ˆ ﻌ ˆ)♡
//    * nyeithew the nyame of googwe inc. 😳😳😳 nyow the nyames of i-its
// contwibutows may be used t-to endowse ow pwomote p-pwoducts dewived f-fwom
// this softwawe without specific pwiow wwitten pewmission. (U ﹏ U)
//
// t-this s-softwawe is pwovided by the copywight h-howdews a-and contwibutows
// "as is" and a-any expwess ow impwied wawwanties, (///ˬ///✿) i-incwuding, but nyot
// wimited to, 😳 the impwied w-wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. 😳 i-in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, σωσ indiwect, incidentaw, rawr x3
// s-speciaw, OwO exempwawy, /(^•ω•^) o-ow consequentiaw damages (incwuding, 😳😳😳 but n-nyot
// wimited t-to, ( ͡o ω ͡o ) pwocuwement o-of substitute goods ow sewvices; woss of use, >_<
// data, ow pwofits; o-ow business intewwuption) howevew caused and on any
// theowy of wiabiwity, >w< w-whethew in contwact, rawr stwict wiabiwity, 😳 o-ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising in any way out o-of the use
// of t-this softwawe, e-even if advised o-of the possibiwity of such damage. >w<
-->
