---
title: Network Error Logging
slug: Web/HTTP/Network_Error_Logging
tags:
  - Guide
  - HTTP
  - Network Error Logging
  - Reference
translation_of: Web/HTTP/Network_Error_Logging
---
<div>{{HTTPSidebar}}{{SeeCompatTable}}</div>

<p>ネットワークエラーロギングは、HTTP の {{HTTPHeader("NEL")}} <em><a href="/ja/docs/Glossary/Response_header">レスポンスヘッダー</a></em>を使って設定できるメカニズムです。この実験的なヘッダーにより、ウェブサイトやアプリケーションは、対応しているブラウザーから、失敗した (必要であれば成功した) ネットワーク読み取りに関するレポートを受け取ることを選択することができます。</p>

<p>レポートは、 {{HTTPHeader("Report-To")}} ヘッダーで定義された報告グループに送信されます。</p>

<h2 id="Usage">使用方法</h2>

<p>ウェブアプリケーションは、 <em><a href="/ja/docs/Glossary/Response_header">JSON エンコード</a></em>されたオブジェクトである NEL ヘッダーを使って、この動作を選択します。</p>

<pre><a href="https://www.w3.org/TR/network-error-logging/#nel-response-header">NEL</a>: { "<a href="https://www.w3.org/TR/network-error-logging/#the-report_to-member">report_to</a>": "nel",
       "<a href="https://www.w3.org/TR/network-error-logging/#the-max_age-member">max_age</a>": 31556952 }
</pre>

<p>ブラウザーから安全と認識されたオリジンが必要です。</p>

<p>以下のオブジェクトキーが NEL ヘッダーで指定されています。</p>

<dl>
 <dt>report_to</dt>
 <dd>
 <p>ネットワークエラーレポートの送信先となる <a href="/ja/docs/Web/API/Reporting_API">Reporting API</a> グループです。</p>
 </dd>
 <dt>max_age</dt>
 <dd>ポリシーの有効期間を秒単位で指定します (HSTS ポリシーが時間制限されているのと同様の方法です)。参照される報告グループは、少なくとも NEL ポリシーと同程度の有効期間を持つ必要があります。</dd>
 <dt>include_subdomains</dt>
 <dd>true の場合、ポリシーは、ポリシーヘッダーが設定されているオリジンの下のすべてのサブドメインに適用されます。このオプションを有効にする場合は、サブドメインを含めるように報告グループを設定する必要があります。</dd>
 <dt>success_fraction</dt>
 <dd>0 と 1 の間の浮動小数点値で、報告するネットワーク要求が成功した割合を指定します。既定値は 0 で、JSON ペイロードにキーが存在しない場合、成功したネットワークリクエストは報告されません。</dd>
 <dt>failure_fraction</dt>
 <dd>0 と 1 の間の浮動小数点値で、報告する<strong>失敗した</strong>ネットワークリクエストの割合を指定します。既定値は 1 で、JSON ペイロードにキーが存在しない場合、失敗したすべてのネットワークリクエストが報告されます。</dd>
</dl>

<p>上記のレポートグループは、 {{HTTPHeader("Report-To")}} ヘッダー内で通常の方法で定義されます。例えば下記のようになります。</p>

<pre><a href="https://wicg.github.io/reporting/#report-to" id="ref-for-report-to①">Report-To</a>: { "<a href="https://wicg.github.io/reporting/#group" id="ref-for-group①">group</a>": "nel",
             "<a href="https://wicg.github.io/reporting/#max-age" id="ref-for-max-age①">max_age</a>": 31556952,
             "<a href="https://wicg.github.io/reporting/#endpoints" id="ref-for-endpoints②">endpoints</a>": [
               { "<a href="https://wicg.github.io/reporting/#url" id="ref-for-url②">url</a>": "https://example.com/csp-reports" }
             ] }
</pre>

<h2 id="Error_reports">エラーレポート</h2>

<p>これらの例では、Reporting API のペイロード全体を示しています。最上位の <strong><code>"body"</code></strong> キーには、ネットワークエラーレポートが含まれています。</p>

<h3 id="HTTP_400_Bad_Request_response">HTTP 400 (Bad Request) response</h3>

<pre class="brush: js">{
  "age": 20,
  "type": "network-error",
  "url": "https://example.com/previous-page",
  "body": {
    "elapsed_time": 338,
    "method": "POST",
    "phase": "application",
    "protocol": "http/1.1",
    "referrer": "https://example.com/previous-page",
    "sampling_fraction": 1,
    "server_ip": "137.205.28.66",
    "status_code": 400,
    "type": "http.error",
    "url": "https://example.com/bad-request"
  }
}
</pre>

<h3 id="DNS_name_not_resolved">DNS 名が未解決</h3>

<p>なお、このレポートではフェーズが <code>dns</code> に設定されており、含めることのできる <code>server_ip</code> はありません。</p>

<pre class="brush: js">{
  "age": 20,
  "type": "network-error",
  "url": "https://example.com/previous-page",
  "body": {
    "elapsed_time": 18,
    "method": "POST",
    "phase": "dns",
    "protocol": "http/1.1",
    "referrer": "https://example.com/previous-page",
    "sampling_fraction": 1,
    "server_ip": "",
    "status_code": 0,
    "type": "dns.name_not_resolved",
    "url": "https://example-host.com/"
  }
}
</pre>

<p>ネットワークエラーの種類は、仕様で定義された以下の値のいずれかですが、ブラウザは独自のエラー種別を追加して送信することができます。</p>

<dl>
 <dt><code>dns.unreachable</code></dt>
 <dd>ユーザーの DNS サーバーに到達できない</dd>
 <dt><code>dns.name_not_resolved</code></dt>
 <dd>ユーザーの DNS サーバーは応答したが、リクエストされた URI の IP アドレスに解決できなかった。</dd>
 <dt><code>dns.failed</code></dt>
 <dd>DNS サーバーへのリクエストが、以前のエラー (SERVFAIL など) でカバーされない理由で失敗した</dd>
 <dt><code>dns.address_changed</code></dt>
 <dd>セキュリティ上の理由から、オリジナルのレポートを配信したサーバーの IP アドレスが、エラー発生時の現在のサーバーの IP アドレスと異なる場合、レポートデータはこの問題に関する情報のみを含むようにダウングレードされ、タイプは <code>dns.address_changed</code> に設定されます。</dd>
 <dt><code>tcp.timed_out</code></dt>
 <dd>サーバーへの TCP コネクションがタイムアウトした</dd>
 <dt><code>tcp.closed</code></dt>
 <dd>TCP コネクションがサーバーから閉じられた</dd>
 <dt><code>tcp.reset</code></dt>
 <dd>TCP コネクションがリセットされた</dd>
 <dt><code>tcp.refused</code></dt>
 <dd>TCP コネクションがサーバーから拒否された</dd>
 <dt><code>tcp.aborted</code></dt>
 <dd>TCP コネクションが中止された</dd>
 <dt><code>tcp.address_invalid</code></dt>
 <dd>IP アドレスが無効である</dd>
 <dt><code>tcp.address_unreachable</code></dt>
 <dd>IP アドレスに到達できない</dd>
 <dt><code>tcp.failed</code></dt>
 <dd>TCP コネクションが直前のエラーによってカバーできない原因で失敗した</dd>
 <dt><code>http.error</code></dt>
 <dd>ユーザーエージェントがレスポンスの受信に成功したが、 <a href="https://datatracker.ietf.org/doc/html/rfc7231#section-6.5">4xx</a> または <a href="https://datatracker.ietf.org/doc/html/rfc7231#section-6.6">5xx</a> のステータスコードであった</dd>
 <dt><code>http.protocol.error</code></dt>
 <dd>コネクションが HTTP プロトコルエラーのために中止された</dd>
 <dt><code>http.response.invalid</code></dt>
 <dd>レスポンスが空であるか、 content-length が合っていないか、エンコーディングが正しくないか、その他の状況でユーザーエージェントがレスポンスを処理できなかった</dd>
 <dt><code>http.response.redirect_loop</code></dt>
 <dd>リクエストはリダイレクトループが検出されたため中止された</dd>
 <dt><code>http.failed</code></dt>
 <dd>コネクションは直前のエラーでカバーされなかった HTTP プロトコルのエラーで失敗した</dd>
</dl>

<h2 id="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
  <tr>
   <td><a href="https://w3c.github.io/network-error-logging/#introduction">Network Error Logging</a></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.NEL")}}</p>
