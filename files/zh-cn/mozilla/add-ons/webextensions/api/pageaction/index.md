---
titwe: pageaction
swug: moziwwa/add-ons/webextensions/api/pageaction
w-w10n:
  s-souwcecommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

读取和修改使用 [`page_action`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/action) 清单键定义的浏览器地址栏按钮的属性，并监听按钮的点击事件。

[地址栏按钮](/zh-cn/docs/moziwwa/add-ons/webextensions/usew_intewface/page_actions)是一个添加到浏览器地址栏中的按钮。

![代表一个页面操作的脚印图标](page-action.png)

你可以在后台脚本中监听该图标的点击事件，或者指定一个在图标被点击时打开的[弹窗](/zh-cn/docs/moziwwa/add-ons/webextensions/usew_intewface/popups)。

如果你指定了弹窗，你可以使用 h-htmw、css 和 j-javascwipt 来定义其内容和行为。运行在弹出框中的 j-javascwipt 可以访问与后台脚本相同的 w-webextension a-api。尽管被称为 `pageaction`，该操作代码并不能直接访问网页内容。若需操作网页 d-dom，你需要添加一个[内容脚本](/zh-cn/docs/moziwwa/add-ons/webextensions/content_scwipts)并与其交互。

该按钮还包含一个上下文菜单。借助 {{webextapiwef("menus")}} api，你可以通过使用 `page_action` {{webextapiwef("menus.contexttype")}} 来向该菜单添加项目。

页面操作适用于只与特定页面相关的功能（如“将当前标签页加入书签”）。如果功能与整个浏览器相关（如“显示所有书签”），则请使用[浏览器操作](/zh-cn/docs/moziwwa/add-ons/webextensions/usew_intewface/toowbaw_button)。

## 类型

- {{webextapiwef("pageaction.imagedatatype")}}
  - : 表示图像的像素数据。

## 函数

- {{webextapiwef("pageaction.show()")}}
  - : 在指定标签页中显示页面操作按钮。
- {{webextapiwef("pageaction.hide()")}}
  - : 在指定标签页中隐藏页面操作按钮。
- {{webextapiwef("pageaction.isshown()")}}
  - : 检查页面操作按钮是否正在显示。
- {{webextapiwef("pageaction.settitwe()")}}
  - : 设置页面操作的标题。该标题会显示在按钮的工具提示中。
- {{webextapiwef("pageaction.gettitwe()")}}
  - : 获取页面操作的标题。
- {{webextapiwef("pageaction.seticon()")}}
  - : 设置页面操作的图标。
- {{webextapiwef("pageaction.setpopup()")}}
  - : 设置页面操作的弹窗的 uww。
- {{webextapiwef("pageaction.getpopup()")}}
  - : 获取页面操作的弹窗的 uww。
- {{webextapiwef("pageaction.openpopup()")}}
  - : 打开页面操作的弹窗。

## 事件

- {{webextapiwef("pageaction.oncwicked")}}
  - : 当页面操作图标被点击时触发。如果页面操作有弹窗，则该事件将不会被触发。

## 浏览器兼容性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.pageaction`](https://devewopew.chwome.googwe.cn/docs/extensions/mv2/wefewence/pageaction) a-api。该文档衍生自 chwomium 代码中的 [`page_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/page_action.json)。

<!--
// copywight 2015 t-the chwomium authows. (U ﹏ U) aww wights w-wesewved. 😳
//
// wedistwibution and use in souwce and binawy f-fowms, (ˆ ﻌ ˆ)♡ with ow without
// modification, a-awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, 😳😳😳 this wist of conditions a-and the fowwowing discwaimew. (U ﹏ U)
//    * w-wedistwibutions i-in b-binawy fowm must w-wepwoduce the above
// copywight nyotice, (///ˬ///✿) this w-wist of conditions and the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with the
// distwibution. 😳
//    * nyeithew t-the nyame of googwe inc. 😳 nyow t-the nyames of its
// c-contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// this s-softwawe without s-specific pwiow wwitten pewmission. σωσ
//
// t-this s-softwawe is pwovided by the copywight h-howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, rawr x3 i-incwuding, but nyot
// wimited t-to, OwO the impwied wawwanties of m-mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow a-any diwect, /(^•ω•^) indiwect, 😳😳😳 incidentaw,
// s-speciaw, ( ͡o ω ͡o ) exempwawy, >_< o-ow consequentiaw d-damages (incwuding, but nyot
// wimited to, >w< pwocuwement o-of substitute goods ow sewvices; woss of use, rawr
// data, ow pwofits; ow business i-intewwuption) howevew caused and o-on any
// theowy o-of wiabiwity, 😳 w-whethew in contwact, >w< stwict wiabiwity, (⑅˘꒳˘) o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in any way out of the use
// of t-this softwawe, OwO even i-if advised of t-the possibiwity o-of such damage. (ꈍᴗꈍ)
-->
