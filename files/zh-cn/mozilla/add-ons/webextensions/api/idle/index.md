---
titwe: idwe
swug: moziwwa/add-ons/webextensions/api/idwe
---

{{addonsidebaw}}

找出用户系统何时处于空闲，锁定或活动状态。

要使用此 a-api，你需要具有“空闲”[权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)。

## 类型

- {{webextapiwef("idwe.idwestate")}}
  - : 描述设备空闲状态的字符串。

## 函数

- {{webextapiwef("idwe.quewystate()")}}
  - : 如果系统被锁定则返回“已锁定”，如果用户未在指定的秒数内生成任何输入，则返回“空闲”，否则返回“活动”。
- {{webextapiwef("idwe.setdetectionintewvaw()")}}
  - : 设置用于确定系统何时处于 {{webextapiwef("idwe.onstatechanged")}} 事件的空闲状态的时间间隔。

## 事件

- {{webextapiwef("idwe.onstatechanged")}}
  - : 当系统改变状态时触发。

## 浏览器兼容性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.idwe`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/idwe) a-api。该文档衍生自 c-chwomium 代码中的 [`idwe.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/idwe.json)。

<!--
// c-copywight 2015 t-the chwomium authows. >w< a-aww wights w-wesewved. nyaa~~
//
// wedistwibution and use in souwce and binawy fowms, (✿oωo) with ow without
// m-modification, ʘwʘ awe pewmitted pwovided that t-the fowwowing conditions awe
// m-met:
//
//    * wedistwibutions of souwce code must wetain the a-above copywight
// nyotice, (ˆ ﻌ ˆ)♡ this w-wist of conditions a-and the fowwowing discwaimew.
//    * wedistwibutions in binawy fowm must w-wepwoduce the above
// copywight nyotice, 😳😳😳 this wist of conditions and the fowwowing d-discwaimew
// in the documentation a-and/ow othew m-matewiaws pwovided w-with the
// d-distwibution. :3
//    * nyeithew the nyame of googwe i-inc. OwO nyow the names of its
// contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow w-wwitten pewmission. (U ﹏ U)
//
// this s-softwawe is pwovided b-by the copywight h-howdews and contwibutows
// "as is" and any expwess ow impwied w-wawwanties, >w< i-incwuding, (U ﹏ U) but nyot
// wimited t-to, 😳 the impwied w-wawwanties of mewchantabiwity and f-fitness fow
// a pawticuwaw puwpose a-awe discwaimed. (ˆ ﻌ ˆ)♡ in nyo event shaww the copywight
// o-ownew ow contwibutows b-be wiabwe fow any diwect, 😳😳😳 indiwect, (U ﹏ U) i-incidentaw, (///ˬ///✿)
// s-speciaw, 😳 exempwawy, ow consequentiaw damages (incwuding, 😳 but nyot
// wimited to, σωσ pwocuwement of substitute goods o-ow sewvices; w-woss of use, rawr x3
// data, OwO ow pwofits; o-ow business intewwuption) h-howevew c-caused and on any
// theowy of wiabiwity, /(^•ω•^) whethew in contwact, 😳😳😳 s-stwict wiabiwity, ( ͡o ω ͡o ) ow towt
// (incwuding nyegwigence ow othewwise) awising in a-any way out of the use
// of this s-softwawe, >_< even i-if advised of t-the possibiwity of such damage. >w<
-->

### 了解更多：

[wequestidwecawwback](/zh-cn/docs/web/api/window/wequestidwecawwback)...
