---
title: tabs.create()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/create
---

{{AddonSidebar()}}

新しいタブを作ります。

これは[`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise)を返す非同期関数です.

## 構文

```js
var creating = browser.tabs.create(
  createProperties, // object
);
```

### パラメータ

- `createProperties`

  - : 新しいタブについてのプロパティを与える`オブジェクト`。これらのプロパティについて詳しくは{{WebExtAPIRef("tabs.Tab")}}を参照してください。

    - `active`{{optional_inline}}
      - : タブをアクティブにするかどうかを`真理値`で指定します。ウィンドウがフォーカスされているかには影響されません({{WebExtAPIRef('windows.update')}}も参照)。デフォルト値は`true`.
    - `cookieStoreId` {{optional_inline}}
      - : `文字列` 。タブの cookie store ID が`cookieStoreId`のタブを作るときに使用します。このオプションは拡張機能が`"cookies"` [permission](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)を持つときのみ使用できます。
    - `index`{{optional_inline}}
      - : `整数値`。ウィンドウ中のタブの位置を指定します。数値はゼロからウィンドウ内のタブの数までです。
    - `openerTabId`{{optional_inline}}
      - : `整数値`。開くタブの ID を指定します。指定した場合、開く側のタブは新しいタブと同じウィンドウにある必要があります。
    - `openInReaderMode`{{optional_inline}}
      - : `真理値`。もし`true`であれば[リーダーモード](/ja/Add-ons/WebExtensions/API/tabs/toggleReaderMode)で開かれます。 デフォルトは`false`。
    - `pinned`{{optional_inline}}
      - : `真理値`。タブをピン留めするかを指定します。デフォルトは`false`。
    - `selected`{{optional_inline}}

      - : `真理値`。ウィンドウ内で選択されるかどうかを指定します。デフォルトは`true`。

        > **警告:** このプロパティは非推奨です。Firefox ではサポートされません。代わりに`active`を使用してください。

    - `url`{{optional_inline}}

      - : `文字列`。はじめに開く URL を指定します。デフォルトは新しいタブ。
        スキームを含む完全な URL を指定します。(例えば 'www\.google.com' → 'http\://www\.google.com').
        セキュリティの観点から Firefox では特権 URL は使用できません。

        - chrome: URL
        - javascript: URL
        - data: URL
        - file: URL(ファイルシステム上のファイルなど。拡張機能内にパッケージ化されたファイルは指定できます。下部を参照してください)
        - 特権 about: URL (例、 `about:config`, `about:addons`, `about:debugging`)。ただし非特権 URL (`about:blank`) は使用できます。
        - 新しいタブ (`about:newtab`) は URL を指定しなければ開かれます。

        拡張機能内のファイルをロードするためには manifest.json ファイルからの絶対パスで指定します。（例: '/path/to/my-page.html'）。もし'/'を省略すると相対パスとして解釈されます。またブラウザによっては、また異なった絶対パスとして解釈されます。

    - `windowId`{{optional_inline}}
      - : `整数値`。新しくタブを作るウィンドウを指定します。デフォルトは現在開いているウィンドウ。

### 返り値

新しく作ったタブに関する{{WebExtAPIRef('tabs.Tab')}}オブジェクトを引数に持つ[`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise)が返されます。URL が特権 URL であるなどして、タブが作られなかった場合は promise はエラーメッセージとともに reject されます。

## ブラウザー互換状況

{{Compat("webextensions.api.tabs.create", 10)}}

## 例

"https\://example.org" を新しいタブで開きます

```js
function onCreated(tab) {
  console.log(`Created new tab: ${tab.id}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener(function () {
  var creating = browser.tabs.create({
    url: "https://example.org",
  });
  creating.then(onCreated, onError);
});
```

{{WebExtExamples}}

> **メモ:** この API は Chromium の[`chrome.tabs`](https://developer.chrome.com/extensions/tabs#method-create) API に基づいています。 このドキュメントは [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) における Chromium のコードに基づいています。Microsoft Edge での実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従っています。

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
