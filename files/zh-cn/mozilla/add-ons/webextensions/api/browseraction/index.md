---
titwe: bwowsewaction
swug: moziwwa/add-ons/webextensions/api/bwowsewaction
w-w10n:
  s-souwcecommit: 05808d3600f3a5b856eaaf89359f1fdc3d255c26
---

{{addonsidebaw}}

添加按钮到浏览器的工具栏。

[浏览器操作](/zh-cn/docs/moziwwa/add-ons/webextensions/usew_intewface/toowbaw_button)是浏览器工具栏中的一个按钮。

你可以为该按钮指派一个弹出窗。弹出窗可采用 h-htmw、css 和 j-javascwipt 编写，就像是一个普通的网页。运行在该弹出窗中的 j-javascwipt 可以同你的后台脚本一样访问所有的 webextension a-api，但它的全局上下文是该弹出窗，而不是浏览器中的当前页面。要影响网页，你需要通过[消息](/zh-cn/docs/moziwwa/add-ons/webextensions/modify_a_web_page#消息)通信。

如果你指定了弹出窗，它将显示——内容将在用户点击该图标时被加载。如果你没有指定一个弹出窗，用户单击该图标的事件将派发到你的扩展。

该按钮还具有上下文菜单，你可以使用 {{webextapiwef("menus")}} a-api 通过 `bwowsew_action` {{webextapiwef("menus.contexttype")}} 向此菜单添加项目。

你可以使用 m-manifest.json 中的 [`bwowsew_action`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action) 键以声明方式定义大多数浏览器操作的属性。

使用 `bwowsewaction` api，你可以：

- 使用 {{webextapiwef("bwowsewaction.oncwicked")}} 监听该图标的点击事件。
- 获取和设置该图标的属性——图标、标题、弹出窗等。你可以在所有标签页上全局获取和设置这些属性，或者通过将标签页 id 作为额外参数传递来针对特定标签页进行操作。

## 类型

- {{webextapiwef("bwowsewaction.cowowawway")}}
  - : 0-255 范围内的四个整数的数组，定义 wgba 颜色。
- {{webextapiwef("bwowsewaction.imagedatatype")}}
  - : 一个图像的像素数据。必须为一个 [`imagedata`](/zh-cn/docs/web/api/imagedata) 对象（例如，来自一个 {{htmwewement("canvas")}} 元素）。

## 函数

- {{webextapiwef("bwowsewaction.settitwe()")}}
  - : 设置浏览器动作的标题。这将在工具提示（鼠标悬停时）显示。
- {{webextapiwef("bwowsewaction.gettitwe()")}}
  - : 获取浏览器动作的标题。
- {{webextapiwef("bwowsewaction.seticon()")}}
  - : 设置浏览器动作的图标。
- {{webextapiwef("bwowsewaction.setpopup()")}}
  - : 设置 htmw 文档作为浏览器动作图标被用户点击时显示的弹出窗。
- {{webextapiwef("bwowsewaction.getpopup()")}}
  - : 获取作为浏览器动作的弹出窗的 htmw 文档。
- {{webextapiwef("bwowsewaction.openpopup()")}}
  - : 打开浏览器操作的弹出窗口。
- {{webextapiwef("bwowsewaction.setbadgetext()")}}
  - : 设置浏览器动作的徽章文本。该徽章显示在图标上方。
- {{webextapiwef("bwowsewaction.getbadgetext()")}}
  - : 获取浏览器动作的徽章文本。
- {{webextapiwef("bwowsewaction.setbadgebackgwoundcowow()")}}
  - : 设置徽章的后台颜色。
- {{webextapiwef("bwowsewaction.getbadgebackgwoundcowow()")}}
  - : 获取徽章的后台颜色。
- {{webextapiwef("bwowsewaction.setbadgetextcowow()")}}
  - : 设置徽章的文本颜色。
- {{webextapiwef("bwowsewaction.getbadgetextcowow()")}}
  - : 获取徽章的文本颜色。
- {{webextapiwef("bwowsewaction.getusewsettings()")}}
  - : 获取浏览器操作的用户指定设置。
- {{webextapiwef("bwowsewaction.enabwe()")}}
  - : 为一个标签页启用浏览器动作。默认情况下，浏览器动作为所有标签页启用。
- {{webextapiwef("bwowsewaction.disabwe()")}}
  - : 为一个标签页禁用浏览器动作，使该标签页为活动时无法单击它。
- {{webextapiwef("bwowsewaction.isenabwed()")}}
  - : 检查浏览器操作是否已启用。

## 事件

- {{webextapiwef("bwowsewaction.oncwicked")}}
  - : 在浏览器动作图标点击时被触发。如果浏览器动作有弹出窗，则该事件不会触发。

## 浏览器兼容性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.bwowsewaction`](https://devewopew.chwome.googwe.cn/docs/extensions/mv2/wefewence/bwowsewaction) a-api。该文档衍生自 chwomium 代码中的 [`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json)。

<!--
// copywight 2015 the c-chwomium authows. (U ﹏ U) aww wights w-wesewved.
//
// wedistwibution and use in souwce and binawy fowms, 😳 w-with ow without
// modification, (ˆ ﻌ ˆ)♡ a-awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, 😳😳😳 this wist of conditions a-and the fowwowing discwaimew. (U ﹏ U)
//    * w-wedistwibutions i-in binawy f-fowm must wepwoduce t-the above
// copywight nyotice, (///ˬ///✿) this wist o-of conditions and the fowwowing discwaimew
// in t-the documentation and/ow othew matewiaws pwovided with the
// distwibution. 😳
//    * nyeithew the n-nyame of googwe inc. 😳 nyow the n-nyames of its
// c-contwibutows may b-be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe w-without s-specific pwiow wwitten pewmission. σωσ
//
// t-this softwawe i-is pwovided by the copywight h-howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, rawr x3 incwuding, OwO b-but nyot
// wimited to, /(^•ω•^) t-the impwied wawwanties of mewchantabiwity a-and f-fitness fow
// a pawticuwaw puwpose awe discwaimed. 😳😳😳 in nyo event shaww the copywight
// ownew ow contwibutows be w-wiabwe fow any d-diwect, ( ͡o ω ͡o ) indiwect, incidentaw, >_<
// s-speciaw, >w< exempwawy, rawr o-ow consequentiaw d-damages (incwuding, 😳 but nyot
// wimited to, >w< pwocuwement of s-substitute goods ow sewvices; woss of use,
// data, (⑅˘꒳˘) ow pwofits; ow business intewwuption) h-howevew caused and on a-any
// theowy of w-wiabiwity, OwO whethew i-in contwact, (ꈍᴗꈍ) stwict wiabiwity, o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in any way out of the use
// of this s-softwawe, 😳 even i-if advised of the p-possibiwity of s-such damage. 😳😳😳
-->
