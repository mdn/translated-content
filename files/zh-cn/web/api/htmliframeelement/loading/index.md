---
title: HTMLIFrameElement：loading 属性
slug: Web/API/HTMLIFrameElement/loading
l10n:
  sourceCommit: 0c45d0d3ec3e3eeb80fcf2101a30704dae7c8ee9
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLIFrameElement")}} 接口的 **`loading`** 属性为{{Glossary("user agent", "用户代理")}}提供一个提示字符串，表示是否应在页面加载时立即加载 [iframe](/zh-CN/docs/Web/HTML/Element/iframe)，或者仅在需要时才加载。

这可用于优化文档内容的加载。在页面加载时可见的 iframe 可以立即（急切地）下载，而可能在初始页面加载时位于屏幕外的 iframe 可以懒加载——在它们出现在窗口的{{Glossary("visual viewport", "可视化视口")}}之前执行。

## 值

一个字符串，用于提示用户代理如何最好地安排 iframe 的加载时间。可能的值有：

- `eager`
  - : 处理元素后立即加载 iframe。这是默认设置。
- `lazy`
  - : 当浏览器认为在不久的将来可能需要时，加载 iframe。

## 使用说明

### 必须启用 JavaScript

只有启用 JavaScript 时才会延迟加载，与属性的值无关。

这是一种反跟踪措施，因为如果用户代理在禁用脚本的情况下支持懒加载，网站仍然可以通过在页面标记中战略性地放置 iframe 来跟踪用户会话中的大致滚动位置，以便服务器可以跟踪请求多个 iframe 以及何时请求。

### 加载事件的时间

当文档已被完全处理时，将触发 {{domxref("Window.load_event", "load")}} 事件。

即使 iframe 位于可视视口并在页面加载时被请求，懒加载的 iframe 也不会影响 `load` 事件的时机。只有当文档中所有急切加载的 iframe 都被请求后，才能触发 `load` 事件。

## 示例

以下示例展示了如何定义一个懒加载的 iframe，然后将其附加到文档中的 `<div>`。只有当 iframe 即将变得可见时，才会加载 iframe。

```js
// 在 iframe 中定义懒加载
const iframe = document.createElement("iframe");
iframe.src = "https://example.com";
iframe.width = 320;
iframe.height = 240;
iframe.loading = "lazy";

// 添加到类名为 frameDiv 的 div 元素中
const frameDiv = document.querySelector("div.frameDiv");
frameDiv.appendChild(iframe);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("iframe")}} 元素
- MDN 学习区的 [Web 性能](/zh-CN/docs/Learn/Performance)
- MDN 网络性能指南中的[懒加载](/zh-CN/docs/Web/Performance/Lazy_loading)
- web.dev 上的[是时候懒加载屏幕外的 iframe 了！](https://web.dev/articles/iframe-lazy-loading)
