---
title: Accept-Encoding
slug: Web/HTTP/Headers/Accept-Encoding
tags:
  - Content Negotiation
  - HTTP
  - HTTP Header
  - Reference
  - Request header
translation_of: Web/HTTP/Headers/Accept-Encoding
---
<div>{{HTTPSidebar}}</div>

<p><strong><code>Accept-Encoding</code></strong> は HTTP のリクエストヘッダーで、コンテンツのエンコーディング、ふつうは圧縮アルゴリズムのどれをクライアントが理解することができるかを示します。 <a href="/ja/docs/Web/HTTP/Content_negotiation">コンテンツ交渉</a>を使用して、サーバーは提案されたものから一つを選択して使用し、 {{HTTPHeader("Content-Encoding")}} レスポンスヘッダーを使用してクライアントに選択結果を知らせます。</p>

<p>クライアントとサーバーが同じ圧縮アルゴリズムに対応していた場合でも、 identity の値が受け付けられる場合は、サーバーはレスポンスの本文を圧縮しないことを選択する場合があります。これには主に二つの場合があります。</p>

<ul>
 <li>送信されるデータがすでに圧縮されており、二回目の圧縮によって送信するデータが小さくならないこと。一部の画像フォーマットで起こる発生する可能性があります。</li>
 <li>サーバーが過負荷になってもり、圧縮に必要な計算上のオーバーヘッドの余裕がない場合。通常、 Microsoft はサーバーが計算能力の80％以上を使用している場合、圧縮しないことを推奨しています。</li>
</ul>

<p><code>identity</code> の値、つまりエンコードをしないということは、 <code>identity;q=0</code> または <code>*;q=0</code> で <code>identity</code> とは別な値が明確に設定されていない限り、サーバーは{{HTTPStatus("406")}} <code>Not Acceptable</code> エラーを返してはいけません。</p>

<div class="note"><strong>注:</strong>

<ul>
 <li>
  <p>IANA レジストリが<a class="external" href="http://www.iana.org/assignments/http-parameters/http-parameters.xml#http-parameters-1">公式なコンテンツエンコーディングの完全なリスト</a>を管理しています。</p>
 </li>
 <li>他にも <code>bzip</code> および <code>bzip2</code> の二種類のエンコーディングが使用されることがありますが、標準ではありません。これはこれら二つの UNIX プログラムで使用されているアルゴリズムを実装しています。なお、前者は特許ライセンスの問題で開発終了しています。</li>
</ul>
</div>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">ヘッダー種別</th>
   <td>{{Glossary("Request header", "リクエストヘッダー")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
   <td>はい</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Accept-Encoding: gzip
Accept-Encoding: compress
Accept-Encoding: deflate
Accept-Encoding: br
Accept-Encoding: identity
Accept-Encoding: *

// 複数のアルゴリズムを {{Glossary("Quality Values", "quality value")}} で重み付けする構文:
Accept-Encoding: deflate, gzip;q=1.0, *;q=0.5</pre>

<h2 id="Directives" name="Directives">ディレクティブ</h2>

<dl>
 <dt><code>gzip</code></dt>
 <dd><a class="external external-icon" href="http://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77">Lempel-Ziv coding</a> (LZ77) と32ビット CRC を用いた圧縮形式です。</dd>
 <dt><code>compress</code></dt>
 <dd><a class="external external-icon" href="http://en.wikipedia.org/wiki/LZW">Lempel-Ziv-Welch</a> (LZW) アルゴリズムを用いた圧縮形式です。</dd>
 <dt><code>deflate</code></dt>
 <dd><a class="external external-icon" href="http://en.wikipedia.org/wiki/Zlib">zlib</a> 構造体と <a class="external external-icon" href="http://en.wikipedia.org/wiki/DEFLATE"><em>deflate</em></a> 圧縮アルゴリズムを用いた圧縮形式です。</dd>
 <dt><code>br</code></dt>
 <dd><a class="external external-icon" href="https://en.wikipedia.org/wiki/Brotli">Brotli</a> アルゴリズムを用いた圧縮形式です。</dd>
 <dt><code>identity</code></dt>
 <dd>等価関数を示します (つまり、圧縮も変更もありません)。この値は存在しなくても、常に受け付け可能とみなされます。</dd>
 <dt><code>*</code></dt>
 <dd>ヘッダーに挙げられていないあらゆるコンテンツエンコーディングに一致します。これはこのヘッダーがない場合の既定値です。すべてのアルゴリズムに対応しているという意味ではありません。評価される設定がないだけです。</dd>
 <dt><code>;q=</code> (q 値の重みづけ)</dt>
 <dd><em>weight</em> と呼ばれる相対的な<a href="/ja/docs/Glossary/Quality_values">品質値</a>を使用して表現される設定の順序づけをするための任意の値です。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<pre class="notranslate">Accept-Encoding: gzip

Accept-Encoding: gzip, compress, br

Accept-Encoding: br;q=1.0, gzip;q=0.8, *;q=0.1
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">題名</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{RFC("7231", "Accept-Encoding", "5.3.4")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Context</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.Accept-Encoding")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>HTTP <a href="/ja/docs/Web/HTTP/Content_negotiation">コンテンツ交渉</a></li>
 <li>コンテンツ交渉の結果を伴うヘッダー: {{HTTPHeader("Content-Encoding")}}</li>
 <li>他の同様のヘッダー: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Charset")}}, {{HTTPHeader("Accept-Language")}}</li>
</ul>
