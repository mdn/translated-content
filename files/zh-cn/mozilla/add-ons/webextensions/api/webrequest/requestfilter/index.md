---
title: webRequest.RequestFilter
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter
l10n:
  sourceCommit: 5ebacde5e3e3500a851a2c49c7d02a7a5c6604ce
---

描述应用于 webRequest 事件的过滤器的对象。

## 类型

该参数值是一个对象。其包含以下属性：

- `urls`
  - : `string` 的数组（`array`）。一个[匹配模式](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)的数组。只有目标与给定模式匹配的请求才会触发监听器。只有使用 HTTP 或 HTTPS 发出的请求才会触发事件，其他与模式匹配的协议（如 data: 和 file:）则不会触发事件。`view-source:` 请求可能会根据其内部 URL 进行匹配。
- `types` {{optional_inline}}
  - : {{WebExtAPIRef('webRequest.ResourceType')}} 的数组（`array`）。用于表示资源类型的列表（例如样式表、图像、脚本）。只有请求的资源类型是给定类型之一时，监听器才会被调用。
- `tabId` {{optional_inline}}
  - : `integer`。只有来自具有此 ID 的{{WebExtAPIRef("tabs.Tab", "标签页", "", 1)}}的请求才会使得监听器被调用。
- `windowId` {{optional_inline}}
  - : `integer`。只有来自具有此 ID 的{{WebExtAPIRef("windows.Window", "窗口", "", 1)}}的请求才会使得监听器被调用。
- `incognito` {{optional_inline}}
  - : `boolean`。若提供，则不匹配隐身状态（`true` 或 `false`）的请求将被过滤。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.webRequest`](https://developer.chrome.google.cn/docs/extensions/reference/api/webRequest#type-RequestFilter) API。该文档衍生自 Chromium 代码中的 [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json)。

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
