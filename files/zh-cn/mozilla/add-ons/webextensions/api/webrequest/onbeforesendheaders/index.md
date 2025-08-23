---
title: webRequest.onBeforeSendHeaders
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeSendHeaders
l10n:
  sourceCommit: cc1fa2df9ceb4c58a4776451cd100a2109428691
---

此事件在发送任何 HTTP 数据之前触发，但在所有 HTTP 标头可用之后触发。如果你想修改 HTTP 请求标头，这是一个很好的监听位置。

要将请求标头与请求数据的其余部分一起传递到监听器中，请在 `extraInfoSpec` 数组中传递 `"requestHeaders"`。

要同步修改标头：在 `extraInfoSpec` 中传递 `"blocking"`，这样在你的事件监听器中就会返回一个包含名为 `requestHeaders` 的属性的 [`BlockingResponse`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/BlockingResponse)，且该属性的值是要发送的请求标头集合的。

要异步修改标头：在 `extraInfoSpec` 中传递 `"blocking"`，然后在你的事件监听器中返回一个兑现为 `BlockingResponse` 的 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。

若要使用 `"blocking"`，则必须在 manifest.json 中取得[“webRequestBlocking”API 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_权限)。

在此可能会发生扩展冲突。如果两个扩展对同一请求监听 `onBeforeSendHeaders`，则第二个监听器将看到第一个监听器所做的修改，并能够撤销第一个监听器所做的任何更改。例如，如果第一个监听器添加了一个 `Cookie` 标头，而第二个监听器删除了所有 `Cookie` 标头，则第一个监听器的修改将丢失。如果你想查看实际发送的标头而不希望考虑一个扩展可能会对其作出修改，请使用 {{WebExtAPIRef("webRequest.onSendHeaders", "onSendHeaders")}}，尽管你无法在此事件上修改标头。

并非所有实际发送的标头都始终包含在 `requestHeaders` 中。特别是与缓存相关的标头（例如，`Cache-Control`、`If-Modified-Since`、`If-None-Match`）从不发送。此外，此处的行为可能因浏览器而异。

根据规范，标头名称不区分大小写。这意味着要匹配特定标头，监听器应在比较之前将名称转换为小写：

```js
for (const header of e.requestHeaders) {
  if (header.name.toLowerCase() === desiredHeader) {
    // 处理标头
  }
}
```

浏览器保留浏览器生成的标头名称的原始大小写。如果扩展的监听器更改了大小写，则这样的更改将不会被保留。

## 语法

```js-nolint
browser.webRequest.onBeforeSendHeaders.addListener(
  listener,             //  函数
  filter,               //  对象
  extraInfoSpec         //  可选的字符串的数组
)
browser.webRequest.onBeforeSendHeaders.removeListener(listener)
browser.webRequest.onBeforeSendHeaders.hasListener(listener)
```

事件有三个函数：

- `addListener(listener)`
  - : 为此事件添加监听器。
- `removeListener(listener)`
  - : 停止监听此事件。`listener` 参数是要移除的监听器。
- `hasListener(listener)`
  - : 检查是否已为此事件注册了 `listener`。若正在监听，返回 `true`，否则返回 `false`。

## addListener 语法

### 参数

- `listener`
  - : 当事件发生时调用的函数。该函数接收以下参数：
    - `details`
      - : `object`。有关请求的详细信息。如果你在 `extraInfoSpec` 中包含了 `"requestHeaders"`，则包括请求标头。参见 [details](#details) 部分。

    返回：{{WebExtAPIRef('webRequest.BlockingResponse')}}。如果在 `extraInfoSpec` 参数中指定了 `"blocking"`，则事件监听器应返回一个 `BlockingResponse` 对象，并可以设置其 `requestHeaders` 属性。

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}。一组限制发送到此监听器的事件的过滤器。
- `extraInfoSpec` {{optional_inline}}
  - : `string` 的数组（`array`）。事件的额外选项。你可以传递以下任意值：
    - `"blocking"`：使请求同步，以便让你修改请求标头。
    - `"requestHeaders"`：在传递给监听器的 `details` 对象中包含请求标头。

## 附加对象

### details

- `cookieStoreId`
  - : `string`。若请求来自场景身份中打开的标签页，则为此场景身份的 cookie 存储 ID。详细信息请参见[使用场景身份](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)。
- `documentUrl`
  - : `string`。将加载的资源所在的文档的 URL。例如，若页面“https\://example.com”包含图像或 iframe，则该图像或 iframe 的 `documentUrl` 将为“https\://example.com”。顶级文档的 `documentUrl` 为 undefined。
- `frameAncestors`
  - : 数组（`array`）。包含每个文档在框架层次结构（直到顶级文档）中的信息。数组的第一个元素包含关于请求文档的直接父文档的信息，而最后一个元素包含关于顶级文档的信息。如果加载的是顶级文档，则该数组为空。
    - `url`
      - : `string`。文档加载来源的 URL。
    - `frameId`
      - : `integer`。文档的 `frameId`。`details.frameAncestors[0].frameId` 与 `details.parentFrameId` 相同。
- `frameId`
  - : `integer`。发生在主框架中的请求的该属性为 0；在子框架中的请求则为代表该子框架的 ID 的正数。对于（子）框架的文档加载请求（`type` 为 `main_frame` 或 `sub_frame`），则 `frameId` 表示此框架的 ID 而非外部框架的 ID。框架 ID 在标签页内唯一。
- `incognito`
  - : `boolean`。请求是否来自隐私浏览窗口。
- `method`
  - : `string`。标准 HTTP 方法，例如“GET”或“POST”。
- `originUrl`
  - : `string`。触发请求的资源的 URL。例如，若用户点击了“https\://example.com”页面中的链接，则结果请求的 `originUrl` 为“https\://example.com”。

    `originUrl` 通常与 `documentUrl` 相同，但并不总是如此。例如，如果页面包含 iframe，并且 iframe 包含加载新文档的链接，则结果请求的 `documentUrl` 将是 iframe 的父文档 URL，而 `originUrl` 将是包含链接的 iframe 中的文档的 URL。

- `parentFrameId`
  - : `integer`。包含发起请求的框架的父框架 ID。如果不存在父框架则为 -1。
- `proxyInfo`
  - : `object`。仅当请求被代理时，此属性才存在。它包含以下属性：
    - `host`
      - : `string`。代理服务器的主机名。
    - `port`
      - : `integer`。代理服务器的端口号。
    - `type`
      - : `string`。代理服务器的类型，以下值之一：
        - `"http"`：HTTP 代理（或使用 SSL CONNECT 的 HTTPS）
        - `"https"`：通过 TLS 连接到代理的 HTTP 代理
        - `"socks"`：SOCKS v5 代理
        - `"socks4"`：SOCKS v4 代理
        - `"direct"`：无代理
        - `"unknown"`：未知代理

    - `username`
      - : `string`。代理服务的用户名。
    - `proxyDNS`
      - : `boolean`。如果代理将根据提供的主机名执行域名解析，则为真，意味着客户端不应执行自己的 DNS 查找。
    - `failoverTimeout`
      - : `integer`。故障转移超时时间（秒）。如果代理连接失败，则在此期间内将不再使用代理。

- `requestHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}。该请求发送时携带的 HTTP 请求标头。
- `requestId`
  - : `string`。请求的 ID。请求 ID 在浏览器会话中唯一，因此可以使用它们来关联与同一请求相关的不同事件。
- `tabId`
  - : `integer`。请求发生的标签页的 ID。如果请求与标签页无关，则为 -1。
- `thirdParty`
  - : `boolean`。指示请求及其内容窗口层次结构是否为第三方。
- `timeStamp`
  - : `number`。此事件触发时的时间，以[自纪元以来的毫秒数](https://zh.wikipedia.org/wiki/UNIX时间)表示。
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}。正在请求的资源的类型，例如“image”、“script”、“stylesheet”。
- `url`
  - : `string`。请求的目标 URL。
- `urlClassification`
  - : `object`。与请求相关的跟踪类型（如果请求由 [Firefox 跟踪保护](https://support.mozilla.org/zh-CN/kb/enhanced-tracking-protection-firefox-desktop)分类）。包含以下属性的对象：
    - `firstParty`
      - : `string` 的数组（`array`）。请求的第一方的分类标志。
    - `thirdParty`
      - : `string` 的数组（`array`）。请求或其窗口层次结构的第三方的分类标志。

    分类标志包括：
    - `fingerprinting` 和 `fingerprinting_content`：请求涉及指纹识别（“发现指纹的来源”）。
      - `fingerprinting` 表示域名属于指纹识别和跟踪类别。示例包括广告商的域名关联用户画像与到访用户。
      - `fingerprinting_content` 表示域名仅属指纹识别类别。示例包括支付提供商的域名使用指纹识别技术用于识别到访用于反欺诈目的。
    - `cryptomining` 和 `cryptomining_content`：与指纹识别类别类似，但用于加密货币挖矿资源。
    - `tracking`、`tracking_ad`、`tracking_analytics`、`tracking_social` 和 `tracking_content`：请求涉及跟踪。`tracking` 表示通用跟踪，而 `ad`、`analytics`、`social` 和 `content` 后缀表示跟踪器的具体类型。
    - `emailtracking` 和 `emailtracking_content`：请求涉及跟踪电子邮件。
    - `any_basic_tracking`：元标志，组合跟踪和指纹识别标志（不含 `tracking_content` 和 `fingerprinting_content`）。
    - `any_strict_tracking`：元标志，组合所有跟踪和指纹识别标志。
    - `any_social_tracking`：元标志，组合所有社交跟踪标志。

    更多跟踪器类型详细信息，参见 [disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers) 网站。`content` 后缀表示跟踪器同时提供内容服务，拦截这些跟踪器可以保护用户，但也可能会导致站点中断或元素无法显示。

## 浏览器兼容性

{{Compat}}

## 示例

此代码更改在访问 `https://httpbin.org/` 下的页面时的请求的“User-Agent”标头，这样浏览器就会将其自己标识为 Opera 12.16。

```js
"use strict";

/*
这是我们希望修改 User-Agent 标头的页面。
*/
const targetPage = "https://httpbin.org/*";

/*
设置 UA 字符串为 Opera 12
*/
const ua =
  "Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16";

/*
重写 UA 字符串为“ua”
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
只对目标页面添加 rewriteUserAgentHeader 监听器到 onBeforeSendHeaders。

让其是“blocking”的，这样我们就可以修改标头了。
*/
browser.webRequest.onBeforeSendHeaders.addListener(
  rewriteUserAgentHeader,
  { urls: [targetPage] },
  ["blocking", "requestHeaders"],
);
```

此代码与前面的示例完全相同，只是监听器是异步的，会返回一个会以新的标头兑现的 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)：

```js
"use strict";

/*
这是我们希望修改 User-Agent 标头的页面。
*/
const targetPage = "https://httpbin.org/*";

/*
设置 UA 字符串为 Opera 12
*/
const ua =
  "Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16";

/*
重写 UA 字符串为“ua”
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
只对目标页面添加 rewriteUserAgentHeader 监听器到 onBeforeSendHeaders。

让其是“blocking”的，这样我们就可以修改标头了。
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
