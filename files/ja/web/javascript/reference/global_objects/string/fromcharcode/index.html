---
title: String.fromCharCode()
slug: Web/JavaScript/Reference/Global_Objects/String/fromCharCode
tags:
  - JavaScript
  - Method
  - Reference
  - String
  - UTF-16
  - Unicode
translation_of: Web/JavaScript/Reference/Global_Objects/String/fromCharCode
---
<div>{{JSRef}}</div>

<p><strong><code>String.fromCharCode()</code></strong> 静的メソッドは、指定された UTF-16 コードユニットの並びから生成された文字列を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/string-fromcharcode.html","shorter")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">String.fromCharCode(<var>num1</var>[, ...[, <var>numN</var>]])</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code>num1, ..., num<em>N</em></code></dt>
 <dd>UTF-16 コードユニットを表す数値の並びです。範囲は <code>0</code> から <code>65535</code> (<code>0xFFFF</code>) までです。数値が <code>0xFFFF</code> を超えた場合は切り捨てられます。妥当性チェックは行われません。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>指定された <code><var>N</var></code> 個の UTF-16 コードユニットから生成された、長さ <code><var>N</var></code> の文字列です。</p>

<h2 id="Description" name="Description">解説</h2>

<p>このメソッドは {{jsxref("String")}} オブジェクトではなく文字列を返します。</p>

<p><code>fromCharCode()</code> は {{jsxref("String")}} の静的メソッドなので、自分で生成した {{jsxref("String")}} オブジェクトのメソッドではなく、常に、 <code>String.fromCharCode()</code> として使用するようにしてください。</p>

<h3 id="Returning_supplementary_characters" name="Returning_supplementary_characters">補助文字の返却</h3>

<p>UTF-16 では、もっとも一般的な文字は単一の 16 ビット値 (すなわちコードユニット) で表現することができます。しかし、この種の文字は、基本多言語面 (BMP) と呼ばれていますが、全体で指すことができる Unicode コードポイントの <sup>1</sup>/<sub>17</sub> でしかありません。残りのコードポイント、 <code>65536</code> (<code>0x010000</code>) から <code>1114111</code> (<code>0x10FFFF</code>) までは、補助文字と呼ばれています。 UTF-16 では、補助文字はサロゲートと呼ばれる 2 つの 16 ビットコードユニットで表現され、この目的のために予約されていました。2つのサロゲートの妥当な組み合わせを使用して、サロゲートペアと呼ばれる補助文字を表現します。</p>

<p><code>fromCharCode()</code> は 16 ビット値のみで動作するため (<code>\u</code> エスケープシーケンスと同様)、補助文字を返すためにはサロゲートペアが必要です。例えば、 <code>String.fromCharCode(0xD83C, 0xDF03)</code> と <code>\uD83C\uDF03</code> はコードポイント <code>U+1F303</code> "Night with Stars" です。</p>

<p>補助コードポイントの値 (例: 0x1F303) とそれを表す両方のサロゲート値 (例: 0xD83C や 0xDF03) との間には数学的な関係がありますが、補助コードポイントを使用するたびにサロゲートペアの値を計算したり参照したりする、余分なステップが必要になります。このため、実際のコードポイント値に基づいて補助文字を返すことができる {{jsxref("String.fromCodePoint()")}} (ES2015 標準の一部) を使用した方が便利です。例えば、 <code>String.fromCodePoint(0x1F303)</code> はコードポイント <code>U+1F303</code> "Night with Stars" を返します。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_fromCharCode" name="Using_fromCharCode">fromCharCode() の使用</h3>

<p>BMP 文字は、 UTF-16 では単一のコードユニットを使用します。</p>

<pre class="brush: js notranslate">String.fromCharCode(65, 66, 67);   // returns "ABC"
String.fromCharCode(0x2014);       // returns "—"
String.fromCharCode(0x12014);      // also returns "—"; the digit 1 is truncated and ignored
String.fromCharCode(8212);         // also returns "—"; 8212 is the decimal form of 0x2014
</pre>

<p>補助文字は、 UTF-16 では、 2 つのコードユニット (すなわちサロゲートペア) を必要とします。</p>

<pre class="brush: js notranslate">String.fromCharCode(0xD83C, 0xDF03); // Code Point U+1F303 "Night with
String.fromCharCode(55356, 57091);   // Stars" == "\uD83C\uDF03"

String.fromCharCode(0xD834, 0xDF06, 0x61, 0xD834, 0xDF07); // "\uD834\uDF06a\uD834\uDF07"
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
   <td>{{SpecName('ESDraft', '#sec-string.fromcharcode', 'String.fromCharCode')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.String.fromCharCode")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("String.fromCodePoint()")}}</li>
 <li>{{jsxref("String.prototype.charAt()")}}</li>
 <li>{{jsxref("String.prototype.charCodeAt()")}}</li>
 <li>{{jsxref("String.prototype.codePointAt()")}}</li>
</ul>
