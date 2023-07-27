---
title: tabs.captureVisibleTab()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/captureVisibleTab
---

{{AddonSidebar()}}

指定ウィンドウの選択タブの表示領域の画像をエンコードしたデータ URI を作成します。このメソッドを使うには `<all_urls>` [パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) が必要です (Chrome の場合、`activeTab` [パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) があり、ユーザーが許可の操作を行えば、このメソッドを使うことができます)。

これは、[`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返す非同期関数です。

## 構文

```js
var capturing = browser.tabs.captureVisibleTab(
  windowId, // optional integer
  options, // optional extensionTypes.ImageDetails
);
```

### 引数

- `windowId`{{optional_inline}}
  - : `integer` 型。対象となるウィンドウ。デフォルトは現在のウィンドウ。
- `options`{{optional_inline}}
  - : {{WebExtAPIRef('extensionTypes.ImageDetails')}} 型。

### 戻り値

[`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) であり、キャプチャーされたタブの表示領域の画像をエンコードしたデータ URL で fulfilled 状態にされる。このデータ URL は、HTML イメージ要素の 'src' 属性に設定することで、画像を表示できる。もし何らかのエラーが発生した場合、Promise はエラーメッセージによって rejected 状態にされる。

## 使用例

現在のウィンドウの選択されたタブの画像を、デフォルト設定でキャプチャーする。

```js
function onCaptured(imageUri) {
  console.log(imageUri);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.browserAction.onClicked.addListener(function () {
  var capturing = browser.tabs.captureVisibleTab();
  capturing.then(onCaptured, onError);
});
```

{{WebExtExamples}}

## ブラウザーの互換性

{{Compat("webextensions.api.tabs.captureVisibleTab")}}

> **メモ:** この API は Chromium の [`chrome.tabs`](https://developer.chrome.com/extensions/tabs#method-captureVisibleTab) API に基づいています。このドキュメントは [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) における Chromium のコードに基づいています。Microsoft Edge での実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従っています。

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
