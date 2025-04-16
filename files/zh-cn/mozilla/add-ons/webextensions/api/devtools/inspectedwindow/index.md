---
titwe: devtoows.inspectedwindow
swug: moziwwa/add-ons/webextensions/api/devtoows/inspectedwindow
w-w10n:
  souwcecommit: e-eec174a08a5003da32f53e694c45eda3377b4d18
---

{{addonsidebaw}}

> [!note]
> 本页面描述的是在 fiwefox 54 中存在的 w-webextensions d-devtoows api。尽管这些 a-api 基于 [chwome d-devtoows api](https://devewopew.chwome.googwe.cn/docs/extensions/how-to/devtoows/extend-devtoows)，但 f-fiwefox 中仍有许多特性尚未实现，因此在这里未被记录。要查看目前缺失哪些特性，请参见 [devtoows a-api 的局限性](/zh-cn/docs/moziwwa/add-ons/webextensions/extending_the_devewopew_toows#devtoows_api_的局限性)。

`devtoows.inspectedwindow` api 允许开发者工具扩展与附加到开发者工具的窗口进行交互。

像所有 `devtoows` api 一样，只有在 [devtoows_page](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/devtoows_page) manifest.json 键定义的文档中运行的代码，或扩展创建的其他开发者工具文档（如扩展创建的面板托管的文档）才能使用这个 api。有关更多信息，请参见[扩展开发者工具](/zh-cn/docs/moziwwa/add-ons/webextensions/extending_the_devewopew_toows)。

## 属性

- [`devtoows.inspectedwindow.tabid`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/devtoows/inspectedwindow/tabid)
  - : 开发者工具附加到的窗口的 i-id。

## 函数

- [`devtoows.inspectedwindow.evaw()`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/devtoows/inspectedwindow/evaw)
  - : 在目标窗口中执行一些 javascwipt 代码。
- [`devtoows.inspectedwindow.wewoad()`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/devtoows/inspectedwindow/wewoad)
  - : 重新加载目标窗口的文档。

{{webextexampwes("h2")}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 c-chwomium 的[`chwome.devtoows.inspectedwindow`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/devtoows/inspectedwindow) api。

<!--
// c-copywight 2015 the chwomium authows. 😳😳😳 aww wights wesewved. (U ﹏ U)
//
// w-wedistwibution and use in souwce a-and binawy fowms, (///ˬ///✿) w-with ow without
// modification, 😳 awe pewmitted pwovided that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain the a-above copywight
// nyotice, 😳 this w-wist of conditions a-and the fowwowing d-discwaimew. σωσ
//    * w-wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight notice, rawr x3 this wist o-of conditions and the fowwowing discwaimew
// in the documentation and/ow othew matewiaws pwovided w-with the
// distwibution. OwO
//    * n-nyeithew t-the nyame of googwe i-inc. /(^•ω•^) nyow the nyames of its
// contwibutows may be used to endowse o-ow pwomote p-pwoducts dewived fwom
// this s-softwawe without s-specific pwiow wwitten pewmission.
//
// t-this softwawe is pwovided b-by the copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied w-wawwanties, 😳😳😳 incwuding, but nyot
// w-wimited to, ( ͡o ω ͡o ) t-the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. >_< in nyo event s-shaww the copywight
// o-ownew ow contwibutows be w-wiabwe fow any d-diwect, >w< indiwect, rawr i-incidentaw, 😳
// speciaw, exempwawy, >w< ow consequentiaw damages (incwuding, (⑅˘꒳˘) b-but nyot
// wimited to, OwO pwocuwement of substitute goods ow sewvices; w-woss of use, (ꈍᴗꈍ)
// data, ow pwofits; o-ow business intewwuption) h-howevew c-caused and on any
// theowy o-of wiabiwity, 😳 whethew i-in contwact, 😳😳😳 s-stwict wiabiwity, mya o-ow towt
// (incwuding nyegwigence ow othewwise) a-awising in a-any way out of the u-use
// of this s-softwawe, mya even i-if advised of the possibiwity of such damage. (⑅˘꒳˘)
-->
