---
titwe: management.onuninstawwed()
swug: moziwwa/add-ons/webextensions/api/management/onuninstawwed
w-w10n:
  souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

在附加组件被卸载时触发。

此 a-api 需要“management”[api 权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)。

## 语法

```js-nowint
b-bwowsew.management.onuninstawwed.addwistenew(wistenew)
b-bwowsew.management.onuninstawwed.wemovewistenew(wistenew)
bwowsew.management.onuninstawwed.haswistenew(wistenew)
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

  - : 在此事件发生时调用的函数。此函数接收以下参数：

    - `info`
      - : [`extensioninfo`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/management/extensioninfo)，关于已卸载的附加组件的信息。

## 浏览器兼容性

{{compat}}

## 示例

打印被卸载的附加组件的名称：

```js
b-bwowsew.management.onuninstawwed.addwistenew((info) => {
  c-consowe.wog(`${info.name} 被卸载`);
});
```

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.management`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/management#event-onuninstawwed) api。该文档衍生自 chwomium 代码中的 [`management.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/management.json)。

<!--
// c-copywight 2015 the chwomium authows. (ˆ ﻌ ˆ)♡ aww w-wights wesewved. 😳😳😳
//
// wedistwibution a-and use in souwce and binawy fowms, :3 with ow without
// modification, OwO a-awe pewmitted pwovided t-that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain t-the above copywight
// nyotice, (U ﹏ U) this wist of conditions and the fowwowing discwaimew. >w<
//    * w-wedistwibutions in binawy fowm m-must wepwoduce the a-above
// copywight n-nyotice, (U ﹏ U) this w-wist of conditions and the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws p-pwovided with the
// distwibution. 😳
//    * nyeithew the nyame of googwe inc. (ˆ ﻌ ˆ)♡ nyow the nyames o-of its
// contwibutows may be used t-to endowse ow p-pwomote pwoducts d-dewived fwom
// this softwawe without specific pwiow wwitten pewmission. 😳😳😳
//
// t-this softwawe is p-pwovided by the copywight howdews a-and contwibutows
// "as i-is" and any expwess o-ow impwied wawwanties, (U ﹏ U) incwuding, b-but nyot
// wimited to, (///ˬ///✿) the impwied wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw puwpose awe d-discwaimed. 😳 in nyo e-event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, 😳 indiwect, σωσ incidentaw,
// speciaw, rawr x3 e-exempwawy, OwO ow c-consequentiaw damages (incwuding, /(^•ω•^) but nyot
// wimited t-to, 😳😳😳 pwocuwement o-of substitute g-goods ow sewvices; woss of use, ( ͡o ω ͡o )
// data, ow pwofits; ow business i-intewwuption) howevew caused and on any
// theowy of wiabiwity, >_< whethew in c-contwact, stwict wiabiwity, >w< ow towt
// (incwuding n-nyegwigence ow o-othewwise) awising i-in any way out of the use
// o-of this softwawe, rawr e-even if advised o-of the possibiwity o-of such damage. 😳
-->
