---
title: Web 性能基础
slug: Learn_web_development/Extensions/Performance/Best_practices
---

{{PreviousMenu("Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}

有很多的[理由](https://web.developers.google.cn/learn/performance/why-speed-matters)告诉你为什么你的网站需要尽可能好的性能。下面是关于最佳实践，工具，API 以及链接的简明介绍，它为每个主题提供了更多的信息。意识到对用户来说什么是真正重要的也至关重要，他可能不是绝对意义上的时间而是[用户感知的时间](/zh-CN/docs/Learn_web_development/Extensions/Performance/Perceived_performance)。

## 最佳实践

- 从学习浏览器的[关键渲染路径](/zh-CN/docs/Web/Performance/Guides/Critical_rendering_path)开始。了解这些会帮助你通晓如何提升浏览器的性能。
- 使用*资源提示*，例如 [`rel=preconnect`](/zh-CN/docs/Web/HTML/Reference/Attributes/rel/preconnect)、[`rel=dns-prefetch`](/zh-CN/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch)、[`rel=prefetch`](/zh-CN/docs/Web/HTML/Reference/Attributes/rel/prefetch) 和 [`rel=preload`](/zh-CN/docs/Web/HTML/Reference/Attributes/rel/preload)。
- 压缩 JavaScript 代码至[最小](https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4)。只为当前页面加载需要使用到的 JavaScript 代码。
- [CSS](/zh-CN/docs/Learn_web_development/Extensions/Performance/CSS) 性能因素
- 在你的服务器（或者 CDN）上使用 {{Glossary("HTTP_2", "HTTP/2")}} 协议。
- 使用 CDN 托管静态资源，这样可以显著减少加载时间。
- 使用 [gzip](https://www.gnu.org/software/gzip/)、[Brotli](https://github.com/google/brotli) 或 [Zopfli](https://github.com/google/zopfli)压缩你的资源
- 图片优化（如果可以，尽可能使用 CSS 动画或者 SVG 图片）。
- 在超出应用视口范围的部分使用懒加载，如果你这么做了，为 SEO 制定一个后备计划（例如为 bot traffic 渲染整个页面）；例如，在 {{HTMLElement("img")}} 元素上使用 [`loading`](/zh-CN/docs/Web/HTML/Reference/Elements/img#loading) 属性。
- 同样至关重要的是，要认识到什么对用户真正重要。这可能不是绝对的时间，而是[用户感知](/zh-CN/docs/Learn_web_development/Extensions/Performance/Perceived_performance)。

## 工具

- 学习使用 [Firefox 开发者工具](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)来分析你的网站。
- [Pagespeed Insights](https://developers.google.cn/speed/docs/insights/v5/about) 可以分析你的页面并且给出一些通用的建议来提升网站性能。
- [Lighthouse](https://developers.google.cn/web/tools/lighthouse/) 可以给你一份有关你网站的包括性能，SEO 和无障碍等多个方面的详细分类。
- 使用 [Webpagetest.org](http://webpagetest.org/)检测页面在不同真实设备类型和地点时候的速度。
- 定义一个[绩效预算](/zh-CN/docs/Web/Performance/Guides/Performance_budgets)。

### API

- 通过 [boomerang](https://github.com/akamai/boomerang) 库收集用户指标。
- 或者通过 [window.performance.timing](/zh-CN/docs/Web/API/Performance/timing) 直接收集。

### 不该做的事（不良实践）

- 将任何东西都下载下来
- 使用未经压缩的媒体文件

## 参见

- <https://github.com/filamentgroup/loadCSS>
