---
title: webRequest.onAuthRequired
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onAuthRequired
l10n:
  sourceCommit: cc1fa2df9ceb4c58a4776451cd100a2109428691
---

当服务器发送 `401` 或 `407` 状态码，以及使用 `Basic` 方案的 `WWW-Authenticate` 标头时触发（即服务器要求客户端提供身份验证凭据，例如用户名和密码）。

监听器可以通过以下四种方式之一响应：

- 不采取任何行动
  - : 监听器可以什么都不做，只观察请求。如果情况发生，监听器将不会影响请求的处理，并且浏览器会在适当情况下要求用户登录。
- 取消请求
  - : 监听器可以取消请求。如果这样做，身份验证将失败，并且不会要求用户登录。扩展可以通过以下方式取消请求：
    - 在 addListener 中，在 `extraInfoSpec` 参数中传递 `"blocking"`
    - 在监听器中，返回一个 `cancel` 属性设置为 `true` 的对象

- 同步提供凭据
  - : 如果凭据可以同步获取，扩展可以同步提供它们。如果扩展这样做，浏览器会尝试使用这些凭据登录。监听器可以通过以下方式同步提供凭据：
    - 在 addListener 中，在 `extraInfoSpec` 参数中传递 `"blocking"`
    - 在监听器中，返回一个 `authCredentials` 属性设置为要提供的凭据的对象

- 异步提供凭据
  - : 扩展可能需要异步获取凭据。例如，扩展可能需要从存储中获取凭据或询问用户。在这种情况下，监听器可以通过以下方式异步提供凭据：
    - 在 addListener 中，在 Chrome 和 Firefox 中传递 `"asyncBlocking"` 或在 Firefox 中传递 `"blocking"` 到 `extraInfoSpec` 参数
    - 如果提供了 `"blocking"`，扩展可以返回一个 `webRequest.BlockingResponse` 对象或一个兑现为 `webRequest.BlockingResponse` 对象的 Promise
    - 如果提供了 `"asyncBlocking"`，事件监听器函数会接收一个 `asyncCallback` 函数作为其第二个参数。`asyncCallback` 可以异步调用，并接受一个 `webRequest.BlockingResponse` 对象作为其唯一参数

      > [!NOTE]
      > Chrome 不支持 Promise 作为返回值（[Chromium issue 1510405](https://crbug.com/1510405)）。替代方案请参见[监听器的返回值](#listener)。

参见[示例](#示例)。

如果你的扩展提供了错误的凭据，则会再次调用监听器。因此，请注意避免通过反复提供错误的凭据进入无限循环。

## 权限

在 Firefox 和 Chrome Manifest V2 扩展中，你必须在 `manifest.json` 中取得 [`"webRequest"` 和 `"webRequestBlocking"` API 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_权限)。

对于 Manifest V3 扩展，Chrome 不再支持 `"webRequestBlocking"` 权限（由策略安装的扩展除外）。相反，`"webRequest"` 和 `"webRequestAuthProvider"` 权限使你能够异步提供凭据。Firefox 继续在 Manifest V3 中支持 `"webRequestBlocking"`，并提供 `"webRequestAuthProvider"` 以实现跨浏览器兼容性。

## 代理授权

Firefox 通常不会为系统请求（例如浏览器或扩展升级或搜索引擎查询）触发 `webRequest` 事件。为使代理授权能顺利处理系统请求，从 Firefox 57 开始支持对此的例外。

如果扩展具有 `"webRequest"`、`"webRequestBlocking"`、`"proxy"` 和 `"<all_urls>"` 权限，则可以使用 `onAuthRequired` 为代理授权提供凭据（但不能用于正常的 Web 授权）。监听器不能取消系统请求或对任何系统请求进行其他修改。

## 语法

```js-nolint
browser.webRequest.onAuthRequired.addListener(
  listener,                    // 函数
  filter,                      // 对象
  extraInfoSpec                // 可选的字符串的数组
)
browser.webRequest.onAuthRequired.removeListener(listener)
browser.webRequest.onAuthRequired.hasListener(listener)
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
  - : 此事件发生时调用的函数。该函数接收以下参数：
    - `details`
      - : `object`。有关请求的详细信息。参见 [details](#details) 一节以获取更多信息。
    - `asyncCallback` {{optional_inline}}
      - : 一个最多调用一次的函数，用于异步修改请求对象。只有在事件监听器注册时传入的 `extraInfoSpec` 数组中包含 `"asyncBlocking"`，该参数才会被提供。如果未提供 `extraInfoSpec` 或数组中包含 `"blocking"`，则 `asyncCallback` 为 undefined。

    返回值：{{WebExtAPIRef('webRequest.BlockingResponse')}} 或 {{jsxref("Promise")}}，具体取决于 `extraInfoSpec` 中的设置。

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}。限制发送到此监听器的事件的过滤器。
- `extraInfoSpec` {{optional_inline}}
  - : `string` 的数组（`array`）。事件的额外选项。你可以传递以下值中的任何一个：
    - `"blocking"`：使请求阻塞，以便你可以取消请求或提供身份验证凭据。返回一个 `BlockingResponse` 对象，其 `cancel` 或 `authCredentials` 属性已设置。
      - 在 Chrome 中，事件监听器必须同步响应。
      - 在 Firefox 中，事件监听器可以同步响应，也可以返回一个兑现为 `BlockingResponse` 对象的 Promise 以异步响应。

    - `"asyncBlocking"`：异步处理请求。事件监听器的返回值将被忽略。要兑现事件，请将 `asyncCallback` 参数传递给一个 `BlockingResponse` 对象。
      - 从 Chrome 120 和 Firefox 128 开始支持。
      - Safari 不支持。

## 其他对象

### details

- `challenger`
  - : `object`。请求身份验证的服务器。这是一个具有以下属性的对象：
    - `host`
      - : `string`。服务器的[主机名](https://zh.wikipedia.org/wiki/主機名稱)。
    - `port`
      - : `integer`。服务器的端口号。

- `cookieStoreId`
  - : `string`。若请求来自场景身份中打开的标签页，则为此场景身份的 cookie 存储 ID。详细信息请参见[使用场景身份](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)。
- `frameId`
  - : `integer`。发生在主框架中的请求的该属性为 0；在子框架中的请求则为代表该子框架的 ID 的正数。对于（子）框架的文档加载请求（`type` 为 `main_frame` 或 `sub_frame`），则 `frameId` 表示此框架的 ID 而非外部框架的 ID。框架 ID 在标签页内唯一。
- `incognito`
  - : `boolean`。请求是否来自隐私浏览窗口。
- `isProxy`
  - : `boolean`。`true` 表示 `Proxy-Authenticate`，`false` 表示 `WWW-Authenticate`。
    > [!NOTE]
    > `webRequest.onAuthRequired` 仅在需要身份验证的 HTTP 和 HTTPS/TLS 代理服务器上调用，而不适用于需要身份验证的 SOCKS 代理服务器。
- `method`
  - : `string`。标准 HTTP 方法，例如“GET”或“POST”。
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
      - : `integer`。故障转移超时时间（秒）如果在此秒数后连接无法连接到代理服务器，则使用从 [FindProxyForURL()](/zh-CN/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) 返回的数组中的下一个代理服务器。

- `realm` {{optional_inline}}
  - : `string`。如果存在，则为服务器提供的身份验证[领域](https://datatracker.ietf.org/doc/html/rfc1945#section-11)。
- `requestId`
  - : `string`。请求的 ID。请求 ID 在浏览器会话中唯一，因此可以使用它们来关联与同一请求相关的不同事件。
- `responseHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}。该请求接收到的 HTTP 响应标头。
- `scheme`
  - : `string`。身份验证方案：`"basic"` 或 `"digest`"。
- `statusCode`
  - : `integer`。服务器返回的标准 HTTP 状态码。
- `statusLine`
  - : `string`。响应的 HTTP 状态行。对于 HTTP/0.9 响应（即缺少状态行的响应），该属性值为字符串”HTTP/0.9 200 OK”。
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

## 示例

此代码观察目标 URL 的身份验证请求：

```js
const target = "https://intranet.company.com/";

function observe(requestDetails) {
  console.log(`观察：${requestDetails.requestId}`);
}

browser.webRequest.onAuthRequired.addListener(observe, { urls: [target] });
```

此代码取消目标 URL 的身份验证请求：

```js
const target = "https://intranet.company.com/";

function cancel(requestDetails) {
  console.log(`取消：${requestDetails.requestId}`);
  return { cancel: true };
}

browser.webRequest.onAuthRequired.addListener(cancel, { urls: [target] }, [
  "blocking",
]);
```

此代码同步提供凭据。它跟踪未完成的请求，以确保不会反复尝试提交错误的凭据：

```js
const target = "https://intranet.company.com/";

const myCredentials = {
  username: "me@company.com",
  password: "zDR$ERHGDFy",
};

const pendingRequests = [];

// 请求已被完成，我们不需要再继续处理它了。
function completed(requestDetails) {
  console.log(`completed: ${requestDetails.requestId}`);
  let index = pendingRequests.indexOf(requestDetails.requestId);
  if (index > -1) {
    pendingRequests.splice(index, 1);
  }
}

function provideCredentialsSync(requestDetails) {
  // 如果我们已经处理过这一请求，那就假设我们所提供的凭据无效，那么就放弃吧。
  if (pendingRequests.includes(requestDetails.requestId)) {
    console.log(`错误凭据：${requestDetails.requestId}`);
    return { cancel: true };
  }
  pendingRequests.push(requestDetails.requestId);
  console.log(`为请求提供凭据：${requestDetails.requestId}`);
  return { authCredentials: myCredentials };
}

browser.webRequest.onAuthRequired.addListener(
  provideCredentialsSync,
  { urls: [target] },
  ["blocking"],
);

browser.webRequest.onCompleted.addListener(completed, { urls: [target] });

browser.webRequest.onErrorOccurred.addListener(completed, { urls: [target] });
```

此代码异步提供凭据，从存储中获取凭据。它还跟踪未完成的请求，以确保不会反复尝试提交错误的凭据：

```js
const target = "https://httpbin.org/basic-auth/*";

const pendingRequests = [];

/*
 * 请求已被完成，我们不需要再继续处理它了。
 */
function completed(requestDetails) {
  console.log(`completed: ${requestDetails.requestId}`);
  let index = pendingRequests.indexOf(requestDetails.requestId);
  if (index > -1) {
    pendingRequests.splice(index, 1);
  }
}

function provideCredentialsAsync(requestDetails) {
  // 如果我们已经处理过这一请求，那就假设我们所提供的凭据无效，那么就放弃吧。
  if (pendingRequests.includes(requestDetails.requestId)) {
    console.log(`错误凭据：${requestDetails.requestId}`);
    return { cancel: true };
  } else {
    pendingRequests.push(requestDetails.requestId);
    console.log(`为请求提供凭据：${requestDetails.requestId}`);
    // 我们可以返回一个兑现为存储的凭据的 Promise
    return browser.storage.local.get(null);
  }
}

browser.webRequest.onAuthRequired.addListener(
  provideCredentialsAsync,
  { urls: [target] },
  ["blocking"],
);

browser.webRequest.onCompleted.addListener(completed, { urls: [target] });

browser.webRequest.onErrorOccurred.addListener(completed, { urls: [target] });
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.webRequest`](https://developer.chrome.google.cn/docs/extensions/reference/api/webRequest#event-onAuthRequired) API。该文档衍生自 Chromium 代码中的 [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json)。

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
