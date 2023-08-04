---
title: browsingData.removeCache()
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/removeCache
---

{{AddonSidebar()}}

ブラウザのキャッシュを消去します。

この関数は{{WebExtAPIRef("browsingData.RemovalOptions")}} オブジェクトを引数に取りますが無視されます。そのためこの関数を使うとすべてのキャッシュが消去されるため注意してください。

この関数は [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返す非同期関数です。

## 構文

```js
var removing = browser.browsingData.removeCache(
  removalOptions, // RemovalOptions オブジェクト
);
```

### 引数

- `removalOptions` {{optional_inline}}
  - : {{WebExtAPIRef("browsingData.RemovalOptions")}} オブジェクト このパラメータは無視されます。

### 返り値

消去が完了した後に実行される [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) が返されます。この Promise は引数を持ちません。エラーが発生した場合はエラーメッセージを引数にして reject を呼び出します。

## ブラウザーの互換性

{{Compat("webextensions.api.browsingData.removeCache")}}

## 例

ブラウザキャッシュを消去します。

```js
function onRemoved() {
  console.log("removed");
}

function onError(error) {
  console.error(error);
}

browser.browsingData.removeCache({}).then(onRemoved, onError);
```

{{WebExtExamples}}

> **メモ:** この API は Chromium の [`chrome.browsingData`](https://developer.chrome.com/extensions/browsingData) API に基づいています。Microsoft Edge の実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従っています。

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
