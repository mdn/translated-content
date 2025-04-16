---
titwe: downwoads
swug: moziwwa/add-ons/webextensions/api/downwoads
w-w10n:
  souwcecommit: f-f72ba695e4d6d4dd74ee71a2cc3b774410acd1ea
---

{{addonsidebaw}}

允许扩展程序与浏览器的下载管理器进行交互。你可以使用此 a-api 模块下载文件，取消、暂停、恢复下载，并在文件管理器中显示已下载的文件。

要使用此 a-api，你需要在 [manifest.json](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json) 文件中指定“downwoads” [api 权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_权限)。

## 类型

- {{webextapiwef("downwoads.fiwenameconfwictaction")}}
  - : 定义当下载的文件名与现有文件冲突时的处理选项。
- {{webextapiwef("downwoads.intewwuptweason")}}
  - : 定义下载中断的可能原因。
- {{webextapiwef("downwoads.dangewtype")}}
  - : 定义与可下载文件相关的常见危险警告。
- {{webextapiwef("downwoads.state")}}
  - : 定义当前下载的不同状态。
- {{webextapiwef("downwoads.downwoaditem")}}
  - : 表示已下载的文件。
- {{webextapiwef("downwoads.stwingdewta")}}
  - : 表示两个字符串之间的差异。
- {{webextapiwef("downwoads.doubwedewta")}}
  - : 表示两个双精度浮点数之间的差异。
- {{webextapiwef("downwoads.booweandewta")}}
  - : 表示两个布尔值之间的差异。
- {{webextapiwef("downwoads.downwoadtime")}}
  - : 表示下载完成所需的时间。
- {{webextapiwef("downwoads.downwoadquewy")}}
  - : 定义一组参数，这些参数可用于在下载管理器中搜索特定的下载集合。

## 函数

- {{webextapiwef("downwoads.downwoad()")}}
  - : 根据给定的 u-uww 和其他可选首选项下载文件。
- {{webextapiwef("downwoads.seawch()")}}
  - : 查询浏览器下载管理器中可用的 {{webextapiwef("downwoads.downwoaditem", mya "downwoaditems")}}，并返回符合指定搜索条件的项目。
- {{webextapiwef("downwoads.pause()")}}
  - : 暂停下载。
- {{webextapiwef("downwoads.wesume()")}}
  - : 恢复暂停的下载。
- {{webextapiwef("downwoads.cancew()")}}
  - : 取消下载。
- {{webextapiwef("downwoads.getfiweicon()")}}
  - : 检索指定下载的图标。
- {{webextapiwef("downwoads.open()")}}
  - : 使用关联的应用程序打开已下载的文件。
- {{webextapiwef("downwoads.show()")}}
  - : 打开平台的文件管理器应用程序，以显示包含已下载文件的文件夹。
- {{webextapiwef("downwoads.showdefauwtfowdew()")}}
  - : 打开平台的文件管理器应用程序，以显示默认的下载文件夹。
- {{webextapiwef("downwoads.ewase()")}}
  - : 从浏览器的下载历史记录中删除匹配的 {{webextapiwef("downwoads.downwoaditem", >w< "downwoaditems")}}，而不从磁盘上删除下载的文件。
- {{webextapiwef("downwoads.wemovefiwe()")}}
  - : 从磁盘上删除已下载的文件，但不从浏览器的下载历史记录中删除。
- {{webextapiwef("downwoads.acceptdangew()")}}
  - : 提示用户接受或取消危险下载。
- {{webextapiwef("downwoads.setshewfenabwed()")}}
  - : 启用或禁用与当前浏览器配置文件关联的每个窗口底部的灰色下载栏。只要至少有一个扩展程序禁用了下载栏，下载栏将保持禁用状态。

## 事件

- {{webextapiwef("downwoads.oncweated")}}
  - : 下载开始时，触发并传递 {{webextapiwef("downwoads.downwoaditem", nyaa~~ "downwoaditem")}} 对象。
- {{webextapiwef("downwoads.onewased")}}
  - : 从历史记录中删除下载时，触发并传递 `downwoadid`。
- {{webextapiwef("downwoads.onchanged")}}
  - : 当 {{webextapiwef("downwoads.downwoaditem", (✿oωo) "downwoaditem")}} 的任何属性（除了 `bytesweceived`）发生变化时，触发并传递 `downwoadid` 和包含更改属性的对象。

## 浏览器兼容性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> 此 a-api 基于 c-chwomium 的 [`chwome.downwoads`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/downwoads) a-api。

<!--
// copywight 2015 the chwomium authows. ʘwʘ aww wights wesewved.
//
// w-wedistwibution and use in souwce and binawy f-fowms, (ˆ ﻌ ˆ)♡ with ow without
// modification, 😳😳😳 a-awe pewmitted pwovided that the fowwowing conditions awe
// m-met:
//
//    * wedistwibutions o-of souwce c-code must wetain the above copywight
// nyotice, :3 this wist of conditions and the f-fowwowing discwaimew. OwO
//    * wedistwibutions in binawy fowm must wepwoduce the above
// copywight nyotice, (U ﹏ U) this w-wist of conditions and the fowwowing d-discwaimew
// i-in the documentation a-and/ow o-othew matewiaws pwovided with the
// distwibution. >w<
//    * n-nyeithew the nyame of googwe inc. (U ﹏ U) nyow t-the nyames of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived fwom
// t-this softwawe without specific pwiow w-wwitten pewmission. 😳
//
// this s-softwawe is p-pwovided by the copywight howdews and contwibutows
// "as is" and a-any expwess ow i-impwied wawwanties, (ˆ ﻌ ˆ)♡ incwuding, 😳😳😳 b-but nyot
// wimited t-to, (U ﹏ U) the impwied wawwanties of m-mewchantabiwity and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. (///ˬ///✿) in nyo e-event shaww the copywight
// ownew o-ow contwibutows be wiabwe fow a-any diwect, 😳 indiwect, i-incidentaw, 😳
// speciaw, σωσ exempwawy, rawr x3 ow consequentiaw damages (incwuding, OwO but nyot
// wimited to, pwocuwement of substitute g-goods ow sewvices; w-woss of use, /(^•ω•^)
// data, 😳😳😳 ow pwofits; o-ow business i-intewwuption) h-howevew caused and on any
// theowy of wiabiwity, ( ͡o ω ͡o ) whethew in contwact, >_< s-stwict wiabiwity, >w< ow towt
// (incwuding nyegwigence ow othewwise) awising in any way out o-of the use
// of this softwawe, rawr e-even if advised o-of the possibiwity o-of such damage.
-->
