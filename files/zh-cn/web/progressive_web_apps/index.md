---
title: 渐进式 Web 应用（PWA）
slug: Web/Progressive_web_apps
---

{{PWASidebar}}

**渐进式 Web 应用**（Progressive Web App，PWA）是一个使用 web 平台技术构建的应用程序，但它提供的用户体验就像一个特定平台的应用程序。

它像网站一样，PWA 可以通过一个代码库在多个平台和设备上运行。它也像一个特定平台的应用程序一样，可以安装在设备上，可以离线和在后台运行，并且可以与设备和其他已安装的应用程序集成。

## 指南

这些指南对 PWA 的不同方面进行了概念性的解释。它们的目的是帮助你了解 PWA 可以实现哪些事情，并提供足够的指南来帮助你了解如何实现它们。

- [什么是渐进式 web 应用？](/zh-CN/docs/Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app)
  - : PWA 的介绍，将其与传统网站和特定平台的应用程序进行比较，并概述了其主要特点。
- [让 PWA 易于安装](/zh-CN/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
  - : PWA 的一个决定性方面是它可以安装在设备上，然后作为一个平台特定的应用出现在用户面前，是他们设备的一个永久功能。PWA 应用可以像其他应用一样直接从操作系统中启动。在本指南中，我们将探讨“可安装”意味着什么，PWA 需要提供什么才能被安装，以及如何定制安装体验。
- [离线与后台操作](/zh-CN/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)
  - : 在本指南中，我们将介绍一组技术，使 PWA 即使在设备有间歇性网络连接时也能提供良好的用户体验，并在后台执行操作，即使主应用程序没有运行。
- [PWA 的最佳实践](/zh-CN/docs/Web/Progressive_web_apps/Guides/Best_practices)
  - : PWA 应该适应不同的浏览器和设备，可以访问，有良好的性能，并与操作系统很好地整合。本指南提供了一个最佳实践的清单，以帮助你确保你的 PWA 尽可能运行顺利。

## 技术指南

这些指南对如何实现特定的 PWA 功能给出了具体详细的说明。

- [创建独立应用](/zh-CN/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app)
  - : 描述了如何指定 PWA 在启动时应在自己的专用窗口中启动，而不是浏览器标签。
- [自定义应用的颜色](/zh-CN/docs/Web/Progressive_web_apps/How_to/Customize_your_app_colors)
  - : 描述了如何为 PWA 设置背景和主题颜色。
- [显示徽章](/zh-CN/docs/Web/Progressive_web_apps/How_to/Display_badge_on_app_icon)
  - : 描述了如何在 PWA 的图标上显示一个徽章：例如，让用户知道他们收到了新的消息。
- [将常用 app 动作暴露为快捷方式](/zh-CN/docs/Web/Progressive_web_apps/How_to/Expose_common_actions_as_shortcuts)
  - : 描述了如何为可从操作系统的应用程序快捷菜单中启动的 PWA 暴露常见的动作。
- [在应用间共享数据](/zh-CN/docs/Web/Progressive_web_apps/How_to/Share_data_between_apps)
  - : 描述了 PWA 如何通过使用操作系统的应用共享机制来相互共享数据。
- [从你的 PWA 中触发安装](/zh-CN/docs/Web/Progressive_web_apps/How_to/Trigger_install_prompt)
  - : 描述了开发者如何提供自己的用户界面来邀请用户安装他们的 PWA。
- [将文件与你的 PWA 建立联系](/zh-CN/docs/Web/Progressive_web_apps/How_to/Associate_files_with_your_PWA)
  - : 描述了如何在文件类型和你的 PWA 之间建立关联，以便当用户点击文件时，启动你的 PWA 来处理它。

## 参考

你将用于建立 PWA 的 web 技术的参考文件。

### Web 应用清单

- [Web 应用清单成员](/zh-CN/docs/Web/Progressive_web_apps/Manifest)
  - : 开发人员可以使用 web 应用清单成员来描述 PWA，定制其外观，并更深入地将其整合到操作系统中。

### Service Worker API

#### 与应用进行通信

Service worker 可使用以下 API 与其相关的 PWA 客户端进行通信：

- [`Client.postMessage()`](/zh-CN/docs/Web/API/Client/postMessage)
  - : 允许 service worker 向其 PWA 客户端发送一个消息。
- [Broadcast Channel API](/zh-CN/docs/Web/API/Broadcast_Channel_API)
  - : 允许 service worker 和它的 PWA 客户端建立一个基本的双向通信通道。

#### 离线操作

Service worker 可以使用以下 API 来使你的应用程序在离线状态下工作：

- [`Cache`](/zh-CN/docs/Web/API/Cache)
  - : HTTP 响应的持久性存储机制，用于存储资源，在应用程序离线时可以重复使用。
- [`Clients`](/zh-CN/docs/Web/API/Clients)
  - : 一个用于提供对由 service worker 控制的文件访问接口。
- [`FetchEvent`](/zh-CN/docs/Web/API/FetchEvent)
  - : 一个事件，随着 PWA 客户端发出的每个 HTTP 请求而在 service worker 中派发。该事件可用于像正常一样将请求发送到服务器并保存响应以供将来使用，或者拦截请求并立即用先前缓存的响应进行响应。

#### 后台操作

以下 API 可以被 service worker 用来在后台执行任务，即使你的应用程序没有运行：

- [Background Synchronization API](/zh-CN/docs/Web/API/Background_Synchronization_API)
  - : 一旦有了稳定的网络连接，就可以将任务推迟到 service worker 中运行的一种方法。
- [Web Periodic Background Synchronization API](/zh-CN/docs/Web/API/Web_Periodic_Background_Synchronization_API)
  - : 一种注册任务的方式，以便在网络连接存在时周期性的在 service worker 中运行。
- [Background Fetch API](/zh-CN/docs/Web/API/Background_Fetch_API)
  - : 一种用于 service worker 管理可能需要大量时间的下载的方法，如视频或音频文件。

### 其他 web API

- [IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API)
  - : 一个用于大量结构化数据的客户端存储 API，包括文件。
- [Badging API](/zh-CN/docs/Web/API/Badging_API)
  - : 一种在应用图标上设置徽章的方法，提供低打扰性的通知。
- [Notifications API](/zh-CN/docs/Web/API/Notifications_API)
  - : 一种发送通知的方式，这些通知在操作系统层面显示。
- [Web Share API](/zh-CN/docs/Web/API/Web_Share_API)
  - : 一种将文本、链接、文件和其他内容分享给用户在其设备上选择的其他应用程序的机制。
- [Window Controls Overlay API](/zh-CN/docs/Web/API/Window_Controls_Overlay_API)
  - : 为安装在桌面操作系统上的 PWA 提供的 API，能够隐藏默认的窗口标题栏，使应用能够在应用窗口的整个表面区域显示。

## 参见

- web.developers.google.cn 上的[渐进式 web 应用](https://web.developers.google.cn/explore/progressive-web-apps)
- web.developers.google.cn 上的[学习 PWA](https://web.developers.google.cn/learn/pwa/)
- learn.microsoft.com 上的[渐进式 web 应用](https://learn.microsoft.com/zh-cn/microsoft-edge/progressive-web-apps-chromium/)（2023 年 1 月 24 日）
