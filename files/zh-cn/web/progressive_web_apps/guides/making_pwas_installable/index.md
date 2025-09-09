---
title: 制作可安装的 PWA
slug: Web/Progressive_web_apps/Guides/Making_PWAs_installable
l10n:
  sourceCommit: bd51a95ba627fe3061d061c294ff97053c3f6ed9
---

{{PWASidebar}}

PWA 定义的一个方面就是它可以由浏览器提示以将其安装在设备上。安装后，PWA 对用户而言就是特定于平台的应用程序，是用户设备的一个永久特性，用户可以像启动其他任何应用程序一样直接从操作系统启动它。

我们可以将其总结如下：

- 支持的浏览器会提示用户将 PWA 安装到设备上。
- PWA 可以像特定平台的应用一样安装，并可以自定义安装过程。
- 一旦安装，PWA 就会在设备上获得一个应用图标，与特定平台的应用程序一起。
- 一旦安装，PWA 可以作为一个独立的应用程序启动，而不是在浏览器中的一个网站。

我们将在本指南中讨论每个特性。首先，我们将讨论 web 应用程序要想可以被提示安装所必须满足的条件。

## 可安装性

对于 web 应用程序来说，要想被支持的浏览器提示安装，它需要满足一些技术要求。我们可以将这些看作是一个 web 应用程序成为 PWA 的最低要求。

### web 应用清单

web 应用清单是一个 JSON 文件，它告诉浏览器 PWA 应该如何在设备上显示和表现。对于一个 web 应用程序来说，要成为一个 PWA，它必须是可安装的，而要成为可安装的，它必须包含一个清单。

这个清单是通过应用程序的 HTML 中的 {{HTMLElement("link")}} 元素引入的：

```html
<!doctype html>
<html lang="zh">
  <head>
    <link rel="manifest" href="manifest.json" />
    <!-- ... -->
  </head>
  <body></body>
</html>
```

如果 PWA 有多个页面，每个页面都必须以以下方式引用清单。

清单包含一个单独的 JSON 对象，其中包含一些定义 PWA 外观或行为的成员集合。以下一个相当简单的清单，只包含两个成员：`"name"` 和 `"icons"`。

```json
{
  "name": "我的 PWA",
  "icons": [
    {
      "src": "icons/512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ]
}
```

#### 必需的清单成员

基于 Chromium 的浏览器，包括 Google Chrome、Samsung Internet 和 Microsoft Edge，要求清单包含以下成员：

- [`name`](/zh-CN/docs/Web/Progressive_web_apps/Manifest/Reference/name)
- [`icons`](/zh-CN/docs/Web/Progressive_web_apps/Manifest/Reference/icons)
- [`start_url`](/zh-CN/docs/Web/Progressive_web_apps/Manifest/Reference/start_url)
- [`display`](/zh-CN/docs/Web/Progressive_web_apps/Manifest/Reference/display) 和/或 [`display_override`](/zh-CN/docs/Web/Progressive_web_apps/Manifest/Reference/display_override)

有关每个成员的完整描述，请参阅 [Web 应用清单参考文档](/zh-CN/docs/Web/Progressive_web_apps/Manifest)。

### 安全上下文

要使 Web 应用程序可安装，它必须在[安全上下文](/zh-CN/docs/Web/Progressive_web_apps)中提供。通常意味着它必须通过 HTTPS 提供。本地资源，如 localhost、`127.0.0.1` 和 `file://` 也被视为安全。

### Service worker

要使 Web 应用程序可安装，它必须包括一个 [service worker](/zh-CN/docs/Web/API/Service_Worker_API)，其中包含一个提供基本离线体验的 [`fetch` 事件处理程序](/zh-CN/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)。

## 从应用商店安装

用户希望在其平台的应用商店中找到应用程序，例如 Google Play 商店或 Apple Store。

如果你的应用符合可安装的先决条件，你可以将其打包并通过应用商店进行分发。该过程针对每个应用商店有所不同：

- [如何将 PWA 发布到 Google Play 商店](https://chromeos.dev/en/publish/pwa-in-play)
- [如何将 PWA 发布到 Microsoft Store](https://learn.microsoft.com/zh-cn/microsoft-edge/progressive-web-apps-chromium/how-to/microsoft-store)
- [如何将 PWA 发布到 Meta Quest Store](https://developer.oculus.com/documentation/web/pwa-submit-app/)

[PWABuilder](https://docs.pwabuilder.com/#/builder/quick-start) 是一个工具，可简化将 PWA 打包和发布到各种应用商店的过程。它支持 Google Play 商店、Microsoft Store、Meta Quest Store 和 iOS App Store。

如果你已将应用添加到应用商店，用户可以像使用特定于平台的应用一样从商店安装它。

## 通过 Web 进行安装

当支持的浏览器确定 Web 应用程序满足前述的可安装性要求时，它将提示用户安装当前应用。用户将有机会安装该应用程序。这意味着你可以将你的 PWA 通过网站进行分发，使其可以通过 Web 搜索找到，也可以在应用商店中分发，以便用户可以在那里找到它。

这是 PWA 可以同时提供两种最佳体验的绝佳示例。这也是渐进增强与 PWA 结合的良好示例：如果用户在不能安装它的浏览器中在 Web 上遇到你的 PWA，他们可以像使用普通网站一样使用它。

从 Web 安装 PWA 的用户界面在不同的浏览器和平台上会有所不同。例如，当用户导航到网页时，浏览器可能在 URL 栏中包含一个“安装”图标：

![Chrome URL 栏显示 PWA 安装图标](pwa-install.png)

当用户选择该图标时，浏览器会显示一个提示框询问他们是否要安装 PWA，如果他们接受，PWA 将被安装。

该提示框显示的是 PWA 的名称和图标，取自 渐进式 Web 应用清单的 [`name`](/zh-CN/docs/Web/Progressive_web_apps/Manifest/Reference/name) 和 [`icons`](/zh-CN/docs/Web/Progressive_web_apps/Manifest/Reference/icons) 成员。

### 浏览器支持

通过 Web 提示安装 PWA 的支持因浏览器和平台而异。

在桌面上：

- Firefox 和 Safari 不支持在任何桌面操作系统上安装 PWA。见下方的[将网站安装为应用程序](#将网站安装为应用程序)。
- Chrome 和 Edge 支持在 Linux、Windows、macOS 和 Chromebook 上安装 PWA。

在移动设备上：

- 在 Android、Firefox、Chrome、Edge、Opera 和 Samsung Internet Browser 上都支持安装 PWA。
- 在 iOS 16.3 及更早版本上，PWA 只能通过 Safari 安装。
- 在 iOS 16.4 及更高版本上，PWA 可以通过 Safari、Chrome、Edge、Firefox 和 Orion 的分享菜单安装。

### 将网站安装为应用程序

桌面版和移动版 Safari 以及桌面版 Edge 也支持将任何网站安装为应用程序。但是，这并不是 PWA 所特有的，因为网站不需要满足本指南中描述的可安装性要求，且浏览器不会主动提示安装网站。

### 触发安装提示

PWA 可以提供自己的页面内用户界面，供用户打开安装提示，而不是依赖浏览器默认提供的用户界面。这使得 PWA 可以提供一些上下文和用户安装 PWA 的理由，并有助于使安装用户流程更易于发现。

这种技术依赖于 [`beforeinstallprompt`](/zh-CN/docs/Web/API/Window/beforeinstallprompt_event) 事件，该事件在全局的 [`Window`](/zh-CN/docs/Web/API/Window) 对象上触发，一旦浏览器确定 PWA 可以安装。此事件具有一个 [`prompt()`](/zh-CN/docs/Web/API/BeforeInstallPromptEvent/prompt) 方法，用于显示安装提示。因此，PWA 可以：

- 添加自己的“安装”按钮
- 监听 `beforeinstallprompt` 事件
- 通过调用 [`preventDefault()`](/zh-CN/docs/Web/API/Event/preventDefault) 取消事件的默认行为
- 在自己的“安装”按钮的事件处理程序中，调用 [`prompt()`](/zh-CN/docs/Web/API/BeforeInstallPromptEvent/prompt)。

这在 iOS 上不受支持。

### 自定义安装提示

默认情况下，安装提示中包含 PWA 的名称和图标。如果你为 [`description`](/zh-CN/docs/Web/Progressive_web_apps/Manifest/Reference/description) 和 [`screenshots`](/zh-CN/docs/Web/Progressive_web_apps/Manifest/Reference/screenshots) 这两个渐进式 Web 应用清单的成员提供值，则仅限于 Android，在安装提示中将显示这些值，为用户提供额外的上下文和安装 PWA 的动机。

下面的屏幕截图显示了在运行在 Android 上的 Google Chrome 上的 [PWAmp 演示](https://github.com/MicrosoftEdge/Demos/tree/main/pwamp)的安装提示的外观：

![Android 上的 PWAmp 安装提示](pwamp-install-prompt-android.png)

## 启动应用

一旦安装了 PWA，它的图标将显示在设备上，与用户安装的其他应用程序一起显示，并且点击图标将启动应用程序。

你可以使用应用清单的成员 [`display`](/zh-CN/docs/Web/Progressive_web_apps/Manifest/Reference/display) 来控制 PWA 的*显示模式*，即 PWA 启动时的外观。具体而言：

- `"standalone"` 表示 PWA 应该看起来和感觉上像特定于平台的应用程序，没有浏览器的用户界面元素。
- `"browser"` 表示 PWA 应该作为一个新的浏览器标签页或窗口打开，就像普通网站一样。

如果浏览器不支持给定的显示模式，`display` 将会根据预定义的顺序回退到支持的显示模式。[`display_override`](/zh-CN/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) 允许你重新定义回退顺序。
