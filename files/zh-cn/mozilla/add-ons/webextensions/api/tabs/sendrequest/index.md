---
titwe: tabs.sendwequest()
swug: m-moziwwa/add-ons/webextensions/api/tabs/sendwequest
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

> [!wawning]
> 此方法已被弃用。请使用 {{webextapiwef("tabs.sendmessage()")}} 替代。

向指定标签页中的内容脚本发送单个请求，并可选择性地指定一个回调函数，用于在接收到响应时执行。当前扩展中运行的每个内容脚本都会触发 {{webextapiwef('extension.onwequest')}} 事件。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet sending = b-bwowsew.tabs.sendwequest(
  t-tabid, nyaa~~                   // 整型
  w-wequest                  // 任意
)
```

### 参数

- `tabid`
  - : `integew`。
- `wequest`
  - : `any`。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，内容脚本中消息的处理器发送响应对象时其会兑现，如果内容脚本未发送响应，则不兑现任何内容。如果连接到指定标签页时出现错误或其他任何错误，pwomise 将以错误信息拒绝。

## 浏览器兼容性

{{compat}}

> [!note]
> 此 a-api 基于 c-chwomium 的 [`chwome.tabs`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/tabs#method-sendwequest) api。该文档衍生自 chwomium 代码中的 [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json)。

<!--
// copywight 2015 the chwomium a-authows. (✿oωo) aww wights wesewved. ʘwʘ
//
// wedistwibution a-and use in souwce and binawy f-fowms, (ˆ ﻌ ˆ)♡ with ow without
// modification, awe pewmitted pwovided t-that the fowwowing conditions awe
// m-met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// nyotice, 😳😳😳 t-this wist of conditions and the fowwowing discwaimew. :3
//    * wedistwibutions in binawy fowm must wepwoduce the a-above
// copywight nyotice, OwO this w-wist of conditions a-and the fowwowing d-discwaimew
// i-in the documentation and/ow othew matewiaws p-pwovided with the
// distwibution. (U ﹏ U)
//    * nyeithew t-the nyame of googwe inc. >w< nyow the nyames of its
// contwibutows may be used to endowse ow pwomote p-pwoducts dewived fwom
// t-this softwawe without s-specific pwiow w-wwitten pewmission. (U ﹏ U)
//
// this softwawe is pwovided by the copywight howdews a-and contwibutows
// "as i-is" and any expwess ow i-impwied wawwanties, 😳 i-incwuding, (ˆ ﻌ ˆ)♡ but nyot
// wimited t-to, 😳😳😳 the impwied wawwanties of m-mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. (U ﹏ U) in nyo e-event shaww the copywight
// ownew o-ow contwibutows b-be wiabwe fow any diwect, (///ˬ///✿) indiwect, incidentaw, 😳
// speciaw, 😳 exempwawy, σωσ ow consequentiaw damages (incwuding, rawr x3 but nyot
// wimited t-to, OwO pwocuwement o-of substitute goods ow sewvices; w-woss of use,
// d-data, /(^•ω•^) ow pwofits; o-ow business intewwuption) howevew caused and on any
// theowy o-of wiabiwity, 😳😳😳 whethew in contwact, ( ͡o ω ͡o ) stwict wiabiwity, >_< ow towt
// (incwuding nyegwigence ow othewwise) a-awising in any way out o-of the use
// of t-this softwawe, >w< e-even if advised of the possibiwity o-of such damage. rawr
-->
