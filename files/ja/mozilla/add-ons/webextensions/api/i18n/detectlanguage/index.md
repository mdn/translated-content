---
title: i18n.detectLanguage()
slug: Mozilla/Add-ons/WebExtensions/API/i18n/detectLanguage
---

{{AddonSidebar()}}

提供されたテキストの言語を [Compact Language Detector](https://github.com/CLD2Owners/cld2) (CLD) を利用して検出します。

これは、[`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返す非同期関数です。

## 構文

```js
var detectingLanguages = browser.i18n.detectLanguage(
  text, // string
);
```

### 引数

- `text`
  - : `文字列`。翻訳されるユーザー入力の文字列です。

### 戻り値

結果オブジェクトで解決される [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise)。結果オブジェクトは 2 個のプロパティを持ちます:

- `isReliable`
  - : `真偽値`。検出された言語が確かかどうかを示します。
- `languages`

  - : オブジェクトの `配列`。配列の各項目はさらに 2 個のプロパティを持ちます:

    - `language`
      - : {{WebExtAPIRef('i18n.LanguageCode')}}。検出された言語です。
    - `percentage`
      - : `整数値`。検出された言語で入力された文字列の割り合い。

## ブラウザーの互換性

{{Compat("webextensions.api.i18n.detectLanguage")}}

## 例

```js
function onLanguageDetected(langInfo) {
  for (lang of langInfo.languages) {
    console.log("Language is: " + lang.language);
    console.log("Percentage is: " + lang.percentage);
  }
}

var text = "L'homme est né libre, et partout il est dans les fers.";

var detecting = browser.i18n.detectLanguage(text);
detecting.then(onLanguageDetected);
```

{{WebExtExamples}}

> **メモ:** この API は、Chromium の [`chrome.i18n`](https://developer.chrome.com/extensions/i18n#method-detectLanguage) API を基にしています。このドキュメンテーションは、Chromium コード内の [`i18n.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/i18n.json) に由来しています。Microsoft Edge 互換性データは、Microsoft Corporation より供給され、Creative Commons Attribution 3.0 United States License の下で含まれています。

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
