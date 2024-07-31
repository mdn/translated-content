---
title: Firefox 用户代理字符串参考
slug: Web/HTTP/Headers/User-Agent/Firefox
l10n:
  sourceCommit: 3a0b2df4396eac14f3439c1e517707a2f442c7ee
---

{{HTTPSidebar}}

本文档介绍了 Firefox 4 及更高版本和基于 Gecko 2.0 及更高版本的应用程序中使用的用户代理字符串。有关 Gecko 2.0 中字符串变化的细目，请参阅 [Firefox 4 的最终用户代理字符串](https://hacks.mozilla.org/2010/09/final-user-agent-string-for-firefox-4/)博文。另请参阅本文档中的[用户代理嗅探](/zh-CN/docs/Web/HTTP/Browser_detection_using_the_user_agent)和这篇 [Hacks 博文](https://hacks.mozilla.org/2013/09/user-agent-detection-history-and-checklist/)。

## 一般形式

Firefox 的用户代理字符串可被拆分为以下四个部分：

`Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion`

- `Mozilla/5.0` 是表示浏览器与 Mozilla 兼容的通用标记，目前几乎所有浏览器都使用该标记。
- `platform` 描述浏览器运行的本地平台（如 Windows、Mac、Linux 或 Android），以及是否是手机。Firefox OS 手机显示“`Mobile`”；web 就是它的平台。请注意，`platform` 可以由多个“;”分隔的标记组成。详情和示例请参阅下文。
- `rv:geckoversion` 表示 Gecko 的发行版本（如“`17.0`”）。
- `Gecko/geckotrail` 表示浏览器基于 Gecko。
- 在桌面上，`geckotrail` 是固定字符串“`20100101`”。
- `Firefox/firefoxversion` 表示浏览器是 Firefox，并提供版本（如“`17.0`”）。
- 从移动版 Firefox 10 开始，`geckotrail` 与 `firefoxversion` 相同。

> [!NOTE]
> 嗅探基于 Gecko 的浏览器（如果你*必须*嗅探浏览器引擎而不是使用特性检测）的推荐方法是检测“`Gecko`”和“`rv:`”字符串是否存在，因为某些其他浏览器包含"`like Gecko`"标记。

对于其他基于 Gecko 的产品，UA 字符串会符合以下两个规则中的一个，除了下面的描述外，其他字段与上面描述的意义相同。

`Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail appname/appversion`
`Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion appname/appversion`

- `appname/appversion` 标明了应用名与版本，举个例子，它可以是“`Camino/2.1.1`”或“`SeaMonkey/2.7.1`”。
- `Firefox/firefoxversion` 是一个可选的兼容标记，一些基于 Gecko 的浏览器选择加入，以达到对支持 Firefox 的网页的最大兼容。`firefoxversion` 应与其提供的 Gecko 版本对应的 Firefox 版本相同。一些基于 Gecko 的浏览器可能不会使用此标记，因此，在检测的时候，应当使用 Gecko 而非 Firefox。

在 Firefox 4 和 Gecko 2.0 之前，扩展和插件可以添加用户代理部分，但自从 [Firefox bug 581008](https://bugzil.la/581008) 以来就不可能了。

## 手机和平板电脑指示器

UA 字符串的 `platform` 部分表示 Firefox 是在手机还是平板设备上运行。当 Firefox 在手机设备上运行时，UA 字符串的 `platform` 部分包含一个 `Mobile;` 标记。当 Firefox 在平板设备上运行时，UA 字符串的 `platform` 部分会出现 `Tablet;` 标记。例如：

```plain
Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0
Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0
```

> [!NOTE]
> 版本号无关。请避免据此推断材料。

将内容定位到设备外形尺寸的首选方法是使用 CSS 媒体查询。但是，如果你使用 UA 嗅探将内容定位到设备外形，请在手机外形中查找 **Mobi**（包括使用 "Mobi "的 Opera Mobile），而**不要**假设“Android”与设备外形之间存在任何关联。这样，如果 Firefox 浏览器采用其他手机/平板电脑操作系统，或者笔记本电脑采用 Android 系统，你的代码也能正常工作。此外，请使用触摸检测来查找触摸设备，而不是查找“Mobi”或“Tablet”，因为可能存在不是平板电脑的触摸设备。

> [!NOTE]
> Firefox OS 设备在标识自己时不标注任何操作系统，例如“Mozilla/5.0 (Mobile; rv:15.0) Gecko/15.0 Firefox/15.0”。web 就是它的平台。

## Windows

Windows 用户代理有以下变化，其中 _x.y_ 是 Windows NT 版本（例如 Windows NT 6.1）。

## Linux

Linux 是一个更加多样化的平台。你的 Linux 发行版可能包含一个可改变你的用户代理的扩展。下面是几个常见的例子。

| Linux 版本                          | Gecko 用户代理字符串                                                 |
| ----------------------------------- | -------------------------------------------------------------------- |
| 在 i686 CPU 上运行的 Linux 桌面版   | Mozilla/5.0 (X11; Linux i686; rv:10.0) Gecko/20100101 Firefox/10.0   |
| 在 x86_64 CPU 上运行的 Linux 桌面版 | Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20100101 Firefox/10.0 |

## Android（版本 40 及以下）

| 设备类型 | Gecko 用户代理字符串                                           |
| -------- | -------------------------------------------------------------- |
| Phone    | Mozilla/5.0 (Android; Mobile; rv:40.0) Gecko/40.0 Firefox/40.0 |
| Tablet   | Mozilla/5.0 (Android; Tablet; rv:40.0) Gecko/40.0 Firefox/40.0 |

## Android（版本 41 及以上)

从版本 41 开始，Android 版 Firefox 浏览器将把 Android 版本作为 _platform_ 标记的一部分。为提高互操作性，如果浏览器运行的版本低于 4，它将报告 4.4。Android 4 及以上版本将准确报告版本。请注意，所有版本的 Android 系统都使用具有相同功能的 Gecko。

| 设备类型 | Gecko 用户代理字符串                                               |
| -------- | ------------------------------------------------------------------ |
| Phone    | Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0 |
| Tablet   | Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0 |

## Android 版 Focus

从版本 1 开始，Focus 由 Android WebView 支持，并使用以下用户代理字符串格式：

```plain
Mozilla/5.0 (Linux; <Android Version> <Build Tag etc.>) AppleWebKit/<WebKit Rev> (KHTML, like Gecko) Version/4.0 Focus/<focusversion> Chrome/<Chrome Rev> Mobile Safari/<WebKit Rev>
```

WebView 上的平板电脑版本与手机版本基本相同，但不包含 `Mobile` 标记。

从第 6 版开始，用户可以选择使用基于 GeckoView 的安卓版 Focus，它有一个隐藏偏好：使用 GeckoView UA 字符串来宣传 Gecko 兼容性。

| Focus 版本（渲染引擎） | 用户代理字符串                                                                                                                         |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0 (WebView Mobile)   | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Mobile Safari/537.36 |
| 1.0 (WebView Tablet)   | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.0 Chrome/59.0.3029.83 Safari/537.36        |
| 6.0 (GeckoView)        | Mozilla/5.0 (Android 7.0; Mobile; rv:62.0) Gecko/62.0 Firefox/62.0                                                                     |

## Android 版 Klar

自版本 4.1 起，Android 版 Klar 使用与 [Android 版 Focus](#android_版_focus) 相同的 UA 字符串。在版本 4.1 之前，它发送的是 _Klar/\<version>_ _product/version_ 标记。

| Klar 版本（渲染引擎） | 用户代理字符串                                                                                                                         |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0 (WebView)         | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Klar/1.0 Chrome/58.0.3029.83 Mobile Safari/537.36  |
| 4.1+ (WebView)        | Mozilla/5.0 (Linux; Android 7.0) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/4.1 Chrome/62.0.3029.83 Mobile Safari/537.36 |
| 6.0+ (GeckoView)      | Mozilla/5.0 (Android 7.0; Mobile; rv:62.0) Gecko/62.0 Firefox/62.0                                                                     |

## iOS 版 Focus

iOS 版 Focus 7 使用的用户代理字符串格式如下：

```plain
Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/7.0.4 Mobile/16B91 Safari/605.1.15
```

注意：该用户代理是从 iPhone XR 模拟器上获取的，在不同设备上可能有所不同。

## Fire TV 版 Firefox

Fire TV 版 Firefox 3（也可能是更早版本）使用的用户代理字符串格式如下：

```plain
Mozilla/5.0 (Linux; <Android version>) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/<firefoxversion> Chrome/<Chrome Rev> Safari/<WebKit Rev>
```

| Firefox TV 版本 | 用户代理字符串                                                                                                                     |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| v3.0            | Mozilla/5.0 (Linux; Android 7.1.2) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/3.0 Chrome/59.0.3017.125 Safari/537.36 |

## Echo Show 版 Firefox

从版本 1.1 起，Echo Show 版 Firefox 使用的用户代理字符串格式如下：

```plain
Mozilla/5.0 (Linux; <Android version>) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/<firefoxversion> Chrome/<Chrome Rev> Safari/<WebKit Rev>
```

| Echo Show 版 Firefox 版本 | 用户代理字符串                                                                                                                     |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| v1.1                      | Mozilla/5.0 (Linux; Android 5.1.1) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Focus/1.1 Chrome/59.0.3017.125 Safari/537.36 |

## Firefox OS

| 设备类型 | Gecko 用户代理字符串                                              |
| -------- | ----------------------------------------------------------------- |
| Phone    | Mozilla/5.0 (Mobile; rv:26.0) Gecko/26.0 Firefox/26.0             |
| Tablet   | Mozilla/5.0 (Tablet; rv:26.0) Gecko/26.0 Firefox/26.0             |
| TV       | Mozilla/5.0 (TV; rv:44.0) Gecko/44.0 Firefox/44.0                 |
| 设备特定 | Mozilla/5.0 (Mobile; **_nnnn;_** rv:26.0) Gecko/26.0 Firefox/26.0 |

### 具有设备特征的用户代理字符串

尽管 Mozilla **强烈反对**，然而一些手机制造商仍然会在其设备的 UA 字符串中包含标明设备 ID 的字段。在这种情况下，Firefox OS 的 UA 字符串会与上表中所示的具有设备特征的字符串保持一致，其中 **_nnnn;_** 代表设备制造商的设备代码（参见[指南](https://wiki.mozilla.org/B2G/User_Agent/Device_Model_Inclusion_Requirements)）。其中一些是以下几个形式：“**NexusOne;**”、“**ZTEOpen;**”、“**Open C;**”（注意，同样不鼓励在其中加入空格）。我们提供这些信息是为了协助你的 UA 检测逻辑，但 Mozilla 不鼓励检测 UA 字符串中的设备 ID。

这里有一个可以检测所有移动设备的 JavaScript 正则表达式，包含那些 UA 字符串中包含设备 id 的设备：

```js
/mobi/i;
```

其中 `i` 为大小写敏感的标记，而 `mobi` 则将匹配所有的移动设备。

### Firefox OS 版本号

由于 Firefox OS 的版本号未被包含于 UA 字符串中，我们可以通过 UA 字符串中的 Gecko 版本号来推断其版本信息。

| Firefox OS 版本号 | Gecko 版本号 |
| ----------------- | ------------ |
| 1.0.1             | 18.0         |
| 1.1               | 18.1         |
| 1.2               | 26.0         |
| 1.3               | 28.0         |
| 1.4               | 30.0         |
| 2.0               | 32.0         |
| 2.1               | 34.0         |
| 2.2               | 37           |
| 2.5               | 44           |

> [!NOTE]
> 通过查看 [Mercurial 版本库名称](https://hg.mozilla.org/releases)，可以较容易地找出对应关系。其中以 `mozilla-b2g` 开头的发布便属于 Firefox OS，在其名字中包含了 Firefox OS 与 Gecko 的版本号。

Firefox OS 的版本号由 4 位数字组成：`X.X.X.Y`。前两位数字由 Mozilla 产品团队决定，表明是包含新特性的版本（如：v1.1, 1.2 等）。第三位数字随安全更新而自增（约 6 周左右），第四位数字由 OEM 维护。

## 参见

- 关于[嗅探 UA 字符串以实现跨浏览器支持](/zh-CN/docs/Web/HTTP/Browser_detection_using_the_user_agent)的建议
- [window.navigator.userAgent](/zh-CN/docs/Web/API/Window/navigator)
