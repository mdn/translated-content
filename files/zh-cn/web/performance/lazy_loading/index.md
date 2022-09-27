---
title: Lazy loading
slug: Web/Performance/Lazy_loading
---

**延迟加载 (懒加载)** 是一种将资源标识为非阻塞（非关键）资源并仅在需要时加载它们的策略。这是一种缩短[关键渲染路径](/zh-CN/docs/Web/Performance/Critical_rendering_path)长度的方法，可以缩短页面加载时间。

延迟加载可以在应用程序的不同时刻发生，但通常会在某些用户交互（例如滚动和导航）上发生。

## 概览

随着网络的发展，我们已经看到发送给用户的资产数量和规模都在急剧增加。从 2011 年到 2019 年，台式机的资源中位数从 **\~100KB** 增至 **\~400KB**，移动版的资源中位数从 **\~50KB** 增至**\~350KB**。图像大小已从台式机上的**\~250KB** 增至 **\~900KB**，而移动设备上的 **\~100KB**增至**\~850KB**。

解决这个问题的方法之一是延迟加载对第一次渲染并不重要的资源来缩短[关键渲染路径](/zh-CN/docs/Web/Performance/Critical_rendering_path)的长度。一个实际例子是，当用户打开一个电商网站的主页时，该页面有一个指向购物车页面/区域的链接，并且**只有**在用户导航到购物车页面/区域时才会下载其所有资源（JS、CSS、images……）。

## 策略

延迟加载可以通过多种策略应用于多个资源。

### 综述

**代码拆分**
可以将 JavaScript、CSS 和 HTML 分割成小块，以发送最少的代码提供关键信息，以优化页面加载时间。其余的部分可以在需要时加载。

- Entry point splitting: separates code by entry point(s) in the app
- Dynamic splitting: separates code where [dynamic import()](/zh-CN/docs/Web/JavaScript/Reference/Statements/import) statements are used

### JavaScript

脚本类型模块
任何类型为 `type="module"` 的脚本标签都被视为一个 [JavaScript 模块](/zh-CN/docs/Web/JavaScript/Guide/Modules)，并且默认情况下会被延迟。

### CSS

默认情况下，CSS 被视为[渲染阻塞](/zh-CN/docs/Web/Performance/Critical_rendering_path)资源，因此，在 [CSSOM](/zh-CN/docs/Web/API/CSS_Object_Model) 被构造完成之前，浏览器不会渲染任何已处理的内容。CSS 必须很薄，才能尽快交付，建议使用媒体类型和查询实现非阻塞渲染。

```plain
<link href="style.css"    rel="stylesheet" media="all">
<link href="portrait.css" rel="stylesheet" media="orientation:portrait">
<link href="print.css"    rel="stylesheet" media="print">
```

可以执行一些 [CSS 优化](/zh-CN/docs/Learn/Performance/CSS)来实现这一目标。

### Fonts

默认情况下，字体请求会延迟到构造渲染树之前，这可能会导致文本渲染延迟。

It is possible to override the default behaviour and preload web font resources using `<link rel="preload">`, the [CSS font-display property](/zh-CN/docs/Web/CSS/@font-face/font-display), and the [Font Loading API](/zh-CN/docs/Web/API/CSS_Font_Loading_API).

See also: [Element Link](/zh-CN/docs/Web/HTML/Element/link)

### Images and iframes

Very often, webpages contain many images that contribute to data-usage and how fast a page can load. Most of those images are off-screen ([non-critical](/zh-CN/docs/Web/Performance/Critical_rendering_path)), requiring user interaction (an example being scroll) in order to view them.

**Loading** 属性
The {{htmlattrxref("loading", "img")}} attribute on an {{HTMLElement("img")}} element (or the {{htmlattrxref("loading", "iframe")}} attribute on an {{HTMLElement("iframe")}}) can be used to instruct the browser to defer loading of images/iframes that are off-screen until the user scrolls near them.

```plain
<img src="image.jpg" alt="..." loading="lazy">
<iframe src="video-player.html" title="..." loading="lazy"></iframe>
```

The `load` event fires when the eagerly-loaded content has all been loaded; at that time, it's entirely possible (or even likely) that there may be lazily-loaded images that are within the {{Glossary("visual viewport")}} that haven't yet loaded.

You can determine if a given image has finished loading by examining the value of its Boolean {{domxref("HTMLImageElement.complete", "complete")}} property.

**Polyfill**
Include this polyfill to provide support for older and currently incompatible browsers:
[loading-attribute-polyfill](https://github.com/mfranzke/loading-attribute-polyfill)

**交叉观察者 API**
[Intersection Observers](/zh-CN/docs/Web/API/IntersectionObserver) allow the user to know when an observed element enters or exits the browser’s viewport.

**事件处理程序**
当浏览器的兼容性至关重要时，有以下几种选择：

- [polyfill intersection observer](https://github.com/w3c/IntersectionObserver)
- 后退以滚动，调整大小或改变方向的事件处理程序，以确定特定元素是否在视口中

## 规范

{{Specifications}}

## 查看更多

- [Render blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css)
- [Optimizing loading and rendering](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization#optimizing_loading_and_rendering)
- [Lazy loading images and video](https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video)
