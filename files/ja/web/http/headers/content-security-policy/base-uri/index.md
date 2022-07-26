---
title: 'CSP: base-uri'
slug: Web/HTTP/Headers/Content-Security-Policy/base-uri
tags:
  - CSP
  - Directive
  - Document directive
  - HTTP
  - Security
translation_of: Web/HTTP/Headers/Content-Security-Policy/base-uri
---
<div>{{HTTPSidebar}}</div>

<p>HTTP {{HTTPHeader("Content-Security-Policy")}} の <strong><code>base-uri</code></strong> ディレクティブは、ドキュメントの要素 {{HTMLElement("base")}} で、使用できる URL を制限します。この値が存在しない場合は、任意の URI が許可されます。このディレクティブが存在しない場合、ユーザーエージェントは、{{HTMLElement("base")}} 要素の値を使用します。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">CSP version</th>
   <td>2</td>
  </tr>
  <tr>
   <th scope="row">Directive type</th>
   <td>{{Glossary("Document directive")}}</td>
  </tr>
  <tr>
   <th scope="row">{{CSP("default-src")}} fallback</th>
   <td>設定しないと、任意の URL が許可されます。</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax" name="Syntax">構文</h2>

<p>1 つまたは複数のソースを base-uri ポリシーに使用:</p>

<pre class="syntaxbox">Content-Security-Policy: base-uri &lt;source&gt;;
Content-Security-Policy: base-uri &lt;source&gt; &lt;source&gt;;
</pre>

<h3 id="Sources" name="Sources">ソース</h3>

<p>このディレクティブは他の CSP ディレクティブと同じ引数を使用しますが、キーワードの <code>'unsafe-inline'</code> や <code>'strict-dynamic'</code> などは意味がありません。</p>

<p>{{page("ja/docs/Web/HTTP/Headers/Content-Security-Policy/default-src", "Sources")}}</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Meta_tag_configuration" name="Meta_tag_configuration">Meta タグの設定</h3>

<pre class="brush: html">&lt;meta http-equiv="Content-Security-Policy" content="base-uri 'self'"&gt;</pre>

<h3 id="Apache_configuration" name="Apache_configuration">Apache の設定</h3>

<pre class="brush: bash">&lt;IfModule mod_headers.c&gt;
Header set Content-Security-Policy "base-uri 'self'";
&lt;/IfModule&gt;</pre>

<h3 id="Nginx_configuration" name="Nginx_configuration">Nginx の設定</h3>

<pre class="brush: bash">add_header Content-Security-Policy "base-uri 'self';"</pre>

<h3 id="Violation_case" name="Violation_case">違反になる場合</h3>

<p>ドメインが <code>example.com</code> でないので、<code>https://example.com</code> に設定された {{HTMLElement("base")}} 要素の <code>href</code> が CSP 違反になります。</p>

<pre class="brush: html; example-bad">&lt;meta http-equiv="Content-Security-Policy" content="base-uri 'self'"&gt;
&lt;base href="https://example.com/"&gt;

// Error: Refused to set the document's base URI to 'https://example.com/'
// because it violates the following Content Security Policy
// directive: "base-uri 'self'"</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{specName("CSP 3.0", "#directive-base-uri", "base-uri")}}</td>
   <td>{{Spec2('CSP 3.0')}}</td>
   <td>変更無し</td>
  </tr>
  <tr>
   <td>{{specName("CSP 1.1", "#directive-base-uri", "base-uri")}}</td>
   <td>{{Spec2('CSP 1.1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<p>{{Compat("http.headers.csp.base-uri")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPheader("Content-Security-Policy")}}</li>
 <li>{{HTMLElement("base")}}</li>
 <li>{{domxref("Node.baseURI")}}</li>
</ul>
