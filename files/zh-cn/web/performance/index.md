---
title: Web 性能
slug: Web/Performance
l10n:
  sourceCommit: 514d1d2690c6374cd65921193ff6b166677395fd
---

{{QuickLinksWithSubPages}}

Web 性能是客观的衡量标准，是用户对加载时间和运行时的直观体验。Web 性能指站点从加载到可交互和可响应所消耗的时间，以及页面在交互时的流畅度——滚动是否顺滑？按钮能否点击？弹窗能否快速加载和显示、动画是否平滑？Web 性能既包括客观的度量（如加载时间、每秒帧数和到页面可交互的时间），也包括用户的对页面内容加载时间的主观感觉。

站点响应时间越长，越多的用户就会放弃该网站。重要的是尽量缩短加载和响应时间，并添加其他特性来降低延迟：尽快提供尽可能可用且可交互的体验，并异步加载长尾体验部分。

有很多工具、API 和最佳实践帮助我们测量和改进 Web 性能。我们将在本节中介绍：

## 关键性能指南

{{SubpagesWithSummaries}}

## 初学者教程

MDN [Web 性能学习专区](/zh-CN/docs/Learn_web_development/Extensions/Performance)有着涵盖性能要素的最新教程。如果你是性能方面的新手，请从这里开始：

- [Web 性能：概述](/zh-CN/docs/Learn_web_development/Extensions/Performance/What_is_web_performance)
  - : Web 性能学习路径概述。从这里开始你的旅程。
- [什么是 Web 性能？](/zh-CN/docs/Learn_web_development/Extensions/Performance/What_is_web_performance)
  - : 本文从一个模块开始，很好地讲述了性能到底是什么——包括我们在考虑性能时需要考虑的工具、指标、API、网络和人群，以及如何使性能成为 Web 开发工作流程的一部分。
- [用户如何看待性能？](/zh-CN/docs/Learn_web_development/Extensions/Performance/Perceived_performance)
  - : 比网站在毫秒内的响应速度更重要的是，用户对网站的感知速度有多快。这些感知受到页面实际加载时间、空闲、用户交互响应以及滚动和其他动画的平滑度的影响。在本文中，我们将随着最佳实践来提升用户感知（而不是实际时间）并讨论各种加载指标、动画和响应性指标。
- [Web 性能基础](/zh-CN/docs/Learn_web_development/Extensions/Performance/Web_Performance_Basics)
  - : 除了 HTML、CSS、JavaScript 和媒体文件这些前端组件之外，还有其他导致应用程序变慢，或在主观和客观上使应用程序变快的因素。有许多与 Web 性能相关的 API、开发者工具、最佳实践和不当做法。我们将在基础层面上介绍这些影响因素，并提供进阶优化其中每一项性能的链接。
- [HTML 性能特性](/zh-CN/docs/Learn_web_development/Extensions/Performance/HTML)
  - : 标记的某些属性和顺序可能会影响网站性能。通过最大程度地减少 DOM 节点的数量，确保使用最佳顺序和属性（包括样式、脚本、媒体和第三方脚本等内容），可以大大改善用户体验。该文详细介绍了如何使用 HTML 来确保最佳性能。
- [多媒体：图像与视频](/zh-CN/docs/Learn_web_development/Extensions/Performance/Multimedia)
  - : Web 性能最容易提升的点通常是媒体优化。基于每个用户代理的能力、尺寸和像素密度来提供不同的媒体文件已成为可能。另外，如从背景视频中删除音轨，可进一步提升性能。该文讨论视频、音频和图像内容对性能的影响，以及确保将影响降至最低的方法。
- [CSS 性能特性](/zh-CN/docs/Learn_web_development/Extensions/Performance/CSS)
  - : CSS 对于提高性能来说可能是一个不太重要的优化点，但是某些 CSS 特性对性能的影响比其他特性更大。在该文中，我们将研究一些影响性能的 CSS 属性，并提供样式处理的建议方法，以确保性能不受负面影响。
- [JavaScript 性能最佳实践](/zh-CN/docs/Learn_web_development/Extensions/Performance/JavaScript)
  - : 如果正确使用 JavaScript，则可以提供交互式和沉浸式的 Web 体验——否则可能会严重影响下载时间、渲染时间、应用内性能、电池寿命和用户体验。该文概述了一些值得思考的 JavaScript 最佳实践，以确保即使复杂的内容也尽可能地具有高性能。

## 使用 Performance API

- [资源计时 API](/zh-CN/docs/Web/API/Performance_API/Resource_timing)
  - : [资源加载并计时](/zh-CN/docs/Web/API/Performance_API/Resource_timing)这些资源的加载，包括管理资源缓冲区和应对 [CORS](/zh-CN/docs/Web/HTTP/CORS)。
- [用户计时 API](/zh-CN/docs/Web/API/Performance_API/User_timing)
  - : 使用[用户计时 API](/zh-CN/docs/Web/API/Performance_API/User_timing) 的“标记”和“度量”条目类型（它们是浏览器性能时间轴的一部分）创建特定于应用程序的时间戳。
- [信标 API](/zh-CN/docs/Web/API/Beacon_API)
  - : 使用[信标](/zh-CN/docs/Web/API/Beacon_API)接口调度发送给 Web 服务器的异步非阻塞请求。
- [交叉观察器 API](/zh-CN/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
  - : 通过[交叉观察器 API](/zh-CN/docs/Web/API/Intersection_Observer_API) 学习对元素可见性的监测，并在关注的元素变得可见时接收异步通知。

## 其他文档

- [Firefox Profiler 性能特性](https://profiler.firefox.com/docs/#/)
  - : 网站提供了如何使用和理解开发者工具中的性能特性的信息，包括[调用树](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-call-tree)、[火焰图](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-flame-graph)、[栈图](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-stack-chart)、[标记图](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-marker-chart)和[网络图](https://profiler.firefox.com/docs/#/./guide-ui-tour-panels?id=the-network-chart)。
- [使用内置分析器进行分析](https://profiler.firefox.com/docs/#/./guide-getting-started)
  - : 了解如何使用 Firefox 的内置分析器来分析应用程序性能。

## 术语表

- {{glossary('Beacon', '信标')}}
- {{glossary('Brotli compression', 'Brotli 压缩')}}
- [客户端提示](/zh-CN/docs/Web/HTTP/Client_hints)
- {{glossary('Code splitting', '代码拆分')}}
- {{glossary('CSSOM')}}
- {{glossary('CLS', '累计布局偏移')}}
- {{glossary('Domain sharding', '域名分片')}}
- {{glossary('Effective connection type', '有效连接类型')}}
- {{glossary('First Contentful Paint', '首次内容绘制')}}
- {{glossary('First CPU idle', '首次 CPU 空闲')}}
- {{glossary('First Paint', '首次绘制')}}
- {{glossary('HTTP')}}
- {{glossary('HTTP_2', 'HTTP/2')}}
- {{glossary('Interaction to Next Paint', '交互到下次绘制')}}
- {{glossary('Jank', '卡顿')}}
- {{glossary('Largest Contentful Paint', '最大内容绘制')}}
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
- {{glossary('Real User Monitoring', '真实用户监控')}}
- {{glossary('Resource Timing', '资源计时')}}
- {{glossary('Round Trip Time (RTT)', '来回通讯延迟（RTT）')}}
- {{glossary('Server Timing', '服务器计时')}}
- {{glossary('Speculative parsing', '预解析')}}
- {{glossary('Speed index', '速度指标')}}
- {{glossary('SSL')}}
- {{glossary('Synthetic monitoring', "模拟监控")}}
- {{glossary('TCP handshake', 'TCP 握手')}}
- {{glossary('TCP slow start', 'TCP 慢开始')}}
- {{glossary('Time to first byte', '第一字节时间')}}
- {{glossary('Time to interactive', '可交互时间')}}
- {{glossary('TLS')}}
- {{glossary('TCP', '传输控制协议（TCP）')}}
- {{glossary('Tree shaking', '摇树')}}
- {{glossary('Web performance', 'Web 性能')}}

## 参见

HTML

- [`<picture>` 元素](/zh-CN/docs/Web/HTML/Element/picture)
- [`<video>` 元素](/zh-CN/docs/Web/HTML/Element/video)
- [`<source>` 元素](/zh-CN/docs/Web/HTML/Element/source)
- [`<img> srcset` 属性](/zh-CN/docs/Web/HTML/Element/img#属性)

  - [响应式图片](/zh-CN/docs/Web/HTML/Responsive_images)

- [使用 `rel="preload"` 以预加载内容](/zh-CN/docs/Web/HTML/Attributes/rel/preload)
- <https://w3c.github.io/preload/>

CSS

- [will-change](/zh-CN/docs/Web/CSS/will-change)
- GPU v CPU
- 布局测量
- 字体加载最佳实践

JavaScript

- [DOMContentLoaded](/zh-CN/docs/Web/API/Document/DOMContentLoaded_event)
- [垃圾回收](/zh-CN/docs/Glossary/Garbage_collection)
- [requestAnimationFrame](/zh-CN/docs/Web/API/Window/requestAnimationFrame)

API

- [Performance API](/zh-CN/docs/Web/API/Performance_API)
- [导航计时 API](/zh-CN/docs/Web/API/Performance_API/Navigation_timing)
- [媒体能力 API](/zh-CN/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API)
- [网络信息 API](/zh-CN/docs/Web/API/Network_Information_API)
- [PerformanceNavigationTiming](/zh-CN/docs/Web/API/PerformanceNavigationTiming)
- [电池状态 API](/zh-CN/docs/Web/API/Battery_Status_API)
- [Navigator.deviceMemory](/zh-CN/docs/Web/API/Navigator/deviceMemory)
- [交叉观察器](/zh-CN/docs/Web/API/Intersection_Observer_API)
- [使用用户计时 API](/zh-CN/docs/Web/API/Performance_API/User_timing)
- [长任务 API](/zh-CN/docs/Web/API/PerformanceLongTaskTiming)
- [高解析度时间 API](/zh-CN/docs/Web/API/DOMHighResTimeStamp)（<https://w3c.github.io/hr-time/>）
- [资源计时 API](/zh-CN/docs/Web/API/Performance_API/Resource_timing)
- [页面可见性](/zh-CN/docs/Web/API/Page_Visibility_API)
- [后台任务协同调度 API](/zh-CN/docs/Web/API/Background_Tasks_API)

  - [requestIdleCallback()](/zh-CN/docs/Web/API/Window/requestIdleCallback)

- [信标 API](/zh-CN/docs/Web/API/Beacon_API)
- 资源提示：[dns-prefetch](/zh-CN/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control)、[preconnect](/zh-CN/docs/Web/HTML/Attributes/rel/preconnect)、[prefetch](/zh-CN/docs/Glossary/Prefetch) 和 prerender
- [FetchEvent.preloadResponse](/zh-CN/docs/Web/API/FetchEvent/preloadResponse)
- [Performance Server Timing API](/zh-CN/docs/Web/API/PerformanceServerTiming)

标头

- [Content-encoding](/zh-CN/docs/Web/HTTP/Headers/Content-Encoding)
- HTTP/2
- [gZip](/zh-CN/docs/Glossary/gzip_compression)
- 客户端提示

工具

- [开发者工具中的性能工具](https://profiler.firefox.com/docs/#/)

额外的指标

- 速度指数和感知速度指数

最佳实践

- [使用 Service Worker](/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [使用 Web Worker](/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)

  - [Web Worker API](/zh-CN/docs/Web/API/Web_Workers_API)

- [离线和后台操作](/zh-CN/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)
- [缓存](/zh-CN/docs/Web/HTTP/Caching)
- 内容分发网络（CDN）
