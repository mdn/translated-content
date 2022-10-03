---
title: runtime.onMessage
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onMessage
---

{{AddonSidebar()}}このイベントを使って、拡張機能の別の部品からのメッセージを受け取ることができます。例えば、次のような場面で使います。

- [コンテンツスクリプト](/ja/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Content_scripts)の中で、 [バックグラウンドスクリプト](/ja/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts)からのメッセージを受け取る。
- バックグラウントスクリプトの中で、コンテンツスクリプトからのメッセージを受け取る。
- [オプションページ](/ja/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Options_pages)や[ポップアップ](/ja/Add-ons/WebExtensions/User_interface_components#Popups)のスクリプトの中で、バックグラウンドスクリプトからのメッセージを受け取る。
- バックグラウンドスクリプトの中で、オプションページやポップアップのスクリプトからのメッセージを受け取る。

`onMessage` リスナーに受信させるメッセージを送るには、{{WebExtAPIRef("runtime.sendMessage()")}}、または (コンテンツスクリプトにメッセージを送るときは) {{WebExtAPIRef("tabs.sendMessage()")}} を使います。

> **メモ:** 同じ種類のメッセージに対する `onMessage` リスナーを複数作ることは避けてください。複数のリスナーが実行される順番は保証されていないからです。特定のリスナーへのメッセージ伝送を保証したいときは、[コネクションベースのメッセージ](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#Connection-based_messaging) を使ってください。

メッセージ本体の他に、リスナーは次のものを受け取ります。

- `sender` オブジェクト。メッセージ送信側の詳細情報です。
- `sendResponse` 関数。送信側への返信を送るために使います。

メッセージに対して同期的に返信するには、`sendResponse` 関数をリスナーの中で実行します。[例を参照してください](/ja/Add-ons/WebExtensions/API/runtime/onMessage#Sending_a_synchronous_response)。

非同期的に返信するには、二つの方法があります。

- イベントリスナーから `true` を返す。こうすることで、リスナーから復帰した後でも `sendResponse` 関数が有効なままになるため、後で実行することができます。[例を参照してください](/ja/Add-ons/WebExtensions/API/runtime/onMessage#Sending_an_asynchronous_response_using_sendResponse)。
- イベントリスナーから `Promise` を返して、返信が準備できた後にそれを解決する (またはエラーの場合は拒否する)。[例を参照してください](/ja/Add-ons/WebExtensions/API/runtime/onMessage#Sending_an_asynchronous_response_using_a_Promise)。

> **警告:** `Promise` を返すほうがより望ましい方法です。`sendResponse` は [W3C 仕様から削除される予定です](https://github.com/mozilla/webextension-polyfill/issues/16#issuecomment-296693219)。 人気のある [webextension-polyfill](https://github.com/mozilla/webextension-polyfill) ライブラリーは、すでに `sendResponse` 関数を実装から削除しました。

> **メモ:** また、[コネクションベースのメッセージ](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#Connection-based_messaging)を使うこともできます。

## 構文

```js
browser.runtime.onMessage.addListener(listener)
browser.runtime.onMessage.removeListener(listener)
browser.runtime.onMessage.hasListener(listener)
```

イベントには 3 つの関数があります。

- `addListener(callback)`
  - : リスナーをこのイベントに追加する。
- `removeListener(listener)`
  - : このイベントの受け取りを中止する。`listener` 引数は削除するリスナーです。
- `hasListener(listener)`
  - : `listener` がこのイベントに登録されているかどうかを確認する。登録されている場合は `true` を、そうでない場合は `false` を返す。

## addListener の構文

### 引数

- `function`

  - : このイベントが発生したときに実行されるリスナー関数。関数には次の引数が渡される。

    - `message`
      - : `object` 型。メッセージ本体。これは JSON 化できるオブジェクトです。

    <!---->

    - `sender`
      - : {{WebExtAPIRef('runtime.MessageSender')}} オブジェクト。メッセージの送信側を表します。

    <!---->

    - `sendResponse`

      - : メッセージに対する返信を送るために、最大で一回実行できる関数。この関数は引数を一つ受け取り、それは JSON 化できるオブジェクトのはずです。その引数はメッセージ送信側に返送されます。

        同じドキュメント中に `onMessage` リスナーが一つ以上ある場合、返信を返すことができるのは一つだけです。

        同期的に返信するには、リスナー関数が復帰する前に `sendResponse` を実行します。非同期的に返信するには、次のどちらかを実行します。

        - `sendResponse` に対する参照を保持したままリスナー関数から `true` を返す。そうすると、リスナー関数から復帰した後でも `sendResponse` を実行できます。
        - リスナー関数から [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返して、返信の準備ができたときにその Promise を解決する。こちらがより好ましい方法です。

    リスナー関数は、Boolean か [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) のいずれかを返します。

    > **警告:** `addListener` を次のような `async` 関数を使って実行しないでください。
    >
    > ```
    > browser.runtime.onMessage.addListener(async (data, sender) => {
    >   if (data.type === 'handle_me') return 'done';
    > });
    > ```
    >
    > このようなリスナーは全ての受け取ったメッセージを消費するため、実際には他のリスナーがメッセージを受信したり処理することを妨げてしまいます。
    >
    > 非同期的な実装を使いたい場合は、次のように Promise を使ってください。
    >
    > ```
    > browser.runtime.onMessage.addListener((data, sender) => {
    >   if (data.type === 'handle_me') return Promise.resolve('done');
    > });
    > ```

## ブラウザーの互換性

{{Compat("webextensions.api.runtime.onMessage")}}

## 使用例

### 単純な使用例

次のコンテンツスクリプトは、ウェブページ上のクリックイベントを待ち受けます。リンクがクリックされた場合、対象の URL をバックグラウンドページにメッセージ送信します。

```js
// content-script.js

window.addEventListener("click", notifyExtension);

function notifyExtension(e) {
  if (e.target.tagName != "A") {
    return;
  }
  browser.runtime.sendMessage({"url": e.target.href});
}
```

バックグラウンドスクリプトはこのメッセージが送信されるまで待ち、[`notifications`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/notifications) API を使って通知を表示します。

```js
// background-script.js

browser.runtime.onMessage.addListener(notify);

function notify(message) {
  browser.notifications.create({
    "type": "basic",
    "iconUrl": browser.extension.getURL("link.png"),
    "title": "リンクをクリックしました!",
    "message": message.url
  });
}
```

### 同期的に返信する

次のコンテンツスクリプトは、ユーザーがページ上をクリックしたとき、バックグラウンドスクリプトにメッセージを送信します。また、バックグラウンドスクリプトから送信された応答があればログ出力します。

```js
// content-script.js

function handleResponse(message) {
  console.log(`バックグラウンドスクリプトが応答しました: ${message.response}`);
}

function handleError(error) {
  console.log(`Error: ${error}`);
}

function sendMessage(e) {
  var sending = browser.runtime.sendMessage({content: "コンテンツスクリプトからのメッセージです"});
  sending.then(handleResponse, handleError);
}

window.addEventListener("click", sendMessage);
```

これが対応するバックグラウンドスクリプトで、リスナー内部から同期的に応答を返します。

```js
// background-script.js

function handleMessage(request, sender, sendResponse) {
  console.log(`コンテンツスクリプトがメッセージを送信しました: ${request.content}`);
  sendResponse({response: "バックグラウンドスクリプトからの応答です"});
}

browser.runtime.onMessage.addListener(handleMessage);
```

これは同期的に応答を返す別の方法で、Promise.resolve() を使うものです。

```js
// background-script.js

function handleMessage(request, sender, sendResponse) {
  console.log(`コンテンツスクリプトがメッセージを送信しました: ${request.content}`);
  return Promise.resolve({response: "バックグラウンドスクリプトからの応答です"});
}

browser.runtime.onMessage.addListener(handleMessage);
```

### 非同期的な返信を sendResponse により行う

次は直前の例のバックグラウンドスクリプトの別バージョンです。これは、リスナーが復帰した後、非同期的に返信を送ります。リスナーの中の `return true;` に注目してください。このようにすることで、リスナーが復帰した後に `sendResponse` 引数を使う意図があることをブラウザーに伝えています。

```js
// background-script.js

function handleMessage(request, sender, sendResponse) {
  console.log(`コンテンツスクリプトがメッセージを送信しました: ${request.content}`);
  setTimeout(() => {
    sendResponse({response: "非同期的なバックグラウンドスクリプトからの応答です"});
  }, 1000);
  return true;
}

browser.runtime.onMessage.addListener(handleMessage);
```

### 非同期的な返信を Promise により行う

次のコンテンツスクリプトは、まずページ上の \<a> リンクを取得し、そしてそのリンクの場所がブックマークされているかどうかを尋ねるメッセージを送信します。このスクリプトは、その場所がブックマークされている場合は `true` を、そうでない場合は `false` というような、Boolean 型の応答が返ってくることを想定しています。

```js
// content-script.js

const firstLink = document.querySelector("a");

function handleResponse(isBookmarked) {
  if (isBookmarked) {
    firstLink.classList.add("bookmarked");
  }
}

browser.runtime.sendMessage({
  url: firstLink.href
}).then(handleResponse);
```

これが対応するバックグラウンドスクリプトです。`{{WebExtAPIRef("bookmarks.search()")}}` を使うことで、リンクがブックマークされているかを確認する [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返します。

```js
// background-script.js

function isBookmarked(message, sender, response) {
  return browser.bookmarks.search({
    url: message.url
  }).then(function(results) {
    return results.length > 0;
  });
}

browser.runtime.onMessage.addListener(isBookmarked);
```

非同期的なハンドラーが Promise を返さない場合、明示的に Promise を作ることができます。これは少し不自然な例ですが、[`Window.setTimeout()`](/ja/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) を使って 1 秒の遅延を発生させた後に応答を返します。

```js
// background-script.js

function handleMessage(request, sender, sendResponse) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({response: "非同期的なバックグラウンドスクリプトからの応答です"});
    }, 1000);
  });
}

browser.runtime.onMessage.addListener(handleMessage);
```

{{WebExtExamples}}

> **メモ:** この API は Chromium の [`chrome.runtime`](https://developer.chrome.com/extensions/runtime#event-onMessage) API. このドキュメントは [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) における Chromium のコードに基づいています。Microsoft Edge での実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従っています。

<pre class="hidden">// Copyright 2015 The Chromium Authors. All rights reserved.
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
</pre>
