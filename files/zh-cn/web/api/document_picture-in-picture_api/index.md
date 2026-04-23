---
title: Document Picture-in-Picture API
slug: Web/API/Document_Picture-in-Picture_API
l10n:
  sourceCommit: 26aaa0b6f92933d915563b1d1210cc46f4ec0e09
---

{{SeeCompatTable}}{{DefaultAPISidebar("Document Picture-in-Picture API")}}{{securecontext_header}}

**Document Picture-in-Picture API** 可以打开一个始终在顶层的窗口，该窗口可以填充任意 HTML 内容——例如带有自定义控件的视频或一组显示视频会议参与者的串流。它扩展了早期的 [`<video>` 的 Picture-in-Picture API](/zh-CN/docs/Web/API/Picture-in-Picture_API)，该 API 专用于将 HTML {{htmlelement("video")}} 元素放入始终在顶层的窗口中。

## 概念和用法

除了运行 Web 应用的主窗口之外，为 Web 应用提供不同的窗口通常很有帮助。你可能希望在浏览其他窗口的同时保持特定应用内容的可见性，或者你可能希望为该内容提供自己的空间，同时保持主应用窗口可用以显示其他内容。你可以通过打开一个常规的新浏览器窗口来处理此问题，但这有两个主要问题：

1. 你必须处理两个窗口之间的状态信息共享。
2. 附加应用窗口并不总是位于顶层，因此可能会被其他窗口隐藏。

为了解决这些问题，web 浏览器引入了 API，允许应用生成属于同一会话且始终在顶层的窗口。第一个公认的用例是让视频内容在单独的窗口中播放，以便用户可以在查看其他内容的同时继续观看视频。这是使用 [`<video>` 的 Picture-in-Picture API](/zh-CN/docs/Web/API/Picture-in-Picture_API) 来处理的，它直接用于将 {{htmlelement("video")}} 元素放入单独的窗口中。

然而，我们发现此 API 存在一定限制——你只能将单个 `<video>` 元素放入始终在顶层的窗口中，并且浏览器生成的控件数量极少。**Document Picture-in-Picture API** 的引入带来来更大的灵活性。这允许将*任何*内容放置在始终在顶层的窗口中，以用于各种用例，包括：

- 始终位于顶层的自定义视频播放器，显示一个或多个具有自定义控件和样式的视频。
- 视频会议系统，允许用户始终看到其他参与者的串流，以及用于呈现内容、静音、结束通话等的控件。
- 始终可见的生产力工具，如计时器、笔记、待办事项列表、信使工具等。
- 一个单独的窗口，用于保存其他内容，同时保持主应用窗口整洁。例如，你可能正在运行一个动作或角色扮演游戏，你想在另一个窗口中显示游戏控件、说明或故事设定，同时保持主窗口空闲以显示游戏位置和地图。

### 它是如何工作的？

可通过 {{domxref("Window.documentPictureInPicture")}} 属性获取新的 {{domxref("DocumentPictureInPicture")}} 对象实例，该实例表示当前文档上下文中始终处于顶层的画中画窗口。画中画窗口通过调用 {{domxref("DocumentPictureInPicture.requestWindow()")}} 方法打开，该方法返回一个 {{jsxref("Promise")}}，其会兑现一个画中画窗口自己的 {{domxref("Window")}} 对象。

画中画窗口类似于通过 {{domxref("Window.open()")}} 打开的空白同源窗口，但有一些区别：

- 画中画窗口浮动在其他窗口之上。
- 画中画窗口的寿命永远不会超过打开的窗口。
- 画中画窗口无法导航。
- 网站无法设置画中画窗口的位置。
- 每个浏览器标签页每次只能打开一个画中画窗口，用户代理可能会进一步限制全局打开的画中画窗口的数量。

除此之外，你还可以随意操作画中画窗口的 `Window` 实例，例如将要显示的内容附加到其 DOM 上，并将样式表复制到其中，以便附加的内容的样式与在主窗口中时相同。你还可以关闭画中画窗口（通过单击浏览器提供的控件，或在其上运行 {{domxref("Window.close()")}}），然后使用标准 [`pagehide`](/zh-CN/docs/Web/API/Window/pagehide_event) 事件对其关闭做出反应。当它关闭时，你需要将其显示的内容放回主应用程序窗口。

详细使用指南请参阅[使用 Document Picture-in-Picture API](/zh-CN/docs/Web/API/Document_Picture-in-Picture_API/Using)。

## 接口

- {{domxref("DocumentPictureInPicture")}}
  - : 创建和处理文档画中画窗口的入口点。
- {{domxref("DocumentPictureInPictureEvent")}}
  - : {{domxref("DocumentPictureInPicture/enter_event", "enter")}} 事件的事件对象，该事件在画中画窗口打开时触发。

## 其他接口的扩展

- {{domxref("Window.documentPictureInPicture")}}
  - : 返回对当前文档上下文的 {{domxref("DocumentPictureInPicture")}} 对象的引用。

## CSS 补充

- {{cssxref("@media/display-mode", "display-mode")}}，`picture-in-picture` 值
  - : 一个 [CSS](/zh-CN/docs/Web/CSS) [媒体特性](/zh-CN/docs/Web/CSS/Reference/At-rules/@media#媒体特性)值，允许开发人员根据文档是否处于画中画模式显示来将 CSS 应用于文档。

## 示例

请参阅 [Document Picture-in-Picture API 示例](https://mdn.github.io/dom-examples/document-picture-in-picture/)获取完整的可运行演示（另请参阅完整的[源代码](https://github.com/mdn/dom-examples/tree/main/document-picture-in-picture)）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
