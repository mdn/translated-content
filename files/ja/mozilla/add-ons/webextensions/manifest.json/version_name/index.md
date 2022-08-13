---
title: version_name
slug: Mozilla/Add-ons/WebExtensions/manifest.json/version_name
tags:
  - Add-ons
  - Extensions
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/version_name
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
   <td>いいえ</td>
  </tr>
  <tr>
   <th scope="row">例</th>
   <td>
    <pre class="brush: json no-line-numbers">
"version_name": "0.1 beta"</pre>
   </td>
  </tr>
 </tbody>
</table>

<p>アップデート目的で使われる <a href="/ja/Add-ons/WebExtensions/manifest.json/version">version</a> 項目に加えて、<a href="https://developer.chrome.com/extensions/manifest/version">version_name</a> はバージョン説明の文字列をセットできて、存在する場合は表示目的に使われます。</p>

<p><strong>version_name</strong> が存在しない場合、<strong>version</strong> 項目が同様な表示目的で使われます。</p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<p>{{Compat("webextensions.manifest.version_name")}}</p>
