---
title: HTTP リクエストへの介入
slug: Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests
tags:
  - Add-ons
  - Extensions
  - How-to
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests
---
<div>{{AddonSidebar}}</div>

<p>HTTP リクエストへ介入するには {{WebExtAPIRef("webRequest")}} API を用います。 この API を利用すると、HTTP リクエストの生成段階における様々なタイミングにリスナ関数を追加できます。追加したリスナの中では、以下の処理を行うことができます。</p>

<ul>
 <li>リクエストヘッダやボディとレスポンスヘッダにアクセス</li>
 <li>リクエストのキャンセルやリダイレクト</li>
 <li>リクエスト・レスポンスヘッダの改変</li>
</ul>

<p>この記事では、以下の 3 つの目的それぞれについて、<code>webRequest</code> モジュールの使い方を説明します。</p>

<ul>
 <li>リクエストの生成時にリクエスト URL を記録する</li>
 <li>リクエストをリダイレクトする</li>
 <li>リクエストヘッダを改変する</li>
</ul>

<h2 id="Logging_request_URLs" name="Logging_request_URLs">リクエスト URL の記録</h2>

<p>まず "requests" というディレクトリを新しく作成しましょう。このディレクトリ内に "manifest.json" というファイルを作成し、以下の内容を書き込みます。</p>

<pre class="brush: json">{
  "description": "Demonstrating webRequests",
  "manifest_version": 2,
  "name": "webRequest-demo",
  "version": "1.0",

  "permissions": [
<code class="language-json">    <span class="string token">"webRequest"</span><span class="punctuation token">,</span>
    <span class="string token">"&lt;all_urls&gt;"</span></code>
  ],

  "background": {
    "scripts": ["background.js"]
  }
}</pre>

<p>続いて "background.js" というファイルを作成し、以下のスクリプトを書き込みます。</p>

<pre class="brush: js">function logURL(requestDetails) {
  console.log("Loading: " + requestDetails.url);
}

<code class="language-js">browser</code>.webRequest.onBeforeRequest.addListener(
  logURL,
  {urls: ["&lt;all_urls&gt;"]}
);
</pre>

<p>ここでは、リクエストを作成する直前に <code>logURL()</code> 関数を呼ぶため、{{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}} を利用しています。<code>logURL()</code> 関数では、イベントオブジェクトからリクエスト URL を取得し、ブラウザのコンソールに出力しています。 <code>{urls: ["&lt;all_urls&gt;"]}</code> <a href="/ja/Add-ons/WebExtensions/Match_patterns">パターン</a> は、すべての URL に対する HTTP リクエストに介入することを表しています。</p>

<p>それでは実際に動かしてみましょう。まず作成した <a href="/ja/Add-ons/WebExtensions/Temporary_Installation_in_Firefox">拡張機能をインストールし</a>、<a href="/ja/docs/Tools/Browser_Console">ブラウザコンソールを開きます</a>。 この状態で適当な web ページを開いてみましょう。すると、ブラウザがリクエストした全リソースの URL がブラウザコンソールに表示されるはずです。</p>

<p>{{EmbedYouTube("X3rMgkRkB1Q")}}</p>

<h2 id="Redirecting_requests" name="Redirecting_requests">リクエストのリダイレクト</h2>

<p>さて、 <code>webRequest</code> を使って HTTP リクエストをリダイレクトさせてみましょう。まず最初に manifest.json を以下の内容へ変更します。</p>

<pre class="brush: json">{

  "description": "Demonstrating webRequests",
  "manifest_version": 2,
  "name": "webRequest-demo",
  "version": "1.0",

  "permissions": [
    "webRequest",
    "webRequestBlocking",
<code class="language-json"><span class="string token">    "https://developer.mozilla.org/"</span><span class="punctuation token">,</span></code>
<code class="language-json"><span class="string token">    "https://mdn.mozillademos.org/"</span></code>
  ],

  "background": {
    "scripts": ["background.js"]
  }

}</pre>

<p>先程と違うのは <code>"webRequestBlocking"</code> <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions">パーミッション</a> を追加した点だけです。リクエストを積極的に改変する際には、このパーミッションを追加で指定する必要があります。</p>

<p>引き続いて "background.js" を以下のように書き換えます。</p>

<pre class="brush: js">var pattern = "https://mdn.mozillademos.org/*";

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
);</pre>

<p>ここでも再び、各リクエストを生成する直前に関数を実行するため {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}} イベントリスナを利用しています。リスナ関数では、宛先の URL を <code>redirectUrl</code> で指定したものに書き換えています。</p>

<p>今回はすべてのリクエストに介入しないこととします。<code>{urls:[pattern], types:["image"]}</code> というオプションにより、(1) "https://mdn.mozillademos.org/" 配下の URL であり、かつ (2) 画像リソースなリクエストのみに介入します。詳細は {{WebExtAPIRef("webRequest.RequestFilter")}} を参照してください。</p>

<p>また、<code>"blocking"</code> というオプションも渡していることに注意してください。このオプションは、リクエストを改変する際に必ず必要となります。これによってネットワークリクエストがリスナ関数にブロックされるため、リスナ関数から処理が戻るまでブラウザは待機します。<code>"blocking"</code> に関する詳細は {{WebExtAPIRef("webRequest.onBeforeRequest")}} のドキュメントを参照してください。</p>

<p>それでは実際に動かしてみましょう。画像が多く載っている MDN のページ（<a href="https://developer.mozilla.org/ja/docs/Tools/Network_Monitor">https://developer.mozilla.org/ja/docs/Tools/Network_Monitor</a> など）を開き、<a href="/ja/Add-ons/WebExtensions/Temporary_Installation_in_Firefox#Reloading_a_temporary_add-on"> 拡張機能をリロード</a> します。終わったら MDN のページをリロードしてみましょう。</p>

<p>{{EmbedYouTube("ix5RrXGr0wA")}}</p>

<h2 id="Modifying_request_headers" name="Modifying_request_headers">リクエストヘッダの改変</h2>

<p>最後の例として、<code>webRequest</code> を使ってリクエストヘッダを改変してみましょう。ここでは、ブラウザが Opera 12.16 と認識されるように "User-Agent" ヘッダを改変してみます。ただし、"http://useragentstring.com/" の配下へアクセスした際にのみ改変することとします。</p>

<p>"manifest.json" は先程の例で使用したのと同じです。</p>

<p>"background.js" を以下のように書き換えます。</p>

<pre class="brush: js">var targetPage = "http://useragentstring.com/*";

var ua = "Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16";

function rewriteUserAgentHeader(e) {
  <code class="language-js">e<span class="punctuation token">.</span>requestHeaders<span class="punctuation token">.</span><span class="function token">forEach</span><span class="punctuation token">(</span><span class="keyword token">function</span><span class="punctuation token">(</span>header<span class="punctuation token">)</span><span class="punctuation token">{</span></code>
    if (header.name<code class="language-js"><span class="punctuation token">.</span><span class="function token">toLowerCase</span><span class="punctuation token">(</span><span class="punctuation token">)</span> <span class="operator token">===</span> <span class="string token">"user-agent"</span><span class="punctuation token">)</span></code> {
      header.value = ua;
    }
  });
  return {requestHeaders: e.requestHeaders};
}

<code class="language-js">browser</code>.webRequest.onBeforeSendHeaders.addListener(
  rewriteUserAgentHeader,
  {urls: [targetPage]},
  ["blocking", "requestHeaders"]
);</pre>

<p>ここでは、リクエストヘッダが送信される直前に関数を実行するため {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}} イベントリスナを利用しています。</p>

<p>このリスナ関数は、<code>targetPage</code> <a href="/ja/Add-ons/WebExtensions/Match_patterns">パターン</a> に URL がマッチしたリクエストに対してのみ呼び出されます。 ここでも再び、<code>"blocking"</code> がオプションとして与えられていることに注意してください。また、<code>"requestHeaders"</code> もオプションで渡すことにより、送信予定のリクエストヘッダを含んだ配列がリスナ関数に渡されます。これらのオプションに関しては {{WebExtAPIRef("webRequest.onBeforeSendHeaders")}} で詳細を確認してください。</p>

<p>リスナ関数では、リクエストヘッダの配列から "User-Agent" ヘッダを探し、ヘッダの値を変数値 ua で置き換え、改変された配列を最後に返しています。この改変された配列は、やがてサーバへ送信されることとなります。</p>

<p>それでは実際に動かしてみましょう。<a href="http://useragentstring.com/">useragentstring.com</a> へアクセスし、自分のブラウザが Firefox と判定されることを確認します。ここで拡張機能をリロードし、<a href="http://useragentstring.com/">useragentstring.com</a> のページをリロードします。すると、先程 Firefox と判定されたのは Opera になっているはずです。</p>

<p>{{EmbedYouTube("SrSNS1-FIx0")}}</p>

<h2 id="Learn_more" name="Learn_more">より詳しく</h2>

<p> <code>webRequest</code> API でできることを詳しく知りたい場合は、<a href="/ja/Add-ons/WebExtensions/API/WebRequest"><code>webRequest</code> API のリファレンス</a> を参照してください。</p>
