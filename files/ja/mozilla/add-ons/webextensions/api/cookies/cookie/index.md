---
title: cookies.Cookie
slug: Mozilla/Add-ons/WebExtensions/API/cookies/Cookie
---

{{AddonSidebar}}

{{WebExtAPIRef("cookies")}} API の `Cookie` 型は HTTP cookie の情報を持ちます。

## 型

以下のプロパティを含むオブジェクトです。

- `domain`
  - : cookie の所属するドメイン (例えば "www\.google.com" や "example.com") を示す文字列を持つ `string` 型です。
- `expirationDate`{{optional_inline}}
  - : cookie の有効期限を UNIX 時刻からの秒数で持つ `number` 型です。セッション cookie はこのプロパティを持っていません。
- `firstPartyDomain`
  - : cookie に関連付けられたファーストパーティドメインを表す文字列を格納している `string` 型です。 cookie の First-party isolation が無効の間は空文字列になります。詳細は [First-party isolation](/ja/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation) をご覧ください。
- `hostOnly`
  - : `boolean` 型です。cookie がホストオンリークッキー (リクエストのホストが cookie の指定ドメインと完全一致している場合のみ送信) である場合に `true` 、でなければ `false` になります。
- `httpOnly`
  - : `boolean` 型です。 cookie に HttpOnly 属性 ( cookie をクライアント側スクリプトから参照できなくする属性) が付与されている場合に `true` 、でなければ `false` が格納されます。
- `name`
  - : cookie の名前が格納される `string` 型です。
- `path`
  - : cookie のパスが格納される `string` 型です。
- `secure`
  - : `boolean` 型です。 cookie に secure 属性(暗号化通信でのみ cookie を送信する属性)が付与されている場合に `true` 、でなければ `false` になります。
- `session`
  - : `boolean` 型です。 cookie がセッション cookie ( セッション限りで破棄される cookie )である場合に `true` 、でなければ `false` が付与されます。
- `storeId`
  - : この cookie が格納されている cookie ストアの ID を格納する `string` 型です。{{WebExtAPIRef("cookies.getAllCookieStores()")}}によって提供されます。
- `value`
  - : cookie の値を格納する `string` 型です。

## ブラウザーの互換性

{{Compat}}

## 例

cookies API のほとんどは入力パラメーターまたは戻り値の一部として使用される `Cookie` オブジェクトを含みます。例えば {{WebExtAPIRef("cookies.getAll()")}} は `Cookie` オブジェクトの配列を返します。

以下の例ではすべての cookie を取得し、コンソールログに `Cookie` オブジェクト中のいくつかのプロパティを出力します。

```js
function logCookies(cookies) {
  for (cookie of cookies) {
    console.log(`Domain: ${cookie.domain}`);
    console.log(`Name: ${cookie.name}`);
    console.log(`Value: ${cookie.value}`);
    console.log(`Persistent: ${!cookie.session}`);
  }
}

var gettingAll = browser.cookies.getAll({});
gettingAll.then(logCookies);
```

{{WebExtExamples}}

> [!NOTE]
> この API は Chromium の [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies#type-Cookie) API に基づいています。 また、このドキュメントは [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) における Chromium のコードに基づいています。Microsoft Edge での実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従っています。

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
