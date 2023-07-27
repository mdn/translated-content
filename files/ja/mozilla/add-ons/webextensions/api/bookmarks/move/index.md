---
title: bookmarks.move()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/move
---

{{AddonSidebar()}}

**`bookmarks.move()`** は、指定した {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} をブックマークツリー内の所望の位置に移すメソッドです。このメソッドにより、ブックマークを新しいフォルダの中や、同じフォルダ内の別の場所に移動させることができます。

## 構文

```js
browser.bookmarks.move(
  id, // 文字列
  destination, // オブジェクト
  callback, // 関数（省略可）
);
```

### 引数

- `id`
  - : 移動させるブックマーク / フォルダの ID を表す {{jsxref("string")}} です。
- `destination`

  - : ブックマークの移動先を表す {{jsxref("object")}} です。このオブジェクトには以下のプロパティが必ず 1 つ以上含まれます。

    - `parentId` {{optional_inline}}
      - : 移動先フォルダの ID を指定する {{jsxref("string")}} です。この値が省略された場合、現在と同じフォルダ内の新しい場所へ移動されます。
    - `index` {{optional_inline}}
      - : 移動先フォルダ内における位置を指定する 0 起点のインデックスです。値が 0 の場合、そのフォルダの先頭に移動されます。値が省略された場合、新しい親フォルダ内の最後に移動されます。

- `callback` {{optional_inline}}

  - : 移動が終了した際に呼び出される {{jsxref("function")}} です。この関数は以下の引数を 1 つ受け取ります。

    - `result`
      - : 移動された新しいノードを表す {{WebExtAPIRef('bookmarks.BookmarkTreeNode', 'BookmarkTreeNode')}}

## ブラウザーの互換性

{{Compat("webextensions.api.bookmarks.move")}}

## 使用例

### ブックマークを現在のフォルダの先頭へ移動

次の例は、既存のブックマークを現在のフォルダの先頭へ移動させるものです。移動後に必要な処理は特にないため、ここではコールバック無しで呼び出しています。

```js
browser.bookmarks.move(bookmarkID, { index: 0 });
```

### ブックマークを異なるフォルダへ移動

以下の例は、ID で指定したブックマークを、別の ID で指定したフォルダへ移動させる関数です。今回は、移動後に実行されるコールバック関数も指定しています。

```js
function moveToFolder(bookmarkId, destinationId) {
  browser.bookmarks.move(
    bookmarkId,
    { parentId: destinationId },
    function (updatedNode) {
      /* ブックマークの移動後に行う処理 */
    },
  );
}
```

{{WebExtExamples}}

> **メモ:** この API は Chromium `の`[`chrome.bookmarks`](https://developer.chrome.com/extensions/bookmarks#method-move) API に基づいています。また、このドキュメント は [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) における Chromium のコードから作成されています。Microsoft Edge の実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従います。

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
