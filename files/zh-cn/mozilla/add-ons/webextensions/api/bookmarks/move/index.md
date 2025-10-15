---
title: bookmarks.move()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/move
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

**`bookmarks.move()`** 方法将指定的 {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} 移动到书签树中的指定目的地。这允许你将书签移动到新文件夹或文件夹内的位置。

> [!WARNING]
> 如果你的扩展尝试将书签移动到书签树根节点，则调用将引发错误，并显示消息：“_The bookmark root cannot be modified_”，移动操作将不会完成。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let movingBookmark = browser.bookmarks.move(
  id,                    // 字符串
  destination           // 对象
)
```

### 参数

- `id`
  - : 包含要移动的书签或文件夹的 ID 的{{jsxref("string", "字符串", "", 1)}}。
- `destination`
  - : 一个指定书签目标位置的{{jsxref("object", "对象", "", 1)}}。此对象必须包含以下一个或两个字段：
    - `parentId` {{optional_inline}}
      - : 指定目标文件夹的 ID 的{{jsxref("string", "字符串", "", 1)}}。如果省略此值，则书签将移动到其当前文件夹内的新位置。
    - `index` {{optional_inline}}
      - : 指定要将书签移动到的文件夹内的位置的从 0 开始的索引。值为 0 则将书签移动到文件夹的顶部。如果省略此值，则书签将放置在新的父文件夹的末尾。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现一个描述移动后的节点的 [`bookmarks.BookmarkTreeNode`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode) 对象。

如果与 `id` 参数对应的节点无法找到，则该 Promise 将以错误消息拒绝。

> [!NOTE]
> 如果移动多个书签，由于此 API 是异步的，移动调用可能以任何顺序处理。因此，每个书签的索引值在 {{WebExtAPIRef('bookmarks.BookmarkTreeNode', 'BookmarkTreeNode')}} 中返回之前可能会改变或是未知的。如果书签的索引与你的扩展相关，则在移动下一个书签之前，扩展应该等待每个 `bookmarks.move` 调用完成。等待确保每个书签关联的索引不会受到在原始调用进行时并发执行移动调用的影响。

## 示例

此示例将一个书签移动到其当前文件夹中的第一个位置。

```js
function onMoved(bookmarkItem) {
  console.log(bookmarkItem.index);
}

function onRejected(error) {
  console.log(`出现错误：${error}`);
}

let bookmarkId = "abcdefghijkl";

let movingBookmark = browser.bookmarks.move(bookmarkId, { index: 0 });
movingBookmark.then(onMoved, onRejected);
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.bookmarks`](https://developer.chrome.google.cn/docs/extensions/reference/api/bookmarks#method-move) API。该文档衍生自 Chromium 代码中的 [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json)。

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
