---
title: bookmarks.search()
slug: Mozilla/Add-ons/WebExtensions/API/bookmarks/search
---

{{AddonSidebar()}}

**`bookmarks.search()`** 関数は、指定したクエリにマッチするブックマークを検索するものです。マッチしたブックマークは、{{WebExtAPIRef('bookmarks.BookmarkTreeNode')}} オブジェクトの配列として、指定されたコールバック関数の引数に渡されます。

入力引数の値や型が不正だった場合、この関数は例外を送出します。エラーメッセージは[コンソール](/ja/Add-ons/WebExtensions/%E3%83%87%E3%83%90%E3%83%83%E3%82%B0)で確認できます。送出された例外はエラー ID を含んでおらず、またメッセージを変更される可能性があるため、これらを解析するようなコードは書かないでください。

## 構文

```js
browser.bookmarks.search(
  query, // 文字列またはオブジェクト
  callback, // 関数
);
```

### 引数

- `query`

  - : 実行するクエリを表す {{jsxref("string")}} または {{jsxref("object")}} です。

    `query` を文字列で指定する場合、`query` は 0 個以上の検索項から構成されます。検索項はスペースで区切りますが、複数語からなる句を検索したい場合は引用符でくくります。それぞれの検索項はブックマークの URL やタイトルの部分文字列にマッチします（大文字・小文字は区別されません）。あるブックマークがクエリにマッチするには、クエリの検索項すべてがマッチしなければなりません。

    `query` をオブジェクトで指定する場合、以下の 3 つのプロパティのうち 0 個以上を指定することになります。あるブックマークがクエリにマッチするには、指定されたプロパティすべてにおいてマッチしなければなりません。

    - `query`{{optional_inline}}
      - : 1 つ以上の検索項を含んだ {{jsxref("string")}} を指定します。このフォーマットは `query` 引数における文字列のフォーマットと同じです。このプロパティ値が {{jsxref("string")}} でなかった場合、 例外が送出されます。
    - `url`{{optional_inline}}

      - : ブックマークの URL と完全一致しなければならない {{jsxref("string")}} `を指定します。`マッチの際に大文字・小文字は区別されず、また末尾のスラッシュも無視されます。

        無効な URL を指定した場合、例外が送出されます。

    - `title`{{optional_inline}}
      - : ブックマークのタイトルと完全一致しなければならない {{jsxref("string")}} `を指定します。`マッチの際には大文字・小文字が区別されます。

- `callback`

  - : クエリの結果が得られた場合に呼び出される関数を指定します。この関数には以下の引数が渡ります。

    - `results`
      - : {{WebExtAPIRef('bookmarks.BookmarkTreeNode')}} オブジェクトの配列であり、各要素はマッチしたブックマークをそれぞれ表しています。何も見つからなかった場合は空の配列となります。

## ブラウザーの互換性

{{Compat("webextensions.api.bookmarks.search")}}

## 使用例

以下の例は、ブックマークすべての ID を出力するものです。

```js
function onGot(bookmarkItems) {
  for (item of bookmarkItems) {
    console.log(item.id);
  }
}

chrome.bookmarks.search({}, onGot);
```

以下の例は、その時にアクティブなタブがブックマークされているかどうかを確認するものです。

```js
function onGot(bookmarkItems) {
  if (bookmarkItems.length) {
    console.log("active tab is bookmarked");
  } else {
    console.log("active tab is not bookmarked");
  }
}

function checkActiveTab(tab) {
  chrome.bookmarks.search({ url: tab.url }, onGot);
}

chrome.browserAction.onClicked.addListener(checkActiveTab);
```

{{WebExtExamples}}

> **メモ:** この API は Chromium の [`chrome.bookmarks`](https://developer.chrome.com/extensions/bookmarks#method-search) API に基づいています。また、このドキュメントは [`bookmarks.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/bookmarks.json) における Chromium のコードから作成されています。Microsoft Edge の実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従います。

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
