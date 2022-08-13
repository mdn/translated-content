---
title: Keep-Alive
slug: Web/HTTP/Headers/Keep-Alive
tags:
  - General Header
  - HTTP
  - HTTP Header
  - Reference
translation_of: Web/HTTP/Headers/Keep-Alive
---
<div>{{HTTPSidebar}}</div>

<p><strong><code>Keep-Alive</code></strong> 一般ヘッダーは、送信者が接続の仕組みや、タイムアウト値と最大リクエスト数の設定に使用される可能性があることをヒントとすることができます。</p>

<div class="note">
<p>このヘッダーが意味を持つためには、 {{HTTPHeader("Connection")}} ヘッダーを "keep-alive" に設定する必要があります。</p>
</div>

<div class="blockIndicator warning">
<p>{{HTTPHeader("Connection")}} や {{HTTPHeader("Keep-Alive")}} などの接続固有のヘッダーフィールドは <a href="https://tools.ietf.org/html/rfc7540#section-8.1.2.2">HTTP/2 では禁止されています</a>。 Chrome と Firefox は HTTP/2 レスポンスでこれらを無視しますが、 Safari は HTTP/2 仕様の要件に準拠しており、これらを含むレスポンスは読み込まれません。</p>
</div>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">ヘッダー種別</th>
   <td>{{Glossary("General header", "一般ヘッダー")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
   <td>はい</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Keep-Alive: <var>parameters</var></pre>

<h2 id="Directives" name="Directives">ディレクティブ</h2>

<dl>
 <dt><code><var>parameters</var></code></dt>
 <dd>カンマで区切られたパラメータのリスト。各パラメータは識別子と等号 (<code>'='</code>) で区切られた値で構成されます。以下の識別子が利用可能です。
 <ul>
  <li><code>timeout</code>: 待機状態の接続を開いたままにしておく必要のある最小時間 (秒単位) を示します。keep-alive TCP メッセージがトランスポートレベルで設定されていない場合、TCP タイムアウトよりも長いタイムアウトが無視されることに注意してください。</li>
  <li><code>max</code>: 接続を閉じる前にこの接続で送信できるリクエストの最大数を示します。<code>0</code> 以外の場合、次のレスポンスで別のリクエストが送信されるため、パイプラインでない接続ではこの値は無視されます。HTTP パイプラインは、パイプラインを制限するために使用できます。</li>
 </ul>
 </dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p><code>Keep-Alive</code> ヘッダーを含むレスポンスです。</p>

<pre class="notranslate">HTTP/1.1 200 OK
<strong>Connection: Keep-Alive</strong>
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Thu, 11 Aug 2016 15:23:13 GMT
<strong>Keep-Alive: timeout=5, max=1000</strong>
Last-Modified: Mon, 25 Jul 2016 04:32:39 GMT
Server: Apache

(本文)</pre>

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
   <td><a href="https://tools.ietf.org/html/draft-thomson-hybi-http-timeout-03#section-2">HTTP Keep-Alive Header</a></td>
   <td>Keep-Alive Header (IETF Internet Draft)</td>
  </tr>
  <tr>
   <td><a href="https://tools.ietf.org/html/rfc7230#appendix-A.1.2">RFC 7230, appendix A.1.2: Keep-Alive</a></td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.Keep-Alive")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPHeader("Connection")}}</li>
 <li><a href="/ja/docs/Web/HTTP/Connection_management_in_HTTP_1.x">HTTP/1.x のコネクション管理</a></li>
</ul>
