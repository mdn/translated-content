---
title: default_locale
slug: Mozilla/Add-ons/WebExtensions/manifest.json/default_locale
tags:
  - Add-ons
  - Extensions
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/default_locale
---
<div>{{AddonSidebar}}</div>

<table class="fullwidth-table standard-table">
 <tbody>
  <tr>
   <th scope="row" style="width: 30%;">型</th>
   <td><code>String</code></td>
  </tr>
  <tr>
   <th scope="row">必須</th>
   <td>条件次第: _locales サブディレクトリがある場合は必要で、そうでない場合は不要。</td>
  </tr>
  <tr>
   <th scope="row">例</th>
   <td>
    <pre class="brush: json">
"default_locale": "en"</pre>
   </td>
  </tr>
 </tbody>
</table>

<p>このキーは拡張機能が _locales ディレクトリを含んでいる場合は必要で、そうでない場合は不要です。これは _locales のサブディレクトリを識別し、このサブディレクトリは拡張機能の既定の文字列を探すために使用されます。</p>

<p><a href="/ja/Add-ons/WebExtensions/Internationalization">国際化</a>を見てください。</p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: json no-line-numbers  language-json"><code class="language-json"><span class="key token">"default_locale":</span> <span class="string token">"en"</span></code></pre>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<p>{{Compat("webextensions.manifest.default_locale")}}</p>
