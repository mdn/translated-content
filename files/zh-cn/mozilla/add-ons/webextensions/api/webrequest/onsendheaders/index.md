---
title: webRequest.onSendHeaders
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onSendHeaders
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

此事件在发送标头之前触发。如果您的扩展程序或其他扩展程序在 `{{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}` 中修改了标头，您将在此处看到修改后的版本。

此事件仅供参考。

## 语法

```js-nolint
browser.webRequest.onSendHeaders.addListener(
  listener,             // function
  filter,               //  object
  extraInfoSpec         //  optional array of strings
)
browser.webRequest.onSendHeaders.removeListener(listener)
browser.webRequest.onSendHeaders.hasListener(listener)
```

事件有三个函数：

- `addListener(listener, filter, extraInfoSpec)`
  - : 为此事件添加一个侦听器。
- `removeListener(listener)`
  - : 停止侦听此事件。`listener` 参数是要移除的侦听器。
- `hasListener(listener)`
  - : 检查 `listener` 是否已注册到此事件。返回 `true` 表示正在侦听，`false` 表示未侦听。

## addListener 语法

### 参数

- `listener`

  - : 事件触发时调用的函数。该函数接收以下参数：

    - `details`
      - : `object`。有关请求的详细信息。有关更多信息，请参阅 [details](#details_2) 部分。

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}。限制发送到此侦听器的事件的过滤器。
- `extraInfoSpec` {{optional_inline}}

  - : `array` of `string`。事件的额外选项。您只能在此处传递一个值：

    - `"requestHeaders"`：在传递给侦听器的 `details` 对象中包含请求标头

## 附加对象

### details

- `cookieStoreId`
  - : `string`。如果请求来自上下文身份中的选项卡，则为上下文身份的 cookie 存储 ID。有关更多信息，请参阅 [使用上下文身份](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)。
- `documentUrl`
  - : `string`。加载资源的文档的 URL。例如，如果 "https\://example.com" 的网页包含一个图像或 iframe，则图像或 iframe 的 `documentUrl` 将是 "https\://example.com"。对于顶级文档，`documentUrl` 未定义。
- `frameId`
  - : `integer`。如果请求发生在主框架中，则为零；正值是请求发生的子框架的 ID。如果加载了 (子)框架的文档（`type` 是 `main_frame` 或 `sub_frame`），`frameId` 表示此框架的 ID，而不是外部框架的 ID。框架 ID 在选项卡内是唯一的。
- `incognito`
  - : `boolean`。请求是否来自私密浏览窗口。
- `method`
  - : `string`。标准 HTTP 方法：例如，"GET" 或 "POST"。
- `originUrl`

  - : `string`。触发请求的资源的 URL。例如，如果 "https\://example.com" 包含一个链接，用户点击该链接，则生成请求的 `originUrl` 是 "https\://example.com"。

    `originUrl` 通常但不总是与 `documentUrl` 相同。例如，如果页面包含一个 iframe，iframe 包含一个链接，该链接将新文档加载到 iframe 中，则生成请求的 `documentUrl` 将是 iframe 的父文档，但 `originUrl` 将是 iframe 中包含链接的文档的 URL。

- `parentFrameId`
  - : `integer`。包含发送请求的框架的框架的 ID。如果不存在父框架，则设置为 -1。
- `proxyInfo`

  - : `object`。此属性仅在请求被代理时存在。它包含以下属性：

    - `host`
      - : `string`。代理服务器的主机名。
    - `port`
      - : `integer`。代理服务器的端口号。
    - `type`

      - : `string`。代理服务器的类型。以下之一：

        - "http"：HTTP 代理（或 HTTPS 的 SSL CONNECT）
        - "https"：通过 TLS 连接到代理的 HTTP 代理
        - "socks"：SOCKS v5 代理
        - "socks4"：SOCKS v4 代理
        - "direct"：无代理
        - "unknown"：未知代理

    - `username`
      - : `string`。代理服务的用户名。
    - `proxyDNS`
      - : `boolean`。如果代理将根据提供的主机名执行域名解析，则为 true，这意味着客户端不应执行自己的 DNS 查找。
    - `failoverTimeout`
      - : `integer`。故障转移超时时间（以秒为单位）。如果代理连接失败，则在此期间不会再次使用代理。

- `requestId`
  - : `string`。请求的 ID。请求 ID 在浏览器会话中是唯一的，因此您可以使用它来关联与同一请求相关的不同事件。
- `requestHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}。随此请求发送的 HTTP 请求标头。
- `tabId`
  - : `integer`。请求发生的选项卡的 ID。如果请求与选项卡无关，则设置为 -1。
- `thirdParty`
  - : `boolean`。指示请求及其内容窗口层次结构是否为第三方。
- `timeStamp`
  - : `number`。此事件触发的时间，以 [自纪元以来的毫秒数](https://en.wikipedia.org/wiki/Unix_time) 表示。
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}。请求的资源类型：例如，"image"、"script"、"stylesheet"。
- `url`
  - : `string`。请求的目标。
- `urlClassification`

  - : `object`。如果请求被 [Firefox 跟踪保护](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) 分类，则与请求相关的跟踪类型。这是一个包含以下属性的对象：

    - `firstParty`
      - : `array` of `strings`。请求的第一方的分类标志。
    - `thirdParty`
      - : `array` of `strings`。请求或其窗口层次结构的第三方的分类标志。

    分类标志包括：

    - `fingerprinting` 和 `fingerprinting_content`：指示请求涉及指纹识别（“发现的指纹来源”）。
      - `fingerprinting` 表示域名属于指纹识别和跟踪类别。此类域名的示例包括希望将配置文件与访问用户关联的广告商。
      - `fingerprinting_content` 表示域名属于指纹识别类别，但不属于跟踪类别。此类域名的示例包括使用指纹识别技术识别访问用户以防止欺诈的支付提供商。
    - `cryptomining` 和 `cryptomining_content`：类似于指纹识别类别，但用于加密挖矿资源。
    - `tracking`、`tracking_ad`、`tracking_analytics`、`tracking_social` 和 `tracking_content`：指示请求涉及跟踪。`tracking` 是任何通用跟踪请求，`ad`、`analytics`、`social` 和 `content` 后缀标识跟踪器的类型。
    - `emailtracking` 和 `emailtracking_content`：指示请求涉及跟踪电子邮件。
    - `any_basic_tracking`：一个元标志，结合了跟踪和指纹识别标志，不包括 `tracking_content` 和 `fingerprinting_content`。
    - `any_strict_tracking`：一个元标志，结合了所有跟踪和指纹识别标志。
    - `any_social_tracking`：一个元标志，结合了所有社交跟踪标志。

    您可以在 [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers) 网站上找到有关跟踪器类型的更多信息。`content` 后缀表示跟踪和提供内容的跟踪器。阻止它们可以保护用户，但可能导致网站中断或某些元素未显示。

## 浏览器兼容性

{{Compat}}

## 示例

此代码记录将用于向目标 [匹配模式](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) 发出请求的所有 Cookie：

```js
// 目标匹配模式
let targetPage = "*://*.google.ca/*";

// 记录此请求发送的 Cookie
function logCookies(e) {
  for (const header of e.requestHeaders) {
    if (header.name === "Cookie") {
      console.log(header.value);
    }
  }
}

// 监听 onSendHeaders，并传递
// "requestHeaders" 以便获取标头
browser.webRequest.onSendHeaders.addListener(
  logCookies,
  { urls: [targetPage] },
  ["requestHeaders"],
);
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.webRequest`](https://developer.chrome.google.cn/docs/extensions/reference/api/webRequest#event-onSendHeaders) API。该文档衍生自 Chromium 代码中的 [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json)。
