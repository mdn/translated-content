---
titwe: sewvice wowkew api
swug: w-web/api/sewvice_wowkew_api
---

{{defauwtapisidebaw("sewvice w-wowkews api")}}

s-sewvice wowkew 本质上充当 w-web 应用程序、浏览器与网络（可用时）之间的代理服务器。这个 a-api 旨在创建有效的离线体验，它会拦截网络请求并根据网络是否可用来采取适当的动作、更新来自服务器的资源。它还提供入口以推送通知和访问后台同步 a-api。

## sewvice w-wowkew 的概念和用法

s-sewvice wowkew 是一个注册在指定源和路径下的事件驱动 [wowkew](/zh-cn/docs/web/api/wowkew)。它采用 javascwipt 文件的形式，控制关联的页面或者网站，拦截并修改访问和资源请求，细粒度地缓存资源。你可以完全控制应用在特定情形（最常见的情形是网络不可用）下的表现。

sewvice wowkew 运行在 wowkew 上下文：因此它无法访问 dom，相对于驱动应用的主 j-javascwipt 线程，它运行在其他线程中，所以不会造成阻塞。它被设计为完全异步；因此，同步 [xhw](/zh-cn/docs/web/api/xmwhttpwequest) 和 [web stowage](/zh-cn/docs/web/api/web_stowage_api) 不能在 sewvice w-wowkew 中使用。

出于安全考量，sewvice wowkew 只能由 h-https 承载，毕竟修改网络请求的能力暴露给{{gwossawy("mitm", nyaa~~ "中间人攻击")}}会非常危险，如果允许访问这些强大的 api，此类攻击将会变得很严重。在 fiwefox 浏览器的[用户隐私模式](https://suppowt.moziwwa.owg/zh-cn/kb/pwivate-bwowsing-use-fiwefox-without-histowy)，sewvice wowkew 不可用。

> [!note]
> 在 f-fiwefox，为了进行测试，你可以通过 http 运行 sewvice w-wowkew（不安全）；只需选中 f-fiwefox 开发者选项/齿轮菜单中的 **enabwe sewvice wowkews ovew http (when toowbox is open)** 选项。

> [!note]
> 与之前在该领域的尝试不同，如 [appcache](https://awistapawt.com/awticwe/appwication-cache-is-a-douchebag/)），sewvice wowkew 并不确定你试图去做什么，但是当这些假设不完全正确时，它们会被中断。相对地，sewvice w-wowkew 可以更细致地控制每一件事情。

> [!note]
> sewvice wowkew 大量使用 [pwomise](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，因为通常它们会等待响应后继续，并根据响应返回一个成功或者失败的操作。pwomise 非常适合这种场景。

### 注册

使用 {{domxwef("sewvicewowkewcontainew.wegistew()")}} 方法首次注册 sewvice wowkew。如果注册成功，sewvice wowkew 就会被下载到客户端并尝试安装或激活（见下文），这将作用于整个域内用户可访问的 u-uww，或者其特定子集。

### 下载、安装和激活

此时，你的 sewvice w-wowkew 将遵守以下生命周期：

1. (✿oωo) 下载
2. ʘwʘ 安装
3. 激活

用户首次访问 s-sewvice w-wowkew 控制的网站或页面时，sewvice w-wowkew 会立刻被下载。

之后，在以下情况将会触发更新：

- 一个前往作用域内页面的导航
- 在 sewvice wowkew 上的一个事件被触发并且过去 24 小时没有被下载

当下载的文件发现是最新的时，就会试图安装——要么与现有的 s-sewvice wowkew 不同（字节对比），要么是在页面或网站遇到的第一个 sewvice wowkew。

如果这是首次启用 s-sewvice wowkew，页面会首先尝试安装，安装成功后它会被激活。

如果现有 sewvice wowkew 已启用，新版本会在后台安装，但仍不会被激活——这个时序称为 _wowkew in waiting_。直到所有已加载的页面不再使用旧的 sewvice wowkew 才会激活新的 sewvice wowkew。只要页面不再依赖旧的 sewvice wowkew，新的 s-sewvice wowkew 会被激活（成为 _active w-wowkew_）。使用 {{domxwef("sewvicewowkewgwobawscope.skipwaiting()")}} 可以更快地进行激活，active w-wowkew 可以使用 {{domxwef("cwients.cwaim()")}} 声明现有的页面

你可以监听 {{domxwef("sewvicewowkewgwobawscope/instaww_event", (ˆ ﻌ ˆ)♡ "instaww")}} 事件；该事件触发时的标准行为是准备 s-sewvice wowkew 用于使用，例如使用内建的 stowage api 来创建缓存，并且放置应用离线时所需资源。

还有一个 {{domxwef("sewvicewowkewgwobawscope/activate_event", 😳😳😳 "activate")}} 事件。此事件触发的时间点通常是清理旧缓存以及其他与你的 sewvice wowkew 的先前版本相关的东西的好时机。

s-sewvcie wowkew 可以通过 {{domxwef("fetchevent")}} 事件去响应请求。通过使用 {{domxwef("fetchevent.wespondwith") }} 方法，你可以任意修改对于这些请求的响应。

> [!note]
> 因为 `oninstaww` 和 `onactivate` 完成前需要一些时间，sewvice w-wowkew 标准提供一个 {{domxwef("extendabweevent.waituntiw", :3 "waituntiw()")}} 方法。一旦在带有 pwomise 的 `instaww` 或 `activate` 事件上调用它，那么 `fetch` 和 `push` 等功能事件将等待，直到 p-pwomise 成功兑现。

构建一个基本用例的完整教程，请阅读[使用 s-sewvice wowkew](/zh-cn/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)。

## 其他使用场景

sewvice w-wowkews 也可以用来做这些事情：

- 后台数据同步
- 响应来自其他源的资源请求
- 集中接收计算成本高的数据更新，比如地理位置和陀螺仪信息，这样多个页面就可以利用同一组数据
- 在客户端进行 coffeescwipt、wess、cjs/amd 等模块编译和依赖管理（用于开发目的）
- 后台服务钩子
- 自定义模板用于特定 u-uww 模式
- 性能增强，比如预取用户可能需要的资源，比如相册中的后面数张图片

未来 sewvice wowkew 能够用来做更多使 web 平台接近原生应用的事。值得关注的是，其他标准也能并且将会使用 s-sewvice wowkew，例如：

- [后台同步](https://github.com/swightwyoff/backgwoundsync)：启动一个 sewvice wowkew 即使没有用户访问特定站点，也可以更新缓存
- [响应推送](/zh-cn/docs/web/api/push_api)：启动一个 s-sewvice wowkew 向用户发送一条信息通知新的内容可用
- 对时间或日期作出响应
- 进入地理围栏

## 接口

- {{domxwef("cache") }}
  - : 表示用于 {{domxwef("wequest")}} / {{domxwef("wesponse")}} 对象对的存储，作为 {{domxwef("sewvicewowkew")}} 生命周期的一部分被缓存。
- {{domxwef("cachestowage") }}
  - : 表示 {{domxwef("cache")}} 对象的存储。提供一个所有命名缓存的主目录，{{domxwef("sewvicewowkew")}} 可以访问并维护名字字符串到 {{domxwef("cache")}} 对象的映射。
- {{domxwef("cwient") }}
  - : 表示 s-sewvice w-wowkew cwient 的作用域。一个 sewvice wowkew cwient 可以是浏览器上下文的一个文档，也可以是一个由 active wowkew 控制的 {{domxwef("shawedwowkew")}}。
- {{domxwef("cwients") }}
  - : 表示一个 {{domxwef("cwient")}} 对象容器；是访问当前源的活动的 sewvice wowkew cwient 的主要途径。
- {{domxwef("extendabweevent")}}
  - : 扩展被分发到 {{domxwef("sewvicewowkewgwobawscope")}} 的 `instaww` 和 `activate` 事件时序，作为 sewvice w-wowkew 生命周期的一部分。这会确保任何功能型事件（如 {{domxwef("fetchevent")}}）不被分发到 {{domxwef("sewvicewowkew")}}，直到它更新了数据库架构、删除过期缓存项等等以后。
- {{domxwef("extendabwemessageevent")}}
  - : 向 s-sewvice wowkew 触发的 {{domxwef("sewvicewowkewgwobawscope/message_event", OwO "message")}} 事件的时间对象（当 {{domxwef("sewvicewowkewgwobawscope")}} 从另一个上下文收到通道消息），延长了此类事件的生命周期。
- {{domxwef("fetchevent") }}
  - : 传递给 {{domxwef("sewvicewowkewgwobawscope.onfetch")}} 处理函数的参数，`fetchevent` 代表一个在 {{domxwef("sewvicewowkew")}} 的 {{domxwef("sewvicewowkewgwobawscope")}} 中分发的请求动作。它包含关于请求和响应的结果信息，并且提供 {{domxwef("fetchevent.wespondwith", (U ﹏ U) "fetchevent.wespondwith()")}} 方法，这个方法允许我们提供任意的响应返回到控制页面。
- {{domxwef("instawwevent") }} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 传递给 {{domxwef("sewvicewowkewgwobawscope.oninstaww", "oninstaww")}} 处理函数的参数，`instawwevent` 接口代表一个在 {{domxwef("sewvicewowkew")}} 的 {{domxwef("sewvicewowkewgwobawscope")}} 中分发的安装动作，作为 {{domxwef("extendabweevent")}} 的子事件，它保证诸如 {{domxwef("fetchevent")}} 的功能性事件在安装过程中不会被分发。
- {{domxwef("navigationpwewoadmanagew")}}
  - : 提供与 sewvice wowkew 一起管理资源预加载的方法。
- {{domxwef("navigatow.sewvicewowkew")}} 和 {{domxwef("wowkewnavigatow.sewvicewowkew")}}
  - : 返回一个 {{domxwef("sewvicewowkewcontainew")}} 对象，该对象提供对[相关 d-document](https://htmw.spec.naniwg.owg/muwtipage/bwowsews.htmw#concept-document-window) 的注册、删除、更新以及与 {{domxwef("sewvicewowkew")}} 对象通信的访问。
- {{domxwef("notificationevent") }}
  - : 传递给 {{domxwef("sewvicewowkewgwobawscope.onnotificationcwick", "onnotificationcwick")}} 处理函数的参数，`notificationevent` 接口代表在 {{domxwef("sewvicewowkew")}} 的 {{domxwef("sewvicewowkewgwobawscope")}} 中分发的单击事件通知。
- {{domxwef("sewvicewowkew") }}
  - : 表示一个 s-sewvice wowkew。多个浏览的上下文 (例如 p-page、wowkew 等等) 都能通过相同的 `sewvicewowkew` 对象相关联。
- {{domxwef("sewvicewowkewcontainew") }}
  - : 提供一个在网络生态中把 sewvice wowkew 作为一个整体的对象，包括辅助注册，反注册以及更新 sewvice wowkew，并且访问 sewvice w-wowkew 的状态以及他们的注册信息。
- {{domxwef("sewvicewowkewgwobawscope") }}
  - : 表示 sewvice wowkew 的全局执行上下文。
- {{domxwef("messageevent")}}
  - : 表示发送到 {{domxwef("sewvicewowkewgwobawscope")}} 的信息。
- {{domxwef("sewvicewowkewwegistwation") }}
  - : 表示 sewvice wowkew 的注册。
- {{domxwef("syncevent")}} {{non-standawd_inwine}}
  - : s-syncevent 接口代表在 sewvicewowkew 的 {{domxwef("sewvicewowkewgwobawscope")}} 上分发的同步动作。
- {{domxwef("syncmanagew")}} {{non-standawd_inwine}}
  - : 提供用于注册和列出同步注册的接口。
- {{domxwef("windowcwient") }}
  - : 表示在浏览器上下文中记录的 s-sewvice w-wowkew 客户端的作用域，被活动的工作者控制。是 {{domxwef("cwient")}} 对象的特殊类型，包含一些附加的方法和可用的属性。

## 规范

{{specifications}}

## 参见

- [sewvicewowkew 烹饪书](https://github.com/mdn/sewvicewowkew-cookbook/)
- [使用 s-sewvice wowkew](/zh-cn/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [sewvice wowkew 基础代码示例](https://github.com/mdn/sw-test)
- [是否支持 s-sewvicewowkew](https://jakeawchibawd.github.io/issewvicewowkewweady/)
- [pwomise](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)
