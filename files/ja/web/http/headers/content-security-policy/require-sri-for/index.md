---
title: 'CSP: require-sri-for'
slug: Web/HTTP/Headers/Content-Security-Policy/require-sri-for
tags:
  - CSP
  - Directive
  - HTTP
  - Reference
  - Security
  - Subresource Integrity
  - require-sri-for
translation_of: Web/HTTP/Headers/Content-Security-Policy/require-sri-for
---
<div>{{Obsolete_header}}</div>

<p><a href="/ja/docs/Web/HTTP">HTTP</a> の {{HTTPHeader("Content-Security-Policy")}} における <code><strong>require-sri-for</strong></code> ディレクティブは、クライアントにページ上でスクリプトやスタイルの<a href="/ja/docs/Web/Security/Subresource_Integrity">サブリソース完全性</a>を要求することを支持します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Content-Security-Policy: require-sri-for script;
Content-Security-Policy: require-sri-for style;
Content-Security-Policy: require-sri-for script style;
</pre>

<dl>
 <dt><code>script</code></dt>
 <dd>{{Glossary("SRI")}} をスクリプトに要求します。</dd>
 <dt><code>style</code></dt>
 <dd>{{Glossary("SRI")}} をスタイルシートに要求します。</dd>
 <dt><code>script style</code></dt>
 <dd>{{Glossary("SRI")}} をスクリプトとスタイルシートの両方に要求します。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>このディレクティブを使ってスクリプトやスタイルに SRI を要求するようにサイトを設定している場合の設定です。</p>

<pre class="notranslate">Content-Security-Policy: require-sri-for script style</pre>

<p>以下のような {{HTMLElement("script")}} 要素は正しい <code>integrity</code> 属性を使用している場合に限り、読み込まれます。</p>

<pre class="brush: html; example-good notranslate">&lt;script src="https://code.jquery.com/jquery-3.1.1.slim.js"
        integrity="sha256-5i/mQ300M779N2OVDrl16lbohwXNUdzL/R2aVUXyXWA="
        crossorigin="anonymous"&gt;&lt;/script&gt;</pre>

<p>しかし、 <code>integrity</code> のないスクリプトは読み込まれなくなります。</p>

<pre class="brush: html; example-bad notranslate">&lt;script src="https://code.jquery.com/jquery-3.1.1.slim.js"&gt;&lt;/script&gt;</pre>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.csp.Content-Security-Policy.require-sri-for")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPHeader("Content-Security-Policy")}}</li>
 <li><a href="/ja/docs/Web/Security/Subresource_Integrity">サブリソース完全性</a></li>
</ul>
