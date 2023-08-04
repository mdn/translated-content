---
title: 让 PWA 易于安装
slug: Web/Progressive_web_apps/Tutorials/js13kGames/Installable_PWAs
---

{{PWASidebar}} {{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers", "Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push", "Web/Progressive_web_apps/Tutorials/js13kGames")}}

在上一篇文章，我们了解了如何通过 [Service Worker](/zh-CN/docs/Web/API/Service_Worker_API) 让 [js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) 离线工作。我们还可以更进一步，让用户如同本地应用一样在支持的移动浏览器上安装 web 应用。这篇文章讲述如何通过网页清单和添加到主屏特性来做到这一点。

这些技术允许应用从设备主屏直接启动，而不需启动浏览器键入 URL。你的 Web 应用可以作为一等公民和原生应用肩并肩。这样可以使应用更易于访问，你还可以指定应用全屏运行，没有浏览器界面，这样看起来更像一个原生应用。

## 要求

可安装网站需要满足以下条件：

- 一份网页清单，填好[正确的字段](/zh-CN/Apps/Progressive/Guides/Making_PWAs_installable#manifest)
- 网站的协议必须是安全的（即使用 HTTPS 协议）
- 一个在设备上代表应用的图标
- 一个注册好的 Service Worker，可以让应用离线工作（这仅对于安卓设备上的 Chrome 浏览器是必需的）

### 清单文件 (Manifest)

离线访问的关键在于一份网页清单，它通过 JSON 形式列举了网站的所有信息。

它通常位于网页应用的根目录，包含一些有用的信息，比如应用的标题、在移动设备操作系统上显示的代表该应用的不同大小的图标（例如主屏图标）的路径，和用于加载页或启动画面的背景颜色。浏览器需要这些信息来安装 web 应用并使其在主屏上显示。

[js13kPWA](https://mdn.github.io/pwa-examples/js13kpwa/) 的 `js13kpwa.webmanifest` 文件包含在 `index.html` 文件的 {{htmlelement("head")}} 段，如下行所示：

```html
<link rel="manifest" href="js13kpwa.webmanifest" />
```

> **备注：** 这类清单文件有一些曾经常被使用的扩展名：`manifest.webapp` 在 Firefox OS 应用清单中很流行，而许多人使用 `manifest.json` 作为网页清单（因为内容是 JSON 格式的）。但是，`.webmanifest` 扩展名是在[W3C 清单规范](https://w3c.github.io/manifest/)中显式指定的，所以这里我们使用这个扩展名。

文件的内容是这个样子的：

```json
{
  "name": "js13kGames Progressive Web App",
  "short_name": "js13kPWA",
  "description": "Progressive Web App that lists games submitted to the A-Frame category in the js13kGames 2017 competition.",
  "icons": [
    {
      "src": "icons/icon-32.png",
      "sizes": "32x32",
      "type": "image/png"
    },
    // ...
    {
      "src": "icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": "/pwa-examples/js13kpwa/index.html",
  "display": "fullscreen",
  "theme_color": "#B12A34",
  "background_color": "#B12A34"
}
```

大部分字段无需解释，但是我们还是详细解释一下为妙：

- `name`: 网站应用的全名。
- `short_name`: 显示在主屏上的短名字。
- `description`: 一两句话解释你的应用的用途。
- `icons`: 一串图标信息：源 URL，大小和类型。多包含几个图标，这样就能选中一个最适合用户设备的。
- `start_url`: 启动应用时打开的主页。
- `display`: 应用的显示方式；可以是 `fullscreen`、`standalone`、`minimal-ui` 或者 `browser`。
- `theme_color`: UI 主颜色，由操作系统使用。
- `background_color`: 背景色，用于安装和显示启动画面时。

一份网页清单最少需要 `name` 和一个图标 (带有 `src`, `size` 和 `type`)。最好也要提供 `description`、`short_name`、和 `start_url`。除了上述字段，还有一些其他的字段供您使用，请查看[网页应用清单参考](/zh-CN/docs/Web/Manifest)获取详细信息。

## 添加到主屏

"添加到主屏" (或者英语短语 A2HS (Add to Home Screen)) 是移动浏览器实现的一个特性，它利用网页清单中的信息来在设备主屏上显示应用图标和文字。只有应用满足上述必备条件，这个功能才可以正常运作。

当用户使用支持的移动浏览器访问 PWA 时，浏览器会显示一条横幅信息表示可以安装这个应用。

![Add to Home screen popup of js13kPWA.](js13kpwa-icon.png)

在用户单击这个横幅后，安装横幅信息会显示出来。它是浏览器基于网页清单信息创建的，名字和图标可以在提示中看到。

![Install banner of js13kPWA.](js13kpwa-banner.png)

如果用户单击安装到主屏按钮，会显示应用图标的样子，让用户确认是否安装这个应用。

![Add to Home screen popup of js13kPWA.](js13kpwa-add.png)

确认之后，应用就安装到主屏上了。

![](js13kpwa-installed.png)

之后，用户可以立刻启动并使用应用。注意，在某些浏览器/移动操作系统中，PWA 会在图标右下角显示浏览器图标，告诉用户这是一个网页应用。

### 启动画面

在一些浏览器中，可以通过清单信息产生一个启动画面，当 PWA 启动时显示。

![](js13kpwa-splash.png)

这个启动画面由给定的图标、主题和背景色生成。

## 总结

在本文中，我们学习了如何使用网页清单和安装到主屏特性让 PWA 可安装。

为了获得添加到主屏的更多信息，请阅读[添加到主屏指南](/zh-CN/docs/Web/Apps/Progressive/Guides/Making_PWAs_installable)。浏览器支持当前限于 Android 平台上的 Firefox 58+、Mobile Chrome、Android Webview 31+ 以及 Android Opera 32+, 但是将来这些限制的影响会逐渐减小。

现在让我们将目光转移到 PWA 的最后一个难点：通过推送通知再次启动（re-engagement）。

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers", "Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push", "Web/Progressive_web_apps/Tutorials/js13kGames")}}
