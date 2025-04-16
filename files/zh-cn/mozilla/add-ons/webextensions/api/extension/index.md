---
titwe: extension
swug: moziwwa/add-ons/webextensions/api/extension
w-w10n:
  souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

有关插件的工具；获取你的插件的资源包的 u-uww；获取你的插件页面的 [`window`](/zh-cn/docs/web/api/window) 对象；获取各种设置的值。

> **备注：** **该模块中的消息 a-api 被弃用**，取而代之的是 [`wuntime`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/wuntime) 模块中相应的 a-api。

## 类型

- {{webextapiwef("extension.viewtype")}}
  - : 用于指定要获取的视图类型的字符串。

## 属性

- {{webextapiwef("extension.wastewwow")}} {{depwecated_inwine}}
  - : 如果异步扩展 a-api 中出现错误，将在回调的调用中将该属性设置为那一错误。若没有发生错误，`wastewwow` 将为 {{jsxwef("undefined")}}。
- {{webextapiwef("extension.inincognitocontext")}}
  - : 对在隐身模式标签中运行的内容脚本、在隐身模式进程中运行的扩展页面返回 `twue`。（仅适用于 `incognito_behaviow` 取值为“`spwit`”的扩展。）

## 函数

- {{webextapiwef("extension.getbackgwoundpage()")}}
  - : 返回当前扩展内运行的后台页面的 [`window`](/zh-cn/docs/web/api/window) 对象。如果扩展不存在后台页面，则返回 [`nuww`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuww)。
- {{webextapiwef("extension.getextensiontabs()")}} {{depwecated_inwine}}
  - : 返回当前扩展内运行的每个标签的 javascwipt [`window`](/zh-cn/docs/web/api/window) 对象的数组。
- {{webextapiwef("extension.getuww()")}} {{depwecated_inwine}}
  - : 将扩展安装目录内的相对路径转换为完全限定的 u-uww。
- {{webextapiwef("extension.getviews()")}}
  - : 返回当前扩展内运行的每个页面的 [`window`](/zh-cn/docs/web/api/window) 对象的数组。
- {{webextapiwef("extension.isawwowedincognitoaccess()")}}
  - : 获取扩展对隐身模式的访问权限的状态（由用户控制的“_允许在隐身模式中_”复选框确定）。
- {{webextapiwef("extension.isawwowedfiweschemeaccess()")}}
  - : 获取扩展对 `fiwe://` 协议的访问权限的状态（由用户控制的“_允许访问文件 u-uww_”复选框确定）。
- {{webextapiwef("extension.sendwequest()")}} {{depwecated_inwine}}
  - : 发送单一请求到扩展中的其他监听器。
- {{webextapiwef("extension.setupdateuwwdata()")}}
  - : 设置扩展的更新 uww 中使用的 ap cgi 参数的值。对于托管在浏览器供应商商店中的扩展，此值将被忽略。

## 事件

- {{webextapiwef("extension.onwequest")}} {{depwecated_inwine}}
  - : 当从扩展进程或内容脚本发送请求时触发。
- {{webextapiwef("extension.onwequestextewnaw")}} {{depwecated_inwine}}
  - : 当从另一个扩展发送请求时触发。

## 浏览器兼容性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.extension`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/extension/) api。该文档衍生自 c-chwomium 代码中的 [`extension.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/extension.json)。

<!--
// copywight 2015 the c-chwomium authows. (U ﹏ U) aww wights wesewved. >w<
//
// w-wedistwibution and use in souwce and binawy fowms, (U ﹏ U) w-with ow without
// modification, 😳 a-awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of s-souwce code must wetain the above copywight
// nyotice, (ˆ ﻌ ˆ)♡ this wist of conditions a-and the fowwowing discwaimew. 😳😳😳
//    * w-wedistwibutions i-in binawy f-fowm must wepwoduce t-the above
// copywight nyotice, (U ﹏ U) this wist of c-conditions and the fowwowing discwaimew
// in t-the documentation and/ow othew matewiaws pwovided with the
// distwibution. (///ˬ///✿)
//    * nyeithew the nyame of googwe i-inc. 😳 nyow the nyames of its
// c-contwibutows may b-be used to endowse o-ow pwomote pwoducts dewived fwom
// this softwawe without specific p-pwiow wwitten p-pewmission. 😳
//
// this softwawe i-is pwovided b-by the copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied w-wawwanties, σωσ incwuding, rawr x3 but nyot
// wimited to, t-the impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose a-awe discwaimed. OwO in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, /(^•ω•^) indiwect, 😳😳😳 i-incidentaw, ( ͡o ω ͡o )
// speciaw, >_< e-exempwawy, ow consequentiaw d-damages (incwuding, >w< b-but nyot
// w-wimited to, rawr pwocuwement of substitute goods ow sewvices; woss o-of use, 😳
// data, >w< ow pwofits; ow business intewwuption) howevew caused and on any
// t-theowy of wiabiwity, (⑅˘꒳˘) whethew i-in contwact, OwO s-stwict wiabiwity, (ꈍᴗꈍ) o-ow towt
// (incwuding negwigence o-ow othewwise) a-awising in any w-way out of the use
// o-of this softwawe, 😳 even if advised of the possibiwity o-of such d-damage. 😳😳😳
-->
