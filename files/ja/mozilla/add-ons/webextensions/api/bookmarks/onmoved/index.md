---
title: bookmarks.onMoved
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/onMoved
---

{{AddonSidebar}}

ブックマークやフォルダーが、異なる親フォルダーやフォルダー内の別の場所へ移された際に発火します。

## 構文

```js
browser.bookmarks.onMoved.addListener(function(
  id,      // 文字列
  moveInfo // オブジェクト
) {...})
browser.bookmarks.onMoved.removeListener(listener)
browser.bookmarks.onMoved.hasListener(listener)
```

このイベントには 3 つのメソッドが用意されています。

- `addListener(callback)`
  - : イベントリスナーを追加します。
- `removeListener(listener)`
  - : イベントリスナーを削除します。引数 `listener` には削除したいリスナーを指定します。
- `hasListener(listener)`
  - : `listener` がイベントリスナーとして登録されているか確認します。登録されていれば `true` を、それ以外の場合は `false` を返します。

## addListener の構文

### 引数

- `callback`
  - : イベントが発火した際に呼び出される関数を指定します。この関数には以下の引数が渡ります。
    - `id`
      - : 移動した要素の ID を表す {{jsxref("string")}} です。

    <!---->
    - `moveInfo`
      - : 移動に関する詳細を含んだ {{jsxref("object")}} です。

## 付随するオブジェクト

### moveInfo

- `parentId`
  - : 新しい親フォルダーを表す {{jsxref("string")}}
- `index`
  - : この要素が親から見て何番目にあるかを表す整数
- `oldParentId`
  - : 移動前の親フォルダーを表す {{jsxref("string")}}
- `oldIndex`
  - : `移動前において、`この要素が親から見て何番目にあったかを表す整数

## ブラウザーの互換性

{{Compat}}

## 例

```js
function handleMoved(id, moveInfo) {
  console.log("Item: " + id + " moved");
  console.log("Old index: " + moveInfo.oldIndex);
  console.log("New index: " + moveInfo.index);
  console.log("Old folder: " + moveInfo.oldParentId);
  console.log("New folder: " + moveInfo.parentId);
}

function handleClick() {
  chrome.bookmarks.onMoved.addListener(handleMoved);
}

chrome.browserAction.onClicked.addListener(handleClick);
```

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
