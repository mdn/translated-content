---
title: bookmarks.create()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/create
---

{{AddonSidebar()}}

**`bookmarks.create()`** は、`parentId` で指定した {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} の配下に、ブックマークやフォルダを作成するメソッドです。フォルダを作成する場合は、{{WebExtAPIRef("bookmarks.CreateDetails", "CreateDetails", "url")}} の引数を省略するか空にします。

## 構文

```js
browser.bookmarks.create(
  bookmark, // CreateDetails
  callback, // 関数（省略可）
);
```

### 引数

- `bookmark`
  - : {{WebExtAPIRef('bookmarks.CreateDetails')}}
- `callback`{{optional_inline}}

  - : ブックマークが新しく作成された際に呼び出される {{jsxref("function")}} です。この関数は以下の引数を 1 つ受け取ります。

    - `result`
      - : 新しく作成されたブックマークノードを表す {{WebExtAPIRef('bookmarks.BookmarkTreeNode')}}

## ブラウザーの互換性

{{Compat("webextensions.api.bookmarks.create")}}

## 使用例

以下の例は、このページのブックマークをデフォルトのフォルダ（Firefox は「未分類のブックマーク」、Chrome は「その他のブックマーク」）に作成するものです。

```js
function onBookmarkAdded(bookmarkItem) {
  console.log("Bookmark added with ID: " + bookmarkItem.id);
}

chrome.bookmarks.create(
  {
    title: "bookmarks.create() on MDN",
    url: "https://developer.mozilla.org/Add-ons/WebExtensions/API/bookmarks/create",
  },
  onBookmarkAdded,
);
```

{{WebExtExamples}}

> **メモ:** この API は Chromium の [`chrome.bookmarks`](https://developer.chrome.com/extensions/bookmarks#method-create) API に基づいています。また、このドキュメントは [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) における Chromium のコードに基づいています。Microsoft Edge の実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従います。

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
