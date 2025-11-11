---
title: bookmarks.BookmarkTreeNode
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNode
---

{{AddonSidebar}}

`bookmarks.BookmarkTreeNode` 型のオブジェクトは、ブックマークツリー上のノード（ブックマーク / フォルダー）を表現するものです。子ノードは親フォルダーの中で `index` に従って順序付けされます。

## 値の型

以下のプロパティを含む {{jsxref("object")}} です。

- `id`
  - : そのノードを一意に識別する {{jsxref("string")}} です。この ID はユーザーのプロファイル内で固有であり、ブラウザーを再起動した後も有効です。
- `parentId` {{optional_inline}}
  - : 親フォルダーの ID を表す {{jsxref("string")}} です。ルートノードの場合は省略されます。
- `index` {{optional_inline}}
  - : 親フォルダーの中におけるノードの位置を表す 0 以上の {{jsxref("number")}} です。0 は先頭の要素を意味します。
- `url` {{optional_inline}}
  - : ブックマークの URL を表す {{jsxref("string")}} です。フォルダーの場合は省略されます。
- `title`
  - : ブックマークリストやメニューにノードが表示される際のテキストを表す {{jsxref("string")}} です。
- `dateAdded` {{optional_inline}}
  - : このノードが生成された時刻を [1970 年 1 月 1 日からの経過ミリ秒](https://ja.wikipedia.org/wiki/UNIX%E6%99%82%E9%96%93) で表す {{jsxref("number")}} です。
- `dateGroupModified` {{optional_inline}}
  - : その内容の最終変更時刻を [1970 年 1 月 1 日からの経過ミリ秒](https://ja.wikipedia.org/wiki/UNIX%E6%99%82%E9%96%93) で表す {{jsxref("number")}} です。
- `unmodifiable` {{optional_inline}}
  - : {{WebExtAPIRef('bookmarks.BookmarkTreeNodeUnmodifiable')}} 型で表現される {{jsxref("string")}} です。このノードが変更不可である理由を表します。変更可能な場合には省略されます。
- `children` {{optional_inline}}
  - : 各要素がノードの子要素を表す、{{WebExtAPIRef('bookmarks.BookmarkTreeNode')}} の {{jsxref("array")}} です。リストの要素は UI に表示されているのと同じ順序で並びます。フォルダー以外の場合は省略されます。

> [!NOTE]
> 現在、ブックマークリストのセパレータをこのオブジェクトで表すことはできません。

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
