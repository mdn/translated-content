---
title: webRequest.onHeadersReceived
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onHeadersReceived
l10n:
  sourceCommit: cc1fa2df9ceb4c58a4776451cd100a2109428691
---

当接收到请求的 HTTP 响应标头时触发。使用此事件可以修改 HTTP 响应标头。

要将响应标头与请求数据的其余部分一起传递到监听器中，请向 `extraInfoSpec` 数组中传入 `"responseHeaders"`。

要使用 `"blocking"`，则必须在 manifest.json 中包括[“webRequestBlocking”API 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_权限)。

扩展可能会发出冲突的请求。如果两个扩展监听同一请求的 `onHeadersReceived` 并返回 `responseHeaders` 来设置原始响应中不存在的相同标头（例如 `Set-Cookie`），则只有一个更改会成功。

但是，`Content-Security-Policy` 标头的处理方式不同；其值会被合并以应用所有指定的策略。但是，如果两个扩展程序设置了冲突的 CSP 值，CSP 服务会通过更严格的限制来解决冲突。例如，如果一个扩展程序设置了 `img-src: example.com` 而另一个扩展程序设置了 `img-src: example.org`，则结果将是 `img-src: 'none'`。尽管扩展可以移除原始的 CSP 标头，合并的修改却总是倾向于更严格的限制。

如果你希望查看系统处理后的标头且不希望考虑其他扩展可能会再度对其做出更改，请使用 {{WebExtAPIRef("webRequest.onResponseStarted")}}，尽管你无法在此事件上修改标头。

## 语法

```js-nolint
browser.webRequest.onHeadersReceived.addListener(
  listener,             //  函数
  filter,               //  对象
  extraInfoSpec         //  可选的字符串的数组
)
browser.webRequest.onHeadersReceived.removeListener(listener)
browser.webRequest.onHeadersReceived.hasListener(listener)
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
      - : `object`。有关请求的详细信息。参见 [details](#details) 部分。如果你在 `extraInfoSpec` 参数中指定了 `"responseHeaders"`，则会包含响应标头。

    返回值：{{WebExtAPIRef('webRequest.BlockingResponse')}}。如果在 `extraInfoSpec` 参数中指定了 `"blocking"`，则事件监听器会返回一个 `BlockingResponse` 对象，你可以设置其 `responseHeaders` 属性。在 Firefox 中，返回值可以是一个兑现为 `BlockingResponse` 的 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}。一组限制发送到此监听器的事件的过滤器。
- `extraInfoSpec` {{optional_inline}}
  - : `string` 的数组（`array`）。事件的额外选项。你可以传递以下任意值：
    - `"blocking"` 用于使请求同步，以便于修改请求和响应的标头
    - `"responseHeaders"` 将响应标头包含在传递给监听器的 `details` 对象中

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
  - : `integer`。发生在主框架中的请求的该属性为 0；在子框架中的请求则为表示该子框架的 ID 的正数。对于（子）框架的文档加载请求（`type` 为 `main_frame` 或 `sub_frame`），则 `frameId` 表示此框架的 ID 而非外部框架的 ID。框架 ID 在标签页中唯一。
- `fromCache`
  - : `boolean`。指示此响应是否从磁盘缓存获取。
- `incognito`
  - : `boolean`。请求是否来自隐私浏览窗口。
- `ip`
  - : `string`。请求的目标服务器的 IP 地址，可能是 IPv6 字面量。
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

- `requestId`
  - : `string`。请求的 ID。请求 ID 在浏览器会话中唯一，因此可以使用它们来关联与同一请求相关的不同事件。
- `responseHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}。该请求接收到的 HTTP 响应标头。
- `statusCode`
  - : `integer`。服务器返回的标准 HTTP 状态码。
- `statusLine`
  - : `string`。响应的 HTTP 状态行。对于 HTTP/0.9 响应（即缺少状态行的响应），该属性值为字符串“HTTP/0.9 200 OK”。
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

此代码在从目标 URL 请求资源时设置一个额外的 cookie：

```js
let targetPage =
  "https://developer.mozilla.org/zh-CN/Firefox/Developer_Edition";

// 将新标头添加到原始数组，并返回所有标头。
function setCookie(e) {
  const setMyCookie = {
    name: "Set-Cookie",
    value: "my-cookie1=my-cookie-value1",
  };
  e.responseHeaders.push(setMyCookie);
  return { responseHeaders: e.responseHeaders };
}

// 监听目标页面的 onHeaderReceived。设置“blocking”和“responseHeaders”。
browser.webRequest.onHeadersReceived.addListener(
  setCookie,
  { urls: [targetPage] },
  ["blocking", "responseHeaders"],
);
```

此代码与前一个示例执行相同的操作，不同之处在于监听器是异步的，返回一个兑现为新标头的 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)：

```js
const targetPage =
  "https://developer.mozilla.org/zh-CN/Firefox/Developer_Edition";

// 返回一个设置计时器的 Promise。当计时器触发时，使用修改后的响应标头兑现 Promise。
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

// 监听目标页面的 onHeaderReceived。设置“blocking”和“responseHeaders”。
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
