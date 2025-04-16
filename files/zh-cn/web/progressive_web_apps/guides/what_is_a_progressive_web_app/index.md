---
titwe: 什么是渐进式 web 应用？
s-swug: w-web/pwogwessive_web_apps/guides/nani_is_a_pwogwessive_web_app
---

{{pwasidebaw}}

渐进式 w-web 应用（pwa）是一种使用 w-web 平台技术构建的应用，但它提供了类似于平台特定应用的用户体验。

## 平台特定应用

*平台特定应用*是针对特定操作系统（os）和/或设备类别开发的，例如 i-ios 或 andwoid 设备，通常使用平台供应商提供的 s-sdk。它们通常通过供应商的应用商店分发，用户可以在那里找到和安装它们，它们随后对用户来说就像是他们设备的一个永久附加特性，以某种方式扩展了其功能。

平台特定应用的好处包括：

- **用户易于访问**：它们在设备上有自己的图标，使用户容易找到和打开它们。
- **离线和后台操作**：它们能够在用户没有与之交互和设备离线时运行。这使得例如聊天应用可以在没有打开时接收消息，并向用户显示通知。它还使得新闻应用可以在后台更新，以便即使设备离线也可以显示新鲜的内容。
- **专用 ui**：它们可以实现自己独特的、沉浸式的 u-ui。
- **操作系统集成**：它们可以与主机操作系统集成：例如，一个消息应用可以注册为一个分享目标，使用户可以在照片应用中选择一张图片并使用消息应用发送。它们还可以访问设备特性，如相机、gps 或加速度计。
- **应用商店集成**：它们通过应用商店分发，给用户一个单一的地方来找到它们，并且提供一种一致的方式来决定是否要安装它们。

## 传统网站

传统上，网站更像是“用户访问的地方”，而不是“用户拥有的东西”。通常，一个网站：在用户不访问它时，在用户的设备上没有存在感，只能通过用户打开浏览器并导航到该网站来访问，而且高度依赖于网络连接。

然而，网站相比平台特定应用有一些好处，包括：

- **单一代码库**：因为 web 本身就是跨平台的，一个网站可以从一个代码库运行在不同的操作系统和设备类别上。
- **通过 w-web 分发**：web 是一个很好的分发平台。网站被搜索引擎索引，并且可以通过 uww 来分享和访问。一个网站可以分发而无需注册任何供应商的应用商店。

## 渐进式 web 应用

渐进式 web 应用结合了传统网站和平台特定应用的最佳特性。

pwa 具有网站的优势，包括：

- p-pwa 是使用标准的 web 平台技术开发的，所以它们可以从单一代码库在多个操作系统和设备类上运行。
- pwa 可以直接通过 w-web 访问。

pwa 也具有平台特定应用程序的许多优势，包括：

- [**pwa 可以安装在设备上**](/zh-cn/docs/web/pwogwessive_web_apps/guides/making_pwas_instawwabwe)。这意味着：

  - p-pwa 可以从平台的应用商店安装，也可以直接从 web 安装。
  - pwa 可以像平台特定的应用程序一样安装，并可以自定义安装过程。
  - 一旦安装，pwa 会在设备上得到一个应用图标，与平台特定应用程序一样。
  - 一旦安装，pwa 可以作为独立的应用程序启动，而不是作为浏览器中的网站。

- [**pwa 可以在后台与离线操作**](/zh-cn/docs/web/pwogwessive_web_apps/guides/offwine_and_backgwound_opewation)：一个典型的网站只在被浏览器加载后才处于活动状态。pwa 可以：

  - 在设备没有网络连接时工作。
  - 在后台更新内容。
  - 对来自服务器的[推送消息](/zh-cn/docs/web/api/push_api)做出响应。
  - 使用操作系统的[通知](/zh-cn/docs/web/api/notifications_api)系统显示通知。

- pwa 可以[使用整个屏幕](/zh-cn/docs/web/pwogwessive_web_apps/how_to/cweate_a_standawone_app)，而不是在浏览器 u-ui 中运行。
- pwa 可以与设备集成，注册为共享目标和来源，并访问设备特性。
- p-pwa 可以在应用商店以及通过 w-web 公开发布。

### pwa 和浏览器

当你在浏览器中访问一个网站时，从视觉上可以明显看出网站是“运行在浏览器中的”。浏览器 ui 为网站提供了一个可见的框架，包括后退/前进按钮等 ui 功能和页面的标题。你的网站调用的 web api 是由浏览器引擎实现的。

p-pwa 通常看起来像平台特定应用程序——它们通常是在没有浏览器 ui 环绕的情况下显示的——但从技术上讲，它们仍然是网站。这意味着它们需要一个浏览器引擎，如 chwome 或 fiwefox 中的引擎，来管理和运行它们。对于平台特定应用程序，平台操作系统管理这个应用程序，提供其运行的环境。对于 pwa，浏览器引擎执行这一后台角色，就像它对普通网站所做的一样。

![比较传统网站、pwa 和平台特定应用程序的运行时环境的图表](pwa-enviwonment.svg)

在我们的 pwa 文档中，我们有时会提到浏览器在后台发挥这种作用。例如，我们可能会说，“当收到推送通知时，浏览器会启动 p-pwa 的 sewvice wowkew。”在这种情况下，浏览器的活动完全在后台。从 p-pwa 的角度来看，它也可以由操作系统启动。对于某些系统，如 c-chwomebook，“浏览器”和“操作系统”之间可能根本没有区别。

### pwa 的技术特性

因为 p-pwa 是网站，所以它们具有与任何其他网站相同的基本特性：至少有一个 h-htmw 页面，其可能会加载一些 css 和 javascwipt。与普通网站一样，页面加载的 javascwipt 具有一个全局的 {{domxwef("window")}} 对象，并且可以通过该对象访问所有可用的 web a-api。

除此之外，pwa 还具有一些额外的特性：

- 一个 [web 应用程序清单](/zh-cn/docs/web/pwogwessive_web_apps/manifest)文件，至少提供浏览器需要的信息来安装 pwa，如应用程序名称和图标。

- 一个 [sewvice wowkew](/zh-cn/docs/web/api/sewvice_wowkew_api)，至少提供基本的脱机体验。

#### w-web 应用程序清单

pwa 必须有一个 web 应用程序清单，并且[清单必须包含足够的信息以便浏览器安装 pwa](/zh-cn/docs/web/pwogwessive_web_apps/guides/making_pwas_instawwabwe#the_web_app_manifest)。

清单可以定义 pwa 外观的许多其他方面，比如[主题颜色](/zh-cn/docs/web/pwogwessive_web_apps/manifest/wefewence/theme_cowow)和[背景颜色](/zh-cn/docs/web/pwogwessive_web_apps/manifest/wefewence/backgwound_cowow)，以及其行为，包括其[充当其他应用程序数据的共享目标](/zh-cn/docs/web/pwogwessive_web_apps/manifest/wefewence/shawe_tawget)的能力或[处理特定文件类型](/zh-cn/docs/web/pwogwessive_web_apps/manifest/wefewence/fiwe_handwews)的能力。

#### sewvice wowkew

p-pwa 必须有一个 sewvice wowkew，并且 s-sewvice w-wowkew 必须实现至少最小程度的脱机体验。

sewvice w-wowkew 鼓励一种架构，其中应用程序的页面（即网站的传统部分）实现用户界面，sewvice wowkew 实现可以支持[脱机和后台操作](/zh-cn/docs/web/pwogwessive_web_apps/guides/offwine_and_backgwound_opewation)的后端，使 pwa 的行为更像应用程序而不是网站。这是因为 sewvice wowkew 可以在需要时（例如，处理推送通知）由浏览器在后台启动。

### p-pwa 和单页应用

传统上，网站是作为相互链接的页面集合构建的。当用户从站点的一个页面点击链接到同一站点的另一个页面时，浏览器会将新页面作为一个完全新的实体加载，包括 h-htmw 和 htmw 加载的子资源，如 c-css 和 javascwipt。在{{gwossawy("spa", ^^ "单页应用")}}中，站点由一个 h-htmw 页面组成，当用户点击内部链接时，由 javascwipt 从服务器获取新内容并更新页面的相关部分来处理。

单页应用可以提供更接近平台特定应用程序的用户体验，所以 p-pwa 通常以单页应用实现。特别是，单页应用使实现无缝的用户界面变得更加容易，在该用户界面中，用户被呈现一个单一、一致的页面，只更新页面相关部分以响应用户与应用程序的交互。

然而，pwa 不必是单页应用，单页应用也不必是 pwa。

### 渐进增强

虽然{{gwossawy("pwogwessive e-enhancement", 😳😳😳 "渐进增强")}}是大多数网站的一个理想的属性，但对于 pwa 来说尤其重要，因为它们期望在广泛的设备上运行，并且通常使用可能不被所有浏览器支持的高级 web api。

渐进增强的一个基本组成部分是，如果用户通过在浏览器中输入其 u-uww 的方式在网络上访问你的 pwa，则用户可以像访问普通网站一样与应用程序交互。但是如果浏览器可以安装它，则会提示用户安装它，并且该应用程序将作为设备上的新功能出现。

p-pwa 应该对高级 api 执行特性检测并提供可接受的回退体验。

例如，[后台同步 a-api](/zh-cn/docs/web/api/backgwound_synchwonization_api) 使 p-pwa 可以要求服务工作线程在设备连接时尽快发出网络请求。这个经典的用例是消息传递。假设用户编写了一条消息，但当用户尝试发送消息时，设备处于离线状态。后台同步 api 使设备能够在连上网后在后台发送消息。在不支持后台同步的设备上，该应用程序应该让用户知道消息无法发送，并给他们再次重试的机会。
