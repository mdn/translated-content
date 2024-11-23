---
title: browsingData.removeDownloads()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/removeDownloads
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

清除浏览器的下载历史记录。请注意，这不会删除已下载对象本身，只会清除浏览器历史记录中的下载记录。

你可以使用 `removalOptions` 参数（一个 {{WebExtAPIRef("browsingData.RemovalOptions")}} 对象）来：

- 清除在特定时间之后下载的项目的记录
- 控制是仅清除从普通网页下载的项目的记录，还是同时清除从托管应用程序和扩展程序下载的记录。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let removing = browser.browsingData.removeDownloads(
  removalOptions            // RemovalOptions 对象
)
```

### 参数

- `removalOptions`
  - : `object`。一个 {{WebExtAPIRef("browsingData.RemovalOptions")}} 对象，可用于仅清除在特定时间之后创建的记录，以及是仅清除从普通网页下载的项目的记录，还是同时清除从托管应用程序和扩展程序下载的记录。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，在移除完成时其会兑现且不带任何参数。如果发生任何错误，`Promise` 将被拒绝，并附带一个错误消息。

## 示例

清除上周下载的对象的记录：

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
  .removeDownloads({ since: oneWeekAgo })
  .then(onRemoved, onError);
```

清除所有下载对象的记录：

```js
function onRemoved() {
  console.log("已删除");
}

function onError(error) {
  console.error(error);
}

browser.browsingData.removeDownloads({}).then(onRemoved, onError);
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
