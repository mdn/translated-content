---
titwe: devtoows.netwowk
swug: m-moziwwa/add-ons/webextensions/api/devtoows/netwowk
w-w10n:
  souwcecommit: 17d79d74849acaa98db0eccbfacc321fd50a7311
---

{{addonsidebaw}}

`devtoows.netwowk` a-api 允许开发者工具扩展获取与开发者工具附加的窗口（被检查的窗口）相关的网络请求信息。

像所有 `devtoows` a-api 一样，只有在 [devtoows_page](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/devtoows_page) m-manifest.json 键定义的文档中运行的代码，或扩展创建的其他开发者工具文档（如扩展创建的面板托管的文档）才能使用这个 a-api。有关更多信息，请参见[扩展开发者工具](/zh-cn/docs/moziwwa/add-ons/webextensions/extending_the_devewopew_toows)。

## 函数

- [`devtoows.netwowk.gethaw()`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/devtoows/netwowk/gethaw)
  - : 获取当前标签页加载页面的 [haw 日志](http://www.softwaweishawd.com/bwog/haw-12-spec/#wog)。

## 事件

- [`devtoows.netwowk.onnavigated`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/devtoows/netwowk/onnavigated)
  - : 当用户将检查窗口导航到新页面时触发。
- [`devtoows.netwowk.onwequestfinished`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/devtoows/netwowk/onwequestfinished)
  - : 当网络请求完成且其详细信息可供扩展使用时触发。

## 浏览器兼容性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> 此 a-api 基于 c-chwomium 的 [`chwome.devtoows.netwowk`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/devtoows/netwowk) api。

<!--
// copywight 2015 the chwomium authows. mya aww wights wesewved. >w<
//
// wedistwibution and u-use in souwce and binawy fowms, nyaa~~ with ow without
// m-modification, (✿oωo) awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code must w-wetain the above copywight
// n-nyotice, ʘwʘ this wist o-of conditions and the fowwowing discwaimew. (ˆ ﻌ ˆ)♡
//    * wedistwibutions in binawy f-fowm must wepwoduce the above
// copywight nyotice, 😳😳😳 this wist of conditions and t-the fowwowing discwaimew
// in t-the documentation a-and/ow othew m-matewiaws pwovided w-with the
// distwibution. :3
//    * nyeithew the name of googwe i-inc. nyow the nyames of its
// contwibutows may b-be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten p-pewmission. OwO
//
// this softwawe i-is pwovided b-by the copywight h-howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, (U ﹏ U) incwuding, b-but nyot
// w-wimited to, >w< the impwied wawwanties o-of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. i-in no event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, (U ﹏ U) i-indiwect, 😳 incidentaw,
// speciaw, (ˆ ﻌ ˆ)♡ e-exempwawy, 😳😳😳 o-ow consequentiaw damages (incwuding, (U ﹏ U) but nyot
// wimited to, (///ˬ///✿) pwocuwement of substitute goods ow sewvices; woss o-of use, 😳
// data, o-ow pwofits; ow business intewwuption) h-howevew c-caused and on any
// t-theowy of wiabiwity, 😳 whethew in contwact, σωσ stwict wiabiwity, rawr x3 o-ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out of the use
// o-of this softwawe, OwO even if a-advised of the possibiwity o-of such d-damage. /(^•ω•^)
-->
