---
title: bookmarks.search()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/search
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

**`bookmarks.search()`** 函数用于搜索与给定查询匹配的书签树节点。

如果任何输入参数无效或不是适当的类型，则此函数会引发异常；请查看[控制台](https://extensionworkshop.com/documentation/develop/debugging/)获取错误消息。异常没有错误 ID，并且消息本身可能会更改，因此不要编写试图解释它们的代码。

这是一个返回 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 的异步函数。

## 语法

```js-nolint
let searching = browser.bookmarks.search(
  query                  // string 或 object
)
```

### 参数

- `query`
  - : 描述要执行的查询的 {{jsxref("string")}} 或 {{jsxref("object")}}。

    如果 `query` 是一个**字符串**，它由零个或多个以空格分隔的搜索项组成。如果搜索项是书签的 URL 或标题的子字符串，则匹配。匹配不区分大小写。要使书签与查询匹配，必须匹配查询的所有搜索条件。

    如果 `query` 是一个**对象**，它由三个属性中的零个或多个组成：`query`、`title` 和 `url`，描述如下。要使书签与查询匹配，必须匹配所有属性的项。
    - query {{optional_inline}}
      - : 一个 {{jsxref("string")}}，指定要与之匹配的一个或多个项；其格式与 `query` 参数的字符串形式相同。如果这不是一个字符串，则会引发异常。

    - `url` {{optional_inline}}
      - : 一个 {{jsxref("string")}}，必须与书签的 URL 完全匹配。匹配不区分大小写，尾部斜杠会被忽略。

        如果传递了无效的 URL，则函数会引发异常。

    - `title` {{optional_inline}}
      - : 一个 {{jsxref("string")}}，必须与书签树节点的标题完全匹配。匹配区分大小写。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，其会兑现 {{WebExtAPIRef('bookmarks.BookmarkTreeNode')}} 对象数组，每个对象代表一个匹配的书签树节点。结果按节点创建的顺序返回。如果未找到结果，则数组为空。

即使是 `"folder"` 类型的节点，由 `bookmarks.search()` 返回的 [`BookmarkTreeNodes`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode) 缺少 `children` 属性。要获取完整的 `BookmarkTreeNode`，请使用 [`bookmarks.getSubTree()`](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/getSubTree)。

## 示例

这个示例记录所有书签的 ID：

```js
function onFulfilled(bookmarkItems) {
  for (const item of bookmarkItems) {
    console.log(item.id);
  }
}

function onRejected(error) {
  console.log(`出现错误：${error}`);
}

browser.bookmarks.search({}).then(onFulfilled, onRejected);
```

这个示例查看当前活动选项卡是否已收藏：

```js
function onFulfilled(bookmarkItems) {
  if (bookmarkItems.length) {
    console.log("活动选项卡已收藏");
  } else {
    console.log("活动选项卡未收藏");
  }
}

function onRejected(error) {
  console.log(`出现错误：${error}`);
}

function checkActiveTab(tab) {
  browser.bookmarks.search({ url: tab.url }).then(onFulfilled, onRejected);
}

browser.browserAction.onClicked.addListener(checkActiveTab);
```

{{WebExtExamples}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.bookmarks`](https://developer.chrome.google.cn/docs/extensions/reference/api/bookmarks#method-search) API。该文档衍生自 Chromium 代码中的 [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json)。

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
