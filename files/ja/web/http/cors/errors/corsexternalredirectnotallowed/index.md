---
title: 'Reason: CORS request external redirect not allowed'
slug: Web/HTTP/CORS/Errors/CORSExternalRedirectNotAllowed
tags:
  - CORS
  - CORSExternalRedirectNotAllowed
  - HTTP
  - HTTPS
  - エラー
  - オリジン間
  - コンソール
  - セキュリティ
  - トラブルシューティング
  - メッセージ
  - 理由
translation_of: Web/HTTP/CORS/Errors/CORSExternalRedirectNotAllowed
---
<div>{{HTTPSidebar}}</div>

<h2 id="Reason" name="Reason">理由</h2>

<pre class="syntaxbox">Reason: CORS request external redirect not allowed</pre>

<h2 id="What_went_wrong" name="What_went_wrong">何が悪いのか</h2>

<p>{{Glossary("CORS")}} リクエストに対して、サーバーが元のリクエストとは異なるオリジンの URL へのリダイレクトを返答しましたが、これは CORS リクエストでは許可されていません。</p>

<p>例えば、 <code>https://service.tld/fetchdata</code> のページがリクエストされ、 HTTP レスポンスが "301 Moved Permanently" 又は "307 Temporary Redirect" 又は "308 Permanent Redirect" で、 <code>Location</code> が <code>https://anotherservice.net/getdata</code> であった場合、この理由で CORS リクエストが失敗します。</p>

<p>問題を修正するには、リダイレクトによって報告された新しい URL を使用するようにコードを更新し、リダイレクトを回避します。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/HTTP/CORS/Errors">CORS のエラー</a></li>
 <li>用語集: {{Glossary("CORS")}}</li>
 <li><a href="/ja/docs/Web/HTTP/CORS">CORS 入門</a></li>
</ul>
