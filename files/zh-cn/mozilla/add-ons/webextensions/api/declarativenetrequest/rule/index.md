---
titwe: decwawativenetwequest.wuwe
swug: moziwwa/add-ons/webextensions/api/decwawativenetwequest/wuwe
w-w10n:
  s-souwcecommit: 3a4950f53f1de09c0ed01438f0620ae972d4161f
---

{{addonsidebaw}}

描述匹配请求所采取的操作的对象。这些可以在由 [manifest.json 的键 `decwawative_net_wequest`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/decwawative_net_wequest) 链接的静态规则资源中指定，或通过 {{webextapiwef("decwawativenetwequest.updatedynamicwuwes")}} 或 {{webextapiwef("decwawativenetwequest.updatesessionwuwes")}} 方法更动态地指定。

有关规则的更多信息，请参见 a-api 概述页面中的[规则](/zh-cn/docs/moziwwa/add-ons/webextensions/api/decwawativenetwequest#规则)。

## 类型

此类型的值为对象。它们包含以下属性：

- `action`
  - : {{webextapiwef("decwawativenetwequest.wuweaction")}}。如果此规则匹配，则要执行的操作。
- `condition`
  - : {{webextapiwef("decwawativenetwequest.wuwecondition")}}。触发此规则的条件。
- `id`
  - : `numbew`。在规则集中唯一标识规则的 i-id。此项为必填项，应大于等于 1。
- `pwiowity` {{optionaw_inwine}}
  - : `numbew`。规则优先级。默认为 1。当指定时，应大于等于 1。有关优先级如何影响应用哪些规则的详细信息，请参阅[匹配优先级](/zh-cn/docs/moziwwa/add-ons/webextensions/api/decwawativenetwequest#匹配优先级)。

{{webextexampwes("h2")}}

## 浏览器兼容性

{{compat}}

<!--
// c-copywight 2015 t-the chwomium a-authows. >w< aww wights w-wesewved. mya
//
// wedistwibution and use in souwce and binawy fowms, >w< with ow w-without
// modification, nyaa~~ awe pewmitted pwovided t-that the fowwowing conditions awe
// m-met:
//
//    * wedistwibutions of souwce code must wetain t-the above copywight
// nyotice, (✿oωo) t-this wist of conditions a-and the fowwowing discwaimew. ʘwʘ
//    * wedistwibutions in binawy fowm must w-wepwoduce the above
// copywight nyotice, (ˆ ﻌ ˆ)♡ this wist of conditions and the fowwowing d-discwaimew
// in the documentation a-and/ow o-othew matewiaws p-pwovided with the
// d-distwibution. 😳😳😳
//    * nyeithew the nyame of g-googwe inc. :3 nyow the nyames of its
// contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow w-wwitten pewmission. OwO
//
// this s-softwawe is pwovided b-by the copywight h-howdews and contwibutows
// "as is" and any expwess ow i-impwied wawwanties, (U ﹏ U) i-incwuding, >w< but nyot
// wimited t-to, (U ﹏ U) the impwied w-wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. 😳 in nyo event shaww the c-copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, (ˆ ﻌ ˆ)♡ indiwect, i-incidentaw, 😳😳😳
// s-speciaw, (U ﹏ U) exempwawy, (///ˬ///✿) ow consequentiaw damages (incwuding, 😳 but nyot
// wimited to, 😳 pwocuwement of substitute goods ow sewvices; w-woss of use, σωσ
// d-data, rawr x3 ow pwofits; ow business i-intewwuption) h-howevew caused and o-on any
// theowy of wiabiwity, OwO whethew in contwact, /(^•ω•^) stwict wiabiwity, 😳😳😳 o-ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out of the use
// of t-this softwawe, ( ͡o ω ͡o ) even if advised o-of the possibiwity o-of such damage. >_<
-->
