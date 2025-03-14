---
title: webRequest
slug: Mozilla/Add-ons/WebExtensions/API/webRequest
---

{{AddonSidebar}}为发出的 HTTP 请求在不同阶段添加事件监听器。事件监听器可以接收到请求的详细信息，也可以修改或取消请求。

## 概况

每个事件都会在请求的特定阶段触发。事件的顺序大概是这样的：

在请求过程中的任意时间，{{WebExtAPIRef("webRequest.onErrorOccurred", "onErrorOccurred")}} 可以被触发。虽然有时候触发的事件顺序不同，举个例子，在火狐浏览器中的 HSTS 过程，在 onBeforeRequest 事件执行后，onBeforeRedirect 事件会被立即触发。

所有的事件，接受 `onErrorOccurred` 事件，`addListener()` 有三个参数：

- 监听本身
- 一个 {{WebExtAPIRef("webRequest.RequestFilter", "filter")}} 对象，所以你仅可以被特定请求或特定的资源类型提醒
- 一个可选的`extraInfoSpec`对象。你可以使用这个对象添加特定的事件命令

这个监听函数接收一个`details`对象，这个对象包含这个请求的信息。他包含一个请求 ID, 在插件中这个 ID 可以关联唯一个请求事件。这个 ID 是浏览器会话和插件上下文中唯一的。他始终在同一个请求中，贯穿着转发和授权等事件中。

在一个给定的主机上使用 webRequest API, 你必须有这个主机的相关权限，包括"webRequest" [API permission](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) 和 [host permission](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions). 为了使用 "blocking" 特性，你必须有 "webRequestBlocking" API 权限。

这个 webRequest API 不能让你进入一些安全敏感的请求，比如[update checks and OCSP checks](https://bugzilla.mozilla.org/show_bug.cgi?id=1279371).

### Modifying requests

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

为了完成这些操作，你需要在`extraInfoSpec`参数中添加"blocking"的值到事件的`addListener()`。这将使得监听器变成同步执行。在监听器中，你可以返回一个表明需要作修改的{{WebExtAPIRef("webRequest.BlockingResponse", "BlockingResponse")}}对象：比如说，你想要发送的修改后的请求头。

从 Firefox 52 开始，监听器会返回一个`resolve(BlockingResponse)` 的 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，而不是直接返回一个`BlockingResponse`。这使得监听器可以异步地处理请求。

## Types

- {{WebExtAPIRef("webRequest.ResourceType")}}
  - : Represents a particular kind of resource fetched in a web request.
- {{WebExtAPIRef("webRequest.RequestFilter")}}
  - : An object describing filters to apply to webRequest events.
- {{WebExtAPIRef("webRequest.HttpHeaders")}}
  - : An array of HTTP headers. Each header is represented as an object with two properties: `name` and either `value` or `binaryValue`.
- {{WebExtAPIRef("webRequest.BlockingResponse")}}
  - : An object of this type is returned by event listeners that have set `"blocking"` in their `extraInfoSpec` argument. By setting particular properties in `BlockingResponse`, the listener can modify network requests.
- {{WebExtAPIRef("webRequest.UploadData")}}
  - : Contains data uploaded in a URL request.

## Properties

- {{WebExtAPIRef("webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES")}}
  - : The maximum number of times that [`handlerBehaviorChanged()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/WebRequest/handlerBehaviorChanged) can be called in a 10 minute period.

## Functions

- {{WebExtAPIRef("webRequest.handlerBehaviorChanged()")}}
  - : This function can be used to ensure that event listeners are applied correctly when pages are in the browser's in-memory cache.

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
