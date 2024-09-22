---
title: tabs.discard()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/discard
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

丢弃一个或多个标签页。

某些浏览器会自动“丢弃”未使用的标签页以释放内存。被丢弃的标签页仍然在标签栏中可见。浏览器会记住标签页的状态，并在用户选择该标签页时恢复它。关于何时以及什么情况下标签页会被丢弃的细节因浏览器而异。

你可以通过在 {{WebExtAPIRef("tabs.update")}} 中将标签页的 `autoDiscardable` 属性设置为 `false` 来控制浏览器或此 API 是否丢弃标签页。此设置可防止浏览器丢弃该标签页。然后只能通过此 API 丢弃该标签页。

无法丢弃活动标签页或其文档包含会显示提示的 [`beforeunload`](/zh-CN/docs/Web/API/Window/beforeunload_event) 监听器的标签页。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let discarding = browser.tabs.discard(
  tabIds          // 整数或整数数组
)
```

### 参数

- `tabIds`
  - : `integer` 或 `integer` 数组。要丢弃的标签页的 ID 或 ID 数组。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，在所有指定的标签页被丢弃后其会被兑现且不带参数。如果发生任何错误（例如，标签页 ID 无效），则该 promise 将被拒绝并带有错误消息。

如果传入的是活动标签页的 ID，它将不会被丢弃，但 promise 仍会被兑现，并且任何其他传入的标签页将被丢弃。

## 示例

丢弃单个标签页：

```js
function onDiscarded() {
  console.log(`已被丢弃`);
}

function onError(error) {
  console.log(`发送错误：${error}`);
}

let discarding = browser.tabs.discard(2);
discarding.then(onDiscarded, onError);
```

丢弃多个标签页：

```js
function onDiscarded() {
  console.log(`已被丢弃`);
}

function onError(error) {
  console.log(`发生错误：${error}`);
}

let discarding = browser.tabs.discard([15, 14, 1]);
discarding.then(onDiscarded, onError);
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.tabs`](https://developer.chrome.google.cn/docs/extensions/reference/api/tabs#method-discard) API。

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
