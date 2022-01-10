---
title: Number.NaN
slug: Web/JavaScript/Reference/Global_Objects/Number/NaN
tags:
  - JavaScript
  - Number
  - プロパティ
translation_of: Web/JavaScript/Reference/Global_Objects/Number/NaN
---
<div>{{JSRef}}</div>

<p><strong><code>Number.NaN</code></strong> は<ruby>非数<rp> (</rp><rt>Not-A-Number</rt><rp>) </rp></ruby>を表す値です。これは {{jsxref("NaN")}} と同じです。</p>

<div>{{EmbedInteractiveExample("pages/js/number-nan.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<p>この静的プロパティにアクセスするために {{jsxref("Number")}} オブジェクトを生成する必要はありません (<code>Number.NaN</code> を使用してください)。</p>

<div>{{js_property_attributes(0, 0, 0)}}</div>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Checking_whether_values_are_numeric" name="Checking_whether_values_are_numeric">値が数値であるかどうかのチェック</h3>

<pre class="brush: js notranslate">function sanitise(x) {
  if (isNaN(x)) {
    return Number.NaN;
  }
  return x;
}</pre>

<h3 id="Testing_against_NaN" name="Testing_against_NaN">NaN に対するテスト</h3>

<p><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/NaN#Testing_against_NaN">NaN に対するテスト</a>を <code>NaN</code> のページで参照してください。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-number.nan', 'Number.NaN')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Number.NaN")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>グローバル {{jsxref("NaN")}} オブジェクト</li>
 <li>{{jsxref("Number")}} オブジェクトに所属しています。</li>
</ul>
