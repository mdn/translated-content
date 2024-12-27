---
title: Web performance basics
slug: Learn_web_development/Extensions/Performance/Web_Performance_Basics
original_slug: Learn/Performance/Web_Performance_Basics
---

{{LearnSidebar}}

有很多的[理由](https://web.developers.google.cn/learn/performance/why-speed-matters)告诉你为什么你的网站需要尽可能好的性能。下面是关于最佳实践，工具，API 以及链接的简明介绍，它为每个主题提供了更多的信息。意识到对用户来说什么是真正重要的也至关重要，他可能不是绝对意义上的时间而是[用户感知的时间](/zh-CN/docs/Learn_web_development/Extensions/Performance/Perceived_performance)。

#### 最佳实践

- 从学习浏览器的[关键渲染路径](/zh-CN/docs/Web/Performance/Critical_rendering_path)开始。了解这些会帮助你通晓如何提升浏览器的性能。
- 使用[resource hints](/zh-CN/docs/Web/Performance/Controlling_resource_delivery_with_resource_hints)例如`rel=preconnect, rel=dns-prefetch, rel=prefetch, and rel=preload`
- 压缩 Js 代码至[最小](https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4)。只为当前页面加载需要使用到的 js 代码
- [CSS](/zh-CN/docs/Learn_web_development/Extensions/Performance/CSS)性能因素
- 在你的服务器（或者 CDN）上使用 [HTTP/2](/zh-CN/docs/Learn/Performance/HTTP2)协议
- 使用 CDN 托管静态资源，这样可以显著减少加载时间
- 使用[gzip](https://www.gnu.org/software/gzip/), [Brotli](https://github.com/google/brotli) 或者 [Zopfli](https://github.com/google/zopfli)压缩你的资源
- 图片优化（如果可以，尽可能使用 css 动画或者 svg）
- 在超出应用视口范围的部分使用懒加载，如果你这么做了，为 SEO 制定一个后备计划（例如为 bot traffic 渲染整个页面）

#### 工具

- 学习使用[Firefox Dev Tools](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)来分析你的网站。
- [Pagespeed Insights](https://developers.google.cn/speed/docs/insights/v5/about) 可以分析你的页面并且给出一些通用的建议来提升网站性能。
- [Lighthouse](https://developers.google.cn/web/tools/lighthouse/) 可以给你一份有关你网站的包括性能，SEO 和无障碍等多个方面的详细分类。
- 使用 [Webpagetest.org](http://webpagetest.org/)检测页面在不同真实设备类型和地点时候的速度。trics.
- 定义一个绩效预算（[performance budget](/zh-CN/docs/Web/Performance/Performance_budget)）。

#### APIs

- 收集用户指标通过 <https://github.com/akamai/boomerang> 。
- 或者通过[window.performance.timing](/zh-CN/docs/Web/API/Window/performance) 直接收集。

#### 不该做的事（坏的实践）

- 将任何东西都下载下来
- 使用未经压缩的媒体文件
