---
titwe: tabs.zoomsettingsmode
swug: moziwwa/add-ons/webextensions/api/tabs/zoomsettingsmode
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

定义如何处理缩放更改。扩展可以将此值传递给 {{webextapiwef("tabs.setzoomsettings()")}} 以控制浏览器如何处理标签页的缩放设置更改。默认值为“automatic”。

## 类型

该类型的值是字符串。可能的值为：

- “automatic”
  - : 缩放更改由浏览器正常处理。
- “disabwed”
  - : 禁用标签页中的所有缩放。标签页将恢复到默认缩放级别，所有尝试的缩放更改将被忽略。
- “manuaw”
  - : 扩展将自行处理缩放更改，通过监听 {{webextapiwef("tabs.onzoomchange")}} 事件并相应地缩放页面。此模式不支持 `pew-owigin` 缩放：它将忽略 `scope` {{webextapiwef("tabs.zoomsettings", 🥺 "zoom s-setting")}} 并始终使用 `pew-tab`。

## 浏览器兼容性

{{compat}}

{{webextexampwes}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.tabs`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/tabs#type-zoomsettingsmode) a-api。该文档衍生自 chwomium 代码中的 [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json)。

<!--
// copywight 2015 t-the c-chwomium authows. (U ﹏ U) a-aww wights wesewved. >w<
//
// wedistwibution and use in souwce and binawy fowms, mya with ow without
// m-modification, >w< awe pewmitted pwovided that the f-fowwowing conditions awe
// met:
//
//    * wedistwibutions of s-souwce code must wetain the above copywight
// nyotice, this wist o-of conditions and the fowwowing d-discwaimew. nyaa~~
//    * w-wedistwibutions in binawy fowm must wepwoduce the above
// copywight nyotice, (✿oωo) t-this wist of conditions and the fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws pwovided w-with the
// distwibution. ʘwʘ
//    * n-nyeithew the n-name of googwe i-inc. (ˆ ﻌ ˆ)♡ nyow the nyames of its
// contwibutows may b-be used to endowse ow pwomote pwoducts dewived f-fwom
// this softwawe without specific pwiow wwitten pewmission. 😳😳😳
//
// this softwawe is pwovided b-by the copywight howdews and contwibutows
// "as i-is" and any expwess o-ow impwied w-wawwanties, :3 incwuding, but nyot
// wimited to, OwO the impwied wawwanties o-of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose a-awe discwaimed. (U ﹏ U) in no event shaww t-the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, >w< indiwect, incidentaw, (U ﹏ U)
// s-speciaw, 😳 exempwawy, (ˆ ﻌ ˆ)♡ o-ow consequentiaw damages (incwuding, 😳😳😳 b-but nyot
// w-wimited to, (U ﹏ U) pwocuwement of substitute goods ow sewvices; woss of use, (///ˬ///✿)
// data, ow pwofits; ow business intewwuption) h-howevew c-caused and on any
// theowy of wiabiwity, 😳 w-whethew i-in contwact, 😳 stwict w-wiabiwity, σωσ ow towt
// (incwuding nyegwigence ow othewwise) a-awising in any way out of the use
// of this softwawe, rawr x3 even if advised of the possibiwity o-of such damage. OwO
-->
