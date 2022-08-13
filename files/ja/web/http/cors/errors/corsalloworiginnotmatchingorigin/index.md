---
title: 'Reason: CORS header ''Access-Control-Allow-Origin'' does not match ''xyz'''
slug: Web/HTTP/CORS/Errors/CORSAllowOriginNotMatchingOrigin
tags:
  - CORS
  - CORSAllowOriginNotMatchingOrigin
  - HTTP
  - HTTPS
  - エラー
  - オリジン間
  - コンソール
  - セキュリティ
  - トラブルシューティング
  - メッセージ
  - 理由
translation_of: Web/HTTP/CORS/Errors/CORSAllowOriginNotMatchingOrigin
---
<div>{{HTTPSidebar}}</div>

<h2 id="Reason" name="Reason">理由</h2>

<pre class="syntaxbox">Reason: CORS header 'Access-Control-Allow-Origin' does not match 'xyz'</pre>

<h2 id="What_went_wrong" name="What_went_wrong">何が悪いのか</h2>

<p>リクエストを作成しているオリジンが、 {{HTTPHeader("Access-Control-Allow-Origin")}} ヘッダーによって許可されたオリジンのいずれにも一致しないことを表します。</p>

<p>このエラーは、レスポンスに複数の <code>Access-Control-Allow-Origin</code> ヘッダーが含まれていると発生することがあります。</p>

<p>コードが CORS リクエストを使用してアクセスしているサービスが管理下にあるのであれば、 <code>Access-Control-Allow-Origin</code> ヘッダーがそのアクセス元が含むように構成されていること、及びそのヘッダーがレスポンス内に1つしか含まれていないことを確認してください。ヘッダー自体はコンマ区切りで複数のオリジンを受け付けるので、新しいオリジンを追加することは難しくはありません。</p>

<p>例えば Apache では、サーバー構成 (の中の <code>&lt;Directory&gt;</code>, <code>&lt;Location&gt;</code>, <code>&lt;Files&gt;</code>, <code>&lt;VirtualHost&gt;</code> のうち適切な節) に次のような行を追加してください。構成はふつう、 <code>.conf</code> ファイル又は (一般的な名前は <code>httpd.conf</code> や <code>apache.conf</code>) 又は <code>.htaccess</code> ファイルにあります。</p>

<pre>Header set Access-Control-Allow-Origin '<em>origin-list</em>'</pre>

<p>Nginx では、このヘッダーを設定するコマンドは次の通りです。</p>

<pre>add_header 'Access-Control-Allow-Origin' '<em>origin-list</em>'</pre>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/HTTP/CORS/Errors">CORS のエラー</a></li>
 <li>用語集: {{Glossary("CORS")}}</li>
 <li><a href="/ja/docs/Web/HTTP/CORS">CORS 入門</a></li>
 <li><a href="https://enable-cors.org/server.html">Enable CORS: I want to add CORS support to my server</a></li>
</ul>
