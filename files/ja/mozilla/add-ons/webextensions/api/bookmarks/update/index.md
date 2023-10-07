---
title: bookmarks.update()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/update
---

{{AddonSidebar()}}

**`bookmarks.update()`** は、ブックマークの URL やタイトル、またはフォルダの名前を更新するメソッドです。

ブックマーク要素が見つからなかった場合には {{WebExtAPIRef("runtime.lastError")}} がセットされるので、エラーの有無をコールバックで確認できます。

## 構文

```js
browser.bookmarks.update(
  id, // 文字列
  changes, // オブジェクト
  callback, // 関数（省略可）
);
```

### 引数

- `id`
  - : 更新したいブックマーク / フォルダの ID を表す {{jsxref("string")}} です。
- `changes`

  - : 適用したい変更内容を表す {{jsxref("object")}} であり、以下のプロパティから構成されます。指定しなかったプロパティについて、ブックマークやフォルダが変更されることはありません。

    - `title`{{optional_inline}}
      - : `id` がフォルダを表す場合、ブックマークの新しいタイトル / フォルダの新しい名前を指定する {{jsxref("string")}} です。
    - `url`{{optional_inline}}
      - : ブックマークの新しい URL を指定する {{jsxref("string")}} です。

- `callback`{{optional_inline}}

  - : 変更が適用された際に実行される関数です。この関数には次の引数が 1 つ渡ります。

    - `result`
      - : 更新されたブックマークを表す{{WebExtAPIRef('bookmarks.BookmarkTreeNode')}} オブジェクトです。

## ブラウザーの互換性

{{Compat("webextensions.api.bookmarks.update")}}

## 使用例

### フォルダのリネーム

以下の例は、"MDN" という名前のフォルダすべてを "MDN" to "Mozilla Developer Network (MDN)" にリネームするものです。

```js
function updateFolders(items) {
  for (item of items) {
    // only folders, so skip items with a `url`
    if (!item.url) {
      chrome.bookmarks.update(item.id, {
        title: "Mozilla Developer Network (MDN)",
      });
    }
  }
}

chrome.bookmarks.search({ title: "MDN" }, updateFolders);
```

{{WebExtExamples}}

> **メモ:** This API is based on Chromium's [`chrome.bookmarks`](https://developer.chrome.com/extensions/bookmarks#method-update) API. This documentation is derived from [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) in the Chromium code.Microsoft Edge の実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従います。

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
