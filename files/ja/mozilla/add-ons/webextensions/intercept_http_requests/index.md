---
title: HTTP リクエストへの介入
slug: Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests
---

{{AddonSidebar}}

HTTP リクエストへ介入するには {{WebExtAPIRef("webRequest")}} API を用います。 この API を利用すると、HTTP リクエストの生成段階における様々なタイミングにリスナ関数を追加できます。追加したリスナの中では、以下の処理を行うことができます。

- リクエストヘッダやボディとレスポンスヘッダにアクセス
- リクエストのキャンセルやリダイレクト
- リクエスト・レスポンスヘッダの改変

この記事では、以下の 3 つの目的それぞれについて、`webRequest` モジュールの使い方を説明します。

- リクエストの生成時にリクエスト URL を記録する
- リクエストをリダイレクトする
- リクエストヘッダを改変する

## リクエスト URL の記録

まず "requests" というディレクトリを新しく作成しましょう。このディレクトリ内に "manifest.json" というファイルを作成し、以下の内容を書き込みます。

```json
{
  "description": "Demonstrating webRequests",
  "manifest_version": 2,
  "name": "webRequest-demo",
  "version": "1.0",

  "permissions": [
    "webRequest",
    "<all_urls>"
  ],

  "background": {
    "scripts": ["background.js"]
  }
}
```

続いて "background.js" というファイルを作成し、以下のスクリプトを書き込みます。

```js
function logURL(requestDetails) {
  console.log("Loading: " + requestDetails.url);
}

browser.webRequest.onBeforeRequest.addListener(
  logURL,
  {urls: ["<all_urls>"]}
);
```

ここでは、リクエストを作成する直前に `logURL()` 関数を呼ぶため、{{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}} を利用しています。`logURL()` 関数では、イベントオブジェクトからリクエスト URL を取得し、ブラウザのコンソールに出力しています。 `{urls: ["<all_urls>"]}` [パターン](/ja/Add-ons/WebExtensions/Match_patterns) は、すべての URL に対する HTTP リクエストに介入することを表しています。

それでは実際に動かしてみましょう。まず作成した [拡張機能をインストールし](/ja/Add-ons/WebExtensions/Temporary_Installation_in_Firefox)、[ブラウザコンソールを開きます](/ja/docs/Tools/Browser_Console)。 この状態で適当な web ページを開いてみましょう。すると、ブラウザがリクエストした全リソースの URL がブラウザコンソールに表示されるはずです。

{{EmbedYouTube("X3rMgkRkB1Q")}}

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
    "https://developer.mozilla.org/",
    "https://mdn.mozillademos.org/"
  ],

  "background": {
    "scripts": ["background.js"]
  }

}
```

先程と違うのは `"webRequestBlocking"` [パーミッション](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) を追加した点だけです。リクエストを積極的に改変する際には、このパーミッションを追加で指定する必要があります。

引き続いて "background.js" を以下のように書き換えます。

```js
var pattern = "https://mdn.mozillademos.org/*";

function redirect(requestDetails) {
  console.log("Redirecting: " + requestDetails.url);
  return {
    redirectUrl: "https://38.media.tumblr.com/tumblr_ldbj01lZiP1qe0eclo1_500.gif"
  };
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  {urls:[pattern], types:["image"]},
  ["blocking"]
);
```

ここでも再び、各リクエストを生成する直前に関数を実行するため {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}} イベントリスナを利用しています。リスナ関数では、宛先の URL を `redirectUrl` で指定したものに書き換えています。

今回はすべてのリクエストに介入しないこととします。`{urls:[pattern], types:["image"]}` というオプションにより、(1) "https\://mdn.mozillademos.org/" 配下の URL であり、かつ (2) 画像リソースなリクエストのみに介入します。詳細は {{WebExtAPIRef("webRequest.RequestFilter")}} を参照してください。

また、`"blocking"` というオプションも渡していることに注意してください。このオプションは、リクエストを改変する際に必ず必要となります。これによってネットワークリクエストがリスナ関数にブロックされるため、リスナ関数から処理が戻るまでブラウザは待機します。`"blocking"` に関する詳細は {{WebExtAPIRef("webRequest.onBeforeRequest")}} のドキュメントを参照してください。

それでは実際に動かしてみましょう。画像が多く載っている MDN のページ（[https://developer.mozilla.org/ja/docs/Tools/Network_Monitor](/ja/docs/Tools/Network_Monitor) など）を開き、[拡張機能をリロード](/ja/Add-ons/WebExtensions/Temporary_Installation_in_Firefox#Reloading_a_temporary_add-on) します。終わったら MDN のページをリロードしてみましょう。

{{EmbedYouTube("ix5RrXGr0wA")}}

## リクエストヘッダの改変

最後の例として、`webRequest` を使ってリクエストヘッダを改変してみましょう。ここでは、ブラウザが Opera 12.16 と認識されるように "User-Agent" ヘッダを改変してみます。ただし、"http\://useragentstring.com/" の配下へアクセスした際にのみ改変することとします。

"manifest.json" は先程の例で使用したのと同じです。

"background.js" を以下のように書き換えます。

```js
var targetPage = "http://useragentstring.com/*";

var ua = "Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16";

function rewriteUserAgentHeader(e) {
  e.requestHeaders.forEach(function(header){
    if (header.name.toLowerCase() === "user-agent") {
      header.value = ua;
    }
  });
  return {requestHeaders: e.requestHeaders};
}

browser.webRequest.onBeforeSendHeaders.addListener(
  rewriteUserAgentHeader,
  {urls: [targetPage]},
  ["blocking", "requestHeaders"]
);
```

ここでは、リクエストヘッダが送信される直前に関数を実行するため {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}} イベントリスナを利用しています。

このリスナ関数は、`targetPage` [パターン](/ja/Add-ons/WebExtensions/Match_patterns) に URL がマッチしたリクエストに対してのみ呼び出されます。 ここでも再び、`"blocking"` がオプションとして与えられていることに注意してください。また、`"requestHeaders"` もオプションで渡すことにより、送信予定のリクエストヘッダを含んだ配列がリスナ関数に渡されます。これらのオプションに関しては {{WebExtAPIRef("webRequest.onBeforeSendHeaders")}} で詳細を確認してください。

リスナ関数では、リクエストヘッダの配列から "User-Agent" ヘッダを探し、ヘッダの値を変数値 ua で置き換え、改変された配列を最後に返しています。この改変された配列は、やがてサーバへ送信されることとなります。

それでは実際に動かしてみましょう。[useragentstring.com](http://useragentstring.com/) へアクセスし、自分のブラウザが Firefox と判定されることを確認します。ここで拡張機能をリロードし、[useragentstring.com](http://useragentstring.com/) のページをリロードします。すると、先程 Firefox と判定されたのは Opera になっているはずです。

{{EmbedYouTube("SrSNS1-FIx0")}}

## より詳しく

`webRequest` API でできることを詳しく知りたい場合は、[`webRequest` API のリファレンス](/ja/Add-ons/WebExtensions/API/WebRequest) を参照してください。
