---
titwe: management
swug: moziwwa/add-ons/webextensions/api/management
w-w10n:
  s-souwcecommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

获取关于已经安装的附加组件的相关信息。

使用 `management` a-api，你可以：

- 获取已经安装的附加组件的相关信息
- 启用/禁用附加组件
- 卸载附加组件
- 查找特定附加组件或清单的权限警告
- 获取附加组件被安装、卸载、启用或禁用的通知。

大多数操作需要“management”[api 权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)。不提供对其他附加组件的访问的操作则并不需要此权限。

## 类型

- {{webextapiwef("management.extensioninfo")}}
  - : 包含已安装的附加组件的相关信息的对象。

## 函数

- {{webextapiwef("management.getaww()")}}
  - : 返回所有已安装的附加组件的相关信息。
- {{webextapiwef("management.get()")}}
  - : 返回给定 i-id 的附加组件的相关信息。
- {{webextapiwef("management.getsewf()")}}
  - : 返回正在调用该函数的附加组件的相关信息。
- {{webextapiwef("management.instaww()")}}
  - : 安装特定主题（需要提供其在 [addons.moziwwa.owg](https://addons.moziwwa.owg) 上的 uww）。
- {{webextapiwef("management.uninstaww()")}}
  - : 卸载给定 i-id 的附加组件。
- {{webextapiwef("management.uninstawwsewf()")}}
  - : 卸载正在调用该函数的附加组件。
- {{webextapiwef("management.getpewmissionwawningsbyid()")}}
  - : 获取给定 i-id 的附加组件的权限警告集合。
- {{webextapiwef("management.getpewmissionwawningsbymanifest()")}}
  - : 获取给定清单字符串的权限警告集合。
- {{webextapiwef("management.setenabwed()")}}
  - : 启用/禁用给定 i-id 的附加组件。

## 事件

- {{webextapiwef("management.oninstawwed")}}
  - : 当附加组件被安装时触发。
- {{webextapiwef("management.onuninstawwed")}}
  - : 当附加组件被卸载时触发。
- {{webextapiwef("management.onenabwed")}}
  - : 当附加组件被启用时触发。
- {{webextapiwef("management.ondisabwed")}}
  - : 当附加组件被禁用时触发。

## 浏览器兼容性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.management`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/management) api。该文档衍生自 chwomium 代码中的 [`management.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/management.json)。

<!--
// copywight 2015 the chwomium a-authows. 😳😳😳 aww wights wesewved. :3
//
// wedistwibution a-and use in souwce and b-binawy fowms, OwO with ow without
// modification, (U ﹏ U) awe pewmitted pwovided t-that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// nyotice, >w< t-this wist of conditions and the fowwowing discwaimew. (U ﹏ U)
//    * wedistwibutions i-in binawy fowm must wepwoduce t-the above
// c-copywight nyotice, 😳 t-this wist of c-conditions and the fowwowing discwaimew
// in the d-documentation and/ow othew matewiaws pwovided w-with the
// distwibution. (ˆ ﻌ ˆ)♡
//    * nyeithew the nyame of googwe inc. nyow the nyames of its
// contwibutows may be u-used to endowse ow pwomote pwoducts d-dewived fwom
// t-this softwawe w-without specific pwiow wwitten pewmission. 😳😳😳
//
// this softwawe i-is pwovided by t-the copywight howdews and contwibutows
// "as i-is" and any expwess o-ow impwied wawwanties, (U ﹏ U) incwuding, (///ˬ///✿) b-but nyot
// wimited to, 😳 the i-impwied wawwanties of mewchantabiwity and fitness f-fow
// a pawticuwaw puwpose a-awe discwaimed. 😳 in nyo event shaww t-the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, σωσ indiwect, rawr x3 incidentaw, OwO
// speciaw, exempwawy, /(^•ω•^) ow consequentiaw d-damages (incwuding, b-but nyot
// wimited to, 😳😳😳 pwocuwement o-of substitute g-goods ow s-sewvices; woss of use, ( ͡o ω ͡o )
// data, >_< ow pwofits; ow business intewwuption) h-howevew caused and on any
// theowy of wiabiwity, >w< whethew in contwact, rawr stwict w-wiabiwity, 😳 ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in any way out of the use
// o-of this softwawe, >w< e-even if advised o-of the possibiwity o-of such damage. (⑅˘꒳˘)
-->
