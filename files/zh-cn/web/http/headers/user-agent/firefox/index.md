---
title: Firefox 用户代理字符串 (user agent string) 参考
slug: Web/HTTP/Headers/User-Agent/Firefox
---

{{HTTPSidebar}}

此文档描述了 Firefox 4 及之后版本的 Firefox 浏览器，以及基于 [Gecko](/zh-CN/docs/Mozilla/Gecko) 2.0 及以后版本的应用所使用的 User Agent(user agent)。对于 Gecko 2.0 之后产生的变化，可参考 [Firefox 4 中最终的 User Agent 值](https://hacks.mozilla.org/2010/09/final-user-agent-string-for-firefox-4/)（博客文章）。也可以参考 [检测 User Agent](/zh-CN/docs/Web/HTTP/Browser_detection_using_the_user_agent)，以及这篇 Mozilla Hacks 博文：[User Agent 检测的历史与操作清单](https://hacks.mozilla.org/2013/09/user-agent-detection-history-and-checklist/)。

## 总体形式

Firefox 的 User Agent（用户代理）值可被拆分为以下四个部分：

**Mozilla/5.0 (_platform_; rv:_geckoversion_) Gecko/_geckotrail_ Firefox/_firefoxversion_**

- _**Mozilla/5.0**_ 表明该浏览器与 Mozilla 相兼容的通用字符串。此字段几乎存在于现今所有浏览器的用户代理之中。
- **_platform_** 描述了浏览器所运行的本地操作系统平台（例如：Windows，Mac，Linux 或 Android），以及其是否为移动设备。Firefox OS 设备只会简单地表示为"Mobile"；因为它实际上基于 Web。请注意，**_platform_** 的值可包含多个被 ";" 分隔的字段。更多细节与例子可以参考下面内容。
- **rv:_geckoversion_** 显示了 Gecko 的版本号，（如*"17.0"*）。在最近几个版本的浏览器中，**_geckoversion_** 与 **_firefoxversion_** 一致。
- **_Gecko/geckotrail_** 标明浏览器基于 Gecko。
- 在桌面端，_**geckotrail**_ 的值恒为"20100101"。
- _**Firefox/firefoxversion**_ 标明浏览器是 Firefox，并提供了版本号（如"_17.0"_）。
- 自从移动版 Firefox 10 开始，**_geckotrail_**与**_firefoxversion_**保持一致。

> **备注：** （如果你必须检测浏览器引擎，而不是去做特征检测的话）推荐使用"_Gecko_"与"_rv:_"字符串来检测基于 Gecko 的浏览器。因为一些浏览器的 UA 中也包含有"_like Gecko_"字段。

对于其他基于 Gecko 的产品，UA 字符串会符合以下两个规则中的一个，除了下面的描述外，其他字段与上面描述的意义相同。

**Mozilla/5.0 (_platform_; rv:_geckoversion_) Gecko/_geckotrail_ _appname_/_appversion_**
**Mozilla/5.0 (_platform_; rv:_geckoversion_) Gecko/_geckotrail_ Firefox/_firefoxversion_ _appname_/_appversion_**

- **_appname/appversion_** 标明了应用名与版本，举个例子，这个字段可以是"_Camino/2.1.1_"或"_SeaMonkey/2.7.1_"。
- _**Firefox/firefoxversion**_ 是一个可选的兼容字段，一些基于 Gecko 的浏览器选择加入，以使那些支持 Firefox 的网页进行最大的兼容。_**firefoxversion**_ 应与其提供的 Gecko 版本对应的 Firefox 版本相同。一些基于 Gecko 的浏览器可能未加入此此段，因此，在检测的时候，应当使用"Gecko"而非"Firefox"。是否展示这个字段由 about:config 中*"general.useragent.compatMode.firefox"*项设定的布尔值控制。

User Agent（UA String）的**_platform_**部分，标明了 Firefox 是否运行在手机或平板尺寸的设备上。当 Firefox 运行在移动设备上时，UA 中的这个字段将包含**Mobile;**。当 Firefox 运行于平板设备时，UA 中的这个字段将包含**Tablet;**。例如：

```plain
Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0
Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0
```

> **备注：** 上述版本号并不对应当前版本，请避免基于此例子中的版本号。

推荐的判断设备尺寸的方法是使用 CSS 媒体查询 (CSS Media Query)。但是，当你需要使用 UA 判断用户是否使用移动尺寸的设备，请查找"**Mobi**"（以兼容使用"Mobi"的 Opera 移动浏览器）。**不要** 假定"Android"字符串与设备尺寸存在关联。这样的话，在“Firefox 在其他操作系统的移动尺寸设备上运行”或“使用 Android 的笔记本电脑”的情形下，你的代码才能正确运行。此外，请使用触摸检测以分辨设备是否支持触摸，不要使用"Mobi"或"Tablet"，因为也有很多触摸设备并非移动设备或平板。

> **备注：** Firefox OS 设备的 UA 中不会有标明操作系统的字段，比如"Mozilla/5.0 (Mobile; rv:15.0) Gecko/15.0 Firefox/15.0"。因为其平台实为 Web。

## Windows

除却安腾平台与 16 位平台，Windows 中的 User Agent 值有如下几类，其中 _x.y_ 代表 Windows NT 版本，（例如：Windows NT 6.1）。

| Windows 版本             | Gecko User Agent                                                                  |
| ------------------------ | --------------------------------------------------------------------------------- |
| Windows NT on x86        | Mozilla/5.0 (Windows NT _x_._y_; rv:10.0) Gecko/20100101 Firefox/10.0             |
| Windows NT, Win64 on x64 | Mozilla/5.0 (Windows NT _x_._y_; Win64; x64; rv:10.0) Gecko/20100101 Firefox/10.0 |
| Windows NT, WOW64        | Mozilla/5.0 (Windows NT _x_._y_; WOW64; rv:10.0) Gecko/20100101 Firefox/10.0      |

## Macintosh

下表中 _x.y_ 为 Mac OS X 的版本（例如：Mac OS X 10.6）。

| Mac OS X 版本                   | Gecko User Agent                                                                   |
| ------------------------------- | ---------------------------------------------------------------------------------- |
| Mac OS X on Intel x86 or x86_64 | Mozilla/5.0 (Macintosh; Intel Mac OS X _x.y_; rv:10.0) Gecko/20100101 Firefox/10.0 |
| Mac OS X on PowerPC             | Mozilla/5.0 (Macintosh; PPC Mac OS X _x.y_; rv:10.0) Gecko/20100101 Firefox/10.0   |

## Linux

Linux 是一个高度分化的平台，下面给出了几个常见的例子。

| Linux 版本                                     | Gecko User Agent 值                                                                |
| ---------------------------------------------- | ---------------------------------------------------------------------------------- |
| Linux desktop, i686                            | Mozilla/5.0 (X11; Linux i686; rv:10.0) Gecko/20100101 Firefox/10.0                 |
| Linux desktop, x86_64                          | Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20100101 Firefox/10.0               |
| Linux desktop, i686 running on x86_64          | Mozilla/5.0 (X11; Linux i686 on x86_64; rv:10.0) Gecko/20100101 Firefox/10.0       |
| Nokia N900 Linux mobile, on the Fennec browser | Mozilla/5.0 (Maemo; Linux armv7l; rv:10.0) Gecko/20100101 Firefox/10.0 Fennec/10.0 |

## Android (40 版本及以下)

| 设备类型 | Gecko User Agent 值                                            |
| -------- | -------------------------------------------------------------- |
| Phone    | Mozilla/5.0 (Android; Mobile; rv:40.0) Gecko/40.0 Firefox/40.0 |
| Tablet   | Mozilla/5.0 (Android; Tablet; rv:40.0) Gecko/40.0 Firefox/40.0 |
|          |                                                                |

## Android (41 版本及以上)

从 41 版本开始，Firefox Android 会在 _platform_ 字段中包含 Android 版本号。为增加兼容性，如果浏览器在 Android 4 及以下版本的 Android 设备上运行，此字段会使用 4.4，Android 4.4 及以上版本的则会使用当前版本号。请注意，目前发布至不同版本的 Android 设备的 Gecko，是拥有相同兼容性的同一个 Gecko 的不同架构（ARMv7、x86、x86_64）编译版。

| 设备类型 | Gecko User Agent 值                                                |
| -------- | ------------------------------------------------------------------ |
| Phone    | Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0 |
| Tablet   | Mozilla/5.0 (Android 4.4; Tablet; rv:41.0) Gecko/41.0 Firefox/41.0 |

## Firefox OS

| 设备类型        | Gecko User Agent 值                                               |
| --------------- | ----------------------------------------------------------------- |
| Phone           | Mozilla/5.0 (Mobile; rv:26.0) Gecko/26.0 Firefox/26.0             |
| Tablet          | Mozilla/5.0 (Tablet; rv:26.0) Gecko/26.0 Firefox/26.0             |
| TV              | Mozilla/5.0 (TV; rv:44.0) Gecko/44.0 Firefox/44.0                 |
| Device-specific | Mozilla/5.0 (Mobile; _**nnnn;**_ rv:26.0) Gecko/26.0 Firefox/26.0 |

### 具有设备特征的 User Agent 值

尽管 Mozilla **强烈反对**，然而一些手机制造商仍然会在其设备的 User Agent 值中包含标明设备 ID 的字段。在这种情况下，Firefox OS 的 User Agent 会与上表中所示的具有设备特征 (Device-specific) 的字符串保持一致，其中**_nnnn;_**代表设备制造商的设备代码（参见[引导](https://wiki.mozilla.org/B2G/User_Agent/Device_Model_Inclusion_Requirements)）。其中一些是以下几个形式： "**NexusOne;**"，"**ZTEOpen;**"，"**Open C;**"（另请注意，同样不鼓励在其中加入空格）。我们提供这些信息以辅助您设定 User Agent 判断逻辑，但 Mozilla 不鼓励从 User Agent 值中检测设备 ID。

这里有一个可以检测所有移动设备的 JavaScript 正则表达式，包含那些 UA 字符串中包含设备 id 的设备：

```plain
/mobi/i
```

其中 `i` 为大小写敏感的标记，而 `mobi` 则将匹配所有的移动设备。

### Firefox OS 版本号

由于 Firefox OS 的版本号未被包含于 User Agent 值中，我们可以通过 User Agent 中的 Gecko 版本号来推断其版本信息。

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

> **备注：** 通过查看 [Mercurial 版本库名称](https://hg.mozilla.org/releases)，可以较容易地找出对应关系。其中以 `mozilla-b2g` 开头的发布便属于 Firefox OS，在其名字中包含了 Firefox OS 与 Gecko 的版本号。

Firefox OS 的版本号由 4 位数字组成：`X.X.X.Y`。前两位数字由 Mozilla 产品团度决定，表明是包含新特性的版本（如：v1.1, 1.2 等）。第三位数字随安全更新而自增（约 6 周左右），第四位数字由 OEM 维护。

## iOS 上的 Firefox

Firefox iOS 版使用 Safari 移动版的默认 User Agent 再加上 **FxiOS/\<version>** 字段，与 [iOS 上的 Chrome 标记自己的方式](https://developer.chrome.com/multidevice/user-agent#chrome_for_ios_user_agent) 一致。

| 设备型号 | Firefox iOS User Agent 值                                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| iPod     | Mozilla/5.0 (iPod touch; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) **FxiOS/1.0** Mobile/12F69 Safari/600.1.4 |
| iPhone   | Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) **FxiOS/1.0** Mobile/12F69 Safari/600.1.4     |
| iPad     | Mozilla/5.0 (iPad; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) **FxiOS/1.0** Mobile/12F69 Safari/600.1.4       |

## Firefox Web 运行库（Web Runtime）

在 Firefox Web 运行库（Web Runtime）中，使用与桌面版 Firefox 一致的 User Agent 值。

## 其他基于 Gecko 的浏览器

以下是不同平台下，一些基于 Gecko 的浏览器的 User Agent 值样例。请注意，其中很多并未基于 Gecko 2.0 发布。

| 浏览器                         | Gecko User Agent 值                                                                                   |
| ------------------------------ | ----------------------------------------------------------------------------------------------------- |
| Firefox for Maemo (Nokia N900) | Mozilla/5.0 (Maemo; Linux armv7l; rv:10.0.1) Gecko/20100101 Firefox/10.0.1 Fennec/10.0.1              |
| Camino on Mac                  | Mozilla/5.0 (Macintosh; Intel Mac OS X 10.5; rv:2.0.1) Gecko/20100101 Firefox/4.0.1 Camino/2.2.1      |
| SeaMonkey on Windows           | Mozilla/5.0 (Windows NT 5.2; rv:10.0.1) Gecko/20100101 Firefox/10.0.1 SeaMonkey/2.7.1                 |
| SeaMonkey on Mac               | Mozilla/5.0 (Macintosh; Intel Mac OS X 10.5; rv:10.0.1) Gecko/20100101 Firefox/10.0.1 SeaMonkey/2.7.1 |
| SeaMonkey on Linux             | Mozilla/5.0 (X11; Linux i686; rv:10.0.1) Gecko/20100101 Firefox/10.0.1 SeaMonkey/2.7.1                |

## 对于应用、供应商、扩展程序的注意事项

在 Firefox 4 和 Gecko 2.0 之前，扩展程序可以通过 `general.useragent.extra.identifier` 附加 User Agent 值，（参考 [废弃的 User Agent 值参考](/En/User_Agent_Strings_Reference)）。不过 [Firefox bug 581008](https://bugzil.la/581008) 出现后，这种操作已被禁止。

在过去，特定的插件、扩展程序会在 User Agent 中添加字段，以表明他们被安装的来源网站。如果非要如此（请注意，这会减慢每个请求的发送速度），推荐的做法是 [设定自定义 HTTP 请求头](/zh-CN/Setting_HTTP_request_headers)。

## 参见

- [Firefox OS User Agent](http://lawrencemandel.com/2012/07/27/decision-made-firefox-os-user-agent-string/) （参考博客文章以及 [bug 777710](https://bugzilla.mozilla.org/show_bug.cgi?id=777710)）
- [Firefox 4 的最终 User Agent](https://hacks.mozilla.org/2010/09/final-user-agent-string-for-firefox-4/)（博客文章）
- [检测 UA 字符串以获得跨浏览器支持](/zh-CN/Browser_Detection_and_Cross_Browser_Support)
- [window.navigator.userAgent](/zh-CN/docs/Web/API/Navigator/userAgent)
- [为 Fennec UA 字符串添加 Android 版本 (bug 1169772)](https://bugzilla.mozilla.org/show_bug.cgi?id=)

---

Comments to [mozilla.dev.platform](news://news.mozilla.org/netscape.public.mozilla.netlib)
