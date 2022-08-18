---
title: >-
  Reason: missing token ‘xyz’ in CORS header ‘Access-Control-Allow-Headers’ from
  CORS preflight channel
slug: Web/HTTP/CORS/Errors/CORSMissingAllowHeaderFromPreflight
tags:
  - CORS
  - CORSMissingAllowHeaderFromPreflight
  - HTTP
  - HTTPS
  - エラー
  - オリジン間
  - コンソール
  - セキュリティ
  - トラブルシューティング
  - メッセージ
  - 理由
translation_of: Web/HTTP/CORS/Errors/CORSMissingAllowHeaderFromPreflight
---
<div>{{HTTPSidebar}}</div>

<h2 id="Reason" name="Reason">理由</h2>

<pre class="syntaxbox">Reason: missing token ‘xyz’ in CORS header ‘Access-Control-Allow-Headers’ from CORS preflight channel</pre>

<h2 id="What_went_wrong" name="What_went_wrong">何に失敗したのか</h2>

<p> <code>Access-Control-Allow-Headers</code> ヘッダーがサーバーから送信され、どのヘッダーが {{Glossary("CORS")}} 要求に対応しているかを知らせます。 <code>Access-Control-Allow-Headers</code> の値はコンマ区切りのヘッダー名のリストで、 "<code>X-Custom-Information</code>" やその他の標準的かつ基本的ではないヘッダー名 (常に許可されているもの) を記述します。</p>

<p>このエラーは明確に許可されていないヘッダー (すなわち、サーバーから送られる <code>Access-Control-Allow-Headers</code> ヘッダーで指定されたリストに含まれていないもの) のプリフライトリクエストを行おうとしたときに発生します。これを修正するには、サーバーが指定されたヘッダーを許可するように更新するか、このヘッダーを使用しないようにする必要があります。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/HTTP/CORS/Errors">CORS のエラー</a></li>
 <li>用語集: {{Glossary("CORS")}}</li>
 <li><a href="/ja/docs/Web/HTTP/CORS">CORS 入門</a></li>
 <li><a href="/ja/docs/Web/HTTP/Headers">HTTP ヘッダー</a></li>
</ul>
