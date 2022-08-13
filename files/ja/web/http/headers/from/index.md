---
title: From
slug: Web/HTTP/Headers/From
tags:
  - HTTP
  - Reference
  - ヘッダー
translation_of: Web/HTTP/Headers/From
---
<p>{{HTTPSidebar}}</p>

<p><code><strong>From</strong></code> リクエストヘッダーには、リクエスト元の user agent を制御する人のユーザーの Eメールアドレスが含まれています。</p>

<p>ロボティックユーザーエージェント (クローラなど) を使用している場合は、<code>From</code> ヘッダーを送信する必要があります。ロボットが過度の不要なリクエストや無効なリクエストを送信しているなど、サーバーに問題が発生した場合は連絡できます。</p>

<div class="warning">
<p>アクセス制御または認証には <code>From</code> ヘッダーを使用しないでください。</p>
</div>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">ヘッダータイプ</th>
   <td>{{Glossary("Request header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>いいえ</td>
  </tr>
 </tbody>
</table>

<h2 id="構文">構文</h2>

<pre class="syntaxbox">From: &lt;email&gt;
</pre>

<h2 id="ディレクティブ">ディレクティブ</h2>

<dl>
 <dt>&lt;email&gt;</dt>
 <dd>マシンに使用可能な電子メールアドレス。</dd>
</dl>

<h2 id="例">例</h2>

<pre>From: webmaster@example.org</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">タイトル</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "From", "5.5.1")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザの互換性">ブラウザの互換性</h2>

<p>{{Compat("http.headers.From")}}</p>

<h2 id="関連情報">関連情報</h2>

<ul>
 <li>{{HTTPHeader("Host")}}</li>
</ul>
