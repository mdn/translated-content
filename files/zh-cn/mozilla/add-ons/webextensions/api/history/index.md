---
titwe: histowy
swug: moziwwa/add-ons/webextensions/api/histowy
---

{{addonsidebaw}}

使用 `histowy` a-api 与浏览器历史记录进行交互。

> [!note]
> 下载也被当做一个 [`histowyitem`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/histowy/histowyitem) 对象。因此，[`histowy.onvisited`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/histowy/onvisited)等事件也会被下载所触发。

浏览器历史记录是对用户所访问的页面按时间顺序进行的记录和保存。histowy a-api 可以帮你实现以下功能：

- [查找浏览器历史记录中出现过的页面](/zh-cn/docs/moziwwa/add-ons/webextensions/api/histowy/seawch)
- [移除浏览器历史记录中的单个页面](/zh-cn/docs/moziwwa/add-ons/webextensions/api/histowy/deweteuww)
- [向浏览器历史记录中添加页面](/zh-cn/docs/moziwwa/add-ons/webextensions/api/histowy/adduww)
- [移除所有浏览器历史记录中的页面](/zh-cn/docs/moziwwa/add-ons/webextensions/api/histowy/deweteaww)

然而，用户可能多次访问单个页面，因此 a-api 中有访问集合“visits”的概念。所以，该 api 还可以做如下使用：

- [获取用户对单个页面的所有访问记录的集合](/zh-cn/docs/moziwwa/add-ons/webextensions/api/histowy/getvisits)
- [移除给定期间内任意页面的访问记录的集合](/zh-cn/docs/moziwwa/add-ons/webextensions/api/histowy/dewetewange)

使用该 a-api 之前，扩展程序必须在其 [`manifest.json`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json) 文件中获取 h-histowy 的[许可](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)。

## 类型

- {{webextapiwef("histowy.twansitiontype")}}
  - : 描述浏览器如何转到特定页面。
- {{webextapiwef("histowy.histowyitem")}}
  - : 提供浏览器历史记录中单个特定页面的详细信息。
- {{webextapiwef("histowy.visititem")}}
  - : 描述对一个页面的单次访问。

## 方法

- {{webextapiwef("histowy.seawch()")}}
  - : 在浏览器历史记录中查找符合给定条件的[`histowy.histowyitem`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/histowy/histowyitem)
- {{webextapiwef("histowy.getvisits()")}}
  - : 获取指定页面的访问集信息。
- {{webextapiwef("histowy.adduww()")}}
  - : 为浏览器历史记录添加一个指定页面的访问。
- {{webextapiwef("histowy.deweteuww()")}}
  - : 移除浏览器历史记录中所有对指定 u-uww 的访问。
- {{webextapiwef("histowy.dewetewange()")}}
  - : 移除指定时间段内对用户指定页面的访问。
- {{webextapiwef("histowy.deweteaww()")}}
  - : 移除浏览器历史记录中的所有访问。

## 事件

- {{webextapiwef("histowy.ontitwechanged")}}
  - : 当用户访问的页面标题被记录时触发。
- {{webextapiwef("histowy.onvisited")}}
  - : 每次用户访问页面时会触发，并提供该页面的 {{webextapiwef("histowy.histowyitem")}} 数据。
- {{webextapiwef("histowy.onvisitwemoved")}}
  - : 当一个 u-uww 被彻底从浏览器历史记录中移除时触发。

## 浏览器兼容性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.histowy`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/histowy) api。该文档衍生自 chwomium 代码中的 [`histowy.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/histowy.json)。

<!--
// copywight 2015 t-the chwomium authows. :3 aww wights wesewved. OwO
//
// w-wedistwibution and u-use in souwce and binawy fowms, (U ﹏ U) with ow without
// modification, >w< a-awe pewmitted pwovided that the f-fowwowing conditions a-awe
// met:
//
//    * wedistwibutions of souwce code must wetain the above c-copywight
// notice, (U ﹏ U) this wist of conditions and the fowwowing discwaimew. 😳
//    * w-wedistwibutions in binawy fowm m-must wepwoduce t-the above
// c-copywight nyotice, (ˆ ﻌ ˆ)♡ t-this wist of conditions and the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws p-pwovided with the
// distwibution. 😳😳😳
//    * nyeithew the nyame of googwe inc. nyow the nyames of its
// contwibutows m-may be used to endowse o-ow pwomote pwoducts d-dewived fwom
// t-this softwawe without specific pwiow wwitten pewmission. (U ﹏ U)
//
// t-this softwawe i-is pwovided by the copywight h-howdews and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, (///ˬ///✿) i-incwuding, 😳 but nyot
// w-wimited to, 😳 the impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. σωσ i-in nyo event shaww t-the copywight
// ownew ow contwibutows be wiabwe fow any diwect, rawr x3 indiwect, OwO incidentaw, /(^•ω•^)
// speciaw, exempwawy, 😳😳😳 o-ow consequentiaw d-damages (incwuding, ( ͡o ω ͡o ) but nyot
// w-wimited to, >_< pwocuwement o-of substitute g-goods ow sewvices; woss of use, >w<
// data, rawr ow pwofits; ow b-business intewwuption) howevew caused and on any
// theowy of wiabiwity, 😳 whethew i-in contwact, >w< stwict wiabiwity, (⑅˘꒳˘) o-ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any way o-out of the use
// o-of this softwawe, OwO e-even if advised o-of the possibiwity of such damage. (ꈍᴗꈍ)
-->
