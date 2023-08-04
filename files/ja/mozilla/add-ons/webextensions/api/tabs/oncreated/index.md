---
title: tabs.onCreated
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onCreated
---

{{AddonSidebar()}}

タブが生成されたときに発火します。

イベントが発火したとき、タブは URL を渡されていないかもしれないことに注意してください。特に、Firefox は新しいページを読み込み前に新しいタブを"about:blank"で開きます。URL がセットされたときを通知されるために{{WebExtAPIRef("tabs.onUpdated")}}イベントをリッスンすることができます。

## 書式

```js
browser.tabs.onCreated.addListener(callback);
browser.tabs.onCreated.removeListener(listener);
browser.tabs.onCreated.hasListener(listener);
```

イベントは３つの関数を持ちます:

- `addListener(callback)`
  - : このイベントにリスナーを追加します。
- `removeListener(listener)`
  - : このイベントのリスニングを停止します。引数`listener`は削除するリスナーです。
- `hasListener(listener)`
  - : `listener`がこのイベントに登録されているかを調べます。リスニング中であれば`true`を返し、そうでなければ`false`を返します

## addListener の書式

### パラメータ

- `callback`

  - : このイベントが発生したときに呼び出される関数です。関数は次の引数を渡されます:

    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}。生成されたタブの詳細です。

## 例

新しく作られたタブのログを生成します:

```js
function handleCreated(tab) {
  console.log(tab.id);
}

browser.tabs.onCreated.addListener(handleCreated);
```

{{WebExtExamples}}

## ブラウザーの互換性

{{Compat("webextensions.api.tabs.onCreated")}}

> **メモ:** この API は Chromium の[`chrome.tabs`](https://developer.chrome.com/extensions/tabs#event-onCreated) API に基づいています。このドキュメンテーションは Chromium code の中の[`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json)からの派生です。Microsoft Edge の互換性データは Microsoft Corporation から提供されており、ここに the Creative Commons Attribution 3.0 United States License のもとで含まれています。

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
