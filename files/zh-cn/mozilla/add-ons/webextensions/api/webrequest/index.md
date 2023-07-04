---
title: webRequest
slug: Mozilla/Add-ons/WebExtensions/API/webRequest
page-type: webextension-api
browser-compat: webextensions.api.webRequest
---

{{AddonSidebar}}

为发出HTTP请求的各个阶段添加事件监听器，其中包括`ws://`和`wss://`上的websocket请求。事件监听器接收关于请求的详细信息，并可以修改或取消请求。

每个事件都会在请求的特定阶段触发。事件的顺序大概是这样的：

![Order of requests is onBeforeRequest, onBeforeSendHeader, onSendHeaders, onHeadersReceived, onResponseStarted, and onCompleted. The onHeadersReceived can cause an onBeforeRedirect and an onAuthRequired. Events caused by onHeadersReceived start at the beginning onBeforeRequest. Events caused by onAuthRequired start at onBeforeSendHeader.](webrequest-flow.png)

{{WebExtAPIRef("webRequest.onErrorOccurred", "onErrorOccurred")}}可以在请求过程中的任何时间启动。另外，请注意，有时事件的顺序可能与此不同。例如，在Firefox中，在[HSTS](/zh-CN/docs/Web/HTTP/Headers/Strict-Transport-Security)升级时，`onBeforeRedirect`事件是在`onBeforeRequest`之后立即触发的。如果[Firefox Tracking Protection](https://support.mozilla.org/zh-CN/kb/enhanced-tracking-protection-firefox-desktop)阻止一个请求，`onErrorOccurred`也会被触发。

所有的事件 - 除了 `onErrorOccurred` - 都可以给 `addListener()`带三个参数：

- 监听器本身
- 一个 {{WebExtAPIRef("webRequest.RequestFilter", "filter")}} 对象，所以你仅可以被特定请求或特定的资源类型提醒
- 一个可选的`extraInfoSpec`对象。你可以使用这个对象添加特定的事件命令

这个监听函数接收一个`details`对象，这个对象包含这个请求的信息。他包含一个请求 ID, 在插件中这个 ID 可以关联唯一个请求事件。这个 ID 是浏览器会话和插件上下文中唯一的。他始终在同一个请求中，贯穿着转发和授权等事件中。

在一个给定的主机上使用 webRequest API, 你必须有这个主机的相关权限，包括"webRequest" [API permission](/zh-CN/Add-ons/WebExtensions/manifest.json/permissions#API_permissions) 和 [host permission](/zh-CN/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions). 为了使用 "blocking" 特性，你必须有 "webRequestBlocking" API 权限。

这个 webRequest API 不能让你进入一些安全敏感的请求，比如[update checks and OCSP checks](https://bugzilla.mozilla.org/show_bug.cgi?id=1279371).

### 修改请求

在下边这些事件中，你可以修改请求。比如一些特别的操作：

- 取消请求：

  - {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}}
  - {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}
  - {{WebExtAPIRef("webRequest.onAuthRequired", "onAuthRequired")}}

- 重定向请求：

  - {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}}
  - {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}}

- 修改请求头：

  - {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}

- 修改响应头：

  - {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}}

- 加入认证功能：

  - {{WebExtAPIRef("webRequest.onAuthRequired", "onAuthRequired")}}

为了完成这些操作，你需要在`extraInfoSpec`参数中添加"blocking"的值到事件的`addListener()`。这将使得监听器变成同步执行。

在监听器中，你可以返回一个表明需要作修改的{{WebExtAPIRef("webRequest.BlockingResponse", "BlockingResponse")}}对象：比如说，你想要发送的修改后的请求头。

## Requests at browser startup

When a listener is registered with the `"blocking"` option and is registered during the extension startup, if a request is made during the browser startup that matches the listener the extension starts early. This enables the extension to observe the request at browser startup. If you don't take these steps, requests made at startup could be missed.

## Speculative requests

The browser can make speculative connections, where it determines that a request to a URI may be coming soon. This type of connection does not provide valid tab information, so request details such as `tabId`, `frameId`, `parentFrameId`, etc. are inaccurate. These connections have a {{WebExtAPIRef("webRequest.ResourceType")}} of `speculative`.

## Accessing security information

In the {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}} listener you can access the [TLS](/zh-CN/docs/Glossary/TLS) properties of a request by calling {{WebExtAPIRef("webRequest.getSecurityInfo()", "getSecurityInfo()")}}. To do this you must also pass "blocking" in the `extraInfoSpec` argument to the event's `addListener()`.

You can read details of the TLS handshake, but can't modify them or override the browser's trust decisions.

## Modifying responses

To modify the HTTP response bodies for a request, call {{WebExtAPIRef("webRequest.filterResponseData")}}, passing it the ID of the request. This returns a {{WebExtAPIRef("webRequest.StreamFilter")}} object that you can use to examine and modify the data as it is received by the browser.

To do this, you must have the `"webRequestBlocking"` API permission as well as the `"webRequest"` [API permission](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) and the [host permission](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) for the relevant host.

## Types

- {{WebExtAPIRef("webRequest.BlockingResponse")}}
  - : An object of this type is returned by event listeners that have set `"blocking"` in their `extraInfoSpec` argument. By setting particular properties in `BlockingResponse`, the listener can modify network requests.
- {{WebExtAPIRef("webRequest.CertificateInfo")}}
  - : An object describing a single X.509 certificate.
- {{WebExtAPIRef("webRequest.HttpHeaders")}}
  - : An array of HTTP headers. Each header is represented as an object with two properties: `name` and either `value` or `binaryValue`.
- {{WebExtAPIRef("webRequest.RequestFilter")}}
  - : An object describing filters to apply to `webRequest` events.
- {{WebExtAPIRef("webRequest.ResourceType")}}
  - : Represents a particular kind of resource fetched in a web request.
- {{WebExtAPIRef("webRequest.RequestFilter")}}
  - : An object describing filters to apply to webRequest events.
- {{WebExtAPIRef("webRequest.HttpHeaders")}}
  - : An array of HTTP headers. Each header is represented as an object with two properties: `name` and either `value` or `binaryValue`.
- {{WebExtAPIRef("webRequest.UploadData")}}
  - : Contains data uploaded in a URL request.

## Properties

- {{WebExtAPIRef("webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES", "webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES")}}
  - : The maximum number of times that {{WebExtAPIRef("WebRequest.handlerBehaviorChanged", "handlerBehaviorChanged()")}} can be called in a 10 minute period.

## Methods

- {{WebExtAPIRef("webRequest.handlerBehaviorChanged()")}}
  - : This method can be used to ensure that event listeners are applied correctly when pages are in the browser's in-memory cache.
- {{WebExtAPIRef("webRequest.filterResponseData()")}}
  - : Returns a {{WebExtAPIRef("webRequest.StreamFilter")}} object for a given request.
- {{WebExtAPIRef("webRequest.getSecurityInfo()")}}
  - : Gets detailed information about the [TLS](/zh-CN/docs/Glossary/TLS) connection associated with a given request.

## Events

- {{WebExtAPIRef("webRequest.onBeforeRequest")}}
  - : Fired when a request is about to be made, and before headers are available. This is a good place to listen if you want to cancel or redirect the request.
- {{WebExtAPIRef("webRequest.onBeforeSendHeaders")}}
  - : Fired before sending any HTTP data, but after HTTP headers are available. This is a good place to listen if you want to modify HTTP request headers.
- {{WebExtAPIRef("webRequest.onSendHeaders")}}
  - : Fired just before sending headers. If your add-on or some other add-on modified headers in `{{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}`, you'll see the modified version here.
- {{WebExtAPIRef("webRequest.onHeadersReceived")}}
  - : Fired when the HTTP response headers associated with a request have been received. You can use this event to modify HTTP response headers.
- {{WebExtAPIRef("webRequest.onAuthRequired")}}
  - : Fired when the server asks the client to provide authentication credentials. The listener can do nothing, cancel the request, or supply authentication credentials.
- {{WebExtAPIRef("webRequest.onResponseStarted")}}
  - : Fired when the first byte of the response body is received. For HTTP requests, this means that the status line and response headers are available.
- {{WebExtAPIRef("webRequest.onBeforeRedirect")}}
  - : Fired when a server-initiated redirect is about to occur.
- {{WebExtAPIRef("webRequest.onCompleted")}}
  - : Fired when a request is completed.
- {{WebExtAPIRef("webRequest.onErrorOccurred")}}
  - : Fired when an error occurs.

## 浏览器兼容性

{{Compat}}
[Additional notes on Chrome incompatibilities](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#webrequest_api).

{{WebExtExamples("h2")}}

> **Note:** This API is based on Chromium's [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/webRequest/) API. This documentation is derived from [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) in the Chromium code.

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
