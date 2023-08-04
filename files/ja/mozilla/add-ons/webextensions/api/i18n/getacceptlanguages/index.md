---
title: i18n.getAcceptLanguages()
slug: Mozilla/Add-ons/WebExtensions/API/i18n/getAcceptLanguages
---

{{AddonSidebar()}}

ブラウザーの [accept-languages](/ja/docs/Web/HTTP/Content_negotiation#The_Accept-Language_header) を取得します。これは、ブラウザーに使用されているロケールとは異なります。ロケールを取得するには、{{WebExtAPIRef('i18n.getUILanguage')}} を使用してください。

これは、[`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返す非同期関数です。

## 構文

```js
var gettingAcceptLanguages = browser.i18n.getAcceptLanguages();
```

### 引数

なし。

### 戻り値

`{{WebExtAPIRef('i18n.LanguageCode')}}` オブジェクトの `配列` で処理が完了した [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise)。

## ブラウザーの互換性

{{Compat("webextensions.api.i18n.getAcceptLanguages")}}

## 例

```js
function onGot(languages) {
  console.log(languages);
  //e.g. Array [ "en-US", "en" ]
}

var gettingAcceptLanguages = browser.i18n.getAcceptLanguages();
gettingAcceptLanguages.then(onGot);
```

{{WebExtExamples}}

> **メモ:** この API は、Chromium の [`chrome.i18n`](https://developer.chrome.com/extensions/i18n#method-getAcceptLanguages) API を基にしています。このドキュメンテーションは、Chromium コード内の [`i18n.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/i18n.json) に由来しています。Microsoft Edge 互換性データは、Microsoft Corporation より供給され、Creative Commons Attribution 3.0 United States License の下で含まれています。

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
