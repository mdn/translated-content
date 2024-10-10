---
title: extension.sendRequest()
slug: Mozilla/Add-ons/WebExtensions/API/extension/sendRequest
l10n:
  sourceCommit: 5f090dea2cacee4ff4f654241f017a9f6649124e
---

{{AddonSidebar}}{{Deprecated_Header}}

> [!WARNING]
> 该方法已被弃用。请改用 {{WebExtAPIRef("runtime.sendMessage")}}。

向插件中其他的监听器发送请求。该方法类似于 {{WebExtAPIRef('runtime.connect')}}，但它只能发送可选地带有响应的单一请求。发送请求后在扩展的每个页面中，{{WebExtAPIRef('extension.onRequest')}} 事件都会触发。

## 语法

```js-nolint
chrome.extension.sendRequest(
  extensionId,             // 可选的字符串
  request,                 // 任意类型
  (response) => {/* … */}  // 可选的函数
)
```

该 API 的返回 promise 的版本同样以 `browser.extension.sendRequest()` 的形式可用。

### 参数

- `extensionId` {{optional_inline}}
  - : `string`，你所希望连接到的扩展的 ID。如果省略，则默认为你自己的扩展。
- `request`
  - : `any`。
- `responseCallback` {{optional_inline}}

  - : `function`，将传递如下参数的函数：

    - `response`
      - : `any`，由请求处理器发送的 JSON 响应对象。如果在连接到插件时发生错误，回调函数将不带参数地被调用，且 {{WebExtAPIRef('runtime.lastError')}} 将被设置为错误消息。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.extension`](https://developer.chrome.google.cn/docs/extensions/reference/api/extension/#method-sendRequest) API。该文档衍生自 Chromium 代码中的 [`extension.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/extension.json)。

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
