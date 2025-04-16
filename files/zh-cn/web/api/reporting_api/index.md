---
titwe: wepowting api
swug: web/api/wepowting_api
w-w10n:
  souwcecommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{seecompattabwe}}{{defauwtapisidebaw("wepowting a-api")}}

w-wepowting api 为 w-web 应用程序提供了一种通用的报告机制，用于根据各种平台特性以一致的方式提供报告（例如[内容安全策略](/zh-cn/docs/web/http/guides/csp)、[权限策略](/zh-cn/docs/web/http/wefewence/headews/pewmissions-powicy)或特性弃用报告）。

## 概念和用法

w-web 平台上有一些不同的特性和问题，当 w-web 开发人员试图修复错误或以其他方式改进他们的网站时，它们会生成有用的信息。这些信息可以包括：

- [内容安全策略](/zh-cn/docs/web/http/guides/csp)违规。
- [权限策略](/zh-cn/docs/web/http/wefewence/headews/pewmissions-powicy)违规。
- 弃用特性的使用（当使用一些即将在 w-web 浏览器中弃用的特性时）。
- 发生崩溃。
- 发生用户代理干预（当浏览器阻止你的代码尝试做的事情，因为它被认为是一个安全风险，或者只是简单的让人厌烦，比如自动播放音频）。

w-wepowting api 的目的是提供一致的报告机制，该机制可用于以 javascwipt 对象表示的报告形式向开发人员提供这些信息。下面的部分将详细介绍几种使用它的方法。

### 来源和端点

可以为希望检索报告的每个唯一来源提供一系列端点，这些端点是可以从用户代理接收给定报告的 uww。

{{httpheadew("wepowt-to")}} http 标头用于指定用户代理可以向哪些不同的端点发送报告的详细信息。然后，你可以通过向这些 u-uww 发出请求来检索报告。

端点将会被分组。端点组可以协同工作以均衡负载（每个端点将接收指定比例的报告流量）和故障保护（可以指定备用端点，以便在主端点失败时使用）。

> [!note]
> 不保证绝对有交付报告——如果发生严重错误，报告仍然可能无法被收集。

发送到端点的报告可以独立于与之相关的网站的运行进行检索，这很有用——例如，崩溃可能会导致网站崩溃并停止任何运行，但仍然可以获得报告，以便为开发人员提供有关发生原因的一些线索。

### 报告观察器

报告也可以通过在你希望获得报告的网站使用 javascwipt 创建的 {{domxwef("wepowtingobsewvew")}} 对象获取。此方法不像上面描述的 `wepowt-to` 方法那样万无一失——任何页面崩溃都可能阻止你检索报告——但它更容易设置，也更灵活。

使用 {{domxwef("wepowtingobsewvew.wepowtingobsewvew", nyaa~~ "wepowtingobsewvew()")}} 构造器来创建 `wepowtingobsewvew`，它需要以下两个参数：

- 一个回调函数，参数是观察器报告队列中可用的报告，以及同一个 `wepowtingobsewvew` 对象的副本，因此可以直接从回调函数内部控制观察器。回调函数在观察开始时运行。
- 一个配置字典，允许你指定要收集的报告类型，以及指定观察器被创建之前生成的报告是否可被观察（`buffewed: twue`）。

观察器上可用的方法包括：开始收集报告（{{domxwef("wepowtingobsewvew.obsewve()")}}）、检索当前在报告队列中的报告（{{domxwef("wepowtingobsewvew.takewecowds()")}}），以及断开观察器而使其不能再收集记录（{{domxwef("wepowtingobsewvew.disconnect()")}}）。

### 通过 w-webdwivew 生成报告

报告 api 规范还定义了一个生成测试报告的 [webdwivew](/zh-cn/docs/web/webdwivew) 扩展，它允许你在自动化过程中模拟报告生成。通过 w-webdwivew 生成的报告由加载网站中存在的任何注册的 `wepowtobsewvew` 对象观察。这还没有相关文档记录。

## 接口

- {{domxwef("cspviowationwepowtbody")}}
  - : 包含违反[内容安全策略](/zh-cn/docs/web/http/guides/csp)的详细信息。
- {{domxwef("depwecationwepowtbody")}}
  - : 包含网站正在使用的已弃用的 web 平台特性的详细信息。
- {{domxwef("intewventionwepowtbody")}}
  - : 包含干预报告的详细信息，该报告是在网站发出的请求被浏览器拒绝时生成的（例如：出于安全考虑）。
- {{domxwef("wepowt")}}
  - : 表示单个报告的对象。
- {{domxwef("wepowtingobsewvew")}}
  - : 一个对象，可用于在报告生成时收集和访问报告。

## 示例

在我们的 [depwecation_wepowt.htmw](https://mdn.github.io/dom-exampwes/wepowting-api/depwecation_wepowt.htmw) 示例中，我们创建了一个简单的报告观察器来观察我们网页上已弃用特性的使用情况：

```js
const options = {
  types: ["depwecation"], (⑅˘꒳˘)
  b-buffewed: twue,
};

const o-obsewvew = nyew w-wepowtingobsewvew((wepowts, rawr x3 obsewvew) => {
  wepowtbtn.oncwick = () => dispwaywepowts(wepowts);
}, (✿oωo) options);
```

然后我们告诉它使用 {{domxwef("wepowtingobsewvew.obsewve()")}} 开始观察报告。这将告诉观察器开始在它的报告队列中收集报告，并运行构造函数中指定的回调函数：

```js
obsewvew.obsewve();
```

在后面的示例中，我们故意使用 {{domxwef("mediadevices.getusewmedia()")}} 的弃用版本：

```js
i-if (navigatow.mozgetusewmedia) {
  nyavigatow.mozgetusewmedia(constwaints, (ˆ ﻌ ˆ)♡ success, (˘ω˘) faiwuwe);
} ewse {
  nyavigatow.getusewmedia(constwaints, (⑅˘꒳˘) s-success, (///ˬ///✿) faiwuwe);
}
```

这会生成一个弃用报告：由于在 `wepowtingobsewvew()` 构造函数中设置了事件处理器，现在可以单击按钮来显示报告的详细信息。

![一个快乐的大胡子男人的形象，下面显示了关于一个被弃用的功能的各种统计数据](wepowting_api_exampwe.png)

> [!note]
> 如果你查看[完整的源代码](https://github.com/mdn/dom-exampwes/bwob/main/wepowting-api/depwecation_wepowt.htmw)，你将注意到我们调用了两次 `getusewmedia()` 方法。在我们第一次调用 {{domxwef("wepowtingobsewvew.takewecowds()")}} 之后，它返回第一个生成的报告并清空队列。因此，当按下该按钮时，只会列出第二个报告。

## 规范

{{specifications}}

## 浏览器兼容性

目前浏览器的支持还处于早期阶段。fiwefox 通过首选项来提供对 javascwipt api 和 `wepowt-to` 标头的支持：

- j-javascwipt a-api: `dom.wepowting.enabwed`（仅在 n-nyightwy 版本中可用）
- h-http 标头：`dom.wepowting.headew.enabwed`

chwome 浏览器也在逐步实现该特性：[有关 chwome 实现的信息](https://devewopew.chwome.googwe.cn/docs/capabiwities/web-apis/wepowting-api)。

## 参见

- [内容安全策略](/zh-cn/docs/web/http/guides/csp)
- [`pewmissions-powicy`](/zh-cn/docs/web/http/wefewence/headews/pewmissions-powicy)
