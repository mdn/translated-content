---
title: bookmarks.BookmarkTreeNodeUnmodifiable
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNodeUnmodifiable
---

{{AddonSidebar}}

**`bookmarks.BookmarkTreeNodeUnmodifiable`** 型は、ブックマークツリー上のノード（ブックマーク / フォルダー）が変更不可な理由を表すものです。この型は、ブックマークノードの {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "bookmarks.BookmarkTreeNode.unmodifiable", "unmodifiable")}} プロパティで使用されます。

## 値の型

この値は {{jsxref("string")}} 型であり、現在取りうる値は `"managed"` のみです。すなわち、システム管理者（ペアレンタルコントロールが有効な場合は保護者）がこのブックマークノードを設定したことを意味します。

## ブラウザーの互換性

{{Compat}}

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
