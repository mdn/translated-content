---
title: bookmarks.update()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/update
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

**`bookmarks.update()`** 方法更新书签的标题和 URL，或者更新书签文件夹的名称。

> [!WARNING]
> 如果你的扩展尝试更新书签树根节点中的书签，则调用将引发错误，并显示消息：“The bookmark root cannot be modified”，并且书签将不会被更新。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let updating = browser.bookmarks.update(
  id,                    // 字符串
  changes                // 对象
)
```

### 参数

- `id`

  - : {{jsxref("string", "字符串", "", 1)}}，指定要更新的书签或书签文件夹的 ID。

- `changes`

  - : {{jsxref("object", "对象", "", 1)}}，指定要应用的更改，其中包含以下某些字段的组合。未指定的任何项目在引用的书签或文件夹中不会被更改：

    - `title` {{optional_inline}}
      - : {{jsxref("string", "字符串", "", 1)}}，包含书签的新标题；或者，如果 `id` 引用文件夹，则包含文件夹的新名称。
    - `url` {{optional_inline}}
      - : {{jsxref("string", "字符串", "", 1)}}，提供书签的新 URL。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现已更新的书签的单个 [`bookmarks.BookmarkTreeNode`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode) 对象。如果无法找到与 `id` 参数对应的书签项，则该 Promise 将被拒绝。

## 示例

此示例将所有名为“MDN”的文件夹重命名为“Mozilla 开发者网络（MDN）”。

```js
function onFulfilled(bookmarkItem) {
  console.log(bookmarkItem.title);
}

function onRejected(error) {
  console.error(`出现错误：${error}`);
}

function updateFolders(items) {
  for (const item of items) {
    // 仅限文件夹，所以跳过具有 `url` 的项目
    if (!item.url) {
      browser.bookmarks
        .update(item.id, {
          title: "Mozilla 开发者网络（MDN）",
        })
        .then(onFulfilled, onRejected);
    }
  }
}

browser.bookmarks.search({ title: "MDN" }).then(updateFolders, onRejected);
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.bookmarks`](https://developer.chrome.google.cn/docs/extensions/reference/api/bookmarks#method-update) API。该文档衍生自 Chromium 代码中的 [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json)。

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
