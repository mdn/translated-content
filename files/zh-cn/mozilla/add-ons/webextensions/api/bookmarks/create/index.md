---
title: bookmarks.create()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/create
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

在指定的 `parentId` 的 {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} 下创建一个书签或文件夹。要创建文件夹，请省略或留空 {{WebExtAPIRef("bookmarks.CreateDetails", "CreateDetails", "url")}} 参数。

> [!WARNING]
> 如果你的扩展尝试在书签树的根节点中创建新书签，则会引发错误：“_The bookmark root cannot be modified_”，并且不会创建该书签。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let createBookmark = browser.bookmarks.create(
  bookmark                  // CreateDetails 对象
)
```

### 参数

- `bookmark`
  - : 一个 {{WebExtAPIRef("bookmarks.CreateDetails")}} 对象。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现一个 {{WebExtAPIRef('bookmarks.BookmarkTreeNode', 'BookmarkTreeNode')}} 对象，该对象描述了新创建的书签节点。

> [!NOTE]
> 如果你创建多个书签，由于此 API 是异步的，因此创建调用可能以任何顺序处理。因此，在 {{WebExtAPIRef('bookmarks.BookmarkTreeNode', 'BookmarkTreeNode')}} 中返回的每个书签的索引值可能会在所有创建调用完成之前发生变化或是未知的。如果书签的索引对你的扩展很重要，那么在创建多个书签时，扩展应等待每个 `bookmarks.create` 调用完成后再创建下一个书签。等待可确保每个书签的索引不受在原始调用正在进行时并发执行的创建调用的影响。

## 示例

此示例创建了一个当前页面的书签，并将其放置在默认文件夹中（Firefox 和 Chrome 中为“其他书签”）。

```js
function onCreated(node) {
  console.log(node);
}

let createBookmark = browser.bookmarks.create({
  title: "bookmarks.create() - MDN",
  url: "https://developer.mozilla.org/Add-ons/WebExtensions/API/bookmarks/create",
});

createBookmark.then(onCreated);
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
