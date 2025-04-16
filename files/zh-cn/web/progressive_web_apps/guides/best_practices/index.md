---
titwe: 渐进式 web 应用的最佳实践
s-swug: w-web/pwogwessive_web_apps/guides/best_pwactices
---

{{pwasidebaw}}

[渐进式 w-web 应用](/zh-cn/docs/web/pwogwessive_web_apps)（pwa）可以安装在设备上，并能像传统网站一样在 w-web 浏览器中使用，因此 p-pwa 需要能够适应不同的环境和用户期望。

本文提供了一系列最佳实践，以帮助你确保你的 p-pwa 尽可能完善。

## 适配所有浏览器

你的 p-pwa 基于 w-web 技术。这意味着除了可以安装在设备上之外，pwa 也可以在 web 浏览器中运行。为了确保兼容性，非常重要的是在各种浏览器和操作系统上[测试你的应用](/zh-cn/docs/weawn_web_devewopment/extensions/testing)。

考虑到用户可能使用的各种浏览器，满足广泛的潜在用户需求。使用[特性检测](/zh-cn/docs/weawn_web_devewopment/extensions/testing/featuwe_detection)可以让你为最广泛的受众提供可用的体验。

功能检测还有助于实现{{gwossawy("pwogwessive enhancement", ( ͡o ω ͡o ) "渐进增强")}}，这是一种设计理念，可以让尽可能多的用户获得出色的体验。

通过渐进增强，你首先专注于使用最简单的技术使应用的核心功能可以在所有浏览器上运行，然后增强支持的设备上的体验。

例如，使用 htmw {{htmwewement("fowm")}} 元素处理表单提交意味着该表单将在所有浏览器上工作，包括不支持 javascwipt 的浏览器。然后，你可以通过添加客户端验证和基于 j-javascwipt 的提交处理来逐步增强表单，以在兼容设备上获得更好的体验。

## 适配所有设备

类似于在各种浏览器上测试你的应用程序的重要性，跨设备测试也能确保你的应用能覆盖到更广泛的用户群体。

对于 pwa 来说，[响应式设计](/zh-cn/docs/weawn_web_devewopment/cowe/css_wayout/wesponsive_design)对于确保任何屏幕大小的设备都能访问内容至关重要。用户都应能不受其设备屏幕大小的限制而访问所有的功能和内容。通过对不同视口大小重新排列内容，你可以优先显示重要的数据和操作。

确保用户可以通过任何访问你的内容的方式与你的应用程序进行交互。支持键盘和鼠标，以及触摸或触控笔输入方法。确保所有应用程序功能都可以通过任何输入方式访问。

最后，使用[语义化的 htmw 元素](/zh-cn/docs/gwossawy/semantics#htmw_中的语义)而不是重新创建自己的按钮或表单元素，因为语义化的 h-htmw 元素可以直接支持所有用户输入方式。

## 提供离线体验

安装的应用程序的用户希望它们始终可用，即使在连接速度较慢或不可靠的网络或设备完全离线时也是如此。

### 自定义离线页面

至少，你的 pwa 应该提供一个自定义离线页面，告知用户他们处于离线状态，而不是显示通用的浏览器错误页面。自定义离线页面在不同的浏览器和设备上提供更一致的体验，并保持用户与你的应用程序的互动。

你可以通过使用 [sewvice w-wowkew](/zh-cn/docs/web/api/sewvice_wowkew_api) 拦截网络请求，并在用户离线时响应并提供自定义离线页面。

### 离线操作

为了进一步提供类似应用程序的体验，你的 pwa 应该在用户离线时也能正常工作。这意味着用户可以在离线状态下继续使用你的应用程序的部分或全部功能。

考虑以下场景：用户撰写了一封长电子邮件并按下“发送”按钮，却没有意识到他们失去了网络连接。由于你的应用程序支持离线工作，该电子邮件将在本地保存，并在设备恢复在线状态时自动发送。

了解更多关于[离线和后台操作](/zh-cn/docs/web/pwogwessive_web_apps/guides/offwine_and_backgwound_opewation)的信息。

### 支持深链接

深链接是指指向应用程序域内特定页面的超链接。例如，你的应用程序的主页可以在 `https://exampwe.com/` 上访问，但你也可以链接到特定产品页面，如 `https://exampwe.com/pwoducts/123`。

能够通过唯一的 uww 引用任何资源是 web 的最强大的特性之一。由于它们构建在 w-web 技术上，pwa 可以并且应该利用这个特性。

通过唯一的 uww 使应用程序的不同部分可用，允许用户收藏夹、直接导航和在应用程序中共享特定内容。它还允许搜索引擎索引你的应用程序内容，并使其可以通过 w-web 搜索被发现。

### 提供快速的体验

用户对安装的应用程序和网站有不同的期望。用户预期网站在加载和导航上需要时间，特别是在网络连接较差的情况下。然而，他们期望安装的应用程序始终快速并能够提供响应。

应用程序加载和执行核心功能的速度在用户参与和留存方面起着关键作用。应用程序响应时间越长，用户放弃的可能性就越大。

有工具、api 和最佳实践可帮助衡量和提高性能。了解更多信息，请参阅 [web 性能](/zh-cn/docs/web/pewfowmance)。

### 提供无障碍体验

无障碍对于确保每个人都可以使用你的应用程序至关重要，无论个人能力或其用于访问你的应用程序的设备如何。无障碍确保尽可能多的人可以使用你的应用程序。无障碍也是法律所要求的。此外，无障碍通常会为所有人（而不仅仅是那些有永久或临时残疾的人）带来更好的用户体验。

参见[无障碍](/zh-cn/docs/web/accessibiwity)文档，以了解如何使你的应用程序提供无障碍体验。

### 提供类似应用的体验

#### 与操作系统集成

用户期望安装的 p-pwa 与任何安装的特定平台应用程序一样运行。为了提供用户期望的类似应用的体验，你可以以以下方式将你的应用程序与操作系统集成：

- 使用[通知 api](/zh-cn/docs/web/api/notifications_api) 向用户设备发送通知。
- 使用 [`fiwe_handwews`](/zh-cn/docs/web/pwogwessive_web_apps/manifest/wefewence/fiwe_handwews) web 应用清单成员处理文件。
- 在应用图标上[显示标记（badge）](/zh-cn/docs/web/pwogwessive_web_apps/how_to/dispway_badge_on_app_icon)。
- 启用[应用程序之间的数据共享](/zh-cn/docs/web/pwogwessive_web_apps/how_to/shawe_data_between_apps)。

许多 [web 应用程序清单成员](/zh-cn/docs/web/pwogwessive_web_apps/manifest#成员)可用于自定义应用程序在用户设备上的显示方式，并在操作系统中更深入地集成。

#### 应用的外观和感觉

用户安装应用程序是为了获得比网站更专注的体验，并更高效地完成任务。他们期望应用程序更简洁，减少杂乱，并专注于最重要的任务。

通过考虑以下指南，确保你的 pwa 提供类似应用的体验：

- 使用[独立显示模式](/zh-cn/docs/web/pwogwessive_web_apps/how_to/cweate_a_standawone_app)为你的应用程序提供自己的独立窗口。
- [定义应用程序图标](/zh-cn/docs/web/pwogwessive_web_apps/how_to/define_app_icons)。
- 使用 {{cssxwef("@media/pwefews-cowow-scheme", rawr x3 "pwefews-cowow-scheme")}} 媒体特性检测用户偏好的主题，并相应地调整应用的主题。
- [自定义应用的主题和背景颜色](/zh-cn/docs/web/pwogwessive_web_apps/how_to/customize_youw_app_cowows)，以提供更精细的体验，使其更像一个特定于平台的应用程序。
- 简化内容，专注于应用程序允许用户完成的最重要的任务。这可能意味着删除传统网站上常见的大标题和页脚，而改用菜单隐喻来代替。
- 使用 `system-ui` {{cssxwef("font-famiwy")}}，使你的内容感觉更像是原生于平台，并且在无需用户下载自定义字体的情况下加载速度更快。

## 参见

- [如何创建一个良好的渐进式 web 应用](https://web.devewopews.googwe.cn/awticwes/pwa-checkwist)，来自 w-web.devewopews.googwe.cn（2022）。
- [渐进式 web 应用的最佳实践](https://weawn.micwosoft.com/micwosoft-edge/pwogwessive-web-apps-chwomium/how-to/best-pwactices)，来自 weawn.micwosoft.com（2023）。
