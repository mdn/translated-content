---
title: Math.hypot()
slug: Web/JavaScript/Reference/Global_Objects/Math/hypot
tags:
  - JavaScript
  - Math
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/hypot
---
<div>{{JSRef}}</div>

<p><strong><code>Math.hypot()</code></strong> 関数は、各引数の二乗の合計値の平方根を返します。</p>

<p><math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.hypot</mo><mo stretchy="false">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo>,</mo><mo>…</mo><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><msqrt><mrow><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msubsup><mi>v</mi><mi>i</mi><mn>2</mn></msubsup></mrow></msqrt><mo>=</mo><msqrt><mrow><msubsup><mi>v</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>v</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mo>…</mo><mo>+</mo><msubsup><mi>v</mi><mi>n</mi><mn>2</mn></msubsup></mrow></msqrt></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.hypot}(v_1, v_2, \dots, v_n)} = \sqrt{\sum_{i=1}^n v_i^2} = \sqrt{v_1^2 + v_2^2 + \dots + v_n^2}</annotation></semantics></math></p>

<div>{{EmbedInteractiveExample("pages/js/math-hypot.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力してくださる場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Math.hypot([<var>value1</var>[, <var>value2</var>[, ...]]])</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>value1</var>, <var>value2</var>, ...</code></dt>
 <dd>数値です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>与えられた各引数の二乗の合計値の平方根を返します。1つ上の引数が数値に変換できなかった場合は、 {{jsxref("NaN")}} が返されます。</p>

<h2 id="Description" name="Description">解説</h2>

<p>直角三角形の斜辺や、複素数の大きさを計算するには <code>Math.sqrt(v1*v1 + v2*v2)</code> という公式を用い、ここで v1 と v2 は三角形の辺の長さであったり、複素数の実数と複素数部分であったりします。二次元またはそれ以上の次元における対応する距離は、 <code>Math.sqrt(v1*v1 + v2*v2 + v3*v3 + v4*v4)</code> のように平方根の下にさらに多くの平方を足すことで計算できます。</p>

<p>この関数はこの計算をより簡単に、より高速に行います。 <code>Math.hypot(v1, v2)</code> または <code>Math.hypot(v1, v2, v3, v4, ...)</code> を呼び出すだけです。</p>

<p><code>Math.hypot</code> はまた、数値が非常に大きい場合のオーバーフロー/アンダーフローの問題を回避します。 JS で表現できる最大の数は <code>Number.MAX_VALUE</code> で、これは約 10<sup>308</sup> です。数字の大きさが約 10<sup>154</sup> よりも大きい場合、その2乗を取ると無限大になります。例えば、 <code>Math.sqrt(1e200*1e200 + 1e200*1e200) = Infinity</code>. 代わりに <code>hypot()</code> を使うと、 <code>Math.hypot(1e200, 1e200) = 1.4142...e+200</code> となり、より良い答えが得られます。これは非常に小さな数の場合にも当てはまります。 <code>Math.sqrt(1e-200*1e-200 + 1e-200*1e-200) = 0</code> ですが、 <code>Math.hypot(1e-200, 1e-200) = 1.4142...e-200</code> となります。</p>

<p><code>hypot()</code> は <code>Math</code> の静的メソッドなので、常に <code>Math.hypot()</code> として使用し、自分で <code>Math</code> オブジェクトを生成してそのメソッドとして使用しないでください。 (<code>Math</code> にはコンストラクターがありません)。</p>

<p>引数が与えられなかった場合、結果は +0 になります。引数のいずれかが ±Infinity であった場合、結果は Infinity になります。引数のいずれかが NaN であった場合は (他に ±Infinity の引数がない限り)、結果は NaN になります。数値に変換できない引数があった場合は、結果は {{jsxref("NaN")}} になります。</p>

<p>引数が1つの場合、 <code>Math.hypot()</code> は <code>Math.abs()</code> と同等です。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_Math.hypot" name="Using_Math.hypot">Math.hypot() の使用</h3>

<pre class="brush: js notranslate">Math.hypot(3, 4);          // 5
Math.hypot(3, 4, 5);       // 7.0710678118654755
Math.hypot();              // 0
Math.hypot(NaN);           // NaN
Math.hypot(NaN, Infinity); // Infinity
Math.hypot(3, 4, 'foo');   // NaN, since +'foo' =&gt; NaN
Math.hypot(3, 4, '5');     // 7.0710678118654755, +'5' =&gt; 5
Math.hypot(-3);            // 3, the same as Math.abs(-3)
</pre>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<p>オーバーフロー/アンダーフローの問題を処理しないナイーブなアプローチです。</p>

<pre class="brush: js notranslate">if (!Math.hypot) Math.hypot = function() {
  var y = 0, i = arguments.length, containsInfinity = false;
  while (i--) {
    var arg = arguments[i];
    if (arg === Infinity || arg === -Infinity)
      containsInfinity = true
    y += arg * arg
  }
  return containsInfinity ? Infinity : Math.sqrt(y)
}
</pre>

<p>アンダーフローやオーバーフローを回避するポリフィルです。</p>

<pre class="brush: js notranslate">if (!Math.hypot) Math.hypot = function () {
  var max = 0;
  var s = 0;
  var containsInfinity = false;
  for (var i = 0; i &lt; arguments.length; ++i) {
    var arg = Math.abs(Number(arguments[i]));
    if (arg === Infinity)
      containsInfinity = true
    if (arg &gt; max) {
      s *= (max / arg) * (max / arg);
      max = arg;
    }
    s += arg === 0 &amp;&amp; max === 0 ? 0 : (arg / max) * (arg / max);
  }
  return containsInfinity ? Infinity : (max === 1 / 0 ? 1 / 0 : max * Math.sqrt(s));
};
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
   <td>{{SpecName('ESDraft', '#sec-math.hypot', 'Math.hypot')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Math.hypot")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Math.abs()")}}</li>
 <li>{{jsxref("Math.pow()")}}</li>
 <li>{{jsxref("Math.sqrt()")}}</li>
</ul>
