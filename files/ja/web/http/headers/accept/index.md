---
title: Accept
slug: Web/HTTP/Headers/Accept
tags:
  - HTTP
  - HTTP Header
  - Reference
  - Request header
translation_of: Web/HTTP/Headers/Accept
---
<div>{{HTTPSidebar}}</div>

<p>HTTP の <strong><code>Accept</code></strong> リクエストヘッダーは、クライアントが理解できるコンテンツタイプを <a href="/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types">MIME タイプ</a>で伝えます。 <a href="/ja/docs/Web/HTTP/Content_negotiation">コンテンツネゴシエーション</a>を使用して、サーバーは提案のうちの一つを選択し、それを使用してクライアントに {{HTTPHeader("Content-Type")}} レスポンスヘッダーで選択を伝えます。ブラウザーはリクエストを行う場面に応じて適切な値をこのヘッダーに設定します。 CSS スタイルシートを取得するときは、画像、動画、スクリプトを取得するときとは異なる値をリクエストで設定します。</p>

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
  <tr>
   <th scope="row">{{Glossary("CORS-safelisted request header", "CORS セーフリストリクエストヘッダー")}}</th>
   <td>はい、ただし、値に <em>CORS-unsafe リクエストヘッダーバイト</em>、 0x00-0x1F (0x09 (HT) を除く)、<code>"():&lt;&gt;?@[\]{}</code>、0x7F (DEL) を含むことができないという追加の制限があります。</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Accept: &lt;MIME_type&gt;/&lt;MIME_subtype&gt;
Accept: &lt;MIME_type&gt;/*
Accept: */*

// {{glossary("quality values", "重み値")}}の構文によって重みづけされた複数の種別
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, image/webp, */*;q=0.8
</pre>

<h2 id="Directives" name="Directives">ディレクティブ</h2>

<dl>
 <dt><code>&lt;MIME_type&gt;/&lt;MIME_subtype&gt;</code></dt>
 <dd>単一の詳細な <a href="/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types">MIME タイプ</a>、例えば <code>text/html</code> です。</dd>
 <dt><code>&lt;MIME_type&gt;/*</code></dt>
 <dd>MIME タイプですが、サブタイプがありません。 <code>image/*</code> は <code>image/png</code>, <code>image/svg</code>, <code>image/gif</code> 及びその他の画像タイプに一致します。</dd>
 <dt><code>*/*</code></dt>
 <dd>すべての MIME タイプ</dd>
 <dt><code>;q=</code> (Q 値の重み)</dt>
 <dd><em>重み</em>と呼ばれる、相対的な<a href="/ja/docs/Glossary/Quality_values">品質値</a>を使用して表現される優先順位の順序で配置された値です。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<pre class="notranslate">Accept: text/html

Accept: image/*

// 全般的な既定値
Accept: */*

// ナビゲーション時のリクエストの既定値
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8
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
   <td>{{RFC("7231", "Accept", "5.3.2")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Context</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.Accept")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>HTTP <a href="/ja/docs/Web/HTTP/Content_negotiation">コンテンツネゴシエーション</a></li>
 <li>コンテンツネゴシエーションの結果を伴うヘッダー: {{HTTPHeader("Content-Type")}}</li>
 <li>他の同様のヘッダー: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Charset")}}, {{HTTPHeader("Accept-Language")}}</li>
</ul>
