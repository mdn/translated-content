---
title: bookmarks.onRemoved
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/onRemoved
---

{{AddonSidebar}}

ブックマークやフォルダーが削除された際に発火します。フォルダーが再帰的に削除された場合は、そのフォルダーに対して 1 回だけ発火し、そのフォルダーの中身に関しては発火しません。

## 構文

```js
browser.bookmarks.onRemoved.addListener(function(
  id,        // 文字列
  removeInfo // オブジェクト
) {...})
browser.bookmarks.onRemoved.removeListener(listener)
browser.bookmarks.onRemoved.hasListener(listener)
```

このイベントには 3 つのメソッドが用意されています。

- `addListener(callback)`
  - : イベントリスナを追加します。
- `removeListener(listener)`
  - : イベントリスナを削除します。引数 `listener` には削除したいリスナを指定します。
- `hasListener(listener)`
  - : `listener` がイベントリスナとして登録されているか確認します。登録されていれば `true` を、それ以外の場合は `false` を返します。

## addListener の構文

### 引数

- `callback`

  - : イベントが発火した際に呼び出される関数を指定します。この関数には以下の引数が渡ります。

    - `id`
      - : 削除された要素の ID を表す {{jsxref("string")}}

    <!---->

    - `removeInfo`
      - : 削除された要素の詳細を含んだ {{jsxref("object")}}

## 付随するオブジェクト

### removeInfo

- `parentId`
  - : 要素の親の ID を表す {{jsxref("string")}}
- `index`
  - : この要素が親からみて何番目にあるかを表す 0 以上の整数
- `node`
  - : 削除された要素に関する詳細を含む {{WebExtAPIRef('bookmarks.BookmarkTreeNode')}}

## ブラウザーの互換性

{{Compat}}

## 例

```js
function handleRemoved(id, removeInfo) {
  console.log("Item: " + id + " removed");
  console.log("Title: " + removeInfo.node.title);
  console.log("Url: " + removeInfo.node.url);
}

function handleClick() {
  chrome.bookmarks.onRemoved.addListener(handleRemoved);
}

chrome.browserAction.onClicked.addListener(handleClick);
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
