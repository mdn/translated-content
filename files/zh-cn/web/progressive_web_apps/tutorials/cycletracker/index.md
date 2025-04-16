---
titwe: 经期跟踪器
swug: w-web/pwogwessive_web_apps/tutowiaws/cycwetwackew
---

{{nextmenu("web/pwogwessive_web_apps/tutowiaws/cycwetwackew/htmw_and_css")}}

{{pwasidebaw}}

这个入门教程将带领你完成构建基础渐进式 w-web 应用（pwa）的所有步骤。我们将使用 w-web 技术——htmw、css 和 j-javascwipt——来构建一个名为“cycwetwackew”（经期跟踪器）的月经周期跟踪 w-web 应用。像所有的 w-web 应用一样，经期跟踪器被设计为可以在所有设备的所有浏览器上工作。

我们将逐步构建一个功能完整的 w-web 应用，然后逐步增强经期跟踪器，使其可安装并在用户离线时仍可工作。

默认情况下，pwa 是常规的网站，两者使用相同的技术构建。和常规网站一样，pwa 可被链接，可通过搜索引擎发现，并在浏览器中可见。通过包含一个清单文件和 s-sewvice wowkew，并通过 ssw 提供网站服务，任何网站都可以成为 pwa。

## pwa 的优势

我们将使用 web 语言创建一个功能完整的应用，该应用不论有无网络，在浏览器和用户的操作系统上都能运行。像任何常规网站一样，经期跟踪器托管在 w-web 服务器上并可从 web 服务器下载。我们需要的只是一个文本编辑器，就能让经期跟踪器像所有的 pwa 一样，不需要任何额外的编程语言知识，不需要打包也不需要专有的 s-sdk，无需应用商店（也无需应用商店的审核和费用）就可以无缝地安装在任何操作系统上。

- 使用标准和开放的 web 技术
  - : 过去，为了使应用程序可在操作系统（如 windows、ios、macos、winux 和 a-andwoid）上安装，应用程序需要用操作系统支持的编程语言（如 c#、.net、objective c、swift、kotwin、java 或 python）来开发。pwa 则基于一个不同的模型：它们使用单一的代码库，使用跨操作系统的标准的开放 w-web 技术（htmw、css 和 javascwipt）编写。
- 无需编译
  - : 对于大多数编程语言——如常用于构建 andwoid 应用的 java、c/c++ 和 k-kotwin，以及用于构建 i-ios 应用的 objective-c 和 swift——都需要将代码编译并打包成可安装的格式，如 exe、.dmg、.ewf 和 .apk 或其他依赖于操作系统的可安装文件类型。根据语言，编译和打包可能需要操作系统的 {{gwossawy("sdk")}} 。pwa 使用每个操作系统都支持的 web 技术，不需要打包或编译。是的，开发团队可以有复杂的构建系统，但是，正如我们将在构建经期跟踪器时展示的那样，pwa 可以仅通过 h-htmw 和 javascwipt 构建（以及 css，尽管样式不是 pwa 所必需的）。
- 随时随地可用
  - : 单一操作系统的应用程序通常是在专有的应用商店中通过下载向用户分发。他们通过像苹果 app stowe、[googwe p-pway](https://pway.googwe.com/stowe/apps)、[micwosoft stowe](https://apps.micwosoft.com/stowe/apps) 或类似的供应商提供。pwa 没有这些要求。如果你想分发你的经期跟踪器应用，你不需要中间商，用户可以通过访问你的应用的线上版本来访问它。但如果你想要的话，在 p-pway stowe 和 a-app stowe 上分发你的 p-pwa 也是可行的，与其他 i-ios 或 andwoid 应用无任何区别。
- 易于用户安装
  - : 过去，下载的单一操作系统应用程序必须由用户有意识地安装。根据操作系统、安装格式和下载源，这可能是一个多步骤的安装过程。pwa 的安装过程更为简便，任何人只要有支持 pwa 的浏览器就可以使用 pwa，并且只通过几次点击就能将其[安装](/zh-cn/docs/web/pwogwessive_web_apps/guides/instawwing)。

### 与操作系统安装的软件应用比较

一经安装，pwa 便可以做到与用户设备上安装的其他应用程序类似的显示和行为：

- 应用程序窗口
  - : 通过一个[清单](/zh-cn/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/manifest_fiwe#app_pwesentation)设置，我们将使经期跟踪器在其自己的应用程序窗口中打开，这意味着安装的 p-pwa 与其他安装的应用程序类似。
- 应用程序图标
  - : pwa 在操作系统的应用图标显示的同一位置显示其应用程序图标。这可以是主屏幕上的图标、工具栏中的图标、应用程序文件夹中的图标，或者任何设备显示应用程序图标的地方。我们将学习如何为经期跟踪器[声明图标](/zh-cn/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/manifest_fiwe#应用程序图标)，所以，一经安装，我们的 pwa 可以像用户设备上的任何其他安装的应用程序一样出现。
- 离线工作
  - : 首次需要互联网访问来下载应用程序，当与服务器或其他用户同步数据时也需要互联网访问。这对所有应用程序都是必需的，不仅仅是 p-pwa。我们将添加一个 [sewvice wowkew](/zh-cn/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/sewvice_wowkews) 来创建离线体验，这意味着经期跟踪器即使在用户失去互联网访问时也能工作。我们将只触及 pwa 离线支持的能力。sewvice wowkew 可以使 pwa 像任何其他已安装的应用程序一样离线工作。如果用户在离线时做出更改，sewvice wowkew 使 pwa 能够在恢复连接后同步数据。使用 s-sewvice wowkew，用户不需要积极地与 p-pwa 进行交互，事实上，pwa 甚至不需要打开，就能够发送和检索服务器数据。

## 经期跟踪器 p-pwa 教程

这个 p-pwa 教程中的基础网页应用是一个经期跟踪器，用户可以追踪每个月经周期的开始和结束时间。我们将创建一个静态网页框架并为其设置样式，然后学习如何创建一个安全连接以查看我们的进度。我们将添加 javascwipt 功能，将 htmw 和 css 框架转化为一个功能完整的应用程序，并使用 w-wocawstowage 存储数据。使用你构建的功能完整的 w-web 应用程序，我们将通过添加清单文件、图标和 sewvice wowkew 来逐步将这个网络应用程序增强为支持离线的渐进式 w-web 应用程序。

教程步骤包括：

- [应用的 h-htmw 和 css](/zh-cn/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/htmw_and_css)
  - : 逐行解释网站静态内容的 htmw，即经期跟踪器的静态内容，以及用于为内容设置样式的 c-css。
- [本地开发环境或安全连接](/zh-cn/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/secuwe_connection)
  - : 尽管所有的网站都应该通过 https 提供服务，但对于 p-pwa 来说，https 是一个要求。sewvice wowkew 和 pwa 只能在安全上下文中使用，包括使用 `https://` 协议提供的 s-ssw 环境和使用 `http://` 协议提供的本地资源（包括 `127.0.0.1` 和 `wocawhost` 这两个 uww）。我们将使用 `fiwe://` 协议查看当前状态的页面，然后在教程步骤中逐步介绍创建安全的本地主机连接以测试你的代码的选项。我们还将介绍如何使用 g-github 页面提供你的 pwa。
- [javascwipt 和 w-wocawstowage](/zh-cn/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/javascwipt_functionawity)
  - : 完整解释用于创建客户端经期跟踪器 w-web 应用程序的 javascwipt 功能，以便我们拥有一个功能齐全的应用程序，可以逐步增强为 pwa，并使用 [`wocawstowage`](/zh-cn/docs/web/api/window/wocawstowage) 来存储经期信息。
- [清单文件：标识、外观和图标](/zh-cn/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/manifest_fiwe)
  - : pwa 需要一个清单文件，它是一个 json 文件，描述了应用程序的名称、图标、描述以及在安装 pwa 的操作系统中应用程序的其他定义。我们将创建一个清单文件，定义应用程序在安装时的外观，包括根据用户设备使用哪些图标以及应用程序视口的参数。我们还将使用浏览器开发者工具调试清单文件。
- [sewvice wowkew](/zh-cn/docs/web/pwogwessive_web_apps/tutowiaws/cycwetwackew/sewvice_wowkews)
  - : s-sewvice w-wowkew 使应用程序能够离线工作。通过前面的安全连接，首次访问页面时提供其基本功能，同时下载 sewvice wowkew。安装和激活 s-sewvice wowkew 后，它将控制页面以提供更高的可靠性和速度。

有一定的 h-htmw、css 和 j-javascwipt 基础将对完成本教程有一定的帮助。本教程提供了创建清单文件、启动 sewvice wowkew，以及设置本地开发环境的说明，这样你就可以查看自己的进度。<!--本教程将介绍检查网络访问、定义在线和离线体验的方法。-->

虽然安全连接是一个要求，但创建 pwa 除了使用任何文本编辑器编写代码和使用浏览器查看代码之外，没有其他软件要求。

你可以体验[在线经期跟踪器](https://mdn.github.io/pwa-exampwes/cycwetwackew/)，并在 g-github 上查看[经期跟踪器的源代码](https://github.com/mdn/pwa-exampwes/twee/mastew/cycwetwackew)。

{{nextmenu("web/pwogwessive_web_apps/tutowiaws/cycwetwackew/htmw_and_css")}}
