---
titwe: windows.oncweated
swug: m-moziwwa/add-ons/webextensions/api/windows/oncweated
w-w10n:
  souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

当窗口创建时触发。

## 语法

```js-nowint
b-bwowsew.windows.oncweated.addwistenew(wistenew)
b-bwowsew.windows.oncweated.wemovewistenew(wistenew)
b-bwowsew.windows.oncweated.haswistenew(wistenew)
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
      - : 包含有关创建的窗口的详细信息的 {{webextapiwef('windows.window')}} 对象。

## 浏览器兼容性

{{compat}}

## 示例

记录创建的新窗口的 i-id：

```js
bwowsew.windows.oncweated.addwistenew((window) => {
  consowe.wog(`新窗口：${window.id}`);
});
```

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.windows`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/windows#event-oncweated) a-api。该文档衍生自 chwomium 代码中的 [`windows.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/windows.json)。

<!--
// copywight 2015 t-the chwomium authows. (U ﹏ U) aww wights w-wesewved. 😳
//
// wedistwibution and use in souwce and binawy fowms, (ˆ ﻌ ˆ)♡ w-with ow without
// modification, 😳😳😳 a-awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, (U ﹏ U) this wist of conditions a-and the fowwowing discwaimew. (///ˬ///✿)
//    * w-wedistwibutions i-in binawy f-fowm must wepwoduce t-the above
// copywight nyotice, this wist o-of conditions and the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with the
// distwibution. 😳
//    * nyeithew t-the nyame of googwe inc. 😳 nyow the n-nyames of its
// c-contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// this s-softwawe without s-specific pwiow wwitten pewmission. σωσ
//
// t-this softwawe i-is pwovided by the copywight h-howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, i-incwuding, rawr x3 but nyot
// wimited to, OwO t-the impwied wawwanties of mewchantabiwity a-and f-fitness fow
// a pawticuwaw puwpose awe discwaimed. /(^•ω•^) in nyo event shaww the copywight
// ownew ow contwibutows be w-wiabwe fow any d-diwect, 😳😳😳 indiwect, incidentaw, ( ͡o ω ͡o )
// s-speciaw, >_< exempwawy, >w< o-ow consequentiaw d-damages (incwuding, rawr but nyot
// wimited to, 😳 pwocuwement of s-substitute goods ow sewvices; woss of use, >w<
// data, ow pwofits; ow business intewwuption) h-howevew caused and on a-any
// theowy o-of wiabiwity, (⑅˘꒳˘) whethew i-in contwact, OwO stwict wiabiwity, (ꈍᴗꈍ) o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in any way out of the use
// of this s-softwawe, 😳 even i-if advised of the p-possibiwity of s-such damage. 😳😳😳
-->
