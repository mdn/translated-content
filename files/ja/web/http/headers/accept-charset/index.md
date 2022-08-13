---
title: Accept-Charset
slug: Web/HTTP/Headers/Accept-Charset
tags:
  - Content Negotiation
  - HTTP
  - HTTP Header
  - Reference
  - Request header
translation_of: Web/HTTP/Headers/Accept-Charset
---
<div>{{HTTPSidebar}}</div>

<p><span class="seoSummary"><strong><code>Accept-Charset</code></strong> は HTTP のリクエストヘッダーで、クライアントが理解できる{{glossary("character encoding", "文字エンコーディング")}}を広報します。</span><a href="/ja/docs/Web/HTTP/Content_negotiation">コンテンツネゴシエーション</a>を使用して、サーバーは提案の1つを選択、使用し、クライアントに選択結果を {{HTTPHeader("Content-Type")}} レスポンスヘッダー内、ふつうは <code>charset=</code> 引数の中で通知します。通常はそれぞれのリソースの既定値が正しく、これを送信すると<a href="/ja/docs/Mozilla/Firefox/Privacy/Tracking_Protection">フィンガープリンティング</a>を許してしまうことがあるため、ブラウザーは通常、このヘッダーを設定しません。</p>

<p>サーバーが一致する文字エンコーディングを提供できない場合、理論的には {{HTTPStatus("406", "406 Not Acceptable")}} エラーコードを返すことができます。しかし、より使い勝手をよくするために、これはめったに行われず、 <code>Accept-Charset</code> ヘッダーは無視されます。</p>

<div class="note">
<p>HTTP/1.1 の初期のバージョンでは、既定の文字エンコーディングを ISO-8859-1 と定義していました。これはすでに推奨されなくなっており、コンテンツ型ごとに個別に既定値が設定されるようになりました。</p>

<p>UTF-8 への対応が進み、圧倒的に推奨される文字エンコーディングになっています。<a href="https://www.eff.org/deeplinks/2010/01/primer-information-theory-and-privacy">設定に基づいたエントロピーを減少させることでより良いプライバシーを保証する</a>ために、すべてのブラウザーが <code>Accept-Charset</code> ヘッダーを省略しています。 Internet Explorer 8 以降、 Safari 5 以降、 Opera 11 以降、 Firefox 10 以降、 Chrome 27 以降は送信しなくなりました。</p>
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

<pre class="syntaxbox notranslate">Accept-Charset: &lt;charset&gt;

// 複数の型を{{glossary("quality values", "品質値")}}で重みづけした構文
Accept-Charset: utf-8, iso-8859-1;q=0.5</pre>

<h2 id="Directives" name="Directives">ディレクティブ</h2>

<dl>
 <dt><code><var>&lt;charset&gt;</var></code></dt>
 <dd><code>utf-8</code> または <code>iso-8859-15</code> のような文字セット。</dd>
 <dt><code>*</code></dt>
 <dd>ヘッダー内の他の場所に記述されていない文字セット。 <code>'*'</code> はワイルドカードとして使用されます。</dd>
 <dt><code>;q=<var>&lt;weight&gt;</var></code></dt>
 <dd>エンコーディングはすべて、<em>重み</em>と呼ばれる相対的な{{glossary("quality values", "品質値")}}を使用して表現された設定の順番で配置されます。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<pre class="notranslate">Accept-Charset: iso-8859-1

Accept-Charset: utf-8, iso-8859-1;q=0.5

Accept-Charset: utf-8, iso-8859-1;q=0.5, *;q=0.1
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
   <td>{{RFC("7231", "Accept-Charset", "5.3.3")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Context</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.Accept-Charset")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>HTTP の<a href="/ja/docs/Web/HTTP/Content_negotiation">コンテンツネゴシエーション</a></li>
 <li><a href="https://hsivonen.fi/accept-charset/">Accept-Charset is no more</a></li>
 <li>コンテンツネゴシエーションの結果を含むヘッダー: {{HTTPHeader("Content-Type")}}</li>
 <li>他の同様のヘッダー: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Accept")}}</li>
</ul>
