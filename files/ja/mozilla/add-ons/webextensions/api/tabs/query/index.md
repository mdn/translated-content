---
title: tabs.query()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/query
---

{{AddonSidebar()}}

指定されたプロパティを持つ全てのタブを取得します。何も指定しない場合、全てのタブを取得します。

この関数は [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返す非同期関数です。

## 構文

```js
var querying = browser.tabs.query(
  queryInfo, // object
);
```

### パラメータ

- `queryInfo`

  - : `object`. `query()` 関数はここで指定されたプロパティにマッチするタブだけを取得します。 このプロパティについての詳細は {{WebExtAPIRef("tabs.Tab")}} を参照してください。

    - `active`{{optional_inline}}
      - : `boolean`. 各ウインドウの中でアクティブかどうか。
    - `audible`{{optional_inline}}
      - : `boolean`. 音が鳴っているか。
    - `autoDiscardable`{{optional_inline}}
      - : `boolean`. リソースが少なくなったときにブラウザーによって自動的に discard できるか。
    - `cookieStoreId` {{optional_inline}}
      - : `string`. Cookie ストアの ID が `cookieStoreId` なタブのみを返すために使います。このオプションは `"cookies"` [permission](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)を持つ拡張でのみ使用できます。
    - `currentWindow`{{optional_inline}}
      - : `boolean`. カレントウインドウの中のタブか。
    - `discarded`{{optional_inline}}
      - : `boolean`. タブが discard されているか。 discard されたタブはコンテンツがメモリからアンロードされているが、タブの一覧には表示されたままになります。コンテンツはタブが次にアクティブになったときにリロードされます。
    - `highlighted`{{optional_inline}}
      - : `boolean`. ハイライトされているか。
    - `index`{{optional_inline}}
      - : `integer`. ウィンドウの中での位置。
    - `muted`{{optional_inline}}
      - : `boolean`. ミュートされているか。
    - `lastFocusedWindow`{{optional_inline}}
      - : `boolean`. 最後にフォーカスされたウインドウのタブか。
    - `openerTabId`{{optional_inline}}
      - : `integer`. そのタブを開いたタブの ID。
    - `pinned`{{optional_inline}}
      - : `boolean`. ピン留めされているか。
    - `status`{{optional_inline}}
      - : {{WebExtAPIRef('tabs.TabStatus')}}. ロードが完了しているか。
    - `title`{{optional_inline}}
      - : `string`. ページのタイトル。
    - `url`{{optional_inline}}
      - : `string` もしくは `array of string`. 1 つ以上の[マッチパターン](/ja/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)にマッチするタブか。フラグメント識別子にはマッチしません。
    - `windowId`{{optional_inline}}
      - : `integer`. そのウインドウの ID。カレントウインドウの場合は、 {{WebExtAPIRef('windows.WINDOW_ID_CURRENT')}} 。
    - `windowType`{{optional_inline}}
      - : {{WebExtAPIRef('tabs.WindowType')}}. そのタブの属するウインドウの種類。

### 戻り値

マッチしたタブの情報を持つ `{{WebExtAPIRef('tabs.Tab')}}` オブジェクトの `array` に解決される [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise)。

エラーが発生した場合、その Promise はエラーメッセージとともに却下されます。

## ブラウザーの互換性

{{Compat("webextensions.api.tabs.query", 10)}}

## 例

全てのタブを取得する例：

```js
function logTabs(tabs) {
  for (let tab of tabs) {
    // tab.url requires the `tabs` permission
    console.log(tab.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var querying = browser.tabs.query({});
querying.then(logTabs, onError);
```

カレントウインドウの全てのタブを取得する例：

```js
function logTabs(tabs) {
  for (let tab of tabs) {
    // tab.url requires the `tabs` permission
    console.log(tab.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var querying = browser.tabs.query({ currentWindow: true });
querying.then(logTabs, onError);
```

カレントウインドウのアクティブなタブを取得する例：

```js
function logTabs(tabs) {
  for (let tab of tabs) {
    // tab.url requires the `tabs` permission
    console.log(tab.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var querying = browser.tabs.query({ currentWindow: true, active: true });
querying.then(logTabs, onError);
```

"mozilla.org" またはそのサブドメイン下の HTTP/HTTPS URL を開いている全てのタブを取得する例：

```js
function logTabs(tabs) {
  for (let tab of tabs) {
    // tab.url requires the `tabs` permission
    console.log(tab.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var querying = browser.tabs.query({ url: "*://*.mozilla.org/*" });
querying.then(logTabs, onError);
```

moz-extension:// URL を開いている全てのタブを取得する例：

```js
function logTabs(tabs) {
  console.log(tabs);
  for (let tab of tabs) {
    // tab.url requires the `tabs` permission
    console.log(tab.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var querying = browser.tabs.query({ url: "moz-extension://*/*" });
querying.then(logTabs, onError);
```

この拡張機能の URL を開いている全てのタブを取得する例：

```js
function logTabs(tabs) {
  console.log(tabs);
  for (let tab of tabs) {
    // tab.url requires the `tabs` permission
    console.log(tab.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var querying = browser.tabs.query({ url: browser.extension.getURL("*") });
querying.then(logTabs, onError);
```

{{WebExtExamples}}

> **メモ:** この API は Chromium の [`chrome.tabs`](https://developer.chrome.com/extensions/tabs#method-duplicate) API に基づいています。 This documentation is derived from [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) in the Chromium code.Microsoft Edge での実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従っています。

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
