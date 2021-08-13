---
title: 'CSP: upgrade-insecure-requests'
slug: Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests
tags:
  - CSP
  - HTTP
  - セキュリティ
  - ディレクティブ
  - リファレンス
translation_of: Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests
---
<div>{{HTTPSidebar}}</div>

<p>HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) <code><strong>upgrade-insecure-requests</strong></code> ディレクティブは、ユーザーエージェントに、すべてのサイトの安全でないURL (HTTP経由で提供されるURL) をセキュリティで保護された URL (HTTPSを介して提供されるもの) で置き換えられたかのように処理するよう指示します。このディレクティブは、書き換えが必要な安全ではない古い URL が多数存在するウェブサイトのためのものです。</p>

<p><code>upgrade-insecure-requests</code> ディレクティブは、 {{CSP("block-all-mixed-content")}} よりも前に処理され、もし設定されていれば後者は何もしません。どちらかのディレクティブを設定することをお勧めしますが、 HTTP にリダイレクトした後で HTTPS を強制することができない古いブラウザーで HTTPS を強制させたくない限り、両方を指定することはできません。</p>

<p><code>upgrade-insecure-requests</code> ディレクティブは、第三者のサイトのリンクを経由してサイトにアクセスしたユーザーが最上位のナビゲーション用に HTTPS にアップグレードされることを保証しないため、 {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS")}}) ヘッダーを置換せず、ユーザーがSSLストリッピング攻撃の対象にならないように、適切な <code>max-age</code> を設定するようにしてください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">Content-Security-Policy: upgrade-insecure-requests;</pre>

<h2 id="Examples" name="Examples">例</h2>

<pre>// ヘッダー
Content-Security-Policy: upgrade-insecure-requests;

// meta タグ
&lt;meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"&gt;
</pre>

<p>HTTP から HTTPS への移行を望むドメイン example.com に上記のヘッダーを設定すると、ページ移動を伴わない安全ではないリソースのリクエストが自動的にアップグレードされます (第三者のリクエストが自分のものと同様に)。</p>

<pre class="brush: html">&lt;img src="http://example.com/image.png"&gt;
&lt;img src="http://not-example.com/image.png"&gt;</pre>

<p>これらの URL は、リクエストが行われる前に書き直されます。つまり、安全でない要求がネットワークに侵入しないようにします。なお、要求されたリソースが実際に HTTPS 経由で利用可能ではない場合、リクエストは HTTP で代替されずに失敗することに注意してください。</p>

<pre class="brush: html">&lt;img src="https://example.com/image.png"&gt;
&lt;img src="https://not-example.com/image.png"&gt;</pre>

<p>第三者のリソースへのナビゲーションをアップグレードすると、破壊の可能性が大幅に高まりますので、これらはアップグレードされません。</p>

<pre class="brush: html">&lt;a href="https://example.com/"&gt;Home&lt;/a&gt;
&lt;a href="http://not-example.com/"&gt;Home&lt;/a&gt;</pre>

<h3 id="Finding_insecure_requests" name="Finding_insecure_requests">安全ではないリクエストの発見</h3>

<p>{{HTTPHeader("Content-Security-Policy-Report-Only")}} ヘッダーと {{CSP("report-uri")}} ディレクティブを利用して、強制ポリシーと報告されたポリシーを次のように設定することができます。</p>

<pre>Content-Security-Policy: upgrade-insecure-requests; default-src https:
Content-Security-Policy-Report-Only: default-src https:; report-uri /endpoint</pre>

<p>このようにして、安全なサイト上の安全でない要求は引き続きアップグレードされますが、監視ポリシーに違反した場合だけが、安全でないリソースがエンドポイントに報告されます。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{specName("Upgrade Insecure Requests", "#delivery", "upgrade-insecure-requests")}}</td>
   <td>{{Spec2('Upgrade Insecure Requests')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("http.headers.csp.upgrade-insecure-requests")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPHeader("Content-Security-Policy")}}</li>
 <li>{{HTTPHeader("Upgrade-Insecure-Requests")}} ヘッダー</li>
 <li>{{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS")}}) ヘッダー</li>
 <li>{{CSP("block-all-mixed-content")}}</li>
 <li><a href="/ja/docs/Web/Security/Mixed_content">混合コンテンツ</a></li>
</ul>
