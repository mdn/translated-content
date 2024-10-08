---
title: bookmarks.get()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/get
l10n:
  sourceCommit: 85126f83684f5c62f346e360248cf88f3ba4bc8d
---

{{AddonSidebar}}

**`bookmarks.get()`** 方法用于检索与给定 {{WebExtAPIRef("bookmarks.BookmarkTreeNode")}} 的 ID 或此类 ID 的数组匹配的节点。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let getBookmarks = browser.bookmarks.get(
  idOrIdList                // 字符串或字符串数组
)
```

### 参数

- `idOrIdList`
  - : 一个{{jsxref("string", "字符串", "", 1)}}或字符串{{jsxref("array", "数组", "", 1)}}，指定一个或多个要检索的 {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} 对象的 ID。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现一个 [`BookmarkTreeNode`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode) 数组，表示每个匹配的节点。结果中不包括分隔符。如果找不到任何节点，promise 将以错误消息拒绝。

## 示例

此示例尝试获取 ID 为 `bookmarkAAAA` 的书签。如果不存在具有此 ID 的书签，则调用 `onRejected`：

```js
function onFulfilled(bookmarks) {
  console.log(bookmarks);
}

function onRejected(error) {
  console.log(`一个错误：${error}`);
}

let gettingBookmarks = browser.bookmarks.get("bookmarkAAAA");
gettingBookmarks.then(onFulfilled, onRejected);
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.bookmarks`](https://developer.chrome.google.cn/docs/extensions/reference/api/bookmarks) API。该文档衍生自 Chromium 代码中的 [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json)。

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
