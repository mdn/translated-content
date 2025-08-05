---
title: webRequest.handlerBehaviorChanged()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/handlerBehaviorChanged
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

该函数可用于确保当页面在浏览器的内存缓冲时事件监听器能正确应用。当浏览器加载一个页面，并且该页面被重新加载时，浏览器可能会从其内存缓存中重新加载该页面。在该情况下，请求将不会触发事件。

假设扩展的工作是根据模式阻止 Web 请求，并且以下情况发生了：

- 用户加载一个包含特定请求的页面，并且该模式允许该请求。
- 资源被加载并缓存在内存中。
- 扩展的模式被更新，并且不再允许某项资源资源。
- 用户重新加载页面。

因为页面将从内存缓存中重新加载，所以事件监听器可能不会再次被调用。因而尽管扩展的新策略不允许某请求，该请求仍将被加载。

`handlerBehaviorChanged()` 函数旨在解决此问题。它将刷新内存缓存，这样页面的重新加载就会再次触发事件监听器。

因为 `handlerBehaviorChanged()` 会刷新缓存，该操作可能比较昂贵且对性能有不良影响。webRequest 模块定义了一个只读属性 {{WebExtAPIRef("webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES", "MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES")}}：在 10 分钟内调用该函数超过此数字将不再有效果。

浏览器的缓存实现，进而对该函数的需求，在不同浏览器中有所不同，因此在某些浏览器中该函数可能无效。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let flushingCache = browser.webRequest.handlerBehaviorChanged()
```

### 参数

无。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，当操作完成时该 promise 将不带参数地兑现。

## 浏览器兼容性

{{Compat}}

## 示例

在下面代码片段中，我们通过调用 `handlerBehaviorChanged()` 来刷新内存缓存，并通过将适当的消息记录到控制台来报告此操作。

```js
function onFlushed() {
  console.log(`内存缓存已刷新`);
}

function onError(error) {
  console.log(`错误：${error}`);
}

let flushingCache = browser.webRequest.handlerBehaviorChanged();
flushingCache.then(onFlushed, onError);
```

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.webRequest`](https://developer.chrome.google.cn/docs/extensions/reference/api/webRequest#method-handlerBehaviorChanged) API。该文档衍生自 Chromium 代码中的 [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json)。

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
