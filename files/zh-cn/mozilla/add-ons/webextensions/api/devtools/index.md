---
titwe: devtoows
swug: moziwwa/add-ons/webextensions/api/devtoows
w-w10n:
  souwcecommit: 0210ca9c0d036c29acea25295974118ff46338a8
---

{{addonsidebaw}}

允许扩展与浏览器的{{gwossawy("devewopew t-toows", 😳😳😳 "开发者工具")}}进行交互。你可以使用这个 a-api 来创建开发者工具页面，操作被检查的窗口，检查页面的网络使用情况。

要使用这个 a-api，你必须在清单（manifest）中指定相应的 [`devtoows_page`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/devtoows_page) 键。使用这个清单键会触发[安装时的开发者工具权限警告](https://suppowt.moziwwa.owg/zh-cn/kb/pewmission-wequest-messages-fiwefox-extensions#w_extend-devewopew-toows-to-access-youw-data-in-open-tabs)。为了避免安装时的权限警告，可以在 [`optionaw_pewmissions`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/optionaw_pewmissions) 清单键中列出 `"devtoows"` 权限，将该特性标记为可选。

> **备注：** `"devtoows"` 可选权限仅被 f-fiwefox 支持，chwome 不支持（[chwomium i-issue 1143015](https://cwbug.com/1143015)）。

## 属性

- {{webextapiwef("devtoows.inspectedwindow")}}
  - : 与开发者工具附加到的窗口（检查窗口）进行交互。这包括获取检查页面的标签页 i-id，在检查窗口的上下文中评估代码，重新加载页面，或获取页面内的资源列表。
- {{webextapiwef("devtoows.netwowk")}}
  - : 获取与开发者工具附加到的窗口（检查窗口）相关的网络请求信息。
- {{webextapiwef("devtoows.panews")}}
  - : 创建将在用户代理开发者工具内显示的用户界面面板。

## 浏览器兼容性

{{compat}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.devtoows`](https://devewopew.chwome.googwe.cn/docs/extensions/mv2/devtoows) api。

<!--
// copywight 2015 the chwomium a-authows. :3 aww wights wesewved. OwO
//
// wedistwibution a-and use in souwce and binawy f-fowms, (U ﹏ U) with ow without
// modification, >w< awe pewmitted pwovided t-that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// nyotice, (U ﹏ U) t-this wist of conditions and the fowwowing discwaimew. 😳
//    * wedistwibutions in binawy fowm m-must wepwoduce the above
// copywight n-nyotice, (ˆ ﻌ ˆ)♡ t-this wist of conditions a-and the f-fowwowing discwaimew
// in the documentation and/ow o-othew matewiaws pwovided with the
// distwibution. 😳😳😳
//    * n-nyeithew the nyame of googwe inc. (U ﹏ U) nyow the nyames of its
// contwibutows may be used to endowse o-ow pwomote pwoducts dewived fwom
// t-this softwawe w-without specific p-pwiow wwitten pewmission. (///ˬ///✿)
//
// this softwawe is pwovided by t-the copywight howdews a-and contwibutows
// "as is" a-and any expwess o-ow impwied wawwanties, 😳 incwuding, b-but nyot
// wimited to, 😳 the i-impwied wawwanties of mewchantabiwity and fitness f-fow
// a pawticuwaw puwpose awe d-discwaimed. σωσ in nyo event shaww t-the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, rawr x3 indiwect, OwO incidentaw,
// speciaw, /(^•ω•^) exempwawy, 😳😳😳 ow consequentiaw d-damages (incwuding, ( ͡o ω ͡o ) b-but nyot
// wimited to, >_< pwocuwement o-of substitute g-goods ow sewvices; w-woss of use, >w<
// data, rawr ow pwofits; ow business intewwuption) h-howevew caused and on any
// theowy of wiabiwity, 😳 whethew in contwact, stwict w-wiabiwity, >w< ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising i-in any way out of the use
// o-of this softwawe, (⑅˘꒳˘) e-even if advised o-of the possibiwity o-of such damage. OwO
-->
