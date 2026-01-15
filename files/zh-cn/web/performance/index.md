---
title: Web 性能
slug: Web/Performance
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

Web 性能是客观的衡量标准，是用户对加载时间和运行时的直观体验。Web 性能指站点从加载到可交互和可响应所消耗的时间，以及页面在交互时的流畅度——滚动是否顺滑？按钮能否点击？弹窗能否快速加载和显示、动画是否平滑？Web 性能既包括客观的度量（如加载时间、每秒帧数和到页面可交互的时间），也包括用户的对页面内容加载时间的主观感觉。

站点响应时间越长，越多的用户就会放弃该网站。重要的是尽量缩短加载和响应时间，并添加其他特性来降低延迟：尽快提供尽可能可用且可交互的体验，并异步加载长尾体验部分。

有很多工具、API 和最佳实践帮助我们测量和改进 Web 性能。我们将在本节中介绍：

## Web 性能指南

- [性能基础](/zh-CN/docs/Web/Performance/Guides/Fundamentals)
  - : 性能意味着效率。就开放式 Web 应用程序而言，本文档概括性地解释了什么是性能、浏览器平台如何帮助提高性能，以及可以使用哪些工具和流程来测试和提高性能。
- [生成页面：浏览器的工作原理](/zh-CN/docs/Web/Performance/Guides/How_browsers_work)
  - : 用户希望获得内容加载速度快、交互流畅的 web 体验。因此，开发人员应努力实现这两个目标。要了解如何提高性能和感知性能，了解浏览器的工作原理很有帮助。
- [理解延迟](/zh-CN/docs/Web/Performance/Guides/Understanding_latency)
  - : **延迟**是指数据包从源传输到目的地所需的时间。就性能优化而言，重要的是进行优化以减少造成延迟的原因，并模拟高延迟测试网站性能，以便为连接速度慢或不可靠的用户进行优化。
- [建议的 Web 性能计时：多长时间算过长？](/zh-CN/docs/Web/Performance/Guides/How_long_is_too_long)
  - : 对于加载页面时速度慢的定义并没有明确的规定，但对于内容加载（1 秒）、空闲（50 毫秒）、动画（16.7 毫秒）和响应用户输入（50 至 200 毫秒）都有具体的指导原则。
- [使用 dns-prefetch](/zh-CN/docs/Web/Performance/Guides/dns-prefetch)
  - : **`DNS-prefetch`** 是一种在请求资源前解析域名的尝试。这可能是稍后加载的文件或用户试图跟踪的链接目标。
- [导航和资源计时](/zh-CN/docs/Web/Performance/Guides/Navigation_and_resource_timings)
  - : **导航计时**是衡量浏览器文档导航事件的指标。**资源计时**是关于应用程序资源加载的详细网络计时测量。两者提供相同的只读属性，但导航计时测量的是主文档的计时，而资源计时提供的是主文档调用的所有资产或资源以及资源请求的时间。
- [优化启动性能](/zh-CN/docs/Web/Performance/Guides/Optimizing_startup_performance)
  - : 提高启动性能往往是价值最高的性能优化之一。良好的用户体验包括确保应用程序快速加载。本文为编写新应用程序和将应用程序从其他平台移植到 web 提供了性能提示和建议。
- [关键渲染路径](/zh-CN/docs/Web/Performance/Guides/Critical_rendering_path)
  - : 关键渲染路径是浏览器将 HTML、CSS 和 JavaScript 转换为屏幕上像素的一系列步骤。优化关键渲染路径可提高渲染性能。关键渲染路径包括[文档对象模型](/zh-CN/docs/Web/API/Document_Object_Model)（DOM）、[CSS 对象模型](/zh-CN/docs/Web/API/CSS_Object_Model)（CSSOM）、渲染树和布局。
- [懒加载](/zh-CN/docs/Web/Performance/Guides/Lazy_loading)
  - : **懒加载**是一种将资源标识为非阻塞（非关键）并仅在需要时加载的策略。这是一种缩短[关键渲染路径](/zh-CN/docs/Web/Performance/Guides/Critical_rendering_path)长度的方法，可缩短页面加载时间。
- [推测性加载](/zh-CN/docs/Web/Performance/Guides/Speculative_loading)
  - : **推测性加载**是指在用户实际访问相关页面之前，根据对用户下一步最有可能访问的页面的预测，执行导航操作（如 DNS 获取、获取资源或渲染文档）。
- [性能预算](/zh-CN/docs/Web/Performance/Guides/Performance_budgets)
  - : 性能预算是防止性能下降的限制。它可以适用于一个文件、一种文件类型、页面上加载的所有文件、一个特定指标（例如[下次交互时间](/zh-CN/docs/Glossary/Time_to_interactive)）、一个自定义指标（例如英雄元素时间（Time to Hero Element））或一段时间内的阈值。
- [性能监控：RUM 与模拟监控](/zh-CN/docs/Web/Performance/Guides/Rum-vs-Synthetic)
  - : **模拟监控**和**真实用户监控（RUM）** 是监控和深入了解 web 性能的两种方法。RUM 和模拟监控提供了不同的性能视图，各有优点、良好的使用案例和不足之处。RUM 通常最适合用于了解长期趋势，而合成监控则非常适合用于回归测试和缓解开发过程中的短期性能问题。本文将对这两种性能监控方法进行定义和比较。
- [CSS 和 JavaScript 动画性能](/zh-CN/docs/Web/Performance/Guides/CSS_JavaScript_animation_performance)
  - : 在许多应用程序中，动画对于愉悦的用户体验至关重要。实现 web 动画的方法有很多，例如 CSS {{cssxref("transition")}}/{{cssxref("animation")}} 或基于 JavaScript 的动画（使用 {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}}）。本文将分析基于 CSS 的动画和基于 JavaScript 的动画之间的性能差异。
- [动画性能与帧率](/zh-CN/docs/Web/Performance/Guides/Animation_performance_and_frame_rate)
  - : web 上的动画可以通过 {{domxref('SVGAnimationElement', 'SVG')}}、{{domxref('Window.requestAnimationFrame','JavaScript')}}，包括 {{htmlelement('canvas')}} 和 {{domxref('WebGL_API', 'WebGL')}}、CSS {{cssxref('animation')}}、{{htmlelement('video')}}、GIF 动画，甚至 PNG 动画和其他图像类型。为 CSS 属性设置动画的性能成本因属性而异，而为昂贵的 CSS 属性设置动画可能会因浏览器难以达到流畅的{{glossary("FPS", "帧率")}}导致{{glossary('Jank', '卡顿')}}。

## 初学者教程

MDN [Web 性能学习专区](/zh-CN/docs/Learn_web_development/Extensions/Performance)有着涵盖性能要素的最新教程。如果你是性能方面的新手，请从这里开始：

- [Web 性能：概述](/zh-CN/docs/Learn_web_development/Extensions/Performance/What_is_web_performance)
  - : Web 性能学习路径概述。从这里开始你的旅程。
- [什么是 Web 性能？](/zh-CN/docs/Learn_web_development/Extensions/Performance/What_is_web_performance)
  - : 本文从一个模块开始，很好地讲述了性能到底是什么——包括我们在考虑性能时需要考虑的工具、指标、API、网络和人群，以及如何使性能成为 Web 开发工作流程的一部分。
- [用户如何感知性能？](/zh-CN/docs/Learn_web_development/Extensions/Performance/Perceived_performance)
  - : 比网站在毫秒内的响应速度更重要的是，用户对网站的感知速度有多快。这些感知受到页面实际加载时间、空闲、用户交互响应以及滚动和其他动画的平滑度的影响。在本文中，我们将随着最佳实践来提升用户感知（而不是实际时间）并讨论各种加载指标、动画和响应性指标。
- [Web 性能基础](/zh-CN/docs/Learn_web_development/Extensions/Performance/Best_practices)
  - : 除了 HTML、CSS、JavaScript 和媒体文件这些前端组件之外，还有其他导致应用程序变慢，或在主观和客观上使应用程序变快的因素。有许多与 Web 性能相关的 API、开发者工具、最佳实践和不当做法。我们将在基础层面上介绍这些影响因素，并提供进阶优化其中每一项性能的链接。
- [HTML 性能特性](/zh-CN/docs/Learn_web_development/Extensions/Performance/HTML)
  - : 标记的某些属性和顺序可能会影响网站性能。通过最大程度地减少 DOM 节点的数量，确保使用最佳顺序和属性（包括样式、脚本、媒体和第三方脚本等内容），可以大大改善用户体验。该文详细介绍了如何使用 HTML 来确保最佳性能。
- [多媒体：图像与视频](/zh-CN/docs/Learn_web_development/Extensions/Performance/Multimedia)
  - : Web 性能最容易提升的点通常是媒体优化。基于每个用户代理的能力、尺寸和像素密度来提供不同的媒体文件已成为可能。另外，如从背景视频中删除音轨，可进一步提升性能。该文讨论视频、音频和图像内容对性能的影响，以及确保将影响降至最低的方法。
- [CSS 性能特性](/zh-CN/docs/Learn_web_development/Extensions/Performance/CSS)
  - : CSS 对于提高性能来说可能是一个不太重要的优化点，但是某些 CSS 特性对性能的影响比其他特性更大。在该文中，我们将研究一些影响性能的 CSS 属性，并提供样式处理的建议方法，以确保性能不受负面影响。
- [JavaScript 性能最佳实践](/zh-CN/docs/Learn_web_development/Extensions/Performance/JavaScript)
  - : 如果正确使用 JavaScript，则可以提供交互式和沉浸式的 Web 体验——否则可能会严重影响下载时间、渲染时间、应用内性能、电池寿命和用户体验。该文概述了一些值得思考的 JavaScript 最佳实践，以确保即使复杂的内容也尽可能地具有高性能。

## 性能 API

[性能 API](/zh-CN/docs/Web/API/Performance_API) 是一组用于测量 web 应用程序性能的标准。以下页面提供了性能 API 的概述，包括如何使用这些 API 的信息：

- [高精度计时](/zh-CN/docs/Web/API/Performance_API/High_precision_timing)
  - : 性能 API 允许基于潜在亚毫秒分辨率的时间和不受系统时钟偏移或调整影响的稳定单调时钟进行高精度测量。准确的基准测试需要高分辨率计时器，而不是精度较低的非单调 {{jsxref("Date")}} 时间戳。
- [长动画帧计时](/zh-CN/docs/Web/API/Performance_API/Long_animation_frame_timing)
  - : **长动画帧**（LoAF）会影响网站的用户体验。它们会造成用户界面（UI）更新缓慢，导致控件看似反应迟钝，以及[卡顿](/zh-CN/docs/Glossary/Jank)（或不流畅）的动画效果和滚动，从而使用户产生挫败感。[长动画帧 API](https://w3c.github.io/long-animation-frames/) 允许开发人员获取有关长动画帧的信息，并更好地了解其根本原因。本文将介绍如何使用长动画帧 API。
- [监控 bfcache 阻塞原因](/zh-CN/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
  - : {{domxref("PerformanceNavigationTiming.notRestoredReasons")}} 属性会报告当前文档在导航时被阻止使用 {{Glossary("bfcache")}} 的原因。开发人员可利用此信息识别需要更新的页面，使其与 bfcache 兼容，从而提高网站性能。
- [导航计时](/zh-CN/docs/Web/API/Performance_API/Navigation_timing)
  - : 导航计时通过 [PerformanceNavigationTiming](/zh-CN/docs/Web/API/PerformanceNavigationTiming) API 提供与从一个页面导航到另一个页面相关的指标。例如，可以确定加载或卸载文档所需的时间，或记录直到 {{Glossary("DOM")}} 构建完成并可与 DOM 进行交互所需的时间。
- [性能数据](/zh-CN/docs/Web/API/Performance_API/Performance_data)
  - : 性能 API 不提供性能数据分析或可视化。不过，性能 API 与开发人员工具集成得很好，其数据经常被发送到分析端点和库，以记录性能指标，从而帮助你评估数据，找到影响用户的性能瓶颈。本页概述了性能 API 数据的种类、收集方式以及访问方式。
- [资源计时 API](/zh-CN/docs/Web/API/Performance_API/Resource_timing)
  - : 资源定时可以检索和分析应用程序资源加载的详细网络定时数据。例如，应用程序可以使用定时指标来确定加载特定资源（如图片或脚本）所需的时间长度，可以作为页面加载的一部分进行隐式加载，也可以通过 JavaScript 进行显式加载，例如使用 {{domxref("Window/fetch", "fetch()")}} API。
- [服务器计时](/zh-CN/docs/Web/API/Performance_API/Server_timing)
  - : 服务器计时允许服务器向用户代理传递有关请求—响应周期的指标。你可以像使用性能 API 处理所有其他指标一样，收集这些信息并对服务器端指标采取行动。
- [用户计时 API](/zh-CN/docs/Web/API/Performance_API/User_timing)
  - : 使用[用户计时 API](/zh-CN/docs/Web/API/Performance_API/User_timing) 的“标记”和“度量”条目类型（它们是浏览器性能时间轴的一部分）创建特定于应用程序的时间戳。

### 相关 API

以下 API 对于衡量和影响页面性能也很有用：

- [页面可见性 API](/zh-CN/docs/Web/API/Page_Visibility_API)
  - : 提供了可以观察的事件，以了解文档何时变为可见或隐藏，以及查看页面当前可见状态的特性。
- [后台任务 API](/zh-CN/docs/Web/API/Background_Tasks_API)
  - : **后台任务协作调度 API**（也称为后台任务 API 或 [`requestIdleCallback()`](/zh-CN/docs/Web/API/Window/requestIdleCallback) API）提供了任务队列的功能，以便用户代理在确定有空闲时间时自动执行任务。
- [信标 API](/zh-CN/docs/Web/API/Beacon_API)
  - : 使用[信标](/zh-CN/docs/Web/API/Beacon_API)接口调度发送给 Web 服务器的异步非阻塞请求。
- [交叉观察器 API](/zh-CN/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
  - : 通过[交叉观察器 API](/zh-CN/docs/Web/API/Intersection_Observer_API) 学习对元素可见性的监测，并在关注的元素变得可见时接收异步通知。
- [媒体能力 API](/zh-CN/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API)
  - : 暴露客户端设备的解码和编码能力，如是否支持媒体、播放是否流畅和省电，并提供有关播放的实时反馈，以更好地实现自适应流媒体，以及访问显示属性信息。
- [网络信息 API](/zh-CN/docs/Web/API/Network_Information_API)
  - : 以通用连接类型（如“wifi”、“cellular”等）表示的系统连接信息。这可用于根据用户的连接情况选择高清内容或低清晰度内容。
- [电源状态 API](/zh-CN/docs/Web/API/Battery_Status_API)
  - : **电源状态 API** 提供了系统电池电量信息，当电池电量或充电状态发生变化时，可以收到事件通知。当电池电量不足时，这可以用来调整应用程序的资源使用情况以减少电池消耗，或在电池耗尽前保存更改以防止数据丢失。
- [Navigator.deviceMemory](/zh-CN/docs/Web/API/Navigator/deviceMemory)
  - : {{domxref("Navigator")}} 接口的 **`deviceMemory`** 只读属性以千兆字节为单位返回设备内存的大致容量。
- [FetchEvent.preloadResponse](/zh-CN/docs/Web/API/FetchEvent/preloadResponse)
  - : {{domxref("FetchEvent")}} 接口的 **`preloadResponse`** 只读属性返回一个 {{jsxref("Promise")}}，当触发了[导航预载](/zh-CN/docs/Web/API/NavigationPreloadManager)时，兑现为导航预载{{domxref("Response", "响应", "", 1)}}，否则兑现为 `undefined`。

## 其他分析工具

- [Firefox Profiler 性能特性](https://profiler.firefox.com/docs/#/)
  - : 网站提供了如何使用和理解开发者工具中的性能特性的信息，包括[调用树](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-call-tree)、[火焰图](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-flame-graph)、[栈图](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-stack-chart)、[标记图](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-marker-chart)和[网络图](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-network-chart)。
- [使用内置分析器进行分析](https://profiler.firefox.com/docs/#/./guide-getting-started)
  - : 了解如何使用 Firefox 的内置分析器来分析应用程序性能。

## 参考

### HTML

- [`<picture>`](/zh-CN/docs/Web/HTML/Reference/Elements/picture) 元素
- [`<video>`](/zh-CN/docs/Web/HTML/Reference/Elements/video) 元素
- [`<source>`](/zh-CN/docs/Web/HTML/Reference/Elements/source) 元素
- 响应式图像的 [`<img> srcset`](/zh-CN/docs/Web/HTML/Reference/Elements/img#属性) 属性
- 用于通过 HTML 预加载内容的 [`rel="preload"`](/zh-CN/docs/Web/HTML/Reference/Attributes/rel/preload) 属性

### CSS

- [will-change](/zh-CN/docs/Web/CSS/Reference/Properties/will-change)

### JavaScript

- [DOMContentLoaded](/zh-CN/docs/Web/API/Document/DOMContentLoaded_event)
- [垃圾回收](/zh-CN/docs/Glossary/Garbage_collection)
- [requestAnimationFrame](/zh-CN/docs/Web/API/Window/requestAnimationFrame)

### HTTP

- [Content-encoding](/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Encoding)
- 通过 [dns-prefetch](/zh-CN/docs/Web/HTTP/Reference/Headers/X-DNS-Prefetch-Control)、[preconnect](/zh-CN/docs/Web/HTML/Reference/Attributes/rel/preconnect)、[prefetch](/zh-CN/docs/Glossary/Prefetch) 和 prerender 进行资源提示
- [HTTP/2](/zh-CN/docs/Web/HTTP/Guides/Messages#http2_messages)
- [客户端提示](/zh-CN/docs/Web/HTTP/Guides/Client_hints)

## 参见

- [响应式图像](/zh-CN/docs/Web/HTML/Guides/Responsive_images) HTML 指南
- [Web Worker API](/zh-CN/docs/Web/API/Web_Workers_API)，包括[使用 Service Worker](/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers) 和[使用 Web Worker](/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)
- [离线与后台操作](/zh-CN/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)
- [缓存](/zh-CN/docs/Web/HTTP/Guides/Caching)
- [客户端提示](/zh-CN/docs/Web/HTTP/Guides/Client_hints)
- 术语：
  - {{glossary('Beacon', '信标')}}
  - {{glossary('Brotli compression', 'Brotli 压缩')}}
  - {{glossary('CDN', '内容分发网络（CDN）')}}
  - {{glossary('CLS', '累计布局偏移（CLS）')}}
  - {{glossary('Code splitting', '代码拆分')}}
  - {{glossary('CSSOM')}}
  - {{glossary('Domain sharding', '域名分片')}}
  - {{glossary('Effective connection type', '有效连接类型')}}
  - {{glossary('First contentful paint', '首次内容绘制（FCP）')}}
  - {{glossary('First CPU idle', '首次 CPU 空闲')}}
  - {{glossary('First paint', '首次绘制')}}
  - {{glossary('gzip_compression', 'gzip 压缩')}}
  - {{glossary('HTTP_2', 'HTTP/2')}}
  - {{glossary('HTTP')}}
  - {{glossary('Interaction to next paint', '交互到下次绘制（INP）')}}
  - {{glossary('Jank', '卡顿')}}
  - {{glossary('Largest contentful paint', '最大内容绘制（LCP）')}}
  - {{glossary('Latency', '延迟')}}
  - {{glossary('Lazy load', '懒加载')}}
  - {{glossary('Long task', '长任务')}}
  - {{glossary('Lossless compression', '无损压缩')}}
  - {{glossary('Lossy compression', '有损压缩')}}
  - {{glossary('Main thread', '主线程')}}
  - {{glossary('Minification', '极简化')}}
  - {{glossary('Network throttling', '网络限速')}}
  - {{glossary('Packet', '包')}}
  - {{glossary('Page load time', '页面加载时间')}}
  - {{glossary('Page prediction', '页面预测')}}
  - {{glossary('Parse', '解析')}}
  - {{glossary('Perceived performance', '感知性能')}}
  - {{glossary('Prefetch', '预取')}}
  - {{glossary('Prerender', '预渲染')}}
  - {{glossary('QUIC')}}
  - {{glossary('RAIL')}}
  - {{glossary('Real User Monitoring', '真实用户监控（RUM）')}}
  - {{glossary('Resource Timing', '资源计时')}}
  - {{glossary('Round Trip Time', '来回通讯延迟（RTT）')}}
  - {{glossary('Server Timing', '服务器计时')}}
  - {{glossary('Speculative parsing', '预解析')}}
  - {{glossary('Speed index', '速度指标')}}（和感知速度指标）
  - {{glossary('SSL')}}
  - {{glossary('Synthetic monitoring', "模拟监控")}}
  - {{glossary('TCP handshake', 'TCP 握手')}}
  - {{glossary('TCP slow start', 'TCP 慢开始')}}
  - {{glossary('TCP', '传输控制协议（TCP）')}}
  - {{glossary('Time to first byte', '第一字节时间（TTFB）')}}
  - {{glossary('Time to interactive', '可交互时间（TTI）')}}
  - {{glossary('TLS')}}
  - {{glossary('Tree shaking', '摇树')}}
  - {{glossary('Web performance', 'Web 性能')}}
- [Firefox 开发工具的性能](https://profiler.firefox.com/docs/#/)
