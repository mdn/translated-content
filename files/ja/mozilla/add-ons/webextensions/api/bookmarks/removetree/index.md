---
title: bookmarks.removeTree()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/removeTree
---

{{AddonSidebar}}

**`bookmarks.removeTree()`** は、ブックマークフォルダーやその要素を再帰的に削除するメソッドです。

ブックマークが見つからなかった場合は {{WebExtAPIRef("runtime.lastError")}} がセットされ、エラーの有無はコールバック内で確認できます。

## 構文

```js
browser.bookmarks.removeTree(
  id, // 文字列
  callback, // 関数（省略可）
);
```

### 引数

- `id`
  - : 子要素とともに削除されるフォルダーノードの ID を表す {{jsxref("string")}} です。
- `callback`{{optional_inline}}
  - : ノードが削除された際に実行される関数です。この関数に渡される引数はありません。

## ブラウザーの互換性

{{Compat}}

## 使用例

以下の例は、"MDN" という名前のフォルダーを探し、それ自身とその子要素をすべて削除するものです。

```js
function onRemoved() {
  if (chrome.runtime.lastError) {
    console.log(chrome.runtime.lastError);
  } else {
    console.log("bookmark item removed!");
  }
}

function removeMDN(searchResults) {
  if (searchResults.length) {
    chrome.bookmarks.removeTree(searchResults[0].id, onRemoved);
  }
}

chrome.bookmarks.search({ title: "MDN" }, removeMDN);
```

{{WebExtExamples}}

> [!NOTE]
> この API は Chromium の [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#method-update) API に基づいています。また、このドキュメントは [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) における Chromium のコードから作成されています。Microsoft Edge の実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従います。

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
