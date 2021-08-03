---
title: Content-Security-Policy-Report-Only
slug: Web/HTTP/Headers/Content-Security-Policy-Report-Only
tags:
  - CSP
  - HTTP
  - HTTPS
  - Reference
  - Security
  - header
translation_of: Web/HTTP/Headers/Content-Security-Policy-Report-Only
---
<div>{{HTTPSidebar}}</div>

<p>HTTP の <strong><code>Content-Security-Policy-Report-Only</code></strong> レスポンスヘッダーにより、ウェブ開発者はポリシーの効果を監視する (ただし強制はしない) ことによりポリシーを試行することができます。これらの違反レポートは {{Glossary("JSON")}} の文書で構成され、 HTTP の <code>POST</code> リクエストを通して指定された URI に送信されます。</p>

<p>詳細については、<a href="/ja/docs/Web/HTTP/CSP">コンテンツセキュリティポリシー (CSP)</a> のこの記事も参照してください。</p>

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
  <tr>
   <th colspan="2" scope="row">This header is not supported inside a {{HTMLElement("meta")}} element.</th>
  </tr>
 </tbody>
</table>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Content-Security-Policy-Report-Only: &lt;policy-directive&gt;; &lt;policy-directive&gt;
</pre>

<h2 id="Directives" name="Directives">ディレクティブ</h2>

<p>{{HTTPHeader("Content-Security-Policy")}} ヘッダーのディレクティブは <code>Content-Security-Policy-Report-Only</code> にも適用することができます。</p>

<p>CSP の {{CSP("report-uri")}} ディレクティブをこのヘッダーで使用しないと、このヘッダーは負荷が高く何もしない機械となります。</p>

<h2 id="Examples" name="Examples">例</h2>

<p>このヘッダーは発生した違反を報告します。これを使用して、コンテンツセキュリティポリシーを反復的に処理できます。サイトがどのように動作するのかを観察したり、違反レポートや<a href="https://secure.wphackedhelp.com/blog/wordpress-malware-redirect-hack-cleanup/">マルウエアリダイレクト</a>を監視したりして、 {{HTTPHeader("Content-Security-Policy")}} ヘッダーで強制することが要求されるポリシーを選択します。</p>

<pre class="notranslate">Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-endpoint/</pre>

<p>レポートを受信し続けながら、ポリシーの強制も行いたい場合は、 {{HTTPHeader("Content-Security-Policy")}} ヘッダーに {{CSP("report-uri")}} ディレクティブを指定して使用してください。</p>

<pre class="notranslate">Content-Security-Policy: default-src https:; report-uri /csp-violation-report-endpoint/</pre>

<h2 id="Violation_report_syntax" name="Violation_report_syntax">違反レポートの構文</h2>

<p>レポート JSON オブジェクトには、次のデータが含まれています。</p>

<dl>
 <dt><code>blocked-uri</code></dt>
 <dd>The URI of the resource that was blocked from loading by the Content Security Policy. If the blocked URI is from a different origin than the document-uri, then the blocked URI is truncated to contain just the scheme, host, and port.</dd>
 <dt><code>disposition</code></dt>
 <dd>Either <code>"enforce"</code> or <code>"report"</code> depending on whether the {{HTTPHeader("Content-Security-Policy")}} header or the <code>Content-Security-Policy-Report-Only</code> header is used.</dd>
 <dt><code>document-uri</code></dt>
 <dd>The URI of the document in which the violation occurred.</dd>
 <dt><code>effective-directive</code></dt>
 <dd>The directive whose enforcement caused the violation.</dd>
 <dt><code>original-policy</code></dt>
 <dd>The original policy as specified by the <code>Content-Security-Policy-Report-Only</code> HTTP header.</dd>
 <dt><code>referrer</code></dt>
 <dd>The referrer of the document in which the violation occurred.</dd>
 <dt><code>script-sample</code></dt>
 <dd>The first 40 characters of the inline script, event handler, or style that caused the violation.</dd>
 <dt><code>status-code</code></dt>
 <dd>The HTTP status code of the resource on which the global object was instantiated.</dd>
 <dt><code>violated-directive</code></dt>
 <dd>The name of the policy section that was violated.</dd>
</dl>

<h2 id="Sample_violation_report" name="Sample_violation_report">違反レポートのサンプル</h2>

<div>Let's consider a page located at <code>http://example.com/signup.html</code>. It uses the following policy, disallowing everything but stylesheets from <code>cdn.example.com</code>.</div>

<div>
<pre class="notranslate">Content-Security-Policy-Report-Only: default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports</pre>
</div>

<div>The HTML of <code>signup.html</code> looks like this:</div>

<pre class="brush: html notranslate">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Sign Up&lt;/title&gt;
    &lt;link rel="stylesheet" href="css/style.css"&gt;
  &lt;/head&gt;
  &lt;body&gt;
    ... Content ...
  &lt;/body&gt;
&lt;/html&gt;</pre>

<div>Can you spot the violation? Stylesheets are only allowed to be loaded from <code>cdn.example.com</code>, yet the website tries to load one from its own origin (<code>http://example.com</code>). A browser capable of enforcing CSP will send the following violation report as a POST request to <code>http://example.com/_/csp-reports</code>, when the document is visited:</div>

<pre class="brush: js notranslate">{
  "csp-report": {
    "document-uri": "http://example.com/signup.html",
    "referrer": "",
    "blocked-uri": "http://example.com/css/style.css",
    "violated-directive": "style-src cdn.example.com",
    "original-policy": "default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports",
    "disposition": "report"
  }
}</pre>

<p>As you can see, the report includes the full path to the violating resource in <code>blocked-uri</code>. This is not always the case. For example, when the <code>signup.html</code> would attempt to load CSS from <code>http://anothercdn.example.com/stylesheet.css</code>, the browser would <em>not</em> include the full path but only the origin (<code>http://anothercdn.example.com</code>). This is done to prevent leaking sensitive information about cross-origin resources.</p>

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
   <td>{{specName("CSP 3.0")}}</td>
   <td>{{Spec2('CSP 3.0')}}</td>
   <td>変更なし</td>
  </tr>
  <tr>
   <td>{{specName("CSP 1.1")}}</td>
   <td>{{Spec2('CSP 1.1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.Content-Security-Policy-Report-Only")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPHeader("Content-Security-Policy")}}</li>
 <li>CSP {{CSP("report-uri")}} ディレクティブ</li>
 <li><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy">WebExtensions のコンテンツセキュリティ</a></li>
 <li><a href="/ja/docs/Tools/GCLI/Display_security_and_privacy_policies">Display security and privacy policies In Firefox Developer Tools</a></li>
</ul>
