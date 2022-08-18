---
title: Math.log1p()
slug: Web/JavaScript/Reference/Global_Objects/Math/log1p
tags:
  - ECMAScript 2015
  - JavaScript
  - Math
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/log1p
---
<div>{{JSRef}}</div>

<p><strong><code>Math.log1p()</code></strong> 関数は、 1 + 数値の ({{jsxref("Math.E", "e")}} を底とする) 自然対数を返します。</p>

<p><math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>&gt;</mo><mo>-</mo><mn>1</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log1p</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">\forall x &gt; -1, \mathtt{\operatorname{Math.log1p}(x)} = \ln(1 + x)</annotation></semantics></math></p>

<div>{{EmbedInteractiveExample("pages/js/math-log1p.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Math.log1p(<var>x</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>x</var></code></dt>
 <dd>数値です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>1 + 与えられた数値の ({{jsxref("Math.E", "e")}} を底とした) 自然対数です。数値が <strong>-1</strong> よりも小さかった場合は {{jsxref("NaN")}} が返されます。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code><var>x</var></code> の値が非常に小さかった場合、 1 を加えると有効精度が減少します。 JS で使用する倍精度浮動小数点型の精度は 15 桁です。 1 + 1e-15 = 1.000000000000001 ですが、 1 + 1e-16 = 1.000000000000000 となり、 15 桁を超えた桁は四捨五入されるため、正確に 1.0 となります。</p>

<p>log(1 + x) を計算すると、 x が小さければ、 x にとても近い答えになるはずです (これが「自然」対数と呼ばれる所以です)。 Math.log(1 + 1.1111111111e-15) を計算すると、 1.1111111111e-15 に近い答えが得られるはずです。しかし、 1.00000000000000111022 の対数を取ることになります (四捨五入は二進数なので、時に醜い結果になることがあります) ので、答えは 1.11022...e-15 となり、正しい数字は 3 桁だけです。もし、代わりに Math.log1p(1.1111111111e-15) を計算した場合は、もっとずっと正確な答えである 1.1111111110999995e-15 が得られ、 15 桁の正しい数字が得られます (この場合は実際には 16 桁です)。</p>

<p><code><var>x</var></code> の値が -1 未満であった場合、返値は常に {{jsxref("NaN")}} です。</p>

<p><code>log1p()</code> は <code>Math</code> の静的メソッドであるため、生成した <code>Math</code> オブジェクトのメソッドとしてではなく、常に <code>Math.log1p()</code> として使用するようにしてください (<code>Math</code> はコンストラクターではありません)。</p>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<p>これは次の関数でエミュレートできます。</p>

<pre class="brush: js notranslate">Math.log1p = Math.log1p || function(x) {
  x = Number(x);
  if (x &lt; -1 || x !== x)
    return NaN;
  if (x === 0 || x === Infinity)
    return x;

  var nearX = (x + 1) - 1;

  return nearX === 0 ? x : x * (Math.log(x + 1) / nearX);
};
</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_Math.log1p" name="Using_Math.log1p">Math.log1p() の使用</h3>

<pre class="brush: js notranslate">Math.log1p(1);  // 0.6931471805599453
Math.log1p(0);  // 0
Math.log1p(-1); // -Infinity
Math.log1p(-2); // NaN
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
   <td>{{SpecName('ESDraft', '#sec-math.log1p', 'Math.log1p')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Math.log1p")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Math.exp()")}}</li>
 <li>{{jsxref("Math.log()")}}</li>
 <li>{{jsxref("Math.expm1()")}}</li>
 <li>{{jsxref("Math.log10()")}}</li>
 <li>{{jsxref("Math.log2()")}}</li>
 <li>{{jsxref("Math.pow()")}}</li>
</ul>
