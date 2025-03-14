---
title: Reporting API
slug: Web/API/Reporting_API
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{SeeCompatTable}}{{DefaultAPISidebar("Reporting API")}}

Reporting API 为 web 应用程序提供了一种通用的报告机制，用于根据各种平台特性以一致的方式提供报告（例如[内容安全策略](/zh-CN/docs/Web/HTTP/Guides/CSP)、[权限策略](/zh-CN/docs/Web/HTTP/Reference/Headers/Permissions-Policy)或特性弃用报告）。

## 概念和用法

web 平台上有一些不同的特性和问题，当 web 开发人员试图修复错误或以其他方式改进他们的网站时，它们会生成有用的信息。这些信息可以包括：

- [内容安全策略](/zh-CN/docs/Web/HTTP/Guides/CSP)违规。
- [权限策略](/zh-CN/docs/Web/HTTP/Reference/Headers/Permissions-Policy)违规。
- 弃用特性的使用（当使用一些即将在 web 浏览器中弃用的特性时）。
- 发生崩溃。
- 发生用户代理干预（当浏览器阻止你的代码尝试做的事情，因为它被认为是一个安全风险，或者只是简单的让人厌烦，比如自动播放音频）。

Reporting API 的目的是提供一致的报告机制，该机制可用于以 JavaScript 对象表示的报告形式向开发人员提供这些信息。下面的部分将详细介绍几种使用它的方法。

### 来源和端点

可以为希望检索报告的每个唯一来源提供一系列端点，这些端点是可以从用户代理接收给定报告的 URL。

{{httpheader("Report-To")}} HTTP 标头用于指定用户代理可以向哪些不同的端点发送报告的详细信息。然后，你可以通过向这些 URL 发出请求来检索报告。

端点将会被分组。端点组可以协同工作以均衡负载（每个端点将接收指定比例的报告流量）和故障保护（可以指定备用端点，以便在主端点失败时使用）。

> [!NOTE]
> 不保证绝对有交付报告——如果发生严重错误，报告仍然可能无法被收集。

发送到端点的报告可以独立于与之相关的网站的运行进行检索，这很有用——例如，崩溃可能会导致网站崩溃并停止任何运行，但仍然可以获得报告，以便为开发人员提供有关发生原因的一些线索。

### 报告观察器

报告也可以通过在你希望获得报告的网站使用 JavaScript 创建的 {{domxref("ReportingObserver")}} 对象获取。此方法不像上面描述的 `Report-To` 方法那样万无一失——任何页面崩溃都可能阻止你检索报告——但它更容易设置，也更灵活。

使用 {{domxref("ReportingObserver.ReportingObserver", "ReportingObserver()")}} 构造器来创建 `ReportingObserver`，它需要以下两个参数：

- 一个回调函数，参数是观察器报告队列中可用的报告，以及同一个 `ReportingObserver` 对象的副本，因此可以直接从回调函数内部控制观察器。回调函数在观察开始时运行。
- 一个配置字典，允许你指定要收集的报告类型，以及指定观察器被创建之前生成的报告是否可被观察（`buffered: true`）。

观察器上可用的方法包括：开始收集报告（{{domxref("ReportingObserver.observe()")}}）、检索当前在报告队列中的报告（{{domxref("ReportingObserver.takeRecords()")}}），以及断开观察器而使其不能再收集记录（{{domxref("ReportingObserver.disconnect()")}}）。

### 通过 WebDriver 生成报告

报告 API 规范还定义了一个生成测试报告的 [WebDriver](/zh-CN/docs/Web/WebDriver) 扩展，它允许你在自动化过程中模拟报告生成。通过 WebDriver 生成的报告由加载网站中存在的任何注册的 `ReportObserver` 对象观察。这还没有相关文档记录。

## 接口

- {{domxref("CSPViolationReportBody")}}
  - : 包含违反[内容安全策略](/zh-CN/docs/Web/HTTP/Guides/CSP)的详细信息。
- {{domxref("DeprecationReportBody")}}
  - : 包含网站正在使用的已弃用的 web 平台特性的详细信息。
- {{domxref("InterventionReportBody")}}
  - : 包含干预报告的详细信息，该报告是在网站发出的请求被浏览器拒绝时生成的（例如：出于安全考虑）。
- {{domxref("Report")}}
  - : 表示单个报告的对象。
- {{domxref("ReportingObserver")}}
  - : 一个对象，可用于在报告生成时收集和访问报告。

## 示例

在我们的 [deprecation_report.html](https://mdn.github.io/dom-examples/reporting-api/deprecation_report.html) 示例中，我们创建了一个简单的报告观察器来观察我们网页上已弃用特性的使用情况：

```js
const options = {
  types: ["deprecation"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  reportBtn.onclick = () => displayReports(reports);
}, options);
```

然后我们告诉它使用 {{domxref("ReportingObserver.observe()")}} 开始观察报告。这将告诉观察器开始在它的报告队列中收集报告，并运行构造函数中指定的回调函数：

```js
observer.observe();
```

在后面的示例中，我们故意使用 {{domxref("MediaDevices.getUserMedia()")}} 的弃用版本：

```js
if (navigator.mozGetUserMedia) {
  navigator.mozGetUserMedia(constraints, success, failure);
} else {
  navigator.getUserMedia(constraints, success, failure);
}
```

这会生成一个弃用报告：由于在 `ReportingObserver()` 构造函数中设置了事件处理器，现在可以单击按钮来显示报告的详细信息。

![一个快乐的大胡子男人的形象，下面显示了关于一个被弃用的功能的各种统计数据](reporting_api_example.png)

> [!NOTE]
> 如果你查看[完整的源代码](https://github.com/mdn/dom-examples/blob/main/reporting-api/deprecation_report.html)，你将注意到我们调用了两次 `getUserMedia()` 方法。在我们第一次调用 {{domxref("ReportingObserver.takeRecords()")}} 之后，它返回第一个生成的报告并清空队列。因此，当按下该按钮时，只会列出第二个报告。

## 规范

{{Specifications}}

## 浏览器兼容性

目前浏览器的支持还处于早期阶段。Firefox 通过首选项来提供对 JavaScript API 和 `Report-To` 标头的支持：

- JavaScript API: `dom.reporting.enabled`（仅在 Nightly 版本中可用）
- HTTP 标头：`dom.reporting.header.enabled`

Chrome 浏览器也在逐步实现该特性：[有关 Chrome 实现的信息](https://developer.chrome.google.cn/docs/capabilities/web-apis/reporting-api)。

## 参见

- [内容安全策略](/zh-CN/docs/Web/HTTP/Guides/CSP)
- [`Permissions-Policy`](/zh-CN/docs/Web/HTTP/Reference/Headers/Permissions-Policy)
