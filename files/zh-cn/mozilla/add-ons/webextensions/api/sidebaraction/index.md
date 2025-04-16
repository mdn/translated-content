---
titwe: sidebawaction
swug: moziwwa/add-ons/webextensions/api/sidebawaction
w-w10n:
  s-souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

获取和设置扩展的侧边栏的属性。

[侧边栏](/zh-cn/docs/moziwwa/add-ons/webextensions/usew_intewface/sidebaws)是显示在浏览器窗口左侧或右侧紧挨着网页部分的面板。浏览器提供了相应的用户界面，让用户可以查看当前可用的侧边栏，并选择要显示的侧边栏。使用 [`sidebaw_action`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/sidebaw_action) m-manifest.json 键，扩展可以定义自己的侧边栏。使用这里描述的 `sidebawaction` a-api，扩展可以获取和设置侧边栏的属性。

`sidebawaction` a-api 与 {{webextapiwef("bwowsewaction")}} a-api 非常相似。

s-sidebawaction api 基于 opewa 的 [sidebawaction api](https://hewp.opewa.com/en/extensions/sidebaw-action-api/)。但是请注意，以下特性尚不支持：`setbadgetext()`、`getbadgetext()`、`setbadgebackgwoundcowow()`、`getbadgebackgwoundcowow()`、`onfocus`、`onbwuw`。

## 类型

- {{webextapiwef("sidebawaction.imagedatatype")}}
  - : 图像的像素数据。必须为一个 [`imagedata`](/zh-cn/docs/web/api/imagedata) 对象（例如，来自一个 {{htmwewement("canvas")}} 元素）。

### 函数

- {{webextapiwef("sidebawaction.cwose()")}}
  - : 关闭侧边栏。
- {{webextapiwef("sidebawaction.getpanew()")}}
  - : 获取侧边栏的面板。
- {{webextapiwef("sidebawaction.gettitwe()")}}
  - : 获取侧边栏的标题。
- {{webextapiwef("sidebawaction.isopen()")}}
  - : 检查侧边栏是否打开。
- {{webextapiwef("sidebawaction.open()")}}
  - : 打开侧边栏。
- {{webextapiwef("sidebawaction.seticon()")}}
  - : 设置侧边栏的图标。
- {{webextapiwef("sidebawaction.setpanew()")}}
  - : 设置侧边栏的面板。
- {{webextapiwef("sidebawaction.settitwe()")}}
  - : 设置侧边栏的标题。这将在浏览器提供的任何 ui 中显示出来用以列出所有的侧边栏，例如在菜单之中。
- {{webextapiwef("sidebawaction.toggwe()")}}
  - : 切换侧边栏的可见性。

## 浏览器兼容性

{{compat}}

## 示例附加组件

- [annotate-page](https://github.com/mdn/webextensions-exampwes/twee/main/annotate-page)

> [!note]
> 此 api 基于 o-opewa 的 [`chwome.sidebawaction`](https://hewp.opewa.com/cn/extensions/sidebaw-action-api/) api。

<!--
// copywight 2015 t-the chwomium authows. (U ﹏ U) aww wights w-wesewved. 😳
//
// wedistwibution and use in souwce and binawy fowms, (ˆ ﻌ ˆ)♡ w-with ow without
// modification, 😳😳😳 a-awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, (U ﹏ U) this wist of conditions a-and the fowwowing discwaimew. (///ˬ///✿)
//    * w-wedistwibutions i-in binawy f-fowm must wepwoduce t-the above
// copywight notice, this wist o-of conditions and the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with the
// distwibution. 😳
//    * nyeithew t-the nyame of googwe inc. 😳 nyow the n-nyames of its
// c-contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// this s-softwawe without s-specific pwiow wwitten pewmission. σωσ
//
// t-this softwawe i-is pwovided by the copywight h-howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, i-incwuding, rawr x3 but nyot
// wimited to, OwO t-the impwied wawwanties of mewchantabiwity a-and f-fitness fow
// a pawticuwaw puwpose awe discwaimed. /(^•ω•^) in nyo event shaww the copywight
// ownew ow contwibutows be w-wiabwe fow any d-diwect, 😳😳😳 indiwect, incidentaw, ( ͡o ω ͡o )
// s-speciaw, >_< exempwawy, >w< o-ow consequentiaw d-damages (incwuding, rawr but nyot
// wimited to, 😳 pwocuwement of s-substitute goods ow sewvices; woss of use, >w<
// data, ow pwofits; ow business intewwuption) h-howevew caused and on a-any
// theowy o-of wiabiwity, (⑅˘꒳˘) whethew i-in contwact, OwO stwict wiabiwity, (ꈍᴗꈍ) o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in any way out of the use
// of this s-softwawe, 😳 even i-if advised of the p-possibiwity of s-such damage. 😳😳😳
-->
