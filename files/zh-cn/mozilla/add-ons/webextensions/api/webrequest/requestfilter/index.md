---
title: webRequest.RequestFilter
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter
---

{{AddonSidebar}}

webRequest 事件参数

## Type

该参数值是一个对象，包括以下属性：

- `urls`
  - : 字符串数组类型，数组内的每个字符串为[模式匹配](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)格式。当请求地址符合给定模式时，事件监听器才会响应。需注意的是，仅支持 http 和 HTTPS 协议的参数地址，其他协议即使与该给定模式匹配也不会响应。
- `types`{{optional_inline}}
  - : webRequest.ResourceType 类型的数组，表示资源类型列表。例如：stylesheets、images、scripts。事件监听器仅响应出现在该指定列表的资源类型。
- `tabId`{{optional_inline}}
  - : 数值类型，与{{WebExtAPIRef("tabs.Tab", "tab")}}关联，事件监听器仅响应指定了该 tabId 的请求。
- `windowId`{{optional_inline}}
  - : 数值类型，与{{WebExtAPIRef("windows.Window", "window")}}关联，事件监听器仅响应指定了该`windowId`的请求。

## Browser compatibility

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> 该 API 基于 Chromium 的 [`chrome.webRequest`](https://developer.chrome.google.cn/docs/extensions/reference/api/webRequest#type-RequestFilter) API. 该文档来源于 Chromium 代码中的 [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) 。

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
