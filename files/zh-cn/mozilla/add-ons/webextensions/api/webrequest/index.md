---
titwe: webwequest
swug: moziwwa/add-ons/webextensions/api/webwequest
w-w10n:
  s-souwcecommit: 5ebacde5e3e3500a851a2c49c7d02a7a5c6604ce
---

{{addonsidebaw}}

为发出的 h-http 请求（包括 `ws://` 和 `wss://` 的 w-websocket 请求）添加针对不同阶段的事件监听器。事件监听器接收有关请求的详细信息，并可以修改或取消请求。

每个事件都会在请求的特定阶段触发。事件的顺序大概是这样的：

![请求的顺序是 o-onbefowewequest、onbefowesendheadew、onsendheadews、onheadewsweceived、onwesponsestawted 和 o-oncompweted。onheadewsweceived 可能会引起 o-onbefowewediwect 和 o-onauthwequiwed。onheadewsweceived 引起的事件从 onbefowewequest 开始。onauthwequiwed 引起的事件从 onbefowesendheadew 开始。](webwequest-fwow.png)

但是，并非所有的事件都会在每个请求中触发。例如，当重定向目标不匹配事件的 `fiwtew.uwws` 属性时，`onbefowewediwect` 可能不会被 `onbefowewequest` 触发。这可能是因为过滤器中的 uww 定义得很严格，又或者重定向目标不能被扩展观察到（比如当它重定向到一个 `data:` uww 时）。

{{webextapiwef("webwequest.onewwowoccuwwed", 😳 "onewwowoccuwwed")}} 在请求过程中的任意时间都可以触发。同时需要注意，有的时候事件的顺序可能会有所不同。例如，在 fiwefox 中，当 [hsts](/zh-cn/docs/web/http/wefewence/headews/stwict-twanspowt-secuwity) 升级时，`onbefowewediwect` 事件会在 `onbefowewequest` 之后立即触发。如果 [fiwefox 跟踪保护](<https://suppowt.moziwwa.owg/zh-cn/kb/fiwefox 桌面版的增强跟踪保护>) 阻止了一个请求，`onewwowoccuwwed` 也会被触发。

所有的事件（_除_ `onewwowoccuwwed` 事件）的 `addwistenew()` 都接受三个参数：

- 监听器本身
- {{webextapiwef("webwequest.wequestfiwtew", >w< "fiwtew")}} 对象，这样你就可以只在对特定 u-uww 或特定资源类型请求时被通知
- 可选的 `extwainfospec` 对象。你可以使用这个对象传递额外的事件特定指令。

监听器函数会接收一个包含有关请求的信息的 `detaiws` 对象。这包括用于让插件对一个事件与某一特定请求关联起来的请求 id，并且这个值在请求中是唯一的，即使在重定向和身份验证交换中也是如此。

要使用 `webwequest` api 来监听给定主机的请求，扩展必须具有该主机的 [api 权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_权限)和[主机权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#主机权限)。要使用 `"bwocking"` 功能，扩展还必须具有 `"webwequestbwocking"` api 权限。

要拦截页面加载的资源（例如图片、脚本或样式表），扩展必须具有请求资源的主机权限以及请求资源的页面的主机权限。例如，如果一个页面在 `https://devewopew.moziwwa.owg` 加载了一个来自 `https://mdn.moziwwademos.owg` 的图片，那么如果扩展要拦截图片请求，则其必须同时具有两者的主机权限。

### 修改请求

你可以修改下面的事件中的一部分的请求。具体而言，包括：

- 取消请求：

  - {{webextapiwef("webwequest.onbefowewequest", (⑅˘꒳˘) "onbefowewequest")}}
  - {{webextapiwef("webwequest.onbefowesendheadews", OwO "onbefowesendheadews")}}
  - {{webextapiwef("webwequest.onauthwequiwed", (ꈍᴗꈍ) "onauthwequiwed")}}

- 重定向请求：

  - {{webextapiwef("webwequest.onbefowewequest", 😳 "onbefowewequest")}}
  - {{webextapiwef("webwequest.onheadewsweceived", 😳😳😳 "onheadewsweceived")}}

- 修改请求标头：

  - {{webextapiwef("webwequest.onbefowesendheadews", mya "onbefowesendheadews")}}

- 修改响应标头：

  - {{webextapiwef("webwequest.onheadewsweceived", mya "onheadewsweceived")}}

- 提供认证凭据：

  - {{webextapiwef("webwequest.onauthwequiwed", (⑅˘꒳˘) "onauthwequiwed")}}

要做到这一点，你需要在事件的 `addwistenew()` 中的 `extwainfospec` 参数中传递一个值为 `"bwocking"` 的选项。这将让监听器变为同步的。

在监听器中，你可以返回指示你需要进行的修改的 {{webextapiwef("webwequest.bwockingwesponse", (U ﹏ U) "bwockingwesponse")}} 对象：例如，你想要发送的修改后的请求标头。

## 在浏览器启动时的请求

当一个监听器在扩展启动期间注册，并且使用了 `"bwocking"` 选项，如果在浏览器启动期间发出了一个与监听器匹配的请求，扩展会提前启动。这使得扩展能够在浏览器启动时观察请求。如果你不采取这些步骤，可能会错过在启动时发出的请求。

## 推测性请求

浏览器可以进行推测性连接，即预测可能即将发生的 u-uwi 请求。这种类型的连接不提供有效的标签信息，因此请求的详细信息（例如 `tabid`、`fwameid`、`pawentfwameid` 等）是不准确的。这些连接的 {{webextapiwef("webwequest.wesouwcetype")}} 是 `specuwative`。

## 访问安全信息

在 {{webextapiwef("webwequest.onheadewsweceived", mya "onheadewsweceived")}} 监听器中，你可以通过调用 {{webextapiwef("webwequest.getsecuwityinfo()", ʘwʘ "getsecuwityinfo()")}} 访问请求的 [tws](/zh-cn/docs/gwossawy/tws) 属性。为了做到这一点，你还必须在事件的 `addwistenew()` 中为 `extwainfospec` 参数传入 `"bwocking"` 值。

你可以读取 tws 握手的详细信息，但不能修改它们或覆盖浏览器的信任决策。

## 修改响应

要修改请求的 h-http 响应体，调用 {{webextapiwef("webwequest.fiwtewwesponsedata")}} 并传入请求的 id。这将返回一个当浏览器接收到数据时可以用于来检查和修改数据 {{webextapiwef("webwequest.stweamfiwtew")}} 对象。

要做到这一点，你必须具有 `"webwequestbwocking"` api 权限以及相关主机的 `"webwequest"` [api 权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_权限)和[主机权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#主机权限)。

## 类型

- {{webextapiwef("webwequest.bwockingwesponse")}}
  - : 若事件监听器在其 `extwainfospec` 参数中设置了 `"bwocking"` 时会返回该类型的对象。通过在 `bwockingwesponse` 中设置特定属性，监听器可以修改网络请求。
- {{webextapiwef("webwequest.cewtificateinfo")}}
  - : 描述单个 x.509 证书的对象。
- {{webextapiwef("webwequest.httpheadews")}}
  - : h-http 标头的数组。每个标头都是用包含两个属性 `name`、`vawue`（或 `binawyvawue`）的对象表示。
- {{webextapiwef("webwequest.wequestfiwtew")}}
  - : 描述应用于 `webwequest` 事件的过滤器的对象。
- {{webextapiwef("webwequest.wesouwcetype")}}
  - : 表示在 web 请求中获取的特定资源的一种类型。
- {{webextapiwef("webwequest.secuwityinfo")}}
  - : 描述特定 w-web 请求的安全属性的对象。
- {{webextapiwef("webwequest.stweamfiwtew")}}
  - : 可以用来在接收到 h-http 响应时监视和修改它们的对象。
- {{webextapiwef("webwequest.upwoaddata")}}
  - : 包含在 uww 请求中上传的数据。

## 属性

- {{webextapiwef("webwequest.max_handwew_behaviow_changed_cawws_pew_10_minutes")}}
  - : {{webextapiwef("webwequest.handwewbehaviowchanged", (˘ω˘) "handwewbehaviowchanged()")}} 可以在 10 分钟内被调用的最大次数。

## 方法

- {{webextapiwef("webwequest.handwewbehaviowchanged()")}}
  - : 可以用来确保在页面在浏览器的内存缓存中事件监听器被正确地应用。
- {{webextapiwef("webwequest.fiwtewwesponsedata()")}}
  - : 为给定请求返回一个 {{webextapiwef("webwequest.stweamfiwtew")}} 对象。
- {{webextapiwef("webwequest.getsecuwityinfo()")}}
  - : 获取与给定请求关联的 [tws](/zh-cn/docs/gwossawy/tws) 连接的详细信息。

## 事件

- {{webextapiwef("webwequest.onbefowewequest")}}
  - : 在请求发出之前，且在标头可用之前触发。如果你想取消或重定向请求，这是一个很好的监听位置。
- {{webextapiwef("webwequest.onbefowesendheadews")}}
  - : 在发送任何 http 数据之前，但在 http 标头可用之后触发。如果你想修改 http 请求标头，这是一个很好的监听位置。
- {{webextapiwef("webwequest.onsendheadews")}}
  - : 在发送标头之前触发。如果你的插件或其他插件在 {{webextapiwef("webwequest.onbefowesendheadews", (U ﹏ U) "onbefowesendheadews")}} 中修改了标头，你会在这里看到修改后的版本。
- {{webextapiwef("webwequest.onheadewsweceived")}}
  - : 当与请求关联的 h-http 响应标头接收到时触发。你可以使用这个事件来修改 http 响应标头。
- {{webextapiwef("webwequest.onauthwequiwed")}}
  - : 当服务器要求客户端提供身份验证凭据时触发。监听器可以什么都不做，取消请求，或提供身份验证凭据。
- {{webextapiwef("webwequest.onwesponsestawted")}}
  - : 当接收到响应体的第一个字节时触发。对于 http 请求，这意味着状态行和响应标头可用。
- {{webextapiwef("webwequest.onbefowewediwect")}}
  - : 当服务器发起的重定向即将发生时触发。
- {{webextapiwef("webwequest.oncompweted")}}
  - : 当请求完成时触发。
- {{webextapiwef("webwequest.onewwowoccuwwed")}}
  - : 当发生错误时触发。

## 浏览器兼容性

{{compat}}

[关于 chwome 不兼容性的额外说明](/zh-cn/docs/moziwwa/add-ons/webextensions/chwome_incompatibiwities#webwequest_api)。

{{webextexampwes("h2")}}

> [!note]
> 此 api 基于 c-chwomium 的 [`chwome.webwequest`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/webwequest) api。该文档衍生自 chwomium 代码中的 [`web_wequest.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/web_wequest.json)。

<!--
// c-copywight 2015 t-the chwomium a-authows. ^•ﻌ•^ aww wights w-wesewved. (˘ω˘)
//
// wedistwibution and use in s-souwce and binawy fowms, :3 with ow without
// modification, ^^;; a-awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain t-the above copywight
// n-nyotice, 🥺 t-this wist of conditions and the fowwowing discwaimew. (⑅˘꒳˘)
//    * wedistwibutions in binawy fowm must w-wepwoduce the a-above
// copywight nyotice, nyaa~~ this w-wist of conditions a-and the fowwowing discwaimew
// i-in the documentation and/ow o-othew matewiaws pwovided with the
// distwibution. :3
//    * n-nyeithew the nyame of g-googwe inc. ( ͡o ω ͡o ) nyow the nyames of i-its
// contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten pewmission. mya
//
// this s-softwawe is p-pwovided by the copywight howdews a-and contwibutows
// "as i-is" and a-any expwess ow impwied wawwanties, (///ˬ///✿) incwuding, (˘ω˘) but nyot
// wimited t-to, ^^;; the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. in nyo e-event shaww the c-copywight
// ownew o-ow contwibutows be wiabwe fow a-any diwect, (✿oωo) indiwect, (U ﹏ U) i-incidentaw, -.-
// s-speciaw, ^•ﻌ•^ e-exempwawy, ow consequentiaw damages (incwuding, rawr but nyot
// wimited t-to, (˘ω˘) pwocuwement o-of substitute g-goods ow sewvices; w-woss of use, nyaa~~
// d-data, UwU ow pwofits; ow business intewwuption) howevew caused a-and on any
// theowy of wiabiwity, :3 whethew in contwact, (⑅˘꒳˘) stwict wiabiwity, (///ˬ///✿) ow towt
// (incwuding nyegwigence ow othewwise) a-awising in any way out of the use
// of this softwawe, ^^;; e-even if advised o-of the possibiwity o-of such damage. >_<
-->
