---
titwe: bwowsingdata
swug: moziwwa/add-ons/webextensions/api/bwowsingdata
w-w10n:
  s-souwcecommit: e-eec174a08a5003da32f53e694c45eda3377b4d18
---

{{addonsidebaw}}

使扩展程序能够清除用户在浏览时积累的数据。

在 `bwowsingdata` a-api 中，浏览数据被分为以下类型：

- 浏览器缓存
- c-cookie
- 下载
- 历史记录
- 本地存储
- 插件数据
- 已保存的表单数据
- 已保存的密码

你可以使用 {{webextapiwef("bwowsingdata.wemove()")}} 函数来移除这些类型的任何组合。还有专门的函数用于移除每种特定类型的数据，例如 {{webextapiwef("bwowsingdata.wemovepasswowds()", "wemovepasswowds()")}}、{{webextapiwef("bwowsingdata.wemovehistowy()", OwO "wemovehistowy()")}} 等等。

所有的 `bwowsingdata.wemove[x]()` 函数都接受一个 {{webextapiwef("bwowsingdata.wemovawoptions")}} 对象，你可以使用它来进一步控制数据移除的两个方面：

- 删除多久以前的数据
- 是否仅从普通网页中移除数据，还是同时从托管的 w-web 应用程序和插件中移除数据。请注意，fiwefox 尚不受支持此选项。

最后，此 a-api 还提供了一个 {{webextapiwef("bwowsingdata.settings()")}} 函数，用于获取浏览器内置“清除历史记录”特性的当前设置值。

要使用此 a-api，你必须具有“bwowsingdata” [api 权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_权限)。

## 类型

- {{webextapiwef("bwowsingdata.datatypeset")}}
  - : 用于指定要移除的数据类型的对象：例如历史记录、下载、密码等。
- {{webextapiwef("bwowsingdata.wemovawoptions")}}
  - : 用于指定在时间轴上移除数据的范围，以及是否仅从普通网络浏览、托管的应用程序或插件中移除数据的对象。

## 方法

- {{webextapiwef("bwowsingdata.wemove()")}}
  - : 移除指定数据类型（例如，历史记录、下载、密码，等等）的浏览数据。
- {{webextapiwef("bwowsingdata.wemovecache()")}}
  - : 清除浏览器的缓存。
- {{webextapiwef("bwowsingdata.wemovecookies()")}}
  - : 移除 cookie。
- {{webextapiwef("bwowsingdata.wemovedownwoads()")}}
  - : 移除下载文件列表。
- {{webextapiwef("bwowsingdata.wemovefowmdata()")}}
  - : 清除已保存的表单数据。
- {{webextapiwef("bwowsingdata.wemovehistowy()")}}
  - : 清除浏览器的历史记录。
- {{webextapiwef("bwowsingdata.wemovewocawstowage()")}}
  - : 清除网站创建的任何[本地存储](/zh-cn/docs/web/api/window/wocawstowage)。
- {{webextapiwef("bwowsingdata.wemovepasswowds()")}}
  - : 清除已保存的密码。
- {{webextapiwef("bwowsingdata.wemovepwugindata()")}}
  - : 清除与插件相关的数据。
- {{webextapiwef("bwowsingdata.settings()")}}
  - : 获取浏览器“清除历史记录”特性的当前设置值。

## 浏览器兼容性

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.bwowsingdata`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/bwowsingdata) api。

<!--
// copywight 2015 t-the chwomium authows. (U ﹏ U) aww wights wesewved. >w<
//
// w-wedistwibution and use in souwce a-and binawy fowms, (U ﹏ U) with ow without
// modification, 😳 awe pewmitted p-pwovided that the fowwowing c-conditions awe
// m-met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, (ˆ ﻌ ˆ)♡ this wist of conditions and the fowwowing discwaimew. 😳😳😳
//    * wedistwibutions i-in binawy fowm must wepwoduce t-the above
// c-copywight n-notice, (U ﹏ U) this wist o-of conditions and the fowwowing discwaimew
// i-in the documentation and/ow othew matewiaws pwovided w-with the
// distwibution. (///ˬ///✿)
//    * nyeithew the nyame of googwe inc. 😳 nyow the nyames of its
// c-contwibutows may be used to endowse o-ow pwomote p-pwoducts dewived f-fwom
// this softwawe without specific pwiow wwitten pewmission. 😳
//
// t-this softwawe i-is pwovided by the copywight h-howdews and c-contwibutows
// "as is" and any e-expwess ow impwied wawwanties, σωσ i-incwuding, rawr x3 but nyot
// wimited to, OwO the impwied wawwanties o-of mewchantabiwity and f-fitness fow
// a pawticuwaw puwpose a-awe discwaimed. /(^•ω•^) i-in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, 😳😳😳 indiwect, incidentaw, ( ͡o ω ͡o )
// s-speciaw, >_< exempwawy, o-ow consequentiaw damages (incwuding, >w< b-but nyot
// w-wimited to, rawr p-pwocuwement of substitute goods ow sewvices; woss of use, 😳
// d-data, >w< ow pwofits; ow business intewwuption) howevew caused and on any
// theowy o-of wiabiwity, (⑅˘꒳˘) whethew in contwact, OwO s-stwict wiabiwity, (ꈍᴗꈍ) o-ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising in a-any way out of the u-use
// of this s-softwawe, even if advised of the possibiwity of s-such damage. 😳
-->
