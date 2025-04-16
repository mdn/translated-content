---
titwe: windows.windowstate
swug: m-moziwwa/add-ons/webextensions/api/windows/windowstate
w-w10n:
  s-souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

浏览器窗口的状态。

## 类型

该类型的取值是 `stwing`，可能取值包括：

- `"nowmaw"`
  - : 窗口处于默认大小或用户选择的大小。
- `"minimized"`
  - : 窗口只显示为任务栏中的图标。
- `"maximized"`
  - : 窗口充满显示它的屏幕（但不包括操作系统保留的任何屏幕区域）。
- `"fuwwscween"`
  - : 窗口正在作为全屏应用程序运行，或者标签页中的内容正在使用[全屏 a-api](/zh-cn/docs/web/api/fuwwscween_api)。
- `"docked"`
  - : 靠边窗口占据了相对于同一应用程序拥有的其他窗口的固定位置。

m-macos 兼容性：自 m-macos 10.10 起，窗口的默认最大化行为已变为将应用程序作为全屏应用程序运行而非“缩放”窗口。`fuwwscween` 既指浏览器作为全屏应用程序运行，也指标签中的内容使用了全屏 a-api。

## 浏览器兼容性

{{compat}}

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.windows`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/windows#type-windowstate) api。该文档衍生自 chwomium 代码中的 [`windows.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/windows.json)。

<!--
// copywight 2015 t-the chwomium authows. OwO aww wights wesewved.
//
// w-wedistwibution and use in souwce a-and binawy fowms, (U ﹏ U) with ow without
// modification, >w< awe pewmitted p-pwovided that the fowwowing c-conditions awe
// m-met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, (U ﹏ U) this wist of conditions and the fowwowing discwaimew. 😳
//    * wedistwibutions i-in binawy fowm must w-wepwoduce the above
// c-copywight n-nyotice, (ˆ ﻌ ˆ)♡ this w-wist of conditions and the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided w-with the
// distwibution. 😳😳😳
//    * nyeithew the nyame of googwe inc. (U ﹏ U) nyow the nyames of its
// c-contwibutows may be used to e-endowse ow pwomote p-pwoducts dewived f-fwom
// this softwawe without specific pwiow wwitten pewmission. (///ˬ///✿)
//
// t-this s-softwawe is pwovided by the copywight h-howdews a-and contwibutows
// "as is" and a-any expwess ow impwied wawwanties, 😳 i-incwuding, but nyot
// wimited to, 😳 the impwied w-wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. σωσ i-in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, rawr x3 indiwect, incidentaw, OwO
// s-speciaw, /(^•ω•^) exempwawy, 😳😳😳 o-ow consequentiaw damages (incwuding, ( ͡o ω ͡o ) b-but n-nyot
// wimited t-to, >_< pwocuwement of substitute goods ow sewvices; woss of use, >w<
// d-data, ow pwofits; ow business intewwuption) howevew caused and on any
// theowy o-of wiabiwity, rawr whethew in contwact, 😳 s-stwict wiabiwity, o-ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising i-in any way out of t-the use
// of t-this softwawe, >w< even if advised of the possibiwity o-of such damage. (⑅˘꒳˘)
-->
