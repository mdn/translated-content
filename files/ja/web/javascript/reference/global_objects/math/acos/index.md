---
title: Math.acos()
slug: Web/JavaScript/Reference/Global_Objects/Math/acos
tags:
  - JavaScript
  - Math
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/acos
---
<div>{{JSRef}}</div>

<p><strong><code>Math.acos()</code></strong> 関数は、引数として与えた数値の逆余弦 (アークコサイン) をラジアン単位で返します。</p>

<p><math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>∊</mo><mo stretchy="false">[</mo><mrow><mo>-</mo><mn>1</mn></mrow><mo>;</mo><mn>1</mn><mo stretchy="false">]</mo><mo>,</mo><mspace width="thickmathspace"></mspace><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.acos</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">arccos</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> the unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>∊</mo><mo stretchy="false">[</mo><mn>0</mn><mo>;</mo><mi>π</mi><mo stretchy="false">]</mo><mspace width="thinmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \in [{-1};1],\;\mathtt{\operatorname{Math.acos}(x)} = \arccos(x) = \text{ the unique } \; y \in [0; \pi] \, \text{such that} \; \cos(y) = x</annotation></semantics></math></p>

<div>{{EmbedInteractiveExample("pages/js/math-acos.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Math.acos(<var>x</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>x</var></code></dt>
 <dd>コサインを表す数値で、 <code><var>x</var></code> は <code>-1</code> と <code>1</code> の間です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>与えられた数値が <code>-1</code> から <code>1</code> までの場合、その逆余弦 (アークコサイン) をラジアン単位で返します。それ以外の場合は {{jsxref("NaN")}} を返します。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>Math.acos()</code> メソッドは、-1 から 1 までの <code>x</code> に対して、0 から π までのラジアンの数値を返します。<code>x</code> の値がこの範囲を越えている場合、このメソッドは {{jsxref("NaN")}} を返します。</p>

<p><code>acos()</code> は <code>Math</code> の静的メソッドであるため、生成した <code>Math</code> オブジェクトのメソッドとしてではなく、常に <code>Math.acos()</code> として使用するようにしてください (<code>Math</code> はコンストラクターではありません)。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_Math.acos" name="Using_Math.acos">Math.acos() の使用</h3>

<pre class="brush: js notranslate">Math.acos(-2);  // NaN
Math.acos(-1);  // 3.141592653589793
Math.acos(0);   // 1.5707963267948966
Math.acos(0.5); // 1.0471975511965979
Math.acos(1);   // 0
Math.acos(2);   // NaN
</pre>

<p>値が -1 未満か 1 より大きい数値の場合、<code>Math.acos()</code> は {{jsxref("NaN")}} を返します。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-math.acos', 'Math.acos')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Math.acos")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Math.asin()")}}</li>
 <li>{{jsxref("Math.atan()")}}</li>
 <li>{{jsxref("Math.atan2()")}}</li>
 <li>{{jsxref("Math.cos()")}}</li>
 <li>{{jsxref("Math.sin()")}}</li>
 <li>{{jsxref("Math.tan()")}}</li>
</ul>
