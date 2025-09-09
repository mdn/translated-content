---
title: webRequest.BlockingResponse
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/BlockingResponse
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

在 `extraInfoSpec` 参数中设置了 `"blocking"` 参数的事件监听器将返回该类型的对象。

通过设置 `BlockingResponse` 中的特定属性，监听器可以修改网络请求。

需要注意的是，并不是在每个监听器中都可以设置该对象的所有属性：可以设置的属性取决于触发该监听器的事件，具体如下所述。

## 类型

该类型的取值是一个对象。其包含以下属性：

- `authCredentials` {{optional_inline}}
  - : `object`。若设置，则请求将使用给定的凭据进行。你只能在 {{WebExtAPIRef("webRequest.onAuthRequired", "onAuthRequired")}} 中设置该属性。`authCredentials` 属性是包含下列属性的对象：
    - `username`
      - : `string`。要提供的用户名。
    - `password`
      - : `string`。要提供的密码。

- `cancel` {{optional_inline}}
  - : `boolean`。若为 `true`，则请求被取消。你只能在 {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}}、{{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}、{{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}} 和 {{WebExtAPIRef("webRequest.onAuthRequired", "onAuthRequired")}} 中设置该属性。
- `redirectUrl` {{optional_inline}}
  - : `string`。如果设置，则原始请求将被重定向到该 URL。你只能在 {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}} 或 {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}} 中设置该属性。

    你可以重定向到非 HTTP 方案（例如 `data:`）。重定向将使用与原始请求相同的请求方法，除非是从 `onHeadersReceived` 阶段发起的，此时重定向将使用 GET 方法。

    如果扩展想要将公共（例如 HTTPS）URL 重定向到[扩展页面](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages)，则扩展的 manifest.json 文件必须包含列出了扩展页面的 URL 的 [web_accessible_resources](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) 键。

- `requestHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}。这是一个 {{WebExtAPIRef('webRequest.HttpHeaders', "HttpHeaders")}} 对象（一个数组，其中各对象都表示一个标头）。如果设置，则请求将使用这些标头而不是原始标头。你只能在 {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}} 中设置该属性。
- `responseHeaders` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}。这是一个 {{WebExtAPIRef('webRequest.HttpHeaders', "HttpHeaders")}} 对象（一个数组，其中各对象都表示一个标头）。如果设置，则将认为服务器以这些响应标头而非原始标头响应了请求。你只能在 {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}} 中设置该属性。如果多个扩展尝试设置同一标头（例如 `Content-Security-Policy`），则只有其中一次更改会成功。
- `upgradeToSecure` {{optional_inline}}
  - : `boolean`。若设为 `true` 并且原始请求是一个 HTTP 请求，则这会阻止原始请求的发送，而是发起一个安全的（HTTPS）请求。如果任何扩展在 `onBeforeRequest` 中返回 `redirectUrl`，则 `upgradeToSecure` 将被忽略。你只能在 {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}} 中设置该属性。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.webRequest`](https://developer.chrome.google.cn/docs/extensions/reference/api/webRequest#type-BlockingResponse) API。该文档衍生自 Chromium 代码中的 [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json)。

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
