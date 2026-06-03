---
title: webRequest.onBeforeRequest
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest
l10n:
  sourceCommit: cc1fa2df9ceb4c58a4776451cd100a2109428691
---

此事件在请求即将发出且标头尚不可用时触发。如果你想取消或重定向请求，这是一个很好的监听位置。

要取消或重定向请求，首先在传递给 `addListener()` 的 `extraInfoSpec` 数组参数中包含 `"blocking"`。然后，在监听器函数中返回一个 {{WebExtAPIRef("webRequest.BlockingResponse", "BlockingResponse")}} 对象，并设置适当的属性：

- 要取消请求，请包含一个值为 `true` 的 `cancel` 属性。
- 要重定向请求，请包含一个值为要重定向的 URL 的 `redirectUrl` 属性。

如果扩展程序想将公共（例如 HTTPS）URL 重定向到[扩展页面](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages)，扩展程序的 manifest.json 文件必须包含列出扩展页面的 URL 的 [web_accessible_resources](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) 键。

当多个阻塞处理器修改请求时，只有其中一个修改集会生效。重定向和取消具有相同的优先级。因此，如果你取消了一个请求而有阻塞处理器同时重定向了这一请求，你可能会看到另一个具有相同 `requestId` 的请求再次出现。

从 Firefox 52 开始，监听器可以返回一个会兑现为 `BlockingResponse` 的 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 而不是返回 `BlockingResponse`。从而使监听器能够异步处理请求。

要使用 `"blocking"`，则必须在 manifest.json 中取得[“webRequestBlocking”API 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_权限)。

## 语法

```js-nolint
browser.webRequest.onBeforeRequest.addListener(
  listener,             // 函数
  filter,               // 对象
  extraInfoSpec         // 可选的字符串数组
)
browser.webRequest.onBeforeRequest.removeListener(listener)
browser.webRequest.onBeforeRequest.hasListener(listener)
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
      - : `object`。有关请求的详细信息。参见 [details](#details) 部分。

    返回值：{{WebExtAPIRef('webRequest.BlockingResponse')}}。如果在 `extraInfoSpec` 参数中指定了 `"blocking"`，事件监听器应返回一个 `BlockingResponse` 对象，并可以设置其 `cancel` 或 `redirectUrl` 属性。从 Firefox 52 开始，监听器可以返回一个会兑现为 `BlockingResponse` 的 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)。从而使监听器能够异步处理请求。

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}。限制发送到此监听器的事件的过滤器。
- `extraInfoSpec` {{optional_inline}}
  - : `string` 的数组（`array`）。事件的额外选项，你可以传递以下任意值：
    - `"blocking"`：使请求同步，一边让你取消或重定向请求。
    - `"requestBody"`：在传递给监听器的 `details` 对象中包含 `requestBody`。

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

- `requestBody`
  - : `string`。包含 HTTP 请求主体数据。只在 `extraInfoSpec` 参数包含 `"requestBody"` 时提供该属性。
    - `error` {{optional_inline}}
      - : `string`。当获取请求主体过程中发生任何错误时，该属性将包括发生的错误。
    - `formData` {{optional_inline}}
      - : `object`。如果请求方法是 POST，且主体是以 UTF-8 编码的键值对序列（即“multipart/form-data”或“application/x-www-form-urlencoded”）时则会包含该对象。

        它是一个字典，其中每个键都包含该键的所有值的列表，例如 `{'key'： ['value1', 'value2']}`。如果数据属于其他媒体类型或数据非法，则将不包含该对象。

    - `raw` {{optional_inline}}
      - : {{WebExtAPIRef('webRequest.UploadData')}} 的数组（`array`）。如果请求方法是 PUT 或 POST，且主体尚未在 `formData` 中兑现，则此数组包含未解析的请求主体内容。

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

### 使用 BlockingResponse 时的 DNS 解析顺序

关于使用 BlockingResponse 和 OnBeforeRequest 时的 DNS 解析顺序：在 HTTP 通道中，带有阻塞响应的 onBeforeRequest 确实发生在 DNS 解析之前，也发生在推测连接之前。对于其他通道，推测连接可能会导致 DNS 请求在 onBeforeRequest 之前发生。此顺序不是扩展开发者应该依赖的，因为它可能因浏览器、浏览器版本以及请求通道的不同而有所变化。请参阅 [Mozilla 开发者在 BugZilla 上提供的关于 DNS 解析顺序的澄清](https://bugzil.la/1466099)。

## 示例

此代码记录与 [\<all_urls>](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Match_patterns#all_urls) 模式匹配的每个资源请求的 URL：

```js
function logURL(requestDetails) {
  console.log(`加载中：${requestDetails.url}`);
}

browser.webRequest.onBeforeRequest.addListener(logURL, {
  urls: ["<all_urls>"],
});
```

此代码取消对“`https://developer.mozilla.org/`”下的 URL 的图像请求（要查看效果，请访问包含图像的 MDN 页面，例如 [webRequest](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/webRequest)）：

```js
// 匹配要重定向的 URL 的模式
let pattern = "https://developer.mozilla.org/*";

// cancel 函数返回一个对象，且该对象包含值为 `true` 的 `cancel` 属性
function cancel(requestDetails) {
  console.log(`取消：${requestDetails.url}`);
  return { cancel: true };
}

// 添加监听器，传递过滤器参数和“blocking”
browser.webRequest.onBeforeRequest.addListener(
  cancel,
  { urls: [pattern], types: ["image"] },
  ["blocking"],
);
```

此代码通过重定向替换对“`https://developer.mozilla.org/`”下的 URL 的所有网络图像请求（要查看效果，请访问包含图像的 MDN 页面，例如 [webRequest](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/webRequest)）：

```js
// 匹配要重定向的 URL 的模式
let pattern = "https://developer.mozilla.org/*";

// redirect 函数返回一个包含值为新的 URL 的 `redirectURL` 属性的对象
function redirect(requestDetails) {
  console.log(`重定向：${requestDetails.url}`);
  return {
    redirectUrl:
      "https://38.media.tumblr.com/tumblr_ldbj01lZiP1qe0eclo1_500.gif",
  };
}

// 添加监听器，传递过滤器参数和“blocking”
browser.webRequest.onBeforeRequest.addListener(
  redirect,
  { urls: [pattern], types: ["image"] },
  ["blocking"],
);
```

此代码与前一个示例完全相同，只是监听器异步处理请求。它返回一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，设置一个计时器，并在计时器到期时兑现为重定向 URL：

```js
// 匹配要重定向的 URL 的模式
let pattern = "https://developer.mozilla.org/*";

// 我们将重定向到的 URL
let redirectUrl =
  "https://38.media.tumblr.com/tumblr_ldbj01lZiP1qe0eclo1_500.gif";

// redirect 函数返回一个 Promise，且该 Promise 在计时器到期时兑现为重定向 URL
function redirectAsync(requestDetails) {
  console.log(`异步重定向：${requestDetails.url}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ redirectUrl });
    }, 2000);
  });
}

// 添加监听器，传递过滤器参数和“blocking”
browser.webRequest.onBeforeRequest.addListener(
  redirectAsync,
  { urls: [pattern], types: ["image"] },
  ["blocking"],
);
```

另一个示例，将所有图像重定向到一个数据 URL：

```js
let pattern = "https://developer.mozilla.org/*";

let image = `
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <rect style="stroke-width: 10; stroke: #666;" width="100%" height="100%" fill="#d4d0c8" />
    <text transform="translate(0, 9)" x="50%" y="50%" width="100%" fill="#666" height="100%" style="text-anchor: middle; font: bold 10pt 'Segoe UI', Arial, Helvetica, Sans-serif;">已阻止</text>
  </svg>
`;

function listener(details) {
  const redirectUrl = `data:image/svg+xml,${encodeURIComponent(image)}`;
  return { redirectUrl };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: [pattern], types: ["image"] },
  ["blocking"],
);
```

这是另一个版本：

```js
function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const pattern = "https://developer.mozilla.org/*";

let image = `
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <rect width="100%" height="100%" fill="${randomColor()}"/>
  </svg>
`;

function listener(details) {
  const redirectUrl = `data:image/svg+xml,${encodeURIComponent(image)}`;
  return { redirectUrl };
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: [pattern], types: ["image"] },
  ["blocking"],
);
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.webRequest`](https://developer.chrome.google.cn/docs/extensions/reference/api/webRequest#event-onBeforeRequest) API。该文档衍生自 Chromium 代码中的 [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json)。

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
