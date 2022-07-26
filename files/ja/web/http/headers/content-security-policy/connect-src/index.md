---
title: 'CSP: connect-src'
slug: Web/HTTP/Headers/Content-Security-Policy/connect-src
tags:
  - CSP
  - Content-Security-Policy
  - Directive
  - HTTP
  - Reference
  - Security
  - connect-src
  - source
  - セキュリティ
  - ディレクティブ
translation_of: Web/HTTP/Headers/Content-Security-Policy/connect-src
---
<div>{{HTTPSidebar}}</div>

<p>HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) の <code><strong>connect-src</strong></code> ディレクティブは、スクリプトインターフェイスを使用して読み込むことができる URL を制限します。以下の API が制限の対象となります。</p>

<ul>
 <li>{{HTMLElement("a")}} の {{htmlattrxref("ping", "a")}} 属性</li>
 <li>{{domxref("Fetch")}}</li>
 <li>{{domxref("XMLHttpRequest")}}</li>
 <li>{{domxref("WebSocket")}}</li>
 <li>{{domxref("EventSource")}}</li>
 <li>{{domxref("Navigator.sendBeacon()")}}</li>
</ul>

<div class="note">
<p><strong>注:</strong> <code>connect-src 'self'</code> はすべてのブラウザーで websocket スキーマを解決するわけではありません、詳細はこちら: <a href="https://github.com/w3c/webappsec-csp/issues/7">https://github.com/w3c/webappsec-csp/issues/7</a></p>
</div>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">CSP バージョン</th>
   <td>1</td>
  </tr>
  <tr>
   <th scope="row">ディレクティブ種別</th>
   <td>{{Glossary("Fetch directive", "フェッチディレクティブ")}}</td>
  </tr>
  <tr>
   <th scope="row">{{CSP("default-src")}} による代替</th>
   <td>あり。このディレクティブがない場合、ユーザーエージェントは <code>default-src</code> ディレクティブを探します。</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax" name="Syntax">構文</h2>

<p>connect-src ポリシーには、1 つ以上のソースが許可されています。</p>

<pre class="syntaxbox notranslate">Content-Security-Policy: connect-src &lt;source&gt;;
Content-Security-Policy: connect-src &lt;source&gt; &lt;source&gt;;
</pre>

<h3 id="Sources" name="Sources">ソース</h3>

<p>{{page("/ja/docs/Web/HTTP/Headers/Content-Security-Policy/default-src", "common_sources")}}</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Violation_cases" name="Violation_cases">違反の場合</h3>

<p>以下の CSP ヘッダーを指定した場合、</p>

<pre class="brush: bash notranslate">Content-Security-Policy: connect-src https://example.com/</pre>

<p>以下のコネクションはブロックされ、読み込まれません。</p>

<pre class="brush: html notranslate">&lt;a ping="https://not-example.com"&gt;

&lt;script&gt;
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://not-example.com/');
  xhr.send();

  var ws = new WebSocket("https://not-example.com/");

  var es = new EventSource("https://not-example.com/");

  navigator.sendBeacon("https://not-example.com/", { ... });
&lt;/script&gt;</pre>

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
   <td>{{specName("CSP 3.0", "#directive-connect-src", "connect-src")}}</td>
   <td>{{Spec2('CSP 3.0')}}</td>
   <td>変更なし</td>
  </tr>
  <tr>
   <td>{{specName("CSP 1.1", "#directive-connect-src", "connect-src")}}</td>
   <td>{{Spec2('CSP 1.1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.csp.Content-Security-Policy.connect-src")}}</p>

<h2 id="Compatibility_notes" name="Compatibility_notes">互換性のメモ</h2>

<ul>
 <li>Firefox 23 以前では、<code>xhr-src</code> が <code>connect-src</code> ディレクティブの代わりに、{{domxref("XMLHttpRequest")}} を制限するだけのために使用されていました。</li>
</ul>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPHeader("Content-Security-Policy")}}</li>
 <li>{{HTMLElement("a")}} の {{htmlattrxref("ping", "a")}} 属性</li>
 <li>{{domxref("Fetch")}}</li>
 <li>{{domxref("XMLHttpRequest")}}</li>
 <li>{{domxref("WebSocket")}}</li>
 <li>{{domxref("EventSource")}}</li>
</ul>
