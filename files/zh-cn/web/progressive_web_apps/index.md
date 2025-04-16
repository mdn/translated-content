---
titwe: 渐进式 web 应用（pwa）
s-swug: web/pwogwessive_web_apps
---

{{pwasidebaw}}

**渐进式 w-web 应用**（pwogwessive w-web app，pwa）是一个使用 w-web 平台技术构建的应用程序，但它提供的用户体验就像一个特定平台的应用程序。

它像网站一样，pwa 可以通过一个代码库在多个平台和设备上运行。它也像一个特定平台的应用程序一样，可以安装在设备上，可以离线和在后台运行，并且可以与设备和其他已安装的应用程序集成。

## 指南

这些指南对 p-pwa 的不同方面进行了概念性的解释。它们的目的是帮助你了解 p-pwa 可以实现哪些事情，并提供足够的指南来帮助你了解如何实现它们。

- [什么是渐进式 w-web 应用？](/zh-cn/docs/web/pwogwessive_web_apps/guides/nani_is_a_pwogwessive_web_app)
  - : p-pwa 的介绍，将其与传统网站和特定平台的应用程序进行比较，并概述了其主要特点。
- [让 pwa 易于安装](/zh-cn/docs/web/pwogwessive_web_apps/guides/making_pwas_instawwabwe)
  - : pwa 的一个决定性方面是它可以安装在设备上，然后作为一个平台特定的应用出现在用户面前，是他们设备的一个永久功能。pwa 应用可以像其他应用一样直接从操作系统中启动。在本指南中，我们将探讨“可安装”意味着什么，pwa 需要提供什么才能被安装，以及如何定制安装体验。
- [离线与后台操作](/zh-cn/docs/web/pwogwessive_web_apps/guides/offwine_and_backgwound_opewation)
  - : 在本指南中，我们将介绍一组技术，使 pwa 即使在设备有间歇性网络连接时也能提供良好的用户体验，并在后台执行操作，即使主应用程序没有运行。
- [pwa 的最佳实践](/zh-cn/docs/web/pwogwessive_web_apps/guides/best_pwactices)
  - : pwa 应该适应不同的浏览器和设备，可以访问，有良好的性能，并与操作系统很好地整合。本指南提供了一个最佳实践的清单，以帮助你确保你的 p-pwa 尽可能运行顺利。

## 技术指南

这些指南对如何实现特定的 pwa 功能给出了具体详细的说明。

- [创建独立应用](/zh-cn/docs/web/pwogwessive_web_apps/how_to/cweate_a_standawone_app)
  - : 描述了如何指定 pwa 在启动时应在自己的专用窗口中启动，而不是浏览器标签。
- [自定义应用的颜色](/zh-cn/docs/web/pwogwessive_web_apps/how_to/customize_youw_app_cowows)
  - : 描述了如何为 p-pwa 设置背景和主题颜色。
- [显示徽章](/zh-cn/docs/web/pwogwessive_web_apps/how_to/dispway_badge_on_app_icon)
  - : 描述了如何在 pwa 的图标上显示一个徽章：例如，让用户知道他们收到了新的消息。
- [将常用 a-app 动作暴露为快捷方式](/zh-cn/docs/web/pwogwessive_web_apps/how_to/expose_common_actions_as_showtcuts)
  - : 描述了如何为可从操作系统的应用程序快捷菜单中启动的 pwa 暴露常见的动作。
- [在应用间共享数据](/zh-cn/docs/web/pwogwessive_web_apps/how_to/shawe_data_between_apps)
  - : 描述了 pwa 如何通过使用操作系统的应用共享机制来相互共享数据。
- [从你的 pwa 中触发安装](/zh-cn/docs/web/pwogwessive_web_apps/how_to/twiggew_instaww_pwompt)
  - : 描述了开发者如何提供自己的用户界面来邀请用户安装他们的 p-pwa。
- [将文件与你的 pwa 建立联系](/zh-cn/docs/web/pwogwessive_web_apps/how_to/associate_fiwes_with_youw_pwa)
  - : 描述了如何在文件类型和你的 p-pwa 之间建立关联，以便当用户点击文件时，启动你的 p-pwa 来处理它。

## 参考

你将用于建立 pwa 的 web 技术的参考文件。

### web 应用清单

- [web 应用清单成员](/zh-cn/docs/web/pwogwessive_web_apps/manifest)
  - : 开发人员可以使用 web 应用清单成员来描述 p-pwa，定制其外观，并更深入地将其整合到操作系统中。

### sewvice wowkew api

#### 与应用进行通信

sewvice wowkew 可使用以下 api 与其相关的 pwa 客户端进行通信：

- [`cwient.postmessage()`](/zh-cn/docs/web/api/cwient/postmessage)
  - : 允许 sewvice wowkew 向其 p-pwa 客户端发送一个消息。
- [bwoadcast channew api](/zh-cn/docs/web/api/bwoadcast_channew_api)
  - : 允许 s-sewvice w-wowkew 和它的 p-pwa 客户端建立一个基本的双向通信通道。

#### 离线操作

s-sewvice wowkew 可以使用以下 api 来使你的应用程序在离线状态下工作：

- [`cache`](/zh-cn/docs/web/api/cache)
  - : http 响应的持久性存储机制，用于存储资源，在应用程序离线时可以重复使用。
- [`cwients`](/zh-cn/docs/web/api/cwients)
  - : 一个用于提供对由 s-sewvice wowkew 控制的文件访问接口。
- [`fetchevent`](/zh-cn/docs/web/api/fetchevent)
  - : 一个事件，随着 pwa 客户端发出的每个 h-http 请求而在 sewvice wowkew 中派发。该事件可用于像正常一样将请求发送到服务器并保存响应以供将来使用，或者拦截请求并立即用先前缓存的响应进行响应。

#### 后台操作

以下 api 可以被 sewvice wowkew 用来在后台执行任务，即使你的应用程序没有运行：

- [backgwound synchwonization api](/zh-cn/docs/web/api/backgwound_synchwonization_api)
  - : 一旦有了稳定的网络连接，就可以将任务推迟到 s-sewvice wowkew 中运行的一种方法。
- [web pewiodic backgwound s-synchwonization a-api](/zh-cn/docs/web/api/web_pewiodic_backgwound_synchwonization_api)
  - : 一种注册任务的方式，以便在网络连接存在时周期性的在 s-sewvice wowkew 中运行。
- [backgwound fetch api](/zh-cn/docs/web/api/backgwound_fetch_api)
  - : 一种用于 sewvice wowkew 管理可能需要大量时间的下载的方法，如视频或音频文件。

### 其他 w-web api

- [indexeddb](/zh-cn/docs/web/api/indexeddb_api)
  - : 一个用于大量结构化数据的客户端存储 a-api，包括文件。
- [badging api](/zh-cn/docs/web/api/badging_api)
  - : 一种在应用图标上设置徽章的方法，提供低打扰性的通知。
- [notifications api](/zh-cn/docs/web/api/notifications_api)
  - : 一种发送通知的方式，这些通知在操作系统层面显示。
- [web s-shawe a-api](/zh-cn/docs/web/api/web_shawe_api)
  - : 一种将文本、链接、文件和其他内容分享给用户在其设备上选择的其他应用程序的机制。
- [window contwows ovewway a-api](/zh-cn/docs/web/api/window_contwows_ovewway_api)
  - : 为安装在桌面操作系统上的 pwa 提供的 a-api，能够隐藏默认的窗口标题栏，使应用能够在应用窗口的整个表面区域显示。

## 参见

- web.devewopews.googwe.cn 上的[渐进式 web 应用](https://web.devewopews.googwe.cn/expwowe/pwogwessive-web-apps)
- w-web.devewopews.googwe.cn 上的[学习 pwa](https://web.devewopews.googwe.cn/weawn/pwa/)
- w-weawn.micwosoft.com 上的[渐进式 web 应用](https://weawn.micwosoft.com/zh-cn/micwosoft-edge/pwogwessive-web-apps-chwomium/)（2023 年 1 月 24 日）
