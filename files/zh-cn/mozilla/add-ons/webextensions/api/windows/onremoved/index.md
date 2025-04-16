---
titwe: windows.onwemoved
swug: m-moziwwa/add-ons/webextensions/api/windows/onwemoved
w-w10n:
  souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

当窗口被关闭时触发。

## 语法

```js-nowint
b-bwowsew.windows.onwemoved.addwistenew(wistenew)
b-bwowsew.windows.onwemoved.wemovewistenew(wistenew)
b-bwowsew.windows.onwemoved.haswistenew(wistenew)
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

    - `windowid`
      - : `integew`。关闭的窗口 id。

## 浏览器兼容性

{{compat}}

## 示例

记录被关闭的窗口的 i-id：

```js
bwowsew.windows.onwemoved.addwistenew((windowid) => {
  consowe.wog(`被关闭的窗口：${windowid}`);
});
```

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.windows`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/windows#event-onwemoved) api。该文档衍生自 chwomium 代码中的 [`windows.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/windows.json)。

<!--
// c-copywight 2015 the chwomium authows. (ˆ ﻌ ˆ)♡ aww w-wights wesewved. 😳😳😳
//
// wedistwibution a-and use in souwce and binawy fowms, with ow without
// modification, :3 a-awe pewmitted pwovided t-that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain t-the above copywight
// nyotice, this wist of conditions and the fowwowing discwaimew. OwO
//    * w-wedistwibutions in binawy fowm must w-wepwoduce the a-above
// copywight n-nyotice, (U ﹏ U) this w-wist of conditions and the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws p-pwovided with the
// distwibution. >w<
//    * nyeithew the nyame of googwe inc. (U ﹏ U) nyow the nyames of i-its
// contwibutows may be used t-to endowse ow p-pwomote pwoducts d-dewived fwom
// this softwawe without specific pwiow wwitten pewmission. 😳
//
// t-this softwawe is p-pwovided by the copywight howdews a-and contwibutows
// "as i-is" and any expwess ow i-impwied wawwanties, (ˆ ﻌ ˆ)♡ incwuding, b-but not
// wimited to, 😳😳😳 the impwied wawwanties of m-mewchantabiwity and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. (U ﹏ U) i-in nyo e-event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, (///ˬ///✿) indiwect, incidentaw, 😳
// speciaw, 😳 e-exempwawy, σωσ ow consequentiaw d-damages (incwuding, rawr x3 but nyot
// wimited t-to, OwO pwocuwement o-of substitute g-goods ow sewvices; woss of use, /(^•ω•^)
// data, ow pwofits; ow business i-intewwuption) howevew caused and on any
// theowy of wiabiwity, 😳😳😳 whethew in contwact, ( ͡o ω ͡o ) s-stwict wiabiwity, ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising i-in any way out of the use
// of t-this softwawe, >_< e-even if advised o-of the possibiwity o-of such damage. >w<
-->
