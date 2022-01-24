---
title: Intl.NumberFormat.prototype.format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format
tags:
  - Internationalization
  - Intl
  - JavaScript
  - メソッド
  - NumberFormat
  - プロトタイプ
  - メソッド
  - 国際化
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format
---
{{JSRef}}

<strong>`Intl.NumberFormat.prototype.format()`</strong> メソッドは、この {{jsxref("NumberFormat")}} オブジェクトのロケールと整形オプションに従って数値を整形します。

{{EmbedInteractiveExample("pages/js/intl-numberformat-prototype-format.html", "taller")}}

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 [https://github.com/mdn/interactive-examples](https://github.com/mdn/interactive-examples) をクローンしてプルリクエストを送信してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">`numberFormat.format(number)`</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

 <dt>`number`</dt>
 <dd>整形する {{jsxref("Number")}} または {{jsxref("BigInt")}} です。</dd>

## 解説

`format` ゲッター関数は、この {{jsxref("NumberFormat")}} オブジェクトのロケールと整形オプションに従って数値を整形し、文字列に格納します。

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_format" name="Using_format">`format` の使用</h3>

`format` ゲッター関数を使用して単一の通貨値を整形しましょう。こちらはロシアの例です。

<pre class="brush: js">var options = { style: 'currency', currency: 'RUB' };
var numberFormat = new Intl.NumberFormat('ru-RU', options);
console.log(numberFormat.format(654321.987));
// → "654 321,99 руб."
</pre>

<h3 id="Using_format_with_map" name="Using_format_with_map">`format` と `map` の使用</h3>

`format` ゲッター関数を使用して、配列内のすべての数値を整形することができます。なお、この関数は供給元である {{jsxref("NumberFormat")}} に結び付けられているので、直接 {{jsxref("Array.prototype.map")}} に渡すことができます。

<pre class="brush: js">var a = [123456.789, 987654.321, 456789.123];
var numberFormat = new Intl.NumberFormat('es-ES');
var formatted = a.map(numberFormat.format);
console.log(formatted.join('; '));
// → "123.456,789; 987.654,321; 456.789,123"
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ES Int Draft', '#sec-intl.numberformat.prototype.format', 'Intl.NumberFormat.prototype.format')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
{{Compat("javascript.builtins.Intl.NumberFormat.format")}}
</div>

## 関連情報

<ul>
- {{jsxref("NumberFormat", "Intl.NumberFormat")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
</ul>
