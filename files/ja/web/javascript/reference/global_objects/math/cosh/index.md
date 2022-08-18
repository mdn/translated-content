---
title: Math.cosh()
slug: Web/JavaScript/Reference/Global_Objects/Math/cosh
tags:
  - JavaScript
  - Math
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/cosh
---
<div>{{JSRef}}</div>

<p><strong><code>Math.cosh()</code></strong> 関数は、引数として与えた数の双曲線余弦 (ハイパーボリックコサイン) を返します。これは{{jsxref("Math.E", "定数 e", "", 1)}} を使用して次のように表すことができます。</p>

<p><math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mo lspace="0em" rspace="thinmathspace">Math.cosh(x)</mo></mstyle><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><msup><mi>e</mi><mrow><mo>-</mo><mi>x</mi></mrow></msup></mrow><mn>2</mn></mfrac></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.cosh(x)}} = \frac{e^x + e^{-x}}{2}</annotation></semantics></math></p>

<div>{{EmbedInteractiveExample("pages/js/math-cosh.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Math.cosh(<var>x</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>x</var></code></dt>
 <dd>数値。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>指定された数値の双曲線余弦 (ハイパーボリックコサイン) です。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>cosh()</code> は <code>Math</code> の静的メソッドであるため、生成した <code>Math</code> オブジェクトのメソッドとしてではなく、常に <code>Math.cosh()</code> として使用するようにしてください (<code>Math</code> はコンストラクターではありません)。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_Math.cosh" name="Using_Math.cosh">Math.cosh() の使用</h3>

<pre class="brush: js notranslate">Math.cosh(0);  // 1
Math.cosh(1);  // 1.5430806348152437
Math.cosh(-1); // 1.5430806348152437
</pre>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<p>これは {{jsxref("Math.exp()")}} 関数を使用して次のようにエミュレートできます。</p>

<pre class="brush: js notranslate">Math.cosh = Math.cosh || function(x) {
  return (Math.exp(x) + Math.exp(-x)) / 2;
}
</pre>

<p>または {{jsxref("Math.exp()")}} 関数を一度だけ呼び出すようにすると、次のようになります。</p>

<pre class="brush: js notranslate">Math.cosh = Math.cosh || function(x) {
  var y = Math.exp(x);
  return (y + 1 / y) / 2;
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
   <td>{{SpecName('ESDraft', '#sec-math.cosh', 'Math.cosh')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Math.cosh")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Math.acosh()")}}</li>
 <li>{{jsxref("Math.asinh()")}}</li>
 <li>{{jsxref("Math.atanh()")}}</li>
 <li>{{jsxref("Math.sinh()")}}</li>
 <li>{{jsxref("Math.tanh()")}}</li>
</ul>
