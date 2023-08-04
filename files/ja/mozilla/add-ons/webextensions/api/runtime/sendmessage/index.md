---
title: runtime.sendMessage()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage
---

{{AddonSidebar()}}

単一のメッセージを、自分や別の拡張機能が持つイベントリスナーに送信します。

自分自身の拡張機能に送信する場合は、引数 `extensionId` を省略してください。自らの拡張機能に含まれる全てのページで {{WebExtAPIRef('runtime.onMessage')}} イベントが起動されます。ただし、`runtime.sendMessage` を実行したフレームは除きます。

別の拡張機能に送信する場合は、引数 `extensionId` に拡張機能の ID を設定してください。その拡張機能で {{WebExtAPIRef('runtime.onMessageExternal')}} イベントが起動されます。

このメソッドを使ってコンテンツスクリプトにメッセージを送信することはできません。コンテンツスクリプトにメッセージを送信するには、{{WebExtAPIRef('tabs.sendMessage')}} を使ってください。

これは、[`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返す非同期関数です。

> **メモ:** [コネクションベースのメッセージ](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#Connection-based_messaging)を使うこともできます。

## 構文

```js
var sending = browser.runtime.sendMessage(
  extensionId, // optional string
  message, // any
  options, // optional object
);
```

### 引数

- `extensionId`{{optional_inline}}
  - : `string` 型。 メッセージを送信する拡張機能の ID。別の拡張機能にメッセージを送信する場合は、この引数を含めてください。受信させることを意図している拡張機能が manifest.json の [applications](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/applications) キーを使って明示的に ID を設定されている場合は、その値を `extensionId` に指定する必要があります。そうでない場合、受信側の拡張機能のために生成された ID を指定する必要があります。
    もし `extensionId` が省略された場合、メッセージは自分自身の拡張機能に送信されます。
- `message`
  - : `any` 型。シリアライズされたクローンに構造化できるオブジェクト。
- `options`{{optional_inline}}

  - : `object` 型。

    - `includeTlsChannelId`{{optional_inline}}
      - : `boolean` 型。接続イベントを待つプロセスのための {{WebExtAPIRef('runtime.onMessageExternal')}} に TLS チャンネル ID が渡されるかどうか。
    - `toProxyScript{{optional_inline}}`
      - : `boolean` 型。 メッセージが {{WebExtAPIRef("proxy")}} API を使って読み込まれる PAC ファイル向けである場合、true を指定しなければならない。

引数に指定される値によっては、この API はあいまいです。以降のルールが使われます。

- **引数が一つの場合**、それは送信されるメッセージで、内部的に送信されます。
- **引数が二つの場合**

  - 二番目の引数が次のいずれかである場合、引数は `(message, options)` と解釈され、メッセージは内部的に送信されます。

    1. 有効な `options` オブジェクトである (つまり、ブラウザがサポートする `options` のプロパティのみを持つオブジェクト)
    2. null
    3. undefined

  - それ以外の場合、引数は `(extensionId, message)` と解釈され、メッセージは `extensionId` によって識別された拡張機能に送信されます。

- **引数が三つの場合**、引数は `(extensionId, message, options)` と解釈されます。メッセージは `extensionId` によって識別された拡張機能に送信されます。

Firefox 55 より前では、引数が二つの場合のルールが異なることに注意してください。古いルールでは、最初の引数が文字列である場合、それを `extensionId` と扱い、二番目の引数をメッセージとして使います。これは、`sendMessage()` を `("my-message", {})` のような引数を使って実行する場合、空のメッセージを "my-message" によって識別される拡張機能に送信してしまうということです。新しいルールのもとでは、このような引数を使うと、"my-message" というメッセージを空のオプションオブジェクトを使って内部的に送信します。

### 戻り値

[`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) 型。受信側が応答を送信する場合、その応答を JSON オブジェクトとして使って fulfilled 状態にされます。それ以外の場合、値を持たない fulfilled 状態になります。拡張機能との接続中にエラーが発生した場合、Promise はエラーメッセージを持つ rejected 状態になります。

## ブラウザーの互換性

{{Compat("webextensions.api.runtime.sendMessage")}}

## 使用例

これは、ユーザーがコンテンツのウィンドウをクリックしたときにバックグラウンド スクリプトにメッセージを送信するコンテンツスクリプトです。送信されるメッセージは `{greeting: "Greeting from the content script"}` で、送信側は応答を受信をすることになっており、それを `handleResponse` 関数で扱います。

```js
// content-script.js

function handleResponse(message) {
  console.log(`Message from the background script:  ${message.response}`);
}

function handleError(error) {
  console.log(`Error: ${error}`);
}

function notifyBackgroundPage(e) {
  var sending = browser.runtime.sendMessage({
    greeting: "Greeting from the content script",
  });
  sending.then(handleResponse, handleError);
}

window.addEventListener("click", notifyBackgroundPage);
```

対応するバックグラウンド スクリプトは次のようなものです。

```js
// background-script.js

function handleMessage(request, sender, sendResponse) {
  console.log("Message from the content script: " + request.greeting);
  sendResponse({ response: "Response from background script" });
}

browser.runtime.onMessage.addListener(handleMessage);
```

{{WebExtExamples}}

> **メモ:** この API は Chromium の [`chrome.runtime`](https://developer.chrome.com/extensions/runtime#method-sendMessage) API に基づいています。このドキュメントは [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) における Chromium のコードに基づいています。Microsoft Edge での実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従っています。

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
