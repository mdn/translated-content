---
title: bookmarks.get()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/get
---

{{AddonSidebar()}}

**`bookmarks.get()`** は、指定した {{WebExtAPIRef("bookmarks.BookmarkTreeNode")}} の ID（または ID の配列）にマッチするノードを取得するメソッドです。

## 構文

```js
browser.bookmarks.get(
  idOrIdList, // 文字列または文字列の配列
  callback, // 関数
);
```

### 引数

- `idOrIdList`
  - : 取得したい {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} オブジェクトの ID を指定した {{jsxref("string")}} または {{jsxref("string")}} の {\[jsxref("array")}} です。
- `callback`

  - : ノードが取得された際に実行される {{jsxref("function")}} です。この関数には以下の引数が渡ります。

    - `results`
      - : 各要素が {{WebExtAPIRef("bookmarks.BookmarkTreeNode")}} である、マッチしたノードの {{jsxref("array")}} です。セパレータは結果の戻り値に含まれません。ノードが見つからなかった場合の `results` は `undefined` となり、{{WebExtAPIRef("runtime.lastError")}} がセットされます。

## ブラウザーの互換性

{{Compat("webextensions.api.bookmarks.get")}}

## 使用例

以下の例は、特定の ID を持つブックマークが存在するかどうかを確認するものです。

```js
function onGot(bookmarkItems) {
  if (bookmarkItems) {
    console.log("bookmark exists!");
  } else {
    console.log("bookmark does not exist!");
    console.log("lasterror: " + chrome.runtime.lastError);
  }
}

function doesBookmarkExist(bookmarkId) {
  browser.bookmarks.get(bookmarkId, onGot);
}
```

{{WebExtExamples}}

> **メモ:** この API は Chromium の [`chrome.bookmarks`](https://developer.chrome.com/extensions/bookmarks#method-get) API に基づいています。また、このドキュメントは [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) における Chromium のコードに基づいて作成されています。Microsoft Edge の実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従います。

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
