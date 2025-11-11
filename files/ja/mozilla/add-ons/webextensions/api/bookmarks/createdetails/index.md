---
title: bookmarks.CreateDetails
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/CreateDetails
---

{{AddonSidebar}}

`CreateDetails` 型は、新しいブックマークやフォルダーのプロパティを表すためのオブジェクト型です。{{WebExtAPIRef("bookmarks.create()")}} メソッドの呼び出し時に渡します。

> [!NOTE]
> 現在、ブックマークリストのセパレータをこのオブジェクト型で表すことはできません。

## 値の型

以下のプロパティを含む {{jsxref("object")}} です。

- `parentId`{{optional_inline}}
  - : 新しいブックマーク / フォルダーの親フォルダーを指定する {{jsxref("string")}} です。デフォルト値はブラウザーによって異なり、Chrome の場合は「その他のブックマーク」、Firefox の場合は「未分類のブックマーク」です。
- `index`{{optional_inline}}
  - : 親要素の配下における、新しいブックマーク / フォルダーの位置を指定する {{jsxref("number")}} です。値が 0 の場合、リストの先頭に置かれます。
- `title`{{optional_inline}}
  - : `作成する`ブックマークのタイトルやフォルダーの名前を指定する {{jsxref("string")}} です。値を省略した場合、タイトルは `""` になります。
- `url`{{optional_inline}}
  - : ブックマークの URL を指定する {{jsxref("string")}} です。値を省略するか `null` を指定した場合、ブックマークではなくフォルダーが作成されます。

## ブラウザーの互換性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> この API は Chromium の [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#method-update) API に基づいています。また、このドキュメントは [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) における Chromium のコードから作成されています。

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
