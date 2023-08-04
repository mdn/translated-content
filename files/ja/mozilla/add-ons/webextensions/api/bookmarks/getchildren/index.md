---
title: bookmarks.getChildren()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/getChildren
---

{{AddonSidebar()}}

**`bookmarks.getChildren()`** は、ブックマークフォルダの ID を {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} で指定し、その直下にあたる子要素をすべて取得します。

## 構文

```js
browser.bookmarks.getChildren(
  id, // 文字列
  callback, // 関数
);
```

### Parameters

- `id`
  - : 取得したい子要素を持つフォルダ ID を指定する {{jsxref("string")}} です。
- `callback`

  - : 子ノードのリストが取得された際に実行される関数です。この関数には以下の引数が渡ります。

    - `results`
      - : 各要素が 1 つの子ノードを表す、{{WebExtAPIRef('bookmarks.BookmarkTreeNode')}} の {{jsxref("array")}} です。要素の順序は、UI に表示されているのと同じ順番です。現在、セパレータの有無は結果に含まれません。指定したノードに子要素が含まれていなかった場合、`results` は空配列となります。

## ブラウザーの互換性

{{Compat("webextensions.api.bookmarks.getChildren")}}

## 使用例

### 基本的な使い方

```js
function gotChildren(children) {
  console.log(children);
}

chrome.bookmarks.getChildren(bookmarkItemId, gotChildren);
```

### 指定したフォルダでブックマークを切替

以下の例は、フォルダを {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} で指定し、そのフォルダに新しいブックマークを作成するものです。ただし、既に同じ名前のブックマークがあった場合は、逆に既存のブックマークを削除することとします。このとき新しいブックマークは作成されません。

```js
function toggleBookmark(folderNode, title, url) {
  chrome.bookmarks.getChildren(folderNode.id, function (results) {
    let node = results.find(function (el) {
      return el.title === title;
    });

    // ブックマークが存在する場合は削除する
    // そうでなければ新しく作成する

    if (node !== undefined) {
      chrome.bookmarks.remove(node.id);
    } else {
      chrome.bookmarks.create({
        parentId: folderNode.id,
        title: title,
        url: url,
      });
    }
  });
}
```

先の `toggleBookmark()` 関数は、`folderNode` で指定した {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} の中に既に存在しているすべてのブックマークのリストを取得するため、最初に `bookmarks.getChildren()` を呼び出しています。

コールバックに指定された匿名関数には `results` という引数が 1 つ渡されます。この引数は、フォルダの直下にある子要素をすべて含んだ配列です。まず初めに、与えられたタイトルを持つノードがフォルダに存在するかどうかを調べます。ここでは {{jsxref("Array.find()")}} メソッドを使い、タイトルが等しいかどうかをコールバック内で判定しています。

マッチするノードがあった場合（すなわち、`node` が `undefined` ではない場合）、指定した `title` を持つブックマークが既に存在していたことが分かったので、既存のブックマークを削除するために {{WebExtAPIRef("bookmarks.remove()")}} を呼び出します。

そうではなかった場合、新しいブックマークを作成するために {{WebExtAPIRef("bookmarks.create()")}} が呼び出します。この際、引数 `folderNode` で与えられていたフォルダ ID を新しい親フォルダの ID に指定し、合わせて `title` と `url` も指定します。

> **メモ:** この API は Chromium の [`chrome.bookmarks`](https://developer.chrome.com/extensions/bookmarks#method-getChildren) API に基づいています。また、このドキュメントは [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) における Chromium のコードから作成されています。Microsoft Edge の実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従います。

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
