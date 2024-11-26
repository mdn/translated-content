---
title: bookmarks.onChanged
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/onChanged
---

{{AddonSidebar}}

以下の変更に対して発火します。

- ブックマークのタイトルまたは URL
- フォルダーの名前

## 構文

```js
browser.bookmarks.onChanged.addListener(function(
  id,        // 文字列
  changeInfo // オブジェクト
) {...})
browser.bookmarks.onChanged.removeListener(listener)
browser.bookmarks.onChanged.hasListener(listener)
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
      - : 変更を受けた要素の ID を表す {{jsxref("string")}}

    <!---->

    - `changeInfo`
      - : 変更に関する詳細を含んだ {{jsxref("object")}}

## 付随するオブジェクト

### changeInfo

- `title`
  - : 変更された要素のタイトルを表す {{jsxref("string")}}
- `url`{{optional_inline}}
  - : 変更された要素の URL を表す {{jsxref("string")}}。要素がフォルダーだった場合に値は入りません。

## ブラウザーの互換性

{{Compat}}

## 使用例

```js
function handleChanged(id, changeInfo) {
  console.log("Item: " + id + " changed");
  console.log("Title: " + changeInfo.title);
  console.log("Url: " + changeInfo.url);
}

function handleClick() {
  chrome.bookmarks.onChanged.addListener(handleChanged);
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
