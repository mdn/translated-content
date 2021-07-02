---
title: XMLHttpRequest.send()
slug: Web/API/XMLHttpRequest/send
tags:
  - AJAX
  - API
  - HTTP リクエスト
  - Reference
  - XHR
  - XHR リクエスト
  - XMLHttpRequest
  - send
  - ウェブ
  - メソッド
translation_of: Web/API/XMLHttpRequest/send
---
<div>{{APIRef('XMLHttpRequest')}}</div>

<p><span class="seoSummary">{{domxref("XMLHttpRequest")}} の <code><strong>send()</strong></code> メソッドは、リクエストをサーバーに送信します。</span>リクエストが非同期の場合 (これが既定)、このメソッドはリクエストが送信されるとすぐに戻り、結果はイベントを用いて配信されます。リクエストが同期の場合、このメソッドはレスポンスが到着するまで戻りません。</p>

<p><code>send()</code> はリクエストの本文を示す引数を一つ受け取ることができます。これは主に {{HTTPMethod("PUT")}} のようなリクエストに使用されます。リクエストメソッドが {{HTTPMethod("GET")}} 又は {{HTTPMethod("HEAD")}} であれば、 <code>body</code> 引数は無視され、リクエストの本文は <code>null</code> に設定されます。</p>

<p>{{domxref("XMLHttpRequest.setRequestHeader", "setRequestHeader()")}} を使用して {{HTTPHeader("Accept")}} ヘッダーを設定しなかった場合、 <code>Accept</code> ヘッダーは <code>"*/*"</code> 型 (任意の型) が送信されます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><var>XMLHttpRequest</var>.send(<var>body</var>)
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><var>body</var> {{optional_inline}}</dt>
 <dd>XHR のリクエストの中で送られる本文データです。次のものが使用できます。
 <ul>
  <li>{{domxref("Document")}}: 送信前にシリアライズされている場合。</li>
  <li><code>BodyInit</code>: <a href="https://fetch.spec.whatwg.org/#bodyinit">Fetch の仕様書</a>によれば、 {{domxref("Blob")}}, {{domxref("BufferSource")}}, {{domxref("FormData")}}, {{domxref("URLSearchParams")}}, {{domxref("ReadableStream")}}, {{domxref("USVString")}} 型のオブジェクトが利用できます。</li>
 </ul>
 body に値が設定されていない場合、既定値の <code>null</code> が使用されます。</dd>
</dl>

<p>バイナリコンテンツの送信 (例えばファイルのアップロード) の最適な方法は、 {{domxref("ArrayBufferView")}} または {{domxref("Blob")}} と <code>send()</code> メソッドを組み合わせることです。</p>

<h3 id="Return_value" name="Return_value">返値</h3>

<p><code>undefined</code></p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">例外</th>
   <th scope="col">説明</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>InvalidStateError</code></td>
   <td>このリクエストに対してすでに <code>send()</code> が呼び出されているか、リクエストが完了している。</td>
  </tr>
  <tr>
   <td><code>NetworkError</code></td>
   <td>読み込むリソースの型が Blob であり、メソッドが <code>GET</code> ではない。</td>
  </tr>
 </tbody>
</table>

<h2 id="Example_GET" name="Example_GET">GET の例</h2>

<pre class="brush: js"><code>var xhr = new XMLHttpRequest();
xhr.open('GET', '/server', true);

xhr.onload = function () {
  // リクエストの終了。ここの処理を実行します。
};

xhr.send(null);
// xhr.send('string');
</code>// <code>xhr.send(new Blob());
// xhr.send(new Int8Array());
// xhr.send(document);</code>
</pre>

<h2 id="Example_POST" name="Example_POST">POST の例</h2>

<pre class="brush: js"><code>var xhr = new XMLHttpRequest();
xhr.open("POST", '/server', true);

//リクエストに従って正しいヘッダー情報を送信してください
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.onreadystatechange = function() { // 状態が変化すると関数が呼び出されます。
    if (this.readyState === XMLHttpRequest.DONE &amp;&amp; this.status === 200) {
        // リクエストの終了。ここの処理を実行します。
    }
}
xhr.send("foo=bar&amp;lorem=ipsum");
// xhr.send(new Int8Array());
// xhr.send(document);</code>
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('XMLHttpRequest', '#the-send()-method', 'send()')}}</td>
   <td>{{Spec2('XMLHttpRequest')}}</td>
   <td>WHATWG living standard</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<div>{{Compat("api.XMLHttpRequest.send")}}</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest">XMLHttpRequest の使用</a></li>
 <li><a href="/ja/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest">XMLHttpRequest における HTML の扱い</a></li>
</ul>
