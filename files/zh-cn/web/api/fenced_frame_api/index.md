---
title: 围栏框架 API
slug: Web/API/Fenced_frame_API
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{SeeCompatTable}}{{DefaultAPISidebar("Fenced Frame API")}}

**围栏框架 API**（Fenced Frame API）提供了用于控制嵌入在 {{htmlelement("fencedframe")}} 元素中的内容的功能。

## 概念和用法

Web 上[隐私](/zh-CN/docs/Web/Privacy)和[安全](/zh-CN/docs/Web/Security)问题的一个主要来源是嵌入在 {{htmlelement("iframe")}} 元素中的内容。历史上，`<iframe>` 被用于设置第三方 cookie，这些 cookie 可用于跨站点共享信息和追踪用户。此外，嵌入在 `<iframe>` 中的内容可以与其嵌入文档进行通信（例如，使用 {{domxref("Window.postMessage()")}}）。

嵌入文档还可以使用脚本从 `<iframe>` 中读取各种形式的信息，例如，通过读取 `src` 属性中的嵌入 URL，你可能会获取到重要的跟踪/指纹数据，特别是当 URL 包含 [URL 参数](/zh-CN/docs/Web/URI#query)时。`<iframe>` 还可以访问嵌入上下文的 DOM，反之亦然。

大多数现代浏览器都在研究分区存储机制，以便 cookie 数据不再用于跟踪（有关示例请参见[具有独立分区状态的 Cookie（CHIPS）](/zh-CN/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies)或 [Firefox 状态分区](/zh-CN/docs/Web/Privacy/State_Partitioning)）。

`<fencedframe>` 元素旨在解决这个问题的另一方面——它们在形式和功能上与 `<iframe>` 相似，但有以下不同：

- `<fencedframe>` 内容与嵌入网站之间无法共享通信。
- `<fencedframe>` 可以访问跨站数据，但仅限于在非常特定的受控情况下进行，以保护用户隐私。
- `<fencedframe>` 不能通过常规脚本进行自由操作或访问其数据（例如读取或设置源 URL）。`<fencedframe>` 内容只能通过[特定 API](#用例) 嵌入。
- `<fencedframe>` 无法访问嵌入上下文的 DOM，嵌入上下文也无法访问 `<fencedframe>` 的 DOM。

有关围栏框架的通信模型的更多信息，请阅读[与嵌入框架进行通信](/zh-CN/docs/Web/API/Fenced_frame_API/Communication_with_embedded_frames)指南。

### 用例

`<fencedframe>` 被其他 API 用于嵌入不同类型的跨站内容或收集数据，以隐私保护的方式满足不同的使用场景。这些功能以前大多依赖于第三方 cookie 或其他对隐私不利的机制。

- [共享存储 API](https://developers.google.cn/privacy-sandbox/private-advertising/shared-storage) 在安全的环境中提供对未分区跨站数据的访问，并在 `<fencedframe>` 中计算或显示结果。例如：
  - 广告商可以衡量广告的覆盖范围，或者根据用户在其他网站上已经看到的广告来投放后续广告。
  - 开发者可以进行 A/B 测试，根据用户被分配到的组或每个变体已被多少用户查看，来向用户展示不同的内容。
  - 企业可以根据用户在其他网站上的行为来定制用户体验。例如，如果用户已经购买了会员资格，那么在其他网站上就不需要再向他们展示会员注册广告。
- [受保护的受众 API](https://developers.google.cn/privacy-sandbox/private-advertising/protected-audience) 允许开发者实现基于兴趣组的广告投放，包括再营销和自定义受众使用场景。它可以评估多个广告位的出价，并在 `<fencedframe>` 中显示获胜的广告。
- [隐私聚合 API](https://developers.google.cn/privacy-sandbox/private-advertising/private-aggregation) 可以从 `<fencedframe>`（来源于共享存储空间或受保护的受众 API）中收集数据，并创建聚合报告。

## `<fencedframe>` 的工作原理

如上所述，你不能通过常规脚本直接控制嵌入在 {{htmlelement("fencedframe")}} 中的内容。

要设置将在 `<fencedframe>` 中显示的内容，使用 API（如[受保护的受众](https://developers.google.cn/privacy-sandbox/private-advertising/protected-audience)或[共享存储](https://developers.google.cn/privacy-sandbox/private-advertising/shared-storage)）生成一个 {{domxref("FencedFrameConfig")}} 对象，然后通过 Javascript 将该对象设置为 `<fencedframe>` 的 {{domxref("HTMLFencedFrameElement.config")}} 属性。

以下示例从受保护的受众 API 的广告拍卖中获取一个 `FencedFrameConfig`，然后使用它在 `<fencedframe>` 中显示获胜的广告：

```js
const frameConfig = await navigator.runAdAuction({
  // 拍卖配置
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

在调用 `runAdAuction()` 时，必须传入 `resolveToConfig: true` 以获得 `FencedFrameConfig` 对象。如果 `resolveToConfig` 设置为 `false`，则所得的 {{jsxref("Promise")}} 将兑现为一个不透明 [URN](/zh-CN/docs/Web/URI#urns)（例如：`urn:uuid:c36973b5-e5d9-de59-e4c4-364f137b3c7a`），该 URN 只能在 `<iframe>` 中使用。

无论哪种方式，浏览器都会存储一个包含要嵌入内容的目标位置的 URL，该 URL 与不透明 URN 或 `FencedFrameConfig` 的内部 `url` 属性相对应。在嵌入上下文中运行的 JavaScript 无法读取 UR 值。

> [!NOTE]
> 在 `<iframe>` 中支持不透明 URN，以便将现有实现轻松迁移到[隐私沙盒](https://developers.google.cn/privacy-sandbox)。这种支持是暂时的，随着采用率的提高，未来将会移除。

> **备注：** `FencedFrameConfig` 有一个 {{domxref("FencedFrameConfig.setSharedStorageContext", "setSharedStorageContext()")}} 方法，用于将数据从嵌入文档传递到 `<fencedframe>` 共享存储中。例如，它可以在 {{domxref("Worklet")}} 中通过 `<fencedframe>` 访问，并用于生成报告。参见[共享存储 API](https://developers.google.cn/privacy-sandbox/private-advertising/shared-storage) 查看更多信息。

### 在 `Fence` 对象上访问围栏框架功能

在嵌入到 `<fencedframe>` 中的文档内，JavaScript 可以访问 {{domxref("Window.fence")}} 属性，此属性为该文档返回一个 {{domxref("Fence")}} 实例。此对象包含几个与围栏框架 API 功能特别相关的函数。例如，{{domxref("Fence.reportEvent()")}} 提供了一种通过[信标](/zh-CN/docs/Web/API/Beacon_API)向一个或多个指定的 URL 触发报告数据提交的方式，以便报告广告展示和点击情况。

### 权限策略

只有通过设置在 `<fencedframe>` 上的权限策略，才能启用专门设计为在其中使用的特定功能；在此上下文中，其他受策略控制的特性不可用。参见[围栏框架可用的权限策略](/zh-CN/docs/Web/HTML/Element/fencedframe#围栏框架可用的权限策略)查看更多信息。

### HTTP 标头

对于从 `<fencedframe>` 内部发出的任何请求，包括嵌入在 `<fencedframe>` 内的子 `<iframe>`，都会设置一个值为 `fencedframe` 的 {{httpheader("Sec-Fetch-Dest")}} 标头。

```http
Sec-Fetch-Dest: fencedframe
```

服务器必须为任何打算加载到 `<fencedframe>` 中或嵌入在 `<fencedframe>` 内的 `<iframe>` 中的文档设置一个值为 `fenced-frame` 的 {{httpheader("Supports-Loading-Mode")}} 响应标头。

```http
Supports-Loading-Mode: fenced-frame
```

围栏框架对 HTTP 标头字段的其他影响如下：

- [用户代理客户端提示](/zh-CN/docs/Web/HTTP/Client_hints#用户代理客户端提示)在围栏框架中不可用，因为它们依赖于[权限策略](/zh-CN/docs/Web/HTTP/Permissions_Policy)委托，这可能会被用来泄露数据。
- 对从封闭框架内部打开的新浏览上下文强制执行严格的 [`Cross-Origin-Opener-Policy`](/zh-CN/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy) 设置，否则它们可能会被用来向其他源泄露信息。从围栏框架内部打开的任何新窗口都将设置 [`rel="noopener"`](/zh-CN/docs/Web/HTML/Attributes/rel/noopener) 和`Cross-Origin-Opener-Policy: same-origin`，以确保 {{domxref("Window.opener")}} 返回 `null` 并将其置于自己的浏览上下文组中。
- 添加 [`Content-Security-Policy: fenced-frame-src`](/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy/fenced-frame-src) 来指定加载到 `<fencedframe>` 元素中的嵌套浏览上下文的有效来源。
- 为了缓解隐私问题，[`Content-Security-Policy: sandbox`](/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy/sandbox) 自定义设置不能被围栏框架继承。要加载围栏框架，需要指定无 `sandbox` CSP（这意味着以下值），或者指定以下沙箱值：
  - `allow-same-origin`
  - `allow-forms`
  - `allow-scripts`
  - `allow-popups`
  - `allow-popups-to-escape-sandbox`
  - `allow-top-navigation-by-user-activation`

### `beforeunload` 和 `unload` 事件

[`beforeunload`](/zh-CN/docs/Web/API/Window/beforeunload_event) 和 [`unload`](/zh-CN/docs/Web/API/Window/unload_event) 事件不能在围栏框架上触发，因为它们可以以页面删除时间戳的形式泄露信息。实现旨在消除尽可能多的潜在泄漏。

## 接口

- {{domxref("FencedFrameConfig")}}
  - : 表示 {{htmlelement("fencedframe")}} 的导航配置，即该框架中将显示什么内容。`FencedFrameConfig` 由诸如[受保护的受众 API](https://developers.google.cn/privacy-sandbox/private-advertising/protected-audience) 等来源返回，并设置为 {{domxref("HTMLFencedFrameElement.config")}} 的值。
- {{domxref("Fence")}}
  - : 包含与围栏框架功能相关的多个函数。仅在嵌入在 `<fencedframe>` 内的文档中可用。
- {{domxref("HTMLFencedFrameElement")}}
  - : 在 Javascript 中表示一个 `<fencedframe>` 元素，并提供配置该元素的属性。

### 对其他接口的扩展

- {{domxref("Navigator.deprecatedReplaceInURN()")}}
  - : 在给定不透明 URN 或 `FencedFrameConfig` 的内部 `url` 属性所对应的映射 URL 中，替换指定的字符串。
- {{domxref("Window.fence")}}
  - : 返回当前文档上下文的一个 {{domxref("Fence")}} 对象实例。仅在嵌入在 `<fencedframe>` 内的文档中可用。

## 注册和本地测试

某些创建 {{domxref("FencedFrameConfig")}} 的 API 特性，如 {{domxref("Navigator.runAdAuction()")}}（[受保护的受众 API](https://developers.google.cn/privacy-sandbox/private-advertising/protected-audience)）和 {{domxref("WindowSharedStorage.selectURL()")}}（[共享存储 API](/zh-CN/docs/Web/API/Shared_Storage_API)），以及其他特性如 {{domxref("Fence.reportEvent()")}}，要求你将你的网站注册到[隐私沙盒注册流程](/zh-CN/docs/Web/Privacy/Privacy_sandbox/Enrollment)中。如果你不注册，API 调用将失败，并在控制台中显示警告。

> [!NOTE]
> 在 Chrome 中，你仍然可以在未注册情况下本地测试你的围栏框架代码。要允许本地测试，请启用以下 Chrome 开发者标志：
>
> `chrome://flags/#privacy-sandbox-enrollment-overrides`

## 示例

以下演示均使用了 `<fencedframe>`：

- [共享存储 API 演示](https://shared-storage-demo.web.app/)（其中也包含一些隐私聚合 API 示例）
- [受保护的受众 API 演示](https://protected-audience-demo-advertiser.web.app/)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- developers.google.cn 上的[围栏框架](https://developers.google.cn/privacy-sandbox/private-advertising/fenced-frame)
- developers.google.cn 上的[隐私沙盒](https://developers.google.cn/privacy-sandbox)
