---
title: webRequest
slug: Mozilla/Add-ons/WebExtensions/API/webRequest
l10n:
  sourceCommit: 5ebacde5e3e3500a851a2c49c7d02a7a5c6604ce
---

为发出的 HTTP 请求（包括 `ws://` 和 `wss://` 的 websocket 请求）添加针对不同阶段的事件监听器。事件监听器接收有关请求的详细信息，并可以修改或取消请求。

每个事件都会在请求的特定阶段触发。事件的顺序大概是这样的：

![请求的顺序是 onBeforeRequest、onBeforeSendHeader、onSendHeaders、onHeadersReceived、onResponseStarted 和 onCompleted。onHeadersReceived 可能会引起 onBeforeRedirect 和 onAuthRequired。onHeadersReceived 引起的事件从 onBeforeRequest 开始。onAuthRequired 引起的事件从 onBeforeSendHeader 开始。](webrequest-flow.png)

但是，并非所有的事件都会在每个请求中触发。例如，当重定向目标不匹配事件的 `filter.urls` 属性时，`onBeforeRedirect` 可能不会被 `onBeforeRequest` 触发。这可能是因为过滤器中的 URL 定义得很严格，又或者重定向目标不能被扩展观察到（比如当它重定向到一个 `data:` URL 时）。

{{WebExtAPIRef("webRequest.onErrorOccurred", "onErrorOccurred")}} 在请求过程中的任意时间都可以触发。同时需要注意，有的时候事件的顺序可能会有所不同。例如，在 Firefox 中，当 [HSTS](/zh-CN/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) 升级时，`onBeforeRedirect` 事件会在 `onBeforeRequest` 之后立即触发。如果 [Firefox 跟踪保护](<https://support.mozilla.org/zh-CN/kb/Firefox 桌面版的增强跟踪保护>) 阻止了一个请求，`onErrorOccurred` 也会被触发。

所有的事件（_除_ `onErrorOccurred` 事件）的 `addListener()` 都接受三个参数：

- 监听器本身
- {{WebExtAPIRef("webRequest.RequestFilter", "filter")}} 对象，这样你就可以只在对特定 URL 或特定资源类型请求时被通知
- 可选的 `extraInfoSpec` 对象。你可以使用这个对象传递额外的事件特定指令。

监听器函数会接收一个包含有关请求的信息的 `details` 对象。这包括用于让插件对一个事件与某一特定请求关联起来的请求 ID，并且这个值在请求中是唯一的，即使在重定向和身份验证交换中也是如此。

要使用 `webRequest` API 来监听给定主机的请求，扩展必须具有该主机的 [API 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_权限)和[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限)。要使用 `"blocking"` 功能，扩展还必须具有 `"webRequestBlocking"` API 权限。

要拦截页面加载的资源（例如图片、脚本或样式表），扩展必须具有请求资源的主机权限以及请求资源的页面的主机权限。例如，如果一个页面在 `https://developer.mozilla.org` 加载了一个来自 `https://mdn.mozillademos.org` 的图片，那么如果扩展要拦截图片请求，则其必须同时具有两者的主机权限。

### 修改请求

你可以修改下面的事件中的一部分的请求。具体而言，包括：

- 取消请求：
  - {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}}
  - {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}
  - {{WebExtAPIRef("webRequest.onAuthRequired", "onAuthRequired")}}

- 重定向请求：
  - {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}}
  - {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}}

- 修改请求标头：
  - {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}

- 修改响应标头：
  - {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}}

- 提供认证凭据：
  - {{WebExtAPIRef("webRequest.onAuthRequired", "onAuthRequired")}}

要做到这一点，你需要在事件的 `addListener()` 中的 `extraInfoSpec` 参数中传递一个值为 `"blocking"` 的选项。这将让监听器变为同步的。

在监听器中，你可以返回指示你需要进行的修改的 {{WebExtAPIRef("webRequest.BlockingResponse", "BlockingResponse")}} 对象：例如，你想要发送的修改后的请求标头。

## 在浏览器启动时的请求

当一个监听器在扩展启动期间注册，并且使用了 `"blocking"` 选项，如果在浏览器启动期间发出了一个与监听器匹配的请求，扩展会提前启动。这使得扩展能够在浏览器启动时观察请求。如果你不采取这些步骤，可能会错过在启动时发出的请求。

## 推测性请求

浏览器可以进行推测性连接，即预测可能即将发生的 URI 请求。这种类型的连接不提供有效的标签信息，因此请求的详细信息（例如 `tabId`、`frameId`、`parentFrameId` 等）是不准确的。这些连接的 {{WebExtAPIRef("webRequest.ResourceType")}} 是 `speculative`。

## 访问安全信息

在 {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}} 监听器中，你可以通过调用 {{WebExtAPIRef("webRequest.getSecurityInfo()", "getSecurityInfo()")}} 访问请求的 [TLS](/zh-CN/docs/Glossary/TLS) 属性。为了做到这一点，你还必须在事件的 `addListener()` 中为 `extraInfoSpec` 参数传入 `"blocking"` 值。

你可以读取 TLS 握手的详细信息，但不能修改它们或覆盖浏览器的信任决策。

## 修改响应

要修改请求的 HTTP 响应体，调用 {{WebExtAPIRef("webRequest.filterResponseData")}} 并传入请求的 ID。这将返回一个当浏览器接收到数据时可以用于来检查和修改数据 {{WebExtAPIRef("webRequest.StreamFilter")}} 对象。

要做到这一点，你必须具有 `"webRequestBlocking"` API 权限以及相关主机的 `"webRequest"` [API 权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_权限)和[主机权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#主机权限)。

## 类型

- {{WebExtAPIRef("webRequest.BlockingResponse")}}
  - : 若事件监听器在其 `extraInfoSpec` 参数中设置了 `"blocking"` 时会返回该类型的对象。通过在 `BlockingResponse` 中设置特定属性，监听器可以修改网络请求。
- {{WebExtAPIRef("webRequest.CertificateInfo")}}
  - : 描述单个 X.509 证书的对象。
- {{WebExtAPIRef("webRequest.HttpHeaders")}}
  - : HTTP 标头的数组。每个标头都是用包含两个属性 `name`、`value`（或 `binaryValue`）的对象表示。
- {{WebExtAPIRef("webRequest.RequestFilter")}}
  - : 描述应用于 `webRequest` 事件的过滤器的对象。
- {{WebExtAPIRef("webRequest.ResourceType")}}
  - : 表示在 Web 请求中获取的特定资源的一种类型。
- {{WebExtAPIRef("webRequest.SecurityInfo")}}
  - : 描述特定 Web 请求的安全属性的对象。
- {{WebExtAPIRef("webRequest.StreamFilter")}}
  - : 可以用来在接收到 HTTP 响应时监视和修改它们的对象。
- {{WebExtAPIRef("webRequest.UploadData")}}
  - : 包含在 URL 请求中上传的数据。

## 属性

- {{WebExtAPIRef("webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES")}}
  - : {{WebExtAPIRef("WebRequest.handlerBehaviorChanged", "handlerBehaviorChanged()")}} 可以在 10 分钟内被调用的最大次数。

## 方法

- {{WebExtAPIRef("webRequest.handlerBehaviorChanged()")}}
  - : 可以用来确保在页面在浏览器的内存缓存中事件监听器被正确地应用。
- {{WebExtAPIRef("webRequest.filterResponseData()")}}
  - : 为给定请求返回一个 {{WebExtAPIRef("webRequest.StreamFilter")}} 对象。
- {{WebExtAPIRef("webRequest.getSecurityInfo()")}}
  - : 获取与给定请求关联的 [TLS](/zh-CN/docs/Glossary/TLS) 连接的详细信息。

## 事件

- {{WebExtAPIRef("webRequest.onBeforeRequest")}}
  - : 在请求发出之前，且在标头可用之前触发。如果你想取消或重定向请求，这是一个很好的监听位置。
- {{WebExtAPIRef("webRequest.onBeforeSendHeaders")}}
  - : 在发送任何 HTTP 数据之前，但在 HTTP 标头可用之后触发。如果你想修改 HTTP 请求标头，这是一个很好的监听位置。
- {{WebExtAPIRef("webRequest.onSendHeaders")}}
  - : 在发送标头之前触发。如果你的插件或其他插件在 {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}} 中修改了标头，你会在这里看到修改后的版本。
- {{WebExtAPIRef("webRequest.onHeadersReceived")}}
  - : 当与请求关联的 HTTP 响应标头接收到时触发。你可以使用这个事件来修改 HTTP 响应标头。
- {{WebExtAPIRef("webRequest.onAuthRequired")}}
  - : 当服务器要求客户端提供身份验证凭据时触发。监听器可以什么都不做，取消请求，或提供身份验证凭据。
- {{WebExtAPIRef("webRequest.onResponseStarted")}}
  - : 当接收到响应体的第一个字节时触发。对于 HTTP 请求，这意味着状态行和响应标头可用。
- {{WebExtAPIRef("webRequest.onBeforeRedirect")}}
  - : 当服务器发起的重定向即将发生时触发。
- {{WebExtAPIRef("webRequest.onCompleted")}}
  - : 当请求完成时触发。
- {{WebExtAPIRef("webRequest.onErrorOccurred")}}
  - : 当发生错误时触发。

## 浏览器兼容性

{{Compat}}

[关于 Chrome 不兼容性的额外说明](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#webrequest_api)。

{{WebExtExamples("h2")}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.webRequest`](https://developer.chrome.google.cn/docs/extensions/reference/api/webRequest) API。该文档衍生自 Chromium 代码中的 [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json)。

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
