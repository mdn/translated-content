---
title: name
slug: Mozilla/Add-ons/WebExtensions/manifest.json/name
tags:
  - Add-ons
  - Extensions
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/name
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
   <td>はい</td>
  </tr>
  <tr>
   <th scope="row">例</th>
   <td>
    <pre class="brush: json">
"name": "My Extension"</pre>
   </td>
  </tr>
 </tbody>
</table>

<p>拡張機能の名前です。これはブラウザーのユーザーインターフェースや addons.mozilla.org のようなサイトで拡張機能を識別するために使用されます。</p>

<p>名前がUIに表示されるよう長すぎないようにするのは良い習慣です。Google Chrome と Microsoft Edge は名前を45文字に制限しています。</p>

<p>これは<a href="/ja/Add-ons/WebExtensions/Internationalization#Internationalizing_manifest.json">国際化できるプロパティ</a>です。</p>

<h2 id="例">例</h2>

<pre class="brush: json no-line-numbers  language-json"><code class="language-json"><span class="key token">"name":</span> <span class="string token">"My Extension"</span></code></pre>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<p>{{Compat("webextensions.manifest.name")}}</p>
