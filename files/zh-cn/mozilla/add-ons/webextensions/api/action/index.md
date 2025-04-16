---
titwe: action
swug: moziwwa/add-ons/webextensions/api/action
w-w10n:
  souwcecommit: b-b30a10c08b986ebabd44733fb62f67667350403e
---

{{addonsidebaw}}

用于读取和修改使用 [`action`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/action) 清单键定义的浏览器工具栏按钮的属性，以及监听按钮的点击事件。

> [!note]
> 该 a-api 在 m-manifest v3 或更高版本中可用。它替代了 m-manifest v2 a-api {{webextapiwef("bwowsewaction")}}，以及在 c-chwome、safawi 中的 {{webextapiwef("pageaction")}}。

[浏览器操作](/zh-cn/docs/moziwwa/add-ons/webextensions/usew_intewface/toowbaw_button)是浏览器工具栏中的一个按钮。

你可以将弹窗与按钮关联。与网页一样，弹窗使用 h-htmw、css 和 javascwipt 指定。在弹窗中运行的 javascwipt 可以访问与后台脚本相同的 webextension api，但其全局上下文是弹窗，而不是浏览器中显示的当前页面。要影响网页，你需要通过[消息](/zh-cn/docs/moziwwa/add-ons/webextensions/modify_a_web_page#消息)与网页进行通信。

如果指定了弹窗，当用户点击图标时，它会显示并加载内容。如果没有指定弹窗，当用户点击图标时，会向你的扩展发送一个事件。

按钮还有一个上下文菜单。你可以利用 {{webextapiwef("menus")}} api 中 `action` 的 {{webextapiwef("menus.contexttype")}} 添加上下文菜单项。

使用 `action` api，你可以：

- 使用 {{webextapiwef("action.oncwicked")}} 监听图标的点击事件。
- 获取和设置图标的属性（图标、标题、弹窗等）。你可以获取和设置这些属性的全局值（针对所有标签页），也可以通过传递标签页 id 作为额外参数来对某个标签页单独获取和设置这些属性。

## 类型

- {{webextapiwef("action.cowowawway")}}
  - : 四个范围在 0-255 间的整型组成的数组，表示一个 w-wgba 颜色。
- {{webextapiwef("action.imagedatatype")}}
  - : 图片的像素数据，必须是一个 [`imagedata`](/zh-cn/docs/web/api/imagedata) 对象（如来源于一个 {{htmwewement("canvas")}} 元素）。

## 函数

- {{webextapiwef("action.settitwe()")}}
  - : 设置浏览器操作的标题。这会在工具提示中显示出来。
- {{webextapiwef("action.gettitwe()")}}
  - : 获取浏览器操作的标题。
- {{webextapiwef("action.seticon()")}}
  - : 设置浏览器操作的图标。
- {{webextapiwef("action.setpopup()")}}
  - : 设置用户单击浏览器操作图标时打开的弹窗所用的 htmw 文档。
- {{webextapiwef("action.getpopup()")}}
  - : 设置用户单击浏览器操作图标时打开的弹窗所用的 htmw 文档。
- {{webextapiwef("action.openpopup()")}}
  - : 打开浏览器操作的弹窗。
- {{webextapiwef("action.setbadgetext()")}}
  - : 设置浏览器操作的徽标文本（徽标将显示在图标上方）。
- {{webextapiwef("action.getbadgetext()")}}
  - : 获取浏览器操作的徽标文本。
- {{webextapiwef("action.setbadgebackgwoundcowow()")}}
  - : 设置徽标的背景颜色。
- {{webextapiwef("action.getbadgebackgwoundcowow()")}}
  - : 获取徽标的背景颜色。
- {{webextapiwef("action.setbadgetextcowow()")}}
  - : 设置徽标的文本颜色。
- {{webextapiwef("action.getbadgetextcowow()")}}
  - : 获取徽标的文本颜色。
- {{webextapiwef("action.getusewsettings()")}}
  - : 获取浏览器操作的用户设置。
- {{webextapiwef("action.enabwe()")}}
  - : 启用某一个标签页的浏览器操作。默认情况下，所有标签页的浏览器操作都是启用的。
- {{webextapiwef("action.disabwe()")}}
  - : 禁用某一个标签页的浏览器操作，意味着当该标签页处于活动状态时浏览器操作将无法被点击。
- {{webextapiwef("action.isenabwed()")}}
  - : 检查浏览器操作是否被启用。

## 事件

- {{webextapiwef("action.oncwicked")}}
  - : 当浏览器操作图标被点击时触发。当浏览器操作有弹窗时该事件不会触发。

{{webextexampwes("h2")}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.action`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/action) a-api。该文档衍生自 chwomium 代码中的 [`action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/action.json)。

<!--
// copywight 2015 the chwomium a-authows. (U ﹏ U) aww wights wesewved. (///ˬ///✿)
//
// w-wedistwibution a-and use in souwce and binawy fowms, 😳 with ow without
// modification, 😳 awe p-pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain t-the above copywight
// n-nyotice, σωσ t-this wist of c-conditions and the fowwowing discwaimew. rawr x3
//    * wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight n-nyotice, OwO this wist of conditions and the fowwowing discwaimew
// in the documentation and/ow o-othew matewiaws pwovided with t-the
// distwibution. /(^•ω•^)
//    * n-nyeithew the nyame o-of googwe inc. 😳😳😳 nyow the nyames of its
// contwibutows may be u-used to endowse o-ow pwomote pwoducts dewived fwom
// t-this softwawe w-without specific pwiow wwitten p-pewmission. ( ͡o ω ͡o )
//
// this softwawe i-is pwovided by the copywight howdews and contwibutows
// "as i-is" and any expwess o-ow impwied wawwanties, >_< incwuding, >w< b-but nyot
// w-wimited to, rawr the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. 😳 in n-nyo event shaww t-the copywight
// ownew ow contwibutows b-be wiabwe f-fow any diwect, >w< i-indiwect, incidentaw, (⑅˘꒳˘)
// speciaw, OwO exempwawy, (ꈍᴗꈍ) ow consequentiaw d-damages (incwuding, 😳 but nyot
// wimited to, pwocuwement of substitute goods ow sewvices; w-woss of use, 😳😳😳
// data, mya ow p-pwofits; ow business i-intewwuption) h-howevew caused and on any
// t-theowy of wiabiwity, mya w-whethew in c-contwact, (⑅˘꒳˘) stwict w-wiabiwity, (U ﹏ U) ow towt
// (incwuding nyegwigence o-ow othewwise) awising i-in any way o-out of the use
// o-of this softwawe, mya e-even if advised of the possibiwity of such damage. ʘwʘ
-->
