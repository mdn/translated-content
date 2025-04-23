---
title: webRequest.onHeadersReceived
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onHeadersReceived
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

当接收到请求的 HTTP 响应头时触发。使用此事件可以修改 HTTP 响应头。

要将响应头与请求数据的其余部分一起传递到监听器中，请在 `extraInfoSpec` 数组中传递 "responseHeaders"。

如果使用 "blocking"，则必须在 manifest.json 中具有 ["webRequestBlocking" API 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_权限)。

扩展程序可能会发出冲突的请求。如果两个扩展程序监听同一请求的 `onHeadersReceived` 并返回 `responseHeaders` 来设置原始响应中不存在的相同头（例如 `Set-Cookie`），则只有一个更改会成功。

然而，`Content-Security-Policy` 头的处理方式不同；其值会被合并以应用所有指定的策略。但是，如果两个扩展程序设置了冲突的 CSP 值，CSP 服务会通过更严格的限制来解决冲突。例如，如果一个扩展程序设置了 `img-src: example.com`，另一个扩展程序设置了 `img-src: example.org`，结果将是 `img-src: 'none'`。合并的修改总是倾向于更严格的限制，尽管扩展程序可以移除原始的 CSP 头。

如果你希望查看系统处理的头，而不必担心其他扩展程序会更改它们，请使用 {{WebExtAPIRef("webRequest.onResponseStarted")}}，尽管你无法在此事件上修改头。

## 语法

```js-nolint
browser.webRequest.onHeadersReceived.addListener(
  listener,             // function
  filter,               //  object
  extraInfoSpec         //  optional array of strings
)
browser.webRequest.onHeadersReceived.removeListener(listener)
browser.webRequest.onHeadersReceived.hasListener(listener)
```

事件有三个函数：

- `addListener(listener, filter, extraInfoSpec)`
  - : 为此事件添加一个监听器。
- `removeListener(listener)`
  - : 停止监听此事件。`listener` 参数是要移除的监听器。
- `hasListener(listener)`
  - : 检查 `listener` 是否已注册到此事件。如果正在监听，则返回 `true`，否则返回 `false`。

## addListener 语法

### 参数

- `listener`

  - : 事件触发时调用的函数。该函数接收以下参数：

    - `details`
      - : [`object`](#details_2)。请求的详细信息。如果你在 `extraInfoSpec` 中包含了 "responseHeaders"，则会包含响应头。

    返回值：{{WebExtAPIRef('webRequest.BlockingResponse')}}。如果在 `extraInfoSpec` 参数中指定了 "blocking"，事件监听器将返回一个 `BlockingResponse` 对象，并可以设置其 `responseHeaders` 属性。在 Firefox 中，返回值可以是一个解析为 `BlockingResponse` 的 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}。一组限制发送到此监听器的事件的过滤器。
- `extraInfoSpec` {{optional_inline}}

  - : `array` of `string`。事件的额外选项。你可以传递以下任意值：

    - "blocking" 使请求同步，以便你可以修改请求和响应头
    - "responseHeaders" 将响应头包含在传递给监听器的 `details` 对象中

## 附加对象

### details

- `cookieStoreId`
  - : `string`。如果请求来自在上下文标识中打开的标签页，则为上下文标识的 cookie 存储 ID。有关更多信息，请参阅 [使用上下文标识](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)。
- `documentUrl`
  - : `string`。将加载资源的文档的 URL。例如，如果 "https\://example.com" 的网页包含一个图像或 iframe，则图像或 iframe 的 `documentUrl` 将是 "https\://example.com"。对于顶级文档，`documentUrl` 未定义。
- `frameAncestors`

  - : `array`。从顶级文档到框架层次结构中每个文档的信息。数组中的第一个元素包含有关正在请求的文档的直接父级的信息，最后一个元素包含有关顶级文档的信息。如果加载的是顶级文档，则此数组为空。

    - `url`
      - : `string`。加载文档的 URL。
    - `frameId`
      - : `integer`。文档的 `frameId`。`details.frameAncestors[0].frameId` 与 `details.parentFrameId` 相同。

- `frameId`
  - : `integer`。如果请求发生在主框架中，则为零；如果请求发生在子框架中，则为正值，表示子框架的 ID。如果加载的是（子）框架的文档（`type` 是 `main_frame` 或 `sub_frame`），`frameId` 表示此框架的 ID，而不是外部框架的 ID。框架 ID 在标签页内是唯一的。
- `fromCache`
  - : `boolean`。响应是否从磁盘缓存中获取。
- `incognito`
  - : `boolean`。请求是否来自隐私浏览窗口。
- `ip`
  - : `string`。发送请求的服务器的 IP 地址。可能是一个字面 IPv6 地址。
- `method`
  - : `string`。标准 HTTP 方法，例如 "GET" 或 "POST"。
- `originUrl`

  - : `string`。触发请求的资源的 URL。例如，如果 "https\://example.com" 包含一个链接，用户点击该链接，则生成的请求的 `originUrl` 是 "https\://example.com"。

    `originUrl` 通常但不总是与 `documentUrl` 相同。例如，如果页面包含一个 iframe，iframe 包含一个链接，该链接将新文档加载到 iframe 中，则生成的请求的 `documentUrl` 是 iframe 的父文档，但 `originUrl` 是 iframe 中包含链接的文档的 URL。

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

        - "http": HTTP 代理（或 HTTPS 的 SSL CONNECT）
        - "https": 通过 TLS 连接到代理的 HTTP 代理
        - "socks": SOCKS v5 代理
        - "socks4": SOCKS v4 代理
        - "direct": 无代理
        - "unknown": 未知代理

    - `username`
      - : `string`。代理服务的用户名。
    - `proxyDNS`
      - : `boolean`。如果代理将根据提供的主机名执行域名解析，则为 true，表示客户端不应执行自己的 DNS 查找。
    - `failoverTimeout`
      - : `integer`。故障切换超时时间（以秒为单位）。如果代理连接失败，在此期间将不再使用代理。

- `requestId`
  - : `string`。请求的 ID。请求 ID 在浏览器会话中是唯一的，因此你可以使用它来关联与同一请求相关的不同事件。
- `responseHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}。为此请求接收到的 HTTP 响应头。
- `statusCode`
  - : `integer`。服务器返回的标准 HTTP 状态码。
- `statusLine`
  - : `string`。响应的 HTTP 状态行或 HTTP/0.9 响应的 'HTTP/0.9 200 OK' 字符串（即缺少状态行的响应）。
- `tabId`
  - : `integer`。请求发生的标签页的 ID。如果请求与标签页无关，则设置为 -1。
- `thirdParty`
  - : `boolean`。指示请求及其内容窗口层次结构是否为第三方。
- `timeStamp`
  - : `number`。此事件触发的时间，以 [自纪元以来的毫秒数](https://en.wikipedia.org/wiki/Unix_time)表示。
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}。请求的资源类型，例如 "image"、"script"、"stylesheet"。
- `url`
  - : `string`。请求的目标。
- `urlClassification`

  - : `object`。如果请求被 [Firefox 跟踪保护](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop)分类，则与请求相关的跟踪类型。这是一个包含以下属性的对象：

    - `firstParty`
      - : `array` of `strings`。请求的第一方的分类标志。
    - `thirdParty`
      - : `array` of `strings`。请求或其窗口层次结构的第三方的分类标志。

    分类标志包括：

    - `fingerprinting` 和 `fingerprinting_content`：指示请求涉及指纹识别（“发现用于指纹识别的来源”）。
      - `fingerprinting` 表示域名属于指纹识别和跟踪类别。此类域名的示例包括希望将配置文件与访问用户关联的广告商。
      - `fingerprinting_content` 表示域名属于指纹识别类别但不属于跟踪类别。此类域名的示例包括使用指纹识别技术识别访问用户以防止欺诈的支付提供商。
    - `cryptomining` 和 `cryptomining_content`：类似于指纹识别类别，但用于加密挖矿资源。
    - `tracking`、`tracking_ad`、`tracking_analytics`、`tracking_social` 和 `tracking_content`：指示请求涉及跟踪。`tracking` 是任何通用跟踪请求，`ad`、`analytics`、`social` 和 `content` 后缀标识跟踪器的类型。
    - `emailtracking` 和 `emailtracking_content`：指示请求涉及跟踪电子邮件。
    - `any_basic_tracking`：一个元标志，结合了跟踪和指纹识别标志，不包括 `tracking_content` 和 `fingerprinting_content`。
    - `any_strict_tracking`：一个元标志，结合了所有跟踪和指纹识别标志。
    - `any_social_tracking`：一个元标志，结合了所有社交跟踪标志。

    你可以在 [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers) 网站上找到有关跟踪器类型的更多信息。`content` 后缀表示跟踪和提供内容的跟踪器。阻止它们可以保护用户，但可能导致网站中断或某些元素未显示。

## 浏览器兼容性

{{Compat}}

## 示例

此代码在从目标 URL 请求资源时设置一个额外的 cookie：

```js
let targetPage =
  "https://developer.mozilla.org/en-US/Firefox/Developer_Edition";

// 将新头添加到原始数组，
// 并返回它。
function setCookie(e) {
  const setMyCookie = {
    name: "Set-Cookie",
    value: "my-cookie1=my-cookie-value1",
  };
  e.responseHeaders.push(setMyCookie);
  return { responseHeaders: e.responseHeaders };
}

// 监听目标页面的 onHeaderReceived。
// 设置 "blocking" 和 "responseHeaders"。
browser.webRequest.onHeadersReceived.addListener(
  setCookie,
  { urls: [targetPage] },
  ["blocking", "responseHeaders"],
);
```

此代码与前一个示例执行相同的操作，不同之处在于监听器是异步的，返回一个解析为新头的 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)：

```js
const targetPage =
  "https://developer.mozilla.org/en-US/Firefox/Developer_Edition";

// 返回一个设置计时器的 Promise。
// 当计时器触发时，使用
// 修改后的响应头解析 Promise。
function setCookieAsync(e) {
  const asyncSetCookie = new Promise((resolve, reject) => {
    setTimeout(() => {
      const setMyCookie = {
        name: "Set-Cookie",
        value: "my-cookie1=my-cookie-value1",
      };
      e.responseHeaders.push(setMyCookie);
      resolve({ responseHeaders: e.responseHeaders });
    }, 2000);
  });

  return asyncSetCookie;
}

// 监听目标页面的 onHeaderReceived。
// 设置 "blocking" 和 "responseHeaders"。
browser.webRequest.onHeadersReceived.addListener(
  setCookieAsync,
  { urls: [targetPage] },
  ["blocking", "responseHeaders"],
);
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.webRequest`](https://developer.chrome.google.cn/docs/extensions/reference/api/webRequest#event-onHeadersReceived) API。该文档衍生自 Chromium 代码中的 [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json)。

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
