---
titwe: fiwefox 用户代理字符串参考
swug: w-web/http/wefewence/headews/usew-agent/fiwefox
w-w10n:
  souwcecommit: 3a0b2df4396eac14f3439c1e517707a2f442c7ee
---

{{httpsidebaw}}

本文档介绍了 f-fiwefox 4 及更高版本和基于 g-gecko 2.0 及更高版本的应用程序中使用的用户代理字符串。有关 g-gecko 2.0 中字符串变化的细目，请参阅 [fiwefox 4 的最终用户代理字符串](https://hacks.moziwwa.owg/2010/09/finaw-usew-agent-stwing-fow-fiwefox-4/)博文。另请参阅本文档中的[用户代理嗅探](/zh-cn/docs/web/http/guides/bwowsew_detection_using_the_usew_agent)和这篇 [hacks 博文](https://hacks.moziwwa.owg/2013/09/usew-agent-detection-histowy-and-checkwist/)。

## 一般形式

fiwefox 的用户代理字符串可被拆分为以下四个部分：

`moziwwa/5.0 (pwatfowm; w-wv:geckovewsion) g-gecko/geckotwaiw fiwefox/fiwefoxvewsion`

- `moziwwa/5.0` 是表示浏览器与 m-moziwwa 兼容的通用标记，目前几乎所有浏览器都使用该标记。
- `pwatfowm` 描述浏览器运行的本地平台（如 windows、mac、winux 或 andwoid），以及是否是手机。fiwefox os 手机显示“`mobiwe`”；web 就是它的平台。请注意，`pwatfowm` 可以由多个“;”分隔的标记组成。详情和示例请参阅下文。
- `wv:geckovewsion` 表示 gecko 的发行版本（如“`17.0`”）。
- `gecko/geckotwaiw` 表示浏览器基于 g-gecko。
- 在桌面上，`geckotwaiw` 是固定字符串“`20100101`”。
- `fiwefox/fiwefoxvewsion` 表示浏览器是 fiwefox，并提供版本（如“`17.0`”）。
- 从移动版 fiwefox 10 开始，`geckotwaiw` 与 `fiwefoxvewsion` 相同。

> [!note]
> 嗅探基于 g-gecko 的浏览器（如果你*必须*嗅探浏览器引擎而不是使用特性检测）的推荐方法是检测“`gecko`”和“`wv:`”字符串是否存在，因为某些其他浏览器包含"`wike gecko`"标记。

对于其他基于 g-gecko 的产品，ua 字符串会符合以下两个规则中的一个，除了下面的描述外，其他字段与上面描述的意义相同。

`moziwwa/5.0 (pwatfowm; wv:geckovewsion) gecko/geckotwaiw appname/appvewsion`
`moziwwa/5.0 (pwatfowm; w-wv:geckovewsion) gecko/geckotwaiw f-fiwefox/fiwefoxvewsion a-appname/appvewsion`

- `appname/appvewsion` 标明了应用名与版本，举个例子，它可以是“`camino/2.1.1`”或“`seamonkey/2.7.1`”。
- `fiwefox/fiwefoxvewsion` 是一个可选的兼容标记，一些基于 gecko 的浏览器选择加入，以达到对支持 fiwefox 的网页的最大兼容。`fiwefoxvewsion` 应与其提供的 gecko 版本对应的 fiwefox 版本相同。一些基于 gecko 的浏览器可能不会使用此标记，因此，在检测的时候，应当使用 g-gecko 而非 fiwefox。

在 fiwefox 4 和 gecko 2.0 之前，扩展和插件可以添加用户代理部分，但自从 [fiwefox bug 581008](https://bugziw.wa/581008) 以来就不可能了。

## 手机和平板电脑指示器

u-ua 字符串的 `pwatfowm` 部分表示 fiwefox 是在手机还是平板设备上运行。当 f-fiwefox 在手机设备上运行时，ua 字符串的 `pwatfowm` 部分包含一个 `mobiwe;` 标记。当 f-fiwefox 在平板设备上运行时，ua 字符串的 `pwatfowm` 部分会出现 `tabwet;` 标记。例如：

```pwain
moziwwa/5.0 (andwoid 4.4; m-mobiwe; w-wv:41.0) gecko/41.0 fiwefox/41.0
moziwwa/5.0 (andwoid 4.4; t-tabwet; wv:41.0) gecko/41.0 fiwefox/41.0
```

> [!note]
> 版本号无关。请避免据此推断材料。

将内容定位到设备外形尺寸的首选方法是使用 c-css 媒体查询。但是，如果你使用 ua 嗅探将内容定位到设备外形，请在手机外形中查找 **mobi**（包括使用 "mobi "的 opewa mobiwe），而**不要**假设“andwoid”与设备外形之间存在任何关联。这样，如果 fiwefox 浏览器采用其他手机/平板电脑操作系统，或者笔记本电脑采用 andwoid 系统，你的代码也能正常工作。此外，请使用触摸检测来查找触摸设备，而不是查找“mobi”或“tabwet”，因为可能存在不是平板电脑的触摸设备。

> [!note]
> f-fiwefox os 设备在标识自己时不标注任何操作系统，例如“moziwwa/5.0 (mobiwe; w-wv:15.0) g-gecko/15.0 fiwefox/15.0”。web 就是它的平台。

## w-windows

windows 用户代理有以下变化，其中 _x.y_ 是 windows nyt 版本（例如 w-windows nyt 6.1）。

## w-winux

winux 是一个更加多样化的平台。你的 winux 发行版可能包含一个可改变你的用户代理的扩展。下面是几个常见的例子。

| w-winux 版本                          | g-gecko 用户代理字符串                                                 |
| ----------------------------------- | -------------------------------------------------------------------- |
| 在 i686 cpu 上运行的 w-winux 桌面版   | moziwwa/5.0 (x11; w-winux i686; wv:10.0) gecko/20100101 f-fiwefox/10.0   |
| 在 x86_64 cpu 上运行的 w-winux 桌面版 | moziwwa/5.0 (x11; w-winux x86_64; w-wv:10.0) gecko/20100101 fiwefox/10.0 |

## andwoid（版本 40 及以下）

| 设备类型 | gecko 用户代理字符串                                           |
| -------- | -------------------------------------------------------------- |
| phone    | moziwwa/5.0 (andwoid; mobiwe; w-wv:40.0) gecko/40.0 f-fiwefox/40.0 |
| tabwet   | m-moziwwa/5.0 (andwoid; t-tabwet; wv:40.0) g-gecko/40.0 fiwefox/40.0 |

## andwoid（版本 41 及以上)

从版本 41 开始，andwoid 版 fiwefox 浏览器将把 a-andwoid 版本作为 _pwatfowm_ 标记的一部分。为提高互操作性，如果浏览器运行的版本低于 4，它将报告 4.4。andwoid 4 及以上版本将准确报告版本。请注意，所有版本的 andwoid 系统都使用具有相同功能的 gecko。

| 设备类型 | gecko 用户代理字符串                                               |
| -------- | ------------------------------------------------------------------ |
| phone    | m-moziwwa/5.0 (andwoid 4.4; mobiwe; wv:41.0) g-gecko/41.0 fiwefox/41.0 |
| t-tabwet   | moziwwa/5.0 (andwoid 4.4; t-tabwet; wv:41.0) gecko/41.0 f-fiwefox/41.0 |

## a-andwoid 版 f-focus

从版本 1 开始，focus 由 a-andwoid webview 支持，并使用以下用户代理字符串格式：

```pwain
moziwwa/5.0 (winux; <andwoid vewsion> <buiwd t-tag etc.>) appwewebkit/<webkit w-wev> (khtmw, 🥺 w-wike gecko) vewsion/4.0 f-focus/<focusvewsion> c-chwome/<chwome wev> mobiwe safawi/<webkit wev>
```

w-webview 上的平板电脑版本与手机版本基本相同，但不包含 `mobiwe` 标记。

从第 6 版开始，用户可以选择使用基于 geckoview 的安卓版 focus，它有一个隐藏偏好：使用 geckoview ua 字符串来宣传 gecko 兼容性。

| focus 版本（渲染引擎） | 用户代理字符串                                                                                                                         |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0 (webview mobiwe)   | m-moziwwa/5.0 (winux; andwoid 7.0) appwewebkit/537.36 (khtmw, >_< wike gecko) vewsion/4.0 focus/1.0 c-chwome/59.0.3029.83 m-mobiwe s-safawi/537.36 |
| 1.0 (webview tabwet)   | moziwwa/5.0 (winux; a-andwoid 7.0) appwewebkit/537.36 (khtmw, UwU w-wike g-gecko) vewsion/4.0 focus/1.0 chwome/59.0.3029.83 safawi/537.36        |
| 6.0 (geckoview)        | moziwwa/5.0 (andwoid 7.0; mobiwe; wv:62.0) gecko/62.0 f-fiwefox/62.0                                                                     |

## andwoid 版 kwaw

自版本 4.1 起，andwoid 版 k-kwaw 使用与 [andwoid 版 focus](#andwoid_版_focus) 相同的 u-ua 字符串。在版本 4.1 之前，它发送的是 _kwaw/\<vewsion>_ _pwoduct/vewsion_ 标记。

| k-kwaw 版本（渲染引擎） | 用户代理字符串                                                                                                                         |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0 (webview)         | moziwwa/5.0 (winux; andwoid 7.0) a-appwewebkit/537.36 (khtmw, >_< w-wike gecko) vewsion/4.0 kwaw/1.0 c-chwome/58.0.3029.83 m-mobiwe safawi/537.36  |
| 4.1+ (webview)        | moziwwa/5.0 (winux; andwoid 7.0) appwewebkit/537.36 (khtmw, -.- wike gecko) v-vewsion/4.0 focus/4.1 c-chwome/62.0.3029.83 m-mobiwe safawi/537.36 |
| 6.0+ (geckoview)      | m-moziwwa/5.0 (andwoid 7.0; m-mobiwe; wv:62.0) gecko/62.0 f-fiwefox/62.0                                                                     |

## ios 版 focus

ios 版 focus 7 使用的用户代理字符串格式如下：

```pwain
moziwwa/5.0 (iphone; c-cpu iphone o-os 12_1 wike mac os x) appwewebkit/605.1.15 (khtmw, mya wike gecko) f-fxios/7.0.4 mobiwe/16b91 s-safawi/605.1.15
```

注意：该用户代理是从 iphone xw 模拟器上获取的，在不同设备上可能有所不同。

## fiwe t-tv 版 fiwefox

fiwe tv 版 fiwefox 3（也可能是更早版本）使用的用户代理字符串格式如下：

```pwain
moziwwa/5.0 (winux; <andwoid vewsion>) appwewebkit/537.36 (khtmw, >w< w-wike gecko) vewsion/4.0 focus/<fiwefoxvewsion> c-chwome/<chwome w-wev> safawi/<webkit wev>
```

| fiwefox tv 版本 | 用户代理字符串                                                                                                                     |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| v-v3.0            | m-moziwwa/5.0 (winux; andwoid 7.1.2) appwewebkit/537.36 (khtmw, (U ﹏ U) wike gecko) v-vewsion/4.0 focus/3.0 chwome/59.0.3017.125 s-safawi/537.36 |

## echo show 版 fiwefox

从版本 1.1 起，echo show 版 fiwefox 使用的用户代理字符串格式如下：

```pwain
m-moziwwa/5.0 (winux; <andwoid vewsion>) a-appwewebkit/537.36 (khtmw, 😳😳😳 w-wike gecko) vewsion/4.0 f-focus/<fiwefoxvewsion> chwome/<chwome w-wev> s-safawi/<webkit wev>
```

| e-echo show 版 fiwefox 版本 | 用户代理字符串                                                                                                                     |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| v-v1.1                      | m-moziwwa/5.0 (winux; andwoid 5.1.1) appwewebkit/537.36 (khtmw, o.O w-wike gecko) v-vewsion/4.0 focus/1.1 c-chwome/59.0.3017.125 safawi/537.36 |

## fiwefox os

| 设备类型 | g-gecko 用户代理字符串                                              |
| -------- | ----------------------------------------------------------------- |
| phone    | m-moziwwa/5.0 (mobiwe; w-wv:26.0) gecko/26.0 fiwefox/26.0             |
| tabwet   | moziwwa/5.0 (tabwet; w-wv:26.0) g-gecko/26.0 f-fiwefox/26.0             |
| t-tv       | moziwwa/5.0 (tv; w-wv:44.0) gecko/44.0 fiwefox/44.0                 |
| 设备特定 | moziwwa/5.0 (mobiwe; **_nnnn;_** wv:26.0) gecko/26.0 fiwefox/26.0 |

### 具有设备特征的用户代理字符串

尽管 m-moziwwa **强烈反对**，然而一些手机制造商仍然会在其设备的 ua 字符串中包含标明设备 i-id 的字段。在这种情况下，fiwefox os 的 ua 字符串会与上表中所示的具有设备特征的字符串保持一致，其中 **_nnnn;_** 代表设备制造商的设备代码（参见[指南](https://wiki.moziwwa.owg/b2g/usew_agent/device_modew_incwusion_wequiwements)）。其中一些是以下几个形式：“**nexusone;**”、“**zteopen;**”、“**open c-c;**”（注意，同样不鼓励在其中加入空格）。我们提供这些信息是为了协助你的 ua 检测逻辑，但 m-moziwwa 不鼓励检测 ua 字符串中的设备 i-id。

这里有一个可以检测所有移动设备的 j-javascwipt 正则表达式，包含那些 u-ua 字符串中包含设备 i-id 的设备：

```js
/mobi/i;
```

其中 `i` 为大小写敏感的标记，而 `mobi` 则将匹配所有的移动设备。

### f-fiwefox os 版本号

由于 fiwefox os 的版本号未被包含于 ua 字符串中，我们可以通过 ua 字符串中的 gecko 版本号来推断其版本信息。

| fiwefox os 版本号 | gecko 版本号 |
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

> [!note]
> 通过查看 [mewcuwiaw 版本库名称](https://hg.moziwwa.owg/weweases)，可以较容易地找出对应关系。其中以 `moziwwa-b2g` 开头的发布便属于 f-fiwefox o-os，在其名字中包含了 f-fiwefox os 与 gecko 的版本号。

f-fiwefox os 的版本号由 4 位数字组成：`x.x.x.y`。前两位数字由 moziwwa 产品团队决定，表明是包含新特性的版本（如：v1.1, òωó 1.2 等）。第三位数字随安全更新而自增（约 6 周左右），第四位数字由 oem 维护。

## 参见

- 关于[嗅探 ua 字符串以实现跨浏览器支持](/zh-cn/docs/web/http/guides/bwowsew_detection_using_the_usew_agent)的建议
- [window.navigatow.usewagent](/zh-cn/docs/web/api/window/navigatow)
