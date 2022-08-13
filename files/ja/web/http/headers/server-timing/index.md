---
title: Server-Timing
slug: Web/HTTP/Headers/Server-Timing
tags:
  - HTTP
  - Reference
  - パフォーマンス
  - ヘッダー
translation_of: Web/HTTP/Headers/Server-Timing
---
<p>{{HTTPSidebar}}</p>

<p><strong><code>Server-Timing</code></strong> ヘッダーは、指定されたリクエスト－レスポンスのサイクルについての1つ以上のメトリックと説明を通信します。ユーザーのブラウザーの開発ツール内や、 {{domxref("PerformanceServerTiming")}} インターフェイス内で、任意のバックエンドサーバーのタイミングメトリック (データベースの読み書き、 CPU 時間、ファイルシステムアクセス、など) を表面化させるために使用します。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">ヘッダー種別</th>
   <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
   <td>いいえ</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>Server-Timing</code> ヘッダーの構文では、さまざまな方法でメトリックを通信することができます。サーバーメトリック名のみ、メトリックと値、メトリックと値と説明、メトリックと説明などです。</p>

<p>仕様書では、 HTTP のオーバーヘッドを最小化するために、名前と説明を (略語を使用したり可能な限り値を省略したりして) できるだけ短くすることを推奨しています。</p>

<pre>// 単一の値のないメトリック
Server-Timing: missedCache

// 単一のメトリックと値
Server-Timing: cpu;dur=2.4

// 単一のメトリックと説明と値
Server-Timing: cache;desc="Cache Read";dur=23.2

// 二つのメトリックと値
Server-Timing: db;dur=53, app;dur=47.2

// Server-Timing as trailer
Trailer: Server-Timing
--- response body ---
Server-Timing: total;dur=123.4
</pre>

<h2 id="Privacy_and_security" name="Privacy_and_security">プライバシーとセキュリティ</h2>

<p><code>Server-Timing</code> ヘッダーは微妙なアプリケーションやインフラの情報を公開する可能性があります。どのメトリックが、いつ、サーバー側の誰に返されるかを制御することを検討してください。例えば、メトリックを認証されたユーザーのみに見せ、一般には見せないようにすることもできます。</p>

<h2 id="PerformanceServerTiming_interface" name="PerformanceServerTiming_interface">PerformanceServerTiming インターフェイス</h2>

<p><code>Server-Timing</code> ヘッダーのメトリックがブラウザーの開発者ツールに現れるのに加えて、 {{domxref("PerformanceServerTiming")}} インターフェイスでツールが JavaScript から自動的にメトリックを収集し処理することができます。このインターフェイスは同じオリジンに制約されていますが、 {{HTTPHeader("Timing-Allow-Origin")}} ヘッダーを使用することで、サーバーメトリックにアクセスすることができるドメインを指定することができます。このインターフェイスはブラウザーによっては、安全なコンテキスト (HTTPS) のみでしか利用できません。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">題名</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Server Timing','#the-server-timing-header-field', 'Server-Timing Header Field')}}</td>
   <td>{{Spec2("Server Timing")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("http.headers.Server-Timing")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("PerformanceServerTiming")}}</li>
</ul>
