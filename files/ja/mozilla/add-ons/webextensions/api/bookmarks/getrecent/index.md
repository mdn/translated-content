---
title: bookmarks.getRecent()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/getRecent
---

{{AddonSidebar()}}

**`bookmarks.getRecent()`** は、最近に追加されたブックマークを指定した最大個数まで取得し、{{WebExtAPIRef('bookmarks.BookmarkTreeNode', 'BookmarkTreeNode')}} オブジェクトの配列としてコールバック関数に渡します。

## 構文

```js
browser.bookmarks.getRecent(
  numberOfItems, // 整数
  callback, // 関数
);
```

### 引数

- `numberOfItems`
  - : 取得する要素の最大個数を指定する整数です。最近追加された要素のうち、ここで指定した個数までが戻り値のリストに含まれます。
- `callback`

  - : リストが取得された際に実行される関数です。この関数には以下の引数が渡ります。

    - `results`
      - : 各要素が 1 つのブックマークノードを表す {{WebExtAPIRef('bookmarks.BookmarkTreeNode')}} オブジェクトの {{jsxref("array")}}

## ブラウザーの互換性

{{Compat("webextensions.api.bookmarks.getRecent")}}

## 使用例

以下の例は、直近に追加されたブックマークの URL を出力するものです。

```js
function gotMostRecent(bookmarkItems) {
  if (bookmarkItems.length) {
    console.log(bookmarkItems[0].url);
  }
}

chrome.bookmarks.getRecent(1, gotMostRecent);
```

{{WebExtExamples}}

> **メモ:** この API は Chromium の [`chrome.bookmarks`](https://developer.chrome.com/extensions/bookmarks#method-getRecent) API に基づいています。また、このドキュメントは [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) における Chromium のコードに基づいて作成されています。Microsoft Edge の実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従います。

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
