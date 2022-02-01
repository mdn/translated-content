---
title: Request
slug: Web/API/Request
tags:
  - API
  - Fetch
  - Fetch API
  - Interface
  - Networking
  - Reference
  - request
translation_of: Web/API/Request
browser-compat: api.Request
---
<div>{{APIRef("Fetch API")}}</div>

<p><strong><code>Request</code></strong> は <a href="/ja/docs/Web/API/Fetch_API">Fetch API</a> のインターフェイスで、リソースのリクエストを表します。</p>

<p>新しい <code>Request</code> オブジェクトは {{domxref("Request.Request","Request()")}} コンストラクターを用いて生成することができますが、 <code>Request</code> オブジェクトは他の API 操作、例えばサービスワーカーの {{domxref("FetchEvent.request")}} などの結果として返されたものに遭遇することの方が多いでしょう。</p>

<h2 id="Constructor">コンストラクター</h2>

<dl>
 <dt>{{domxref("Request.Request","Request()")}}</dt>
 <dd>新しい <code>Request</code> オブジェクトを生成します。</dd>
</dl>

<h2 id="Properties">プロパティ</h2>

<dl>
 <dt>{{domxref("Request.body")}} {{readonlyInline}}</dt>
 <dd>body の中身を {{domxref("ReadableStream")}} として取り出すために使用されるシンプルなゲッターです。</dd>
 <dt>{{domxref("Request.bodyUsed")}} {{readonlyInline}}</dt>
 <dd><code>true</code> または <code>false</code> で、レスポンス中で本文が既に使用されたかどうかを示します。</dd>
 <dt>{{domxref("Request.cache")}} {{readonlyInline}}</dt>
 <dd>リクエストのキャッシュモード (<code>default</code>, <code>reload</code>, <code>no-cache</code> など) が入ります。</dd>
 <dt>{{domxref("Request.credentials")}} {{readonlyInline}}</dt>
 <dd>リクエストの認証情報 (<code>omit</code>, <code>same-origin</code>, <code>include</code> など) が入ります。既定値は <code>same-origin</code> です。</dd>
 <dt>{{domxref("Request.destination")}} {{ReadOnlyInline}}</dt>
 <dd>文字列で、リクエストの方向を示します。これはその種類のコンテンツがリクエストされることを示す文字列です。</dd>
 <dt>{{domxref("Request.headers")}} {{readonlyInline}}</dt>
 <dd>リクエストに関連付けられた {{domxref("Headers")}} オブジェクトが入ります。</dd>
 <dt>{{domxref("Request.integrity")}} {{readonlyInline}}</dt>
 <dd>リクエストの <a href="/ja/docs/Web/Security/Subresource_Integrity">subresource integrity</a> 値 (例えば <code>sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=</code>) が入ります。</dd>
 <dt>{{domxref("Request.method")}} {{readonlyInline}}</dt>
 <dd>リクエストメソッド (<code>GET</code>, <code>POST</code> など) が入ります。</dd>
 <dt>{{domxref("Request.mode")}} {{readonlyInline}}</dt>
 <dd>リクエストのモード ( <code>cors</code>, <code>no-cors</code>, <code>same-origin</code>, <code>navigate</code> など) が入ります。</dd>
 <dt>{{domxref("Request.redirect")}} {{readonlyinline}}</dt>
 <dd>リダイレクトをどう扱うかのモードが入ります。 <code>follow</code>, <code>error</code>, <code>manual</code> のいずれかです。</dd>
 <dt>{{domxref("Request.referrer")}} {{readonlyInline}}</dt>
 <dd>リクエストのリファラー (<code>client</code> など) が入ります。</dd>
 <dt>{{domxref("Request.referrerPolicy")}} {{readonlyInline}}</dt>
 <dd>リファラに関するポリシー (<code>no-referrer</code> など) が入ります。</dd>
 <dt>{{domxref("Request.url")}} {{readonlyInline}}</dt>
 <dd>リクエストの URL が入ります。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<dl>
 <dt>{{domxref("Request.arrayBuffer()")}}</dt>
 <dd>リクエスト本体を表す {{jsxref("ArrayBuffer")}} で解決するプロミスを返します。</dd>
 <dt>{{domxref("Request.blob()")}}</dt>
 <dd>リクエスト本体を表す {{domxref("Blob")}} で解決するプロミスを返します。</dd>
 <dt>{{domxref("Request.clone()")}}</dt>
 <dd>現在の <code>Request</code> オブジェクトのコピーを生成します。</dd>
 <dt>{{domxref("Request.formData()")}}</dt>
 <dd>リクエスト本体を表す {{domxref("FormData")}} で解決するプロミスを返します。</dd>
 <dt>{{domxref("Request.json()")}}</dt>
 <dd>リクエスト本体を表す {{domxref("JSON")}} で解決するプロミスを返します。</dd>
 <dt>{{domxref("Request.text()")}}</dt>
 <dd>リクエスト本体を表す {{domxref("USVString")}} (テキスト) で解決するプロミスを返します。</dd>
</dl>

<div class="note">
<p><strong>メモ</strong>: リクエスト本文の関数は 1 度しか呼び出せません。 2 回目以降は空の文字列または ArrayBuffer で解決します。</p>
</div>

<h2 id="Examples">例</h2>

<p>次のスニペットでは、<code>Request()</code> コンストラクターを使用して (スクリプトと同じディレクトリーにある画像ファイルのために) 新しい request を生成し、いくつかリクエストのプロパティ値を返しています。</p>

<pre class="brush: js">const request = new Request('https://www.mozilla.org/favicon.ico');

const url = request.url;
const method = request.method;
const credentials = request.credentials;
</pre>

<p>このリクエストは、下記のように <code>Request</code> オブジェクトを引数として {{domxref("WindowOrWorkerGlobalScope.fetch()")}} に渡すことで読み取ることができます。</p>

<pre class="brush: js">fetch(request)
  .then(response =&gt; response.blob())
  .then(blob =&gt; {
    image.src = URL.createObjectURL(blob);
  });</pre>

<p>以下のスニペットでは、 <code>Request()</code> コンストラクターにいくつかの初期化データと本文コンテンツを付けて、本文ペイロードを必要とする API リクエストのための新しいリクエストを生成します。</p>

<pre class="brush: js">const request = new Request('https://example.com', {method: 'POST', body: '{"foo": "bar"}'});

const url = request.url;
const method = request.method;
const credentials = request.credentials;
const bodyUsed = request.bodyUsed;
</pre>

<div class="note">
<p><strong>メモ:</strong> body の型は {{domxref("Blob")}}, {{domxref("BufferSource")}}, {{domxref("FormData")}}, {{domxref("URLSearchParams")}}, {{domxref("USVString")}} {{domxref("ReadableStream")}} のいずれかで、ペイロードにそのオブジェクトを文字列化するのに必要な JSON オブジェクトでも同様です。</p>
</div>

<p>すると <code>Request</code> オブジェクトを、例えば {{domxref("WindowOrWorkerGlobalScope.fetch()")}} 呼び出しの引数として渡すことで API リクエストを取得できて、レスポンスを取得できます。</p>

<pre class="brush: js">fetch(request)
  .then(response =&gt; {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('Something went wrong on api server!');
    }
  })
  .then(response =&gt; {
    console.debug(response);
    // ...
  }).catch(error =&gt; {
    console.error(error);
  });</pre>

<h2 id="Specifications">仕様書</h2>

{{Specifications}}

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Service_Worker_API">ServiceWorker API</a></li>
 <li><a href="/ja/docs/Web/HTTP/CORS">HTTP アクセス制御 (CORS)</a></li>
 <li><a href="/ja/docs/Web/HTTP">HTTP</a></li>
</ul>
