---
title: bookmarks.onImportBegan
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/onImportBegan
---

{{AddonSidebar}}

ブックマークのインポートが開始した際に発火します。

ブックマークをインポートしている間、{{WebExtAPIRef("bookmarks.onCreated", "onCreated")}} が何度も発火する場合があります。`onCreated` に紐づけるリスナ関数の処理が重い場合には、`onImportBegan` と {{WebExtAPIRef("bookmarks.onImportEnded", "onImportEnded")}} をリッスンし、`onImportEnded` が発火するまでは `onCreated` を無視してください。他のイベントは通常通り処理できます。

## 構文

```js
browser.bookmarks.onImportBegan.addListener(function() {...})
browser.bookmarks.onImportBegan.removeListener(listener)
browser.bookmarks.onImportBegan.hasListener(listener)
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
  - : イベントが発火した際に呼び出される関数を指定します。この関数に渡される引数はありません。

## ブラウザーの互換性

{{Compat}}

## 使用例

```js
function handleImportBegan() {
  console.log("Importing...");
}

function handleImportEnded() {
  console.log("...finished.");
}

function handleClick() {
  chrome.bookmarks.onImportBegan.addListener(handleImportBegan);
  chrome.bookmarks.onImportEnded.addListener(handleImportEnded);
}

chrome.browserAction.onClicked.addListener(handleClick);
```

{{WebExtExamples}}

> [!NOTE]
> この API は Chromium の [`chrome.bookmarks`](https://developer.chrome.com/docs/extensions/reference/api/bookmarks#method-update) API に基づいています。また、このドキュメントは [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) における Chromium のコードから作成されています。Microsoft Edge の実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License. に従います。

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
