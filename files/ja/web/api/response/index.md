---
title: Response
slug: Web/API/Response
tags:
  - API
  - Experimental
  - Fetch
  - Fetch API
  - Interface
  - Reference
  - Response
browser-compat: api.Response
translation_of: Web/API/Response
---
<div>{{APIRef("Fetch API")}}</div>

<p><span class="seoSummary"><strong><code>Response</code></strong> は <a href="/ja/docs/Web/API/Fetch_API">Fetch API</a> のインターフェイスで、リクエストのレスポンスを表します。</span></p>

<p><code>Response</code> オブジェクトは {{domxref("Response.Response()")}} コンストラクターを用いて生成することができますが、他の API 操作の結果として返される <code>Response</code> オブジェクトに出会う可能性が高いでしょう。例えば、サービスワーカーの {{domxref("Fetchevent.respondWith")}} や、単純な {{domxref("WindowOrWorkerGlobalScope.fetch()")}} などです。</p>

<h2 id="Constructor">コンストラクター</h2>

<dl>
 <dt>{{domxref("Response.Response","Response()")}}</dt>
 <dd>新しい <code>Response</code> オブジェクトを返します。</dd>
</dl>

<h2 id="Properties">プロパティ</h2>

<dl>
 <dt>{{domxref("Response.body")}} {{readonlyInline}}</dt>
 <dd>本文のコンテンツの {{domxref("ReadableStream")}} です。</dd>
 <dt>{{domxref("Response.bodyUsed")}} {{readonlyInline}}</dt>
 <dd>本文がレスポンスで使用されたかどうかを定義する論理値が格納されます。</dd>
 <dt>{{domxref("Response.headers")}} {{readonlyinline}}</dt>
 <dd>レスポンスに関連した {{domxref("Headers")}} オブジェクトが入ります。</dd>
 <dt>{{domxref("Response.ok")}} {{readonlyinline}}</dt>
 <dd>レスポンスが成功 (<code>200</code>–<code>299</code> の範囲のステータス) したか否かを通知する論理値が入ります。</dd>
 <dt>{{domxref("Response.redirected")}} {{ReadOnlyInline}}</dt>
 <dd>レスポンスがリダイレクトの結果である (つまり、その URL リストには複数のエントリーがある) かどうかを示します。</dd>
 <dt>{{domxref("Response.status")}} {{readonlyinline}}</dt>
 <dd>このレスポンスのステータスコードを返します (成功ならば <code>200</code> になります)。</dd>
 <dt>{{domxref("Response.statusText")}} {{readonlyinline}}</dt>
 <dd>ステータスコードに対応したステータスメッセージが入ります (たとえば <code>200</code> ならば <code>OK</code>)。</dd>
 <dt>{{domxref("Response.trailers")}}</dt>
 <dd>{{jsxref("Promise")}} であり、 {{domxref("Headers")}} オブジェクトを返します。これは {{domxref("Response.headers")}} にある HTTP の {{HTTPHeader("Trailer")}} ヘッダーの値です。</dd>
 <dt>{{domxref("Response.type")}} {{readonlyinline}}</dt>
 <dd>レスポンスの種類です。 (例えば <code>basic</code>, <code>cors</code>)</dd>
 <dt>{{domxref("Response.url")}} {{readonlyinline}}</dt>
 <dd>レスポンスのURLを返します。</dd>
</dl>

<h2 id="Methods">メソッド</h2>

<dl>
 <dt>{{domxref("Response.arrayBuffer()")}}</dt>
 <dd>レスポンスの本文を表す {{jsxref("ArrayBuffer")}} で解決するプロミスを返します。</dd>
 <dt>{{domxref("Response.blob()")}}</dt>
 <dd>レスポンスの本文を表す {{domxref("Blob")}} で解決するプロミスを返します。</dd>
 <dt>{{domxref("Response.clone()")}}</dt>
 <dd><code>Response</code> オブジェクトの複製を生成します。</dd>
 <dt>{{domxref("Response.error()")}}</dt>
 <dd>ネットワークエラーに関連した新しい <code>Response</code> オブジェクトを返します。</dd>
 <dt>{{domxref("Response.formData()")}}</dt>
 <dd>レスポンスの本文を表す {{domxref("FormData")}} で解決するプロミスを返します。</dd>
 <dt>{{domxref("Response.json()")}}</dt>
 <dd>レスポンスの本文のテキストを {{jsxref("JSON")}} として解釈した結果で解決するプロミスを返します。</dd>

 <dt>{{domxref("Response.redirect()")}}</dt>
 <dd>異なる URL で新しい response を生成します。</dd>
 <dt>{{domxref("Response.text()")}}</dt>
 <dd>レスポンスの本文のテキスト表現で解決するプロミスを返します。</dd>
</dl>


<h2 id="Examples">例</h2>

<h3 id="Fetching_an_image">画像のフェッチ</h3>

<p><a href="https://github.com/mdn/fetch-examples/tree/master/basic-fetch">basic fetch example</a> (<a href="https://mdn.github.io/fetch-examples/basic-fetch/">run example live</a>) では image を取得するために単純な <code>fetch()</code> を使用し、それを {{htmlelement("img")}} タグの中に入れて表示しています。<code>fetch()</code> はプロミスを返し、これはこのリソースフェッチ捜査に関連付けられた <code>Response</code> オブジェクトで解決します。</p>

<p>画像をリクエストするとき、レスポンスに正しい MIME タイプを設定するために、{{domxref("Response.blob")}} を実行する必要があることに注意してください。</p>

<pre class="brush: js">const image = document.querySelector('.my-image');
fetch('flowers.jpg')
.then(response =&gt; response.blob())
.then(blob =&gt; {
  const objectURL = URL.createObjectURL(blob);
  image.src = objectURL;
});</pre>

<p>{{domxref("Response.Response()")}} コンストラクターを使用して、独自の <code>Response</code> オブジェクトを生成することもできます。</p>

<pre class="brush: js">const response = new Response();</pre>

<h3 id="An_Ajax_Call">Ajax 呼び出し</h3>

<p>ここで JSON 文字列を生成する PHP のプログラムファイルを呼び出し、結果として JSON の値を表示します。簡単なエラーハンドリングも含んでいます。</p>

<pre class="brush: js">// Function to do an Ajax call
const doAjax = async () =&gt; {
  const response = await fetch('Ajax.php'); // Generate the Response object
  if (response.ok) {
    const jsonValue = await response.json(); // Get JSON value from the response body
    return Promise.resolve(jsonValue);
  } else {
    return Promise.reject('*** PHP file not found');
  }
}

// Call the function and output value or error message to console
doAjax().then(console.log).catch(console.log);
</pre>

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
