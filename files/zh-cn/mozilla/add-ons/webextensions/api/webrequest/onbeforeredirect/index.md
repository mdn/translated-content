---
title: webRequest.onBeforeRedirect
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRedirect
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

当服务器发起的重定向即将发生时触发。

请注意，您不能为此事件传递 `"blocking"`，因此您无法通过此事件修改或取消请求：它仅用于信息目的。

## 语法

```js-nolint
browser.webRequest.onBeforeRedirect.addListener(
  listener,             // function
  filter,               //  object
  extraInfoSpec         //  optional array of strings
)
browser.webRequest.onBeforeRedirect.removeListener(listener)
browser.webRequest.onBeforeRedirect.hasListener(listener)
```

事件有三个函数：

- `addListener(listener, filter, extraInfoSpec)`
  - : 为此事件添加一个监听器。
- `removeListener(listener)`
  - : 停止监听此事件。`listener` 参数是要移除的监听器。
- `hasListener(listener)`
  - : 检查 `listener` 是否已注册此事件。如果正在监听，则返回 `true`，否则返回 `false`。

## addListener 语法

### 参数

- `listener`

  - : 事件触发时调用的函数。该函数接收以下参数：

    - `details`
      - : `object`。有关请求的详细信息。有关更多信息，请参阅 [details](#details_2) 部分。

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}。限制发送到此监听器的事件的过滤器。
- `extraInfoSpec` {{optional_inline}}

  - : `string` 的 `array`。事件的额外选项。您可以仅传递一个值：

    - `"responseHeaders"`：在传递给监听器的 `details` 对象中包含 `responseHeaders`

## 其他对象

### details

- `cookieStoreId`
  - : `string`。如果请求来自上下文身份的选项卡，则上下文身份的 cookie 存储 ID。有关更多信息，请参阅 [使用上下文身份](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)。
- `documentUrl`
  - : `string`。将加载资源的文档的 URL。例如，如果 "https://example.com" 的网页包含一个图像或 iframe，则图像或 iframe 的 `documentUrl` 将是 "https://example.com"。对于顶级文档，`documentUrl` 未定义。
- `frameId`
  - : `integer`。如果请求发生在主框架中，则为 `0`；正值是请求发生的子框架的 ID。如果加载了文档（`type` 为 `main_frame` 或 `sub_frame`），则 `frameId` 表示该框架的 ID，而不是外部框架的 ID。框架 ID 在选项卡中是唯一的。
- `fromCache`
  - : `boolean`。指示此响应是否从磁盘缓存中获取。
- `incognito`
  - : `boolean`。请求是否来自隐私浏览窗口。
- `ip`
  - : `string`。发送请求的服务器的 IP 地址。它可能是一个字面 IPv6 地址。
- `method`
  - : `string`。标准 HTTP 方法：例如，"GET" 或 "POST"。
- `originUrl`

  - : `string`。触发请求的资源的 URL。例如，如果 "https://example.com" 包含一个链接，用户点击该链接，则生成的请求的 `originUrl` 是 "https://example.com"。

    `originUrl` 通常但不总是与 `documentUrl` 相同。例如，如果页面包含一个 iframe，iframe 包含一个链接，该链接加载一个新文档到 iframe 中，则生成的请求的 `documentUrl` 将是 iframe 的父文档，但 `originUrl` 将是 iframe 中包含链接的文档的 URL。

- `parentFrameId`
  - : `integer`。包含发送请求的框架的框架的 ID。如果不存在父框架，则设置为 `-1`。
- `proxyInfo`

  - : `object`。仅当请求被代理时，此属性才存在。它包含以下属性：

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
      - : `boolean`。如果代理根据提供的主机名执行域名解析，则为 true，这意味着客户端不应执行自己的 DNS 查找。
    - `failoverTimeout`
      - : `integer`。故障转移超时（以秒为单位）。如果在此秒数后连接无法连接到代理服务器，则使用从 [FindProxyForURL()](</en-US/docs/Mozilla/Add-ons/WebExtensions/API/proxy#findproxyforurl()_return_value>) 返回的数组中的下一个代理服务器。

- `redirectUrl`
  - : `string`。新的 URL。
- `requestId`
  - : `string`。请求的 ID。请求 ID 在浏览器会话中是唯一的，因此您可以关联与同一请求相关的不同事件。
- `responseHeaders`
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}。与此重定向一起接收的 HTTP 响应头。
- `statusCode`
  - : `integer`。服务器返回的标准 HTTP 状态码。
- `statusLine`
  - : `string`。响应的 HTTP 状态行，`'HTTP/0.9 200 OK'` 字符串用于 HTTP/0.9 响应（即缺少状态行的响应），如果没有头，则为空字符串。
- `tabId`
  - : `integer`。请求发生的选项卡的 ID。如果请求与选项卡无关，则设置为 `-1`。
- `thirdParty`
  - : `boolean`。指示请求及其内容窗口层次结构是否为第三方。
- `timeStamp`
  - : `number`。此事件触发时的时间，以 [自纪元以来的毫秒数](https://en.wikipedia.org/wiki/Unix_time) 为单位。
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}。请求的资源类型：例如，"image"、"script" 或 "stylesheet"。
- `url`
  - : `string`。请求的目标。
- `urlClassification`

  - : `object`。与请求相关的跟踪类型（如果请求由 [Firefox Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) 分类）。这是一个具有以下属性的对象：

    - `firstParty`
      - : `array` of `strings`。请求的第一方的分类标志。
    - `thirdParty`
      - : `array` of `strings`。请求或其窗口层次结构的第三方的分类标志。

    分类标志包括：

    - `fingerprinting` 和 `fingerprinting_content`：指示请求涉及指纹识别（“发现指纹的来源”）。
      - `fingerprinting` 表示域名属于指纹识别和跟踪类别。此类域名的示例包括希望将配置文件与访问用户关联的广告商。
      - `fingerprinting_content` 表示域名属于指纹识别类别，但不属于跟踪类别。此类域名的示例包括使用指纹识别技术识别访问用户以防止欺诈的支付提供商。
    - `cryptomining` 和 `cryptomining_content`：类似于指纹识别类别，但用于加密货币挖掘资源。
    - `tracking`、`tracking_ad`、`tracking_analytics`、`tracking_social` 和 `tracking_content`：指示请求涉及跟踪。`tracking` 是任何通用跟踪请求。`ad`、`analytics`、`social` 和 `content` 后缀标识跟踪器的类型。
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
"https://developer.mozilla.org/"
"https://developer.mozilla.org/en-US/"
*/
function logResponse(responseDetails) {
  console.log(responseDetails.url);
  console.log(responseDetails.redirectUrl);
}

browser.webRequest.onBeforeRedirect.addListener(logResponse, {
  urls: [target],
});
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.webRequest`](https://developer.chrome.google.cn/docs/extensions/reference/api/webRequest#event-onBeforeRedirect) API。该文档衍生自 Chromium 代码中的 [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json)。

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
