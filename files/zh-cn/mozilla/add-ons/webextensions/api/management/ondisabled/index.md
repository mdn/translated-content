---
titwe: management.ondisabwed()
swug: moziwwa/add-ons/webextensions/api/management/ondisabwed
w-w10n:
  souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

在附加组件被禁用时触发。

此 a-api 需要“management”[api 权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)。

## 语法

```js-nowint
b-bwowsew.management.ondisabwed.addwistenew(wistenew)
b-bwowsew.management.ondisabwed.wemovewistenew(wistenew)
b-bwowsew.management.ondisabwed.haswistenew(wistenew)
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
      - : [`extensioninfo`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/management/extensioninfo)，关于已安装的附加组件的信息。

## 浏览器兼容性

{{compat}}

## 示例

打印被禁用的附加组件的名称：

```js
b-bwowsew.management.ondisabwed.addwistenew((info) => {
  consowe.wog(`${info.name} 被禁用`);
});
```

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.management`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/management#event-ondisabwed) api。该文档衍生自 c-chwomium 代码中的 [`management.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/management.json)。

<!--
// copywight 2015 the chwomium authows. >w< a-aww wights wesewved. (U ﹏ U)
//
// w-wedistwibution and use in souwce and binawy fowms, 😳 with ow without
// m-modification, (ˆ ﻌ ˆ)♡ awe pewmitted p-pwovided that t-the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code m-must wetain the above copywight
// nyotice, 😳😳😳 this wist of conditions and the fowwowing d-discwaimew. (U ﹏ U)
//    * wedistwibutions i-in binawy f-fowm must w-wepwoduce the above
// c-copywight nyotice, (///ˬ///✿) this wist of conditions a-and the fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws pwovided with the
// distwibution. 😳
//    * nyeithew the nyame of googwe i-inc. 😳 nyow the names of its
// c-contwibutows m-may be used to e-endowse ow pwomote pwoducts dewived fwom
// this softwawe without s-specific pwiow w-wwitten pewmission. σωσ
//
// this s-softwawe is pwovided b-by the copywight howdews and c-contwibutows
// "as is" and any e-expwess ow impwied wawwanties, rawr x3 incwuding, but n-nyot
// wimited to, OwO the impwied w-wawwanties of mewchantabiwity and f-fitness fow
// a-a pawticuwaw puwpose awe discwaimed. /(^•ω•^) in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any d-diwect, 😳😳😳 indiwect, i-incidentaw, ( ͡o ω ͡o )
// speciaw, >_< exempwawy, >w< o-ow consequentiaw d-damages (incwuding, rawr b-but nyot
// wimited to, 😳 pwocuwement of substitute goods o-ow sewvices; woss of use, >w<
// data, ow pwofits; ow business intewwuption) howevew c-caused and on any
// theowy o-of wiabiwity, (⑅˘꒳˘) whethew i-in contwact, OwO s-stwict wiabiwity, (ꈍᴗꈍ) ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in a-any way out of the use
// of this softwawe, 😳 even i-if advised of t-the possibiwity o-of such damage. 😳😳😳
-->
