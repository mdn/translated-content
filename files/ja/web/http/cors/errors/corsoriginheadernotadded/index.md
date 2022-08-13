---
title: 'Reason: CORS header ‘Origin’ cannot be added'
slug: Web/HTTP/CORS/Errors/CORSOriginHeaderNotAdded
tags:
  - CORS
  - CORSOriginHeaderNotAdded
  - HTTP
  - HTTPS
  - エラー
  - オリジン間
  - コンソール
  - セキュリティ
  - トラブルシューティング
  - メッセージ
  - 理由
translation_of: Web/HTTP/CORS/Errors/CORSOriginHeaderNotAdded
---
<div>{{HTTPSidebar}}</div>

<h2 id="Reason" name="Reason">理由</h2>

<pre class="syntaxbox">Reason: CORS header ‘Origin’ cannot be added</pre>

<h2 id="What_went_wrong" name="What_went_wrong">何が悪いのか</h2>

<p>{{Glossary("user agent", "ユーザーエージェント")}}が必要な {{HTTPHeader("Origin")}} を {{Glossary("HTTP")}} リクエストに追加することができませんでした。すべての CORS リクエストは <code>Origin</code> ヘッダーを含んでいなければなりません。</p>

<p>これは例えば、 JavaScript のコードが複数のドメインのコンテンツにアクセスできるよう高い権限で実行されている場合などに起こることがあります。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/HTTP/CORS/Errors">CORS のエラー</a></li>
 <li>用語集: {{Glossary("CORS")}}</li>
 <li><a href="/ja/docs/Web/HTTP/CORS">CORS 入門</a></li>
</ul>
