---
title: bookmarks
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks
---

{{AddonSidebar}}

[WebExtensions](/ja/docs/Mozilla/Add-ons/WebExtensions) {{WebExtAPIRef("bookmarks")}} API を利用すると、拡張機能からブラウザーのブックマークシステムにアクセスしたり、操作することができます。ページをブックマークしたり、既存のブックマークを取得したり、ブックマークを編集・削除・整理することが可能です。

この API を使用する際は、拡張機能の [`manifest.json`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json) ファイルで "bookmarks" [パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) を指定する必要があります。

拡張機能ではブックマークツリーのルートノードではブックマークを作成・編集・削除できません。それをしようとすると次のエラーになります: "_The bookmark root cannot be modified_"

## 関連する値の型

- {{WebExtAPIRef("bookmarks.BookmarkTreeNode")}}
  - : ブックマークツリー上のブックマークやフォルダーを表します。
- {{WebExtAPIRef("bookmarks.BookmarkTreeNodeType")}}
  - : ツリー内のノードがブックマークかフォルダーかセパレーターかを表す {{jsxref("string")}} の列挙型です。
- {{WebExtAPIRef("bookmarks.BookmarkTreeNodeUnmodifiable")}}
  - : ブックマークやフォルダーが変更不可である理由を表す {{jsxref("string")}} の列挙型です。
- {{WebExtAPIRef("bookmarks.CreateDetails")}}
  - : 新しいブックマークを作成する際、{{WebExtAPIRef("bookmarks.create()")}} メソッドに渡す情報を含みます。

## 関数

- {{WebExtAPIRef("bookmarks.create()")}}
  - : ブックマークやフォルダーを作成します。
- {{WebExtAPIRef("bookmarks.get()")}}
  - : ブックマークの ID や ID の配列を指定し、1 つ以上の {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode(s)")}} を取得します。
- {{WebExtAPIRef("bookmarks.getChildren()")}}
  - : 指定した {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} の子要素を取得します。
- {{WebExtAPIRef("bookmarks.getRecent()")}}
  - : 最近追加されたブックマークを取得します。
- {{WebExtAPIRef("bookmarks.getSubTree()")}}
  - : 指定したノードを起点とする、ブックマークツリーの部分木を取得します。
- {{WebExtAPIRef("bookmarks.getTree()")}}
  - : ブックマークのツリー全体を {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} オブジェクトの配列として取得します。
- {{WebExtAPIRef("bookmarks.move()")}}
  - : 指定した {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNode")}} を所望の場所に移します。
- {{WebExtAPIRef("bookmarks.remove()")}}
  - : ノードの ID を指定し、ブックマークや空のブックマークフォルダーを削除します。
- {{WebExtAPIRef("bookmarks.removeTree()")}}
  - : ブックマークのフォルダーを再帰的に削除します。すなわち、フォルダーノードの ID を指定し、そのノードと子要素すべてを削除します。
- {{WebExtAPIRef("bookmarks.search()")}}
  - : 与えた条件に一致する {{WebExtAPIRef("bookmarks.BookmarkTreeNode", "BookmarkTreeNodes")}} を検索します。
- {{WebExtAPIRef("bookmarks.update()")}}
  - : ブックマークの ID を指定し、ブックマークの URL やタイトル、またはフォルダーの名前を更新します。

## Events

- {{WebExtAPIRef("bookmarks.onCreated")}}
  - : ブックマークやフォルダーが作成された際に発火します。
- {{WebExtAPIRef("bookmarks.onRemoved")}}
  - : ブックマークやフォルダーが削除された際に発火します。フォルダーが再帰的に削除された場合は、そのフォルダーに対して一回だけ発火し、フォルダーの中身については発火しません。
- {{WebExtAPIRef("bookmarks.onChanged")}}
  - : ブックマークやフォルダーが変更された際に発火します。現在は `title` と url の変更に対してのみ発火します。
- {{WebExtAPIRef("bookmarks.onMoved")}}
  - : 異なる親フォルダーへ、または同じフォルダー内の異なる場所へブックマークやフォルダーが移された際に発火します。
- {{WebExtAPIRef("bookmarks.onChildrenReordered")}}
  - : UI で表示されている順序に伴って子フォルダーの順序も変更された際に発火します。{{WebExtAPIRef("bookmarks.move", "move()")}} の実行後には発火しません。
- {{WebExtAPIRef("bookmarks.onImportBegan")}}
  - : ブックマークのインポートが開始した際に発火します。パフォーマンスが重要である場合、イベントのオブザーバーは {{WebExtAPIRef("bookmarks.onImportEnded")}} が発火するまで {{WebExtAPIRef("bookmarks.onCreated")}} を無視すべきでしょう。その場合であっても、オブザーバーは他のイベントについては即座に処理すべきでしょう。
- {{WebExtAPIRef("bookmarks.onImportEnded")}}
  - : ブックマークのインポートが終了した際に発火します。

## ブラウザーの互換性

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> この API は Chromium の [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks) API に基づいています。また、このドキュメントは [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) における Chromium のコードに基づいています。

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
