---
title: 链接类型：preload
slug: Web/HTML/Attributes/rel/preload
---

{{HTMLSidebar}}

{{HTMLElement("link")}} 元素的 [`rel`](/zh-CN/docs/Web/HTML/Element/link#rel) 属性的 `preload` 值允许你在 HTML 的 {{htmlelement("head")}} 中声明获取请求，指定页面很快就需要的资源，这些资源是你希望在页面生命周期的早期就开始加载的，早于浏览器的主要渲染机制启动。这可以确保它们更早可用，并且不太可能阻塞页面的渲染，从而提高性能。尽管名称中包含“load”一词，但它并不加载和执行脚本，而只是安排脚本以更高的优先级进行下载和缓存。

更多细节见[通过 rel="preload"进行内容预加载](/zh-CN/docs/Web/HTML/Preloading_content)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
