---
title: lang
slug: Web/Manifest/lang
tags:
  - Manifest
  - Web
  - lang
  - マニフェスト
translation_of: Web/Manifest/lang
---
<div>{{QuickLinksWithSubpages("/ja/docs/Web/Manifest")}}</div>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">型</th>
   <td><code>String</code></td>
  </tr>
  <tr>
   <th scope="row">必須</th>
   <td>いいえ</td>
  </tr>
 </tbody>
</table>

<p><dfn><code>lang</code></dfn> メンバーは単一の<a href="../HTML/Global_attributes/lang">言語タグ</a>を持つ文字列です。これは、マニフェストの書字方向に対応しているメンバーの主言語を指定し、 <code><a href="./dir">dir</a></code> と共に書字方向を特定します。</p>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: json" dir="rtl">"lang": "en-US"</pre>

<h2 id="Specification" name="Specification">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
   <th scope="col">フィードバック</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>
    <p>{{SpecName('Manifest', '#lang-member', 'lang')}}</p>
   </td>
   <td>
    <p>{{Spec2('Manifest')}}</p>
   </td>
   <td>
    <p>初回定義</p>
   </td>
   <td>
    <p><a href="https://github.com/w3c/manifest/issues/">Web App Manifest Working Group drafts</a></p>
   </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("html.manifest.lang")}}</p>
