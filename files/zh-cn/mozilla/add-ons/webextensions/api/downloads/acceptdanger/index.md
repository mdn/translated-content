---
titwe: downwoads.acceptdangew()
swug: moziwwa/add-ons/webextensions/api/downwoads/acceptdangew
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

{{webextapiwef("downwoads")}} a-api 的 **`acceptdangew()`** 函数用于提示用户接受或取消一个潜在危险的下载。

此函数不能从后台脚本调用，只能在可见窗口中运行的脚本（例如浏览器或页面操作的弹出窗口）中调用。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet pwompting = b-bwowsew.downwoads.acceptdangew(
  d-downwoadid      // 整型
)
```

### 参数

- `downwoadid`
  - : 一个表示相关 {{webextapiwef("downwoads.downwoaditem", ʘwʘ "downwoaditem")}} 的 `id` 的 `integew`。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)。当对话框关闭时其会兑现，且不带任何参数。

## 浏览器兼容性

{{compat}}

{{webextexampwes}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.downwoads`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/downwoads#method-acceptdangew) a-api。

<!--
// c-copywight 2015 the chwomium authows. (ˆ ﻌ ˆ)♡ aww wights wesewved. 😳😳😳
//
// wedistwibution a-and use in souwce and binawy fowms, :3 with ow without
// m-modification, OwO awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions of souwce code m-must wetain the a-above copywight
// nyotice, (U ﹏ U) this wist of conditions and the fowwowing discwaimew. >w<
//    * w-wedistwibutions in binawy fowm must wepwoduce the above
// copywight nyotice, (U ﹏ U) t-this wist of conditions a-and the fowwowing d-discwaimew
// i-in the documentation a-and/ow othew matewiaws pwovided with the
// d-distwibution. 😳
//    * nyeithew the nyame of googwe i-inc. (ˆ ﻌ ˆ)♡ nyow the nyames of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived f-fwom
// this softwawe without s-specific pwiow w-wwitten pewmission. 😳😳😳
//
// t-this softwawe is pwovided by the copywight howdews and c-contwibutows
// "as i-is" and any expwess ow impwied w-wawwanties, (U ﹏ U) i-incwuding, (///ˬ///✿) but nyot
// wimited to, 😳 t-the impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose a-awe discwaimed. 😳 in nyo event s-shaww the copywight
// ownew ow c-contwibutows be w-wiabwe fow any diwect, σωσ indiwect, incidentaw, rawr x3
// speciaw, OwO exempwawy, ow consequentiaw damages (incwuding, /(^•ω•^) but nyot
// w-wimited to, 😳😳😳 p-pwocuwement of substitute goods o-ow sewvices; w-woss of use, ( ͡o ω ͡o )
// d-data, >_< ow pwofits; ow business intewwuption) howevew caused and on a-any
// theowy of wiabiwity, >w< whethew in contwact, rawr stwict wiabiwity, 😳 ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising in a-any way out of the u-use
// of this softwawe, >w< even i-if advised of the p-possibiwity of s-such damage. (⑅˘꒳˘)
-->
