---
title: Alt-Svc
slug: Web/HTTP/Headers/Alt-Svc
tags:
  - HTTP
  - HTTP Header
  - NeedsCompatTable
  - Reference
translation_of: Web/HTTP/Headers/Alt-Svc
---
<div>{{HTTPSidebar}}</div>

<p><strong><code>Alt-Svc</code></strong> は HTTP のレスポンスヘッダーで、同じリソースに到達できる代替サービスを宣伝するために使用します。 代替サービスは、プロトコル/ホスト/ポートの組み合わせによって定義します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Alt-Svc: clear
Alt-Svc: <var>&lt;protocol-id&gt;</var>=<em>&lt;alt-authority&gt;</em>; ma=<var>&lt;max-age&gt;</var>
Alt-Svc: <var>&lt;protocol-id&gt;</var>=<em>&lt;alt-authority&gt;</em>; ma=<var>&lt;max-age&gt;</var>; persist=1</pre>

<dl>
 <dt><code>clear</code></dt>
 <dd>特別な値 <code>clear</code> は、そのオリジンのすべての代替を無効にすることをオリジンが要求することを示します。</dd>
 <dt><code>&lt;protocol-id&gt;</code></dt>
 <dd>{{Glossary("ALPN")}} プロトコル識別子。 例には、HTTP/2 の h2 および HTTP/3 プロトコルのドラフト 25 の h3-25 が含まれています。</dd>
 <dt><code>&lt;alt-authority&gt;</code></dt>
 <dd>任意のホストのオーバーライド、コロン、および必須のポート番号で構成される代替機関を指定する引用符付きの文字列。</dd>
 <dt><code>ma=&lt;max-age&gt;</code>{{Optional_Inline}}</dt>
 <dd>代替サービスが新鮮であると見なす秒数。 省略した場合のデフォルトは24時間です。 代替サービスのエントリは、最大で <em>&lt;max-age&gt;</em> から（{{ httpheader("Age") }} ヘッダーからの）レスポンスの経過時間を差し引いた秒数までキャッシュできます。 キャッシュされたエントリが期限切れになると、クライアントは新しい接続にこの代替サービスを使用できなくなります。</dd>
 <dt><code>persist=1</code>{{Optional_Inline}}</dt>
 <dd>通常、キャッシュされた代替サービスエントリは、ネットワーク構成の変更時にクリアされます。 persist=1 パラメータを使用すると、そのような変更によってエントリが削除されなくなります。</dd>
</dl>

<p>区切り文字としてカンマを使用して、単一の <code>Alt-Svc</code> ヘッダーで複数のエントリを指定できます。 その場合、早期のエントリーがより望ましいと考えられます。</p>

<h2 id="Example" name="Example">例</h2>

<pre class="notranslate">Alt-Svc: h2=":443"; ma=2592000;
Alt-Svc: h2=":443"; ma=2592000; persist=1
Alt-Svc: h2="alt.example.com:443", h2=":443"
Alt-Svc: h3-25=":443"; ma=3600, h2=":443"; ma=3600</pre>

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
   <td>{{RFC(7838)}}</td>
   <td><span class="spec-RFC">IETF RFC</span></td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.Alt-Svc")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web">ウェブ上のリソースの識別</a></li>
</ul>
