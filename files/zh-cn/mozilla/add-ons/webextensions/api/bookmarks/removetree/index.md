---
title: bookmarks.removeTree()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/removeTree
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

**`bookmarks.removeTree()`** 方法递归删除一个书签文件夹及其所有内容。

> [!WARNING]
> 如果你的扩展尝试从书签树根节点中删除书签树，则调用将引发错误，并显示消息：“The bookmark root cannot be modified”，并且书签将不会被删除。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let removingTree = browser.bookmarks.removeTree(
  id                // 字符串
)
```

### 参数

- `id`
  - : {{jsxref("string", "字符串", "", 1)}}，指定要删除的文件夹（以及其后代节点）的 ID。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，当树被删除时其会兑现，且不带任何参数。

如果无法找到与 `id` 参数对应的节点，则该 Promise 将以错误消息拒绝。

## 示例

此示例查找名为“MDN”的书签文件夹，并删除它以及其中的所有内容。

```js
function onRemoved() {
  console.log("书签项已删除！");
}

function onRejected(error) {
  console.log(`出现错误：${error}`);
}

function removeMDN(searchResults) {
  if (searchResults.length) {
    let removing = browser.bookmarks.removeTree(searchResults[0].id);
    removing.then(onRemoved, onRejected);
  }
}

let searchingBookmarks = browser.bookmarks.search({ title: "MDN" });
searchingBookmarks.then(removeMDN, onRejected);
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.bookmarks`](https://developer.chrome.google.cn/docs/extensions/reference/api/bookmarks#method-removeTree) API。该文档衍生自 Chromium 代码中的 [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json)。

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
