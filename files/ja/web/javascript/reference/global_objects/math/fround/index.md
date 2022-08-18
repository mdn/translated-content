---
title: Math.fround()
slug: Web/JavaScript/Reference/Global_Objects/Math/fround
tags:
  - ES6
  - JavaScript
  - Math
  - Method
  - Reference
  - fround
translation_of: Web/JavaScript/Reference/Global_Objects/Math/fround
---
<div>{{JSRef}}</div>

<p class="seoSummary"><strong><code>Math.fround()</code></strong> 関数は、ある {{jsxref("Number")}} を表す最も近い{{interwiki("wikipedia", "単精度浮動小数点数", "32ビット単精度")}}浮動小数点数を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/math-fround.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">var <var>singleFloat</var> = Math.fround(<var>doubleFloat</var>);</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>doubleFloat</var></code></dt>
 <dd>{{jsxref("Number")}}。この引数が異なる方であった場合は、数値に変換されるか、変換できなければ {{jsxref("NaN")}} になります。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>与えられた値を表す最も近い {{interwiki("wikipedia", "単精度浮動小数点数", "32 ビット単精度")}}浮動小数点数です。</p>

<h2 id="Description" name="Description">解説</h2>

<p>JavaScriptは内部的に 64 ビットの倍精度浮動小数点数を使用しており、非常に高い精度を提供しています。しかし、例えば {{jsxref("Float32Array")}} から値を読み込む場合など 32 ビットの浮動小数点数を扱うことがあるかもしれません。これは混乱を招く可能性があります。 64 ビットの浮動小数点数と 32 ビットの浮動小数点数が等しいかどうかをチェックすると、一見同じように見える数値であっても失敗することがあります。</p>

<p>これを解決するには、 <code>Math.fround()</code> を使用して、 64 ビット浮動小数点数を 32 ビットの浮動小数点数にキャストすることができます。内部的には、 JavaScript は数値を 64 ビットの浮動小数点数として扱い続けますが、仮数の23番目のビットに「偶数への丸め」を実行し、それに続く仮数ビットをすべて 0 に設定します。数値が 32 ビットの浮動小数点数の範囲外の場合は、 {{jsxref("Infinity")}} または <code>-Infinity</code> が返されます。</p>

<p><code>fround()</code> は <code>Math</code> の静的メソッドであるため、生成した <code>Math</code> オブジェクトのメソッドとしてではなく、常に <code>Math.fround()</code> として使用するようにしてください (<code>Math</code> はコンストラクターではありません)。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_Math.fround" name="Using_Math.fround">Math.fround() の使用</h3>

<p>1.5 という数値は二進数で正確に表すことができ、32ビットと64ビットとで同じになります。</p>

<pre class="brush: js notranslate">Math.fround(1.5); // 1.5
Math.fround(1.5) === 1.5; // true
</pre>

<p>しかし、 1.337 という数値は二進数では正確に表すことができず、32ビットと64ビットとで異なります。</p>

<pre class="brush: js notranslate">Math.fround(1.337); // 1.3370000123977661
Math.fround(1.337) === 1.337; // false
</pre>

<p><math><semantics><msup><mn>2</mn><mn>150</mn></msup><annotation encoding="TeX">2^150</annotation></semantics></math> は32ビット浮動小数点では大きすぎるため、 <code>Infinity</code> が返されます。</p>

<pre class="brush: js notranslate">2 ** 150; // 1.42724769270596e+45
Math.fround(2 ** 150); // Infinity
</pre>

<p>引数が数値に変換できない場合、または{{interwiki("wikipedia", "NaN", "非数")}} (<code>NaN</code>) であった場合、 <code>Math.fround()</code> は <code>NaN</code> を返します。</p>

<pre class="brush: js notranslate">Math.fround('abc'); // NaN
Math.fround(NaN); // NaN
</pre>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<p>これは {{jsxref("Float32Array")}} に対応している場合、次の関数でエミュレートできます。</p>

<pre class="brush: js notranslate">Math.fround = Math.fround || (function (array) {
  return function(x) {
    return array[0] = x, array[0];
  };
})(new Float32Array(1));
</pre>

<p>古いブラウザーに対応するには、より遅いですが、次のものも利用できます。</p>

<pre class="brush: js notranslate">if (!Math.fround) Math.fround = function(arg) {
  arg = Number(arg);
  // Return early for ±0 and NaN.
  if (!arg) return arg;
  var sign = arg &lt; 0 ? -1 : 1;
  if (sign &lt; 0) arg = -arg;
  // Compute the exponent (8 bits, signed).
  var exp = Math.floor(Math.log(arg) / Math.LN2);
  var powexp = Math.pow(2, Math.max(-126, Math.min(exp, 127)));
  // Handle subnormals: leading digit is zero if exponent bits are all zero.
  var leading = exp &lt; -127 ? 0 : 1;
  // Compute 23 bits of mantissa, inverted to round toward zero.
  var mantissa = Math.round((leading - arg / powexp) * 0x800000);
  if (mantissa &lt;= -0x800000) return sign * Infinity;
  return sign * powexp * (leading - mantissa / 0x800000);
};</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-math.fround', 'Math.fround')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Math.fround")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Math.round()")}}</li>
</ul>
