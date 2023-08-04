---
title: runtime.onMessage
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onMessage
l10n:
  sourceCommit: 4b10cb28d5eee0e952b2d84bd1b23cc53daa93b7
---

{{AddonSidebar()}}

このイベントを使って、拡張機能の別の部品からのメッセージを受け取ることができます。

例えば、次のような場面で使います。

- **[コンテンツスクリプト](/ja/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#コンテンツスクリプト)の中**で、 [バックグラウンドスクリプト](/ja/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#バックグラウンドスクリプト)からのメッセージを受け取る。
- **バックグラウンドスクリプトの中**で、コンテンツスクリプトからのメッセージを受け取る。
- **[オプションページ](/ja/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#オプションページ)や[ポップアップ](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface#ポップアップ)のスクリプトの中**で、バックグラウンドスクリプトからのメッセージを受け取る。
- **バックグラウンドスクリプトの中**で、オプションページやポップアップのスクリプトからのメッセージを受け取る。

`onMessage()` リスナーに受信させるメッセージを送るには、{{WebExtAPIRef("runtime.sendMessage()")}}、または (コンテンツスクリプトにメッセージを送るときは) {{WebExtAPIRef("tabs.sendMessage()")}} を使います。

> **メモ:** 同じ種類のメッセージに対する `onMessage` リスナーを複数作ることは避けてください。複数のリスナーが実行される順番は保証されていないからです。
>
> 特定のリスナーへのメッセージ伝送を保証したいときは、[コネクションベースのメッセージ](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#コネクションベースのメッセージ)を使ってください。

メッセージ本体の他に、リスナーは次のものを受け取ります。

- `sender` オブジェクト。メッセージ送信側の詳細情報です。
- `sendResponse` 関数。送信側への応答を送るために使います。

メッセージに対して同期的に応答するには、`sendResponse` 関数をリスナーの中で実行します。[例を参照してください](#同期的な応答の送信)。

非同期的に応答するには、二つの方法があります。

- イベントリスナーから `true` を返す。こうすることで、リスナーから復帰した後でも `sendResponse` 関数が有効なままになるため、後で実行することができます。[例を参照してください](#sendresponse_を使用した非同期の応答の送信)。
- イベントリスナーから `Promise` を返して、応答が準備できた後にそれを解決する (またはエラーの場合は拒否する)。[例を参照してください](#プロミスを使用した非同期の応答の送信)。

> **メモ:** また、[コネクションベースのメッセージ](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#コネクションベースのメッセージ)を使うこともできます。

## 構文

```js-nolint
browser.runtime.onMessage.addListener(listener)
browser.runtime.onMessage.removeListener(listener)
browser.runtime.onMessage.hasListener(listener)
```

イベントには 3 つの関数があります。

- `addListener(listener)`
  - : リスナーをこのイベントに追加する。
- `removeListener(listener)`
  - : このイベントの受け取りを中止する。`listener` 引数は削除するリスナーです。
- `hasListener(listener)`
  - : リスナーがこのイベントに登録されているかどうかを確認する。登録されている場合は `true` を、そうでない場合は `false` を返す。

## addListener の構文

### 引数

- `listener`

  - : このイベントが発生したときに実行されるリスナー関数。関数には次の引数が渡される。

    - `message`

      - : `object` 型。メッセージ本体。これは JSON 化できるオブジェクトです（[データクローンアルゴリズム](/ja/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#データクローンアルゴリズム)を参照）。

    - `sender`
      - : {{WebExtAPIRef('runtime.MessageSender')}} オブジェクト。メッセージの送信側を表します。
    - `sendResponse`

      - : メッセージに対する応答を送るために、最大で一回実行できる関数。この関数は引数を一つ受け取り、それは JSON 化できるオブジェクトのはずです（[データクローンアルゴリズム](/ja/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#データクローンアルゴリズム)を参照）。その引数はメッセージ送信側に返送されます。

        同じ文書中に `onMessage()` リスナーが 2 つ以上ある場合、応答を返すことができるのは 1 つだけです。

        同期的に応答するには、リスナー関数が復帰する前に `sendResponse()` を実行してください。

        非同期的に応答するには、次のどちらかを実行します。

        - `sendResponse()` に対する参照を保持したままリスナー関数から `true` を返す。そうすると、リスナー関数から復帰した後でも `sendResponse()` が実行できます。
        - リスナー関数から {{jsxref("Promise")}} を返して、応答の準備ができたときにその Promise を解決する。こちらがより好ましい方法です。

    リスナー関数は、論理値または {{jsxref("Promise")}} のいずれかを返します。

    > **メモ:** `addListener()` に非同期関数を渡すと、リスナーはメッセージを受け取るたびにプロミスを返すため、他のリスナーが応答できないようになります。
    >
    > ```js example-bad
    > // このようにしないでください
    > browser.runtime.onMessage.addListener(async (data, sender) => {
    >   if (data.type === "handle_me") {
    >     return "done";
    >   }
    > });
    > ```
    >
    > もし、リスナーが特定の種類のメッセージにのみ応答したい場合は、リスナーを非同期関数として定義し、リスナーが応答する予定のメッセージに対してのみプロミスを返す必要があります - そうでなければ、false または undefined を返してください。
    >
    > ```js example-good
    > browser.runtime.onMessage.addListener((data, sender) => {
    >   if (data.type === "handle_me") {
    >     return Promise.resolve("done");
    >   }
    >   return false;
    > });
    > ```

## ブラウザーの互換性

{{Compat}}

## 例

### 単純な使用例

次のコンテンツスクリプトは、ウェブページ上のクリックイベントを待ち受けます。リンクがクリックされた場合、対象の URL をバックグラウンドページにメッセージ送信します。

```js
// content-script.js

window.addEventListener("click", notifyExtension);

function notifyExtension(e) {
  if (e.target.tagName !== "A") {
    return;
  }
  browser.runtime.sendMessage({ url: e.target.href });
}
```

バックグラウンドスクリプトはこのメッセージが送信されるまで待ち、 [`notifications`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/notifications) API を使って通知を表示します。

```js
// background-script.js

browser.runtime.onMessage.addListener(notify);

function notify(message) {
  browser.notifications.create({
    type: "basic",
    iconUrl: browser.extension.getURL("link.png"),
    title: "リンクをクリックしました!",
    message: message.url,
  });
}
```

### 同期的な応答の送信

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
  const sending = browser.runtime.sendMessage({
    content: "コンテンツスクリプトからのメッセージです",
  });
  sending.then(handleResponse, handleError);
}

window.addEventListener("click", sendMessage);
```

これが対応するバックグラウンドスクリプトで、リスナー内部から同期的に応答を返します。

```js
// background-script.js

function handleMessage(request, sender, sendResponse) {
  console.log(
    `コンテンツスクリプトがメッセージを送信しました: ${request.content}`,
  );
  sendResponse({ response: "バックグラウンドスクリプトからの応答です" });
}

browser.runtime.onMessage.addListener(handleMessage);
```

これは同期的に応答を返す別の方法で、Promise.resolve() を使うものです。

```js
// background-script.js

function handleMessage(request, sender, sendResponse) {
  console.log(
    `コンテンツスクリプトがメッセージを送信しました: ${request.content}`,
  );
  return Promise.resolve({
    response: "バックグラウンドスクリプトからの応答です",
  });
}

browser.runtime.onMessage.addListener(handleMessage);
```

### sendResponse を使用した非同期の応答の送信

次は直前の例のバックグラウンドスクリプトの別バージョンです。これは、リスナーが復帰した後、非同期的に応答を送ります。リスナーの中の `return true;` に注目してください。このようにすることで、リスナーが復帰した後に `sendResponse` 引数を使う意図があることをブラウザーに伝えています。

```js
// background-script.js

function handleMessage(request, sender, sendResponse) {
  console.log(
    `コンテンツスクリプトがメッセージを送信しました: ${request.content}`,
  );
  setTimeout(() => {
    sendResponse({
      response: "非同期的なバックグラウンドスクリプトからの応答です",
    });
  }, 1000);
  return true;
}

browser.runtime.onMessage.addListener(handleMessage);
```

### プロミスを使用した非同期の応答の送信

次のコンテンツスクリプトは、まずページ上の `<a>` リンクを取得し、そしてそのリンクの場所がブックマークされているかどうかを尋ねるメッセージを送信します。このスクリプトは、その場所がブックマークされている場合は `true` を、そうでない場合は `false` というような、論理型の応答が返ってくることを想定しています。

```js
// content-script.js

const firstLink = document.querySelector("a");

function handleResponse(isBookmarked) {
  if (isBookmarked) {
    firstLink.classList.add("bookmarked");
  }
}

browser.runtime
  .sendMessage({
    url: firstLink.href,
  })
  .then(handleResponse);
```

これが対応するバックグラウンドスクリプトです。`{{WebExtAPIRef("bookmarks.search()")}}` を使うことで、リンクがブックマークされているかを確認する {{jsxref("Promise")}} を返します。

```js
// background-script.js

function isBookmarked(message, sender, response) {
  return browser.bookmarks
    .search({
      url: message.url,
    })
    .then((results) => results.length > 0);
}

browser.runtime.onMessage.addListener(isBookmarked);
```

非同期的なハンドラーがプロミスを返さない場合、明示的にプロミスを作ることができます。これは少し不自然な例ですが、[`setTimeout()`](/ja/docs/Web/API/setTimeout) を使って 1 秒の遅延を発生させた後に応答を返します。

```js
// background-script.js

function handleMessage(request, sender, sendResponse) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        response: "非同期的なバックグラウンドスクリプトからの応答です",
      });
    }, 1000);
  });
}

browser.runtime.onMessage.addListener(handleMessage);
```

{{WebExtExamples}}

> **メモ:** この API は Chromium の [`chrome.runtime`](https://developer.chrome.com/extensions/runtime#event-onMessage) API. このドキュメントは [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) における Chromium のコードに基づいています。

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
