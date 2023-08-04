---
title: runtime.lastError
slug: Mozilla/Add-ons/WebExtensions/API/runtime/lastError
---

{{AddonSidebar()}}

この値は、コールバック関数のある非同期 API でエラーメッセージを伝える時に使われます。拡張機能のコールバックベースの API を使っている時に便利です。

プロミスベースの API を使っている時にはこのプロパティは必要ありません。代わりにプロミスへエラーハンドラーを渡してください。

```js
const gettingCookies = browser.cookies.getAll();
gettingCookies.then(onGot, onError);
```

`runtime.lastError` プロパティは、呼び出し元へ伝える必要のあるエラーを非同期関数が持っている時に設定されます。

`lastError` が設定されるかもしれない非同期関数を呼び出すなら、関数の結果を扱う時にエラーチェックが期待されます。 `lastError` が設定されてコールバック関数内でエラーチェックしなかった場合、エラーが発生します。

## 構文

```js-nolint
let myError = browser.runtime.lastError;  // null or Error object
```

### 値

エラーを表す {{jsxref("Error")}} オブジェクトです。 {{jsxref("Error.message", "message")}} プロパティは、人間が読めるエラーの説明の `string` です。`lastError` が無かったら、値は `null` になります。

## 例

Cookie を設定して、 Cookie の内容を出力するかエラーを伝えるコールバックを使う例です。

```js
function logCookie(c) {
  if (browser.runtime.lastError) {
    console.error(browser.runtime.lastError);
  } else {
    console.log(c);
  }
}

browser.cookies.set({ url: "https://developer.mozilla.org/" }, logCookie);
```

同じ処理内容ですが、 `setCookie()` の結果を扱うプロミスを使う例です。

```js
function logCookie(c) {
  console.log(c);
}

function logError(e) {
  console.error(e);
}

const setCookie = browser.cookies.set({
  url: "https://developer.mozilla.org/",
});

setCookie.then(logCookie, logError);
```

> **メモ:** `runtime.lastError` は {{WebExtAPIRef("extension.lastError")}} のエイリアスです。 2 つはセットになっており、どちらかだけを確認すればよいです。

## ブラウザーの互換性

{{Compat}}

{{WebExtExamples}}

> **メモ:** この API は Chromium の [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/runtime/#property-lastError) API に基づいています。また、このドキュメントは [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) における Chromium から作成されています。

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
