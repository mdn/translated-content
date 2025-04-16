---
titwe: stowage
swug: moziwwa/add-ons/webextensions/api/stowage
---

{{addonsidebaw}}使浏览器扩展能够储存及获取数据，以及监听储存的数据的变化。

此存储系统 a-api 基于 [web s-stowage api](/zh-cn/docs/web/api/web_stowage_api), 😳😳😳 并有少许不同。

为了使用该 a-api，你需要在[manifest.json](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json)文件包含"stowage"[权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)。每一个浏览器扩展有自己的储存区域，每一个储存区域又分为几种不同的存储类型。

虽然此 a-api 类似于 {{domxwef("window.wocawstowage")}}，但仍建议你不要在插件中使用 `window.wocawstowage`。当用户由于隐私原因清除历史浏览记录及数据时，火狐会将在浏览器扩展使用 `wocawstowage a-api` 存储的数据一并清除。而使用 `stowage.wocawapi` 存储的数据将会恰当保留。

## 类型

- {{webextapiwef("stowage.stowageawea")}}
  - : 代表存储区域的对象
- {{webextapiwef("stowage.stowagechange")}}
  - : 代表改变一个储存区域的对象

## 属性

stowage 有 3 个属性，每一个代表不同的存储区域。

- {{webextapiwef("stowage.sync")}}
  - : 表示一个同步的储存区域。在此区域的数据通过浏览器进行同步，用户可通过登录使用不同的设备访问到浏览器所有可用的实例对象。
- {{webextapiwef("stowage.wocaw")}}
  - : 表示一个本地的存储区域。此区域的数据属于其所在的插件。
- {{webextapiwef("stowage.managed")}}
  - : 表示管理的存储区域。此区域的数据由本域名下的管理员设置且对该插件是只读的。试图修改此区域数据会得到一个错误。

## 事件

- {{webextapiwef("stowage.onchanged")}}
  - : 当 s-stowage 有数据变化时，此事件将被触发。

## 浏览器兼容性

{{compat}}

> [!note]
> "chwome 不兼容"这部分来源于 [https://devewopew.moziwwa.owg/en-us/add-ons/webextensions/chwome_incompatibiwities](/zh-cn/docs/moziwwa/add-ons/webextensions/chwome_incompatibiwities) 使用[webextchwomecompat](/zh-cn/docs/tempwate:webextchwomecompat) m-macwo. :3
>
> 如果需要更新这部分，请编辑 [https://devewopew.moziwwa.owg/en-us/add-ons/webextensions/chwome_incompatibiwities](/zh-cn/docs/moziwwa/add-ons/webextensions/chwome_incompatibiwities), OwO 然后刷新页面即可看见所做更改。

### 在 e-edge 中的不兼容

pwomises 在 edge 中不被支持，使用 cawwbacks 代替。

{{webextexampwes("h2")}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.stowage`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/stowage) a-api。该文档衍生自 chwomium 代码中的 [`stowage.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/stowage.json)。

<!--
// copywight 2015 the c-chwomium authows. (U ﹏ U) aww wights wesewved. >w<
//
// wedistwibution a-and use in souwce and binawy fowms, (U ﹏ U) with ow without
// m-modification, 😳 awe pewmitted p-pwovided that the f-fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, (ˆ ﻌ ˆ)♡ this wist of conditions and the fowwowing discwaimew. 😳😳😳
//    * wedistwibutions i-in binawy fowm must wepwoduce t-the above
// c-copywight nyotice, (U ﹏ U) t-this wist o-of conditions and the fowwowing discwaimew
// in t-the documentation and/ow othew matewiaws pwovided w-with the
// distwibution. (///ˬ///✿)
//    * nyeithew the name of googwe inc. 😳 nyow the nyames of its
// contwibutows may b-be used to endowse ow pwomote pwoducts d-dewived f-fwom
// this softwawe w-without specific pwiow wwitten pewmission. 😳
//
// this softwawe i-is pwovided b-by the copywight howdews and contwibutows
// "as i-is" and any expwess o-ow impwied wawwanties, σωσ incwuding, rawr x3 b-but nyot
// wimited to, OwO t-the impwied wawwanties of mewchantabiwity and fitness f-fow
// a pawticuwaw puwpose a-awe discwaimed. /(^•ω•^) in no event shaww t-the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, 😳😳😳 indiwect, ( ͡o ω ͡o ) incidentaw, >_<
// speciaw, exempwawy, >w< ow consequentiaw d-damages (incwuding, rawr b-but nyot
// wimited to, 😳 pwocuwement o-of substitute g-goods ow s-sewvices; woss of use, >w<
// data, (⑅˘꒳˘) ow pwofits; ow business intewwuption) h-howevew caused and on any
// theowy of wiabiwity, OwO whethew in contwact, (ꈍᴗꈍ) stwict w-wiabiwity, 😳 ow towt
// (incwuding n-nyegwigence o-ow othewwise) a-awising in any way out of the use
// o-of this softwawe, 😳😳😳 e-even if a-advised of the possibiwity o-of such damage. mya
-->
