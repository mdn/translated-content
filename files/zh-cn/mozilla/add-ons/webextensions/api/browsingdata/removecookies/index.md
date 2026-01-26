---
title: browsingData.removeCookies()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/removeCookies
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

清除浏览器的 cookie。

你可以使用 `removalOptions` 参数（一个 {{WebExtAPIRef("browsingData.RemovalOptions")}} 对象），来：

- 仅清除指定时间后创建的 cookie
- 控制是否仅清除来自普通网页设置的 cookie，还是同时清除来自托管应用程序和扩展设置的 cookie。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let removing = browser.browsingData.removeCookies(
  removalOptions            // RemovalOptions 对象
)
```

### 参数

- `removalOptions`
  - : `object`。一个 {{WebExtAPIRef("browsingData.RemovalOptions")}} 对象，用于仅清除指定时间后创建的 cookie，以及是否仅清除来自普通网页设置的 cookie，还是同时清除来自托管应用程序和扩展设置的 cookie。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，在移除完成时其会兑现且不带任何参数。如果发生任何错误，promise 将被拒绝，并附带一个错误消息。

## 示例

移除最近一周内创建的 cookie：

```js
function onRemoved() {
  console.log("已删除");
}

function onError(error) {
  console.error(error);
}

function weekInMilliseconds() {
  return 1000 * 60 * 60 * 24 * 7;
}

let oneWeekAgo = new Date().getTime() - weekInMilliseconds();

browser.browsingData
  .removeCookies({ since: oneWeekAgo })
  .then(onRemoved, onError);
```

移除所有 cookie：

> [!WARNING]
> 使用 API 清除所有 cookie 将同时清除所有本地存储对象（包括其他扩展程序的存储对象）。
>
> 如果要清除所有 cookie 而不影响本地存储设施，请使用 [browser.cookies](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/cookies) 来循环并清除所有 cookie 存储的内容。

```js
function onRemoved() {
  console.log("已删除");
}

function onError(error) {
  console.error(error);
}

browser.browsingData.removeCookies({}).then(onRemoved, onError);
```

## 浏览器兼容性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.browsingData`](https://developer.chrome.google.cn/docs/extensions/reference/api/browsingData) API。

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
