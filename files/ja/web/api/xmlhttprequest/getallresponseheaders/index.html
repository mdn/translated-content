---
title: XMLHttpRequest.getAllResponseHeaders()
slug: Web/API/XMLHttpRequest/getAllResponseHeaders
tags:
  - API
  - Fetch Headers
  - Get Headers
  - HTTP
  - HTTP Header
  - Method
  - Reference
  - Response Header
  - XHR
  - XMLHttpRequest
  - getAllResponseHeaders
translation_of: Web/API/XMLHttpRequest/getAllResponseHeaders
---
<div>{{APIRef('XMLHttpRequest')}}</div>

<p><span class="seoSummary">{{domxref("XMLHttpRequest")}} の <strong><code>getAllResponseHeaders()</code></strong> メソッドは、すべてのレスポンスヘッダーを {{Glossary('CRLF')}} で区切った文字列として返し、レスポンスを受信していない場合は <code>null</code> を返します。</span>ネットワークエラーが発生した場合は、空文字列が返されます。</p>

<div class="note">
<p><strong>注:</strong> マルチパートリクエストでは、これはリクエストの元のチャンネルではなく、<em>現在の</em>部分を返します。</p>
</div>

<h2 id="構文">構文</h2>

<pre class="syntaxbox notranslate">var headers = <var>XMLHttpRequest</var>.getAllResponseHeaders();</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<p>なし。</p>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>{{Glossary('CRLF')}} で区切ったすべてのレスポンスヘッダー (フィールド名が <code>Set-Cookie</code> または <code>Set-Cookie2</code> のものを除く) を表す {{domxref("ByteString")}}、またはレスポンスを受信していなければ <code>null</code> です。ネットワークエラーが発生した場合は、空文字列が返されます。</p>

<p>生のヘッダー文字列がどのように見えるかの例です。</p>

<pre class="notranslate"><span class="punctuation token">date: Fri, 08 Dec 2017 21:04:30 GMT\r\n
content-encoding: gzip\r\n
x-content-type-options: nosniff\r\n
server: meinheld/0.6.1\r\n
x-frame-options: DENY\r\n
content-type: text/html; charset=utf-8\r\n
connection: keep-alive\r\n
strict-transport-security: max-age=63072000\r\n
vary: Cookie, Accept-Encoding\r\n
content-length: 6502\r\n
x-xss-protection: 1; mode=block\r\n</span></pre>

<p>各行はキャリッジリターンとラインフィード文字 (<code>\r\n</code>) の両方で終わります。これらはそれぞれのヘッダーを区切る基本的なデリミターです。</p>

<div class="blockIndicator note">
<p><strong>注</strong>: 最近のブラウザーでは、ヘッダー名は最新の仕様書にあるように、すべて小文字で返されます。</p>
</div>

<h2 id="Example" name="Example">例</h2>

<p>この例では、リクエストの {{event("readystatechange")}} イベントハンドラーである {{domxref("XMLHttpRequest.onreadystatechange")}} の中でヘッダーを調べます。このコードは生のヘッダー文字列を取得する方法、またそれを個別のヘッダーの配列に変換する方法、そして配列からヘッダー名とその値のマップを生成する方法を示しています。</p>

<pre class="brush: html notranslate">var request = new XMLHttpRequest();
request.open("GET", "foo.txt", true);
request.send();

request.onreadystatechange = function() {
  if(this.readyState == this.HEADERS_RECEIVED) {

    // 生のヘッダー文字列を取得
    var headers = request.getAllResponseHeaders();

    // ヘッダー文字列を個別のヘッダーの
    // 配列に変換
    var arr = headers.trim().split(/[\r\n]+/);

    // ヘッダー名と値のマップを生成
    var headerMap = {};
    arr.forEach(function (line) {
      var parts = line.split(': ');
      var header = parts.shift();
      var value = parts.join(': ');
      headerMap[header] = value;
    });
  }
}</pre>

<p>いったんこれを行えば、次のようなことができます。</p>

<pre class="brush: js notranslate">var contentType = headerMap["content-type"];</pre>

<p>これは {{httpheader("Content-Type")}} ヘッダーの値を変数 <code>contentType</code> の中に入れます。</p>

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
   <td>{{SpecName('XMLHttpRequest', '#the-getallresponseheaders()-method', 'getAllResponseHeaders()')}}</td>
   <td>{{Spec2('XMLHttpRequest')}}</td>
   <td>WHATWG living standard</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>{{Compat("api.XMLHttpRequest.getAllResponseHeaders")}}</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest">XMLHttpRequest の使用</a></li>
 <li>リクエストヘッダーの設定: {{domxref("XMLHttpRequest.setRequestHeader", "setRequestHeader()")}}</li>
</ul>
