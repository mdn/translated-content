---
title: 'Reason: CORS disabled'
slug: Web/HTTP/CORS/Errors/CORSDisabled
tags:
  - CORS
  - HTTP
  - HTTPS
  - エラー
  - オリジン間
  - セキュリティ
  - トラブルシューティング
  - メッセージ
  - リソース
  - 共有
  - 同一オリジン
  - 無効
translation_of: Web/HTTP/CORS/Errors/CORSDisabled
---
<div>{{HTTPSidebar}}</div>

<h2 id="Reason" name="Reason">理由</h2>

<pre class="syntaxbox">Reason: CORS disabled</pre>

<h2 id="What_went_wrong" name="What_went_wrong">何に失敗したか</h2>

<p>{{Glossary("CORS")}} を使う必要がある要求が行われましたが、ユーザーのブラウザーで CORS が無効になっています。これが発生した場合、ブラウザーの CORS を有効に戻す必要があります。</p>

<p>Firefox では、 CORS を無効にする設定は <code>content.cors.disable</code> です。これを <code>true</code> に設定すると CORS が無効になり、この場合は常に、 CORS 要求は常にこのエラーで失敗します。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/HTTP/CORS/Errors">CORS のエラー</a></li>
 <li>用語集: {{Glossary("CORS")}}</li>
 <li><a href="/ja/docs/Web/HTTP/CORS">CORS 入門</a></li>
</ul>
