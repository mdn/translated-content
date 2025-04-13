---
title: 视图过渡 API
slug: Web/API/View_Transition_API
l10n:
  sourceCommit: ad896488bf8fac04fc6fa144c441fdbfd880737c
---

{{DefaultAPISidebar("View Transition API")}}

**视图过渡 API**（View Transition API）提供了一种轻松地创建不同网站视图之间的动画过渡的机制。这包括在单页应用（SPA）中的 DOM 状态之间设置动画，以及在多页应用（MPA）中的文档之间的导航设置动画。

## 概念和用法

视图过渡是一种流行的设计选择，可以减少用户认知负荷，帮助他们保持上下文，并减少他们在应用程序的状态或视图之间移动时感知的加载延迟。

但是，在 Web 上创建视图过渡历来很困难：

- 在单页应用程序（SPA）中，状态之间的过渡往往需要编写大量的 CSS 和 JavaScript 来实现：
  - 处理新旧内容的加载和定位。
  - 为新旧状态添加动画以创建过渡。
  - 防止用户与旧内容的意外交互而导致的问题。
  - 完成过渡后删除旧内容。
    也可能由于新旧内容同时存在于 DOM 中而导致像阅读位置丢失、焦点混乱和实时区域宣告的奇怪行为等无障碍问题
- 跨文档视图过渡（即 MPA 中不同页面之间的导航）在历史上是不可能的。

视图过渡 API 为上述两种用例提供了一种简单的方法来处理所需的视图更改和过渡动画。

创建使用浏览器默认过渡动画的视图过渡非常快，并且有一些特性允许你为 SPA 和 MPA 视图过渡自定义过渡动画并操纵视图过渡本身（例如指定跳过动画的情况）。

有关更多信息，请参阅[使用视图过渡 API](/zh-CN/docs/Web/API/View_Transition_API/Using)。

## 接口

- {{domxref("ViewTransition")}}
  - : 表示视图过渡，并提供了在过渡到达不同状态时运行代码（例如，准备运行动画或动画完成）或跳过视图过渡的功能。

## 对其他接口的扩展

- {{domxref("Document.startViewTransition()")}}
  - : 开始新的单页（SPA）视图过渡并返回一个表示它的 {{domxref("ViewTransition")}} 对象。
- {{domxref("PageRevealEvent")}}
  - : {{domxref("Window.pagereveal_event", "pagereveal")}} 事件的事件对象。在跨文档导航过程中，如果导航触发了视图过渡，则它允许你从被导航到的*目标*的文档操作相关的视图过渡（提供对相关 {{domxref("ViewTransition")}} 对象的访问）。
- {{domxref("PageSwapEvent")}}
  - : {{domxref("Window.pageswap_event", "pageswap")}} 事件的事件对象。在跨文档导航过程中，如果导航触发了视图过渡，它允许你从正在导航*来源*的文档操纵相关的视图过渡（提供对相关 {{domxref("ViewTransition")}} 对象的访问）。它还提供对导航类型以及当前和目标文档历史条目信息的访问。
- {{domxref("Window")}} {{domxref("Window.pagereveal_event", "pagereveal")}} 事件
  - : 当文档首次渲染时触发，无论是从网络加载新文档还是激活文档（从[后退/前进缓存](/zh-CN/docs/Glossary/bfcache)（bfcache）或 [prerender](/zh-CN/docs/Glossary/Prerender)）。
- {{domxref("Window")}} {{domxref("Window.pageswap_event", "pageswap")}} 事件
  - : 当文档因导航而即将卸载时触发。

## HTML 扩展

- [`<link rel="expect">`](/zh-CN/docs/Web/HTML/Reference/Attributes/rel#expect)
  - : 为用户的页面初始视图标识关联文档中最关键的内容。在解析关键内容之前，文档呈现将被阻碍，以确保在所有支持的浏览器上进行一致的首次绘制，从而实现视图过渡。

## CSS 扩展

### At 规则

- {{cssxref("@view-transition")}}
  - : 在跨文档导航的情况下，`@view-transition` 用于选择当前和目标文档进行视图过渡。

### 属性

- {{cssxref("view-transition-name")}}
  - : 为选定的元素提供单独的标识名称，并使其参与与根视图过渡不同的单独的视图过渡——或者如果指定了 `none` 值，则不参与视图过渡。

### 伪元素

- {{cssxref("::view-transition")}}
  - : 视图过渡叠加层的根元素，它包含所有视图过渡且位于所有其他页面内容的顶部。
- {{cssxref("::view-transition-group", "::view-transition-group()")}}
  - : 单个视图过渡的根元素。
- {{cssxref("::view-transition-image-pair", "::view-transition-image-pair()")}}
  - : 视图过渡的旧视图和新视图的容器——过渡前和过渡后。
- {{cssxref("::view-transition-old", "::view-transition-old()")}}
  - : 过渡前的旧视图的静态快照。
- {{cssxref("::view-transition-new", "::view-transition-new()")}}
  - : 过渡后的新视图的实时表示。

## 示例

- [基础视图过渡演示](https://mdn.github.io/dom-examples/view-transitions/spa/)：一个基本的带有视图过渡的图像库演示，新旧图像和新旧字幕之间都有单独的动画。
- [基本视图过渡 MPA 演示](https://mdn.github.io/dom-examples/view-transitions/mpa/)：一个两页的示例网站，演示了跨文档（MPA）视图过渡的使用，在两页之间导航时提供自定义的“向上滑动”过渡。
- [HTTP 203 播放列表](https://http203-playlist.netlify.app/)：一个更复杂的视频播放器演示应用程序，包含了许多不同的视图过渡，在[使用视图过渡 API 实现平滑过渡](https://developer.chrome.google.cn/docs/web-platform/view-transitions)中解释了其中的很多视图过渡。
- [Chrome DevRel 团队成员列表](https://view-transitions.chrome.dev/profiles/mpa/)：一个基本的团队配置文件页面应用程序，演示如何使用 {{domxref("Window.pagereveal_event", "pagereveal")}} 和 {{domxref("Window.pageswap_event", "pageswap")}} 事件基于“来源”和“目标”URL 自定义跨文档视图过渡的传出和传入动画。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- developer.chrome.com（2024）上的[使用视图过渡 API 实现平滑过渡](https://developer.chrome.google.cn/docs/web-platform/view-transitions)
- stackdiary.com（2023）上的[视图过渡 API：创建平滑的视图过渡](https://stackdiary.com/view-transitions-api/)
- DebugBear（2024）上的[视图过渡 API：无需框架的单页应用程序](https://www.debugbear.com/blog/view-transitions-spa-without-framework)
