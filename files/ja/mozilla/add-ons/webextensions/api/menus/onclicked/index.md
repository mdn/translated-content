---
title: menus.onClicked
slug: Mozilla/Add-ons/WebExtensions/API/menus/onClicked
---

{{AddonSidebar()}}

メニューアイテムがクリックされたときに発火します。

他のブラウザとの互換性のために Firefox はこのイベントを名前空間`contextMenus`と`menu`を経由して利用可能にしています。

## 書式

```js
browser.menus.onClicked.addListener(listener);
browser.menus.onClicked.removeListener(listener);
browser.menus.onClicked.hasListener(listener);
```

イベントは 3 つの関数を持ちます:

- `addListener(callback)`
  - : このイベントのリスナーを追加します。
- `removeListener(listener)`
  - : リスニングを停止します。引数`listener`は削除するリスナーです。
- `hasListener(listener)`
  - : `listener`が登録されているかどうかを調べます。`true`が返ればリスニング中、そうでなければ`false`が返ります。

## addListener の書式

### パラメータ

- `callback`

  - : イベントが起こったときに呼ばれる関数です。以下の引数を渡されます:

    - `info`
      - : {{WebExtAPIRef('menus.OnClickData')}}. Information about the item clicked and the context where the click happened.

    <!---->

    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. The details of the tab where the click took place. If the click did not take place in or on a tab, this parameter will be missing.

## ブラウザーの互換性

{{Compat("webextensions.api.menus.onClicked", 10)}}

## 例

この例はメニューアイテムのクリックをリッスンし、アイテムの ID とタブの ID をログします:

```js
browser.menus.create({
  id: "click-me",
  title: "Click me!",
  contexts: ["all"],
});

browser.menus.onClicked.addListener((info, tab) => {
  console.log("Item " + info.menuItemId + " clicked " + "in tab " + tab.id);
});
```

{{WebExtExamples}}

> **メモ:** This API is based on Chromium's [`chrome.contextMenus`](https://developer.chrome.com/extensions/contextMenus#event-onClicked) API. This documentation is derived from [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) in the Chromium code.

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
