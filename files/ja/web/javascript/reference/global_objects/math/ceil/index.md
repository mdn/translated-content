---
title: Math.ceil()
slug: Web/JavaScript/Reference/Global_Objects/Math/ceil
tags:
  - JavaScript
  - Math
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/ceil
---
<div>{{JSRef}}</div>

<p><strong><code>Math.ceil()</code></strong> 関数は、引数として与えた数以上の最小の整数を返します。</p>

<p><strong>注: </strong><code>Math.ceil({{jsxref("null")}})</code> は整数の 0 を返し、 {{jsxref("NaN")}} エラーは返しません。</p>

<div>{{EmbedInteractiveExample("pages/js/math-ceil.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><code>Math.ceil(<var>x</var>)</code></pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>x</var></code></dt>
 <dd>数値。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>引数として与えた数以上の最小の整数を返します。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>ceil()</code> は <code>Math</code> オブジェクトの静的メソッドなので、 <code>Math</code> オブジェクトを生成してメソッドとして使用するのではなく、常に <code>Math.ceil()</code> として使用するようにしてください (<code>Math</code> はコンストラクターではありません)。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_Math.ceil" name="Using_Math.ceil">Math.ceil() の使用</h3>

<p>以下の例は、<code>Math.ceil()</code> を使用した例です。</p>

<pre class="brush: js">Math.ceil(.95);    // 1
Math.ceil(4);      // 4
Math.ceil(7.004);  // 8
Math.ceil(-0.95);  // -0
Math.ceil(-4);     // -4
Math.ceil(-7.004); // -7
</pre>

<h3 id="Decimal_adjustment" name="Decimal_adjustment">10進補正 (Decimal adjustment)</h3>

<pre class="brush: js">// Closure
(function() {
  /**
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
  if (!Math.round10) {
    Math.round10 = function(value, exp) {
      return decimalAdjust('round', value, exp);
    };
  }
  // Decimal floor
  if (!Math.floor10) {
    Math.floor10 = function(value, exp) {
      return decimalAdjust('floor', value, exp);
    };
  }
  // Decimal ceil
  if (!Math.ceil10) {
    Math.ceil10 = function(value, exp) {
      return decimalAdjust('ceil', value, exp);
    };
  }
})();

// Round
Math.round10(55.55, -1);   // 55.6
Math.round10(55.549, -1);  // 55.5
Math.round10(55, 1);       // 60
Math.round10(54.9, 1);     // 50
Math.round10(-55.55, -1);  // -55.5
Math.round10(-55.551, -1); // -55.6
Math.round10(-55, 1);      // -50
Math.round10(-55.1, 1);    // -60
// Floor
Math.floor10(55.59, -1);   // 55.5
Math.floor10(59, 1);       // 50
Math.floor10(-55.51, -1);  // -55.6
Math.floor10(-51, 1);      // -60
// Ceil
Math.ceil10(55.51, -1);    // 55.6
Math.ceil10(51, 1);        // 60
Math.ceil10(-55.59, -1);   // -55.5
Math.ceil10(-59, 1);       // -50
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
   <td>{{SpecName('ESDraft', '#sec-math.ceil', 'Math.ceil')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Math.ceil")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Math.abs()")}}</li>
 <li>{{jsxref("Math.floor()")}}</li>
 <li>{{jsxref("Math.round()")}}</li>
 <li>{{jsxref("Math.sign()")}}</li>
 <li>{{jsxref("Math.trunc()")}}</li>
</ul>
