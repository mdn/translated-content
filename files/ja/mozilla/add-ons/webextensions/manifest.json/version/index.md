---
title: version
slug: Mozilla/Add-ons/WebExtensions/manifest.json/version
tags:
  - Add-ons
  - Extensions
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/version
---
<p>{{AddonSidebar}}</p>

<table class="fullwidth-table standard-table">
 <tbody>
  <tr>
   <th scope="row" style="width: 30%;">型</th>
   <td><code>String</code></td>
  </tr>
  <tr>
   <th scope="row">必須</th>
   <td>
    <p>はい</p>
   </td>
  </tr>
  <tr>
   <th scope="row">例</th>
   <td>
    <pre class="brush: json">
"version": "0.1"</pre>
   </td>
  </tr>
 </tbody>
</table>

<p>ドットで区切られた数字と ASCII 文字でフォーマットされた拡張機能のバージョンです。バージョンのフォーマットの詳細は <a href="/ja/docs/Toolkit_version_format">Version format</a> ページを見てください。</p>

<p><a href="https://developer.chrome.com/extensions/manifest/version">Chrome の <code>version</code> 定義の構文</a>は、Firefox のものよりも制限が厳しいことに注意してください。</p>

<ul>
 <li>Chrome で有効な <code>version</code> の値は、常に Firefox でも有効です。</li>
 <li>Firefox で有効な <code>version</code> の値は Chrome でも有効とは限りません。</li>
</ul>

<p>AMOキュー内でバージョンを "beta" にマークする特別ルールについては <a href="/ja/Add-ons/Distribution#Beta_versions">maintenance policy</a> を見てください。</p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: json no-line-numbers  language-json"><code class="language-json"><span class="key token">"version":</span> <span class="string token">"0.1"</span></code></pre>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<p>{{Compat("webextensions.manifest.version")}}</p>
