---
title: Math.atan2()
slug: Web/JavaScript/Reference/Global_Objects/Math/atan2
tags:
  - JavaScript
  - Math
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/atan2
---
<div>{{JSRef}}</div>

<p><strong><code>Math.atan2()</code></strong> 関数は、<code>Math.atan2(y, x)</code> に対して点 (0, 0) から点 (x, y) までの半直線と、正の x 軸の間の平面上での角度 (ラジアン単位) を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/math-atan2.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Math.atan2(<var>y</var>, <var>x</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>y</var></code></dt>
 <dd>点の y 座標です。</dd>
 <dt><code><var>x</var></code></dt>
 <dd>点の x 座標です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>点 (0, 0) から点 <math><semantics><annotation encoding="TeX">(x,y)</annotation></semantics></math> までの半直線と、正の x 軸の間の (<math><semantics><mrow><mo stretchy="false">[</mo><mo>-</mo><mi>π</mi><mo>,</mo><mi>π</mi><mo stretchy="false">]</mo></mrow><annotation encoding="TeX">[-\pi, \pi]</annotation></semantics></math> 内の) ラジアン単位の角度です。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>Math.atan2()</code> メソッドは、<code>(x, y)</code> 座標のシータ角を表す -π から π までの数値を返します。これは、ラジアン単位で表された、正の X 軸と点 <code>(x, y)</code> の間の反時計回りの角度です。このメソッドへ渡す引数は、初めに y 座標、次に x 座標であることに注意してください。</p>

<p><img alt="A simple diagram showing the angle returned by atan2(y, x)" src="https://mdn.mozillademos.org/files/11557/atan2.png" style="height: 300px; width: 300px;"></p>

<p><code>Math.atan2()</code> は、<code>x</code> と <code>y</code> が別々に渡され、 <code>Math.atan()</code> は2つの引数の比率が渡されます。</p>

<p><code>atan2()</code> は <code>Math</code> の静的メソッドであるため、生成した <code>Math</code> オブジェクトのメソッドとしてではなく、常に <code>Math.atan2()</code> として使用するようにしてください (<code>Math</code> はコンストラクターではありません)。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_Math.atan2" name="Using_Math.atan2">Math.atan2() の使用</h3>

<pre class="brush: js notranslate">Math.atan2(90, 15); // 1.4056476493802699
Math.atan2(15, 90); // 0.16514867741462683

Math.atan2(±0, -0);               // ±PI.
Math.atan2(±0, +0);               // ±0.
Math.atan2(±0, -x);               // ±PI for x &gt; 0.
Math.atan2(±0, x);                // ±0 for x &gt; 0.
Math.atan2(-y, ±0);               // -PI/2 for y &gt; 0.
Math.atan2(y, ±0);                // PI/2 for y &gt; 0.
Math.atan2(±y, -Infinity);        // ±PI for finite y &gt; 0.
Math.atan2(±y, +Infinity);        // ±0 for finite y &gt; 0.
Math.atan2(±Infinity, x);         // ±PI/2 for finite x.
Math.atan2(±Infinity, -Infinity); // ±3*PI/4.
Math.atan2(±Infinity, +Infinity); // ±PI/4.
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
   <td>{{SpecName('ESDraft', '#sec-math.atan2', 'Math.atan2')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Math.atan2")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Math.acos()")}}</li>
 <li>{{jsxref("Math.asin()")}}</li>
 <li>{{jsxref("Math.atan()")}}</li>
 <li>{{jsxref("Math.cos()")}}</li>
 <li>{{jsxref("Math.sin()")}}</li>
 <li>{{jsxref("Math.tan()")}}</li>
</ul>
