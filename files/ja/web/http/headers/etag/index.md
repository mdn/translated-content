---
title: ETag
slug: Web/HTTP/Headers/ETag
tags:
  - HTTP
  - Reference
  - ヘッダー
  - リファレンス
  - レスポンス
  - レスポンスヘッダー
translation_of: Web/HTTP/Headers/ETag
---
<div>{{HTTPSidebar}}</div>

<p><strong><code>ETag</code></strong> は HTTP のレスポンスヘッダーで、リソースの特定バージョンの識別子です。ウェブサーバーは、コンテンツが変更されていない場合はレスポンス全体を再送する必要がないので、キャッシュがより効率的になり通信帯域を節約することができます。加えて、 ETag はリソースが同時に更新されて互いを上書きすること (<a href="#Caching_of_unchanged_resources">「空中衝突」</a>) を防ぐのに役立ちます。</p>

<p>指定された URL のリソースが変更された場合は、新しい <code>Etag</code> 値を生成する必要があります。したがって Etags はフィンガープリントに似ており、一部のサーバーでの追跡目的でも使用される可能性があります。これらを比較することで、リソースの2つの表現が同じかどうかを素早く判断できますが、トラッキングサーバーによって無限に保持されるように設定することもできます。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">ヘッダー種別</th>
   <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
   <td>いいえ</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">ETag: W/"&lt;etag_value&gt;"
ETag: "&lt;etag_value&gt;"
</pre>

<h2 id="Directives" name="Directives">ディレクティブ</h2>

<dl>
 <dt><code>W/</code> {{optional_inline}}</dt>
 <dd><code>'W/'</code> (大文字) は<a href="/ja/docs/Web/HTTP/Conditional_requests#Weak_validation">弱いバリデーター</a>を使用することを示します。弱い ETag は生成が簡単ですが、比較にはあまり役立ちません。強力なバリデーターは比較には理想的ですが、効率的に生成するのはとても困難です。同じリソースを表現する2つの弱い <code>Etag</code> の値があった場合、意味的には同等ですが、バイト単位では同じではない可能性があります。すなわち、弱い ETag は<a href="/ja/docs/Web/HTTP/Headers/Accept-Ranges">バイト範囲指定のリクエスト</a>が行われたときにキャッシュされませんが、強い ETag は範囲指定のリクエストもキャッシュします。</dd>
 <dt>"&lt;etag_value&gt;"</dt>
 <dd>要求されたリソースを一意に表すエンティティタグです。これは二重引用符で囲まれた ASCII 文字列であり、 <code>"675af34563dc-tr34"</code>のような形です。 <code>ETag</code> 値が生成される方法は指定されていません。コンテンツのハッシュ、最終更新タイムスタンプのハッシュ、単なるリビジョン番号などがよく使用されます。たとえば、 MDN は Wiki 記事コンテンツのハッシュを使用しています。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<pre>ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"</pre>

<h3 id="Avoiding_mid-air_collisions" name="Avoiding_mid-air_collisions">空中衝突の回避</h3>

<p><code>ETag</code> と {{HTTPHeader("If-Match")}} ヘッダの助けを借りて、編集の空中衝突を検出することができます。</p>

<p>たとえば、 MDN を編集する場合、現在の Wiki コンテンツのハッシュが算出され、そのレスポンスで <code>Etag</code> に入れられます。</p>

<pre>ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"</pre>

<p>Wiki ページに変更を保存 (データの投稿) するとき、 {{HTTPMethod("POST")}} リクエストには、 {{HTTPHeader("If-Match")}} ヘッダーに <code>ETag</code> 値を入れて、新しいかどうかをチェックします。</p>

<pre>If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"</pre>

<p>ハッシュが一致しない場合は、文書が途中で編集されたことを意味し、 {{HTTPStatus("412")}} <code> Precondition Failed</code> エラーが発生します。</p>

<h3 id="Caching_of_unchanged_resources" name="Caching_of_unchanged_resources">変更されていないリソースのキャッシュ</h3>

<p>もう一つの <code>ETag</code> ヘッダーの典型的な使用例として、変更されていないリソースをキャッシュすることがあります。ユーザーが (<code>ETag</code> が設定されている) 指定された URL を再度訪問した時、それが<em>古くなったもの</em> (古すぎて使用できない) であった場合、クライアントは {{HTTPHeader("If-None-Match")}} ヘッダー欄で <code>ETag</code> の値を送ります。</p>

<pre>If-None-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"</pre>

<p>サーバーは、クライアントの <code>ETag</code> (<code>If-None-Match</code> で送信されたもの) を現在のバージョンの <code>ETag</code> と比較し、両方の値が一致する (つまりリソースは変更されていない) 場合、サーバーは {{HTTPStatus("304")}} <code>Not Modified</code> ステータスを本文なしで返送し、キャッシュされたレスポンスのバージョンがまだ使用可能 (新しい) であることをクライアントに通知します。</p>

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
   <td>{{RFC("7232", "ETag", "2.3")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.ETag")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPHeader("If-Match")}}</li>
 <li>{{HTTPHeader("If-None-Match")}}</li>
 <li>{{HTTPStatus("304")}}<code> Not Modified</code></li>
 <li>{{HTTPStatus("412")}}<code> Precondition Failed</code></li>
 <li>
  <p><a href="https://www.w3.org/1999/04/Editing/">W3C Note: Editing the Web – Detecting the Lost Update Problem Using Unreserved Checkout</a></p>
 </li>
</ul>
