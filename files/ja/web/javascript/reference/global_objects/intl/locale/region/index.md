---
title: Intl.Locale.prototype.region
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/region
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Property
  - Prototype
  - Reference
  - プロパティ
  - 国際化
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Locale/region
---
<div>{{JSRef}}</div>

<p><strong><code>Intl.Locale.prototype.region</code></strong> プロパティは、ロケールに関連付けられた世界の地域 (ふつうは国) 返すアクセサープロパティです。</p>

<h2 id="Description" name="Description">解説</h2>

<p>地域は、ロケールを世界の特定の地域に位置づけるための、ロケール識別子の重要な要素となります。ロケールの地域を知ることは、ロケール間の違いを識別する上で非常に重要です。たとえば、イギリスとアメリカ合衆国では英語が使われていますが、両国間では綴りやその他の言語の慣習に違いがあります。ロケールの地域を知ることで、 JavaScript プログラマーがサイトやアプリケーションのコンテンツを世界の様々な地域から見たときに正しく表示されるようにするのに役立ちます。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Setting_the_region_in_the_locale_identifier_string_argument" name="Setting_the_region_in_the_locale_identifier_string_argument">ロケール識別子の文字列引数で地域を設定</h3>

<p>地域は、有効な Unicode 言語識別子文字列の３番目の部分であり、これを {{jsxref("Locale/Locale", "Locale")}} コンストラクターに渡すロケール識別子文字列に追加することで設定することができます。なお、地域はロケール識別子の必須項目ではありません。</p>

<pre class="brush: js">let regionStr = new Intl.Locale("en-Latn-US");

console.log(regionStr.region); // "US" と表示</pre>

<h3 id="Setting_the_region_via_the_configuration_object" name="Setting_the_region_via_the_configuration_object">構成オブジェクトから地域を設定</h3>

<p>{{jsxref("Locale/Locale", "Locale")}} コンストラクターは構成オブジェクトを取り、これを用いて地域のサブタグとプロパティを設定することができます。</p>

<pre class="brush: js">let regionObj = new Intl.Locale("ja-Jpan", {region: "JP"});

console.log(scriptObj.script); // "JP" と表示</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ES Int Draft', '#sec-Intl.Locale.prototype.region')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>{{Compat("javascript.builtins.Intl.Locale.region")}}</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Locale", "Intl.Locale")}}</li>
 <li><a href="https://www.unicode.org/cldr/charts/latest/supplemental/territory_containment_un_m_49.html">Unicode region chart</a></li>
</ul>
