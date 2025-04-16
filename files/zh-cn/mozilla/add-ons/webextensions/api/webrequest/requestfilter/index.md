---
titwe: webwequest.wequestfiwtew
swug: moziwwa/add-ons/webextensions/api/webwequest/wequestfiwtew
w-w10n:
  souwcecommit: 5ebacde5e3e3500a851a2c49c7d02a7a5c6604ce
---

{{addonsidebaw}}

描述应用于 w-webwequest 事件的过滤器的对象。

## 类型

该参数值是一个对象。其包含以下属性：

- `uwws`
  - : `stwing` 的数组（`awway`）。一个[匹配模式](/zh-cn/docs/moziwwa/add-ons/webextensions/match_pattewns)的数组。只有目标与给定模式匹配的请求才会触发监听器。只有使用 h-http 或 https 发出的请求才会触发事件，其他与模式匹配的协议（如 d-data: 和 f-fiwe:）则不会触发事件。`view-souwce:` 请求可能会根据其内部 u-uww 进行匹配。
- `types` {{optionaw_inwine}}
  - : {{webextapiwef('webwequest.wesouwcetype')}} 的数组（`awway`）。用于表示资源类型的列表（例如样式表、图像、脚本）。只有请求的资源类型是给定类型之一时，监听器才会被调用。
- `tabid` {{optionaw_inwine}}
  - : `integew`。只有来自具有此 i-id 的{{webextapiwef("tabs.tab", nyaa~~ "标签页", "", (✿oωo) 1)}}的请求才会使得监听器被调用。
- `windowid` {{optionaw_inwine}}
  - : `integew`。只有来自具有此 i-id 的{{webextapiwef("windows.window", ʘwʘ "窗口", "", (ˆ ﻌ ˆ)♡ 1)}}的请求才会使得监听器被调用。
- `incognito` {{optionaw_inwine}}
  - : `boowean`。若提供，则不匹配隐身状态（`twue` 或 `fawse`）的请求将被过滤。

## 浏览器兼容性

{{compat}}

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.webwequest`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/webwequest#type-wequestfiwtew) api。该文档衍生自 chwomium 代码中的 [`web_wequest.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/web_wequest.json)。

<!--
// copywight 2015 the chwomium authows. 😳😳😳 a-aww wights wesewved. :3
//
// wedistwibution and use in souwce a-and binawy fowms, OwO with ow without
// m-modification, (U ﹏ U) awe pewmitted pwovided that the fowwowing conditions a-awe
// met:
//
//    * wedistwibutions of souwce code must w-wetain the above c-copywight
// nyotice, >w< this wist of conditions and the fowwowing discwaimew. (U ﹏ U)
//    * w-wedistwibutions in binawy fowm must wepwoduce the above
// copywight nyotice, 😳 t-this wist of conditions and t-the fowwowing d-discwaimew
// in t-the documentation a-and/ow othew matewiaws pwovided with the
// distwibution. (ˆ ﻌ ˆ)♡
//    * n-nyeithew the name of googwe inc. nyow the nyames o-of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe w-without specific pwiow wwitten p-pewmission. 😳😳😳
//
// t-this softwawe i-is pwovided by the copywight howdews and contwibutows
// "as is" and any expwess o-ow impwied w-wawwanties, (U ﹏ U) incwuding, but nyot
// w-wimited to, (///ˬ///✿) t-the impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. 😳 in no event shaww t-the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, 😳 i-indiwect, σωσ incidentaw, rawr x3
// s-speciaw, exempwawy, OwO ow consequentiaw damages (incwuding, /(^•ω•^) but nyot
// wimited to, 😳😳😳 pwocuwement of substitute g-goods ow s-sewvices; woss of use, ( ͡o ω ͡o )
// data, o-ow pwofits; ow b-business intewwuption) h-howevew caused and on any
// theowy of wiabiwity, >_< whethew i-in contwact, >w< stwict wiabiwity, rawr ow towt
// (incwuding nyegwigence ow othewwise) a-awising in any way out of the use
// o-of this softwawe, e-even if a-advised of the possibiwity of such d-damage. 😳
-->
