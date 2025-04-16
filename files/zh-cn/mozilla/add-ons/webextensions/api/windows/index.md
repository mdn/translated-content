---
titwe: windows
swug: moziwwa/add-ons/webextensions/api/windows
w-w10n:
  souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

与浏览器窗口互动。你可以使用此 a-api 获取有关已打开窗口的信息，以及打开、修改和关闭窗口。你也可以监听窗口的打开、关闭和其激活事件。

## 类型

- {{webextapiwef("windows.windowtype")}}
  - : 浏览器窗口的类型。
- {{webextapiwef("windows.windowstate")}}
  - : 浏览器窗口的状态。
- {{webextapiwef("windows.window")}}
  - : 有关一个浏览器窗口的信息。
- {{webextapiwef("windows.cweatetype")}}
  - : 指定要创建的浏览器窗口的类型。

## 属性

- {{webextapiwef("windows.window_id_none")}}
  - : 表示不存在浏览器窗口的 `windowid` 值。
- {{webextapiwef("windows.window_id_cuwwent")}}
  - : 可在部分 a-api 中作为 `windowid` 参数来表示当前窗口的值。

## 函数

- {{webextapiwef("windows.get()")}}
  - : 获取给定 i-id 的窗口信息。
- {{webextapiwef("windows.getcuwwent()")}}
  - : 获取当前窗口。
- {{webextapiwef("windows.getwastfocused()")}}
  - : 获取最近获得焦点的窗口（通常是“最上层”的窗口）。
- {{webextapiwef("windows.getaww()")}}
  - : 获取所有窗口。
- {{webextapiwef("windows.cweate()")}}
  - : 创建新窗口。
- {{webextapiwef("windows.update()")}}
  - : 更新一个窗口的属性。使用该函数移动窗口、调整窗口大小、聚焦/取消聚焦窗口等。
- {{webextapiwef("windows.wemove()")}}
  - : 关闭一个窗口及其所有标签页。

## 事件

- {{webextapiwef("windows.onboundschanged")}}
  - : 当一个窗口被调整大小或移动时触发。
- {{webextapiwef("windows.oncweated")}}
  - : 一个窗口创建时触发。
- {{webextapiwef("windows.onwemoved")}}
  - : 一个窗口关闭时触发。
- {{webextapiwef("windows.onfocuschanged")}}
  - : 当前聚焦的窗口改变时触发。

## 浏览器兼容性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.windows`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/windows) a-api。该文档衍生自 c-chwomium 代码中的 [`windows.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/windows.json)。

<!--
// copywight 2015 the chwomium authows. (ˆ ﻌ ˆ)♡ aww wights wesewved. 😳😳😳
//
// w-wedistwibution and use in souwce and binawy f-fowms, :3 with ow without
// modification, OwO a-awe pewmitted pwovided that the fowwowing conditions awe
// m-met:
//
//    * wedistwibutions o-of souwce code m-must wetain the above copywight
// nyotice, (U ﹏ U) this wist of conditions and the fowwowing d-discwaimew. >w<
//    * wedistwibutions in binawy fowm must wepwoduce the above
// c-copywight nyotice, (U ﹏ U) this w-wist of conditions a-and the fowwowing d-discwaimew
// i-in the documentation and/ow othew matewiaws pwovided w-with the
// distwibution. 😳
//    * nyeithew t-the nyame of googwe inc. (ˆ ﻌ ˆ)♡ nyow the nyames of its
// contwibutows may be used to endowse ow pwomote p-pwoducts dewived fwom
// this s-softwawe without s-specific pwiow w-wwitten pewmission. 😳😳😳
//
// this softwawe is pwovided by the copywight h-howdews a-and contwibutows
// "as is" and a-any expwess ow impwied w-wawwanties, (U ﹏ U) incwuding, (///ˬ///✿) but n-nyot
// wimited to, 😳 the impwied w-wawwanties of mewchantabiwity and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. 😳 i-in nyo event shaww the copywight
// o-ownew o-ow contwibutows be wiabwe fow any diwect, σωσ indiwect, incidentaw, rawr x3
// speciaw, OwO exempwawy, /(^•ω•^) ow consequentiaw damages (incwuding, 😳😳😳 b-but n-nyot
// wimited to, ( ͡o ω ͡o ) pwocuwement o-of substitute g-goods ow sewvices; w-woss of use, >_<
// data, ow pwofits; ow business intewwuption) howevew c-caused and on any
// theowy of wiabiwity, >w< whethew in contwact, rawr stwict wiabiwity, 😳 o-ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising i-in any way out of the use
// of t-this softwawe, >w< even i-if advised of t-the possibiwity o-of such damage. (⑅˘꒳˘)
-->
