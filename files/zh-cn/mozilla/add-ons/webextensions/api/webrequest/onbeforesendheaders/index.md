---
标题: webRequest.onBeforeSendHeaders
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeSendHeaders
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

此事件在发送任何 HTTP 数据之前触发，但在所有 HTTP 头可用之后触发。如果您想修改 HTTP 请求头，这是一个很好的监听位置。

要将请求头与请求数据的其余部分一起传递到监听器中，请在 `extraInfoSpec` 数组中传递 `"requestHeaders"`。

要同步修改头：在 `extraInfoSpec` 中传递 `"blocking"`，然后在您的事件监听器中，返回一个包含名为 `requestHeaders` 的属性的 [`BlockingResponse`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/BlockingResponse)，其值是要发送的请求头集合。

要异步修改头：在 `extraInfoSpec` 中传递 `"blocking"`，然后在您的事件监听器中，返回一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，该 Promise 将解析为一个 `BlockingResponse`。

如果您使用 `"blocking"`，则必须在 manifest.json 中拥有 ["webRequestBlocking" API 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_权限)。

在此可能会发生扩展冲突。如果两个扩展对同一请求监听 `onBeforeSendHeaders`，则第二个监听器将看到第一个监听器所做的修改，并能够撤销第一个监听器所做的任何更改。例如，如果第一个监听器添加了一个 `Cookie` 头，而第二个监听器删除了所有 `Cookie` 头，则第一个监听器的修改将丢失。如果您想查看实际发送的头，而不冒另一个扩展随后更改它们的风险，请使用 {{WebExtAPIRef("webRequest.onSendHeaders", "onSendHeaders")}}，尽管您无法在此事件上修改头。

并非所有实际发送的头都始终包含在 `requestHeaders` 中。特别是，与缓存相关的头（例如，`Cache-Control`、`If-Modified-Since`、`If-None-Match`）从不发送。此外，此处的行为可能因浏览器而异。

根据规范，头名称不区分大小写。这意味着要匹配特定头，监听器应在比较之前将名称转换为小写：

```js
for (const header of e.requestHeaders) {
  if (header.name.toLowerCase() === desiredHeader) {
    // process header
  }
}
```

浏览器保留浏览器生成的头名称的原始大小写。如果扩展的监听器更改了大小写，则此更改将不会被保留。

## 语法

```js-nolint
browser.webRequest.onBeforeSendHeaders.addListener(
  listener,             //  function
  filter,               //  object
  extraInfoSpec         //  optional array of strings
)
browser.webRequest.onBeforeSendHeaders.removeListener(listener)
browser.webRequest.onBeforeSendHeaders.hasListener(listener)
```

事件有三个函数：

- `addListener(listener, filter, extraInfoSpec)`
  - : 向此事件添加监听器。
- `removeListener(listener)`
  - : 停止监听此事件。`listener` 参数是要删除的监听器。
- `hasListener(listener)`
  - : 检查 `listener` 是否已注册为此事件。返回 `true`（如果正在监听）或 `false`（否则）。

## addListener 语法

### 参数

- `listener`

  - : 事件触发时调用的函数。该函数接收以下参数：

    - `details`
      - : `object`。请求的详细信息。如果您在 `extraInfoSpec` 中包含了 `"requestHeaders"`，则包括请求头。有关更多信息，请参见 [details](#details_2) 部分。

    返回：{{WebExtAPIRef('webRequest.BlockingResponse')}}。如果在 `extraInfoSpec` 参数中指定了 `"blocking"`，则事件监听器应返回一个 `BlockingResponse` 对象，并可以设置其 `requestHeaders` 属性。

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}。一组限制发送到此监听器的事件的过滤器。
- `extraInfoSpec` {{optional_inline}}

  - : `array` of `string`。事件的额外选项。您可以传递以下任意值：

    - `"blocking"`：使请求同步，因此您可以修改请求头
    - `"requestHeaders"`：在传递给监听器的 `details` 对象中包含请求头

## 其他对象

### details

- `cookieStoreId`
  - : `string`。如果请求来自上下文身份打开的选项卡，则上下文身份的 cookie 存储 ID。有关更多信息，请参见 [Work with contextual identities](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)。
- `documentUrl`
  - : `string`。将加载资源的文档的 URL。例如，如果 "https\://example.com" 的网页包含图像或 iframe，则图像或 iframe 的 `documentUrl` 将为 "https\://example.com"。对于顶级文档，`documentUrl` 是未定义的。
- `frameAncestors`
  - : `array`。包含框架层次结构中每个文档的信息，直到顶级文档。数组中的第一个元素包含有关请求的文档的直接父级的信息，最后一个元素包含有关顶级文档的信息。如果加载实际上是针对顶级文档，则此数组为空。
    - `url`
      - : `string`。文档加载的 URL。
    - `frameId`
      - : `integer`。文档的 `frameId`。`details.frameAncestors[0].frameId` 与 `details.parentFrameId` 相同。
- `frameId`
  - : `integer`。如果请求发生在主框架中，则为零；正值是请求发生的子框架的 ID。如果加载了（子）框架的文档（`type` 为 `main_frame` 或 `sub_frame`），则 `frameId` 表示此框架的 ID，而不是外部框架的 ID。框架 ID 在选项卡中是唯一的。
- `incognito`
  - : `boolean`。请求是否来自隐私浏览窗口。
- `method`
  - : `string`。标准 HTTP 方法：例如，"GET" 或 "POST"。
- `originUrl`

  - : `string`。触发请求的资源的 URL。例如，如果 "https\://example.com" 包含链接，并且用户单击链接，则生成请求的 `originUrl` 为 "https\://example.com"。

    `originUrl` 通常与 `documentUrl` 相同，但并不总是相同。例如，如果页面包含 iframe，并且 iframe 包含加载新文档的链接，则生成请求的 `documentUrl` 将是 iframe 的父文档，但 `originUrl` 将是包含链接的 iframe 中的文档的 URL。

- `parentFrameId`
  - : `integer`。包含发送请求的框架的框架的 ID。如果不存在父框架，则设置为 -1。
- `proxyInfo`

  - : `object`。仅当请求被代理时，此属性才存在。它包含以下属性：

    - `host`
      - : `string`。代理服务器的主机名。
    - `port`
      - : `integer`。代理服务器的端口号。
    - `type`

      - : `string`。代理服务器的类型。一个：

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

- `requestHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}。将与此请求一起发送的 HTTP 请求头。
- `requestId`
  - : `string`。请求的 ID。请求 ID 在浏览器会话中是唯一的，因此您可以使用它们来关联与同一请求相关的不同事件。
- `tabId`
  - : `integer`。请求发生的选项卡的 ID。如果请求与选项卡无关，则设置为 -1。
- `thirdParty`
  - : `boolean`。指示请求及其内容窗口层次结构是否为第三方。
- `timeStamp`
  - : `number`。此事件触发时的时间，以 [自纪元以来的毫秒数](https://en.wikipedia.org/wiki/Unix_time) 为单位。
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}。请求的资源类型：例如，"image"、"script"、"stylesheet"。
- `url`
  - : `string`。请求的目标。
- `urlClassification`

  - : `object`。与请求相关的跟踪类型（如果请求由 [Firefox Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) 分类）。这是一个具有以下属性的对象：

    - `firstParty`
      - : `array` of `strings`。请求的第一方的分类标志。
    - `thirdParty`
      - : `array` of `strings`。请求或其窗口层次结构的第三方的分类标志。

    分类标志包括：

    - `fingerprinting` 和 `fingerprinting_content`：指示请求涉及指纹识别（"发现指纹的来源"）。
      - `fingerprinting` 表示域名属于指纹识别和跟踪类别。此类域的示例包括希望将配置文件与访问用户关联的广告商。
      - `fingerprinting_content` 表示域名属于指纹识别类别，但不属于跟踪类别。此类域的示例包括使用指纹识别技术识别访问用户以防止欺诈的支付提供商。
    - `cryptomining` 和 `cryptomining_content`：与指纹识别类别类似，但用于加密货币挖掘资源。
    - `tracking`、`tracking_ad`、`tracking_analytics`、`tracking_social` 和 `tracking_content`：指示请求涉及跟踪。`tracking` 是任何通用跟踪请求，`ad`、`analytics`、`social` 和 `content` 后缀标识跟踪器的类型。
    - `emailtracking` 和 `emailtracking_content`：指示请求涉及跟踪电子邮件。
    - `any_basic_tracking`：一个元标志，结合跟踪和指纹识别标志，排除 `tracking_content` 和 `fingerprinting_content`。
    - `any_strict_tracking`：一个元标志，结合所有跟踪和指纹识别标志。
    - `any_social_tracking`：一个元标志，结合所有社交跟踪标志。

    您可以在 [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers) 网站上找到有关跟踪器类型的更多信息。`content` 后缀表示跟踪和提供内容的跟踪器。阻止它们可以保护用户，但可能导致网站中断或元素未显示。

## 浏览器兼容性

{{Compat}}

## 示例

此代码更改 "User-Agent" 头，以便浏览器将其识别为 Opera 12.16，但仅在访问 `https://httpbin.org/` 下的页面时。

```js
"use strict";

/*
This is the page for which we want to rewrite the User-Agent header.
*/
const targetPage = "https://httpbin.org/*";

/*
Set UA string to Opera 12
*/
const ua =
  "Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16";

/*
Rewrite the User-Agent header to "ua".
*/
function rewriteUserAgentHeader(e) {
  for (const header of e.requestHeaders) {
    if (header.name.toLowerCase() === "user-agent") {
      header.value = ua;
    }
  }
  return { requestHeaders: e.requestHeaders };
}

/*
Add rewriteUserAgentHeader as a listener to onBeforeSendHeaders,
only for the target page.

Make it "blocking" so we can modify the headers.
*/
browser.webRequest.onBeforeSendHeaders.addListener(
  rewriteUserAgentHeader,
  { urls: [targetPage] },
  ["blocking", "requestHeaders"],
);
```

此代码与前面的示例完全相同，只是监听器是异步的，返回一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，该 Promise 将解析为新头：

```js
"use strict";

/*
This is the page for which we want to rewrite the User-Agent header.
*/
const targetPage = "https://httpbin.org/*";

/*
Set UA string to Opera 12
*/
const ua =
  "Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16";

/*
Rewrite the User-Agent header to "ua".
*/
function rewriteUserAgentHeaderAsync(e) {
  const asyncRewrite = new Promise((resolve, reject) => {
    setTimeout(() => {
      for (const header of e.requestHeaders) {
        if (header.name.toLowerCase() === "user-agent") {
          header.value = ua;
        }
      }
      resolve({ requestHeaders: e.requestHeaders });
    }, 2000);
  });

  return asyncRewrite;
}

/*
Add rewriteUserAgentHeader as a listener to onBeforeSendHeaders,
only for the target page.

Make it "blocking" so we can modify the headers.
*/
browser.webRequest.onBeforeSendHeaders.addListener(
  rewriteUserAgentHeaderAsync,
  { urls: [targetPage] },
  ["blocking", "requestHeaders"],
);
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.webRequest`](https://developer.chrome.google.cn/docs/extensions/reference/api/webRequest#event-onBeforeSendHeaders) API。该文档衍生自 Chromium 代码中的 [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json)。

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
