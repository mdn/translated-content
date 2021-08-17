---
title: Response.arrayBuffer()
slug: Web/API/Response/arrayBuffer
tags:
  - API
  - ArrayBuffer
  - Fetch
  - Method
  - Reference
  - Response
translation_of: Web/API/Response/arrayBuffer
original_slug: Web/API/Body/arrayBuffer
browser-compat: api.Response.arrayBuffer
---
<div>{{APIRef("Fetch")}}</div>

<p><strong><code>arrayBuffer()</code></strong> は {{domxref("Response")}} インターフェイスのメソッドで、リクエストの本文を読み取り、 {{jsxref("ArrayBuffer")}} で解決されるプロミスを返します。</p>

<h2 id="Syntax">構文</h2>

<pre class="brush: js"><em>response</em>.arrayBuffer().then(function(<em>buffer</em>) {
  // buffer を使用した何らかの処理
});</pre>

<h3 id="Parameters">引数</h3>

<p>なし。</p>

<h3 id="Return_value">返値</h3>

<p>{{jsxref("ArrayBuffer")}} で解決されるプロミス。</p>

<h2 id="Examples">例</h2>

<h3 id="Playing_music">音楽の演奏</h3>

<p><a href="https://mdn.github.io/fetch-examples/fetch-array-buffer/">fetch array buffer のライブ</a>では、Play ボタンを配置して、押下されると <code>getData()</code> 関数が実行されるようになっています。 再生する前に音声ファイル全体をダウンロードすることに注意してください。ダウンロード中に演奏を開始したい (つまりストリーム再生したい) 場合は、次のように {{domxref("HTMLAudioElement")}} を使いましょう。</p>

<pre class="brush: js">new Audio("music.ogg").play();
</pre>

<p><code>getData()</code> 関数内では、{{domxref("Request.Request","Request()")}} コンストラクターを使用して新しいリクエストを作成し、それを使用して OGG 音声トラックを読み取ります。 また、{{domxref("BaseAudioContext/createBufferSource", "AudioContext.createBufferSource")}} を使用して、音声バッファーソースを作成します。 読み取りが成功したら、<code>arrayBuffer()</code> を使用してレスポンスから {{jsxref("ArrayBuffer")}} を読み取り、 {{domxref("BaseAudioContext/decodeAudioData", "AudioContext.decodeAudioData()")}} を使用して音声データをデコードし、デコードされたデータを音声バッファーソースのバッファー（<code>source.buffer</code>）として設定し、それから {{domxref("BaseAudioContext/destination", "AudioContext.destination")}} にソースを接続します。</p>

<p><code>getData()</code> の実行が完了すると、<code>start(0)</code> で音声ソースの再生を開始し、それから再生中に再度再生ボタンをクリックできないようにするために（これはしばしばエラーの原因になります）ボタンを無効化しています。</p>

<pre class="brush: js">function getData() {
  source = audioCtx.createBufferSource();

  var myRequest = new Request('viper.ogg');

  fetch(myRequest).then(function(response) {
    return response.arrayBuffer();
  }).then(function(buffer) {
    audioCtx.decodeAudioData(buffer, function(decodedData) {
      source.buffer = decodedData;
      source.connect(audioCtx.destination);
    });
  });
};

// wire up buttons to stop and play audio

play.onclick = function() {
  getData();
  source.start(0);
  play.setAttribute('disabled', 'disabled');
}</pre>

<h3 id="Reading_files">ファイルを読む</h3>

<p>{{domxref("Response.Response","Response()")}} コンストラクターは、 {{domxref("File")}} と {{domxref("Blob")}} を受け入れるため、 {{domxref("File")}} を他の形式に読み込むために使用することができます。</p>

<pre class="brush: js">function readFile(file) {
  return new Response(file).arrayBuffer();
}
</pre>

<pre
  class="brush: html">&lt;input type="file" onchange="readFile(this.files[0])"&gt;</pre>

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
