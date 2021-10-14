---
title: Math.floor()
slug: Web/JavaScript/Reference/Global_Objects/Math/floor
tags:
  - JavaScript
  - Math
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/floor
---
<div>{{JSRef}}</div>

<p><strong><code>Math.floor()</code></strong> 関数は与えられた数値以下の最大の整数を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/math-floor.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Math.floor(<var>x</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>x</var></code></dt>
 <dd>数値です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>指定された数値以下の最大の整数を表す数値です。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>floor()</code> は <code>Math</code> オブジェクトの静的なメソッドなので、自ら生成した <code>Math</code> オブジェクトのメソッドとしてではなく、常に、<code>Math.floor()</code> として使用するようにしてください (<code>Math</code> のコンストラクターはありません)。</p>

<div class="blockIndicator note">
<p><strong>注: </strong><code>Math.floor(null)</code> は {{jsxref("NaN")}} ではなく 0 を返します。</p>
</div>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_Math.floor" name="Using_Math.floor">Math.floor() の使用</h3>

<pre class="brush: js notranslate">Math.floor( 45.95); //  45
Math.floor( 45.05); //  45
Math.floor(  4   ); //   4
Math.floor(-45.05); // -46
Math.floor(-45.95); // -46
</pre>

<h3 id="Decimal_adjustment" name="Decimal_adjustment">十進数の丸め</h3>

<pre class="brush: js notranslate">/**
 * Decimal adjustment of a number.
 *
 * @param {String}  type  The type of adjustment.
 * @param {Number}  value The number.
 * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
 * @returns {Number} The adjusted value.
 */
function decimalAdjust(type, value, exp) {
  // If the exp is undefined or zero...
  if (typeof exp === 'undefined' || +exp === 0) {
    return Math[type](value);
  }
  value = +value;
  exp = +exp;
  // If the value is not a number or the exp is not an integer...
  if (isNaN(value) || !(typeof exp === 'number' &amp;&amp; exp % 1 === 0)) {
    return NaN;
  }
  // Shift
  value = value.toString().split('e');
  value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
  // Shift back
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
}

// Decimal round
const round10 = (value, exp) =&gt; decimalAdjust('round', value, exp);
// Decimal floor
const floor10 = (value, exp) =&gt; decimalAdjust('floor', value, exp);
// Decimal ceil
const ceil10 = (value, exp) =&gt; decimalAdjust('ceil', value, exp);

// Round
round10(55.55, -1);   // 55.6
round10(55.549, -1);  // 55.5
round10(55, 1);       // 60
round10(54.9, 1);     // 50
round10(-55.55, -1);  // -55.5
round10(-55.551, -1); // -55.6
round10(-55, 1);      // -50
round10(-55.1, 1);    // -60
// Floor
floor10(55.59, -1);   // 55.5
floor10(59, 1);       // 50
floor10(-55.51, -1);  // -55.6
floor10(-51, 1);      // -60
// Ceil
ceil10(55.51, -1);    // 55.6
ceil10(51, 1);        // 60
ceil10(-55.59, -1);   // -55.5
ceil10(-59, 1);       // -50
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
   <td>{{SpecName('ESDraft', '#sec-math.floor', 'Math.floor')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Math.floor")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Math.abs()")}}</li>
 <li>{{jsxref("Math.ceil()")}}</li>
 <li>{{jsxref("Math.round()")}}</li>
 <li>{{jsxref("Math.sign()")}}</li>
 <li>{{jsxref("Math.trunc()")}}</li>
</ul>
