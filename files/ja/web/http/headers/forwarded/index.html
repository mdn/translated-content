---
title: Forwarded
slug: Web/HTTP/Headers/Forwarded
tags:
  - HTTP
  - HTTP ヘッダー
  - Reference
  - ヘッダー
  - リクエストヘッダー
translation_of: Web/HTTP/Headers/Forwarded
---
<div>{{HTTPSidebar}}</div>

<p><strong><code>Forwarded</code></strong> ヘッダーは、プロキシが要求のパスに含まれているときに変更または失われた、プロキシサーバーのクライアント側の情報が含まれます。</p>

<p>このヘッダーの代替で、事実上の標準となっているものは {{HTTPHeader("X-Forwarded-For")}}, {{HTTPHeader("X-Forwarded-Host")}}, {{HTTPHeader("X-Forwarded-Proto")}} ヘッダーです。</p>

<p>このヘッダーは、デバッグ、統計、ロケーション依存コンテンツの生成に使用され、クライアントの IP アドレスなどの機密情報を公開します。したがって、このヘッダーを展開する際には、ユーザーのプライバシーを念頭に置く必要があります。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">ヘッダー種別</th>
   <td>{{Glossary("Request header", "リクエストヘッダー")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
   <td>いいえ</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">Forwarded: by=&lt;identifier&gt;; for=&lt;identifier&gt;; host=&lt;host&gt;; proto=&lt;http|https&gt;
</pre>

<h2 id="Directives" name="Directives">ディレクティブ</h2>

<dl>
 <dt>&lt;identifier&gt;</dt>
 <dd>プロキシの使用時に変更または失われた情報を公開する識別子。これは次のいずれかです。
 <ul>
  <li>IP アドレス (v4 又は v6、任意でポート番号付き、 ipv6 は引用符と角括弧で囲まれます)</li>
  <li>難読化された識別子 ("_hidden" や "_secret" など)</li>
  <li>又は先行するエンティティが不明な場合 (及び依然として要求の転送が行われたことを示したい場合) は "unknown"</li>
 </ul>
 </dd>
 <dt>by=&lt;identifier&gt;</dt>
 <dd>要求がプロキシサーバーに入ってきたインターフェイス。</dd>
 <dt>for=&lt;identifier&gt;</dt>
 <dd>要求を発行したクライアントと、その後のプロキシチェーン内のプロキシ。</dd>
 <dt>host=&lt;host&gt;</dt>
 <dd>プロキシから受信したときの {{HTTPHeader("Host")}} リクエストヘッダー。</dd>
 <dt>proto=&lt;http|https&gt;</dt>
 <dd>
 <p>そのプロトコルが要求の作成に使用されたか (ふつうは "http" 又は "https")。</p>
 </dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_the_Forwarded_header" name="Using_the_Forwarded_header"><code>Forwarded</code> ヘッダーの使用</h3>

<pre>Forwarded: for="_mdn"

# 大文字小文字の区別なし
Forwarded: For="[2001:db8:cafe::17]:4711"

# セミコロン区切り
Forwarded: for=192.0.2.60; proto=http; by=203.0.113.43

# 複数の値をコンマで区切って追加可能
Forwarded: for=192.0.2.43, for=198.51.100.17
</pre>

<h3 id="Transitioning_from_X-Forwarded-For_to_Forwarded" name="Transitioning_from_X-Forwarded-For_to_Forwarded"><code>X-Forwarded-For</code> から <code>Forwarded</code> への移行</h3>

<p>アプリケーション、サーバー、プロキシが標準化された <code>Forwarded</code> ヘッダーに対応している場合は、 {{HTTPHeader("X-Forwarded-For")}} を置き換えることができます。なお、 IPv6 アドレスは、 <code>Forwarded</code> では引用符と角括弧で囲む必要があります。</p>

<pre>X-Forwarded-For: 123.34.567.89
Forwarded: for=123.34.567.89

X-Forwarded-For: 192.0.2.43, 2001:db8:cafe::17
Forwarded: for=192.0.2.43, for="[2001:db8:cafe::17]"
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
   <td>{{RFC("7239", "Forwarded", "4")}}</td>
   <td>Forwarded HTTP Extension</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("http.headers.Forwarded")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPHeader("X-Forwarded-For")}}</li>
 <li>{{HTTPHeader("X-Forwarded-Host")}}</li>
 <li>{{HTTPHeader("X-Forwarded-Proto")}}</li>
 <li>{{HTTPHeader("Via")}} – 接続しているクライアントではなく、プロキシ自身についての情報を提供します。</li>
</ul>
