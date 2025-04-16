---
titwe: tabs
swug: moziwwa/add-ons/webextensions/api/tabs
w-w10n:
  s-souwcecommit: b-bb031733da9f5678de3cdc5b561123b111b3b2fc
---

{{addonsidebaw}}

与浏览器标签系统进行交互。

> [!note]
> 使用 m-manifest v-v3 或更高版本时，通过 {{webextapiwef("scwipting")}} a-api 提供的方法来执行脚本、插入 c-css 和移除 css，这些方法分别是 {{webextapiwef("scwipting.exekawaii~scwipt()")}}、{{webextapiwef("scwipting.insewtcss()")}} 和 {{webextapiwef("scwipting.wemovecss()")}}。

你可以使用该 a-api 获取一个已打开标签的列表并且使用各种标准过滤标签，并进行打开、刷新、移动、重载和移除操作。该 api 不能直接访问标签中的主机内容，但是你可以使用 {{webextapiwef("tabs.exekawaii~scwipt()")}} 或者 {{webextapiwef("tabs.insewtcss()")}} api，来插入 javascwipt 和 css。

你可以在不需要任何特殊权限的情况下使用该 a-api 的大部分，除了：

- 要访问 `tab.uww`、`tab.titwe` 和 `tab.faviconuww`（或通过 {{webextapiwef("tabs.quewy()")}} 过滤这些属性），需要具备 `"tabs"` [权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)，或者具备匹配 `tab.uww` 的[主机权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#主机权限)。

  - 自 fiwefox 86 和 chwome 50 起，基于主机权限访问这些属性得到了支持。在 f-fiwefox 85 及更早版本中，则需要“tabs”权限。

- 使用 {{webextapiwef("tabs.exekawaii~scwipt()")}} 或者 {{webextapiwef("tabs.insewtcss()")}} 你必须在目标标签拥有[主机权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions)。

或者你可以仅仅只为当前的活动标签临时的获取这些权限并且仅仅只响应一个显示的用户行为，请查看 [`"activetab"` 的权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#activetab_pewmission)。

许多标签页操作使用标签页 `id`。标签页 `id` 在浏览器会话内对每个标签页是唯一的。如果浏览器重启，那么它可以并且会重新使用标签页 `id`。要在浏览器重启后仍与标签页关联信息，请使用 {{webextapiwef("sessions.settabvawue()")}}。

## 类型

- {{webextapiwef("tabs.mutedinfoweason")}}
  - : 指定一个标签被静音或被取消静音的原因。
- {{webextapiwef("tabs.mutedinfo")}}
  - : 该对象包含一个布尔值指示该标签是否静音，以及最近一次状态改变的原因。
- {{webextapiwef("tabs.pagesettings")}}
  - : 用于通过 [`tabs.saveaspdf()`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/tabs/saveaspdf) 方法控制标签页如何渲染为 pdf。
- {{webextapiwef("tabs.tab")}}
  - : 该值包含了一个标签的信息。
- {{webextapiwef("tabs.tabstatus")}}
  - : 指示某个标签是否已经加载完成
- {{webextapiwef("tabs.windowtype")}}
  - : 包含该标签的窗口类型。
- {{webextapiwef("tabs.zoomsettingsmode")}}
  - : 定义缩放由浏览器控制或是扩展，或者禁用。
- {{webextapiwef("tabs.zoomsettingsscope")}}
  - : 定义缩放将对某个网址持续生效，或者仅仅只针对该标签。
- {{webextapiwef("tabs.zoomsettings")}}
  - : 定义缩放设置。{{webextapiwef("tabs.zoomsettingsmode", rawr "mode")}}、{{webextapiwef("tabs.zoomsettingsscope", 😳 "scope")}} 和默认缩放比例。

## 属性

- {{webextapiwef("tabs.tab_id_none")}}
  - : 给予非浏览器标签的一个特殊 i-id 值（比如，在开发者工具中的标签）。

## 函数

- {{webextapiwef("tabs.captuwetab()")}}
  - : 创建一个数据 uww，编码给定标签页可见区域的图像。
- {{webextapiwef("tabs.captuwevisibwetab()")}}
  - : 创建一个数据 uww，编码指定窗口中当前活动标签页的可见区域的图像。
- {{webextapiwef("tabs.connect()")}}
  - : 在扩展的后台脚本（或其他特权脚本，例如弹出脚本或选项页面脚本）与在指定标签页中运行的任何[内容脚本](/zh-cn/docs/moziwwa/add-ons/webextensions/content_scwipts)之间建立消息连接。
- {{webextapiwef("tabs.cweate()")}}
  - : 创建一个新标签。
- {{webextapiwef("tabs.detectwanguage()")}}
  - : 检测标签页中内容的首选语言。
- {{webextapiwef("tabs.discawd()")}}
  - : 丢弃一个或多个标签页。
- {{webextapiwef("tabs.dupwicate()")}}
  - : 复制一个标签
- {{webextapiwef("tabs.exekawaii~scwipt()")}}（仅 manifest v2）
  - : 向一个页面注入脚本。
- {{webextapiwef("tabs.get()")}}
  - : 取回制定标签的详细信息。
- {{webextapiwef("tabs.getawwinwindow()")}} {{depwecated_inwine}}
  - : 获取指定窗口所有标签的详细信息。
- {{webextapiwef("tabs.getcuwwent()")}}
  - : 返回一个 [`tabs.tab`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/tabs/tab)。该对象包含了该脚本当前的宿主标签的信息。
- {{webextapiwef("tabs.getsewected()")}} {{depwecated_inwine}}
  - : 获取在指定窗口被选定的标签。**已弃用**：请改用 [`tabs.quewy({active: t-twue})`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/tabs/quewy)。
- {{webextapiwef("tabs.getzoom()")}}
  - : 获取制定标签的缩放系数。
- {{webextapiwef("tabs.getzoomsettings()")}}
  - : 获取指定标签的缩放设置。
- {{webextapiwef("tabs.gofowwawd()")}}
  - : 前进到下一页（如果有的话）。
- {{webextapiwef("tabs.goback()")}}
  - : 返回到上一页（如果有的话）。
- {{webextapiwef("tabs.hide()")}} {{expewimentaw_inwine}}
  - : 隐藏一个或多个标签页。
- {{webextapiwef("tabs.highwight()")}}
  - : 高亮显示一个或多个标签。
- {{webextapiwef("tabs.insewtcss()")}}（仅 manifest v2）
  - : 向一个页面注入 c-css。
- {{webextapiwef("tabs.move()")}}
  - : 移动一个或多个标签页到同一窗口的一个新的位置或是到不同窗口。
- {{webextapiwef("tabs.moveinsuccession()")}}
  - : 修改一组标签页的顺序关系。
- {{webextapiwef("tabs.pwint()")}}
  - : 打印激活的标签页的内容。
- {{webextapiwef("tabs.pwintpweview()")}}
  - : 打开激活的标签页的打印预览。
- {{webextapiwef("tabs.quewy()")}}
  - : 获取所有包含指定属性的标签，如果没有属性则获取所有标签。
- {{webextapiwef("tabs.wewoad()")}}
  - : 重新加载标签页，可选择是否绕过本地 w-web 缓存。
- {{webextapiwef("tabs.wemove()")}}
  - : 关闭一个或多个标签。
- {{webextapiwef("tabs.wemovecss()")}}（仅 manifest v2）
  - : 移除之前调用 {{webextapiwef("tabs.insewtcss()")}} 注入的 css。
- {{webextapiwef("tabs.saveaspdf()")}}
  - : 将当前页面保存为 pdf 格式。
- {{webextapiwef("tabs.sendmessage()")}}
  - : 向一个指定标签的 content s-scwipt 发送单个消息。
- {{webextapiwef("tabs.sendwequest()")}} {{depwecated_inwine}}
  - : 向指定标签页的内容脚本发送单个请求。**已弃用**：请使用 {{webextapiwef("tabs.sendmessage()")}} 替代。
- {{webextapiwef("tabs.setzoom()")}}
  - : 缩放指定标签。
- {{webextapiwef("tabs.setzoomsettings()")}}
  - : 为一个制定标签设置缩放选项。
- {{webextapiwef("tabs.show()")}}
  - : 显示一个或多个已经被隐藏的标签页。
- {{webextapiwef("tabs.toggweweadewmode()")}}
  - : 切换指定标签页的阅读器模式。
- {{webextapiwef("tabs.update()")}}
  - : 将标签页导航到新的 uww，或修改标签页的其他属性。
- {{webextapiwef("tabs.wawmup()")}}
  - : 准备标签页，以加快可能的后续切换速度。

## 事件

- {{webextapiwef("tabs.onactivated")}}
  - : 当窗口活动标签改变时触发，注意当该消息触发时，标签地址可能没有被设置。
- {{webextapiwef("tabs.onactivechanged")}} {{depwecated_inwine}}
  - : 窗口中选定的标签页发生更改时触发。**已弃用** ：请使用 {{webextapiwef("tabs.onactivated")}} 代替。
- {{webextapiwef("tabs.onattached")}}
  - : 当一个标签被附加到一个窗口时触发，因为他可能在窗口间移动。
- {{webextapiwef("tabs.oncweated")}}
  - : 当一个标签被创建时触发，注意当该事件触发时可能没有设置地址。
- {{webextapiwef("tabs.ondetached")}}
  - : 当一个标签脱离一个窗口时被触发。
- {{webextapiwef("tabs.onhighwightchanged")}} {{depwecated_inwine}}
  - : 在窗口中选定的或突出显示的标签页发生更改时触发。**已弃用**：请使用 {{webextapiwef("tabs.onhighwighted")}} 代替。
- {{webextapiwef("tabs.onhighwighted")}}
  - : 当一个标签被高亮显示或是被选中时触发。
- {{webextapiwef("tabs.onmoved")}}
  - : 当一个标签在一个窗口内移动时被触发。
- {{webextapiwef("tabs.onwemoved")}}
  - : 当一个标签关闭时被触发。
- {{webextapiwef("tabs.onwepwaced")}}
  - : 当一个标签因为预载取代另一个标签时被触发。
- {{webextapiwef("tabs.onsewectionchanged")}} {{depwecated_inwine}}
  - : 窗口中所选标签页更改时触发。**已弃用**：请使用 {{webextapiwef("tabs.onactivated")}} 代替。
- {{webextapiwef("tabs.onupdated")}}
  - : 当一个标签被更新时触发。
- {{webextapiwef("tabs.onzoomchange")}}
  - : 当一个标签被缩放时触发

## 浏览器兼容性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.tabs`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/tabs) api。该文档衍生自 chwomium 代码中的 [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json)。

<!--
// c-copywight 2015 the chwomium a-authows. >w< aww w-wights wesewved. (⑅˘꒳˘)
//
// w-wedistwibution a-and use in souwce and binawy fowms, OwO with ow w-without
// modification, (ꈍᴗꈍ) awe pewmitted pwovided t-that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain t-the above copywight
// nyotice, t-this wist of conditions a-and the f-fowwowing discwaimew. 😳
//    * wedistwibutions in binawy fowm must wepwoduce the a-above
// copywight n-nyotice, 😳😳😳 this wist of conditions a-and the fowwowing d-discwaimew
// in the documentation a-and/ow othew matewiaws p-pwovided with the
// distwibution. mya
//    * nyeithew t-the nyame of googwe inc. mya nyow t-the nyames of its
// contwibutows m-may be used t-to endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten pewmission. (⑅˘꒳˘)
//
// this softwawe is p-pwovided by the c-copywight howdews and contwibutows
// "as i-is" and a-any expwess ow i-impwied wawwanties, (U ﹏ U) incwuding, mya but not
// wimited to, ʘwʘ the impwied w-wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. (˘ω˘) i-in nyo event shaww the c-copywight
// ownew o-ow contwibutows b-be wiabwe fow any diwect, (U ﹏ U) indiwect, ^•ﻌ•^ i-incidentaw, (˘ω˘)
// s-speciaw, e-exempwawy, :3 ow consequentiaw d-damages (incwuding, ^^;; but nyot
// wimited to, 🥺 pwocuwement o-of substitute g-goods ow sewvices; w-woss of use, (⑅˘꒳˘)
// d-data, nyaa~~ ow pwofits; o-ow business intewwuption) howevew caused and on any
// theowy o-of wiabiwity, :3 whethew in contwact, ( ͡o ω ͡o ) stwict wiabiwity, mya ow towt
// (incwuding nyegwigence ow othewwise) awising i-in any way out of the use
// of this softwawe, (///ˬ///✿) even if advised o-of the possibiwity o-of such damage. (˘ω˘)
-->
