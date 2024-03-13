---
title: HTTP リクエストへの介入
slug: Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests
l10n:
  sourceCommit: dd08ec8cf78926a7854d8f5f7793bf7ae199484e
---

{{AddonSidebar}}

HTTP リクエストへ介入するには {{WebExtAPIRef("webRequest")}} API を用います。
この API を利用すると、HTTP リクエストの生成段階における様々なタイミングにリスナー関数を追加できます。
追加したリスナーの中では、以下の処理を行うことができます。

- リクエストヘッダーや本体とレスポンスヘッダーにアクセス
- リクエストのキャンセルやリダイレクト
- リクエスト・レスポンスヘッダーの改変

この記事では、以下の 3 つの目的それぞれについて、`webRequest` モジュールの使い方を説明します。

- リクエストの生成時にリクエスト URL を記録する
- リクエストをリダイレクトする
- リクエストヘッダーを改変する

## リクエスト URL の記録

まず "requests" というディレクトリーを新しく作成しましょう。
このディレクトリー内に "manifest.json" というファイルを作成し、以下を追加してください。

```json
{
  "description": "Demonstrating webRequests",
  "manifest_version": 2,
  "name": "webRequest-demo",
  "version": "1.0",

  "permissions": ["webRequest", "<all_urls>"],

  "background": {
    "scripts": ["background.js"]
  }
}
```

続いて "background.js" というファイルを作成し、以下のスクリプトを書き込んでください。

```js
function logURL(requestDetails) {
  console.log(`Loading: ${requestDetails.url}`);
}

browser.webRequest.onBeforeRequest.addListener(logURL, {
  urls: ["<all_urls>"],
});
```

ここでは、リクエストを作成する直前に{{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}} を利用して、 `logURL()` 関数を呼んでいます。 `logURL()` 関数では、イベントオブジェクトからリクエスト URL を取得し、ブラウザーのコンソールに出力しています。 `{urls: ["<all_urls>"]}` [パターン](/ja/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) は、すべての URL に対する HTTP リクエストに介入することを表しています。

試してみるには次のようにします。

- [拡張機能をインストールしてください](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)
- [ブラウザーコンソール](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/)を開いてください（<kbd>Ctrl + Shift + J</kbd> を使用）。
- メニュー内の _コンテンツメッセージを表示_ を有効にしてください。

  ![ブラウザーのコンソールメニュー : コンテンツメッセージの表示](browser_console_show_content_messages.png)

- 適当なウェブページを開いてください。

ブラウザーコンソールには、ブラウザーがリクエストされたすべてのリソースの URL が表示されるはずです。
例えば、このスクリーンショットは、 Wikipedia のページを読み込んだときの URL を示しています。

![ブラウザーコンソールのメニュー : 拡張機能から URL を表示](browser_console_url_from_extension.png)

<!-- {{EmbedYouTube("X3rMgkRkB1Q")}} -->

## リクエストのリダイレクト

さて、 `webRequest` を使って HTTP リクエストをリダイレクトさせてみましょう。まず最初に manifest.json を以下の内容へ変更します。

```json
{
  "description": "Demonstrating webRequests",
  "manifest_version": 2,
  "name": "webRequest-demo",
  "version": "1.0",

  "permissions": [
    "webRequest",
    "webRequestBlocking",
    "https://developer.mozilla.org/"
  ],

  "background": {
    "scripts": ["background.js"]
  }
}
```

変更点は次の通りです。

- `webRequestBlocking` を [`permission`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) に追加しました。
  この特別な権限は、拡張機能がリクエストを変更したいときにリクエストされます。
- `<all_urls>` 権限を個々の[ホスト権限](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_権限)に置き換えてください。これはリクエストされた権限数を最小限にするための良い習慣です。

続いて "background.js" を以下のように書き換えます。

```js
let pattern = "https://developer.mozilla.org/*";
const targetUrl =
  "https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension/frog.jpg";

function redirect(requestDetails) {
  console.log(`Redirecting: ${requestDetails.url}`);
  if (requestDetails.url === targetUrl) {
    return;
  }
  return {
    redirectUrl: targetUrl,
  };
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  { urls: [pattern], types: ["image"] },
  ["blocking"],
);
```

ここでも {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}} イベントリスナーを使用し、それぞれのリクエストが行われる直前に関数を実行します。
この関数は `redirectUrl` を関数内で指定された対象の URL に置き換えます。この場合、 [2 つめの拡張機能](/ja/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension) にあるカエルの画像を指定します。

今回はすべてのリクエストに介入しないこととします。`{urls:[pattern], types:["image"]}` というオプションにより、(1) "https\://developer.mozilla.org/" 配下の URL であり、かつ (2) 画像リソースなリクエストのみに介入します。
詳細は {{WebExtAPIRef("webRequest.RequestFilter")}} を参照してください。

また、`"blocking"` というオプションも渡していることに注意してください。
このオプションは、リクエストを改変する際に必ず必要となります。これによってネットワークリクエストがリスナー関数にブロックされるため、リスナー関数から処理が戻るまでブラウザーは待機します。
`"blocking"` に関する詳細は {{WebExtAPIRef("webRequest.onBeforeRequest")}} のドキュメントを参照してください。

それでは実際に動かしてみましょう。画像が多く載っている MDN のページ（[the page listing extension user interface components](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface) など）を開き、[拡張機能をリロード](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/#reloading_a_temporary_add-on) します。終わったら MDN のページをリロードしてみましょう。

![ページ内の画像をカエルの画像に置き換えた場合](beastify_by_redirect.png)

## リクエストヘッダーの改変

最後の例として、`webRequest` を使ってリクエストヘッダーを改変してみましょう。ここでは、ブラウザーが Opera 12.16 と認識されるように "User-Agent" ヘッダーを改変してみます。ただし、"http\://useragentstring.com/" の配下へアクセスした際にのみ改変することとします。

"manifest.json" を更新して、以下のように `http://useragentstring.com/` を記載します。

```json
{
  "description": "Demonstrating webRequests",
  "manifest_version": 2,
  "name": "webRequest-demo",
  "version": "1.0",

  "permissions": [
    "webRequest",
    "webRequestBlocking",
    "http://useragentstring.com/"
  ],

  "background": {
    "scripts": ["background.js"]
  }
}
```

"background.js" を以下のように書き換えます。

```js
let targetPage = "http://useragentstring.com/*";

let ua =
  "Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16";

function rewriteUserAgentHeader(e) {
  e.requestHeaders.forEach((header) => {
    if (header.name.toLowerCase() === "user-agent") {
      header.value = ua;
    }
  });
  return { requestHeaders: e.requestHeaders };
}

browser.webRequest.onBeforeSendHeaders.addListener(
  rewriteUserAgentHeader,
  { urls: [targetPage] },
  ["blocking", "requestHeaders"],
);
```

ここでは、リクエストヘッダーが送信される直前に関数を実行するため {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}} イベントリスナーを利用しています。

このリスナー関数は、 URL が `targetPage` の[パターン](/ja/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)に一致したリクエストに対してのみ呼び出されます。
ここでも再び、`"blocking"` がオプションとして与えられていることに注意してください。また、`"requestHeaders"` もオプションで渡すことにより、送信予定のリクエストヘッダーを含んだ配列がリスナー関数に渡されます。
これらのオプションに関しては {{WebExtAPIRef("webRequest.onBeforeSendHeaders")}} で詳細を確認してください。

リスナー関数では、リクエストヘッダーの配列から "User-Agent" ヘッダーを探し、ヘッダーの値を変数 `ua` の値で置き換え、改変された配列を最後に返しています。この改変された配列は、やがてサーバーへ送信されることとなります。

それでは実際に動かしてみましょう。 [useragentstring.com](http://useragentstring.com/) へアクセスし、自分のブラウザーが Firefox と判定されることを確認します。ここで拡張機能を再読み込みし、 [useragentstring.com](http://useragentstring.com/) のページを再読み込みします。すると、先程 Firefox と判定されたのは Opera になっているはずです。

![useragentstring.com が変更されたユーザーエージェント文字列の詳細を示している様子](modified_request_header.png)

## 詳細情報

`webRequest` API でできることを詳しく知りたい場合は、[リファレンスドキュメント](/ja/docs/Mozilla/Add-ons/WebExtensions/API/webRequest)を参照してください。
