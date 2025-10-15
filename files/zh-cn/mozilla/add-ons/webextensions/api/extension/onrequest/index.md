---
title: extension.onRequest
slug: Mozilla/Add-ons/WebExtensions/API/extension/onRequest
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

> [!WARNING]
> 因为该方法自 Chrome 33 起被弃用，该 API 在 Firefox 中并未被实现。请改用 [runtime.onMessage](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)。

当从扩展进程或内容脚本发送请求时触发。

## 语法

```js-nolint
chrome.extension.onRequest.addListener(function(
  request,         // 可选的任意类型
  sender,          // runtime.MessageSender
  () => {/* … */}  // 函数
) {/* … */})
chrome.extension.onRequest.removeListener(listener)
chrome.extension.onRequest.hasListener(listener)
```

事件有三个函数：

- `addListener(listener)`
  - : 添加一个该事件的监听器。
- `removeListener(listener)`
  - : 停止监听该事件。`listener` 参数是要移除的监听器。
- `hasListener(listener)`
  - : 检查 `listener` 是否注册到该事件上。若该监听器正在监听该事件则返回 `true`，否则返回 `false`。

## addListener 语法

### 参数

- `listener`
  - : 当此事件发生时调用的函数。该函数传递以下参数：
    - `request`
      - : `any`。由调用脚本发送的请求。
    - `sender`
      - : {{WebExtAPIRef('runtime.MessageSender')}}。
    - `sendResponse`
      - : `function`。当你有响应时调用的函数。参数应为任何可 JSON 化的对象（如果没有响应则为 undefined）。如果在同一文档中有多个 `onRequest` 监听器，则只有一个可以发送响应。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.extension`](https://developer.chrome.google.cn/docs/extensions/reference/api/extension/#event-onRequest) API。该文档衍生自 Chromium 代码中的 [`extension.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/extension.json)。

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
