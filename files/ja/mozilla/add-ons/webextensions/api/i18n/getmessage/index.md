---
title: i18n.getMessage()
slug: Mozilla/Add-ons/WebExtensions/API/i18n/getMessage
---

{{AddonSidebar()}}

指定したメッセージのローカライズされた文字列を取得します。

## 構文

```js
browser.i18n.getMessage(
  messageName, // 文字列
  substitutions, // 任意
);
```

### 引数

- `messageName`

  - : `文字列`。messages.json で指定されたメッセージ名です。messages.json 内にメッセージを見つけられない場合は:

    - Firefox は "" を返し、エラーログを出力します。
    - Chrome は "" を返し、エラーログを出力しません。

- `substitutions`{{optional_inline}}
  - : `文字列` または `文字列` の `配列`。単一の置換文字列、または置換文字列の配列です。
    Chrome では、9 個より多くの置換文字列を与えると、`getMessage()` は `undefined` を返します。

### 戻り値

`文字列`。現在のロケール向けにローカライズされたメッセージ。

## ブラウザーの互換性

{{Compat("webextensions.api.i18n.getMessage")}}

## 例

`target.url` を置換文字列として渡し、`"messageContent"` のローカライズされた文字列を取得します:

```js
var message = browser.i18n.getMessage("messageContent", target.url);
console.log(message);
```

これは、\_locales/en/messages.json ファイルに含まれた次の内容で動作します:

```json
{
  "messageContent": {
    "message": "You clicked $URL$.",
    "description": "Tells the user which link they clicked.",
    "placeholders": {
      "url": {
        "content": "$1",
        "example": "https://developer.mozilla.org"
      }
    }
  }
}
```

`target.url` が "https\://developer.mozilla.org" である場合、"en" ロケールでのメッセージの値は次のようになります:

```
"You clicked https://developer.mozilla.org."
```

{{WebExtExamples}}

> **メモ:** この API は、Chromium の [`chrome.i18n`](https://developer.chrome.com/extensions/i18n#method-getMessage) API を基にしています。このドキュメンテーションは、Chromium コード内の [`i18n.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/i18n.json) に由来しています。Microsoft Edge 互換性データは、Microsoft Corporation より供給され、Creative Commons Attribution 3.0 United States License の下で含まれています。

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
