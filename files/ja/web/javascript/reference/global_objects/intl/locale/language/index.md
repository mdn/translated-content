---
title: Intl.Locale.prototype.language
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/language
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Property
  - Prototype
  - Reference
  - プロパティ
  - 国際化
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Locale/language
---
<div>{{JSRef}}</div>

<p><span class="seoSummary"><strong><code>Intl.Locale.prototype.language</code></strong> プロパティは、ロケールに関連付けられた言語を返すアクセサープロパティです。</span></p>

<h2 id="Description" name="Description">解説</h2>

<p>言語はロケールの中核的な特徴の一つです。 Unicode 仕様書では、ロケールの言語識別子を言語と地域を合わせたものとして扱います (イギリス英語とアメリカ英語などの方言や変化形を区別するためです)。 {{jsxref("Locale", "Locale")}} の <code>language</code> プロパティは、ロケールの言語サブタグを厳密に返します。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Setting_the_script_in_the_locale_identifier_string_argument" name="Setting_the_script_in_the_locale_identifier_string_argument">ロケール識別子の文字列引数で言語を設定</h3>

<p>有効な Unicode 言語識別子となるためには、文字列は言語サブタグで始めなければなりません。 {{jsxref("Locale/Locale", "Locale")}} コンストラクターの主要な引数には、有効な Unicode ロケール識別子がなければならないので、コンストラクターを使用する際には必ず言語サブタグを持つ識別子を渡さなければなりません。</p>

<pre class="brush: js">let langStr = new Intl.Locale("en-Latn-US");

console.log(langStr.language); // "en" と表示</pre>

<h3 id="Setting_the_script_via_the_configuration_object" name="Setting_the_script_via_the_configuration_object">構成オブジェクトにより言語を上書き</h3>

<p>言語サブタグは指定する必要がありますが、 {{jsxref("Locale/Locale", "Locale")}} コンストラクターは構成オブジェクトを取り、これを用いて言語サブタグを上書きすることができます。</p>

<pre class="brush: js">let langObj = new Intl.Locale("en-Latn-US", {language: "es"});

console.log(langObj.language); // "es" と表示</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ES Int Draft', '#sec-Intl.Locale.prototype.language')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>{{Compat("javascript.builtins.Intl.Locale.language")}}</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Locale", "Locale")}}</li>
 <li><a href="https://www.unicode.org/reports/tr35/#unicode_language_subtag_validity">Unicode 言語サブタグ仕様書</a></li>
</ul>
