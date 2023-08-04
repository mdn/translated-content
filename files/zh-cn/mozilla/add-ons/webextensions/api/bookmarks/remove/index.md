---
title: bookmarks.remove()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/remove
---

{{AddonSidebar()}}

**`bookmarks.remove()`** 方法用于删除单个书签或一个空的书签文件夹。

> **警告：** 如果你的扩展尝试从书签树的根节点中移除一个书签，该调用将会引发一个“书签根不能被修改的”的错误信息并且这个书签不会被移除。

这是一个异步方法，返回 `Promise` 对象。

## 语法

```js
var removingBookmark = browser.bookmarks.remove(
  id, // 字符串
);
```

### 参数

- `id`
  - : {{jsxref("string")}} 要删除的书签或空书签文件夹的 id 标识

### 返回值

若方法执行完成，返回一个无参的 `Promise` 对象。

若未找到该书签或该空书签文件夹，将返回一个带有错误信息的 `Promise` 对象。

## 浏览器兼容性

{{Compat}}

## 示例

```js
function onRemoved() {
  console.log("Removed!");
}

function onRejected(error) {
  console.log(`An error: ${error}`);
}

var bookmarkId = "abcdefghijkl";

var removingBookmark = browser.bookmarks.remove(bookmarkId);
removingBookmark.then(onRemoved, onRejected);
```

{{WebExtExamples}}

> **备注：** This API is based on Chromium's [`chrome.bookmarks`](https://developer.chrome.com/extensions/bookmarks#method-remove) API. This documentation is derived from [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) in the Chromium code.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

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
