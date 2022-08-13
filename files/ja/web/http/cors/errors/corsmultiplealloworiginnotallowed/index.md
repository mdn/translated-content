---
title: 'Reason: Multiple CORS header ''Access-Control-Allow-Origin'' not allowed'
slug: Web/HTTP/CORS/Errors/CORSMultipleAllowOriginNotAllowed
tags:
  - CORS
  - CORSMultipleAllowOriginNotAllowed
  - HTTP
  - HTTPS
  - エラー
  - オリジン間
  - コンソール
  - セキュリティ
  - トラブルシューティング
  - メッセージ
  - 理由
translation_of: Web/HTTP/CORS/Errors/CORSMultipleAllowOriginNotAllowed
---
<div>{{HTTPSidebar}}</div>

<h2 id="Reason" name="Reason">理由</h2>

<pre class="syntaxbox">Reason: Multiple CORS header ‘Access-Control-Allow-Origin’ not allowed</pre>

<h2 id="What_went_wrong" name="What_went_wrong">何が悪いのか</h2>

<p>複数の {{HTTPHeader("Access-Control-Allow-Origin")}} ヘッダーがサーバから送信されました。これは許可されていません。</p>

<p>サーバーへのアクセス権があるのであれば、実装を変更して <code>Access-Control-Allow-Origin</code> ヘッダーで{{Glossary("origin", "オリジン")}}を返すようにしてください。ブラウザーは単一のオリジンか null のどちらかの値しか受け付けないので、オリジンのリストを送り返すことはできません。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/HTTP/CORS/Errors">CORS のエラー</a></li>
 <li>用語集: {{Glossary("CORS")}}</li>
 <li><a href="/ja/docs/Web/HTTP/CORS">CORS 入門</a></li>
 <li><a href="https://enable-cors.org/server.html">Enable CORS: I want to add CORS support to my server</a></li>
</ul>
