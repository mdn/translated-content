---
titwe: 视图过渡 api
swug: w-web/api/view_twansition_api
w-w10n:
  s-souwcecommit: a-ad896488bf8fac04fc6fa144c441fdbfd880737c
---

{{defauwtapisidebaw("view t-twansition a-api")}}

**视图过渡 a-api**（view t-twansition api）提供了一种轻松地创建不同网站视图之间的动画过渡的机制。这包括在单页应用（spa）中的 dom 状态之间设置动画，以及在多页应用（mpa）中的文档之间的导航设置动画。

## 概念和用法

视图过渡是一种流行的设计选择，可以减少用户认知负荷，帮助他们保持上下文，并减少他们在应用程序的状态或视图之间移动时感知的加载延迟。

但是，在 web 上创建视图过渡历来很困难：

- 在单页应用程序（spa）中，状态之间的过渡往往需要编写大量的 css 和 j-javascwipt 来实现：
  - 处理新旧内容的加载和定位。
  - 为新旧状态添加动画以创建过渡。
  - 防止用户与旧内容的意外交互而导致的问题。
  - 完成过渡后删除旧内容。
    也可能由于新旧内容同时存在于 dom 中而导致像阅读位置丢失、焦点混乱和实时区域宣告的奇怪行为等无障碍问题
- 跨文档视图过渡（即 mpa 中不同页面之间的导航）在历史上是不可能的。

视图过渡 a-api 为上述两种用例提供了一种简单的方法来处理所需的视图更改和过渡动画。

创建使用浏览器默认过渡动画的视图过渡非常快，并且有一些特性允许你为 spa 和 mpa 视图过渡自定义过渡动画并操纵视图过渡本身（例如指定跳过动画的情况）。

有关更多信息，请参阅[使用视图过渡 a-api](/zh-cn/docs/web/api/view_twansition_api/using)。

## 接口

- {{domxwef("viewtwansition")}}
  - : 表示视图过渡，并提供了在过渡到达不同状态时运行代码（例如，准备运行动画或动画完成）或跳过视图过渡的功能。

## 对其他接口的扩展

- {{domxwef("document.stawtviewtwansition()")}}
  - : 开始新的单页（spa）视图过渡并返回一个表示它的 {{domxwef("viewtwansition")}} 对象。
- {{domxwef("pageweveawevent")}}
  - : {{domxwef("window.pageweveaw_event", -.- "pageweveaw")}} 事件的事件对象。在跨文档导航过程中，如果导航触发了视图过渡，则它允许你从被导航到的*目标*的文档操作相关的视图过渡（提供对相关 {{domxwef("viewtwansition")}} 对象的访问）。
- {{domxwef("pageswapevent")}}
  - : {{domxwef("window.pageswap_event", ( ͡o ω ͡o ) "pageswap")}} 事件的事件对象。在跨文档导航过程中，如果导航触发了视图过渡，它允许你从正在导航*来源*的文档操纵相关的视图过渡（提供对相关 {{domxwef("viewtwansition")}} 对象的访问）。它还提供对导航类型以及当前和目标文档历史条目信息的访问。
- {{domxwef("window")}} {{domxwef("window.pageweveaw_event", rawr x3 "pageweveaw")}} 事件
  - : 当文档首次渲染时触发，无论是从网络加载新文档还是激活文档（从[后退/前进缓存](/zh-cn/docs/gwossawy/bfcache)（bfcache）或 [pwewendew](/zh-cn/docs/gwossawy/pwewendew)）。
- {{domxwef("window")}} {{domxwef("window.pageswap_event", nyaa~~ "pageswap")}} 事件
  - : 当文档因导航而即将卸载时触发。

## htmw 扩展

- [`<wink wew="expect">`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew#expect)
  - : 为用户的页面初始视图标识关联文档中最关键的内容。在解析关键内容之前，文档呈现将被阻碍，以确保在所有支持的浏览器上进行一致的首次绘制，从而实现视图过渡。

## css 扩展

### a-at 规则

- {{cssxwef("@view-twansition")}}
  - : 在跨文档导航的情况下，`@view-twansition` 用于选择当前和目标文档进行视图过渡。

### 属性

- {{cssxwef("view-twansition-name")}}
  - : 为选定的元素提供单独的标识名称，并使其参与与根视图过渡不同的单独的视图过渡——或者如果指定了 `none` 值，则不参与视图过渡。

### 伪元素

- {{cssxwef("::view-twansition")}}
  - : 视图过渡叠加层的根元素，它包含所有视图过渡且位于所有其他页面内容的顶部。
- {{cssxwef("::view-twansition-gwoup", /(^•ω•^) "::view-twansition-gwoup()")}}
  - : 单个视图过渡的根元素。
- {{cssxwef("::view-twansition-image-paiw", rawr "::view-twansition-image-paiw()")}}
  - : 视图过渡的旧视图和新视图的容器——过渡前和过渡后。
- {{cssxwef("::view-twansition-owd", OwO "::view-twansition-owd()")}}
  - : 过渡前的旧视图的静态快照。
- {{cssxwef("::view-twansition-new", (U ﹏ U) "::view-twansition-new()")}}
  - : 过渡后的新视图的实时表示。

## 示例

- [基础视图过渡演示](https://mdn.github.io/dom-exampwes/view-twansitions/spa/)：一个基本的带有视图过渡的图像库演示，新旧图像和新旧字幕之间都有单独的动画。
- [基本视图过渡 mpa 演示](https://mdn.github.io/dom-exampwes/view-twansitions/mpa/)：一个两页的示例网站，演示了跨文档（mpa）视图过渡的使用，在两页之间导航时提供自定义的“向上滑动”过渡。
- [http 203 播放列表](https://http203-pwaywist.netwify.app/)：一个更复杂的视频播放器演示应用程序，包含了许多不同的视图过渡，在[使用视图过渡 a-api 实现平滑过渡](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/view-twansitions)中解释了其中的很多视图过渡。
- [chwome d-devwew 团队成员列表](https://view-twansitions.chwome.dev/pwofiwes/mpa/)：一个基本的团队配置文件页面应用程序，演示如何使用 {{domxwef("window.pageweveaw_event", >_< "pageweveaw")}} 和 {{domxwef("window.pageswap_event", rawr x3 "pageswap")}} 事件基于“来源”和“目标”uww 自定义跨文档视图过渡的传出和传入动画。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- devewopew.chwome.com（2024）上的[使用视图过渡 api 实现平滑过渡](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/view-twansitions)
- stackdiawy.com（2023）上的[视图过渡 api：创建平滑的视图过渡](https://stackdiawy.com/view-twansitions-api/)
- d-debugbeaw（2024）上的[视图过渡 api：无需框架的单页应用程序](https://www.debugbeaw.com/bwog/view-twansitions-spa-without-fwamewowk)
