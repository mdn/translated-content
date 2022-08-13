---
title: author
slug: Mozilla/Add-ons/WebExtensions/manifest.json/author
tags:
  - Add-ons
  - Extensions
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/author
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
   <td>いいえ</td>
  </tr>
  <tr>
   <th scope="row">例</th>
   <td>
    <pre class="brush: json no-line-numbers">
"author": "Walt Whitman"</pre>
   </td>
  </tr>
 </tbody>
</table>

<p>拡張機能の作者で、ブラウザーの UI で表示されることを目的とするものです。<a href="/ja/Add-ons/WebExtensions/manifest.json/developer">developer</a> キーが与えられてそこに "name" プロパティが含まれる場合、それは author キーを上書きします。複数の作者を指定する方法はありません。</p>

<p>これは<a href="/ja/Add-ons/WebExtensions/Internationalization#Internationalizing_manifest.json">ローカライズ可能なプロパティ</a>です。</p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: json  no-line-numbers">"author": "Walt Whitman"</pre>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<p>{{Compat("webextensions.manifest.author")}}</p>
