---
title: Web 性能
slug: Web/Performance
---

{{QuickLinksWithSubPages}}

Web 性能是客观的衡量标准，是用户对加载时间和运行时的直观体验。Web 性能指页面加载到可交互和可响应所消耗的时间，以及页面在交互时的流畅度——滚动是否顺滑？按钮能否点击？弹窗能否快速打开，动画是否平滑？Web 性能既包括客观的度量如加载时间，每秒帧数和到页面可交互的时间；也包括用户的对页面内容加载时间的主观感觉。

页面响应时间越长，越多的用户就会放弃该网站。重要的是，通过使体验尽可能早地变得可用和交互，同时异步地加载长尾体验部分，来最大程度地减少加载和响应时间，并添加其他功能以降低延迟。

有很多工具，API 和最佳实践帮助我们测量和改进网页性能。本章对此有所讲解。

## 关键性能指南

{{LandingPageListSubpages}}

## 初学者教程

MDN [Web 性能学习专区](/zh-CN/docs/Learn/Performance)有着涵盖性能要素的最新教程。如果你是性能新手，请从这里开始：

- [Web 性能：概述](/zh-CN/docs/Learn/Performance/web_performance_overview)
  - : Web 性能学习路径概述。在这里开始你的旅程。
- [什么是 Web 性能？](/zh-CN/docs/Learn/Performance/What_is_web_performance)
  - : 该文从一个模块开始，很好地讲述了性能到底是什么——包括我们在考虑性能时需要考虑的工具、指标、API、网络和人群，以及如何使性能成为 Web 开发工作流程的一部分。
- [用户如何看待性能？](/zh-CN/docs/Learn/Performance/perceived_performance)
  - : 比网站在毫秒内响应速度更重要的是，用户对网站的感知速度有多快。这些感知受到页面实际加载时间、空闲、用户交互响应以及滚动和其他动画的平滑度的影响。在本文中，我们将随着最佳练习来提升用户感知（而不是实际时间）并讨论各种加载指标、动画和响应性指标。
- [Web 性能基础](/zh-CN/docs/Learn/Performance/web_performance_basics)
  - : 除了 HTML，CSS，JavaScript 和媒体文件这些前端模块之外，还有其他影响 Web 性能的因素，它们可能会导致应用程序变慢，或在主观和客观上使应用程序变快。有许多与 Web 性能相关的 API、开发人员工具、最佳实践和不当做法。我们将在基础层面上介绍这些影响因素，并提供进阶优化其中每一项性能的链接。
- [HTML 性能特性](/zh-CN/docs/Learn/Performance/HTML)
  - : 标签的某些属性和顺序可能会影响网站性能。通过最大程度地减少 DOM 节点的数量，确保使用最佳顺序和属性，包括样式、脚本、媒体和第三方脚本等内容，可以大大改善用户体验。该文详细介绍了如何使用 HTML 来确保最佳性能。
- [多媒体：图像与视频](/zh-CN/docs/Learn/Performance/Multimedia)
  - : Web 性能的最小代价通常是媒体优化。基于每个用户代理的能力、大小和像素密度来服务不同的媒体文件已成为可能。另外，如从背景图像中删除音频轨迹，可进一步提升性能。该文讨论视频、音频和图像内容对性能的影响，以及确保影响尽可能小的方法。
- [CSS 性能特性](/zh-CN/docs/Learn/Performance/CSS_performance)
  - : CSS 对于提高性能来说可能是一个不太重要的优化点，但是某些 CSS 特性对性能的影响比其他特性更大。在该文中，我们将研究一些影响性能的 CSS 属性，并提供样式处理的建议方法，以确保性能不受负面影响。
- [JavaScript 性能最佳实践](/zh-CN/docs/Learn/Performance/JavaScript)
  - : 如果正确使用 JavaScript，则可以提供交互式和身临其境的 Web 体验——否则可能会严重损害下载时间、渲染时间、应用内性能、电池寿命和用户体验。该文概述了一些值得思考的 JavaScript 最佳实践，以确保即使复杂的内容也尽可能地具有高性能。
- [移动端性能](/zh-CN/docs/Learn/Performance/Mobile)
  - : 随着移动设备上的 Web 访问普及，并且所有移动平台都具有功能完善的 Web 浏览器，但由于受限于带宽、CPU、电池续航等因素，因此考虑这些平台上 Web 内容的性能非常重要。本文着眼于特定于移动设备的性能注意事项。

## 使用 Performance API

- [Performance API](/zh-CN/docs/Web/API/Performance_API/Using_the_Performance_API)
  - : 该指南介绍了如何使用 [High-Resolution Time](https://w3c.github.io/hr-time/) 标准中定义的 [`Performance`](/zh-CN/docs/Web/API/Performance) 接口。
- [Resource Timing API](/zh-CN/docs/Web/API/Performance_API/Resource_timing)
  - : [资源加载和定时](/zh-CN/docs/Web/API/Performance_API/Resource_timing)加载这些资源，包括管理资源缓冲区和处理 CORS
- [User Timing API](/zh-CN/docs/Web/API/Performance_API/User_timing)
  - : 使用创建特定于应用程序的时间戳 user timing API 的“标记”和“度量”条目类型——它们是浏览器性能时间轴的一部分。
- [Beacon API](/zh-CN/docs/Web/API/Beacon_API/Using_the_Beacon_API)
  - : 使用 [Beacon](/zh-CN/docs/Web/API/Beacon_API) 接口调度发送给服务器的异步非阻塞请求。
- [Intersection Observer API](/zh-CN/docs/Web/API/Intersection_Observer_API/Timing_element_visibility)
  - : 通过 [Intersection Observer API](/zh-CN/docs/Web/API/Intersection_Observer_API) 学习对元素可见性的监测，并在关注的元素变得可见时被异步通知。

## 其他文档

- [开发者工具中与性能相关的功能](/zh-CN/docs/Tools/Performance)
  - : 本节提供有关如何使用和理解开发人员工具中的性能特性的信息，包括 [Waterfall](/zh-CN/docs/Tools/Performance/Waterfall)、[Call Tree](/zh-CN/docs/Tools/Performance/Call_Tree) 和 [Flame Charts](/zh-CN/docs/Tools/Performance/Flame_Chart)。
- [使用内置分析器进行分析](https://profiler.firefox.com/docs/#/./guide-getting-started)
  - : 了解如何使用 Firefox 的内置分析器来分析应用程序性能。

## 各种术语

- {{glossary('Beacon')}}
- {{glossary('Brotli compression', 'Brotli 压缩')}}
- {{glossary('Client hints', '客户端提示')}}
- {{glossary('Code splitting', '代码拆分')}}
- {{glossary('CSSOM')}}
- {{glossary('Domain sharding', '域名分片')}}
- {{glossary('Effective connection type', '有效连接类型')}}
- {{glossary('First contentful paint', '首次内容绘制')}}
- {{glossary('First CPU idle', '首次 CPU 空闲')}}
- {{glossary('First input delay', '首次输入延迟')}}
- {{glossary('First interactive', '首次交互')}}
- {{glossary('First meaningful paint', '首次有效绘制')}}
- {{glossary('First paint', '首次绘制')}}
- {{glossary('HTTP')}}
- {{glossary('HTTP_2', 'HTTP/2')}}
- {{glossary('Jank', '卡顿（Jank）')}}
- {{glossary('Latency', '延迟')}}
- {{glossary('Lazy load', '懒加载')}}
- {{glossary('Long task', '长任务')}}
- {{glossary('Lossless compression', '无损压缩')}}
- {{glossary('Lossy compression', '有损压缩')}}
- {{glossary('Main thread', '主线程')}}
- {{glossary('Minification', '代码缩减')}}
- {{glossary('Network throttling', '网络节流')}}
- {{glossary('Packet', '包')}}
- {{glossary('Page load time', '页面加载时间')}}
- {{glossary('Page prediction', '页面预测')}}
- {{glossary('Parse', '解析')}}
- {{glossary('Perceived performance', '感知性能')}}
- {{glossary('Prefetch')}}
- {{glossary('Prerender')}}
- {{glossary('QUIC')}}
- {{glossary('RAIL')}}
- {{glossary('Real User Monitoring', '真实用户监控')}}
- {{glossary('Resource Timing')}}
- {{glossary('Round Trip Time (RTT)', '来回通讯延迟（RTT）')}}
- {{glossary('Server Timing')}}
- {{glossary('Speculative parsing')}}
- {{glossary('Speed index', '速度指标')}}
- {{glossary('SSL')}}
- {{glossary('Synthetic monitoring', '综合监控')}}
- {{glossary('TCP handshake', 'TCP 握手')}}
- {{glossary('TCP slow start', 'TCP 慢开始')}}
- {{glossary('Time to first byte', '第一字节时间')}}
- {{glossary('Time to interactive', '可交互时间')}}
- {{glossary('TLS')}}
- {{glossary('TCP', '传输控制协议（TCP）')}}
- {{glossary('Tree shaking', '摇树（Tree shaking）')}}
- {{glossary('Web performance', 'Web 性能')}}

## 参见

HTML

- [`<picture>` 元素](/zh-CN/docs/Web/HTML/Element/picture)
- [`<video>` 元素](/zh-CN/docs/Web/HTML/Element/video)
- [`<source>` 元素](/zh-CN/docs/Web/HTML/Element/source)
- [`<img> srcset` 属性](/zh-CN/docs/Web/HTML/Element/img#属性)

  - [响应式图片](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

- [使用 `rel="preload"` 以预加载内容](/zh-CN/docs/Web/HTML/Link_types/preload)——<https://w3c.github.io/preload/>

CSS

- [will-change](/zh-CN/docs/Web/CSS/will-change)
- GPU v CPU
- 布局测量
- 字体加载最佳实践

JavaScript

- [DOMContentLoaded](/zh-CN/docs/Web/API/Document/DOMContentLoaded_event)
- [垃圾回收（GC）](/zh-CN/docs/Glossary/Garbage_collection)
- [requestAnimationFrame](/zh-CN/docs/Web/API/window/requestAnimationFrame)

API

- [Performance API](/zh-CN/docs/Web/API/Performance_API)
- [Navigation Timing API](/zh-CN/docs/Web/API/Performance_API/Navigation_timing)
- [Media Capabilities API](/zh-CN/docs/Web/API/Media_Capabilities_API/Using_the_Media_Capabilities_API)
- [Network Information API](/zh-CN/docs/Web/API/Network_Information_API)
- [PerformanceNavigationTiming](/zh-CN/docs/Web/API/PerformanceNavigationTiming)
- [Battery Status API](/zh-CN/docs/Web/API/Battery_Status_API)
- [Navigator.deviceMemory](/zh-CN/docs/Web/API/Navigator/deviceMemory)
- [Intersection Observer](/zh-CN/docs/Web/API/Intersection_Observer_API)
- [使用 User Timing API](/zh-CN/docs/Web/API/Performance_API/User_timing)
- [Long Tasks API](/zh-CN/docs/Web/API/Long_Tasks_API)
- [High Resolution Timing API](/zh-CN/docs/Web/API/DOMHighResTimeStamp)（[https://w3c.github.io/hr-time/)](https://w3c.github.io/hr-time/)）
- [Resource Timing API](/zh-CN/docs/Web/API/Performance_API/Resource_timing)
- [Page Visibility](/zh-CN/docs/Web/API/Page_Visibility_API)
- [基于 Background Tasks API 的后台任务调度](/zh-CN/docs/Web/API/Background_Tasks_API)

  - [requestIdleCallback()](/zh-CN/docs/Web/API/Window/requestIdleCallback)

- [Beacon API](/zh-CN/docs/Web/API/Beacon_API)
- Resource Hints - [dns-prefetch](/zh-CN/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control), preconnect, [prefetch](/zh-CN/docs/Glossary/Prefetch), and prerender
- [FetchEvent.preloadResponse](/zh-CN/docs/Web/API/FetchEvent/preloadResponse)
- [Performance Server Timing API](/zh-CN/docs/Web/API/PerformanceServerTiming)

标头

- [Content-encoding](/zh-CN/docs/Web/HTTP/Headers/Content-Encoding)
- HTTP/2
- [gZip](/zh-CN/docs/Glossary/GZip_compression)
- 客户端提示

工具

- [开发者工具中的性能工具](https://profiler.firefox.com/docs/#/)

额外的指标

- 速度指数和感知速度指数

最佳实践

- [使用 Service Worker](/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [使用 Web Worker](/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)

  - [Web Worker API](/zh-CN/docs/Web/API/Web_Workers_API)

- [PWA](/zh-CN/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers)
- [缓存](/zh-CN/docs/Web/HTTP/Caching)
- 内容分发网络（CDN）
