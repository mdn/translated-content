---
标题: webRequest.onCompleted
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onCompleted
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

当一个请求完成时触发。

此事件仅供参考。

## 语法

```js-nolint
browser.webRequest.onCompleted.addListener(
  listener,             // 函数
  filter,               // 对象
  extraInfoSpec         // 可选的字符串数组
)
browser.webRequest.onCompleted.removeListener(listener)
browser.webRequest.onCompleted.hasListener(listener)
```

事件有三个函数：

- `addListener(listener, filter, extraInfoSpec)`
  - : 为此事件添加一个监听器。
- `removeListener(listener)`
  - : 停止监听此事件。`listener` 参数是要移除的监听器。
- `hasListener(listener)`
  - : 检查 `listener` 是否已注册为此事件的监听器。如果正在监听，则返回 `true`，否则返回 `false`。

## addListener 语法

### 参数

- `listener`

  - : 事件触发时调用的函数。该函数接收以下参数：

    - `details`
      - : `object`。有关请求的详细信息。请参阅 [details](#details_2) 部分以获取更多信息。

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}。一个过滤器，用于限制发送到此监听器的事件。
- `extraInfoSpec` {{optional_inline}}

  - : `string` 的 `array`。事件的额外选项。您可以仅传递一个值：

    - `"responseHeaders"`：在传递给监听器的 `details` 对象中包含 `responseHeaders`

## 附加对象

### details

- `cookieStoreId`
  - : `string`。如果请求来自在上下文标识中打开的标签页，则为上下文标识的 cookie 存储 ID。有关更多信息，请参阅 [使用上下文标识](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)。
- `documentUrl`
  - : `string`。将加载资源的文档的 URL。例如，如果位于 "https\://example.com" 的网页包含一个图像或 iframe，则图像或 iframe 的 `documentUrl` 将是 "https\://example.com"。对于顶级文档，`documentUrl` 未定义。
- `frameId`
  - : `integer`。如果请求发生在主框架中，则为零；如果请求发生在子框架中，则为正值。正值是请求发生的子框架的 ID。如果文档的 (子)框架已加载（`type` 为 `main_frame` 或 `sub_frame`），则 `frameId` 表示此框架的 ID，而不是外部框架的 ID。框架 ID 在标签页中是唯一的。
- `fromCache`
  - : `boolean`。指示此响应是否是从磁盘缓存中获取的。
- `incognito`
  - : `boolean`。请求是否来自隐私浏览窗口。
- `ip`
  - : `string`。请求发送到的服务器的 IP 地址。它可能是一个字面量 IPv6 地址。
- `method`
  - : `string`。标准 HTTP 方法：例如，"GET" 或 "POST"。
- `originUrl`

  - : `string`。触发请求的资源的 URL。例如，如果 "https\://example.com" 包含一个链接，并且用户单击该链接，则结果请求的 `originUrl` 为 "https\://example.com"。

    `originUrl` 通常与 `documentUrl` 相同，但并不总是如此。例如，如果页面包含一个 iframe，并且 iframe 包含一个加载新文档的链接，则结果请求的 `documentUrl` 将是 iframe 的父文档，但 `originUrl` 将是包含链接的 iframe 中的文档的 URL。

- `parentFrameId`
  - : `integer`。包含发送请求的框架的框架的 ID。如果不存在父框架，则设置为 -1。
- `proxyInfo`

  - : `object`。仅当请求被代理时，此属性才存在。它包含以下属性：

    - `host`
      - : `string`。代理服务器的主机名。
    - `port`
      - : `integer`。代理服务器的端口号。
    - `type`

      - : `string`。代理服务器的类型。可以是：

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
      - : `integer`。故障转移超时（以秒为单位）。如果代理连接失败，则在此期间将不再使用代理。

- `requestId`
  - : `string`。请求的 ID。请求 ID 在浏览器会话中是唯一的，因此您可以使用它们来关联与同一请求相关的不同事件。
- `responseHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}。与此响应一起接收的 HTTP 响应头。
- `statusCode`
  - : `integer`。服务器返回的标准 HTTP 状态代码。
- `statusLine`
  - : `string`。响应的 HTTP 状态行或 HTTP/0.9 响应的 'HTTP/0.9 200 OK' 字符串（即缺少状态行的响应）或如果没有标头则为空字符串。
- `tabId`
  - : `integer`。请求发生的标签页的 ID。如果请求与标签页无关，则设置为 -1。
- `thirdParty`
  - : `boolean`。指示请求及其内容窗口层次结构是否为第三方。
- `timeStamp`
  - : `number`。此事件触发时的时间，以 [自纪元以来的毫秒数](https://en.wikipedia.org/wiki/Unix_time) 表示。
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}。请求的资源类型：例如，"image"、"script"、"stylesheet"。
- `url`
  - : `string`。请求的目标。
- `urlClassification`

  - : `object`。与请求相关的跟踪类型（如果请求被 [Firefox Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) 分类）。这是一个具有以下属性的对象：

    - `firstParty`
      - : `array` of `strings`。请求的第一方的分类标志。
    - `thirdParty`
      - : `array` of `strings`。请求或其窗口层次结构的第三方的分类标志。

    分类标志包括：

    - `fingerprinting` 和 `fingerprinting_content`：指示请求涉及指纹识别（"发现指纹的来源"）。
      - `fingerprinting` 表示域名属于指纹识别和跟踪类别。此类域名的示例包括希望将配置文件与访问用户关联的广告商。
      - `fingerprinting_content` 表示域名属于指纹识别类别，但不属于跟踪类别。此类域名的示例包括使用指纹识别技术识别访问用户以防止欺诈的支付提供商。
    - `cryptomining` 和 `cryptomining_content`：与指纹识别类别类似，但用于加密货币挖掘资源。
    - `tracking`、`tracking_ad`、`tracking_analytics`、`tracking_social` 和 `tracking_content`：指示请求涉及跟踪。`tracking` 是任何通用跟踪请求，`ad`、`analytics`、`social` 和 `content` 后缀标识跟踪器的类型。
    - `emailtracking` 和 `emailtracking_content`：指示请求涉及跟踪电子邮件。
    - `any_basic_tracking`：一个元标志，结合跟踪和指纹识别标志，排除 `tracking_content` 和 `fingerprinting_content`。
    - `any_strict_tracking`：一个元标志，结合所有跟踪和指纹识别标志。
    - `any_social_tracking`：一个元标志，结合所有社交跟踪标志。

    您可以在 [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers) 网站上找到有关跟踪器类型的更多信息。`content` 后缀表示跟踪和提供内容的跟踪器。阻止它们可以保护用户，但可能会导致站点中断或元素未显示。

## 浏览器兼容性

{{Compat}}

## 示例

```js
let target = "https://developer.mozilla.org/*";

/*
e.g.
"https://developer.mozilla.org/en-US/"
200

or:

"https://developer.mozilla.org/en-US/xfgkdkjdfhs"
404
*/
function logResponse(responseDetails) {
  console.log(responseDetails.url);
  console.log(responseDetails.statusCode);
}

browser.webRequest.onCompleted.addListener(logResponse, { urls: [target] });
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.webRequest`](https://developer.chrome.google.cn/docs/extensions/reference/api/webRequest#event-onCompleted) API。该文档衍生自 Chromium 代码中的 [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json)。
