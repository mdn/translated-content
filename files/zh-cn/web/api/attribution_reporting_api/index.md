---
title: 归因报告 API
slug: Web/API/Attribution_Reporting_API
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{securecontext_header}}{{DefaultAPISidebar("Attribution Reporting API")}}

**归因报告 API**（Attribution Reporting API）使开发者能够衡量转化——比如当用户点击嵌入在某个网站上的广告，然后在供应商的网站上购买商品——并随后访问这些转化的报告。它在不依赖第三方跟踪 cookie 的情况下完成这一过程。

## 概念和用法

广告主通常希望衡量有多少用户看到了广告后，接着查看并购买了产品（转化）。这使他们能够了解哪些广告投放带来了最大的投资回报率（ROI），从而可以相应地调整他们的广告策略。衡量转化的过程通常包括捕捉以下数据：

- 哪些用户进行了转化（例如购买了商品或注册了服务），以及转化的数量。
- 他们所在的地理区域。
- 广告投放的位置。
- 销售了多少产品、注册了多少服务等。
- 产生了多少收入。

传统上，Web 上的转化测量依赖于第三方跟踪 cookie。广告通常嵌入在网页的一个 {{htmlelement("iframe")}} 中，这样可以设置一个包含用户及其与广告互动信息的 cookie。

之后，当用户决定访问广告主的网站时，只要该网站来自与广告相同的域名，该网站就可以访问之前由广告设置的第三方 cookie。广告主可以将广告的数据与自己的第一方数据关联起来，以回答诸如“用户在与另一个网站的产品广告互动后是否购买了该产品？”的问题。

这对用户[隐私](/zh-CN/docs/Web/Privacy)不友好。在这种情况下，来自相同域名的任何页面都可以访问该 cookie，以及嵌入这些页面的网站的信息。许多方可以访问这些数据，并根据用户的浏览习惯推测其他数据。

归因报告 API 提供了一种保护用户隐私的广告转化测量方式。

### 它是如何工作的？

让我们通过一个例子来说明归因报告 API 的工作原理。

假设我们有一个在线商店 `shop.example`（即广告主），它在一个内容网站 `news.example`（即发布者）上嵌入了一个关于其产品的广告。广告内容位于 `ad.shop.example`。

在线商店的拥有者希望衡量从与广告互动、查看其网站上的产品页面并将产品放入购物车的用户那里获得多少转化。

![下面图像表示了描述的步骤](ara-flow.png)

涉及的步骤如下：

1. 当用户访问 `news.example` 网站时，可以为与嵌入广告的特定用户交互注册一个**归因来源**。用户可以通过多种方式与页面上的广告互动。为了使广告交互注册归因来源，广告必须发送一个带有 {{httpheader("Attribution-Reporting-Eligible")}} 标头的请求，以表明响应有资格注册归因来源。如果响应中包含适当的 {{httpheader("Attribution-Reporting-Register-Source")}} 标头，则完成归因来源的注册。归因来源可以是，例如：
   - 一个链接。在这种情况下，交互是用户点击链接（直接通过 {{htmlelement("a")}} 元素，或通过 {{domxref("Window.open()")}} 调用）。通过对导航请求的响应来注册来源。
   - 一张图片，例如广告横幅或 1x1 透明跟踪像素。在这种情况下，交互是用户访问页面。图片加载时，即服务器响应图片请求时，注册来源。
   - 一个 fetch 请求（即 {{domxref("Window/fetch", "fetch()")}} 或 {{domxref("XMLHttpRequest")}}）。在这种情况下，交互可以根据你的应用程序的需要进行指定——例如，fetch 请求可以由 `click` 或 `submit` 事件触发。来源在响应返回时注册。
2. 当归因来源交互发生时，{{httpheader("Attribution-Reporting-Register-Source")}} 标头中返回的来源数据会存储在仅浏览器可访问的私有本地缓存中。此数据包括页面和广告主可用的上下文和第一方数据、收集转化数据的广告技术公司的来源以及一个或多个期望从该广告发生转化的目标（[eTLD+1](/zh-CN/docs/Glossary/eTLD)）（即广告主的网站，例如 `shop.example`）。
3. 当用户稍后访问 `shop.example` 时，当交互指示转化发生时，该网站可以注册一个**归因触发器**（例如，用户点击 `shop.example` 上的“添加到购物车”按钮）。浏览器将发送一个带有 {{httpheader("Attribution-Reporting-Eligible")}} 标头的请求，以表明响应有资格注册归因触发器，如果响应中包含适当的 {{httpheader("Attribution-Reporting-Register-Trigger")}} 标头，则完成注册。归因触发器可以是，例如：
   - 一张图片，例如购物车图标或 1x1 透明跟踪像素。在这种情况下，交互是用户访问页面。触发器在图片加载时注册，即当服务器响应图片请求时。
   - 一个 fetch 请求（即 {{domxref("Window/fetch", "fetch()")}} 或 {{domxref("XMLHttpRequest")}}）。在这种情况下，交互可以根据你的应用程序的需要进行指定——例如，fetch 请求可以由 `click` 或 `submit` 事件触发。触发器在响应返回时注册。
4. 当触发器归因完成后，浏览器会尝试将 [Attribution-Reporting-Register-Trigger](/zh-CN/docs/Web/HTTP/Headers/Attribution-Reporting-Register-Trigger) 标头中的数据与私有本地缓存中保存的来源数据条目进行匹配（见第 2 步）。有关匹配方法和要求，请参阅[注册归因触发器](/zh-CN/docs/Web/API/Attribution_Reporting_API/Registering_triggers)。
5. 如果找到匹配，浏览器将把报告数据发送到通常由广告技术提供商拥有的报告服务器上的端点，在那里可以安全地进行分析。与 cookie 不同，这些数据仅对你发送数据的特定网站可用——不会在其他地方共享数据。这些报告可以是：
   - **事件级报告**：基于归因来源事件的报告，其中详细的来源数据与粗略的触发器数据相关联。例如，报告可能看起来像“`ad.shop.example` 上的点击 ID 200498 导致了 `shop.example` 的购买”，其中“点击 ID 200498”是详细的来源数据，“购买”是粗略的触发器数据。详细的来源数据可能包含来源页面的第一方或上下文数据，而触发器数据可能编码来自触发器页面的事件。
   - **汇总报告**：更详细的报告，结合来自来源和触发器侧的多个转化数据。例如“`news.example` 上的广告活动 ID 774653 导致了 `shop.example` 上来自意大利用户的 654 笔销售，总收入为 $9540。”汇总报告的编制需要使用聚合服务（例如 [Google 聚合服务](https://github.com/privacysandbox/aggregation-service)）。

有关实现上述步骤所需功能的更多信息，请参阅：

1. [注册归因来源](/zh-CN/docs/Web/API/Attribution_Reporting_API/Registering_sources)
2. [注册归因触发器](/zh-CN/docs/Web/API/Attribution_Reporting_API/Registering_triggers)
3. [生成报告](/zh-CN/docs/Web/API/Attribution_Reporting_API/Generating_reports)

## 接口

归因报告 API 并未定义任何独立的接口。

### 其他接口的扩展

- {{domxref("HTMLAnchorElement.attributionSrc")}}、{{domxref("HTMLImageElement.attributionSrc")}}、{{domxref("HTMLScriptElement.attributionSrc")}}
  - : `attributionSrc` 属性允许你以编程方式获取和设置 {{htmlelement("a")}}、{{htmlelement("img")}}、和 {{htmlelement("script")}} 元素上的 `attributionsrc` 属性。它反映了该属性的值。
- {{domxref("Window/fetch", "fetch()")}} 和 {{domxref("Request.Request", "Request()")}} 构造函数中的 `attributionReporting` 选项
  - : 当通过 {{domxref("Window/fetch", "fetch()")}} 生成请求时，这表示你希望响应能够注册归因来源或触发器。
- {{domxref("XMLHttpRequest.setAttributionReporting()")}}
  - : 当通过 {{domxref("XMLHttpRequest")}} 生成请求时，这表示你希望响应能够注册归因来源或触发器。
- {{domxref("Window.open()")}} 中的 `attributionsrc` 特性关键字
  - : 当 `open()` 方法完成时，完成归因来源的注册*并*触发浏览器存储相关的来源数据（如 {{httpheader("Attribution-Reporting-Register-Source")}} 响应标头中提供的）。请注意，`Window.open()` 调用不能用于注册归因触发器。

## HTML 元素

- {{htmlelement("a")}}、{{htmlelement("img")}} 和 {{htmlelement("script")}}——`attributionsrc` 属性
  - : 指定你希望浏览器在相关资源请求中发送 {{httpheader("Attribution-Reporting-Eligible")}} 标头。在服务器端，此标头用于触发发送 {{httpheader("Attribution-Reporting-Register-Source")}} 或 {{httpheader("Attribution-Reporting-Register-Trigger")}} 响应标头。当注册归因来源时，这是必需的；当注册归因触发器时，只有在你希望指定与 `src` 属性指向的资源不同的注册服务器时才需要。请注意，`<a>` 元素不能用于注册归因触发器。

## HTTP 标头

- {{httpheader("Attribution-Reporting-Eligible")}}
  - : 表示相应响应有资格注册归因来源或触发器的 HTTP 请求。
- {{httpheader("Attribution-Reporting-Register-Source")}}
  - : 注册页面特性作为归因来源的 HTTP 响应。这作为对包含 `Attribution-Reporting-Eligible` 标头的请求的响应的一部分。
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
  - : 注册页面特性作为归因触发器的 HTTP 响应。这作为对包含 `Attribution-Reporting-Eligible` 标头的请求的响应的一部分。
- {{httpheader("Permissions-Policy")}} {{httpheader('Permissions-Policy/attribution-reporting','attribution-reporting')}} 指令
  - : 控制当前文档是否被允许使用归因报告。

## 注册和本地测试

要在你的网站上使用归因报告 API，你必须在[隐私沙盒注册过程](/zh-CN/docs/Web/Privacy/Privacy_sandbox/Enrollment)中指定它。如果不这样做，API 流程将在响应时被阻止，即响应标头将被忽略，来源和触发器将不会被注册。

你仍然可以在没有注册的情况下本地测试你的归因报告 API 代码。要允许本地测试，请启用以下 Chrome 开发者标志：

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## 示例

请参阅[演示：归因报告 API](https://arapi-home.web.app/) 以获取示例实现（也可查看[源代码](https://github.com/GoogleChromeLabs/trust-safety-demo/tree/main/attribution-reporting)）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [归因报告标头验证工具](https://wicg.github.io/attribution-reporting-api/validate-headers)
- developers.google.cn 上的[归因报告](https://developers.google.cn/privacy-sandbox/private-advertising/attribution-reporting/)（2023）
- developers.google.cn 上的[启用转化测量](https://developers.google.cn/privacy-sandbox/private-advertising/attribution-reporting/enable-conversion-measurement)（2023）
- developers.google.cn 上的[隐私沙盒](https://developers.google.cn/privacy-sandbox/)（2023）
