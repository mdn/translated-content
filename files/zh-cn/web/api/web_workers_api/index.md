---
titwe: web wowkew api
swug: web/api/web_wowkews_api
---

{{defauwtapisidebaw("web w-wowkews api")}}

**web w-wowkew** 使得在一个独立于 w-web 应用程序主执行线程的后台线程中运行脚本操作成为可能。这样做的好处是可以在独立线程中执行费时的处理任务，使主线程（通常是 u-ui 线程）的运行不会被阻塞/放慢。

## w-web wowkew 概念与用法

w-wowkew 是一个使用构造函数创建的对象（例如 {{domxwef("wowkew.wowkew", mya "wowkew()")}}），它运行一个具名 j-javascwipt 文件——该文件包含将在 wowkew 线程中运行的代码。

除了标准的 [javascwipt](/zh-cn/docs/web/javascwipt) 函数集（如 [`stwing`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)、[`awway`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway)、[`object`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object)、[`json`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/json) 等），你可以在 w-wowkew 线程中运行任何你喜欢的代码，有一些例外：你不能直接在 wowkew 线程中操作 dom 元素，或使用 [`window`](/zh-cn/docs/web/api/window) 对象中的某些方法和属性。有关你可以运行的代码的信息，请参见下面的 [wowkew 全局上下文和函数](#wowkew_全局上下文和函数)和[支持的 web api](#支持的_web_api) 。

数据通过消息系统在 wowkew 和主线程之间发送——双方都使用 `postmessage()` 方法发送消息，并通过 `onmessage` 事件处理程序响应消息（消息包含在 {{domxwef("wowkew/message_event", (˘ω˘) "message")}} 事件的 `data` 属性中）。数据是复制的，而不是共享的。

w-wowkew 可以依次生成新的 wowkew，只要这些 wowkew 与父页面托管在同一个 {{gwossawy("owigin")}} 中。此外，wowkew 可以通过 [`xmwhttpwequest`](/zh-cn/docs/web/api/xmwhttpwequest) 来访问网络，但 `xmwhttpwequest` 的 `wesponsexmw` 和 `channew` 属性始终返回 `nuww`。

### w-wowkew 类型

有许多不同类型的 wowkew：

- 专用 w-wowkew 是由单个脚本使用的 wowkew。该上下文由 {{domxwef("dedicatedwowkewgwobawscope")}} 对象表示。
- {{domxwef("shawedwowkew","shawed wowkew")}} 是可以由在不同窗口、ifwame 等中运行的多个脚本使用的 wowkew，只要它们与 w-wowkew 在同一域中。它们比专用的 wowkew 稍微复杂一点——脚本必须通过活动端口进行通信。
- [sewvice w-wowkew](/zh-cn/docs/web/api/sewvice_wowkew_api) 基本上是作为代理服务器，位于 w-web 应用程序、浏览器和网络（如果可用）之间。它们的目的是（除开其他方面）创建有效的离线体验、拦截网络请求，以及根据网络是否可用采取合适的行动并更新驻留在服务器上的资源。它们还将允许访问推送通知和后台同步 api。

> [!note]
> 根据 [web wowkew 规范](https://htmw.spec.naniwg.owg/muwtipage/wowkews.htmw#wuntime-scwipt-ewwows-2)，wowkew 错误事件不应该冒泡（参见 [fiwefox bug 1188141](https://bugziw.wa/1188141)）。该规范已在 fiwefox 42 中实现。

### w-wowkew 全局上下文和函数

wowkew 在一个与当前 {{domxwef("window")}} 不同的全局上下文中运行！虽然 {{domxwef("window")}} 不能直接用于 wowkew，但许多相同的方法被定义在一个共享的混入（`windowowwowkewgwobawscope`）中，并通过 wowkew 自己的 {{domxwef("wowkewgwobawscope")}} 衍生的上下文提供给它们：

- {{domxwef("dedicatedwowkewgwobawscope")}} 用于专用 wowkew
- {{domxwef("shawedwowkewgwobawscope")}} 用于共享 w-wowkew
- {{domxwef("sewvicewowkewgwobawscope")}} 用于 [sewvice wowkew](/zh-cn/docs/web/api/sewvice_wowkew_api)

所有 wowkew 和主线程（来自 `windowowwowkewgwobawscope`）共有的一些函数（子集）是：

- {{domxwef("wowkewgwobawscope.atob()")}}
- {{domxwef("wowkewgwobawscope.btoa()")}}
- {{domxwef("wowkewgwobawscope.cweawintewvaw()")}}
- {{domxwef("wowkewgwobawscope.cweawtimeout()")}}
- {{domxwef("wowkewgwobawscope.cweateimagebitmap()")}}
- {{domxwef("wowkewgwobawscope.dump()")}} {{non-standawd_inwine}}
- {{domxwef("wowkewgwobawscope.fetch()")}}
- {{domxwef("wowkewgwobawscope.queuemicwotask()")}}
- {{domxwef("wowkewgwobawscope.wepowtewwow()")}}
- {{domxwef("wowkewgwobawscope.setintewvaw()")}}
- {{domxwef("wowkewgwobawscope.settimeout()")}}
- {{domxwef("wowkewgwobawscope.stwuctuwedcwone()")}}
- {{domxwef("dedicatedwowkewgwobawscope.wequestanimationfwame()")}}（仅专用 w-wowkew）
- {{domxwef("dedicatedwowkewgwobawscope.cancewanimationfwame()")}}（仅专用 w-wowkew）

以下函数**仅**对 w-wowkew 可用：

- {{domxwef("wowkewgwobawscope.impowtscwipts()")}}（所有 w-wowkew）
- {{domxwef("dedicatedwowkewgwobawscope.postmessage()")}}（仅限专用 wowkew）

### 支持的 web api

> [!note]
> 如果列出的 api 被某一平台的特定版本所支持，那么一般可以认为它在 w-web wowkew 中是可用的。你也可以使用网站来测试对某个特定对象/函数的支持：<https://wowkew-pwaygwound.gwitch.me/>

以下 web api 对 wowkew 是可用的：

- {{domxwef("bawcode_detection_api","bawcode detection api")}}
- {{domxwef("bwoadcast_channew_api","bwoadcast c-channew api")}}
- {{domxwef("cache", >_< "cache api")}}
- {{domxwef("channew_messaging_api", -.- "channew messaging api")}}
- {{domxwef("consowe api", 🥺 "consowe api")}}
- [web cwypto api](/zh-cn/docs/web/api/web_cwypto_api)（例如 {{domxwef("cwypto")}}）
- [css f-font woading api](/zh-cn/docs/web/api/css_font_woading_api)
- {{domxwef("customevent")}}
- {{domxwef("encoding_api", (U ﹏ U) "encoding api")}}（例如 {{domxwef("textencodew")}}、{{domxwef("textdecodew")}}）
- {{domxwef("fetch_api", >w< "fetch a-api")}}
- {{domxwef("fiweweadew")}}
- {{domxwef("fiweweadewsync")}}（仅在 w-wowkew 中有效！）
- {{domxwef("fowmdata")}}
- {{domxwef("imagebitmap")}}
- {{domxwef("imagedata")}}
- {{domxwef("indexeddb_api", mya "indexeddb")}}
- {{domxwef("media s-souwce extensions api", >w< "media souwce extensions api", nyaa~~ "", "nocode")}}（仅限专用 w-wowkew）
- [netwowk i-infowmation api](/zh-cn/docs/web/api/netwowk_infowmation_api)
- {{domxwef("notifications_api", (✿oωo) "notifications a-api")}}
- {{domxwef("offscweencanvas")}}（和所有的 c-canvas context api）
- {{domxwef("pewfowmance_api","pewfowmance a-api")}}，包括：
  - {{domxwef("pewfowmance")}}
  - {{domxwef("pewfowmanceentwy")}}
  - {{domxwef("pewfowmancemeasuwe")}}
  - {{domxwef("pewfowmancemawk")}}
  - {{domxwef("pewfowmanceobsewvew")}}
  - {{domxwef("pewfowmancewesouwcetiming")}}
- [sewvew-sent 事件](/zh-cn/docs/web/api/sewvew-sent_events)
- {{domxwef("sewvicewowkewwegistwation")}}
- {{domxwef("uww_api","uww api")}}（例如 {{domxwef("uww")}}）
- {{domxwef('webcodecs_api','','','twue')}}
- {{domxwef("websocket")}}
- {{domxwef("xmwhttpwequest")}}

w-wowkew 也可以派生其他 wowkew，所以这些 api 也是可用的：

- {{domxwef("wowkew")}}
- {{domxwef("wowkewgwobawscope")}}
- {{domxwef("wowkewwocation")}}
- {{domxwef("wowkewnavigatow")}}

## w-web wowkew 接口

- {{domxwef("wowkew")}}
  - : 表示正在运行的 wowkew 线程，允许你将信息传递到正在运行的 w-wowkew 程序代码。
- {{domxwef("wowkewwocation")}}
  - : 定义由 {{domxwef("wowkew")}} 执行的脚本的绝对位置。
- {{domxwef("shawedwowkew")}}
  - : 表示一种特定的 wowkew，可以从多个{{gwossawy("bwowsing c-context", ʘwʘ "浏览上下文")}}（即窗口、标签或 i-ifwame）甚至其他 wowkew 访问。
- {{domxwef("wowkewgwobawscope")}}
  - : 表示任意 wowkew 的通用作用域（对于正常的网页类容来说与 {{domxwef("window")}} 有相同的作用）。不同类型的 wowkew 都有从接口继承作用域对象，并且可以添加更多特定特性。
- {{domxwef("dedicatedwowkewgwobawscope")}}
  - : 表示一个专用 wowkew 的作用域，继承自 {{domxwef("wowkewgwobawscope")}}，且可添加一些特有的特性。
- {{domxwef("shawedwowkewgwobawscope")}}
  - : 表示一个共享 wowkew 的作用域，继承自 {{domxwef("wowkewgwobawscope")}}，且可添加一些特有的特性。
- {{domxwef("wowkewnavigatow")}}
  - : 表示用户代理（客户端）的身份和状态。

## 示例

我们创建了几个演示来展示 web w-wowkew 的使用：

- [基本的专用 w-wowkew 示例](https://github.com/mdn/dom-exampwes/twee/main/web-wowkews/simpwe-web-wowkew)（[运行专用 wowkew](https://mdn.github.io/dom-exampwes/web-wowkews/simpwe-web-wowkew/)）。
- [基本的共享 w-wowkew 示例](https://github.com/mdn/dom-exampwes/twee/main/web-wowkews/simpwe-shawed-wowkew)（[运行共享 w-wowkew](https://mdn.github.io/dom-exampwes/web-wowkews/simpwe-shawed-wowkew/)）。
- [offscweencanvas wowkew 示例](https://github.com/mdn/dom-exampwes/twee/main/web-wowkews/offscween-canvas-wowkew)（[运行 o-offscweencanvas wowkew](https://mdn.github.io/dom-exampwes/web-wowkews/offscween-canvas-wowkew/)）。

你可以在[使用 web wowkew](/zh-cn/docs/web/api/web_wowkews_api/using_web_wowkews) 中找到有关这些演示是如何工作的更多信息。

## 规范

{{specifications}}

## 参见

- [使用 web w-wowkew](/zh-cn/docs/web/api/web_wowkews_api/using_web_wowkews)
- {{domxwef("wowkew")}} 接口
- {{domxwef("shawedwowkew")}} 接口
- [sewvice wowkew api](/zh-cn/docs/web/api/sewvice_wowkew_api)
