---
title: bookmarks.getSubTree()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/getSubTree
---

{{AddonSidebar()}}

**`bookmarks.getSubTree()`** は、ID を指定して {{WebExtAPIRef("bookmarks.BookmarkTreeNode")}} を非同期に取得するメソッドです。

対象がフォルダの場合、`children` プロパティを再帰的にたどることで、すべての子要素にアクセスすることができます。

## 構文

```js
browser.bookmarks.getSubTree(
  id, // 文字列
  callback, // 関数
);
```

### 引数

- `id`
  - : 取得したい部分木のルートノードに対応する ID を表す {{jsxref("string")}} です。
- `callback`

  - : リクエストしたノードが取得された際に呼び出される関数です。この関数には以下の引数が渡ります。

    - `results`
      - : 指定した ID に対応する {{WebExtAPIRef('bookmarks.BookmarkTreeNode')}} オブジェクトが 1 つ含まれた配列

## ブラウザーの互換性

{{Compat("webextensions.api.bookmarks.getSubTree")}}

## 例

以下の例は、指定したノードの配下にある部分木を再帰的に出力するものです。

```js
function makeIndent(indentLength) {
  return ".".repeat(indentLength);
}

function logItems(bookmarkItem, indent) {
  if (bookmarkItem.url) {
    console.log(makeIndent(indent) + bookmarkItem.url);
  } else {
    console.log(makeIndent(indent) + "Folder");
    indent++;
  }
  if (bookmarkItem.children) {
    for (child of bookmarkItem.children) {
      logItems(child, indent);
    }
  }
  indent--;
}

function logSubTree(bookmarkItems) {
  logItems(bookmarkItems[0], 0);
}

function handleClick() {
  var subTreeID = "unfiled_____";
  chrome.bookmarks.getSubTree(subTreeID, logSubTree);
}

chrome.browserAction.onClicked.addListener(handleClick);
```

{{WebExtExamples}}

> **メモ:** この API は Chromium の [`chrome.bookmarks`](https://developer.chrome.com/extensions/bookmarks#method-getSubTree) API に基づいています。また、このドキュメントは [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) における Chromium のコードから作成されています。Microsoft Edge の実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従います。

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
