---
title: 什么是渐进式 web 应用？
slug: Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app
---

{{PWASidebar}}

渐进式 web 应用（PWA）是一种使用 web 平台技术构建的应用，但它提供了类似于平台特定应用的用户体验。

## 平台特定应用

*平台特定应用*是针对特定操作系统（OS）和/或设备类别开发的，例如 iOS 或 Android 设备，通常使用平台供应商提供的 SDK。它们通常通过供应商的应用商店分发，用户可以在那里找到和安装它们，它们随后对用户来说就像是他们设备的一个永久附加特性，以某种方式扩展了其功能。

平台特定应用的好处包括：

- **用户易于访问**：它们在设备上有自己的图标，使用户容易找到和打开它们。
- **离线和后台操作**：它们能够在用户没有与之交互和设备离线时运行。这使得例如聊天应用可以在没有打开时接收消息，并向用户显示通知。它还使得新闻应用可以在后台更新，以便即使设备离线也可以显示新鲜的内容。
- **专用 UI**：它们可以实现自己独特的、沉浸式的 UI。
- **操作系统集成**：它们可以与主机操作系统集成：例如，一个消息应用可以注册为一个分享目标，使用户可以在照片应用中选择一张图片并使用消息应用发送。它们还可以访问设备特性，如相机、GPS 或加速度计。
- **应用商店集成**：它们通过应用商店分发，给用户一个单一的地方来找到它们，并且提供一种一致的方式来决定是否要安装它们。

## 传统网站

传统上，网站更像是“用户访问的地方”，而不是“用户拥有的东西”。通常，一个网站：在用户不访问它时，在用户的设备上没有存在感，只能通过用户打开浏览器并导航到该网站来访问，而且高度依赖于网络连接。

然而，网站相比平台特定应用有一些好处，包括：

- **单一代码库**：因为 web 本身就是跨平台的，一个网站可以从一个代码库运行在不同的操作系统和设备类别上。
- **通过 web 分发**：web 是一个很好的分发平台。网站被搜索引擎索引，并且可以通过 URL 来分享和访问。一个网站可以分发而无需注册任何供应商的应用商店。

## 渐进式 web 应用

渐进式 web 应用结合了传统网站和平台特定应用的最佳特性。

PWA 具有网站的优势，包括：

- PWA 是使用标准的 web 平台技术开发的，所以它们可以从单一代码库在多个操作系统和设备类上运行。
- PWA 可以直接通过 web 访问。

PWA 也具有平台特定应用程序的许多优势，包括：

- [**PWA 可以安装在设备上**](/zh-CN/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)。这意味着：
  - PWA 可以从平台的应用商店安装，也可以直接从 web 安装。
  - PWA 可以像平台特定的应用程序一样安装，并可以自定义安装过程。
  - 一旦安装，PWA 会在设备上得到一个应用图标，与平台特定应用程序一样。
  - 一旦安装，PWA 可以作为独立的应用程序启动，而不是作为浏览器中的网站。

- [**PWA 可以在后台与离线操作**](/zh-CN/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)：一个典型的网站只在被浏览器加载后才处于活动状态。PWA 可以：
  - 在设备没有网络连接时工作。
  - 在后台更新内容。
  - 对来自服务器的[推送消息](/zh-CN/docs/Web/API/Push_API)做出响应。
  - 使用操作系统的[通知](/zh-CN/docs/Web/API/Notifications_API)系统显示通知。

- PWA 可以[使用整个屏幕](/zh-CN/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app)，而不是在浏览器 UI 中运行。
- PWA 可以与设备集成，注册为共享目标和来源，并访问设备特性。
- PWA 可以在应用商店以及通过 web 公开发布。

### PWA 和浏览器

当你在浏览器中访问一个网站时，从视觉上可以明显看出网站是“运行在浏览器中的”。浏览器 UI 为网站提供了一个可见的框架，包括后退/前进按钮等 UI 功能和页面的标题。你的网站调用的 Web API 是由浏览器引擎实现的。

PWA 通常看起来像平台特定应用程序——它们通常是在没有浏览器 UI 环绕的情况下显示的——但从技术上讲，它们仍然是网站。这意味着它们需要一个浏览器引擎，如 Chrome 或 Firefox 中的引擎，来管理和运行它们。对于平台特定应用程序，平台操作系统管理这个应用程序，提供其运行的环境。对于 PWA，浏览器引擎执行这一后台角色，就像它对普通网站所做的一样。

![比较传统网站、PWA 和平台特定应用程序的运行时环境的图表](pwa-environment.svg)

在我们的 PWA 文档中，我们有时会提到浏览器在后台发挥这种作用。例如，我们可能会说，“当收到推送通知时，浏览器会启动 PWA 的 service worker。”在这种情况下，浏览器的活动完全在后台。从 PWA 的角度来看，它也可以由操作系统启动。对于某些系统，如 Chromebook，“浏览器”和“操作系统”之间可能根本没有区别。

### PWA 的技术特性

因为 PWA 是网站，所以它们具有与任何其他网站相同的基本特性：至少有一个 HTML 页面，其可能会加载一些 CSS 和 JavaScript。与普通网站一样，页面加载的 JavaScript 具有一个全局的 {{domxref("Window")}} 对象，并且可以通过该对象访问所有可用的 Web API。

除此之外，PWA 还具有一些额外的特性：

- 一个 [web 应用程序清单](/zh-CN/docs/Web/Progressive_web_apps/Manifest)文件，至少提供浏览器需要的信息来安装 PWA，如应用程序名称和图标。

- 一个 [service worker](/zh-CN/docs/Web/API/Service_Worker_API)，至少提供基本的脱机体验。

#### Web 应用程序清单

PWA 必须有一个 web 应用程序清单，并且[清单必须包含足够的信息以便浏览器安装 PWA](/zh-CN/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest)。

清单可以定义 PWA 外观的许多其他方面，比如[主题颜色](/zh-CN/docs/Web/Progressive_web_apps/Manifest/Reference/theme_color)和[背景颜色](/zh-CN/docs/Web/Progressive_web_apps/Manifest/Reference/background_color)，以及其行为，包括其[充当其他应用程序数据的共享目标](/zh-CN/docs/Web/Progressive_web_apps/Manifest/Reference/share_target)的能力或[处理特定文件类型](/zh-CN/docs/Web/Progressive_web_apps/Manifest/Reference/file_handlers)的能力。

#### Service worker

PWA 必须有一个 service worker，并且 service worker 必须实现至少最小程度的脱机体验。

service worker 鼓励一种架构，其中应用程序的页面（即网站的传统部分）实现用户界面，service worker 实现可以支持[脱机和后台操作](/zh-CN/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)的后端，使 PWA 的行为更像应用程序而不是网站。这是因为 service worker 可以在需要时（例如，处理推送通知）由浏览器在后台启动。

### PWA 和单页应用

传统上，网站是作为相互链接的页面集合构建的。当用户从站点的一个页面点击链接到同一站点的另一个页面时，浏览器会将新页面作为一个完全新的实体加载，包括 HTML 和 HTML 加载的子资源，如 CSS 和 JavaScript。在{{Glossary("SPA", "单页应用")}}中，站点由一个 HTML 页面组成，当用户点击内部链接时，由 JavaScript 从服务器获取新内容并更新页面的相关部分来处理。

单页应用可以提供更接近平台特定应用程序的用户体验，所以 PWA 通常以单页应用实现。特别是，单页应用使实现无缝的用户界面变得更加容易，在该用户界面中，用户被呈现一个单一、一致的页面，只更新页面相关部分以响应用户与应用程序的交互。

然而，PWA 不必是单页应用，单页应用也不必是 PWA。

### 渐进增强

虽然{{Glossary("Progressive Enhancement", "渐进增强")}}是大多数网站的一个理想的属性，但对于 PWA 来说尤其重要，因为它们期望在广泛的设备上运行，并且通常使用可能不被所有浏览器支持的高级 Web API。

渐进增强的一个基本组成部分是，如果用户通过在浏览器中输入其 URL 的方式在网络上访问你的 PWA，则用户可以像访问普通网站一样与应用程序交互。但是如果浏览器可以安装它，则会提示用户安装它，并且该应用程序将作为设备上的新功能出现。

PWA 应该对高级 API 执行特性检测并提供可接受的回退体验。

例如，[后台同步 API](/zh-CN/docs/Web/API/Background_Synchronization_API) 使 PWA 可以要求服务工作线程在设备连接时尽快发出网络请求。这个经典的用例是消息传递。假设用户编写了一条消息，但当用户尝试发送消息时，设备处于离线状态。后台同步 API 使设备能够在连上网后在后台发送消息。在不支持后台同步的设备上，该应用程序应该让用户知道消息无法发送，并给他们再次重试的机会。
