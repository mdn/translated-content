---
标题: webRequest.onErrorOccurred
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/onErrorOccurred
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

当请求由于错误而无法处理时触发，例如缺乏互联网连接。

错误作为[`details`](#details)对象的`error`属性传递给监听器。

请注意，此事件不会因HTTP错误（4XX或5XX响应）而触发：这些将通过请求的正常阶段，调用任何事件监听器，并设置`details.statusCode`以报告错误。

此事件仅供参考。

## 语法

```js-nolint
browser.webRequest.onErrorOccurred.addListener(
  listener,             // function
  filter                //  object
)
browser.webRequest.onErrorOccurred.removeListener(listener)
browser.webRequest.onErrorOccurred.hasListener(listener)
```

事件有三个函数：

- `addListener(listener, filter)`
  - : 为此事件添加一个监听器。
- `removeListener(listener)`
  - : 停止监听此事件。`listener`参数是要移除的监听器。
- `hasListener(listener)`
  - : 检查`listener`是否已注册到此事件。如果正在监听，则返回`true`，否则返回`false`。

## addListener语法

### 参数

- `listener`

  - : 事件触发时调用的函数。该函数接收以下参数：

    - `details`
      - : `object`. 有关请求的详细信息。有关更多信息，请参阅[details](#details_2)部分。

- `filter`
  - : {{WebExtAPIRef('webRequest.RequestFilter')}}. 限制发送到此监听器的事件的过滤器。

## 附加对象

### details

- `cookieStoreId`
  - : `string`. 如果请求来自上下文身份打开的选项卡，则上下文身份的cookie存储ID。有关更多信息，请参阅[使用上下文身份](https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)。
- `documentUrl`
  - : `string`. 将加载资源的文档的URL。例如，如果“https\://example.com”中的网页包含图像或iframe，则图像或iframe的`documentUrl`将为“https\://example.com”。对于顶级文档，`documentUrl`未定义。
- `error`
  - : `string`. 错误描述。此字符串是内部错误字符串，可能因浏览器而异，并且不保证在版本之间保持不变。
- `frameId`
  - : `integer`. 如果请求发生在主框架中，则为零；正值是请求发生的子框架的ID。如果加载了（子）框架的文档（`type`为`main_frame`或`sub_frame`），则`frameId`表示此框架的ID，而不是外部框架的ID。框架ID在选项卡中是唯一的。
- `fromCache`
  - : `boolean`. 指示此响应是否是从磁盘缓存中获取的。
- `incognito`
  - : `boolean`. 请求是否来自隐私浏览窗口。
- `ip`
  - : `string`. 发送请求的服务器的IP地址。它可能是字面IPv6地址。
- `method`
  - : `string`. 标准HTTP方法：例如，“GET”或“POST”。
- `originUrl`

  - : `string`. 触发请求的资源的URL。例如，如果“https\://example.com”包含链接，并且用户单击该链接，则结果请求的`originUrl`为“https\://example.com”。

    `originUrl`通常与`documentUrl`相同，但并不总是如此。例如，如果页面包含iframe，并且iframe包含加载新文档的链接，则结果请求的`documentUrl`将是iframe的父文档，但`originUrl`将是包含链接的iframe中的文档的URL。

- `parentFrameId`
  - : `integer`. 包含发送请求的框架的框架的ID。如果不存在父框架，则设置为-1。
- `proxyInfo`

  - : `object`. 仅当请求被代理时，此属性才存在。它包含以下属性：

    - `host`
      - : `string`. 代理服务器的主机名。
    - `port`
      - : `integer`. 代理服务器的端口号。
    - `type`

      - : `string`. 代理服务器的类型。一个：

        - "http": HTTP代理（或HTTPS的SSL CONNECT）
        - "https": 通过TLS连接到代理的HTTP代理
        - "socks": SOCKS v5代理
        - "socks4": SOCKS v4代理
        - "direct": 无代理
        - "unknown": 未知代理

    - `username`
      - : `string`. 代理服务的用户名。
    - `proxyDNS`
      - : `boolean`. 如果代理将根据提供的主机名执行域名解析，则为true，这意味着客户端不应执行自己的DNS查找。
    - `failoverTimeout`
      - : `integer`. 失败转移超时（以秒为单位）。如果代理连接失败，则在此期间将不再使用代理。

- `requestId`
  - : `string`. 请求的ID。请求ID在浏览器会话中是唯一的，因此可以使用它们来关联与同一请求相关的不同事件。
- `tabId`
  - : `integer`. 请求发生的选项卡的ID。如果请求与选项卡无关，则设置为-1。
- `thirdParty`
  - : `boolean`. 指示请求及其内容窗口层次结构是否为第三方。
- `timeStamp`
  - : `number`. 此事件触发时的时间，以[自纪元以来的毫秒数](https://en.wikipedia.org/wiki/Unix_time)表示。
- `type`
  - : {{WebExtAPIRef('webRequest.ResourceType')}}. 正在请求的资源的类型：例如，“图像”、“脚本”、“样式表”。
- `url`
  - : `string`. 请求的目标。
- `urlClassification`

  - : `object`. 与请求相关的跟踪类型（如果请求由[Firefox跟踪保护](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop)分类）。这是一个具有以下属性的对象：

    - `firstParty`
      - : `array` of `strings`. 请求的第一方的分类标志。
    - `thirdParty`
      - : `array` of `strings`. 请求或其窗口层次结构的第三方的分类标志。

    分类标志包括：

    - `fingerprinting`和`fingerprinting_content`：指示请求涉及指纹识别（“发现指纹的来源”）。
      - `fingerprinting`指示域属于指纹识别和跟踪类别。此类域的示例包括希望将配置文件与访问用户关联的广告商。
      - `fingerprinting_content`指示域属于指纹识别类别，但不属于跟踪类别。此类域的示例包括使用指纹识别技术识别访问用户以防止欺诈的支付提供商。
    - `cryptomining`和`cryptomining_content`：与指纹识别类别类似，但用于加密货币资源。
    - `tracking`、`tracking_ad`、`tracking_analytics`、`tracking_social`和`tracking_content`：指示请求涉及跟踪。`tracking`是任何通用跟踪请求，`ad`、`analytics`、`social`和`content`后缀标识跟踪器的类型。
    - `emailtracking`和`emailtracking_content`：指示请求涉及跟踪电子邮件。
    - `any_basic_tracking`：一个元标志，结合跟踪和指纹识别标志，排除`tracking_content`和`fingerprinting_content`。
    - `any_strict_tracking`：一个元标志，结合所有跟踪和指纹识别标志。
    - `any_social_tracking`：一个元标志，结合所有社交跟踪标志。

    您可以在[disconnect.me](https://disconnect.me/trackerprotection#categories_of_trackers)网站上找到有关跟踪器类型的更多信息。`content`后缀表示跟踪和提供内容的跟踪器。阻止它们可以保护用户，但可能会导致站点中断或元素未显示。

    **注意** 如果Firefox跟踪保护阻止请求，则返回一个空对象，`error`返回以下代码之一：

    - `NS_ERROR_MALWARE_URI`指示恶意软件URI。
    - `NS_ERROR_PHISHING_URI`指示网络钓鱼URI。
    - `NS_ERROR_TRACKING_URI`指示跟踪URI。
    - `NS_ERROR_UNWANTED_URI`指示不需要的URI。
    - `NS_ERROR_BLOCKED_URI`指示被阻止的URI。
    - `NS_ERROR_HARMFUL_URI`指示有害URI。
    - `NS_ERROR_FINGERPRINTING`指示指纹识别URI。
    - `NS_ERROR_CRYPTOMINING_URI`指示加密货币URI。
    - `NS_ERROR_SOCIALTRACKING_URI`指示社交跟踪URI。

## 浏览器兼容性

{{Compat}}

## 示例

```js
let target = "<all_urls>";

/*
e.g., with no network:
"https://developer.mozilla.org/en-US/"
NS_ERROR_NET_ON_RESOLVED in Firefox
net::ERR_INTERNET_DISCONNECTED in Chrome
*/
function logError(responseDetails) {
  console.log(responseDetails.url);
  console.log(responseDetails.error);
}

browser.webRequest.onErrorOccurred.addListener(logError, { urls: [target] });
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.webRequest`](https://developer.chrome.google.cn/docs/extensions/reference/api/webRequest#event-onErrorOccurred) API。该文档衍生自 Chromium 代码中的 [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json)。

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
