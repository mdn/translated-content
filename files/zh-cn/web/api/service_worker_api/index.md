---
title: Service Worker API
slug: Web/API/Service_Worker_API
---

{{DefaultAPISidebar("Service Workers API")}}

Service worker 本质上充当 Web 应用程序、浏览器与网络（可用时）之间的代理服务器。这个 API 旨在创建有效的离线体验，它会拦截网络请求并根据网络是否可用来采取适当的动作、更新来自服务器的的资源。它还提供入口以推送通知和访问后台同步 API。

## Service worker 的概念和用法

Service worker 是一个注册在指定源和路径下的事件驱动 [worker](/zh-CN/docs/Web/API/Worker)。它采用 JavaScript 文件的形式，控制关联的页面或者网站，拦截并修改访问和资源请求，细粒度地缓存资源。你可以完全控制应用在特定情形（最常见的情形是网络不可用）下的表现。

Service worker 运行在 worker 上下文：因此它无法访问 DOM，相对于驱动应用的主 JavaScript 线程，它运行在其他线程中，所以不会造成阻塞。它被设计为完全异步；因此，同步 [XHR](/zh-CN/docs/Web/API/XMLHttpRequest) 和 [Web Storage](/zh-CN/docs/Web/API/Web_Storage_API) 不能在 service worker 中使用。

出于安全考量，Service worker 只能由 HTTPS 承载，毕竟修改网络请求的能力暴露给{{Glossary("MitM", "中间人攻击")}}会非常危险，如果允许访问这些强大的 API，此类攻击将会变得很严重。在 Firefox 浏览器的[用户隐私模式](https://support.mozilla.org/zh-CN/kb/private-browsing-use-firefox-without-history)，Service Worker 不可用。

> **备注：** 在 Firefox，为了进行测试，你可以通过 HTTP 运行 service worker（不安全）；只需选中 Firefox 开发者选项/齿轮菜单中的 **Enable Service Workers over HTTP (when toolbox is open)** 选项。

> **备注：** 与之前在该领域的尝试不同，如 [AppCache](https://alistapart.com/article/application-cache-is-a-douchebag/)），service worker 并不确定你试图去做什么，但是当这些假设不完全正确时，它们会被中断。相对地，service worker 可以更细致地控制每一件事情。

> **备注：** Service worker 大量使用 [Promise](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，因为通常它们会等待响应后继续，并根据响应返回一个成功或者失败的操作。Promise 非常适合这种场景。

### 注册

使用 {{domxref("ServiceWorkerContainer.register()")}} 方法首次注册 service worker。如果注册成功，service worker 就会被下载到客户端并尝试安装或激活（见下文），这将作用于整个域内用户可访问的 URL，或者其特定子集。

### 下载、安装和激活

此时，你的 service worker 将遵守以下生命周期：

1. 下载
2. 安装
3. 激活

用户首次访问 service worker 控制的网站或页面时，service worker 会立刻被下载。

之后，在以下情况将会触发更新：

- 一个前往作用域内页面的导航
- 在 service worker 上的一个事件被触发并且过去 24 小时没有被下载

当下载的文件发现是最新的时，就会试图安装——要么与现有的 service worker 不同（字节对比），要么是在页面或网站遇到的第一个 service worker。

如果这是首次启用 service worker，页面会首先尝试安装，安装成功后它会被激活。

如果现有 service worker 已启用，新版本会在后台安装，但仍不会被激活——这个时序称为 _worker in waiting_。直到所有已加载的页面不再使用旧的 service worker 才会激活新的 service worker。只要页面不再依赖旧的 service worker，新的 service worker 会被激活（成为 _active worker_）。使用 {{DOMxRef("ServiceWorkerGlobalScope.skipWaiting()")}} 可以更快地进行激活，active worker 可以使用 {{DOMxRef("Clients.claim()")}} 声明现有的页面

你可以监听 {{domxref("ServiceWorkerGlobalScope/install_event", "install")}} 事件；该事件触发时的标准行为是准备 service worker 用于使用，例如使用内建的 storage API 来创建缓存，并且放置应用离线时所需资源。

还有一个 {{domxref("ServiceWorkerGlobalScope/activate_event", "activate")}} 事件。此事件触发的时间点通常是清理旧缓存以及其他与你的 service worker 的先前版本相关的东西的好时机。

Servcie worker 可以通过 {{domxref("FetchEvent")}} 事件去响应请求。通过使用 {{domxref("FetchEvent.respondWith") }} 方法，你可以任意修改对于这些请求的响应。

> **备注：** 因为 `oninstall` 和 `onactivate` 完成前需要一些时间，service worker 标准提供一个 {{domxref("ExtendableEvent.waitUntil", "waitUntil()")}} 方法。一旦在带有 promise 的 `install` 或 `activate` 事件上调用它，那么 `fetch` 和 `push` 等功能事件将等待，直到 promise 成功兑现。

构建一个基本用例的完整教程，请阅读[使用 Service Worker](/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers)。

## 其他使用场景

Service workers 也可以用来做这些事情：

- 后台数据同步
- 响应来自其他源的资源请求
- 集中接收计算成本高的数据更新，比如地理位置和陀螺仪信息，这样多个页面就可以利用同一组数据
- 在客户端进行 CoffeeScript、LESS、CJS/AMD 等模块编译和依赖管理（用于开发目的）
- 后台服务钩子
- 自定义模板用于特定 URL 模式
- 性能增强，比如预取用户可能需要的资源，比如相册中的后面数张图片

未来 service worker 能够用来做更多使 web 平台接近原生应用的事。值得关注的是，其他标准也能并且将会使用 service worker，例如：

- [后台同步](https://github.com/slightlyoff/BackgroundSync)：启动一个 service worker 即使没有用户访问特定站点，也可以更新缓存
- [响应推送](/zh-CN/docs/Web/API/Push_API)：启动一个 service worker 向用户发送一条信息通知新的内容可用
- 对时间或日期作出响应
- 进入地理围栏

## 接口

- {{domxref("Cache") }}
  - : 表示用于 {{domxref("Request")}} / {{domxref("Response")}} 对象对的存储，作为 {{domxref("ServiceWorker")}} 生命周期的一部分被缓存。
- {{domxref("CacheStorage") }}
  - : 表示 {{domxref("Cache")}} 对象的存储。提供一个所有命名缓存的主目录，{{domxref("ServiceWorker")}} 可以访问并维护名字字符串到 {{domxref("Cache")}} 对象的映射。
- {{domxref("Client") }}
  - : 表示 service worker client 的作用域。一个 service worker client 可以是浏览器上下文的一个文档，也可以是一个由 active worker 控制的 {{domxref("SharedWorker")}}。
- {{domxref("Clients") }}
  - : 表示一个 {{domxref("Client")}} 对象容器；是访问当前源的活动的 service worker client 的主要途径。
- {{domxref("ExtendableEvent")}}
  - : 扩展被分发到 {{domxref("ServiceWorkerGlobalScope")}} 的 `install` 和 `activate` 事件时序，作为 service worker 生命周期的一部分。这会确保任何功能型事件（如 {{domxref("FetchEvent")}}）不被分发到 {{domxref("ServiceWorker")}}，直到它更新了数据库架构、删除过期缓存项等等以后。
- {{DOMxRef("ExtendableMessageEvent")}}
  - : 向 service worker 触发的 {{domxref("ServiceWorkerGlobalScope/message_event", "message")}} 事件的时间对象（当 {{DOMxRef("ServiceWorkerGlobalScope")}} 从另一个上下文收到通道消息），延长了此类事件的生命周期。
- {{domxref("FetchEvent") }}
  - : 传递给 {{domxref("ServiceWorkerGlobalScope.onfetch")}} 处理函数的参数，`FetchEvent` 代表一个在 {{domxref("ServiceWorker")}} 的 {{domxref("ServiceWorkerGlobalScope")}} 中分发的请求动作。它包含关于请求和响应的结果信息，并且提供 {{domxref("FetchEvent.respondWith", "FetchEvent.respondWith()")}} 方法，这个方法允许我们提供任意的响应返回到控制页面。
- {{domxref("InstallEvent") }} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : 传递给 {{domxref("ServiceWorkerGlobalScope.oninstall", "oninstall")}} 处理函数的参数，`InstallEvent` 接口代表一个在 {{domxref("ServiceWorker")}} 的 {{domxref("ServiceWorkerGlobalScope")}} 中分发的安装动作，作为 {{domxref("ExtendableEvent")}} 的子事件，它保证诸如 {{domxref("FetchEvent")}} 的功能性事件在安装过程中不会被分发。
- {{DOMxRef("NavigationPreloadManager")}}
  - : 提供与 service worker 一起管理资源预加载的方法。
- {{domxref("Navigator.serviceWorker") }}
  - : 返回一个 {{domxref("ServiceWorkerContainer")}} 对象，该对象提供对[相关 document](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window) 的注册、删除、更新以及与 {{domxref("ServiceWorker")}} 对象通信的访问。
- {{domxref("NotificationEvent") }}
  - : 传递给 {{domxref("ServiceWorkerGlobalScope.onnotificationclick", "onnotificationclick")}} 处理函数的参数，`NotificationEvent` 接口代表在 {{domxref("ServiceWorker")}} 的 {{domxref("ServiceWorkerGlobalScope")}} 中分发的单击事件通知。
- {{domxref("ServiceWorker") }}
  - : 表示一个 service worker。多个浏览的上下文 (例如 page、worker 等等) 都能通过相同的 `ServiceWorker` 对象相关联。
- {{domxref("ServiceWorkerContainer") }}
  - : 提供一个在网络生态中把 service worker 作为一个整体的对象，包括辅助注册，反注册以及更新 service worker，并且访问 service worker 的状态以及他们的注册信息。
- {{domxref("ServiceWorkerGlobalScope") }}
  - : 表示 service worker 的全局执行上下文。
- {{DOMxRef("MessageEvent")}}
  - : 表示发送到 {{DOMxRef("ServiceWorkerGlobalScope")}} 的信息。
- {{domxref("ServiceWorkerRegistration") }}
  - : 表示 service worker 的注册。
- {{domxref("SyncEvent")}} {{non-standard_inline}}
  - : SyncEvent 接口代表在 ServiceWorker 的 {{domxref("ServiceWorkerGlobalScope")}} 上分发的同步动作。
- {{domxref("SyncManager")}} {{non-standard_inline}}
  - : 提供用于注册和列出同步注册的接口。
- {{domxref("WindowClient") }}
  - : 表示在浏览器上下文中记录的 service worker 客户端的作用域，被活动的工作者控制。是 {{domxref("Client")}} 对象的特殊类型，包含一些附加的方法和可用的属性。

## 规范

{{Specifications}}

## 参见

- [ServiceWorker 烹饪书](https://github.com/mdn/serviceworker-cookbook/)
- [使用 Service Worker](/zh-CN/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service worker 基础代码示例](https://github.com/mdn/sw-test)
- [是否支持 ServiceWorker](https://jakearchibald.github.io/isserviceworkerready/)
- [Promise](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)
