---
title: 'Reason: invalid token ‘xyz’ in CORS header ‘Access-Control-Allow-Methods’'
slug: Web/HTTP/CORS/Errors/CORSInvalidAllowMethod
tags:
  - CORS
  - CORSInvalidAllowMethod
  - HTTP
  - HTTPS
  - console
  - エラー
  - オリジン間
  - メッセージ
translation_of: Web/HTTP/CORS/Errors/CORSInvalidAllowMethod
---
<div>{{HTTPSidebar}}</div>

<h2 id="Reason" name="Reason">理由</h2>

<pre class="syntaxbox">Reason: invalid token ‘xyz’ in CORS header ‘Access-Control-Allow-Methods’</pre>

<h2 id="What_went_wrong" name="What_went_wrong">何に失敗したか</h2>

<p>サーバーから送信された {{Glossary("CORS")}} 要求への応答に、一つ以上の無効なメソッド名を含んだ {{HTTPHeader("Access-Control-Allow-Methods")}} ヘッダーが含まれています。</p>

<p><code>Access-Control-Allow-Methods</code> ヘッダーは、どの <a href="/ja/docs/Web/HTTP/Methods">HTTP 要求メソッド</a>が CORS 要求に対応しているかをクライアントに知らせます。ヘッダーの値は、{{HTTPMethod("GET")}}, {{HTTPMethod("POST")}}, {{HTTPMethod("HEAD")}} のような HTTP メソッド名をコンマで区切った文字列です。クライアントの{{Glossary("user agent", "ユーザーエージェント")}}が指定された値を理解できない場合、このエラーが発生します。</p>

<p>これはほとんどはサーバー側でしか修正できない問題であり、サーバーの構成を変更して、 <code>Access-Control-Allow-Methods</code> ヘッダーから無効又は未知のメソッド名を送らないようにします。クライアントで使用しているユーザーエージェントの HTTP ライブラリが最新版であるかどうかをチェックするのも良いかもしれません。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/HTTP/CORS/Errors">CORS のエラー</a></li>
 <li>用語集: {{Glossary("CORS")}}</li>
 <li><a href="/ja/docs/Web/HTTP/CORS">CORS 入門</a></li>
 <li><a href="/ja/docs/Web/HTTP/Headers">HTTP ヘッダー</a></li>
</ul>
