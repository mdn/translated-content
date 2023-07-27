---
title: browserAction.onClicked
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/onClicked
---

{{AddonSidebar()}}

ブラウザアクションアイコンがクリックされたときに発火します。このイベントはブラウザアクションがポップアップを持っているときは発火しません。

右クリックを定義するには、[`contextMenus`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/contextMenus) API の"browser_action" [context type](/ja/docs/Mozilla/Add-ons/WebExtensions/API/contextMenus/ContextType)を利用してください。

## 書式

```js
browser.browserAction.onClicked.addListener(listener);
browser.browserAction.onClicked.removeListener(listener);
browser.browserAction.onClicked.hasListener(listener);
```

イベントは３つの関数を持っています:

- `addListener(listener)`
  - : このイベントのリスナーを追加します。
- `removeListener(listener)`
  - : このイベントのリスニングを停止します。引数`listener`は削除するリスナーです。
- `hasListener(listener)`
  - : `listener`がこのイベントに登録されているかどうかを調べます。`true`が返ればリスニング中です。`false`が返ればそうれはありません。

## addListener の書式

### パラメータ

- `callback`

  - : イベントが発生したときに呼び出される関数です。関数は以下の引数を渡されます:

    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. アイコンがクリックされたときにアクティブなタブです。

## ブラウザーの互換性

{{Compat("webextensions.api.browserAction.onClicked")}}

## 例

ユーザがアイコンをクリックすると、アクティブなタブではアイコンを無効にし、タブの URL をログします:

```js
browser.browserAction.onClicked.addListener((tab) => {
  // disable the active tab
  browser.browserAction.disable(tab.id);
  // requires the "tabs" or "activeTab" permission
  console.log(tab.url);
});
```

{{WebExtExamples}}

> **メモ:** この API は Chromium の[`chrome.browserAction`](https://developer.chrome.com/extensions/browserAction#event-onClicked) API に基づいています。このドキュメントは Chromium コードの[`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json)から派生したものです。Microsoft Edge の互換性データは Microsoft Corporation から提供されており、Creative Commons Attribution 3.0 United States License のもとにここに含まれています。

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
