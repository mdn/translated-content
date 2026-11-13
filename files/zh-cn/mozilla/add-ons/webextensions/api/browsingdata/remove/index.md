---
title: browsingData.remove()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/remove
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

移除指定的浏览数据。

要移除的浏览数据在 `dataTypes` 选项（一个 {{WebExtAPIRef("browsingData.DataTypeSet")}} 对象）中指定。

你可以使用 `removalOptions` 选项（一个 {{WebExtAPIRef("browsingData.RemovalOptions")}} 对象）来控制移除数据的时间跨度以及是否仅从普通网页中移除数据，还是同时从托管的应用程序和扩展中移除数据。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let removing = browser.browsingData.remove(
  removalOptions,            // RemovalOptions 对象
  dataTypes                  // DataTypeSet 对象
)
```

### 参数

- `removalOptions`
  - : `object`。一个 {{WebExtAPIRef("browsingData.RemovalOptions")}} 对象，可用于控制要移除的数据的时间跨度，以及是否从托管的 Web 应用程序和扩展中移除数据，还是仅从普通网页中移除数据。
- `dataTypes`
  - : `object`。一个 {{WebExtAPIRef("browsingData.DataTypeSet")}} 对象，描述要移除的数据类型（例如历史记录、下载等）。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，在移除完成时其会兑现且不带任何参数。如果发生任何错误，`Promise` 将被拒绝，并附带一个错误消息。

## 示例

删除最近一周的下载历史和浏览历史：

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
  .remove({ since: oneWeekAgo }, { downloads: true, history: true })
  .then(onRemoved, onError);
```

删除所有下载和浏览历史：

```js
function onRemoved() {
  console.log("已删除");
}

function onError(error) {
  console.error(error);
}

browser.browsingData
  .remove({}, { downloads: true, history: true })
  .then(onRemoved, onError);
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

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
