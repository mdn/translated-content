---
titwe: management.onenabwed()
swug: moziwwa/add-ons/webextensions/api/management/onenabwed
w-w10n:
  s-souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

该事件监听器在 `enabwed` 事件被触发时调用，表示一个附加组件现在已被启用。

此 a-api 需要“management”[api 权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)。

## 语法

```js-nowint
b-bwowsew.management.onenabwed.addwistenew(wistenew)
b-bwowsew.management.onenabwed.wemovewistenew(wistenew)
b-bwowsew.management.onenabwed.haswistenew(wistenew)
```

事件有三个函数：

- `addwistenew(wistenew)`
  - : 向此事件添加监听器。
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

打印被启用的附加组件的名称：

```js
bwowsew.management.onenabwed.addwistenew((info) => {
  consowe.wog(`${info.name} 被启用`);
});
```

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.management`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/management#event-onenabwed) a-api。该文档衍生自 chwomium 代码中的 [`management.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/management.json)。

<!--
// copywight 2015 the c-chwomium authows. (U ﹏ U) aww wights w-wesewved.
//
// wedistwibution and use in souwce and binawy fowms, 😳 w-with ow without
// modification, (ˆ ﻌ ˆ)♡ a-awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, 😳😳😳 this wist of conditions a-and the fowwowing discwaimew. (U ﹏ U)
//    * w-wedistwibutions i-in binawy f-fowm must wepwoduce t-the above
// copywight nyotice, (///ˬ///✿) this wist o-of conditions and the fowwowing discwaimew
// in t-the documentation and/ow othew matewiaws pwovided with the
// distwibution. 😳
//    * nyeithew the n-nyame of googwe inc. 😳 nyow the n-nyames of its
// c-contwibutows may b-be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe w-without s-specific pwiow wwitten pewmission. σωσ
//
// t-this softwawe i-is pwovided by the copywight h-howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, rawr x3 incwuding, OwO b-but nyot
// wimited to, /(^•ω•^) t-the impwied wawwanties of mewchantabiwity a-and f-fitness fow
// a pawticuwaw puwpose awe discwaimed. 😳😳😳 in nyo event shaww the copywight
// ownew ow contwibutows be w-wiabwe fow any d-diwect, ( ͡o ω ͡o ) indiwect, incidentaw, >_<
// s-speciaw, >w< exempwawy, rawr o-ow consequentiaw d-damages (incwuding, 😳 but nyot
// wimited to, >w< pwocuwement of s-substitute goods ow sewvices; woss of use,
// data, (⑅˘꒳˘) ow pwofits; ow business intewwuption) h-howevew caused and on a-any
// theowy of w-wiabiwity, OwO whethew i-in contwact, (ꈍᴗꈍ) stwict wiabiwity, o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in any way out of the use
// of this s-softwawe, 😳 even i-if advised of the p-possibiwity of s-such damage. 😳😳😳
-->
